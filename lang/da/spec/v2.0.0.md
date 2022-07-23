---
title: Semantisk versionsstyring 2.0.0
language: da
author: Jens Kristian Villadsen
---

Semantisk version 2.0.0
===============================

Resumé
-------

Givet et versionsnummer MAJOR.MINOR.PATCH, skal du øge:

1. STOR version, når du foretager inkompatible API-ændringer,
2. MINOR version, når du tilføjer funktionalitet i en bagudkompatibel
   måde, og
3. PATCH-version, når du laver bagudkompatible fejlrettelser.

Yderligere etiketter til pre-release og build-metadata er tilgængelige som udvidelser
til MAJOR.MINOR.PATCH-formatet.

Introduktion
------------

I verden af ​​software management findes der et frygtet sted kaldet
"afhængighedshelvede." Jo større dit system vokser, og jo flere pakker du
integreres i din software, jo større sandsynlighed er der for, at du finder dig selv, en
dag, i denne fortvivlelses hule.

I systemer med mange afhængigheder kan frigivelse af nye pakkeversioner hurtigt
blive et mareridt. Hvis afhængighedsspecifikationerne er for stramme, er du med
fare for versionslås (manglende evne til at opgradere en pakke uden at skulle
frigive nye versioner af hver afhængig pakke). Hvis afhængigheder er
specificeret for løst, vil du uundgåeligt blive bidt af versionspromiskuitet
(forudsat kompatibilitet med flere fremtidige versioner end rimeligt).
Afhængighedshelvede er, når versionslås og/eller versionspromiskuitet
forhindrer dig i nemt og sikkert at komme videre med dit projekt.

Som en løsning på dette problem foreslår vi et simpelt sæt regler og
krav, der dikterer, hvordan versionsnumre tildeles og øges.
Disse regler er baseret på, men ikke nødvendigvis begrænset til, allerede eksisterende
udbredt almindelig praksis i brug i både lukket og open source-software.
For at dette system skal fungere, skal du først erklære en offentlig API. Dette kan evt
bestå af dokumentation eller håndhæves af selve koden. Uanset hvad er det
vigtigt, at dette API er klar og præcis. Når du identificerer dit offentlige
API, kommunikerer du ændringer til det med specifikke ændringer til dit versionsnummer.
Overvej et versionsformat af X.Y.Z (Major.Minor.Patch). Fejlrettelser der ikke
påvirker API'et øger patchversionen (Z), bagudkompatibelt API
med tilføjelser/ændringer øger den mindre version (Y) og bagud inkompatible API
ændringer øger hovedversionen (X).

Vi kalder dette system "Semantisk versionering." Under denne ordning, formidler versionsnumrene mening om den underliggende kode og hvad der har blevet ændret fra den ene version til den næste.

Semantisk versionsspecifikation (SemVer)
------------------------------------------

Nøgleordene "MÅ", "MÅ IKKE", "PÅKRÆVET", "SKAL", "MÅ IKKE", "BØR",
"BØR IKKE", "ANBEFALET", "KAN" og "VALGFRI" i dette dokument skal være
fortolket som beskrevet i [RFC 2119](https://tools.ietf.org/html/rfc2119).

1. Software, der bruger semantisk versionering SKAL erklære et offentlig API. Dette API
kan være erklæret i selve koden eller udelukkende eksistere i dokumentationen.
Uanset hvordan det gøres, SKAL det være præcist og omfattende.

2. Et normalt versionsnummer SKAL have formen X.Y.Z, hvor X, Y og Z er
ikke-negative heltal og MÅ IKKE indeholde indledende nuller. X er
større version, Y er den mindre version, og Z er patch-versionen.
Hvert element SKAL øges numerisk. For eksempel: 1.9.0 -> 1.10.0 -> 1.11.0.

3. Når en versioneret pakke er blevet frigivet, MÅ indholdet IKKE ændres i den version.
Eventuelle ændringer SKAL frigives som en ny version.

4. Større version nul (0.y.z) er til indledende udvikling. Alt KAN ændre sig
når som helst. Det offentlige API BØR IKKE betragtes som stabilt.

5. Version 1.0.0 definerer det offentlige API. Den måde, hvorpå versionsnummeret
øges efter denne udgivelse er afhængig af dette offentlige API og hvordan den
ændrer sig.

6. Patchversion Z (x.y.Z | x > 0) SKAL øges, hvis kun baglæns
kompatible fejlrettelser introduceres. En fejlrettelse er defineret som en intern
ændring, der retter ukorrekt adfærd.

7. Mindre version Y (x.Y.z | x > 0) SKAL øges, hvis ny, baglæns
kompatibel funktionalitet introduceres til det offentlige API. Det må 
øges, hvis noget offentlig API-funktionalitet er markeret som forældet. Det BØR øges,
hvis der indføres væsentlig ny funktionalitet eller forbedringer inden for den private kode. Det KAN omfatte ændringer af patch-niveau. Patch version SKAL nulstilles til 0, når mindre version øges.

8. Større version X (X.y.z | X > 0) SKAL øges, hvis der er nogen baglæns
inkompatible ændringer der introduceres til det offentlige API. Det MÅ også omfatte mindre 
ændringer i patch-niveau. Patch og mindre versioner SKAL nulstilles til 0, når de er større
version er øget.

9. En pre-release version KAN angives ved at tilføje en bindestreg og en
serie af punktseparerede identifikatorer umiddelbart efter patchen
version. Identifikatorer SKAL kun omfatte ASCII alfanumeriske tegn og bindestreger
[0-9A-Za-z-]. Identifikatorer MÅ IKKE være tomme. Numeriske identifikatorer SKAL
Inkluder IKKE foranstillede nuller. Pre-release versioner har en lavere
forrang end den tilhørende normale version. En pre-release version
angiver, at versionen er ustabil og muligvis ikke opfylder
tilsigtede kompatibilitetskrav som angivet af dets tilknyttede
normal version. Eksempler: 1.0.0-alfa, 1.0.0-alfa.1, 1.0.0-0.3.7,
1.0.0-x.7.z.92, 1.0.0-x-y-z.--.

10. Byggemetadata KAN angives ved at tilføje et plustegn og en række prikker
adskilte identifikatorer umiddelbart efter patchen eller pre-release-versionen.
Identifikatorer SKAL kun omfatte ASCII alfanumeriske tegn og bindestreger [0-9A-Za-z-].
Identifikatorer MÅ IKKE være tomme. Byggemetadata SKAL ignoreres ved bestemmelse
versions forrang. Således to versioner, der kun adskiller sig i byggemetadataene,
har samme forrang. Eksempler: 1.0.0-alfa+001, 1.0.0+20130313144700,
1.0.0-beta+exp.sha.5114f85, 1.0.0+21AF26D3----117B344092BD.

1. Forrang henviser til, hvordan versioner sammenlignes med hinanden, når de bestilles.

   1. Forrang SKAL beregnes ved at adskille versionen i større,
      mindre, patch og pre-release identifikatorer i den rækkefølge (Byggemetadata
      har ikke forrang).

   1. Forrang bestemmes af den første forskel, når man sammenligner hver af
      disse identifikatorer fra venstre mod højre som følger: Større, mindre og patch
      versioner sammenlignes altid numerisk.

      Eksempel: 1.0.0 < 2.0.0 < 2.1.0 < 2.1.1.

   1. Når større, mindre og patch er ens, har en pre-release version lavere
      forrang end en normal version:

      Eksempel: 1.0.0-alfa < 1.0.0.

   1. Forrang for to pre-release versioner med samme større, mindre og
      patch-version SKAL bestemmes ved at sammenligne hver punktsepareret identifikator
      fra venstre mod højre, indtil en forskel er fundet som følger:

      1. Identifikatorer, der kun består af cifre, sammenlignes numerisk.

      1. Identifikatorer med bogstaver eller bindestreger sammenlignes leksikalsk i ASCII
         sorteringsrækkefølge.

      1. Numeriske identifikatorer har altid lavere forrang end ikke-numeriske
         identifikatorer.

      1. Et større sæt præ-udgivelsesfelter har en højere prioritet end en
         mindre sæt, hvis alle de foregående identifikatorer er ens.

      Eksempel: 1.0.0-alfa < 1.0.0-alfa.1 < 1.0.0-alfa.beta < 1.0.0-beta <
      1.0.0-beta.2 < 1.0.0-beta.11 < 1.0.0-rc.1 < 1.0.0.



Hvorfor bruge semantisk versionering?
----------------------------

Dette er ikke en ny eller revolutionær idé. Faktisk gør du sikkert noget
tæt på dette allerede. Problemet er, at "tæt" ikke er godt nok. Uden
overensstemmelse med en form for formel specifikation, versionsnumre er
i det væsentlige ubrugelig til afhængighedsstyring. Ved at give et navn og klart
definition til ovenstående ideer, bliver det nemt at kommunikere dine hensigter
til brugerne af din software. Når først disse intentioner er klare, fleksible (men
ikke for fleksible) kan der endelig laves afhængighedsspecifikationer.

Et simpelt eksempel vil vise, hvordan semantisk versionering kan gøre afhængighed
helvede hører fortiden til. Overvej et bibliotek kaldet "Brandbil." Det kræver en
Semantisk versioneret pakke med navnet "Ladder." På det tidspunkt, hvor Firetruck er
oprettet, er Ladder i version 3.1.0. Da Firetruck bruger nogle funktioner
som først blev introduceret i 3.1.0, kan du roligt angive stigen
afhængighed som større end eller lig med 3.1.0, men mindre end 4.0.0. Nu, hvornår
Ladder version 3.1.1 og 3.2.0 bliver tilgængelige, du kan frigive dem til din
pakkestyringssystem og ved, at de vil være kompatible med eksisterende
afhængig software.

Som ansvarlig udvikler vil du naturligvis gerne verificere, at evt
pakkeopgraderinger fungerer som annonceret. Den virkelige verden er et rodet sted;
der er ikke noget, vi kan gøre ved det, end at være årvågne. Hvad du kan gøre er at lade
Semantisk versionering giver dig en fornuftig måde at frigive og opgradere
pakker uden at skulle rulle nye versioner af afhængige pakker, hvilket sparer dig
tid og bøvl.

Hvis alt dette lyder ønskeligt, er alt hvad du skal gøre for at begynde at bruge Semantic
Versionering er at erklære, at du gør det og derefter følge reglerne. Link
til denne hjemmeside fra din README, så andre kender reglerne og kan drage fordel af
dem.

FAQ
---

### Hvordan skal jeg håndtere revisioner i 0.y.z indledende udviklingsfase?

Den enkleste ting at gøre er at starte din første udviklingsudgivelse på 0.1.0
og øg derefter den mindre version for hver efterfølgende udgivelse.

### Hvordan ved jeg, hvornår jeg skal udgive 1.0.0?

Hvis din software bliver brugt i produktionen, burde den sandsynligvis allerede være det
1.0.0. Hvis du har et stabilt API, som brugerne er blevet afhængige af, bør du
være 1.0.0. Hvis du bekymrer dig meget om bagudkompatibilitet, bør du
sandsynligvis allerede være 1.0.0.

### Afskrækker dette ikke hurtig udvikling og hurtig iteration?

Større version nul handler om hurtig udvikling. Hvis du ændrer API
hver dag bør du enten stadig være i version 0.y.z eller på en separat
udviklingsgren arbejder på den næste store version.

### Hvis selv de mindste bagud-inkompatible ændringer af det offentlige API kræver et større versionsbump, vil jeg så ikke ende med version 42.0.0 meget hurtigt?

Dette er et spørgsmål om ansvarlig udvikling og fremsyn. Uforenelig
ændringer bør ikke introduceres let til software, der har en masse
afhængig kode. De omkostninger, der skal afholdes for at opgradere, kan være betydelige.
At skulle bumpe større versioner for at frigive inkompatible ændringer betyder, at du vil
gennemtænk virkningen af ​​dine ændringer, og evaluer cost/benefit-forholdet
involveret.

### Det er for meget arbejde at dokumentere hele det offentlige API!

Det er dit ansvar som professionel udvikler at dokumentere ordentligt
software, der er beregnet til brug af andre. Håndtering af softwarekompleksitet er en
enormt vigtig del af at holde et projekt effektivt, og det er svært at gøre hvis
ingen ved, hvordan man bruger din software, eller hvilke metoder der er sikre at kalde. I
på lang sigt, semantisk versionering og insisteren på en veldefineret offentlighed
API kan holde alle og alt kørende.

### Hvad gør jeg, hvis jeg ved et uheld frigiver en bagudinkompatibel ændring som en mindre version?

Så snart du indser, at du har brudt Semantic Versioning-specifikationen, skal du rette det
problemet og frigive en ny mindre version, der retter problemet og
genopretter bagudkompatibilitet. Selv under denne omstændighed er det
uacceptabelt at ændre versionerede udgivelser. Hvis det er passende,
dokumentere den krænkende version og informere dine brugere om problemet, således at
de er opmærksomme på den krænkende version.

### Hvad skal jeg gøre, hvis jeg opdaterer mine egne afhængigheder uden at ændre det offentlige API?

Det ville blive betragtet som kompatibelt, da det ikke påvirker der offentlige API.
Software, der eksplicit afhænger af de samme afhængigheder som din pakke
bør have deres egne afhængighedsspecifikationer, og forfatteren vil bemærke evt
konflikter. Afgør, om ændringen er et patch-niveau eller et mindre niveau
ændring afhænger af, om du har opdateret dine afhængigheder for at rette
en fejl eller introducere ny funktionalitet. Vi ville normalt forvente yderligere kode
i sidstnævnte tilfælde, i hvilket tilfælde det åbenbart er en mindre niveaustigning.

### Hvad hvis jeg utilsigtet ændrer den offentlige API på en måde, der ikke er i overensstemmelse med ændringen af ​​versionsnummeret (dvs. at koden fejlagtigt introducerer en større brydende ændring i en patch-udgivelse)?

Brug din bedste dømmekraft. Hvis du har et stort publikum, vil det være drastisk
påvirket af at ændre adfærden tilbage til, hvad den offentlige API havde til hensigt
det kan være bedst at udføre en større versionsudgivelse, selvom rettelsen kunne
strengt taget betragtes som en patch-udgivelse. Husk, Semantisk versionering er alt
om at formidle mening ved, hvordan versionsnummeret ændres. Hvis disse ændringer
er vigtige for dine brugere, skal du bruge versionsnummeret til at informere dem.

### Hvordan skal jeg håndtere udfasning af funktionalitet?

Forringelse af eksisterende funktionalitet er en normal del af softwareudvikling og
er ofte påkrævet for at gøre fremskridt. Når du fraskriver en del af din
offentlige API, bør du gøre to ting: (1) opdatere din dokumentation for at lade
brugere kender til ændringen, (2) udsteder en ny mindre udgivelse med afskrivningen
på plads. Før du helt fjerner funktionaliteten i en ny større udgivelse
der bør være mindst én mindre udgivelse, der indeholder udfasningen så
at brugerne problemfrit kan skifte til den nye API.

### Har SemVer en størrelsesbegrænsning på versionsstrengen?

Nej, men brug god dømmekraft. En version på 255 tegn er sandsynligvis overkill,
for eksempel. Også specifikke systemer kan pålægge deres egne grænser for størrelsen af
strengen.

### Er "v1.2.3" en semantisk version?

Nej, "v1.2.3" er ikke en semantisk version. Dog foran en semantisk version
med et "v" er en almindelig måde (på engelsk) at angive, at det er et versionsnummer.
At forkorte "version" som "v" ses ofte med versionskontrol. Eksempel:
`git tag v1.2.3 -m "Release version 1.2.3"`, i hvilket tilfælde "v1.2.3" er et tag
navn og den semantiske version er "1.2.3".

### Er der et foreslået regulært udtryk (RegEx) til at kontrollere en SemVer-streng?

Der er to. En med navngivne grupper for de systemer, der understøtter dem
(PCRE [Perl-kompatible regulære udtryk, dvs. Perl, PHP og R], Python
og gå).

Se: <https://regex101.com/r/Ly7O1x/3/>

```
^(?P<major>0|[1-9]\d*)\.(?P<minor>0|[1-9]\d*)\.(?P<patch>0|[1-9]\d*)(?:-(?P<prerelease>(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+(?P<buildmetadata>[0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))$
```

Og en med nummererede optagelsesgrupper i stedet (så cg1 = større, cg2 = mindre,
cg3 = patch, cg4 = prerelease og cg5 = byggemetadata), der er kompatibel
med ECMA Script (JavaScript), PCRE (Perl Compatible Regular Expressions,
dvs. Perl, PHP og R), Python og Go.

Se: <https://regex101.com/r/vkijKf/1/>

```
^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0 |[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d *|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?: \.[0-9a-zA-Z-]+)*))?$
```

Om
-----

Den semantiske versionsspecifikation blev oprindeligt skrevet af [Tom
Preston-Werner](https://tom.preston-werner.com), opfinder af Gravatar og
medstifter af GitHub.

Hvis du gerne vil give feedback, bedes du [åbn et issue på
GitHub](https://github.com/semver/semver/issues).

Licens
-------

[Creative Commons ― CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)