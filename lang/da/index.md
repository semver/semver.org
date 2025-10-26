---
title: Semantisk Versionering 2.0.0
language: da
author: Jens Kristian Villadsen; Symegac
---

Semantisk Versionering 2.0.0
============================

Resumé
------

Givet et versionsnummer MAJOR.MINOR.PATCH, skal du trinvist øge:

1. MAJOR-versionen, når du foretager inkompatible API-ændringer,
2. MINOR-versionen, når du tilføjer funktionalitet på en bagudkompatibel
   måde, og
3. PATCH-versionen, når du laver bagudkompatible fejlrettelser.

Yderligere mærkater til pre-release og build-metadata er tilgængelige som udvidelser
til MAJOR.MINOR.PATCH-formatet.

Introduktion
------------

I ​​softwaremanagementverden findes der et frygtet sted kaldt
"afhængighedshelvede". Jo større dit system vokser sig, og jo flere pakker du
integrerer i din software, desto større sandsynlighed er der for, at du en dag finder
dig selv i dette hul af fortvivlelse.

I systemer med mange afhængigheder kan udgivelse af nye pakkeversioner hurtigt
blive et mareridt. Hvis afhængighedsspecifikationerne er for stramme, er du i
fare for versionslåsning (manglende evne til at opgradere en pakke uden at skulle
udgive nye versioner af hver afhængig pakke). Hvis afhængigheder er
specificeret for løst, vil du uundgåeligt blive bidt af versionspromiskuitet
(antagelse af kompatibilitet med flere fremtidige versioner end rimeligt).
Afhængighedshelvede er der, hvor du befinder dig, når versionslåsning og/eller
versionspromiskuitet forhindrer dig i nemt og sikkert at komme videre med dit projekt.

Som en løsning på dette problem foreslår vi et simpelt sæt regler og
krav, der dikterer, hvordan versionsnumre tildeles og øges.
Disse regler er baseret på, men ikke nødvendigvis begrænset til, allerede eksisterende
udbredt almindelig praksis i brug i både lukket og open source-software.
For at dette system fungerer, skal du først erklære en offentlig API. Dette kan evt.
bestå af dokumentation eller håndhæves af selve koden. Uanset hvad er det
vigtigt, at denne API er tydelig og præcis. Når du identificerer din offentlige
API, kommunikerer du ændringer af den med specifikke forøgelser af dit versionsnummer.
Forestil dig et versionsformat med formen X.Y.Z (Major.Minor.Patch).
Fejlrettelser, der ikke påvirker API'en, øger patch-versionen (Z),
bagudkompatible API-tilføjelser/-ændringer øger minor-versionen (Y),
og bagudinkompatible API-ændringer øger major-versionen (X).

Vi kalder dette system "Semantisk versionering". Under denne ordning formidler versionsnumrene
og måden, hvorpå de ændrer sig, meningen bag den underliggende kode, og hvad der er blevet ændret
fra en version til den næste.

Specifikation af Semantisk Versionering (SemVer)
------------------------------------------------

Nøgleordene "MÅ"/"SKAL" ("MUST"/"SHALL"), "MÅ IKKE" ("MUST NOT"/"SHALL NOT"),
"PÅKRÆVET" ("REQUIRED"), "BØR" ("SHOULD"), "BØR IKKE" ("SHOULD NOT"),
"ANBEFALET" ("RECOMMEDED"), "KAN" ("MAY") og "VALGFRI" ("OPTIONAL") i dette dokument skal
fortolkes som beskrevet i [RFC 2119](https://tools.ietf.org/html/rfc2119).

1. Software, der bruger semantisk versionering SKAL erklære en offentlig API. Denne API
kan erklæres i selve koden eller udelukkende eksistere i dokumentationen.
Uanset hvordan det gøres, BØR det være præcist og omfattende.

1. Et normalt versionsnummer SKAL have formen X.Y.Z, hvor X, Y og Z er
ikke-negative heltal, og det MÅ IKKE indeholde indledende nuller. X er
major-versionen, Y er minor-versionen, og Z er patch-versionen.
Hvert element SKAL øges numerisk. For eksempel: 1.9.0 -> 1.10.0 -> 1.11.0.

1. Når en versioneret pakke er blevet udgivet, MÅ indholdet IKKE ændres i den version.
Eventuelle ændringer SKAL udgives som en ny version.

1. Nulte major-version (0.y.z) er til indledende udvikling. Alt KAN ændre sig
når som helst. Den offentlige API BØR IKKE betragtes som stabil.

1. Version 1.0.0 definerer den offentlige API. Måden, hvorpå versionsnummeret
øges efter denne udgivelse, afhænger af denne offentlige API, og hvordan den
ændrer sig.

1. Patch-version Z (x.y.Z | x > 0) SKAL øges, hvis kun baglæns
kompatible fejlrettelser introduceres. En fejlrettelse er defineret som en intern
ændring, der retter ukorrekt adfærd.

1. Minor-version Y (x.Y.z | x > 0) SKAL øges, hvis ny, baglæns
kompatibel funktionalitet introduceres til den offentlige API. Den SKAL 
øges, hvis en offentlig API-funktionalitet markeres som forældet. Den KAN øges,
hvis der indføres væsentlig ny funktionalitet eller forbedringer inden for den private kode.
Den KAN omfatte ændringer af patch-niveau. Patch-versionen SKAL nulstilles til 0, når minor-versionen øges.

1. Major-version X (X.y.z | X > 0) SKAL øges, hvis baglæns
inkompatible ændringer introduceres til den offentlige API. Den KAN også omfatte ændringer af
minor- og patch-niveau. Patch- og minor-versioner SKAL nulstilles til 0, når major-versionen øges.

1. En pre-release-version KAN angives ved at tilføje en bindestreg og en
række punktadskilte identifikatorer umiddelbart efter patch-versionen.
Identifikatorer MÅ kun omfatte alfanumeriske ASCII-tegn og bindestreger
[0-9A-Za-z-]. Identifikatorer MÅ IKKE være tomme. Numeriske identifikatorer MÅ
IKKE inkludere foranstillede nuller. Pre-release-versioner har en lavere
forrang end den tilhørende normale version. En pre-release-version
angiver, at versionen er ustabil og muligvis ikke opfylder
tilsigtede kompatibilitetskrav som angivet af dens tilknyttede
normale version. Eksempler: 1.0.0-alpha, 1.0.0-alpha.1, 1.0.0-0.3.7,
1.0.0-x.7.z.92, 1.0.0-x-y-z.--.

1. Build-metadata KAN angives ved at tilføje et plustegn og en række punktadskilte
identifikatorer umiddelbart efter patch- eller pre-release-versionen.
Identifikatorer MÅ kun omfatte alfanumeriske ASCII-tegn og bindestreger [0-9A-Za-z-].
Identifikatorer MÅ IKKE være tomme. Build-metadata SKAL ignoreres ved bestemmelse af
versionsforrang. Således har to versioner, der kun adskiller sig i build-metadataene,
samme forrang. Eksempler: 1.0.0-alpha+001, 1.0.0+20130313144700,
1.0.0-beta+exp.sha.5114f85, 1.0.0+21AF26D3----117B344092BD.

1. Forrang henviser til, hvordan versioner sammenlignes med hinanden, når de sættes i rækkefølge.

   1. Forrang SKAL beregnes ved at adskille versionen i major-,
      minor-, patch- og pre-release-identifikatorer i den rækkefølge (build-metadata
      tælles ikke med i forrang).

   1. Forrang bestemmes af den første forskel, når man sammenligner hver af
      disse identifikatorer fra venstre mod højre, på følgende vis: Major-, minor- og
      patch-versioner sammenlignes altid numerisk.

      Eksempel: 1.0.0 < 2.0.0 < 2.1.0 < 2.1.1.

   1. Når major, minor og patch er ens, har en pre-release-version lavere
      forrang end en normal version:

      Eksempel: 1.0.0-alpha < 1.0.0.

   1. Forrang for to pre-release-versioner med samme major-, minor- og
      patch-version SKAL bestemmes ved at sammenligne hver punktadskilte identifikator
      fra venstre mod højre, indtil en forskel findes, på følgende vis:

      1. Identifikatorer, der kun består af cifre, sammenlignes numerisk.

      1. Identifikatorer med bogstaver eller bindestreger sammenlignes leksikalsk i
         ASCII-sorteringsrækkefølge.

      1. Numeriske identifikatorer har altid lavere forrang end ikke-numeriske
         identifikatorer.

      1. Et større sæt pre-release-felter har en højere forrang end et
         mindre sæt, hvis alle de forudgående identifikatorer er ens.

      Eksempel: 1.0.0-alfa < 1.0.0-alfa.1 < 1.0.0-alfa.beta < 1.0.0-beta <
      1.0.0-beta.2 < 1.0.0-beta.11 < 1.0.0-rc.1 < 1.0.0.

Hvorfor bruge Semantisk Versionering?
-------------------------------------

Dette er ikke en ny eller revolutionerende idé. Faktisk gør du sikkert allerede
noget tæt på dette allerede. Problemet er, at "tæt på" ikke er godt nok. Uden
overensstemmelse med en form for formel specifikation, er versionsnumre
essentielt set ubrugelige til afhængighedsstyring. Ved at give et navn og en klar
definition til ovenstående ideer bliver det nemt at kommunikere dine hensigter
til brugerne af din software. Når først disse intentioner er tydelige, kan fleksible (men
ikke for fleksible) afhængighedsspecifikationer endelig laves.

Et simpelt eksempel demonstrerer, hvordan Semantisk Versionering kan gøre
afhængighedshelvede til en saga blot. Forestil dig et bibliotek kaldt "Firetruck". Det kræver en
Semantisk Versioneret pakke ved navn "Ladder". På tidspunktet, hvor Firetruck
skabes, er Ladder i version 3.1.0. Da Firetruck bruger nogle funktioner,
som først blev introduceret i 3.1.0, kan du roligt angive afhængigheden til Ladder
som større end eller lig med 3.1.0, men mindre end 4.0.0. Nu kan du, når
Ladder version 3.1.1 og 3.2.0 bliver tilgængelige, udgive dem til dit
pakkestyringssystem og vide, at de vil være kompatible med eksisterende
afhængig software.

Som ansvarlig udvikler vil du naturligvis gerne verificere, at
pakkeopgraderinger fungerer som annonceret. Den virkelige verden er et rodet sted;
der er ikke andet, vi kan gøre ved det, end at være årvågne. Det, du kan gøre, er at lade
Semantisk Versionering give dig en fornuftig måde at udgive og opgradere
pakker på uden at skulle udrulle nye versioner af afhængige pakker, hvilket sparer dig
tid og bøvl.

Hvis alt dette lyder ønskeligt, er alt, hvad du skal gøre for at begynde at bruge Semantisk
Versionering, at erklære, at du gør det, og derefter følge reglerne. Link
til denne hjemmeside fra din README, så andre kender reglerne og kan drage fordel af
dem.

FAQ
---

### Hvordan bør jeg håndtere revisioner i den indledende udviklingsfase 0.y.z?

Det enkleste at gøre er at starte din første udviklingsudgivelse på 0.1.0
og derefter øge minor-versionen for hver efterfølgende udgivelse.

### Hvordan ved jeg, hvornår jeg skal udgive 1.0.0?

Hvis din software bliver brugt i produktion, burde den sandsynligvis allerede være
1.0.0. Hvis du har en stabil API, som brugerne er blevet afhængige af, bør du
være på 1.0.0. Hvis du bekymrer dig meget om bagudkompatibilitet, bør du
sandsynligvis allerede være på 1.0.0.

### Afskrækker dette ikke hurtig udvikling og hurtig iteration?

Nulte major-version handler om hurtig udvikling. Hvis du ændrer API
hver dag, bør du enten stadig være på version 0.y.z eller på en separat
udviklingsgren, hvor du arbejder på næste major-version.

### Hvis selv de mindste bagudinkompatible ændringer af den offentlige API kræver et bump af major-versionen, vil jeg så ikke utroligt hurtigt ramme version 42.0.0?

Dette er et spørgsmål om ansvarlig udvikling og fremsyn. Inkompatible
ændringer bør ikke introduceres uden omtanke til software, der har en masse
afhængig kode. De omkostninger, der skal afholdes for at opgradere, kan være betydelige.
At skulle bumpe major-versionen for at udgive inkompatible ændringer betyder, at du vil
komme til at gennemtænke virkningen af ​​dine ændringer og evaluere cost/benefit-forholdet
involveret.

### Det er for meget arbejde at dokumentere hele den offentlige API!

Det er dit ansvar som professionel udvikler ordentligt at dokumentere
software, der er beregnet til brug af andre. Håndtering af softwarekompleksitet er en
enormt vigtig del af det at holde et projekt effektivt, og det er svært at gøre, hvis
ingen ved, hvordan man bruger din software, eller hvilke metoder, der er sikre at kalde.
På lang sigt kan Semantisk Versionering og en insisteren på en veldefineret offentlig
API holde alle og alt velkørende.

### Hvad gør jeg, hvis jeg ved et uheld frigiver en bagudinkompatibel ændring som en minor-version?

Så snart du indser, at du har brudt specifikationen for Semantisk Versionering, skal du fikse
problemet og udgive en ny minor-version, der retter problemet og
genopretter bagudkompatibilitet. Selv under denne omstændighed er det
uacceptabelt at ændre versionerede udgivelser. Hvis det er passende,
så dokumentér den fejlagtige version og informér dine brugere om problemet, således at
de er opmærksomme på den fejlagtige version.

### Hvad skal jeg gøre, hvis jeg opdaterer mine egne afhængigheder uden at ændre den offentlige API?

Det ville blive betragtet som kompatibelt, da det ikke påvirker den offentlige API.
Software, der eksplicit afhænger af de samme afhængigheder som din pakke,
bør have deres egne afhængighedsspecifikationer, og forfatteren vil bemærke eventuelle
konflikter. Afgørelsen af, hvorvidt ændringen er en ændring på patch-niveau eller minor-niveau,
afhænger af, om du har opdateret dine afhængigheder for at rette
en fejl eller introducere ny funktionalitet. Man ville normalt forvente yderligere kode
i sidstnævnte tilfælde, i hvilket tilfælde det åbenlyst er en øgning på minor-niveau.

### Hvad hvis jeg utilsigtet ændrer den offentlige API på en måde, der ikke er i overensstemmelse med ændringen af ​​versionsnummeret (dvs. at koden fejlagtigt introducerer en større kompabilitetsbrydende ændring i en patch-udgivelse)?

Brug din bedste dømmekraft. Hvis du har et stort publikum, som vil blive drastisk
påvirket af en ændring af adfærden tilbage til, hvad den offentlige API havde til hensigt,
så kan det være bedst at foretage en major-versionsudgivelse, selvom rettelsen
strengt taget kunne betragtes som en patch-udgivelse. Husk på, at Semantisk Versionering
handler om at formidle meningen bag, hvordan versionsnummeret ændres. Hvis disse ændringer
er vigtige for dine brugere, skal du bruge versionsnummeret til at informere dem.

### Hvordan skal jeg håndtere udfasning af funktionalitet?

Udfasning af eksisterende funktionalitet er en normal del af softwareudvikling og
er ofte påkrævet for at gøre fremskridt. Når du udfaser en del af din
offentlige API, bør du gøre to ting: (1) opdatere din dokumentation for at lade
brugere kende til ændringen, (2) udstede en ny minor-udgivelse med udfasningen
gennemført. Før du helt fjerner funktionaliteten i en ny major-udgivelse,
bør der være mindst én minor-udgivelse, der indeholder udfasningen, så
brugerne problemfrit kan skifte til den nye API.

### Har SemVer en størrelsesbegrænsning på versionstekststrengen?

Nej, men brug god dømmekraft. For eksempel er en version på 255 tegn sandsynligvis overkill.
Derudover kan specifikke systemer desuden pålægge deres egne grænser for størrelsen af
tekststrengen.

### Er "v1.2.3" en semantisk version?

Nej, "v1.2.3" er ikke en semantisk version. Dog er præfigering af en semantisk version
med et "v" en almindelig måde (på engelsk) at angive på, at det er et versionsnummer.
At forkorte "version" som "v" ses ofte med versionskontrol. Eksempel:
`git tag v1.2.3 -m "Release version 1.2.3"`, hvor "v1.2.3" i dette tilfælde er et
tag-navn, og den semantiske version er "1.2.3".

### Er der et foreslået regulært udtryk (RegEx) til at kontrollere en SemVer-tekststreng?

Der er to. En med navngivne grupper for de systemer, der understøtter dem
(PCRE [Perl-kompatible regulære udtryk, dvs. Perl, PHP og R], Python
og Go).

Se: <https://regex101.com/r/Ly7O1x/3/>

```
^(?P<major>0|[1-9]\d*)\.(?P<minor>0|[1-9]\d*)\.(?P<patch>0|[1-9]\d*)(?:-(?P<prerelease>(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+(?P<buildmetadata>[0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))$
```

Og en med nummererede optagelsesgrupper i stedet (så at cg1 = major, cg2 = minor,
cg3 = patch, cg4 = prerelease og cg5 = buildmetadata), der er kompatibel
med ECMA Script (JavaScript), PCRE (Perl-kompatible regulære udtryk,
dvs. Perl, PHP og R), Python og Go.

Se: <https://regex101.com/r/vkijKf/1/>

```
^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0 |[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d *|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?: \.[0-9a-zA-Z-]+)*))?$
```

Om
---

Specifikationen for Semantisk Versionering blev oprindeligt skrevet af [Tom
Preston-Werner](https://tom.preston-werner.com), opfinder af Gravatar og
medstifter af GitHub.

Hvis du gerne vil give feedback, bedes du [åbne et issue på
GitHub](https://github.com/semver/semver/issues).

Licens
------

[Creative Commons ― CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)
