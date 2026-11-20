-- PM Agency Academy: databaseschema voor Supabase.
-- Plak dit in Supabase → SQL Editor → New query en klik Run. Opnieuw uitvoeren is veilig.
--
-- Rollen: super_admin (alles, ook rollen wijzigen), admin (inhoud, gebruikers, sales),
-- management (alles inzien, gesprekken en aantekeningen in dossiers toevoegen), user (leren).

-- Profielen: één rij per gebruiker, automatisch aangemaakt bij een nieuw account.
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  email text,
  display_name text not null default '',
  role text not null default 'user',
  start_date date,
  sales_total int not null default 0 check (sales_total >= 0),
  sales_month int not null default 0 check (sales_month >= 0),
  created_at timestamptz not null default now()
);

-- Koppeling met het CRM (Fieldstars): de medewerkercode ("alias") uit de orderexport.
alter table public.profiles add column if not exists crm_code text;
create unique index if not exists profiles_crm_code on public.profiles (lower(crm_code)) where crm_code is not null and crm_code <> '';

-- Rollen (ook bij bestaande databases bijwerken).
alter table public.profiles drop constraint if exists profiles_role_check;
alter table public.profiles add constraint profiles_role_check check (role in ('super_admin', 'admin', 'management', 'user'));

-- Voortgang per gebruiker: workbookantwoorden, quizscores, activiteit.
create table if not exists public.progress (
  user_id uuid primary key references auth.users (id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

-- Samenvatting per gebruiker voor beheerders en de leaderboard.
create table if not exists public.team_summary (
  user_id uuid primary key references auth.users (id) on delete cascade,
  name text not null default '',
  email text,
  done int not null default 0,
  total int not null default 0,
  pct int not null default 0,
  current_id text not null default '',
  current_title text not null default '',
  certs int not null default 0,
  status text not null default 'Junior-Ambassadeur',
  last_active timestamptz not null default now()
);

-- Inhoud die beheerders bewerken: de trainingen (curriculum) en de benefits.
create table if not exists public.app_content (
  key text primary key check (key in ('curriculum', 'benefits')),
  data jsonb not null default '{}'::jsonb,
  updated_by uuid references auth.users (id) on delete set null,
  updated_at timestamptz not null default now()
);

-- Rolcontrole (security definer: leest profiles zonder RLS-lus).
create or replace function public.my_role()
returns text language sql stable security definer set search_path = public as $$
  select coalesce((select role from public.profiles where id = auth.uid()), 'none');
$$;
create or replace function public.is_admin()
returns boolean language sql stable security definer set search_path = public as $$
  select public.my_role() in ('admin', 'super_admin');
$$;
create or replace function public.is_staff()
returns boolean language sql stable security definer set search_path = public as $$
  select public.my_role() in ('admin', 'super_admin', 'management');
$$;
create or replace function public.is_super_admin()
returns boolean language sql stable security definer set search_path = public as $$
  select public.my_role() = 'super_admin';
$$;

-- Nieuw account → profiel met rol 'user'. De naam komt mee als de beheerder iemand toevoegt.
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, email, display_name)
  values (new.id, new.email, coalesce(new.raw_user_meta_data ->> 'name', ''))
  on conflict (id) do nothing;
  return new;
end;
$$;
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users
  for each row execute function public.handle_new_user();

-- Bewaking van profielwijzigingen:
-- iedereen mag zijn eigen naam en startdatum aanpassen; sales alleen beheerders; rollen alleen de super-admin.
create or replace function public.protect_profile()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  if auth.uid() is null then return new; end if; -- service role (serverfunctie) of SQL Editor
  new.id := old.id;
  new.email := old.email;
  new.created_at := old.created_at;
  if new.role is distinct from old.role then
    if not public.is_super_admin() then raise exception 'Alleen de super-admin kan rollen wijzigen'; end if;
    if old.id = auth.uid() then raise exception 'Je kunt je eigen rol niet wijzigen'; end if;
  end if;
  if not public.is_admin() then
    new.sales_total := old.sales_total;
    new.sales_month := old.sales_month;
    new.crm_code := old.crm_code;
  end if;
  return new;
end;
$$;
drop trigger if exists protect_profile on public.profiles;
create trigger protect_profile before update on public.profiles
  for each row execute function public.protect_profile();

-- Profielen voor accounts die al bestonden voordat dit schema draaide.
insert into public.profiles (id, email) select id, email from auth.users on conflict (id) do nothing;

-- Leaderboard: naam, sales en status van iedereen, zonder e-mailadressen of andere profielgegevens.
create or replace function public.get_leaderboard()
returns table (id uuid, name text, sales_month int, sales_total int, status text)
language sql stable security definer set search_path = public as $$
  select p.id,
         coalesce(nullif(p.display_name, ''), nullif(t.name, ''), split_part(p.email, '@', 1)),
         p.sales_month, p.sales_total,
         coalesce(t.status, 'Junior-Ambassadeur')
  from public.profiles p
  left join public.team_summary t on t.user_id = p.id
  where auth.uid() is not null
  order by p.sales_month desc;
$$;
revoke all on function public.get_leaderboard() from public, anon;
grant execute on function public.get_leaderboard() to authenticated;

-- Row Level Security
alter table public.profiles enable row level security;
alter table public.progress enable row level security;
alter table public.team_summary enable row level security;
alter table public.app_content enable row level security;

drop policy if exists "profiles: lezen" on public.profiles;
create policy "profiles: lezen" on public.profiles for select to authenticated
  using (id = auth.uid() or public.is_staff());
drop policy if exists "profiles: wijzigen" on public.profiles;
create policy "profiles: wijzigen" on public.profiles for update to authenticated
  using (id = auth.uid() or public.is_admin()) with check (id = auth.uid() or public.is_admin());

drop policy if exists "progress: eigen lezen" on public.progress;
create policy "progress: eigen lezen" on public.progress for select to authenticated using (user_id = auth.uid());
drop policy if exists "progress: eigen aanmaken" on public.progress;
create policy "progress: eigen aanmaken" on public.progress for insert to authenticated with check (user_id = auth.uid());
drop policy if exists "progress: eigen wijzigen" on public.progress;
create policy "progress: eigen wijzigen" on public.progress for update to authenticated using (user_id = auth.uid()) with check (user_id = auth.uid());

drop policy if exists "team: lezen" on public.team_summary;
create policy "team: lezen" on public.team_summary for select to authenticated using (user_id = auth.uid() or public.is_staff());
drop policy if exists "team: eigen aanmaken" on public.team_summary;
create policy "team: eigen aanmaken" on public.team_summary for insert to authenticated with check (user_id = auth.uid());
drop policy if exists "team: eigen wijzigen" on public.team_summary;
create policy "team: eigen wijzigen" on public.team_summary for update to authenticated using (user_id = auth.uid()) with check (user_id = auth.uid());

drop policy if exists "content: lezen" on public.app_content;
create policy "content: lezen" on public.app_content for select to authenticated using (true);
drop policy if exists "content: beheerder aanmaken" on public.app_content;
create policy "content: beheerder aanmaken" on public.app_content for insert to authenticated with check (public.is_admin());
drop policy if exists "content: beheerder wijzigen" on public.app_content;
create policy "content: beheerder wijzigen" on public.app_content for update to authenticated using (public.is_admin()) with check (public.is_admin());

-- ---------------------------------------------------------------------------
-- Werknemersdossiers
-- ---------------------------------------------------------------------------

-- Gespreksformats (vragen en documenten per gesprekstype). Alleen management en beheer lezen; beheer schrijft.
create table if not exists public.staff_content (
  key text primary key,
  data jsonb not null default '{}'::jsonb,
  updated_by uuid references auth.users (id) on delete set null,
  updated_at timestamptz not null default now()
);

alter table public.staff_content drop constraint if exists staff_content_key_check;
alter table public.staff_content add constraint staff_content_key_check check (key in ('dossier_templates', 'crm_settings'));

-- Gesprekken. Concept = alleen management en beheer; shared = de medewerker ziet het ook.
create table if not exists public.dossier_entries (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  kind text not null,
  held_on date not null default current_date,
  by_name text not null default '',
  answers jsonb not null default '[]'::jsonb,
  notes text not null default '',
  files jsonb not null default '[]'::jsonb,
  shared boolean not null default false,
  created_by uuid references auth.users (id) on delete set null default auth.uid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists dossier_entries_user on public.dossier_entries (user_id);

-- Aantekeningen: ziek, te laat, niet op komen dagen. Nooit zichtbaar voor de medewerker zelf.
create table if not exists public.dossier_notes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  kind text not null check (kind in ('ziek', 'te_laat', 'no_show')),
  on_date date not null default current_date,
  note text not null default '',
  by_name text not null default '',
  created_by uuid references auth.users (id) on delete set null default auth.uid(),
  created_at timestamptz not null default now()
);
create index if not exists dossier_notes_user on public.dossier_notes (user_id);

alter table public.staff_content enable row level security;
alter table public.dossier_entries enable row level security;
alter table public.dossier_notes enable row level security;

drop policy if exists "formats: lezen" on public.staff_content;
create policy "formats: lezen" on public.staff_content for select to authenticated using (public.is_staff());
drop policy if exists "formats: aanmaken" on public.staff_content;
create policy "formats: aanmaken" on public.staff_content for insert to authenticated with check (public.is_admin());
drop policy if exists "formats: wijzigen" on public.staff_content;
create policy "formats: wijzigen" on public.staff_content for update to authenticated using (public.is_admin()) with check (public.is_admin());

drop policy if exists "gesprekken: lezen" on public.dossier_entries;
create policy "gesprekken: lezen" on public.dossier_entries for select to authenticated
  using (public.is_staff() or (user_id = auth.uid() and shared));
drop policy if exists "gesprekken: aanmaken" on public.dossier_entries;
create policy "gesprekken: aanmaken" on public.dossier_entries for insert to authenticated with check (public.is_staff());
drop policy if exists "gesprekken: wijzigen" on public.dossier_entries;
create policy "gesprekken: wijzigen" on public.dossier_entries for update to authenticated using (public.is_staff()) with check (public.is_staff());
drop policy if exists "gesprekken: verwijderen" on public.dossier_entries;
create policy "gesprekken: verwijderen" on public.dossier_entries for delete to authenticated using (public.is_admin());

drop policy if exists "aantekeningen: lezen" on public.dossier_notes;
create policy "aantekeningen: lezen" on public.dossier_notes for select to authenticated using (public.is_staff());
drop policy if exists "aantekeningen: aanmaken" on public.dossier_notes;
create policy "aantekeningen: aanmaken" on public.dossier_notes for insert to authenticated with check (public.is_staff());
drop policy if exists "aantekeningen: verwijderen" on public.dossier_notes;
create policy "aantekeningen: verwijderen" on public.dossier_notes for delete to authenticated using (public.is_staff());

-- Bijlagen in een afgeschermde opslagmap "dossier".
-- Pad per gesprek: <medewerker-id>/<gesprek-id>/<bestand>; formatdocumenten: templates/<type>/<bestand>.
insert into storage.buckets (id, name, public, file_size_limit)
values ('dossier', 'dossier', false, 20971520)
on conflict (id) do update set public = false, file_size_limit = 20971520;

drop policy if exists "dossier: management en beheer" on storage.objects;
create policy "dossier: management en beheer" on storage.objects for all to authenticated
  using (bucket_id = 'dossier' and public.is_staff())
  with check (bucket_id = 'dossier' and public.is_staff());
drop policy if exists "dossier: medewerker leest gedeelde bijlagen" on storage.objects;
create policy "dossier: medewerker leest gedeelde bijlagen" on storage.objects for select to authenticated
  using (
    bucket_id = 'dossier'
    and (storage.foldername(name))[1] = auth.uid()::text
    and exists (
      select 1 from public.dossier_entries e
      where e.id::text = (storage.foldername(name))[2] and e.user_id = auth.uid() and e.shared
    )
  );

-- ---------------------------------------------------------------------------
-- Sales uit het CRM (Fieldstars)
-- Orders worden per order-id opgeslagen (eenmalige upload + dagelijkse synchronisatie van de
-- laatste dagen). De sales per medewerker worden hieruit berekend.
-- ---------------------------------------------------------------------------
create table if not exists public.crm_orders (
  id text primary key,
  code text not null default '',
  name text not null default '',
  order_date date,
  uitval boolean not null default false,
  sales numeric not null default 1,
  netto numeric not null default 1,
  synced_at timestamptz not null default now()
);
create index if not exists crm_orders_code on public.crm_orders (lower(code));
create index if not exists crm_orders_date on public.crm_orders (order_date);

create table if not exists public.sync_runs (
  id uuid primary key default gen_random_uuid(),
  ran_at timestamptz not null default now(),
  source text not null default 'auto',
  ok boolean not null default true,
  orders int not null default 0,
  updated_users int not null default 0,
  message text not null default '',
  unmatched jsonb not null default '[]'::jsonb
);

alter table public.crm_orders enable row level security;
alter table public.sync_runs enable row level security;
drop policy if exists "crm: lezen" on public.crm_orders;
create policy "crm: lezen" on public.crm_orders for select to authenticated using (public.is_staff());
drop policy if exists "crm: aanmaken" on public.crm_orders;
create policy "crm: aanmaken" on public.crm_orders for insert to authenticated with check (public.is_admin());
drop policy if exists "crm: wijzigen" on public.crm_orders;
create policy "crm: wijzigen" on public.crm_orders for update to authenticated using (public.is_admin()) with check (public.is_admin());
drop policy if exists "sync: lezen" on public.sync_runs;
create policy "sync: lezen" on public.sync_runs for select to authenticated using (public.is_staff());
drop policy if exists "sync: aanmaken" on public.sync_runs;
create policy "sync: aanmaken" on public.sync_runs for insert to authenticated with check (public.is_admin());

-- Telt uitval mee? Instelling in staff_content (crm_settings.countUitval), standaard ja.
create or replace function public.crm_count_uitval()
returns boolean language sql stable security definer set search_path = public as $$
  select coalesce((select (data ->> 'countUitval')::boolean from public.staff_content where key = 'crm_settings'), true);
$$;

-- Overzicht per CRM-medewerker (voor de koppelpagina).
create or replace function public.crm_summary()
returns table (code text, name text, total numeric, month numeric, last_order date, orders bigint)
language plpgsql stable security definer set search_path = public as $$
declare
  bruto boolean := public.crm_count_uitval();
  m0 date := date_trunc('month', (now() at time zone 'Europe/Amsterdam'))::date;
begin
  if auth.uid() is not null and not public.is_staff() then raise exception 'Geen toegang'; end if;
  return query
    select o.code, max(o.name),
           sum(case when bruto then o.sales else o.netto end),
           sum(case when o.order_date >= m0 and o.order_date < (m0 + interval '1 month')::date then (case when bruto then o.sales else o.netto end) else 0 end),
           max(o.order_date), count(*)
    from public.crm_orders o
    where o.code <> ''
    group by o.code
    order by 3 desc;
end;
$$;

-- Zet sales_total en sales_month van gekoppelde gebruikers op basis van de orders.
create or replace function public.recompute_sales()
returns int language plpgsql security definer set search_path = public as $$
declare n int;
begin
  if auth.uid() is not null and not public.is_admin() then raise exception 'Alleen beheerders'; end if;
  update public.profiles p
     set sales_total = coalesce(s.total, 0)::int,
         sales_month = coalesce(s.month, 0)::int
    from (select pr.id, cs.total, cs.month
            from public.profiles pr
            left join public.crm_summary() cs on lower(cs.code) = lower(pr.crm_code)
           where pr.crm_code is not null and pr.crm_code <> '') s
   where p.id = s.id;
  get diagnostics n = row_count;
  return n;
end;
$$;

-- ---------------------------------------------------------------------------
-- Toegang voor de app (Data API)
-- Nieuwe Supabase-projecten geven ingelogde gebruikers niet automatisch toegang
-- tot zelfgemaakte tabellen. Wat iemand per rij mag, regelen de policies hierboven.
-- ---------------------------------------------------------------------------
grant usage on schema public to authenticated, service_role;
revoke all on public.profiles, public.progress, public.team_summary, public.app_content,
  public.staff_content, public.dossier_entries, public.dossier_notes, public.crm_orders, public.sync_runs from anon;

grant select, update on public.profiles to authenticated;
grant select, insert, update on public.progress to authenticated;
grant select, insert, update on public.team_summary to authenticated;
grant select, insert, update on public.app_content to authenticated;
grant select, insert, update on public.staff_content to authenticated;
grant select, insert, update, delete on public.dossier_entries to authenticated;
grant select, insert, delete on public.dossier_notes to authenticated;
grant select, insert, update on public.crm_orders to authenticated;
grant select, insert on public.sync_runs to authenticated;

grant all on public.profiles, public.progress, public.team_summary, public.app_content,
  public.staff_content, public.dossier_entries, public.dossier_notes, public.crm_orders, public.sync_runs to service_role;

grant execute on function public.my_role(), public.is_admin(), public.is_staff(),
  public.is_super_admin(), public.get_leaderboard(), public.crm_count_uitval(),
  public.crm_summary(), public.recompute_sales() to authenticated, service_role;
