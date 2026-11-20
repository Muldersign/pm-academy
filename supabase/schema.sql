-- PM Agency Academy: databaseschema voor Supabase.
-- Plak dit in Supabase → SQL Editor → New query en klik Run. Opnieuw uitvoeren is veilig.
--
-- Rollen: super_admin (alles, ook rollen wijzigen), admin (inhoud, gebruikers, sales), user (leren).

-- Profielen: één rij per gebruiker, automatisch aangemaakt bij een nieuw account.
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  email text,
  display_name text not null default '',
  role text not null default 'user' check (role in ('super_admin', 'admin', 'user')),
  start_date date,
  sales_total int not null default 0 check (sales_total >= 0),
  sales_month int not null default 0 check (sales_month >= 0),
  created_at timestamptz not null default now()
);

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
  using (id = auth.uid() or public.is_admin());
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
create policy "team: lezen" on public.team_summary for select to authenticated using (user_id = auth.uid() or public.is_admin());
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
