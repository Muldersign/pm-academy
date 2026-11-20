# PM Agency Academy

De trainingsomgeving van PM Agency, in de huisstijl van PM Agency.

- **Trainingen:** modules (TRM 1, TRM 2 en zelf toe te voegen modules) met onderdelen en onderwerpen. Elk onderwerp heeft een video, uitleg, kernpunten, een workbook en een quiz.
- **Openingsregels per onderdeel:** na het vorige onderdeel, vanaf **x sales**, na x werkdagen en/of x maanden na het vorige onderdeel.
- **Certificaten:** per module in te stellen. Nu TRM 1 en TRM 2, downloadbaar als afbeelding.
- **Status:** iedereen start als **Junior-Ambassadeur** en wordt na TRM 1 **Ambassadeur**. Dit is per module in te stellen.
- **The PM Journey:** Rookie, Talent (50), Professional (100), Ster (200), Wereldklasse (500), Legendarisch (750), GOAT (1000 sales).
- **PM Benefits** en een **leaderboard** (deze maand en totaal).
- **Rollen:** super-admin, admin, management en gebruiker.
- **Werknemersdossiers:** per medewerker gesprekken (evaluatie eerste 4 werkdagen, ambassadeurs-, kwartaal- en POP-gesprekken) volgens een eigen format met vragen en documenten, plus aantekeningen (ziek, te laat, niet op komen dagen). Een gesprek is eerst een concept; na delen ziet de medewerker het onder Mijn dossier. Aantekeningen ziet de medewerker nooit.
- **Installeerbaar** als app op telefoon en desktop.

| | Gebruiker | Management | Admin | Super-admin |
| --- | :-: | :-: | :-: | :-: |
| Trainingen volgen, certificaten, journey, leaderboard | ✓ | ✓ | ✓ | ✓ |
| Eigen gedeelde gesprekken zien (Mijn dossier) | ✓ | ✓ | ✓ | ✓ |
| Team, voortgang, sales en dossiers inzien | | ✓ | ✓ | ✓ |
| Gesprekken en aantekeningen toevoegen aan dossiers | | ✓ | ✓ | ✓ |
| Gesprekken verwijderen, gespreksformats bewerken | | | ✓ | ✓ |
| Inhoud bewerken (modules, video, workbook, quiz) | | | ✓ | ✓ |
| Benefits bewerken, sales en startdatum bijwerken | | | ✓ | ✓ |
| Gebruikers toevoegen en verwijderen | | | ✓ | ✓ |
| Management en admins toevoegen, rollen wijzigen | | | | ✓ |

Deze rechten worden afgedwongen in de database en de serverfunctie, niet alleen in de app.

## Techniek

- `src/`: de app. Gewone HTML, CSS en JavaScript, zonder framework.
- `src/curriculum.default.js`: de startinhoud (TRM 1 en 2). Zodra een beheerder voor het eerst opslaat, staat de inhoud in de database.
- `api/users.js`: een Vercel-functie voor gebruikers toevoegen en verwijderen. Gebruikt de service role key van Supabase.
- `supabase/schema.sql`: tabellen, rollen en beveiliging (Row Level Security).
- `public/`: logo, woordmerk, favicon en app-iconen.

Zonder Supabase-gegevens draait de app als **demo**: alles werkt, en alles wordt in de browser bewaard. Bij Profiel kun je wisselen tussen de rollen.

## Live zetten

### 1. Supabase (database en inloggen)

1. Maak een project op [supabase.com](https://supabase.com), regio **Frankfurt (eu-central-1)**.
2. **SQL Editor → New query**: plak [`supabase/schema.sql`](supabase/schema.sql) en klik **Run**. Doe daarna hetzelfde met [`supabase/seed.sql`](supabase/seed.sql) als je de voorbeeldbenefits wilt.
3. **Authentication → Sign In / Providers → Email**: zet **Allow new users to sign up** uit. Alleen mensen die een beheerder toevoegt, kunnen dan inloggen.
4. **Authentication → Emails → Magic Link**: zet de code in de mail, bijvoorbeeld:
   ```html
   <h2>Je inlogcode voor PM Agency Academy</h2>
   <p style="font-size:28px;font-weight:700;letter-spacing:4px">{{ .Token }}</p>
   <p>De code is 1 uur geldig.</p>
   ```
5. **Authentication → Emails → SMTP Settings**: koppel een mailserver (bijvoorbeeld Resend, Postmark of Brevo). De ingebouwde mail van Supabase verstuurt maar een paar mails per uur.
6. **Project Settings → API**: noteer de **Project URL**, de **anon public** key en de **service_role** key.

### 2. Vercel (hosting)

1. Importeer deze repo op [vercel.com/new](https://vercel.com/new). Kies bij Framework preset **Other**; de rest staat in `vercel.json`.
2. Zet onder **Environment Variables**:

   | Naam | Waarde |
   | --- | --- |
   | `SUPABASE_URL` | Project URL |
   | `SUPABASE_ANON_KEY` | anon public key |
   | `SUPABASE_SERVICE_ROLE_KEY` | service_role key (geheim, alleen hier) |

3. Klik **Deploy**.

### 3. Eigen domein

1. In Vercel: **Settings → Domains**, voeg bijvoorbeeld `academy.pmagency.nl` toe en zet het DNS-record dat Vercel toont bij je domeinprovider.
2. In Supabase: **Authentication → URL Configuration**, zet de **Site URL** op dat adres.

### 4. Eerste super-admin

1. In Supabase: **Authentication → Users → Add user**. Vul je e-mailadres in en vink **Auto Confirm User** aan.
2. Voer in de **SQL Editor** uit:
   ```sql
   update public.profiles set role = 'super_admin', display_name = 'Jouw Naam' where email = 'jouw@email.nl';
   ```
3. Log in op de site met je e-mailadres en de code uit de mail. Verkopers en admins voeg je daarna toe in de app via **Beheer → Gebruikers**.

## Dagelijks gebruik

- **Sales bijwerken:** Beheer → Gebruikers, pas "Sales maand" en "Sales totaal" aan en klik **Wijzigingen opslaan**. Aan het begin van een maand klik je **Nieuwe maand starten**.
- **Inhoud aanpassen:** Beheer → Inhoud. Kies links een module, onderdeel of onderwerp en pas rechts de velden aan. Met **+ Nieuwe module** maak je een nieuwe module (specificatie: training of verdieping). Klik onderaan op **Opslaan**.
- **Video's:** plak een link van Loom, YouTube of Vimeo. De video verschijnt direct in de pagina.
- **Gespreksformats:** Beheer → Gespreksformats → Bewerken. Pas de vragen per gesprekstype aan en upload het formatdocument (zoals de junior guide). Management ziet de formats; medewerkers zien de vragen pas als een gesprek met hen is gedeeld.
- **Dossiers:** Beheer → Dossiers, of de knop Dossier bij een gebruiker. Registreer ziek, te laat of niet op komen dagen met datum en toelichting, en leg gesprekken vast met bijlagen.

## Lokaal draaien

```bash
npm run dev                                                    # demo op http://localhost:3000
SUPABASE_URL=... SUPABASE_ANON_KEY=... npm run dev             # met database
```

Na een push naar GitHub zet Vercel de nieuwe versie automatisch live.
