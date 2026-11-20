-- Optioneel: voorbeeldbenefits. De app toont "voorbeeld" zolang example = true;
-- zodra een beheerder de benefits opslaat verdwijnt die melding.
-- De trainingsinhoud hoeft niet geseed te worden: de app start met TRM 1 en 2 en
-- bewaart de inhoud in de database zodra een beheerder voor het eerst opslaat.
insert into public.app_content (key, data) values ('benefits', '{
  "example": true,
  "items": [
    {"title": "Champions Trip", "desc": "Win een reis met de beste verkopers van PM Agency, zoals de Champions Trip naar Tenerife.", "req": "Winnaars van de salesgame"},
    {"title": "Payday borrel", "desc": "Elke maand vieren we payday samen, met de PM-Pils.", "req": "Voor iedereen"},
    {"title": "ViaVia-bonus", "desc": "Breng je iemand aan die bij ons start? Dan krijgen jullie allebei een bonus.", "req": "Per aangedragen collega"},
    {"title": "Bonus per certificaat", "desc": "Een eenmalige bonus voor elk behaald TRM-certificaat.", "req": "Per afgeronde TRM"},
    {"title": "Doorgroeien naar Ambassadeur", "desc": "Na TRM 1 word je Ambassadeur, met de bijbehorende voordelen.", "req": "TRM 1 behaald"},
    {"title": "Prijzen in de salesgame", "desc": "Beste verkoper, hoogste gemiddelde, hoogste dagscore, meeste werkdagen, beste nieuwkomer en beste recruiter.", "req": "Per periode"}
  ]
}'::jsonb) on conflict (key) do nothing;
