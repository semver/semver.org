---
title: Semantisch Versiebeheer 2.0.0
language: nl
---

Semantisch Versioneren 2.0.0
==============================

Samenvatting
-------

Gegeven een versienummer in de vorm MAJEUR.MINEUR.PATCH, worden de individuele elementen als volgt verhoogd:

1. MAJEUR wordt verhoogd bij incompatibele API-wijzigingen,
1. MINEUR wordt verhoogd bij het toevoegen van functionaliteit die compatibel is met de vorige versie, en
1. PATCH wordt verhoogd bij compatibele bugfixes.

Er zijn aanvullende labels beschikbaar voor pre-release en build-metadata om toe te voegen aan het MAJEUR.MINEUR.PATCH-formaat.

Introductie
------------

In de wereld van softwarebeheer bestaat er een gevreesde plek genaamd "dependency hell" oftewel de "hel van afhankelijkheden". Hoe groter een systeem wordt en hoe meer packages er worden geïntegreerd in de software, des te aannemelijker is het dat je op een goede dag aanlandt op deze mistroostige plek.

Het uitbrengen van een nieuwe packageversie kan al snel een nachtmerrie worden als systemen te maken hebben met een hoop afhankelijkheden. Als de afhankelijkheden te strikt gespecificeerd zijn, ontstaat het gevaar op "version lock": het is dan niet meer mogelijk om een package te upgraden zonder dat alle afhankelijke packages ook een versie verhoogd moeten worden. Als de afhankelijkheden te losjes zijn gespecificeerd, zul je onvermijdelijk worden teruggepakt door het fenomeen versievermenging: de verwachting dat er meer compatibiliteit is met toekomstige versies dan je redelijkerwijs mag verwachten. Je bevindt je in de hel van afhankelijkheden wanneer "version lock" en/of versievermenging zodanig in de weg zitten dat je project niet makkelijk en veilig kan worden voortgezet.

Als oplossing voor dit probleem stel ik een simpele set van regels en voorwaarden voor die beschrijven hoe versienummers toegewezen en verhoogd worden. Deze regels zijn gebaseerd op, maar niet noodzakelijk gelimiteerd tot reeds bestaande en weidverspreide gebruiken in zowel gesloten als opensource software. Om dit systeem succesvol te laten zijn, is het als eerste nodig om je publieke API te declareren. Of deze nu bestaat uit documentatie of wordt afgedwongen door de code zelf maakt niet uit, belangrijk is dat de API duidelijk en exact is. Zodra je je publieke API geidentificeerd hebt, worden wijzigingen gecommuniceerd met specifieke verhogingen in het versienummer. Gebruik een versieformaat van X.Y.Z (Majeur.Mineur.Patch). Bugfixes zonder effect op de API verhogen de patchversie, toevoegingen en wijzigingen aan de API die compatibel zijn met de vorige versie verhogen de mineurversie en wijzigingen aan de API die niet compatibel zijn met de vorige versie verhogen de majeurversie.

Ik noem dit systeem "Semantisch Versioneren", waarmee versienummers en de manier waarop ze veranderen en verhoogd worden duiding geven over de onderliggende code en wat er is aangepast tussen de verschillende versies.

Specificatie Semantisch Versioneren (SemVer)
------------------------------------------

De termen "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", en "OPTIONAL" in dit document dienen te worden geïnterpreteerd zoals beschreven in [RFC 2119](https://tools.ietf.org/html/rfc2119).

1. Software die gebruikmaakt van Semantisch Versioneren moet (MUST) een publieke API declareren. Deze API kan worden gepubliceerd in de code of strikt uit documentatie bestaan. Ongeacht de vorm zal (SHOULD) deze nauwkeurig en uitgebreid zijn.

1. Een normaal versienummer moet (MUST) uit het formaat X.Y.Z. bestaan, waar X, Y en Z een niet-negatief geheel getal zijn. Voorloopnullen mogen niet (MUST NOT) aanwezig zijn. X is de majeurversie, Y is de mineurversie en Z is de patchversie. Elk element moet (MUST) numeriek ophogen. Bijvoorbeeld: 1.9.0 -> 1.10.0 -> 1.11.0.

1. Wanneer een geversioneerde versie is uitgebracht, mag de inhoud niet (MUST NOT) worden aangepast. Alle wijzigingen moeten (MUST) worden gepubliceerd als een nieuwe versie.

1. Majeurversie nul (0.y.z) is voor de eerste ontwikkelfase. Alles kan (MAY) veranderen, op elk moment. De publieke API zal niet (SHOULD NOT) als stabiel worden beschouwd.

1. Versie 1.0.0 definieert de publieke API. De manier waarop het versienummer wordt verhoogd na deze release is afhankelijk van de publieke API en hoe deze verandert.

1. Patchversie Z (x.y.Z | x > 0) moet (MUST) worden verhoogd als wijzigingen zijn doorgevoerd die compatibel zijn met de vorige versie. De definitie van een bugfix is een interne wijziging welke foutief gedrag corrigeert.

1. Mineurversie Y (x.Y.z | x > 0) moet (MUST) worden verhoogd als nieuwe, met de vorige versie compatibele wijzigingen worden gedaan aan de publieke API. Het moet (MUST) worden verhoogd op het moment dat publieke-API-functionaliteit wordt uitgefaseerd. Het mag (MAY) worden verhoogd als substantiële nieuwe functionaliteit of verbeteringen worden doorgevoerd in de afgeschermde code. Het mag (MAY) ook wijzigingen van niveau patch bevatten. De patchversie moet (MUST) op 0 worden teruggezet wanneer een mineurversie is verhoogd.

1. Majeurversie X (X.y.z | X > 0) moet (MUST) worden verhoogd als wijzigingen worden doorgevoerd niet compatibel zijn met de publieke API. Het mag (MAY) ook wijzigingen van niveau mineur en patch bevatten. De patch- en mineurversie moeten (MUST) op 0 worden teruggezet wanneer majeurversie is verhoogd.

1. Een prerelease-versie mag (MAY) worden aangeduid met de toevoeging van een koppelteken en een serie van puntgescheiden id's direct volgend op de patchversie. Id's moeten (MUST) slechts bestaan uit alfanumerieke ASCII karakters en koppeltekens [0-9A-Za-z-]. Id's mogen niet (MUST NOT) leeg zijn. Voorloopnullen mogen niet (MUST NOT) aanwezig zijn in numerieke id's. Prerelease-versies hebben een lagere prioriteit dan de bijbehorende reguliere versie. Een prerelease-versie impliceert instabiel te zijn en voldoet mogelijk niet aan de voorgenomen compatibiliteitseisen zoals aangeduid bij de bijbehorende reguliere versie. Voorbeelden: 1.0.0-alpha, 1.0.0-alpha.1, 1.0.0-0.3.7, 1.0.0-x.7.z.92, 1.0.0-x-y-z.--.

1. Build-metadata mag (MAY) worden aangeduid door het toevoegen van een plusteken en een serie van puntgescheiden id's direct volgend op de patch- of prereleaseversie. Id's moeten (MUST) slechts bestaan uit alfanumerieke ASCII-karakters en koppeltekens [0-9A-Za-z-]. Id's mogen niet (MUST NOT) leeg zijn. Build-metadata moet (MUST) genegeerd worden wanneer versieprioriteit wordt bepaald. Kortom, twee verschillende versies welke alleen verschillen in build-metadata hebben dezelfde prioriteit. Voorbeelden: 1.0.0-alpha+001, 1.0.0+20130313144700, 1.0.0-beta+exp.sha.5114f85, 1.0.0+21AF26D3----117B344092BD.

1. Prioriteit refereert naar hoe versies in relatie tot elkaar staan wanneer ze zijn gesorteerd.
    
   1. Prioriteit moet (MUST) worden berekend door de versie te scheiden in de majeur-, mineur-, patch- en prerelease-id's, in die volgorde. (Build-metadata wordt niet meegenomen in het bepalen van prioriteit).
   
   1. De prioriteit wordt bepaald door het eerste gevonden verschil wanneer elk van de id's van links naar rechts onderling vergeleken worden, op de volgende manier: majeur, mineur en patchversies worden altijd numeriek vergeleken. Voorbeeld: 1.0.0 < 2.0.0 < 2.1.0 < 2.1.1.
   
   1. Wanneer majeur, mineur en patch gelijk zijn, heeft een prerelease-versie lagere prioriteit dan een normale versie. Voorbeeld: 1.0.0-alpha < 1.0.0.
   
   1. Prioriteit voor twee prerelease-versies met dezelfde majeur-, mineur- en patchversie moet (MUST) worden bepaald door vergelijking van elk puntgescheiden id van links naar rechts tot een verschil is gevonden, en wel zo:

      1. Id's alleen bestaand uit cijfers worden numeriek vergeleken.

      1. Id's met letters of koppeltekens worden lexicaal vergeleken in de ASCII-volgorde.

      1. Numerieke id's hebben altijd een lagere prioriteit dan niet-numerieke id's.

      1. Een grote reeks met prerelease-velden heeft een hogere prioriteit dan een kleinere als alle voorafgaande id's gelijk zijn. Voorbeeld:: 1.0.0-alpha < 1.0.0-alpha.1 < 1.0.0-alpha.beta < 1.0.0-beta < 1.0.0-beta.2 < 1.0.0-beta.11 < 1.0.0-rc.1 < 1.0.0.

Backus–Naur form grammatica voor geldige SemVer-versies
--------------------------------------------------
```
<valid semver> ::= <version core>
                 | <version core> "-" <pre-release>
                 | <version core> "+" <build>
                 | <version core> "-" <pre-release> "+" <build>

<version core> ::= <major> "." <minor> "." <patch>

<major> ::= <numeric identifier>

<minor> ::= <numeric identifier>

<patch> ::= <numeric identifier>

<pre-release> ::= <dot-separated pre-release identifiers>

<dot-separated pre-release identifiers> ::= <pre-release identifier>
                                          | <pre-release identifier> "." <dot-separated pre-release identifiers>

<build> ::= <dot-separated build identifiers>

<dot-separated build identifiers> ::= <build identifier>
                                    | <build identifier> "." <dot-separated build identifiers>

<pre-release identifier> ::= <alphanumeric identifier>
                           | <numeric identifier>

<build identifier> ::= <alphanumeric identifier>
                     | <digits>

<alphanumeric identifier> ::= <non-digit>
                            | <non-digit> <identifier characters>
                            | <identifier characters> <non-digit>
                            | <identifier characters> <non-digit> <identifier characters>

<numeric identifier> ::= "0"
                       | <positive digit>
                       | <positive digit> <digits>

<identifier characters> ::= <identifier character>
                          | <identifier character> <identifier characters>

<identifier character> ::= <digit>
                         | <non-digit>

<non-digit> ::= <letter>
              | "-"

<digits> ::= <digit>
           | <digit> <digits>

<digit> ::= "0"
          | <positive digit>

<positive digit> ::= "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"

<letter> ::= "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J"
           | "K" | "L" | "M" | "N" | "O" | "P" | "Q" | "R" | "S" | "T"
           | "U" | "V" | "W" | "X" | "Y" | "Z" | "a" | "b" | "c" | "d"
           | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n"
           | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x"
           | "y" | "z"
```

Waarom Semantisch Versioneren?
----------------------------

Dit is geen nieuw of revolutionair idee, waarschijnlijk gebruik je al iets wat hier erg op lijkt. En daar gaat het nu juist om: dat is niet goed genoeg. Zonder je aan een formele specificatie te houden zijn versienummers in den beginne nutteloos voor afhankelijkheidsbeheer. Door de bovenstaande ideeën een naam te geven en ze helder te definiëren, is het makkelijker om je bedoelingen over te brengen aan de gebruikers van je software. Pas als deze bedoelingen helder en flexibel (maar niet te flexibel) zijn, kunnen specificaties over afhankelijkheid worden gemaakt.

Een makkelijk voorbeeld toont aan hoe Semantisch Versipneren voorgoed afrekent met de hel van afhankelijkheden. Denk aan een library genaamd "Brandweerwagen". Deze heeft een SemVer-package genaamd "Ladder" nodig. Op het moment dat Brandweerwagen uitgebracht wordt, zit Ladder op versie 3.1.0. Omdat Brandweerwagen functionaliteit gebruikt die is geïntroduceerd in versie 3.1.0, kun je veilig vastleggen dat de afhankelijkheid van Ladder groter dan of gelijk is aan 3.1.0 maar kleiner dan 4.0.0. Als Ladder-versie 3.1.1 en 3.2.0 beschikbaar komen, kunnen deze worden gepubliceerd naar het package-beheersysteem wetend dat ze compatibel zijn met huidige, afhankelijke software.

Als een verantwoordelijke ontwikkelaar wil je natuurlijk nagaan dat alle package-upgrades functioneren zoals beschreven. De echte wereld is turbulent; daar kunnen we niets aan doen anders dan waakzaam zijn. Je kan Semantisch Versioneren laten voorzien in een verstandige en logische manier om packages uit te brengen en bij te werken, zonder nieuwe versies van afhankelijke packages uit te moeten brengen. Dat bespaart tijd en gedoe.

Als bovenstaande aanlokkelijk klinkt, is het enige wat je hoeft te doen verklaren dat je Semantisch Versioneert en dan de regels volgen. Verwijs naar deze website vanuit je README zodat anderen deze regels ook kennen en er profijt van kunnen hebben.

FAQ
---

### Hoe kan ik omgaan met correcties in de 0.y.z eerste ontwikkelfase?

Het makkelijkst is om te de release van de eerste ontwikkelfase te starten met 0.1.0 en vervolgens met een mineurversie ophogen voor elke volgende release.

### Hoe weet ik wanneer ik versie 1.0.0 kan uitbrengen?

Als de software reeds in productie gebruikt wordt, is hij waarschijnlijk al versie 1.0.0. Als je een stabiele API hebt waar gebruikers van afhankelijk zijn, dan dien je op versie 1.0.0 te zitten. Bij zorgen over compatibiliteit met vorige versies is het ook hoog tijd voor versie 1.0.0.

### Werkt dit niet ontmoedigend voor snel ontwikkelen en snelle iteraties?

Bij majeurversie nul draait het om snelle ontwikkeling. Als je de API dagelijks wijzigt zou je nog op versie 0.y.z moeten zitten of op een aparte ontwikkelbranch die de voor de volgende majeurversie.

### Als zelfs kleine niet-compatibele wijzigingen aan de publieke API zorgen voor een verhoging van de majeurversie, zit ik dan niet binnen afzienbare tijd op versie 42.0.0?

Het gaat hier om verantwoordelijk ontwikkelen en voortschrijdend inzicht. Niet-compatibele wijzigingen dienen niet licht opgevat te worden als het om software gaat waar veel van afhankelijk is. De ontwikkelkosten voor een upgrade kunnen significant zijn. Een majeurversie verhogen voor het uitbrengen van niet-compatibele wijzigingen betekent dat je moet nadenken over de impact van de wijzigingen en daarbij de kosten en baten in overweging moet nemen.

### Het is veel te veel werk om de volledige publieke API te documenteren!

Het is je verantwoordelijkheid als professioneel ontwikkelaar om software die door anderen gebruikt wordt adequaat te documenteren. Een essentieel onderdeel van een efficient softwareproject is om de complexiteit beheersbaar te houden, wat bijzonder lastig wordt als niemand weet hoe je software gebruikt moet worden en welke methoden veilig zijn aan te roepen. Op de lange duur zorgen Semantisch Versioneren samen met het aandringen op een goed gedocumenteerde API ervoor dat de zaken soepel lopen.

### Wat als ik per ongeluk een niet-compatibele wijziging uitbreng als een mineurversie?

Als je je realiseert dat je de regels van Semantisch Versioneren overtreden hebt, breng dan zo snel mogelijk een nieuwe mineurversie uit die het probleem oplost en de incompatibiliteit met de vorige versie repareert. Zelfs onder deze omstandigheden is het onacceptabel dat reeds uitgebrachte versies gewijzigd worden. Indien toepasselijk, documenteer de foute versie en informeer je gebruikers over het probleem zodat ze er rekening mee kunnen houden.

### Wat moet ik doen als ik mijn eigen afhankelijkheden bijwerk zonder wijzigingen aan de publieke API?

Dit wordt beschouwd als compatibel omdat het geen effect heeft op de publieke API. Software die expliciet afhankelijk is van dezelfde afhankelijkheden als jouw package, dient eigen specificaties over deze afhankelijkheden te hebben, waarbij de maker conflicten zal opmerken. Bepalen of de wijziging van het niveau patch of mineur is hangt af van het feit of je afhankelijkheden zijn bijgewerkt om een bug op te lossen of om nieuwe functionaliteit uit te brengen. Voor het tweede is er meestal nieuwe code toegevoegd, wat het zonder twijfel een mineure wijziging maakt.

### Wat als ik per ongeluk de publieke API aanpas op een manier die niet strookt met de wijziging in het versienummer (bijvoorbeeld: de code introduceert een majeure niet-compatibele wijziging in een patchrelease)?

Gebruik je gezond verstand. Bij een groot publiek dat veel hinder ondervindt als het gedrag van de publieke API weer wordt aangepast, kan het de beste keus zijn om een majeure versie uit te brengen ook al is de wijziging eigenlijk een patch. Onthoud dat Semantisch Versioneren vooral gaat over het geven van betekenis aan de manier waarop het versienummer verandert. Als deze wijzigingen belangrijk zijn voor je gebruikers, zet dan het versienummer in om ze hierover te informeren.

### Hoe moet ik omgaan met uitgefaseerde functionaliteit?

Het uitfaseren van bestaande functionaliteit is een normaal onderdeel van softwareontwikkeling en wordt vaak beschouwd als nodig om voortgang te maken. Als een deel van je publieke API uitgefaseerd wordt, dienen er twee dingen te veranderen: (1) werk documentatie bij zodat gebruikers op de hoogte zijn van de wijziging, (2) breng een nieuwe mineurversie uit waaruit duidelijk wordt dat de functionaliteit wordt uitgefaseerd. Voordat je, met een majeure versie, de functionaliteit helemaal verwijdert, dient er tenminste één mineurversie uitgebracht te zijn die duidelijk maakt dat de functionaliteit wordt uitgefaseerd, zodat gebruikers een soepele overgang hebben naar de nieuwe API.

### Is er binnen SemVer een limiet op het aantal tekens van de versienaam?

Nee, maar hou het realistisch. Een versie die 255 karakters bevat is waarschijnlijk overdreven. Bepaalde systemen kunnen ook eigen limieten stellen aan de lengte van de versienaam.

### Is "v1.2.3" een semantische versie? Is "v.1.2.3" een semantische versie?

Nee, "v.1.2.3" is geen semantische versie. Echter, het prefixen van een semantische versie met de letter "v" is een veel voorkomende manier (in het Engels) om aan te geven dat het een versienummer betreft. Het afkorten van "versie" met "v" wordt vaak gezien bij versiebeheer. Voorbeeld: `git tag v1.2.3 -m "Release version 1.2.3"`, in dit geval is "v.1.2.3" een naamtag en de semantische versie is "1.2.3".

### Bestaat er een reguliere expressie (RegEx) om een SemVer-tekenreeks te controleren?

Er zijn er twee. De ene bevat *named groups* voor systemen die dit ondersteunen (PCRE [Perl Compatible Regular Expressions, zoals Perl, PHP and R], Python
en Go).

Zie ook: <https://regex101.com/r/Ly7O1x/3/>

```
^(?P<major>0|[1-9]\d*)\.(?P<minor>0|[1-9]\d*)\.(?P<patch>0|[1-9]\d*)(?:-(?P<prerelease>(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+(?P<buildmetadata>[0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$
```

En een met *numbered capture groups* (dus cg1 = majeur, cg2 = mineur, cg3 = patch, cg4 = prerelease and cg5 = buildmetadata) die compatibel is met ECMA Script (JavaScript), PCRE (Perl Compatible Regular Expressions,zoals Perl, PHP and R), Python and Go.

Zie ook: <https://regex101.com/r/vkijKf/1/>

```
^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$
```

Over
-----

De specificatie van Semantisch Versioneren is oorspronkelijk geschreven door [Tom Preston-Werner](https://tom.preston-werner.com), uitvinder van Gravatar en medeoprichter van GitHub.

Feedback kan achtergelaten worden door [een issue op GitHub te openen](https://github.com/semver/semver/issues).

Licentie
-------

[Creative Commons ― CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)
