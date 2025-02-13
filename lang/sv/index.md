---
title: Semantisk versionshantering 2.0.0
language: sv
author: Magnus Österlund
---

Semantisk versionshantering 2.0.0
==============================

Sammanfattning
-------

Givet ett versionsnummer på formen MAJOR.MINOR.PATCH, räkna upp varje del enligt följande:

1. Öka MAJOR med 1 när du gör ändringar som påverkar bakåtkompatibiliteten för API:t.
1. Öka MINOR med 1 när du lägger till ny funktionalitet men 100 % bakåtkompatibilitet bibehålls.
1. Öka PATCH med 1 när du fixar buggar förutsatt att 100 % bakåtkompatibilitet bibehålls.

Ibland kan det även förekomma ytterligare delar i versionsnumret för att markera
t.ex. en test- eller betaversion.

Introduktion
------------

I mjukvaruutvecklingens värld finns det en obehaglig plats, det så kallade "beroendeträsket".
Ju större ditt system blir och ju fler paket du integrerar i ditt program, desto
större är risken att du en dag finner dig själv i förtvivlans grepp.

I system med många beroenden kan nya versioner av paket snabbt bli en mardröm. Om
de specificerade beroendena är för hårt satta är risken stor att du hamnar i ett
versionslås (oförmågan att uppgradera ett paket utan att släppa nya versioner av
alla paket det finns beroende till). Om beroendena är specificerade för löst kommer
du oundvikligen hamna i en versionsnaivitet (övertro på kompabilitet med nyare
versioner). Du är i ett beroendeträsk om versionslås och/eller versionsnaivitet
förhindrar dig att enkelt och säkert ta ditt projekt framåt.

Som en lösning på detta problem föreslår jag en enkel samling regler och krav som
beskriver hur versionsnummer ska tilldelas och räknas upp. Dessa regler är baserade
på, men inte nödvändigt begränsade till, redan existerande välkänd och vanlig praxis
som används både för sluten och öppen källkod. För att detta system ska fungera måste
du deklarera ett publikt API. Detta kan bestå av dokumentation eller vara en del av
själva källkoden. Oavsett vilket är det viktigt att detta API är klart och tydligt.
När du har identifierat ditt publika API kommunicerar du ändringar i det med
specifik ökning av versionsnumret. Överväg X.Y.Z (Major.Minor.Patch) som format på
versionsnumret. Buggfixar som ej påverkar API:t ökar patch-versionen, bakåtkompatibla
API-ändringar/tillägg ökar minor-versionen och icke bakåtkompatibla API-ändringar
ökar major-versionen.

Jag kallar detta system "Semantisk versionshantering". Under detta schema förmedlar
versionsnumret och dess förändringar mening till den underliggande koden och hur den
har förändrats från en version till en annan.

Specifikation av Semantisk versionshantering (SemVer)
------------------------------------------

Nyckelorden “MÅSTE”/”FÅR ENBART” (MUST/SHALL/REQUIRED), “FÅR INTE” (MUST NOT/SHALL NOT),
"BÖR" (SHOULD/RECOMMENDED), “BÖR INTE” (SHOULD NOT) och “KAN” (MAY/OPTIONAL) i detta
dokument skall tolkas enligt beskrivning i [RFC 2119](http://tools.ietf.org/html/rfc2119).

1. Program som använder Semantisk versionshantering MÅSTE deklarera ett publikt API.
Detta API kan deklareras i själva koden eller enbart existera i dokumentationen.
Oavsett hur det görs BÖR det vara precist och heltäckande.

1. Ett normalt versionsnummer MÅSTE ha formen X.Y.Z där X, Y och Z är
positiva heltal och FÅR INTE innehålla inledande nollor. X är major-versionen,
Y är minor-versionen och Z är patch-versionen. Varje element MÅSTE ökas numeriskt,
t.ex. 1.9.0 -> 1.10.0 -> 1.11.0.

1. När ett versionshanterat paket har släppts FÅR INTE innehållet i den versionen
förändras. Alla modifieringar MÅSTE släppas som en ny version.

1. Major-versionen noll (0.y.z) är för inledande utveckling. Vad som helst KAN förändras när som helst.
Publikt API BÖR ej ses som stabilt.

1. Version 1.0.0 definierar det publika API:t. Hur versionsnumret ökar efter detta släpp
är beroende på detta publika API och hur det förändras.

1. Patch-version Z (x.y.Z | x > 0) FÅR ENBART ökas om bakåtkompatibla buggfixar är
introducerade. En buggfix definieras som en intern förändring som åtgärdar ett felaktigt beteende.

1. Minor-version Y (x.Y.z | x > 0) MÅSTE ökas om ny bakåtkompatibel funktionalitet introduceras
i det publika API:t. Det MÅSTE ökas om någon funktion i det publika API:t markeras som
föråldrad (deprecated). Det KAN ökas om väsentlig ny funktionalitet eller förbättringar
införs i den privata koden. Även förändringar på patch-nivå KAN ingå. Patch-versionen MÅSTE
återställas till 0 när minor-versionen ökar.

1. Major-versionen X (X.y.z | X > 0) MÅSTE ökas om någon icke bakåtkompatibel förändring
introduceras i det publika API:t. Även förändringar på minor- och patch-nivå KAN ingå. Patch-
och minor-versionerna MÅSTE återställas till 0 när major-versionen ökar.

1. En förhandsversion KAN markeras genom att lägga till ett bindestreck och en serie av
punktseparerade identifierare direkt efter patch-versionen.  Identifierare FÅR ENBART innehålla
alfanumeriska ASCII-tecken och bindestreck [0-9A-Za-z-]. Identifierare FÅR INTE vara tomma.
Numeriska identifierare FÅR INTE ha inledande nollor. En förhandsversion har en lägre prioritet
än tillhörande normal version. En förhandsversion indikerar att versionen är instabil och
kanske inte uppfyller avsedda kompabilitetskrav som utmärker dess tillhörande normala version.
Exempel: 1.0.0-alpha, 1.0.0-alpha.1, 1.0.0-0.3.7, 1.0.0-x.7.z.92.

1. Metadata för byggen KAN markeras genom att lägga till ett plustecken och en serie
punktseparerade identifierare direkt efter patch-versionen eller information om förhandsversion.
Identifierare FÅR ENBART innehålla alfanumeriska ASCII-tecken och bindestreck [0-9A-Za-z-].
Identifierare FÅR INTE vara tomma. Bygg-metadata MÅSTE ignoreras när versionsprioritet skall
fastställas. Således har två versioner som enbart skiljer i bygg-metadata samma prioritet.
Exempel: 1.0.0-alpha+001, 1.0.0+20130313144700, 1.0.0-beta+exp.sha.5114f85.

1. Versionsprioritet syftar på hur versioner jämförs när de sorteras. Prioritet MÅSTE beräknas
genom att separera versionen i major, minor, patch och identifierare för förhandsversion i given
ordning (bygg-metadata påverkar ej rangordningen). Prioritet bestäms av första skillnaden
när var och en av dessa identifierare jämförs i tur och ordning från vänster till höger enligt:
Major-, minor- och patch-version jämförs alltid numeriskt.
Exempel: 1.0.0 < 2.0.0 < 2.1.0 < 2.1.1. När major, minor och patch är lika har en förhandsversion
lägre prioritet än en normal version. Exempel: 1.0.0-alpha < 1.0.0. Prioritet för två
förhandsversioner med samma major-, minor- och patch-version MÅSTE bestämmas genom att jämföra
varje punktseparerad identifierare från vänster till höger till dess att en skillnad hittas enligt
följande: identifierare som enbart består av siffror jämförs numeriskt och identifierare med
bokstäver och bindestreck jämförs lexikalt enligt sorteringsordningen i ASCII. Numeriska
identifierare har alltid lägre prioritet än icke numeriska identifierare. En större uppsättning
förhandsversionsidentifierare har en högre prioritet än en med färre antal ifall alla inledande
identifierare är lika. Exempel: 1.0.0-alpha < 1.0.0-alpha.1 < 1.0.0-alpha.beta < 1.0.0-beta <
1.0.0-beta.2 < 1.0.0-beta.11 < 1.0.0-rc.1 < 1.0.0.

Varför använda Semantisk versionshantering?
----------------------------

Detta är inte en ny eller revolutionerande idé. Faktum är att du förmodligen redan gör det på
nästan samma sätt. Problemet är att ”nästan” inte är tillräckligt bra. Utan någon form av formell
specifikation att följa är versionsnummer så gott som värdelösa när det gäller beroendehantering.
Genom att ge ett namn och tydlig definition till ovanstående idéer blir det enkelt att kommunicera
dina avsikter till användarna av din mjukvara. När dessa avsikter är tydliga kan flexibla
(men inte för flexibla) beroendespecifikationer göras.

Ett enkelt exempel kommer här demonstrera hur Semantisk versionshantering kan göra beroendeträsket
till ett minne blott. Tänk dig ett bibliotek kallat ”Brandbil”. Det kräver ett semantiskt
versionshanterat paket kallat ”Stege”. När Brandbil skapas finns Stege i version 3.1.0. Då Brandbil
använder funktionalitet som introducerades i version 3.1.0 av Stege, kan du med säkerhet specificera
ett beroende till versioner högre eller lika med 3.1.0 men lägre än 4.0.0. När sedan version 3.1.1
och 3.2.0 av Stege blir tillgängliga kan du släppa dem till ditt pakethanteringssystem och vara
säker på att de kommer vara kompatibla med existerande programvara.

Som en ansvarsfull utvecklare vill du förstås verifiera att varje paketuppgradering fungerar som väntat.
Verkligheten är en rörig plats, det finns inget vi kan göra åt det mer än att vara vaksamma. Vad du
kan göra är att låta Semantisk versionshantering ge dig ett sunt sätt att släppa och uppgradera paket
utan att behöva rulla ut nya versioner av paket beroende av det första, vilket kommer att bespara dig
tid och problem.

Låter detta attraktivt? Allt du behöver göra för att börja använda Semantisk versionshantering är
att ange att du gör det och börja följa reglerna. Länka till denna hemsida i din README så att andra
känner till reglerna och kan dra nytta av dem.

Vanliga frågor
---

### Hur ska jag hantera revisioner i den inledande utvecklingsfasen (0.y.z)?

Enklast är att sätta versionsnummer 0.1.0 på den första utvecklingsversionen och sedan öka
minor-versionen för varje efterföljande version.

### Hur vet jag när jag ska släppa version 1.0.0?

Om din mjukvara används i produktion borde det förmodligen redan heta 1.0.0. Om du har ett stabilt
API som användare redan har beroende till borde du använda 1.0.0. Om du oroar dig för bakåtkompabilitet
borde du sannolikt redan vara på 1.0.0.

### Kommer inte detta avskräcka från snabb utveckling och snabba iterationer?

Major-version noll handlar helt om snabb utveckling. Om du ändrar API:t varje dag bör du antingen
vara kvar i version 0.y.z eller jobba med nästa stora version på en separat utvecklingsgren.

### Även de minsta icke bakåtkompatibla ändringar förändrar det publika API:t, vilket kräver ett steg upp i major-versionen. Skulle jag inte då snabbt komma upp i version 42.0.0?

Detta är en fråga om ansvarsfull utveckling och planering. Inkompatibla förändringar bör inte
introduceras lättvindigt i mjukvara som många har beroende till. Kostnaden man drar på sig för
att uppgradera kan bli betydande. Att öka major-versionen för att släppa inkompatibla ändringar
innebär att du också måste tänka genom konsekvenserna av dina ändringar och utvärdera kostnad
kontra nytta.

### Det är för mycket jobb att dokumentera hela det publika API:t!

Det är ditt ansvar som en professionell utvecklare att korrekt dokumentera mjukvara som är
avsedd att användas av andra. Att hantera mjukvarukomplexitet är en stor och viktig del i att
hålla ett projekt effektivt, och det blir svårt om ingen vet hur mjukvaran ska användas eller
vilka metoder som är säkra att anropa. I långa loppet gör Semantisk versionshantering och krav
på väl dokumenterat publikt API att allt flyter på smidigt.

### Vad gör jag om jag av misstag släpper en icke bakåtkompatibel ändring som en minor-version?

Så fort du inser att du har brutit specifikationen i Semantisk versionshantering, fixa problemet
och släpp en ny minor-version som korrigerar problemet och återställer bakåtkompabiliteten.
Även under dessa omständigheter är det helt oacceptabelt att modifiera den släppta versionen.
Om lämpligt, dokumentera den felande versionen och informera dina användare om problemet så
att de är medvetna om den felande versionen.

### Vad bör jag göra om jag uppdatera mina egna beroenden utan att ändra det publika API:t?

Det skulle kunna ses som kompatibelt då det inte påverka det publika API:t. Programvara som
uttryckligen är beroende av samma sak som ditt paket bör ha sin egen beroendespecifikation och
skaparen kommer att märka eventuella konflikter. Att avgöra om förändringen är på patch- eller
minor-nivå beror på om du uppdaterade beroendet för att fixa en bugg eller för att introducera
ny funktionalitet. För det senare fallet hade jag förväntat mig att ny kod hade skrivits då
det naturligtvis är på minor-nivå.

### Vad gör jag om jag tvingas förändra det publika API:t på ett sätt som inte följer versionsnumrets förändring (d.v.s. koden introducerar en stor icke kompatibel förändring i en patch-version)?

Använd ditt omdöme. Om du har en stor publik som kommer att påverkas stort av att beteendet
förändras mot vad som förväntas av det, då är det bäst att skapa en major-version även om
ändringen strikt borde ses som en patch-version. Kom ihåg att Semantisk versionshantering
handlar om att förmedla innebörden av hur versionsnummer förändras. Om dessa förändringar
är viktiga för dina användare, använd versionsnumret för att informera dem.

### Hur ska jag hantera föråldrad funktionalitet?

Att markera existerande funktionalitet som föråldrad är en normal del av mjukvaruutveckling
och krävs oftast för att komma framåt. När du markera delar av ditt publika API som föråldrat
bör du göra två saker: (1) uppdatera din dokumentation så att användarna blir medvetna om
ändringen, (2) skapa en ny minor-version med funktionaliteten markerad som föråldrad. Innan
du helt tar bort funktionaliteten i en ny major-version bör det vara minst en minor-version
innehållandes markering om föråldrad kod så att användarna smidigt kan gå över till det
nya API:t.

### Har SemVer en storleksbegränsning på versionssträngen?

Nej, men använd sunt förnuft. En versionssträng på t.ex. 255 tecken är förmodligen överdrivet.
Dessutom kan vissa system ha egna begränsningar på hur lång den får vara.

### Är "v1.2.3" en semantisk version?

Nej, "v1.2.3" är inte en semantisk version. Å andra sidan är det vanligt att (på engelska)
använda prefixet "v" på semantiska versionsnummer för att förtydliga att det är ett versionsnummer.
Förkortningen "v" för "version" syns ofta i samband med versionshantering.
Exempel: `git tag v1.2.3 -m "Release version 1.2.3"`, i detta fallet är "v1.2.3" ett tagg-namn
och "1.2.3" den semantiska versionen.

Om
-----

Specifikationen för Semantisk versionshantering är skriven av [Tom
Preston-Werner](http://tom.preston-werner.com), skapare av Gravatars och medgrundare av
GitHub.

Om du vill lämna feedback, [öppna en fråga på GitHub](https://github.com/semver/semver/issues).

Licens
-------

[Creative Commons ― CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)
