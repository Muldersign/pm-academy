/* Startinhoud van de academy. Wordt gebruikt zolang er nog geen inhoud in de database staat;
   daarna beheren beheerders alles via Beheer → Inhoud. */
window.PM_DEFAULT_CURRICULUM = {
 "version": 1,
 "passMark": 80,
 "tracks": [
  {
   "id": "trm1",
   "code": "TRM 1",
   "title": "De basis",
   "sub": "Onboarding, salesprincipes en tegenwerpingen",
   "kind": "training",
   "certificate": true,
   "published": true,
   "statusOnComplete": "Ambassadeur",
   "modules": [
    {
     "id": "m1-1",
     "code": "1.1",
     "title": "Onboarding",
     "unlock": {
      "prev": false
     },
     "topics": [
      {
       "id": "t1-1-1",
       "title": "Algeheel beleid PM Agency",
       "video": "",
       "core": "Hoe je werkt, bepaalt hoe klanten over PM Agency praten. Dit onderdeel legt de basisafspraken vast: afspraak is afspraak, eerlijk advies boven een snelle sale, en zorgvuldig omgaan met klantgegevens.",
       "points": [
        "Afspraak is afspraak: op tijd, voorbereid en bereikbaar.",
        "Eerlijk advies: je verkoopt alleen wat de klant echt verder helpt.",
        "Klantgegevens gebruik je volgens de AVG, alleen voor het doel waarvoor ze gegeven zijn."
       ],
       "workbook": [
        "Welke drie afspraken uit het beleid vind jij het belangrijkst, en waarom?",
        "Beschrijf een situatie waarin eerlijk advies je op korte termijn een sale kost. Wat doe je?",
        "Hoe zorg jij dat klantgegevens veilig blijven in je dagelijkse werk?"
       ],
       "quiz": [
        {
         "q": "Je bent 10 minuten te laat voor een afspraak. Wat doe je?",
         "options": [
          "Vooraf bellen of appen en een nieuwe tijd voorstellen",
          "Niets, 10 minuten is normaal",
          "De afspraak laten vervallen",
          "Achteraf een excuusmail sturen"
         ],
         "answer": 0
        },
        {
         "q": "Een klant heeft geen baat bij het product. Wat doe je?",
         "options": [
          "Eerlijk zeggen en het gesprek netjes afronden",
          "Toch verkopen, de klant beslist zelf",
          "De prijs verlagen tot het wel past",
          "Zonder uitleg een afspraak over een jaar plannen"
         ],
         "answer": 0
        },
        {
         "q": "Mag je het nummer van een klant gebruiken voor een aanbieding van een vriend?",
         "options": [
          "Nee, gegevens gebruik je alleen voor het doel waarvoor ze gegeven zijn",
          "Ja, het nummer is al bekend",
          "Ja, als de klant tevreden was",
          "Alleen na 30 dagen"
         ],
         "answer": 0
        },
        {
         "q": "Wat betekent 'afspraak is afspraak' in de praktijk?",
         "options": [
          "Je komt toezeggingen na: op tijd, voorbereid en je belt terug wanneer je dat belooft",
          "Je maakt zo veel mogelijk afspraken",
          "De klant maakt alle afspraken",
          "Afspraken staan altijd op papier"
         ],
         "answer": 0
        },
        {
         "q": "Een klant vraagt iets waar je het antwoord niet op weet. Wat doe je?",
         "options": [
          "Eerlijk zeggen dat je het uitzoekt en binnen de afgesproken tijd terugkomen",
          "Een antwoord verzinnen dat logisch klinkt",
          "Het onderwerp veranderen",
          "Doorverwijzen naar Google"
         ],
         "answer": 0
        }
       ]
      },
      {
       "id": "t1-1-2",
       "title": "Verkooptraject",
       "video": "",
       "core": "Elke sale loopt door dezelfde fases. Als je weet in welke fase een klant zit, weet je ook wat je volgende stap is, en wat je nog niet moet doen.",
       "points": [
        "Lead, kwalificeren, afspraak, adviesgesprek, offerte, opvolging, akkoord en planning.",
        "Elke fase heeft één doel. Sla er geen over.",
        "Na het akkoord blijf jij het aanspreekpunt tot de installatie gepland staat."
       ],
       "workbook": [
        "Beschrijf in je eigen woorden het doel van elke fase.",
        "In welke fase verlies jij nu de meeste klanten? Waarom denk je dat?",
        "Wat spreek je aan het einde van een adviesgesprek altijd af?"
       ],
       "quiz": [
        {
         "q": "Wat komt direct na het binnenkomen van een lead?",
         "options": [
          "Kwalificeren",
          "Offerte sturen",
          "Installatie plannen",
          "Korting aanbieden"
         ],
         "answer": 0
        },
        {
         "q": "Waarom sla je geen fase over?",
         "options": [
          "Elke fase legt de basis voor de volgende; overslaan leidt tot afhakers",
          "Omdat het systeem dat verplicht",
          "Dan duurt het gesprek korter",
          "Dat maakt niet uit"
         ],
         "answer": 0
        },
        {
         "q": "Wat is het doel van het adviesgesprek?",
         "options": [
          "De situatie van de klant begrijpen en een passend voorstel doen",
          "Zo snel mogelijk de prijs noemen",
          "De klant laten tekenen zonder vragen",
          "Alleen de techniek uitleggen"
         ],
         "answer": 0
        },
        {
         "q": "Wat doe je na het versturen van de offerte?",
         "options": [
          "Opvolgen op een vooraf afgesproken moment",
          "Wachten tot de klant belt",
          "Direct een tweede offerte sturen",
          "Niets, de offerte spreekt voor zich"
         ],
         "answer": 0
        },
        {
         "q": "Een klant zegt ja. Wanneer is jouw rol klaar?",
         "options": [
          "Als de vervolgstappen tot de installatie duidelijk en gepland zijn",
          "Direct na de handtekening",
          "Na de eerste energierekening",
          "Nooit"
         ],
         "answer": 0
        }
       ]
      },
      {
       "id": "t1-1-3",
       "title": "Zonnepanelen en Saldering",
       "video": "",
       "core": "Een zonnepaneel heeft een vermogen in wattpiek (Wp). In Nederland levert elke Wp per jaar ongeveer 0,85 tot 0,9 kWh op. Tot 1 januari 2027 mag je teruggeleverde stroom wegstrepen tegen je verbruik: de salderingsregeling. Daarna stopt die regeling en wordt eigen verbruik veel belangrijker.",
       "points": [
        "Wattpiek (Wp) is het vermogen onder testcondities; kWh is de energie die je echt opwekt.",
        "Saldering verrekent teruggeleverde kWh met verbruikte kWh. Die regeling eindigt op 1 januari 2027.",
        "Daarna krijg je een terugleververgoeding die meestal lager is dan de stroomprijs, en veel leveranciers rekenen terugleverkosten."
       ],
       "workbook": [
        "Leg saldering uit zoals je het aan een klant van 70 zou uitleggen.",
        "Reken voor: 10 panelen van 430 Wp. Hoeveel kWh levert dat ongeveer op per jaar?",
        "Waarom blijven zonnepanelen interessant na het einde van de saldering?"
       ],
       "quiz": [
        {
         "q": "Wat betekent Wp?",
         "options": [
          "Wattpiek: het vermogen van een paneel onder standaard testcondities",
          "Watt per uur",
          "Het verbruik van een huishouden",
          "De prijs per paneel"
         ],
         "answer": 0
        },
        {
         "q": "Hoeveel kWh levert 4.000 Wp ongeveer op per jaar in Nederland?",
         "options": [
          "Ongeveer 3.400 tot 3.600 kWh",
          "400 kWh",
          "10.000 kWh",
          "40.000 kWh"
         ],
         "answer": 0
        },
        {
         "q": "Wanneer stopt de salderingsregeling?",
         "options": [
          "1 januari 2027",
          "1 januari 2025",
          "1 januari 2031",
          "Hij stopt niet"
         ],
         "answer": 0
        },
        {
         "q": "Wat is saldering?",
         "options": [
          "Teruggeleverde stroom verrekenen met verbruikte stroom",
          "Een subsidie op de aanschaf",
          "Korting op de netbeheerkosten",
          "Een verzekering voor panelen"
         ],
         "answer": 0
        },
        {
         "q": "Wat wordt na het einde van saldering belangrijker?",
         "options": [
          "Zo veel mogelijk je eigen opgewekte stroom zelf gebruiken",
          "Zo veel mogelijk terugleveren",
          "Minder panelen nemen",
          "Panelen op het noorden leggen"
         ],
         "answer": 0
        }
       ]
      },
      {
       "id": "t1-1-4",
       "title": "Thuisbatterij",
       "video": "",
       "core": "Een thuisbatterij slaat overdag opgewekte stroom op, zodat je die 's avonds zelf gebruikt in plaats van terug te leveren. Twee getallen zijn belangrijk: de capaciteit in kWh en het vermogen in kW. Door het einde van saldering en door dynamische contracten wordt een batterij voor steeds meer huishoudens interessant.",
       "points": [
        "Capaciteit (kWh) is hoeveel erin past. Vermogen (kW) is hoe snel hij laadt en ontlaadt.",
        "Meer eigen verbruik betekent minder terugleveren en minder terugleverkosten.",
        "Met een dynamisch contract laadt een batterij als stroom goedkoop is en ontlaadt hij als stroom duur is."
       ],
       "workbook": [
        "Wat is het verschil tussen kWh en kW? Leg het uit met een voorbeeld uit het dagelijks leven.",
        "Voor welk type klant is een thuisbatterij nu al interessant?",
        "Welke vragen stel je om de juiste batterijgrootte te bepalen?"
       ],
       "quiz": [
        {
         "q": "Wat geeft de capaciteit van een batterij aan?",
         "options": [
          "Hoeveel energie hij kan opslaan, in kWh",
          "Hoe snel hij laadt",
          "Hoe lang hij meegaat",
          "Hoe zwaar hij is"
         ],
         "answer": 0
        },
        {
         "q": "Wat zegt het vermogen (kW) van een batterij?",
         "options": [
          "Hoe snel hij kan laden en ontladen",
          "Hoeveel energie erin past",
          "De levensduur",
          "Het rendement van de panelen"
         ],
         "answer": 0
        },
        {
         "q": "Waarom wordt een thuisbatterij interessanter na het einde van saldering?",
         "options": [
          "Terugleveren levert minder op, dus eigen verbruik wordt meer waard",
          "Panelen wekken dan minder op",
          "Batterijen worden dan verplicht",
          "Dat wordt hij niet"
         ],
         "answer": 0
        },
        {
         "q": "Wat kan een batterij met een dynamisch energiecontract?",
         "options": [
          "Laden als stroom goedkoop is en ontladen als stroom duur is",
          "Niets extra's",
          "Gas besparen",
          "De netbeheerkosten naar nul brengen"
         ],
         "answer": 0
        },
        {
         "q": "Welke klant heeft het meeste aan een batterij?",
         "options": [
          "Iemand die overdag veel opwekt en vooral 's avonds verbruikt",
          "Iemand zonder panelen en met een laag verbruik",
          "Iemand die alles overdag verbruikt",
          "Iemand die binnenkort verhuist"
         ],
         "answer": 0
        }
       ]
      },
      {
       "id": "t1-1-5",
       "title": "Kwalificeren van de afspraak",
       "video": "",
       "core": "Een goede afspraak begint met kwalificeren. Je checkt vooraf of de klant het product kan en wil afnemen. Zo voorkom je verloren uren en voer je alleen gesprekken waarin een besluit mogelijk is.",
       "points": [
        "Eigen woning (koop) en een geschikt dak of een geschikte plek.",
        "Alle beslissers zijn bij het gesprek aanwezig.",
        "Je kent het huidige verbruik en de motivatie, en er is een concreet tijdpad."
       ],
       "workbook": [
        "Schrijf jouw vijf vaste kwalificatievragen op.",
        "Wat doe je als de partner van de klant niet bij het gesprek kan zijn?",
        "Beschrijf een afspraak die je achteraf niet had moeten maken. Welke vraag had dat voorkomen?"
       ],
       "quiz": [
        {
         "q": "Waarom moeten alle beslissers bij het gesprek zijn?",
         "options": [
          "Zodat er tijdens het gesprek een besluit genomen kan worden",
          "Zodat je de offerte twee keer kunt uitleggen",
          "Dat is niet nodig",
          "Voor de gezelligheid"
         ],
         "answer": 0
        },
        {
         "q": "Een klant huurt zijn woning. Wat is de juiste stap?",
         "options": [
          "Vaststellen dat hij niet over het dak beslist en de afspraak niet inplannen",
          "Toch de afspraak inplannen",
          "Zonder overleg zelf de verhuurder bellen",
          "Korting geven"
         ],
         "answer": 0
        },
        {
         "q": "Waarom vraag je naar het huidige stroomverbruik?",
         "options": [
          "Om een passend systeem te kunnen adviseren",
          "Om de klant te testen",
          "Omdat de AVG dat vraagt",
          "Om de rekening te controleren"
         ],
         "answer": 0
        },
        {
         "q": "Wat levert goed kwalificeren je op?",
         "options": [
          "Minder verloren tijd en een hogere conversie",
          "Meer afspraken, ongeacht de kwaliteit",
          "Een hogere prijs per paneel",
          "Niets"
         ],
         "answer": 0
        },
        {
         "q": "Welke vraag hoort NIET bij kwalificeren?",
         "options": [
          "Wat is uw favoriete vakantieland?",
          "Bent u eigenaar van de woning?",
          "Wie beslist er mee over de aanschaf?",
          "Wanneer wilt u het geregeld hebben?"
         ],
         "answer": 0
        }
       ]
      }
     ]
    },
    {
     "id": "m1-2",
     "code": "1.2",
     "title": "Salesprincipes",
     "unlock": {
      "prev": true
     },
     "topics": [
      {
       "id": "t1-2-1",
       "title": "Hoe versier jij iemand in de kroeg?",
       "video": "",
       "core": "In de kroeg vraag je niemand in de eerste minuut ten huwelijk. Je maakt contact, toont oprechte interesse, luistert en bouwt vertrouwen op. Een verkoopgesprek werkt precies zo: eerst de klik, dan pas het voorstel.",
       "points": [
        "Binnen enkele seconden beslist iemand of hij je mag.",
        "Stel vragen over de ander en luister meer dan je praat.",
        "Zelfvertrouwen zonder opdringerig te zijn. Timing bepaalt wanneer je de vraag stelt."
       ],
       "workbook": [
        "Welke parallellen zie je tussen versieren en verkopen? Noem er drie.",
        "Hoe maak jij in de eerste minuut van een gesprek contact?",
        "Wanneer weet je dat het moment er is om 'de vraag' te stellen?"
       ],
       "quiz": [
        {
         "q": "Wat is het belangrijkst in de eerste minuut van een gesprek?",
         "options": [
          "Contact en vertrouwen opbouwen",
          "Je product uitleggen",
          "De prijs noemen",
          "Je visitekaartje geven"
         ],
         "answer": 0
        },
        {
         "q": "Wie praat er in het begin vooral?",
         "options": [
          "De klant",
          "Jij",
          "Allebei evenveel",
          "Niemand"
         ],
         "answer": 0
        },
        {
         "q": "Waarom werkt 'direct de vraag stellen' slecht?",
         "options": [
          "Er is nog geen vertrouwen opgebouwd",
          "De klant zegt dan te snel ja",
          "Dat werkt juist goed",
          "Het kost te weinig tijd"
         ],
         "answer": 0
        },
        {
         "q": "Wat is het verschil tussen zelfvertrouwen en opdringerigheid?",
         "options": [
          "Zelfvertrouwen laat ruimte voor de ander, opdringerigheid niet",
          "Er is geen verschil",
          "Opdringerig is altijd beter",
          "Zelfvertrouwen betekent hard praten"
         ],
         "answer": 0
        },
        {
         "q": "Wat laat oprechte interesse zien?",
         "options": [
          "Doorvragen op wat de klant vertelt",
          "Op je telefoon kijken",
          "Steeds over jezelf praten",
          "Snel naar het volgende onderwerp gaan"
         ],
         "answer": 0
        }
       ]
      },
      {
       "id": "t1-2-2",
       "title": "Non-verbale communicatie",
       "video": "",
       "core": "Je lichaam praat altijd mee. Oogcontact, houding, gezichtsuitdrukking en gebaren bepalen of je verhaal geloofwaardig overkomt. Als woorden en lichaamstaal niet kloppen, gelooft de klant je lichaamstaal.",
       "points": [
        "Open houding: armen niet over elkaar, naar de klant toe gericht.",
        "Oogcontact en een echte glimlach bouwen vertrouwen.",
        "Spiegelen, subtiel meebewegen in houding en tempo, versterkt de klik."
       ],
       "workbook": [
        "Film jezelf twee minuten terwijl je je pitch geeft. Wat valt je op aan je lichaamstaal?",
        "Welke non-verbale signalen laten zien dat een klant afhaakt?",
        "Hoe ga je spiegelen zonder dat het nadoen wordt?"
       ],
       "quiz": [
        {
         "q": "Wat gebeurt er als je woorden en je lichaamstaal elkaar tegenspreken?",
         "options": [
          "De klant gelooft eerder je lichaamstaal",
          "De klant gelooft je woorden",
          "Dat merkt niemand",
          "Het gesprek stopt"
         ],
         "answer": 0
        },
        {
         "q": "Welke houding komt open over?",
         "options": [
          "Naar de klant toe gericht, handen zichtbaar",
          "Armen over elkaar",
          "Achterover met je handen in je zakken",
          "Weggedraaid naar de deur"
         ],
         "answer": 0
        },
        {
         "q": "Wat is spiegelen?",
         "options": [
          "Subtiel meebewegen in houding, tempo en volume van de klant",
          "De klant nadoen zodat hij het merkt",
          "Een spiegel meenemen",
          "Precies het tegenovergestelde doen"
         ],
         "answer": 0
        },
        {
         "q": "Een klant leunt achterover en kijkt op zijn horloge. Wat betekent dat waarschijnlijk?",
         "options": [
          "Hij haakt af of heeft weinig tijd",
          "Hij is enthousiast",
          "Hij wil tekenen",
          "Niets"
         ],
         "answer": 0
        },
        {
         "q": "Wat doet goed oogcontact?",
         "options": [
          "Het bouwt vertrouwen en toont aandacht",
          "Het maakt mensen altijd ongemakkelijk",
          "Het is onbeleefd",
          "Het heeft geen effect"
         ],
         "answer": 0
        }
       ]
      },
      {
       "id": "t1-2-3",
       "title": "Ja-flow",
       "video": "",
       "core": "Mensen willen consistent zijn met wat ze eerder zeiden. Als een klant een paar keer achter elkaar ja zegt op kleine, ware uitspraken, voelt een ja op je voorstel als de logische volgende stap.",
       "points": [
        "Begin met vragen waarop het eerlijke antwoord ja is.",
        "Bouw op: van feiten, naar wensen, naar het voorstel.",
        "Een ja-flow werkt alleen met ware uitspraken. Manipuleren breekt vertrouwen."
       ],
       "workbook": [
        "Schrijf een ja-flow van vijf vragen voor een klant met een hoge energierekening.",
        "Waarom werkt een ja-flow volgens jou?",
        "Wat doe je als de klant halverwege nee zegt?"
       ],
       "quiz": [
        {
         "q": "Op welk psychologisch principe rust de ja-flow?",
         "options": [
          "De behoefte om consistent te zijn met wat je eerder zei",
          "Schaarste",
          "Angst",
          "Autoriteit"
         ],
         "answer": 0
        },
        {
         "q": "Welke vraag past het best aan het begin van een ja-flow?",
         "options": [
          "U merkt ook dat de energierekening de laatste jaren flink is gestegen, toch?",
          "Wilt u vandaag tekenen?",
          "Waarom heeft u nog geen panelen?",
          "Hoeveel wilt u uitgeven?"
         ],
         "answer": 0
        },
        {
         "q": "Wat is het risico van een ja-flow met onware uitspraken?",
         "options": [
          "De klant voelt zich gemanipuleerd en het vertrouwen is weg",
          "Geen enkel",
          "Het gesprek gaat sneller",
          "De klant zegt sneller ja"
         ],
         "answer": 0
        },
        {
         "q": "In welke volgorde bouw je een ja-flow op?",
         "options": [
          "Feiten, wensen, voorstel",
          "Voorstel, wensen, feiten",
          "Wensen, voorstel, feiten",
          "Willekeurig"
         ],
         "answer": 0
        },
        {
         "q": "Een klant zegt halverwege nee. Wat doe je?",
         "options": [
          "Doorvragen, begrijpen waarom en daarop aansluiten",
          "Negeren en doorgaan",
          "Het gesprek beëindigen",
          "Dezelfde vraag harder herhalen"
         ],
         "answer": 0
        }
       ]
      },
      {
       "id": "t1-2-4",
       "title": "Gebiedende wijs",
       "video": "",
       "core": "Wie leidt, praat in duidelijke stappen. Met de gebiedende wijs geef je vriendelijk richting: 'Pak er even uw energierekening bij.' In plaats van 'Zou u misschien eventueel...' Klanten volgen graag iemand die weet waar het gesprek naartoe gaat.",
       "points": [
        "Kort, duidelijk en vriendelijk: 'Kijkt u hier even mee.'",
        "Vermijd verkleiners als 'misschien', 'eventueel' en 'een beetje'.",
        "Combineer de gebiedende wijs met een warme toon, niet met druk."
       ],
       "workbook": [
        "Herschrijf in de gebiedende wijs: 'Zou u het misschien leuk vinden om even naar de offerte te kijken?'",
        "Noem vijf momenten in een gesprek waarop je de gebiedende wijs gebruikt.",
        "Wanneer wordt de gebiedende wijs te dwingend?"
       ],
       "quiz": [
        {
         "q": "Welke zin staat in de gebiedende wijs?",
         "options": [
          "Kijkt u hier even mee.",
          "Zou u misschien willen kijken?",
          "Ik dacht dat u misschien wilde kijken.",
          "Wilt u eventueel kijken?"
         ],
         "answer": 0
        },
        {
         "q": "Waarom werkt de gebiedende wijs?",
         "options": [
          "Mensen volgen graag iemand die duidelijk de leiding neemt",
          "Omdat het onbeleefd is",
          "Omdat klanten bang worden",
          "Het werkt niet"
         ],
         "answer": 0
        },
        {
         "q": "Welke woorden vermijd je?",
         "options": [
          "Misschien, eventueel, een beetje",
          "Kijk, pak, vul in",
          "Dank u wel",
          "Goedemorgen"
         ],
         "answer": 0
        },
        {
         "q": "Wat maakt de gebiedende wijs prettig in plaats van dwingend?",
         "options": [
          "Een warme, vriendelijke toon",
          "Harder praten",
          "Sneller praten",
          "Geen oogcontact"
         ],
         "answer": 0
        },
        {
         "q": "Wat is een goed voorbeeld bij de afsluiting?",
         "options": [
          "Zet hier uw handtekening, dan plannen we de installatie meteen in.",
          "Misschien kunt u er nog over nadenken?",
          "Ik weet niet of u wilt tekenen.",
          "Laat maar weten wat u wilt."
         ],
         "answer": 0
        }
       ]
      },
      {
       "id": "t1-2-5",
       "title": "AIDA-model",
       "video": "",
       "core": "AIDA beschrijft hoe iemand van onwetend naar actie gaat: Attention, Interest, Desire, Action. Een sterk gesprek doorloopt die vier stappen in deze volgorde.",
       "points": [
        "Attention: pak de aandacht met iets wat voor deze klant relevant is.",
        "Interest en Desire: maak het persoonlijk en laat zien wat het oplevert.",
        "Action: vraag concreet om de volgende stap."
       ],
       "workbook": [
        "Schrijf voor elke AIDA-stap één zin die jij in een gesprek gebruikt.",
        "Bij welke stap haken klanten bij jou het vaakst af?",
        "Hoe maak jij van interesse echt verlangen?"
       ],
       "quiz": [
        {
         "q": "Waar staat de D in AIDA voor?",
         "options": [
          "Desire",
          "Decision",
          "Demo",
          "Discount"
         ],
         "answer": 0
        },
        {
         "q": "Wat is de juiste volgorde?",
         "options": [
          "Attention, Interest, Desire, Action",
          "Interest, Attention, Action, Desire",
          "Action, Desire, Interest, Attention",
          "Desire, Attention, Interest, Action"
         ],
         "answer": 0
        },
        {
         "q": "Wat hoort bij de Action-fase?",
         "options": [
          "De klant concreet vragen om de volgende stap",
          "Algemene informatie geven",
          "Een grap maken",
          "Stoppen met praten"
         ],
         "answer": 0
        },
        {
         "q": "Hoe wek je Desire?",
         "options": [
          "Laten zien wat het de klant persoonlijk oplevert",
          "Technische specificaties opsommen",
          "De prijs herhalen",
          "Over de concurrent praten"
         ],
         "answer": 0
        },
        {
         "q": "Wat is een goede Attention-opener?",
         "options": [
          "U betaalt waarschijnlijk elke maand te veel voor stroom. Mag ik laten zien hoeveel?",
          "Ik kom u iets verkopen.",
          "Heeft u even?",
          "Mooi weer vandaag."
         ],
         "answer": 0
        }
       ]
      }
     ]
    },
    {
     "id": "m1-3",
     "code": "1.3",
     "title": "Tegenwerpingen",
     "unlock": {
      "prev": true,
      "workdays": 4
     },
     "topics": [
      {
       "id": "t1-3-1",
       "title": "Herkennen van tegenwerpingen",
       "video": "",
       "core": "Niet elke nee is een echte nee. Een tegenwerping kan een echt bezwaar zijn, een vraag om meer informatie, of een uitvlucht om het besluit uit te stellen. Wie het verschil hoort, weet wat hij moet doen.",
       "points": [
        "Echt bezwaar: een concreet probleem, zoals budget of een ongeschikt dak.",
        "Uitvlucht: 'Ik wil er nog even over nadenken', zonder reden.",
        "Veelvoorkomend: prijs, timing, vertrouwen en 'ik moet het nog met mijn partner bespreken'."
       ],
       "workbook": [
        "Schrijf de tien tegenwerpingen op die jij het vaakst hoort.",
        "Welke daarvan zijn meestal een uitvlucht, en welke een echt bezwaar?",
        "Hoe check jij of een bezwaar het echte bezwaar is?"
       ],
       "quiz": [
        {
         "q": "'Ik wil er nog even over nadenken.' Wat is dit meestal?",
         "options": [
          "Een uitvlucht die een onderliggend bezwaar verbergt",
          "Een echt bezwaar over de techniek",
          "Een ja",
          "Een klacht"
         ],
         "answer": 0
        },
        {
         "q": "Wat is een echt bezwaar?",
         "options": [
          "Een concreet probleem dat het besluit blokkeert",
          "Elke opmerking van de klant",
          "Alleen bezwaren over de prijs",
          "Een compliment"
         ],
         "answer": 0
        },
        {
         "q": "Waarom is herkennen belangrijk?",
         "options": [
          "Zo weet je of je moet informeren, doorvragen of een probleem oplossen",
          "Om de klant te verbeteren",
          "Het is niet belangrijk",
          "Om tijd te rekken"
         ],
         "answer": 0
        },
        {
         "q": "Welke tegenwerping gaat over vertrouwen?",
         "options": [
          "Ik ken jullie bedrijf niet",
          "Het is te duur",
          "Mijn dak ligt op het noorden",
          "Ik heb nu geen tijd"
         ],
         "answer": 0
        },
        {
         "q": "Hoe check je of je het echte bezwaar hebt?",
         "options": [
          "Vragen: 'Stel dat dit is opgelost, wilt u dan verder?'",
          "Het bezwaar negeren",
          "Direct korting geven",
          "Het gesprek beëindigen"
         ],
         "answer": 0
        }
       ]
      },
      {
       "id": "t1-3-2",
       "title": "Het 4 stappenplan",
       "video": "",
       "core": "Een tegenwerping beantwoord je niet in één zin. Met het 4 stappenplan ga je er rustig en gestructureerd mee om: luisteren, erkennen, isoleren en beantwoorden.",
       "points": [
        "1. Luister en laat de klant uitpraten. 2. Erken het bezwaar: 'Dat begrijp ik.'",
        "3. Isoleer: 'Is dit het enige dat u tegenhoudt?'",
        "4. Beantwoord en check: 'Geeft dat antwoord op uw vraag?'"
       ],
       "workbook": [
        "Pas het 4 stappenplan toe op 'Het is te duur.' Schrijf elke stap uit.",
        "Welke stap sla jij het vaakst over?",
        "Waarom is isoleren zo belangrijk?"
       ],
       "quiz": [
        {
         "q": "Wat is stap 1?",
         "options": [
          "Luisteren en de klant laten uitpraten",
          "Direct antwoord geven",
          "Korting geven",
          "Van onderwerp wisselen"
         ],
         "answer": 0
        },
        {
         "q": "Wat doe je bij erkennen?",
         "options": [
          "Laten merken dat je het bezwaar begrijpt",
          "Zeggen dat de klant gelijk heeft en stoppen",
          "Het bezwaar weerleggen",
          "Niets"
         ],
         "answer": 0
        },
        {
         "q": "Wat is het doel van isoleren?",
         "options": [
          "Vaststellen of dit het enige bezwaar is",
          "De klant alleen laten",
          "Een tweede afspraak maken",
          "Over iets anders praten"
         ],
         "answer": 0
        },
        {
         "q": "Wat doe je na het beantwoorden?",
         "options": [
          "Checken of je antwoord het bezwaar heeft weggenomen",
          "Meteen weggaan",
          "Een nieuw bezwaar bedenken",
          "Niets meer zeggen"
         ],
         "answer": 0
        },
        {
         "q": "Waarom geef je niet meteen antwoord?",
         "options": [
          "Je kunt dan het echte bezwaar missen en de klant voelt zich niet gehoord",
          "Omdat je het antwoord niet weet",
          "Om tijd te rekken",
          "Dat moet je juist wel"
         ],
         "answer": 0
        }
       ]
      },
      {
       "id": "t1-3-3",
       "title": "Feel, felt, found model",
       "video": "",
       "core": "Feel, felt, found is een eenvoudig model om bezwaren te beantwoorden zonder in discussie te gaan. Je erkent het gevoel, laat zien dat anderen het ook hadden, en vertelt wat zij ontdekten.",
       "points": [
        "Feel: 'Ik begrijp hoe u zich voelt.'",
        "Felt: 'Veel klanten voelden dat in het begin ook zo.'",
        "Found: 'Wat zij merkten, is dat...'"
       ],
       "workbook": [
        "Schrijf een feel-felt-found voor 'Ik vertrouw die batterijen nog niet.'",
        "Schrijf er een voor 'De saldering stopt, dus panelen hebben geen zin meer.'",
        "Wanneer past dit model niet?"
       ],
       "quiz": [
        {
         "q": "Waar staat 'felt' voor?",
         "options": [
          "Dat andere klanten hetzelfde voelden",
          "Wat de klant nu voelt",
          "Wat jij voelt",
          "Wat de concurrent zegt"
         ],
         "answer": 0
        },
        {
         "q": "Wat is het doel van 'found'?",
         "options": [
          "Laten zien wat anderen ontdekten nadat ze toch kozen",
          "De klant tegenspreken",
          "Een korting aankondigen",
          "Het gesprek afsluiten"
         ],
         "answer": 0
        },
        {
         "q": "Waarom werkt dit model?",
         "options": [
          "Het erkent de klant en geeft sociaal bewijs, zonder discussie",
          "Het is lang",
          "Omdat de klant moe wordt",
          "Het werkt niet"
         ],
         "answer": 0
        },
        {
         "q": "Welke zin is een goede 'feel'?",
         "options": [
          "Ik begrijp goed dat u daarover twijfelt.",
          "U heeft ongelijk.",
          "Dat zegt iedereen.",
          "Laten we verdergaan."
         ],
         "answer": 0
        },
        {
         "q": "Wat moet het 'found'-deel altijd zijn?",
         "options": [
          "Waar en controleerbaar",
          "Zo indrukwekkend mogelijk, ook als het niet klopt",
          "Kort en vaag",
          "Over jezelf"
         ],
         "answer": 0
        }
       ]
      },
      {
       "id": "t1-3-4",
       "title": "Trechtervragen",
       "video": "",
       "core": "Met trechtervragen ga je van breed naar smal. Je begint open om de klant te laten vertellen, gaat daarna gericht doorvragen en eindigt met een gesloten vraag die een besluit vastlegt.",
       "points": [
        "Open: 'Wat vindt u het belangrijkst aan...?'",
        "Gericht: 'Wat bedoelt u precies met...?'",
        "Gesloten: 'Dus als we dat oplossen, gaan we ervoor?'"
       ],
       "workbook": [
        "Schrijf een trechter van zes vragen rond het bezwaar 'te duur'.",
        "Wat is het verschil tussen een open en een gesloten vraag? Geef van elk drie voorbeelden.",
        "Waarom eindig je met een gesloten vraag?"
       ],
       "quiz": [
        {
         "q": "Hoe begint een trechter?",
         "options": [
          "Met een open vraag",
          "Met een gesloten vraag",
          "Met de prijs",
          "Met een stelling"
         ],
         "answer": 0
        },
        {
         "q": "Welke vraag is open?",
         "options": [
          "Wat vindt u het belangrijkst bij een nieuw systeem?",
          "Heeft u panelen?",
          "Wilt u tekenen?",
          "Is het dak plat?"
         ],
         "answer": 0
        },
        {
         "q": "Waarmee eindig je de trechter?",
         "options": [
          "Een gesloten vraag die een besluit vastlegt",
          "Een nieuwe open vraag",
          "Een grap",
          "Niets"
         ],
         "answer": 0
        },
        {
         "q": "Wat is het doel van trechtervragen?",
         "options": [
          "Van algemeen naar het echte punt gaan en naar een besluit toewerken",
          "De klant verwarren",
          "Tijd vullen",
          "De klant testen"
         ],
         "answer": 0
        },
        {
         "q": "Welke vraag past in het midden van de trechter?",
         "options": [
          "Wat bedoelt u precies met 'te duur'?",
          "Tekenen we?",
          "Hoe heet uw hond?",
          "Heeft u nog vragen?"
         ],
         "answer": 0
        }
       ]
      },
      {
       "id": "t1-3-5",
       "title": "De kracht van stilte",
       "video": "",
       "core": "Na een belangrijke vraag of na het noemen van de prijs zwijg je. Stilte geeft de klant ruimte om na te denken en laat zien dat je zeker bent van je voorstel. Wie de stilte vult, geeft vaak onnodig korting of twijfel weg.",
       "points": [
        "Stel je afsluitvraag en wacht tot de klant antwoordt.",
        "Stilte voelt langer dan hij is. Tel rustig in je hoofd.",
        "Stilte na een antwoord laat de klant vaak meer vertellen."
       ],
       "workbook": [
        "Wanneer vulde jij een stilte terwijl je beter had kunnen zwijgen?",
        "Oefen met een collega: noem de prijs en zwijg. Hoe voelde dat?",
        "Op welke drie momenten in een gesprek ga jij bewust stil zijn?"
       ],
       "quiz": [
        {
         "q": "Wat doe je direct nadat je de prijs hebt genoemd?",
         "options": [
          "Zwijgen en de klant laten reageren",
          "Uitleggen waarom het goedkoop is",
          "Korting aanbieden",
          "Van onderwerp veranderen"
         ],
         "answer": 0
        },
        {
         "q": "Wat is het risico als jij de stilte vult?",
         "options": [
          "Je geeft twijfel of korting weg",
          "Er is geen risico",
          "De klant tekent sneller",
          "Het gesprek wordt gezelliger"
         ],
         "answer": 0
        },
        {
         "q": "Waarom werkt stilte?",
         "options": [
          "De klant krijgt ruimte om na te denken en jij straalt zekerheid uit",
          "De klant verveelt zich",
          "Het moet ongemakkelijk zijn",
          "Het werkt niet"
         ],
         "answer": 0
        },
        {
         "q": "Wat kan stilte na een antwoord opleveren?",
         "options": [
          "De klant vertelt meer",
          "De klant gaat weg",
          "Niets",
          "Een klacht"
         ],
         "answer": 0
        },
        {
         "q": "Hoe ervaar je stilte meestal zelf?",
         "options": [
          "Langer dan hij is",
          "Korter dan hij is",
          "Precies zo lang als hij is",
          "Je merkt hem niet"
         ],
         "answer": 0
        }
       ]
      },
      {
       "id": "t1-3-6",
       "title": "Bouncen",
       "video": "",
       "core": "Bij bouncen kaats je de tegenwerping terug als reden om juist wél te kiezen. 'Ik heb nu geen geld' wordt: 'Juist daarom is het slim om te kijken hoe u maandelijks kunt besparen.' Je draait het bezwaar om naar een argument.",
       "points": [
        "Gebruik woorden als 'juist daarom' en 'precies daarom'.",
        "Bounce alleen als het argument echt klopt voor deze klant.",
        "Combineer bouncen met een vraag, zodat je de klant meeneemt."
       ],
       "workbook": [
        "Bounce deze tegenwerping: 'De saldering stopt, dus het loont niet meer.'",
        "Bounce: 'Ik ben al 68, dat verdien ik nooit meer terug.'",
        "Wanneer moet je niet bouncen?"
       ],
       "quiz": [
        {
         "q": "Wat is bouncen?",
         "options": [
          "Een tegenwerping omdraaien naar een reden om wel te kiezen",
          "Het gesprek beëindigen",
          "De klant negeren",
          "Korting geven"
         ],
         "answer": 0
        },
        {
         "q": "Welke woorden horen bij bouncen?",
         "options": [
          "Juist daarom",
          "Helaas",
          "Misschien",
          "Sorry"
         ],
         "answer": 0
        },
        {
         "q": "Wanneer bounce je NIET?",
         "options": [
          "Als het argument voor deze klant niet klopt",
          "Bij elke prijsvraag",
          "Als de klant lacht",
          "Je bounce't altijd"
         ],
         "answer": 0
        },
        {
         "q": "Klant: 'Ik heb het druk.' Welke bounce past?",
         "options": [
          "Juist daarom regelen wij alles voor u, zodat het u geen tijd kost.",
          "Dan kom ik later terug.",
          "Dan stoppen we.",
          "Druk is goed."
         ],
         "answer": 0
        },
        {
         "q": "Waarom combineer je bouncen met een vraag?",
         "options": [
          "Zo neem je de klant actief mee in de redenering",
          "Om tijd te rekken",
          "Dat is niet nodig",
          "Om de klant te testen"
         ],
         "answer": 0
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "trm2",
   "code": "TRM 2",
   "title": "Mindset en invloed",
   "sub": "Motivatie, Cialdini en het oneindige spel",
   "kind": "training",
   "certificate": true,
   "published": true,
   "statusOnComplete": "",
   "modules": [
    {
     "id": "m2-1",
     "code": "2.1",
     "title": "Mindset en Motivatie",
     "unlock": {
      "prev": true,
      "sales": 100
     },
     "topics": [
      {
       "id": "t2-1-1",
       "title": "Non-verbale communicatie 2.0",
       "video": "",
       "core": "In TRM 1 leerde je je eigen lichaamstaal inzetten. Nu leer je die van de klant lezen. Let op clusters van signalen en op momenten waarop woorden en lichaam niet kloppen: daar zit de echte twijfel.",
       "points": [
        "Lees clusters, nooit één los signaal.",
        "Micro-expressies duren een fractie van een seconde en verraden echte emotie.",
        "Let op veranderingen: een klant die ineens achterover leunt, doet dat om een reden."
       ],
       "workbook": [
        "Noem drie clusters van signalen die koopbereidheid laten zien.",
        "Noem drie clusters die twijfel laten zien.",
        "Beschrijf een gesprek waarin lichaamstaal iets anders zei dan woorden."
       ],
       "quiz": [
        {
         "q": "Waarom lees je clusters in plaats van één signaal?",
         "options": [
          "Eén signaal kan veel betekenen; een combinatie is betrouwbaarder",
          "Clusters zijn makkelijker",
          "Losse signalen bestaan niet",
          "Dat maakt niet uit"
         ],
         "answer": 0
        },
        {
         "q": "Wat is een micro-expressie?",
         "options": [
          "Een heel korte gezichtsuitdrukking die echte emotie verraadt",
          "Een klein handgebaar",
          "Een kort gesprek",
          "Een lange glimlach"
         ],
         "answer": 0
        },
        {
         "q": "Een klant zegt 'klinkt goed' maar schudt licht nee. Wat doe je?",
         "options": [
          "Doorvragen naar wat hem nog dwarszit",
          "Doorgaan naar tekenen",
          "Niets",
          "Hem corrigeren"
         ],
         "answer": 0
        },
        {
         "q": "Welk signaal past bij koopbereidheid?",
         "options": [
          "Naar voren leunen en de offerte vastpakken",
          "Armen over elkaar en wegkijken",
          "Op de klok kijken",
          "Opstaan"
         ],
         "answer": 0
        },
        {
         "q": "Waar let je vooral op?",
         "options": [
          "Veranderingen in houding en gedrag tijdens het gesprek",
          "Alleen de kleding",
          "De inrichting van het huis",
          "Niets"
         ],
         "answer": 0
        }
       ]
      },
      {
       "id": "t2-1-2",
       "title": "Luisteropdracht",
       "video": "",
       "core": "Echt luisteren is een vaardigheid. Met LSD, Luisteren, Samenvatten en Doorvragen, laat je merken dat je de klant begrijpt en haal je informatie boven die anderen missen.",
       "points": [
        "Luisteren: niet onderbreken en niet al je antwoord bedenken.",
        "Samenvatten: 'Als ik u goed begrijp...'",
        "Doorvragen: 'Wat bedoelt u daarmee?'"
       ],
       "workbook": [
        "Neem een gesprek op (met toestemming) en tel hoe vaak jij onderbreekt.",
        "Schrijf drie samenvattingszinnen op die je standaard gaat gebruiken.",
        "Wat hoorde je in je laatste gesprek pas toen je doorvroeg?"
       ],
       "quiz": [
        {
         "q": "Waar staat LSD voor?",
         "options": [
          "Luisteren, Samenvatten, Doorvragen",
          "Lachen, Spreken, Doen",
          "Leren, Schrijven, Delen",
          "Luisteren, Spreken, Danken"
         ],
         "answer": 0
        },
        {
         "q": "Wat doe je bij samenvatten?",
         "options": [
          "In je eigen woorden herhalen wat de klant zei en checken of het klopt",
          "Je eigen verhaal vertellen",
          "De offerte samenvatten",
          "Niets"
         ],
         "answer": 0
        },
        {
         "q": "Wat is de grootste valkuil bij luisteren?",
         "options": [
          "Je antwoord al bedenken terwijl de klant nog praat",
          "Te goed luisteren",
          "Aantekeningen maken",
          "Knikken"
         ],
         "answer": 0
        },
        {
         "q": "Waarom vraag je door?",
         "options": [
          "Om onder de oppervlakte de echte motivatie te vinden",
          "Om de klant te irriteren",
          "Om het gesprek te rekken",
          "Dat is niet nodig"
         ],
         "answer": 0
        },
        {
         "q": "Welke zin is een goede samenvatting?",
         "options": [
          "Als ik u goed begrijp, wilt u vooral zekerheid over uw maandlasten?",
          "Oké.",
          "Dat zegt iedereen.",
          "Laten we verdergaan."
         ],
         "answer": 0
        }
       ]
      },
      {
       "id": "t2-1-3",
       "title": "Intonatie",
       "video": "",
       "core": "Hoe je iets zegt, bepaalt of het overtuigt. Een zin die omhoog eindigt, klinkt als twijfel. Een zin die omlaag eindigt, klinkt zeker. Met tempo, volume en pauzes stuur je de aandacht.",
       "points": [
        "Eindig stellingen omlaag en vragen omhoog.",
        "Vertraag bij je belangrijkste punt en zet er een pauze voor.",
        "Varieer: een monotone stem verliest de aandacht."
       ],
       "workbook": [
        "Spreek je prijsuitleg in en luister terug. Waar eindig je omhoog terwijl het een stelling is?",
        "Bij welk deel van je pitch ga je vertragen?",
        "Hoe klinkt jouw stem als je zenuwachtig bent?"
       ],
       "quiz": [
        {
         "q": "Hoe eindig je een stellige uitspraak?",
         "options": [
          "Omlaag",
          "Omhoog",
          "Fluisterend",
          "Met een lach"
         ],
         "answer": 0
        },
        {
         "q": "Wat doe je bij je belangrijkste punt?",
         "options": [
          "Vertragen en er een pauze voor zetten",
          "Versnellen",
          "Harder praten",
          "Het overslaan"
         ],
         "answer": 0
        },
        {
         "q": "Wat is het effect van een monotone stem?",
         "options": [
          "De klant verliest de aandacht",
          "Het klinkt professioneel",
          "Het overtuigt meer",
          "Geen effect"
         ],
         "answer": 0
        },
        {
         "q": "Wat gebeurt er als je de prijs met een stijgende toon noemt?",
         "options": [
          "Het klinkt alsof je twijfelt",
          "Het klinkt zeker",
          "Het klinkt goedkoper",
          "Niets"
         ],
         "answer": 0
        },
        {
         "q": "Waarom neem je jezelf op?",
         "options": [
          "Om te horen hoe je echt klinkt",
          "Voor de lol",
          "Voor de klant",
          "Het is verplicht"
         ],
         "answer": 0
        }
       ]
      },
      {
       "id": "t2-1-4",
       "title": "Body Language",
       "video": "",
       "core": "Je houding beïnvloedt hoe anderen je zien en hoe jij je voelt. Een rechte, ontspannen houding, rustige gebaren en een bewuste plek aan tafel maken je overtuigender.",
       "points": [
        "Sta en zit rechtop met ontspannen schouders.",
        "Rustige gebaren met open handpalmen; niet friemelen.",
        "Kies je plek: naast of schuin tegenover de klant werkt beter dan recht tegenover."
       ],
       "workbook": [
        "Wat is jouw zenuwgewoonte (friemelen, pen klikken, wiebelen)? Hoe stop je die?",
        "Waar ga je zitten aan de keukentafel van een klant, en waarom?",
        "Welke houding neem je aan vlak voor je aanbelt?"
       ],
       "quiz": [
        {
         "q": "Waar zit je het liefst ten opzichte van de klant?",
         "options": [
          "Naast of schuin tegenover, zodat je samen kijkt",
          "Recht tegenover, als bij een onderhandeling",
          "Zo ver mogelijk weg",
          "Achter de klant"
         ],
         "answer": 0
        },
        {
         "q": "Wat stralen open handpalmen uit?",
         "options": [
          "Eerlijkheid en openheid",
          "Agressie",
          "Verveling",
          "Haast"
         ],
         "answer": 0
        },
        {
         "q": "Wat doe je met zenuwgewoontes?",
         "options": [
          "Je er bewust van worden en ze vervangen door rustige gebaren",
          "Negeren",
          "Versterken",
          "Aan de klant uitleggen"
         ],
         "answer": 0
        },
        {
         "q": "Waarom zit je rechtop?",
         "options": [
          "Het straalt zelfvertrouwen uit en helpt je je zekerder te voelen",
          "Omdat het moet",
          "Het maakt niet uit",
          "Om langer te lijken"
         ],
         "answer": 0
        },
        {
         "q": "Wat doe je vlak voor je aanbelt?",
         "options": [
          "Een rustige, rechte houding aannemen en ademhalen",
          "Je telefoon checken",
          "Snel je haar fatsoeneren en rennen",
          "Niets"
         ],
         "answer": 0
        }
       ]
      },
      {
       "id": "t2-1-5",
       "title": "Motivatie",
       "video": "",
       "core": "Motivatie komt in twee soorten. Extrinsieke motivatie komt van buiten: geld, prijzen, erkenning. Intrinsieke motivatie komt van binnen: plezier, groei, trots. Extrinsiek geeft een duw, intrinsiek houdt je op de lange termijn gaande.",
       "points": [
        "Extrinsiek: bonussen, de leaderboard, complimenten.",
        "Intrinsiek: beter worden, mensen echt helpen, trots op je vak.",
        "Motivatie zakt soms. Discipline en routines houden je dan op koers."
       ],
       "workbook": [
        "Wat motiveert jou van buitenaf? En van binnenuit?",
        "Wat doe je op een dag dat je geen zin hebt?",
        "Welke routine helpt jou om consistent te presteren?"
       ],
       "quiz": [
        {
         "q": "Wat is intrinsieke motivatie?",
         "options": [
          "Motivatie die van binnenuit komt, zoals plezier en groei",
          "Een bonus",
          "Een prijs",
          "Een compliment van je manager"
         ],
         "answer": 0
        },
        {
         "q": "Wat is extrinsieke motivatie?",
         "options": [
          "Motivatie door beloningen van buitenaf",
          "Plezier in je werk",
          "Nieuwsgierigheid",
          "Trots"
         ],
         "answer": 0
        },
        {
         "q": "Welke soort houdt je het langst gaande?",
         "options": [
          "Intrinsieke motivatie",
          "Extrinsieke motivatie",
          "Geen van beide",
          "Allebei even kort"
         ],
         "answer": 0
        },
        {
         "q": "Wat helpt als de motivatie wegvalt?",
         "options": [
          "Discipline en vaste routines",
          "Wachten tot de zin terugkomt",
          "Stoppen",
          "Klagen"
         ],
         "answer": 0
        },
        {
         "q": "Welke motivatie is extrinsiek?",
         "options": [
          "Bovenaan de leaderboard staan",
          "Voldoening na een goed gesprek",
          "Beter worden in je vak",
          "Mensen helpen"
         ],
         "answer": 0
        }
       ]
      },
      {
       "id": "t2-1-6",
       "title": "Jouw drijfveer",
       "video": "",
       "core": "Je drijfveer is de reden waarom je opstaat. Als die helder is, houd je het vol op zware dagen. Koppel je drijfveer aan concrete, meetbare doelen, dan wordt hij richting.",
       "points": [
        "Je drijfveer is persoonlijk. Niemand kan hem voor je invullen.",
        "Maak doelen SMART: Specifiek, Meetbaar, Acceptabel, Realistisch, Tijdgebonden.",
        "Schrijf je drijfveer op en lees hem dagelijks."
       ],
       "workbook": [
        "Wat is jouw drijfveer? Schrijf het op in één zin.",
        "Wat is je SMART-doel voor de komende drie maanden?",
        "Hoe herinner je jezelf dagelijks aan je drijfveer?"
       ],
       "quiz": [
        {
         "q": "Waarom is een heldere drijfveer belangrijk?",
         "options": [
          "Hij houdt je gaande op zware dagen",
          "Hij is verplicht",
          "Hij verhoogt automatisch je salaris",
          "Hij is niet belangrijk"
         ],
         "answer": 0
        },
        {
         "q": "Waar staat de M in SMART voor?",
         "options": [
          "Meetbaar",
          "Makkelijk",
          "Mooi",
          "Maandelijks"
         ],
         "answer": 0
        },
        {
         "q": "Welk doel is SMART?",
         "options": [
          "Ik sluit in november 25 sales af",
          "Ik wil beter worden",
          "Ik wil veel verdienen",
          "Ik doe mijn best"
         ],
         "answer": 0
        },
        {
         "q": "Wie bepaalt jouw drijfveer?",
         "options": [
          "Jijzelf",
          "Je manager",
          "Je collega's",
          "De klant"
         ],
         "answer": 0
        },
        {
         "q": "Wat helpt om je drijfveer levend te houden?",
         "options": [
          "Hem opschrijven en dagelijks lezen",
          "Hem vergeten",
          "Hem elke week veranderen",
          "Er niet over nadenken"
         ],
         "answer": 0
        }
       ]
      },
      {
       "id": "t2-1-7",
       "title": "Mindset",
       "video": "",
       "core": "Psycholoog Carol Dweck onderscheidt een fixed mindset en een growth mindset. Met een fixed mindset denk je dat talent vastligt. Met een growth mindset weet je dat je beter wordt door oefening, feedback en fouten.",
       "points": [
        "Fixed: 'Ik ben gewoon geen afsluiter.'",
        "Growth: 'Ik kan nog niet goed afsluiten, maar ik leer het.'",
        "Een afwijzing is feedback, geen oordeel over jou als persoon."
       ],
       "workbook": [
        "Welke fixed gedachte heb jij over jezelf als verkoper? Herschrijf hem als growth.",
        "Wat heb je geleerd van je laatste afwijzing?",
        "Van wie vraag je deze week feedback?"
       ],
       "quiz": [
        {
         "q": "Wie bedacht het onderscheid tussen fixed en growth mindset?",
         "options": [
          "Carol Dweck",
          "Robert Cialdini",
          "Simon Sinek",
          "Stephen Covey"
         ],
         "answer": 0
        },
        {
         "q": "Welke uitspraak past bij een growth mindset?",
         "options": [
          "Ik kan het nog niet, maar ik leer het",
          "Ik ben hier gewoon slecht in",
          "Talent heb je of heb je niet",
          "Fouten zijn een teken van zwakte"
         ],
         "answer": 0
        },
        {
         "q": "Hoe kijk je met een growth mindset naar een afwijzing?",
         "options": [
          "Als feedback om van te leren",
          "Als bewijs dat je niet goed bent",
          "Als pech",
          "Als schuld van de klant"
         ],
         "answer": 0
        },
        {
         "q": "Wat is een kenmerk van een fixed mindset?",
         "options": [
          "Feedback vermijden",
          "Uitdagingen opzoeken",
          "Leren van fouten",
          "Doorzetten"
         ],
         "answer": 0
        },
        {
         "q": "Welk woord maakt van een fixed gedachte een growth gedachte?",
         "options": [
          "Nog",
          "Nooit",
          "Altijd",
          "Misschien"
         ],
         "answer": 0
        }
       ]
      },
      {
       "id": "t2-1-8",
       "title": "Cirkel van Invloed",
       "video": "",
       "core": "Stephen Covey beschrijft twee cirkels. De cirkel van betrokkenheid bevat alles waar je je zorgen over maakt. De cirkel van invloed bevat waar je echt iets aan kunt doen. Proactieve mensen steken hun energie in de cirkel van invloed en zien die daardoor groeien.",
       "points": [
        "Buiten je invloed: het weer, de stroomprijs, het nieuws, het humeur van de klant.",
        "Binnen je invloed: je voorbereiding, je aantal gesprekken, je houding.",
        "Klagen over wat je niet kunt veranderen kost energie die je niet in jezelf steekt."
       ],
       "workbook": [
        "Schrijf vijf dingen op die buiten jouw invloed liggen, maar waar je je wel druk om maakt.",
        "Schrijf vijf dingen op die binnen je invloed liggen.",
        "Wat ga je deze week anders doen?"
       ],
       "quiz": [
        {
         "q": "Uit wiens werk komt de cirkel van invloed?",
         "options": [
          "Stephen Covey",
          "Simon Sinek",
          "Carol Dweck",
          "Robert Cialdini"
         ],
         "answer": 0
        },
        {
         "q": "Wat ligt binnen je cirkel van invloed?",
         "options": [
          "Hoe goed je je voorbereidt",
          "De energieprijs",
          "Het weer",
          "Het nieuws"
         ],
         "answer": 0
        },
        {
         "q": "Wat doen proactieve mensen?",
         "options": [
          "Hun energie richten op wat ze kunnen beïnvloeden",
          "Klagen over omstandigheden",
          "Afwachten",
          "Anderen de schuld geven"
         ],
         "answer": 0
        },
        {
         "q": "Wat gebeurt er als je focust op je cirkel van invloed?",
         "options": [
          "Die cirkel groeit",
          "Die cirkel krimpt",
          "Er verandert niets",
          "Je verliest invloed"
         ],
         "answer": 0
        },
        {
         "q": "Wat ligt buiten je invloed?",
         "options": [
          "Het besluit van de overheid over saldering",
          "Hoeveel deuren je vandaag aanbelt",
          "Je houding",
          "Je kennis"
         ],
         "answer": 0
        }
       ]
      },
      {
       "id": "t2-1-9",
       "title": "The rule of 3",
       "video": "",
       "core": "Drie is het getal dat blijft hangen. Drie argumenten voelen compleet, twee voelen mager en vier zijn te veel om te onthouden. Gebruik de rule of 3 in je pitch, in je samenvatting en bij het presenteren van opties.",
       "points": [
        "Geef drie redenen, niet zeven.",
        "Vat een gesprek samen in drie punten.",
        "Bij opties werkt een keuze uit drie het best; de middelste wordt vaak gekozen."
       ],
       "workbook": [
        "Wat zijn jouw drie sterkste argumenten voor zonnepanelen op dit moment?",
        "Vat je laatste gesprek samen in drie punten.",
        "Hoe zou jij drie pakketten presenteren?"
       ],
       "quiz": [
        {
         "q": "Waarom werkt drie zo goed?",
         "options": [
          "Het voelt compleet en blijft goed hangen",
          "Omdat het oneven is",
          "Het werkt niet",
          "Omdat het kort is"
         ],
         "answer": 0
        },
        {
         "q": "Hoeveel argumenten geef je bij voorkeur?",
         "options": [
          "Drie",
          "Eén",
          "Zeven",
          "Tien"
         ],
         "answer": 0
        },
        {
         "q": "Welke optie wordt bij drie pakketten vaak gekozen?",
         "options": [
          "De middelste",
          "De goedkoopste",
          "De duurste",
          "Geen"
         ],
         "answer": 0
        },
        {
         "q": "Hoe gebruik je de rule of 3 aan het einde van een gesprek?",
         "options": [
          "Door samen te vatten in drie punten",
          "Door drie keer de prijs te noemen",
          "Door drie keer te bellen",
          "Niet"
         ],
         "answer": 0
        },
        {
         "q": "Wat is het risico van te veel argumenten?",
         "options": [
          "De klant onthoudt niets en de sterkste argumenten raken ondergesneeuwd",
          "Er is geen risico",
          "De klant tekent sneller",
          "Je komt deskundiger over"
         ],
         "answer": 0
        }
       ]
      }
     ]
    },
    {
     "id": "m2-2",
     "code": "2.2",
     "title": "De 7 principes van invloed van Cialdini",
     "unlock": {
      "prev": true,
      "months": 1
     },
     "topics": [
      {
       "id": "t2-2-1",
       "title": "Robert Cialdini",
       "video": "",
       "core": "Robert Cialdini is een Amerikaanse psycholoog die onderzocht waarom mensen ja zeggen. In zijn boek Influence (1984) beschreef hij zes principes van overtuigen. In Pre-Suasion (2016) voegde hij een zevende toe: eenheid.",
       "points": [
        "De principes werken omdat ons brein snelle vuistregels gebruikt.",
        "Ze werken het best als ze eerlijk en waar zijn.",
        "Misbruik, zoals nep-schaarste of verzonnen reviews, breekt vertrouwen en is bij PM Agency niet toegestaan."
       ],
       "workbook": [
        "Welk principe gebruik jij al onbewust?",
        "Voor welk principe ben je zelf als consument gevallen?",
        "Waarom is eerlijk toepassen belangrijk voor PM Agency?"
       ],
       "quiz": [
        {
         "q": "Hoe heet het bekendste boek van Cialdini?",
         "options": [
          "Influence",
          "Start with Why",
          "The Infinite Game",
          "Mindset"
         ],
         "answer": 0
        },
        {
         "q": "Hoeveel principes beschreef hij oorspronkelijk?",
         "options": [
          "Zes",
          "Vijf",
          "Zeven",
          "Tien"
         ],
         "answer": 0
        },
        {
         "q": "Welk principe kwam er later bij?",
         "options": [
          "Eenheid",
          "Schaarste",
          "Autoriteit",
          "Sympathie"
         ],
         "answer": 0
        },
        {
         "q": "Waarom werken deze principes?",
         "options": [
          "Ons brein gebruikt snelle vuistregels om te beslissen",
          "Mensen zijn dom",
          "Ze werken alleen bij ouderen",
          "Ze werken niet"
         ],
         "answer": 0
        },
        {
         "q": "Wat is misbruik van de principes?",
         "options": [
          "Een nep-deadline verzinnen",
          "Een echte klantreview laten zien",
          "Eerst iets van waarde geven",
          "Je certificaten tonen"
         ],
         "answer": 0
        }
       ]
      },
      {
       "id": "t2-2-2",
       "title": "1. Wederkerigheid",
       "video": "",
       "core": "Als iemand iets voor ons doet, willen we iets terugdoen. Geef daarom eerst: echte aandacht, nuttig advies of een persoonlijke berekening. Wie eerst geeft, krijgt vaker iets terug.",
       "points": [
        "Geef iets van waarde voordat je iets vraagt.",
        "Persoonlijk en onverwacht werkt het sterkst.",
        "Advies zonder druk bouwt goodwill op; de klant wil iets terugdoen."
       ],
       "workbook": [
        "Wat geef jij een klant voordat je iets vraagt?",
        "Hoe maak je dat persoonlijk?",
        "Hoe vraag je na een goed gesprek om een doorverwijzing?"
       ],
       "quiz": [
        {
         "q": "Wat is wederkerigheid?",
         "options": [
          "De neiging iets terug te doen als iemand iets voor je deed",
          "Iets twee keer zeggen",
          "Korting geven",
          "Een contract"
         ],
         "answer": 0
        },
        {
         "q": "Wat werkt het sterkst?",
         "options": [
          "Iets persoonlijks en onverwachts geven",
          "Een standaardfolder",
          "Niets geven",
          "Iets geven en direct terugvragen"
         ],
         "answer": 0
        },
        {
         "q": "Welk voorbeeld past?",
         "options": [
          "Gratis een persoonlijke besparingsberekening maken",
          "De klant onder druk zetten",
          "Een hoge prijs noemen",
          "De klant laten wachten"
         ],
         "answer": 0
        },
        {
         "q": "Wanneer vraag je om iets terug, zoals een doorverwijzing?",
         "options": [
          "Nadat je eerst waarde hebt gegeven",
          "Direct bij binnenkomst",
          "Nooit",
          "Voordat je je voorstelt"
         ],
         "answer": 0
        },
        {
         "q": "Wat is de valkuil?",
         "options": [
          "Geven met de duidelijke bedoeling iets terug te eisen",
          "Te veel aandacht geven",
          "Eerlijk zijn",
          "Luisteren"
         ],
         "answer": 0
        }
       ]
      },
      {
       "id": "t2-2-3",
       "title": "2. Toewijding",
       "video": "",
       "core": "Wie zich ergens aan verbindt, wil daar consistent mee blijven. Kleine toezeggingen maken grotere toezeggingen makkelijker. Een toezegging die de klant zelf hardop uitspreekt of opschrijft, weegt het zwaarst.",
       "points": [
        "Begin met kleine ja's, zoals in de ja-flow.",
        "Laat de klant zijn eigen doelen uitspreken.",
        "Vrijwillige en schriftelijke toezeggingen zijn het sterkst."
       ],
       "workbook": [
        "Welke kleine toezeggingen vraag jij in een gesprek?",
        "Hoe laat je de klant zijn eigen doel hardop zeggen?",
        "Hoe verbind je toewijding met de ja-flow uit TRM 1?"
       ],
       "quiz": [
        {
         "q": "Wat is toewijding volgens Cialdini?",
         "options": [
          "De wens consistent te blijven met eerdere keuzes en uitspraken",
          "Je baan nooit opzeggen",
          "Een contract",
          "Een korting"
         ],
         "answer": 0
        },
        {
         "q": "Welke toezegging weegt het zwaarst?",
         "options": [
          "Een die de klant zelf uitspreekt of opschrijft",
          "Een die jij voor de klant uitspreekt",
          "Een afgedwongen toezegging",
          "Een vage toezegging"
         ],
         "answer": 0
        },
        {
         "q": "Hoe begin je?",
         "options": [
          "Met kleine toezeggingen",
          "Met de grootste vraag",
          "Met de prijs",
          "Met druk"
         ],
         "answer": 0
        },
        {
         "q": "Hoe hangt dit samen met de ja-flow?",
         "options": [
          "De ja-flow bouwt kleine toezeggingen op richting het voorstel",
          "Er is geen verband",
          "De ja-flow is het tegenovergestelde",
          "Alleen bij telefonische verkoop"
         ],
         "answer": 0
        },
        {
         "q": "Welke vraag zet toewijding in?",
         "options": [
          "Wat zou u per maand willen besparen?",
          "Wilt u tekenen?",
          "Bent u het niet met mij eens?",
          "Heeft u tijd?"
         ],
         "answer": 0
        }
       ]
      },
      {
       "id": "t2-2-4",
       "title": "3. Sociale bewijskracht",
       "video": "",
       "core": "Als we twijfelen, kijken we naar wat anderen doen. Hoe meer die anderen op ons lijken, hoe sterker het effect. Echte reviews, buren met panelen en ervaringen van vergelijkbare klanten overtuigen meer dan elk argument.",
       "points": [
        "Gebruik echte, controleerbare voorbeelden.",
        "Vergelijkbare mensen werken het best: 'Uw buren op nummer 12...', met hun toestemming.",
        "Verzonnen reviews of aantallen zijn verboden en ondermijnen alles."
       ],
       "workbook": [
        "Welke echte voorbeelden van klanten kun jij gebruiken?",
        "Hoe vraag je een tevreden klant om een review of referentie?",
        "Waarom werkt sociaal bewijs het sterkst bij twijfel?"
       ],
       "quiz": [
        {
         "q": "Wanneer werkt sociale bewijskracht het sterkst?",
         "options": [
          "Bij twijfel, en als de anderen op ons lijken",
          "Altijd even sterk",
          "Alleen online",
          "Nooit"
         ],
         "answer": 0
        },
        {
         "q": "Welk voorbeeld is sterk sociaal bewijs?",
         "options": [
          "Een echte review van een klant uit dezelfde wijk",
          "Een verzonnen aantal",
          "Een algemene slogan",
          "Een foto van een paneel"
         ],
         "answer": 0
        },
        {
         "q": "Wat mag nooit?",
         "options": [
          "Reviews of aantallen verzinnen",
          "Echte reviews tonen",
          "Met toestemming een referentie noemen",
          "Je eigen ervaring delen"
         ],
         "answer": 0
        },
        {
         "q": "Wat vraag je voordat je een klant als voorbeeld noemt?",
         "options": [
          "Toestemming",
          "Niets",
          "Zijn salaris",
          "Zijn leeftijd"
         ],
         "answer": 0
        },
        {
         "q": "Welke groep overtuigt het meest?",
         "options": [
          "Mensen die op de klant lijken",
          "Bekende Nederlanders",
          "Jijzelf",
          "Onbekenden uit het buitenland"
         ],
         "answer": 0
        }
       ]
      },
      {
       "id": "t2-2-5",
       "title": "4. Sympathie",
       "video": "",
       "core": "We zeggen eerder ja tegen mensen die we aardig vinden. Sympathie groeit door overeenkomsten, oprechte complimenten, samenwerking en vertrouwdheid.",
       "points": [
        "Zoek echte overeenkomsten: hobby's, regio, situatie.",
        "Geef oprechte en specifieke complimenten.",
        "Presenteer jezelf als partner: 'Laten we samen kijken wat het beste past.'"
       ],
       "workbook": [
        "Hoe vind jij in de eerste vijf minuten een overeenkomst met de klant?",
        "Schrijf drie oprechte complimenten op die passen bij een huisbezoek.",
        "Hoe maak je van het gesprek een samenwerking?"
       ],
       "quiz": [
        {
         "q": "Wat vergroot sympathie?",
         "options": [
          "Echte overeenkomsten en oprechte complimenten",
          "Opscheppen",
          "Veel over jezelf praten",
          "Haast hebben"
         ],
         "answer": 0
        },
        {
         "q": "Welk compliment werkt het best?",
         "options": [
          "Een specifiek en oprecht compliment",
          "Een algemeen compliment over alles",
          "Een overdreven compliment",
          "Geen compliment"
         ],
         "answer": 0
        },
        {
         "q": "Hoe zet je samenwerking in?",
         "options": [
          "Samen kijken wat het beste past",
          "Zelf beslissen voor de klant",
          "Tegenover de klant gaan staan",
          "Druk zetten"
         ],
         "answer": 0
        },
        {
         "q": "Waarom werkt sympathie?",
         "options": [
          "We zeggen sneller ja tegen mensen die we aardig vinden",
          "Het werkt niet",
          "Klanten zijn naïef",
          "Alleen bij vrienden"
         ],
         "answer": 0
        },
        {
         "q": "Wat is het risico van nep-sympathie?",
         "options": [
          "De klant merkt het en het vertrouwen verdwijnt",
          "Geen risico",
          "Hogere verkoop",
          "Meer reviews"
         ],
         "answer": 0
        }
       ]
      },
      {
       "id": "t2-2-6",
       "title": "5. Autoriteit",
       "video": "",
       "core": "We volgen experts. Laat zien dat je weet waar je het over hebt: met kennis, certificaten, ervaring en een professionele uitstraling. Autoriteit moet echt zijn; een klant prikt door bluf heen.",
       "points": [
        "Toon expertise met concrete kennis, bijvoorbeeld over saldering en terugleverkosten.",
        "Je TRM-certificaten en ervaring bewijzen je deskundigheid.",
        "Voorbereiding en een verzorgde uitstraling ondersteunen je autoriteit."
       ],
       "workbook": [
        "Hoe laat jij zien dat je een expert bent, zonder op te scheppen?",
        "Welke kennis moet je nog bijspijkeren om als autoriteit over te komen?",
        "Hoe gebruik je je certificaten in een gesprek?"
       ],
       "quiz": [
        {
         "q": "Wat versterkt autoriteit?",
         "options": [
          "Concrete kennis en aantoonbare ervaring",
          "Hard praten",
          "Moeilijke woorden zonder uitleg",
          "Een dure auto"
         ],
         "answer": 0
        },
        {
         "q": "Wat gebeurt er bij bluf?",
         "options": [
          "De klant prikt erdoorheen en het vertrouwen is weg",
          "Het werkt altijd",
          "De klant tekent sneller",
          "Niets"
         ],
         "answer": 0
        },
        {
         "q": "Welk voorbeeld past bij autoriteit?",
         "options": [
          "Helder uitleggen wat het einde van saldering voor deze klant betekent",
          "Zeggen dat je de beste bent",
          "Over je vakantie praten",
          "De folder voorlezen"
         ],
         "answer": 0
        },
        {
         "q": "Wat doe je als je iets niet weet?",
         "options": [
          "Eerlijk zeggen en het uitzoeken",
          "Iets verzinnen",
          "Het negeren",
          "Van onderwerp wisselen"
         ],
         "answer": 0
        },
        {
         "q": "Wat hoort bij autoriteit uitstralen?",
         "options": [
          "Goede voorbereiding en een verzorgde uitstraling",
          "Te laat komen",
          "Onvoorbereid binnenkomen",
          "Slordige kleding"
         ],
         "answer": 0
        }
       ]
      },
      {
       "id": "t2-2-7",
       "title": "6. Schaarste",
       "video": "",
       "core": "Wat schaars is, willen we meer. En mensen zijn gevoeliger voor wat ze verliezen dan voor wat ze winnen. Echte schaarste, zoals een volle installatieplanning of een regeling die eindigt, mag je benoemen. Verzonnen schaarste nooit.",
       "points": [
        "Benoem echte deadlines en beperkingen.",
        "Formuleer in verlies: 'Elke maand zonder panelen kost u ongeveer € 90.'",
        "Nep-deadlines zijn verboden en beschadigen de reputatie van PM Agency."
       ],
       "workbook": [
        "Welke echte vormen van schaarste zijn er nu in de markt?",
        "Formuleer het voordeel van panelen als een verlies dat de klant nu lijdt.",
        "Waar ligt voor jou de grens tussen schaarste en druk?"
       ],
       "quiz": [
        {
         "q": "Waarom werkt schaarste?",
         "options": [
          "We willen meer wat beperkt is en vermijden verlies",
          "Mensen houden van wachten",
          "Het werkt niet",
          "Alleen bij jongeren"
         ],
         "answer": 0
        },
        {
         "q": "Welke vorm van schaarste mag je gebruiken?",
         "options": [
          "Een echte deadline of echte beperking",
          "Een verzonnen actie die 'vandaag afloopt'",
          "Een nep-voorraad",
          "Een gefingeerde prijsstijging"
         ],
         "answer": 0
        },
        {
         "q": "Welke formulering gebruikt verliesaversie?",
         "options": [
          "Elke maand zonder panelen kost u ongeveer € 90.",
          "Panelen zijn mooi.",
          "U kunt ook later kiezen.",
          "Wij zijn de beste."
         ],
         "answer": 0
        },
        {
         "q": "Wat doet nep-schaarste?",
         "options": [
          "Het beschadigt vertrouwen en reputatie",
          "Het verhoogt de verkoop zonder nadelen",
          "Niets",
          "Het is verplicht"
         ],
         "answer": 0
        },
        {
         "q": "Wat is een voorbeeld van echte schaarste rond zonnepanelen?",
         "options": [
          "Het einde van de salderingsregeling op 1 januari 2027",
          "Een verzonnen actie",
          "Een nep-wachtlijst",
          "Een gefingeerde prijsstijging"
         ],
         "answer": 0
        }
       ]
      },
      {
       "id": "t2-2-8",
       "title": "7. Eenheid",
       "video": "",
       "core": "Eenheid gaat verder dan sympathie. Het gaat om een gedeelde identiteit: 'wij'. Mensen zeggen eerder ja tegen iemand die bij hun groep hoort, zoals dezelfde regio, hetzelfde dorp of dezelfde waarden.",
       "points": [
        "Zoek een gedeelde identiteit: 'Wij hier in de regio...'",
        "Gebruik 'wij' en 'samen' in plaats van 'ik' en 'u'.",
        "Eenheid moet echt zijn. Een gedeelde identiteit kun je niet faken."
       ],
       "workbook": [
        "Welke identiteit deel jij met de klanten in jouw regio?",
        "Herschrijf drie zinnen uit je pitch met 'wij' in plaats van 'ik'.",
        "Wat is het verschil tussen sympathie en eenheid?"
       ],
       "quiz": [
        {
         "q": "Wat is eenheid volgens Cialdini?",
         "options": [
          "Een gedeelde identiteit: het gevoel van 'wij'",
          "Iets gratis geven",
          "Een deadline",
          "Een certificaat"
         ],
         "answer": 0
        },
        {
         "q": "Wat is het verschil met sympathie?",
         "options": [
          "Sympathie is iemand aardig vinden, eenheid is dezelfde identiteit delen",
          "Geen verschil",
          "Eenheid is zwakker",
          "Sympathie is altijd sterker"
         ],
         "answer": 0
        },
        {
         "q": "Welke zin gebruikt eenheid?",
         "options": [
          "Wij hier in de regio weten hoe hoog de energierekening kan oplopen.",
          "Ik verkoop panelen.",
          "U moet tekenen.",
          "Dit is de beste prijs."
         ],
         "answer": 0
        },
        {
         "q": "In welk boek introduceerde Cialdini eenheid?",
         "options": [
          "Pre-Suasion",
          "Influence",
          "Mindset",
          "The Infinite Game"
         ],
         "answer": 0
        },
        {
         "q": "Wat is het risico van geveinsde eenheid?",
         "options": [
          "Het voelt nep en kost vertrouwen",
          "Geen risico",
          "Hogere verkoop",
          "Het is verplicht"
         ],
         "answer": 0
        }
       ]
      }
     ]
    },
    {
     "id": "m2-3",
     "code": "2.3",
     "title": "Infinite Game · Simon Sinek",
     "unlock": {
      "prev": true,
      "months": 1
     },
     "topics": [
      {
       "id": "t2-3-1",
       "title": "Begrijp het spel",
       "video": "",
       "core": "Simon Sinek onderscheidt eindige en oneindige spellen. Een eindig spel heeft bekende spelers, vaste regels en een einde, zoals voetbal. Een oneindig spel heeft geen einde: spelers komen en gaan, en het doel is blijven spelen. Zakendoen, en ook een carrière in sales, is een oneindig spel.",
       "points": [
        "Eindige spelers spelen om te winnen; oneindige spelers spelen om door te gaan.",
        "Wie een oneindig spel eindig speelt, raakt uitgeput en verliest vertrouwen.",
        "Denk in jaren en relaties, niet alleen in de sale van vandaag."
       ],
       "workbook": [
        "Waar speel jij nu een eindig spel terwijl het een oneindig spel is?",
        "Wat betekent 'blijven spelen' voor jouw carrière?",
        "Hoe ziet een klantrelatie eruit als je hem oneindig speelt?"
       ],
       "quiz": [
        {
         "q": "Wie schreef The Infinite Game?",
         "options": [
          "Simon Sinek",
          "Robert Cialdini",
          "Stephen Covey",
          "Carol Dweck"
         ],
         "answer": 0
        },
        {
         "q": "Wat is het doel van een oneindig spel?",
         "options": [
          "Blijven spelen",
          "Zo snel mogelijk winnen",
          "Iedereen verslaan",
          "Stoppen op het hoogtepunt"
         ],
         "answer": 0
        },
        {
         "q": "Wat is een kenmerk van een eindig spel?",
         "options": [
          "Vaste regels, bekende spelers en een duidelijk einde",
          "Geen einde",
          "Steeds wisselende regels",
          "Onbekende spelers"
         ],
         "answer": 0
        },
        {
         "q": "Waarom is sales een oneindig spel?",
         "options": [
          "Er is geen eindstreep; klanten, markt en collega's veranderen voortdurend",
          "Er is elk jaar een winnaar",
          "Het is een eindig spel",
          "Je stopt bij 100 sales"
         ],
         "answer": 0
        },
        {
         "q": "Wat gebeurt er als je een oneindig spel eindig speelt?",
         "options": [
          "Je raakt uitgeput en verliest vertrouwen",
          "Je wint altijd",
          "Er gebeurt niets",
          "Je speelt beter"
         ],
         "answer": 0
        }
       ]
      },
      {
       "id": "t2-3-2",
       "title": "Principe 1 · Just Cause",
       "video": "",
       "core": "Een Just Cause is een toekomstbeeld dat zo inspirerend is dat mensen er offers voor willen brengen. Het is niet je product, maar het ideaal waaraan je bijdraagt. Een Just Cause is vóór iets, inclusief, dienend, veerkrachtig en idealistisch.",
       "points": [
        "Een Just Cause is nooit 'de beste worden' of 'meer omzet'.",
        "Hij geeft richting aan keuzes als het moeilijk wordt.",
        "Denk aan iets groters dan de sale, zoals huishoudens grip geven op hun energie."
       ],
       "workbook": [
        "Formuleer jouw persoonlijke Just Cause.",
        "Hoe draagt jouw werk bij aan iets groters dan de sale?",
        "Welke keuze zou je anders maken als je je Just Cause altijd voor ogen had?"
       ],
       "quiz": [
        {
         "q": "Wat is een Just Cause?",
         "options": [
          "Een inspirerend toekomstbeeld waar mensen offers voor willen brengen",
          "Een omzetdoel",
          "Een product",
          "Een bonus"
         ],
         "answer": 0
        },
        {
         "q": "Welke is GEEN Just Cause?",
         "options": [
          "De nummer één worden in omzet",
          "Elk huishouden grip geven op zijn energie",
          "Bijdragen aan een duurzame toekomst",
          "Mensen financieel sterker laten staan"
         ],
         "answer": 0
        },
        {
         "q": "Een Just Cause is...",
         "options": [
          "Vóór iets, in plaats van tegen iets",
          "Tegen de concurrent",
          "Alleen voor managers",
          "Tijdelijk"
         ],
         "answer": 0
        },
        {
         "q": "Waar helpt een Just Cause bij?",
         "options": [
          "Richting houden bij moeilijke keuzes",
          "Snel geld verdienen",
          "Concurrenten verslaan",
          "Nergens bij"
         ],
         "answer": 0
        },
        {
         "q": "Hoe verhoudt een Just Cause zich tot je product?",
         "options": [
          "Het product is een middel, de Just Cause het ideaal",
          "Ze zijn hetzelfde",
          "Het product is belangrijker",
          "Er is geen verband"
         ],
         "answer": 0
        }
       ]
      },
      {
       "id": "t2-3-3",
       "title": "Principe 2 · Trusting Teams",
       "video": "",
       "core": "In een team met vertrouwen durven mensen fouten toe te geven, hulp te vragen en eerlijk te zijn. Volgens Sinek is prestatie zonder vertrouwen gevaarlijk: iemand die goed scoort maar het team ondermijnt, schaadt de groep op de lange termijn.",
       "points": [
        "Vertrouwen ontstaat als het veilig is om kwetsbaar te zijn.",
        "Deel kennis en help collega's; je speelt niet tegen elkaar.",
        "Kies bij twijfel voor betrouwbaarheid boven pure prestatie."
       ],
       "workbook": [
        "Wanneer vroeg jij voor het laatst om hulp binnen het team?",
        "Wat deel jij met collega's dat hen beter maakt?",
        "Wat doe jij om het team veilig te laten voelen?"
       ],
       "quiz": [
        {
         "q": "Wat kenmerkt een trusting team?",
         "options": [
          "Mensen durven fouten toe te geven en hulp te vragen",
          "Iedereen werkt alleen",
          "Fouten worden bestraft",
          "Kennis wordt geheimgehouden"
         ],
         "answer": 0
        },
        {
         "q": "Wat zegt Sinek over goede presteerders zonder vertrouwen?",
         "options": [
          "Ze kunnen het team op lange termijn schaden",
          "Ze zijn altijd het belangrijkst",
          "Ze moeten promotie krijgen",
          "Niets"
         ],
         "answer": 0
        },
        {
         "q": "Hoe draag je bij aan vertrouwen?",
         "options": [
          "Kennis delen en collega's helpen",
          "Je beste trucs geheimhouden",
          "Alleen naar je eigen cijfers kijken",
          "Roddelen"
         ],
         "answer": 0
        },
        {
         "q": "Waarom is kwetsbaarheid belangrijk?",
         "options": [
          "Het maakt leren en eerlijke feedback mogelijk",
          "Het is zwak",
          "Het kost tijd",
          "Het is niet belangrijk"
         ],
         "answer": 0
        },
        {
         "q": "Is de leaderboard een reden om collega's niet te helpen?",
         "options": [
          "Nee, het spel is samen beter worden",
          "Ja, ieder voor zich",
          "Alleen in de laatste week van de maand",
          "Alleen als je bovenaan staat"
         ],
         "answer": 0
        }
       ]
      },
      {
       "id": "t2-3-4",
       "title": "Principe 3 · Worthy Rivals",
       "video": "",
       "core": "Een Worthy Rival is iemand die jou laat zien waar je nog kunt groeien. Je wilt hem niet verslaan, je wilt van hem leren. Dat kan een collega zijn, een concurrent, of jijzelf van vorige maand.",
       "points": [
        "Een waardige rivaal onthult je zwaktes, zonder dat je hem hoeft te haten.",
        "Kijk naar wat hij beter doet en leer daarvan.",
        "Wie alleen wil winnen, raakt gefrustreerd. Wie wil leren, blijft groeien."
       ],
       "workbook": [
        "Wie is jouw Worthy Rival, en waarom?",
        "Wat doet hij of zij beter dan jij?",
        "Welke stap zet je deze maand om dat te leren?"
       ],
       "quiz": [
        {
         "q": "Wat is een Worthy Rival?",
         "options": [
          "Iemand die je laat zien waar je kunt groeien",
          "Een vijand",
          "Iemand die je moet verslaan",
          "Een klant"
         ],
         "answer": 0
        },
        {
         "q": "Hoe ga je om met een Worthy Rival?",
         "options": [
          "Je leert van hem",
          "Je maakt hem zwart",
          "Je negeert hem",
          "Je kopieert hem zonder na te denken"
         ],
         "answer": 0
        },
        {
         "q": "Wie kan een Worthy Rival zijn?",
         "options": [
          "Een collega, een concurrent of je eigen vorige prestatie",
          "Alleen een concurrent",
          "Alleen je manager",
          "Niemand"
         ],
         "answer": 0
        },
        {
         "q": "Wat gebeurt er als je alleen wilt winnen?",
         "options": [
          "Je raakt sneller gefrustreerd",
          "Je leert meer",
          "Je wordt gelukkiger",
          "Er verandert niets"
         ],
         "answer": 0
        },
        {
         "q": "Wat levert een Worthy Rival je op?",
         "options": [
          "Inzicht in je eigen zwaktes en groeikansen",
          "Een hogere bonus",
          "Minder werk",
          "Niets"
         ],
         "answer": 0
        }
       ]
      },
      {
       "id": "t2-3-5",
       "title": "Principe 4 · Existential Flexibility",
       "video": "",
       "core": "Existential Flexibility is het vermogen om een grote koerswijziging te maken als dat je Just Cause beter dient, ook als het op korte termijn pijn doet. Denk aan de markt na het einde van saldering: wie zich aanpast, blijft spelen.",
       "points": [
        "Durf te veranderen als de wereld verandert.",
        "Een koerswijziging volgt uit je Just Cause, niet uit paniek.",
        "Vasthouden aan wat altijd werkte, is het grootste risico."
       ],
       "workbook": [
        "Wat verandert er in onze markt na 1 januari 2027?",
        "Welke gewoonte in jouw aanpak moet je durven loslaten?",
        "Hoe pas je je pitch aan op de nieuwe situatie?"
       ],
       "quiz": [
        {
         "q": "Wat is Existential Flexibility?",
         "options": [
          "Een grote koerswijziging durven maken om je Just Cause beter te dienen",
          "Elke dag iets anders doen",
          "Flexibele werktijden",
          "Stoppen als het moeilijk wordt"
         ],
         "answer": 0
        },
        {
         "q": "Waaruit volgt een goede koerswijziging?",
         "options": [
          "Uit je Just Cause",
          "Uit paniek",
          "Uit verveling",
          "Uit wat de concurrent doet"
         ],
         "answer": 0
        },
        {
         "q": "Wat is volgens dit principe het grootste risico?",
         "options": [
          "Vasthouden aan wat altijd werkte",
          "Veranderen",
          "Leren",
          "Nadenken"
         ],
         "answer": 0
        },
        {
         "q": "Welk voorbeeld past?",
         "options": [
          "Je pitch na het einde van saldering richten op eigen verbruik en batterijen",
          "Dezelfde salderingspitch blijven geven",
          "Stoppen met verkopen",
          "Niets doen"
         ],
         "answer": 0
        },
        {
         "q": "Wat kost Existential Flexibility vaak?",
         "options": [
          "Pijn of onzekerheid op korte termijn",
          "Niets",
          "Altijd geld",
          "Je baan"
         ],
         "answer": 0
        }
       ]
      },
      {
       "id": "t2-3-6",
       "title": "Principe 5 · Courage to Lead",
       "video": "",
       "core": "Leiden in een oneindig spel vraagt moed: kiezen voor wat goed is op lange termijn, ook als het nu minder oplevert. Moed is nee zeggen tegen een sale die niet past, en eerlijk zijn tegen je team.",
       "points": [
        "Moed is integriteit onder druk.",
        "Je hoeft geen manager te zijn om te leiden.",
        "Kies voor de lange termijn, ook als dat vandaag pijn doet."
       ],
       "workbook": [
        "Wanneer toonde jij moed in je werk?",
        "Bij welke klant zou je nee moeten zeggen? Waarom?",
        "Hoe leid jij, zonder functietitel?"
       ],
       "quiz": [
        {
         "q": "Wat is Courage to Lead?",
         "options": [
          "Kiezen voor wat goed is op lange termijn, ook als het nu minder oplevert",
          "Hard praten",
          "De baas zijn",
          "Risico's negeren"
         ],
         "answer": 0
        },
        {
         "q": "Moet je manager zijn om te leiden?",
         "options": [
          "Nee, iedereen kan leiden",
          "Ja",
          "Alleen met een team van tien of meer",
          "Alleen na vijf jaar"
         ],
         "answer": 0
        },
        {
         "q": "Welk voorbeeld toont moed?",
         "options": [
          "Nee zeggen tegen een sale die niet bij de klant past",
          "Een klant overhalen tot iets wat hij niet nodig heeft",
          "Zwijgen over een fout",
          "Cijfers mooier maken"
         ],
         "answer": 0
        },
        {
         "q": "Waarom vraagt dit moed?",
         "options": [
          "Het kost op korte termijn vaak iets",
          "Het is makkelijk",
          "Het levert altijd direct op",
          "Het kost niets"
         ],
         "answer": 0
        },
        {
         "q": "Wat is moed in een team?",
         "options": [
          "Eerlijk zijn, ook als het ongemakkelijk is",
          "Altijd instemmen",
          "Problemen verzwijgen",
          "Anderen de schuld geven"
         ],
         "answer": 0
        }
       ]
      },
      {
       "id": "t2-3-7",
       "title": "Het drieledige model: resultaat, gedrag en identiteit",
       "video": "",
       "core": "Verandering gebeurt op drie lagen. Resultaat is wat je wilt bereiken. Gedrag is wat je daarvoor doet. Identiteit is wie je bent. Blijvende verandering begint bij identiteit: 'Ik ben iemand die elk gesprek voorbereidt.'",
       "points": [
        "Resultaat: 25 sales per maand.",
        "Gedrag: elke dag 40 gesprekken en elke ochtend voorbereiden.",
        "Identiteit: 'Ik ben een professional die mensen eerlijk adviseert.'"
       ],
       "workbook": [
        "Schrijf je doel uit op de drie lagen: resultaat, gedrag en identiteit.",
        "Welk gedrag past bij de identiteit die je wilt hebben?",
        "Welk klein bewijs lever je deze week voor je nieuwe identiteit?"
       ],
       "quiz": [
        {
         "q": "Wat zijn de drie lagen?",
         "options": [
          "Resultaat, gedrag en identiteit",
          "Geld, tijd en energie",
          "Klant, product en prijs",
          "Start, midden en einde"
         ],
         "answer": 0
        },
        {
         "q": "Waar begint blijvende verandering?",
         "options": [
          "Bij identiteit",
          "Bij resultaat",
          "Bij de manager",
          "Bij de klant"
         ],
         "answer": 0
        },
        {
         "q": "Welke uitspraak gaat over identiteit?",
         "options": [
          "Ik ben iemand die elk gesprek goed voorbereidt",
          "Ik wil 25 sales",
          "Ik bel elke dag 40 mensen",
          "Ik wil een bonus"
         ],
         "answer": 0
        },
        {
         "q": "Welke uitspraak gaat over gedrag?",
         "options": [
          "Ik bel elke dag 40 mensen",
          "Ik ben een professional",
          "Ik wil de beste zijn",
          "Ik wil 25 sales"
         ],
         "answer": 0
        },
        {
         "q": "Hoe versterk je een nieuwe identiteit?",
         "options": [
          "Met kleine, herhaalde acties die als bewijs dienen",
          "Door alleen aan het resultaat te denken",
          "Door af te wachten",
          "Door het hardop te zeggen zonder iets te doen"
         ],
         "answer": 0
        }
       ]
      },
      {
       "id": "t2-3-8",
       "title": "De 4 mentale kaders",
       "video": "",
       "core": "Vier mentale kaders helpen je oneindig te denken in een eindige werkdag: lange termijn boven korte termijn, groei boven winnen, samen boven alleen, en waarde boven transactie.",
       "points": [
        "Lange termijn: de klant van vandaag is de doorverwijzer van volgend jaar.",
        "Groei en samen: meet jezelf aan je vorige maand en maak het team sterker.",
        "Waarde: elke klant gaat erop vooruit, ook als hij niet koopt."
       ],
       "workbook": [
        "Welk van de vier kaders vind jij het moeilijkst?",
        "Waar zag je 'waarde boven transactie' terug in je laatste gesprek?",
        "Kies één kader waar je deze week bewust op let."
       ],
       "quiz": [
        {
         "q": "Welk kader hoort bij oneindig denken?",
         "options": [
          "Lange termijn boven korte termijn",
          "Vandaag winnen ten koste van alles",
          "Ieder voor zich",
          "Transactie boven waarde"
         ],
         "answer": 0
        },
        {
         "q": "Wat betekent 'groei boven winnen'?",
         "options": [
          "Jezelf meten aan je eigen vooruitgang",
          "Altijd de nummer één zijn",
          "Nooit verliezen",
          "Anderen verslaan"
         ],
         "answer": 0
        },
        {
         "q": "Wat betekent 'samen boven alleen'?",
         "options": [
          "Kennis delen en het team sterker maken",
          "Alleen werken",
          "Collega's als concurrenten zien",
          "Niets delen"
         ],
         "answer": 0
        },
        {
         "q": "Wat betekent 'waarde boven transactie'?",
         "options": [
          "De klant gaat erop vooruit, ook als hij niet koopt",
          "Zo veel mogelijk verkopen",
          "Alleen de prijs telt",
          "De klant is een nummer"
         ],
         "answer": 0
        },
        {
         "q": "Waarom helpen mentale kaders?",
         "options": [
          "Ze sturen je keuzes op momenten dat het snel moet",
          "Ze zijn verplicht",
          "Ze vervangen training",
          "Ze helpen niet"
         ],
         "answer": 0
        }
       ]
      },
      {
       "id": "t2-3-9",
       "title": "Infinite Sales Protocol",
       "video": "",
       "core": "Het Infinite Sales Protocol vertaalt het oneindige spel naar je dagelijkse aanpak. Elk gesprek eindigt met een klant die er beter van wordt, een relatie die blijft en een reden om jou aan te bevelen.",
       "points": [
        "Voor het gesprek: bereid je voor op de klant, niet op je pitch.",
        "Tijdens het gesprek: eerlijk advies, ook als dat 'nog niet' betekent.",
        "Na het gesprek: opvolgen, nazorg en vragen om een doorverwijzing."
       ],
       "workbook": [
        "Schrijf jouw protocol uit voor, tijdens en na een gesprek.",
        "Hoe ziet jouw nazorg eruit na een sale?",
        "Hoe vraag jij om doorverwijzingen?"
       ],
       "quiz": [
        {
         "q": "Waar bereid je je in dit protocol vooral op voor?",
         "options": [
          "Op de klant en zijn situatie",
          "Alleen op je pitch",
          "Op de concurrent",
          "Nergens op"
         ],
         "answer": 0
        },
        {
         "q": "Wat doe je als het beste advies 'nog niet' is?",
         "options": [
          "Dat eerlijk zeggen en de relatie warm houden",
          "Toch verkopen",
          "Het verzwijgen",
          "De klant afschrijven"
         ],
         "answer": 0
        },
        {
         "q": "Wat hoort bij 'na het gesprek'?",
         "options": [
          "Opvolgen, nazorg en om een doorverwijzing vragen",
          "Niets meer",
          "Alleen de factuur",
          "Verdwijnen"
         ],
         "answer": 0
        },
        {
         "q": "Wat is het doel van elk gesprek?",
         "options": [
          "Een klant die er beter van wordt en een relatie die blijft",
          "Alleen de handtekening",
          "Zo kort mogelijk",
          "Zo veel mogelijk producten verkopen"
         ],
         "answer": 0
        },
        {
         "q": "Waarom zijn doorverwijzingen belangrijk in een oneindig spel?",
         "options": [
          "Tevreden klanten brengen nieuwe klanten en houden je in het spel",
          "Ze zijn niet belangrijk",
          "Alleen voor de bonus",
          "Omdat het moet"
         ],
         "answer": 0
        }
       ]
      },
      {
       "id": "t2-3-10",
       "title": "My Infinite Gameplan",
       "video": "",
       "core": "Je sluit TRM 2 af met je eigen Infinite Gameplan: je Just Cause, je Worthy Rival, je identiteit en je doelen voor het komende jaar. Dit plan bespreek je met je leidinggevende.",
       "points": [
        "Je Just Cause en je identiteit als verkoper.",
        "Je Worthy Rival en wat je van hem of haar leert.",
        "Je resultaat- en gedragsdoelen voor de komende 12 maanden."
       ],
       "workbook": [
        "Wat is je Just Cause?",
        "Wie is je Worthy Rival, en wat leer je van hem of haar?",
        "Wat zijn je resultaat- en gedragsdoelen voor de komende 12 maanden?"
       ],
       "quiz": [
        {
         "q": "Wat staat in je Infinite Gameplan?",
         "options": [
          "Je Just Cause, Worthy Rival, identiteit en doelen",
          "Alleen je omzetdoel",
          "Je vakantieplanning",
          "Niets"
         ],
         "answer": 0
        },
        {
         "q": "Voor welke periode maak je het plan?",
         "options": [
          "De komende 12 maanden",
          "Morgen",
          "De komende week",
          "Je hele leven"
         ],
         "answer": 0
        },
        {
         "q": "Met wie bespreek je het plan?",
         "options": [
          "Je leidinggevende",
          "Niemand",
          "Een klant",
          "De concurrent"
         ],
         "answer": 0
        },
        {
         "q": "Waarom combineer je resultaat- en gedragsdoelen?",
         "options": [
          "Gedrag stuur je dagelijks, het resultaat volgt",
          "Ze zijn hetzelfde",
          "Alleen resultaat telt",
          "Alleen gedrag telt"
         ],
         "answer": 0
        },
        {
         "q": "Wat maakt het plan 'oneindig'?",
         "options": [
          "Het richt zich op blijven groeien, niet op één eindstreep",
          "Het heeft geen doelen",
          "Het is nooit af",
          "Het is vaag"
         ],
         "answer": 0
        }
       ]
      }
     ]
    }
   ]
  }
 ]
};
