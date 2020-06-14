---
title: Semantičko verzioniranje 2.0.0
language: hr
---

Semantičko verzioniranje 2.0.0
==============================

Sažetak
-------

Uzevši oznake verzije VEĆA.MANJA.ZAKRPA, inkrementirajte:

1. VEĆU verziju kada napravite inkompatibilne promjene u APIju,
1. MANJU verziju kada dodate unatrag-kompatibilne funkcionalnosti i
1. ZAKRPA verziju kada napravite unatrag-kompatibilne ispravke *bugova*.

Dodatne oznake za pred-izdanja i metapodatke *builda* mogu se koristiti kao proširenje na VEĆA.MANJA.ZAKRPA format.

Uvod
------------

U svijetu upravljanja softverom postoji strašno mjesto koje zovemo
"pakao ovisnosti." Što više vaš sustav raste i što više paketa
integrirate u vaš softver, vjerojatnije je da ćete se, jednoga dana,
naći u toj jami očaja.

U sustavima s više ovisnosti, izdavanje novih verzija paketa, može se vrlo brzo
pretvoriti u noćnu moru. Ako su specifikacije ovisnosti previše stroge, postoji
opasnost zaključavanja verzije (nemogućnosti nadogradnje paketa bez potrebe
izdavanja nove verzije svakog ovisnog paketa). Ako su pak ovisnosti specificirane
previše slobodno, sigurno ćete osjetiti posljedice verzijskog promiskuiteta
(pretpostavke kompatibilnosti s više budućih verzija nego što je razumno).
Pakao ovisnosti je slučaj gdje zaključavanje verzije i/ili verzijski promiskuitet
sprječavaju lagano i sigurno napredovanje projekta.

Kao rješenje tog problema predlažem jednostavan set pravila i zahtjeva
koji će nalagati kako se dodjeljuju i inkrementiraju oznake verzija.
Ova se pravila temelje, no nisu nužno i ograničena, na već postojećoj
i raširenoj uobičajenoj praksi u projektima otvorenog i zatvorenog koda.
Kako bi ovaj sustav funkcionirao, potrebno je prvo objaviti javni API. Možemo
to primijeniti u dokumentaciji ili u samom kodu. U svakom slučaju, važno je da
API bude jasan i precizan. Jednom kad identificiramo javni API, komuniciramo
promjene u njemu kroz specificirane inkrementacije u oznake/broja verzije.
Uzmimo format verzije X.Y.Z (MANJA.VEĆA.ZAKRPA). Ispravci *bugova* koji ne utječu
na API inkrementiraju oznaku zakrpe, unatrag-kompatibilni dodaci/promjene u
APIju inkrementiraju manju verziju, a unatrag inkompatibilne promjene u APIju
inkrementiraju veću verziju.

Ovaj sam sustav nazvao "Semantičko verzioniranje". Unutar ove sheme, oznake
verzije i način na koji se mijenjaju prenose određene informacije o kodu koji
se nalazi ispod i što se mijenjalo od jedne do druge verzije.

Specifikacija semantičkog verzioniranja (SemVer)
------------------------------------------

Ključne riječi "MORA", "NE SMIJE", "POTREBNO", "BITI ĆE", "NEĆE BITI", "TREBALO BI",
"NE BI TREBALO", "PREPORUČENO", "MOŽE", i "OPCIONALNO" ("MUST", "MUST NOT",
"REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY",
"OPTIONAL") u ovom dokumentu treba interpretirati kao što je opisano u
[RFC 2119](http://tools.ietf.org/html/rfc2119).

1. Softver koji koristi Semantičko verzioniranje MORA objaviti javni API. API
može biti deklariran u samom kodu ili postojati samo unutar dokumentacije.
U svakom slučaju, mora biti precizan i jasan.

1. Normalna oznaka verzije MORA biti u formatu X.Y.Z gdje su X, Y i Z ne-negativni
cijeli brojevi i ne smiju počinjati s nulom. X označava veću verziju, Y manju
verziju, a Z zakrpu. Svaki se element MORA numerički povećavati.
Na primjer: 1.9.0 -> 1.10.0 -> 1.11.0.

1. Jednom kad je verzionirani paket izdan, sadržaj te verzije NE SMIJE se
mijenjati. Sve promjene MORAJU se izdavati s novom verzijom.

1. Veća verzija nula (0.y.z) je za inicijalni razvoj. Bilo što se može mijenjati
u tom stadiju. Javni API se ne smatra stabilnim.

1. Verzija 1.0.0 definira javni API. Način na koji će se oznaka verzije
inkrementirati ovisi o tom javnom APIju i načinu na koji se on mijenja.

1. Oznaka verzije zakrpe Z (x.y.Z | x > 0) MORA se inkrementirati samo ako se
dodaju unatrag kompatibilni ispravci *bugova*. Ispravci *bugova* definiraju se kao
promjene unutar koda koje ispravljaju nepravilno ponašanje.

1. Oznaka manje verzije Y (x.Y.z | x > 0) MORA se inkrementirati ako se javnom
APIju dodaju nove unatrag kompatibilne funkcionalnosti. Također se MORA
inkrementirati ako se neke funkcionalnosti označe kao zastarjele (deprecated).
MOŽE se inkrementirati ako se uvode značajne nove funkcionalnosti ili poboljšanja
unutar koda. MOŽE se inkrementirati ako se uvode promjene na razini zakrpe. Kada
se oznaka manje verzije inkrementira, oznaka verzije zakrpe mora se vratiti na 0.

1. Oznaka veće verzije X (X.y.z | X > 0) MORA se inkrementirati ako se javnom
APIju dodaju unatrag inkompatibilne funkcionalnosti. MOŽE sadržavati promjene na
razini manje verzije i zakrpe. Kada se oznaka veće verzije inkrementira, oznake
manje verzije i zakrpe moraju se vratiti na 0.

1. Verzija predizdanja MOŽE se označiti dodavanjem crtice i niza identifikatora
odvojenih točkom, koji se odmah nastavljaju na oznaku verzije zakrpe. Ti se
identifikatori MORAJU sastojati samo od ASCII alfanumeričkih znakova i crtica
[0-9A-Za-z-]. Identifikatori NE SMIJU biti prazni. Numerički identifikatori NE
SMIJU počinjati nulom. Normalne verzije imaju prednost nad vezanim verzijama
predizdanja. Oznaka verzije predizdanja označava nestabilnu verziju koja ne
zadovoljava nužno predviđene zahtjeve kompatibilnosti navedene u vezanoj
normalnoj verziji. Primjeri: 1.0.0-alpha, 1.0.0-alpha.1, 1.0.0-0.3.7,
1.0.0-x.7.z.92.

1. Metapodaci *builda* MOGU se označiti dodavanjem znaka plus i niza identifikatora
odvojenih točkom, koji se odmah nastavljaju na oznaku verzije zakrpe ili
predizdanja. Ti se identifikatori MORAJU sastojati samo od ASCII alfanumeričkih
znakova i crtica [0-9A-Za-z-]. Identifikatori NE SMIJU biti prazni. Metapodaci
*builda* se ignoriraju kod procjene prednosti verzije. Dakle, dvije verzije koje
se razlikuju samo u metapodacima *builda* imaju jednaku prednost. Primjeri:
1.0.0-alpha+001, 1.0.0+20130313144700, 1.0.0-beta+exp.sha.5114f85.

1. Pojam prednosti odnosi se na to kako uspoređujemo verzije u poretku.
Prednost se MORA procjenjivati tako da zasebno promatramo oznaku verzije kao
veću, manju, zakrpu i identifikatore predizdanja tim redom. (Metapodaci *builda*
ne utječu na prednost). Prednost određuje prva razlika u usporedbi svake
oznake s lijeva na desno na sljedeći način: Oznake veće verzije, manje verzije i
verzije zakrpe uvijek se uspoređuju numerički. Na primjer: 1.0.0 < 2.0.0 <
2.1.0 < 2.1.1. Kad su oznake veće, manje i verzije zakrpe jednake, normalna
verzija ima prednost nad verzijom predizdanja. Primjer: 1.0.0-alpha < 1.0.0.
Prednost između dvije verzije predizdanja s istim oznakama veće, manje i verzije
zakrpe MORAJU se odrediti usporedbom svake oznake odvojene točkom s lijeva na
desno, dok ne dođemo do razlike na sljedeći način: identifikatori koji se
sastoje samo od broja uspoređuju se numerički, dok se slova i crtice uspoređuju
leksički u ASCII poretku. Nebrojčane oznake uvijek imaju prednost nad brojčanim.
Veći niz oznaka predizdanja ima prednost nad manjim nizom, ako su prethodne
oznake jednake. Primjer: 1.0.0-alpha < 1.0.0-alpha.1 < 1.0.0-alpha.beta < 1.0.0-beta <
1.0.0-beta.2 < 1.0.0-beta.11 < 1.0.0-rc.1 < 1.0.0.

Zašto koristiti Semantičko verzioniranje?
----------------------------

Ovo nije nova, niti revolucionarna ideja. Štoviše, vjerojatno već koristite
nešto vrlo slično. Problem je u tome što "slično" nije dovoljno dobro. Bez
poštivanja neke formalne specifikacije, oznake verzije su u suštini beskorisne
za upravljanje ovisnostima. Ako damo ime i jasnu definiciju gore navedenim
idejama, postaje lakše iskomunicirati svoje namjere korisnicima softvera.
Jednom kada su te namjere jasne i fleksibilne (ali ne previše fleksibilne)
možemo definirati specifikacije ovisnosti.

Možemo jednostavnim primjerom pokazati kako Semantičko verzioniranje može
ostaviti pakao ovisnosti u prošlosti. Zamislite *library* "Vatrogasno_vozilo."
Potreban joj je Semantički verzionirani paket "Ljestve". U trenutku kad je
"Vatrogasno_vozilo" kreirano, "Ljestve" su na verziji 3.1.0. Budući da
"Vatrogasno_vozilo" koristi određene funkcionalnosti koje su uvedene u verziji
3.1.0, možete bez straha navesti ovisnost o paketu "Ljestve" verzije veće ili
jednake 3.1.0, ali manje od 4.0.0. Tako, kada "Ljestve" verzije 3.1.1 i 3.2.0
budu dostupne, možete ih dodati u svoj sustav upravljanja paketima i biti
sigurni da će biti kompatibilne s postojećim ovisnim softverom.

Kao odgovoran programer htjet ćete se, naravno, uvjeriti da će svaka nadogradnja
paketa funkcionirati kao što je navedeno. Stvarni je svijet zbrka i ne možemo
ništa poduzeti po tom pitanju osim biti oprezni. Ono što možete napraviti je
prihvatiti Semantičko verzioniranje kao siguran način za izdavanje i nadogradnju
paketa bez potrebe za izgradnjom novih verzija ovisnih paketa te tako sačuvati
vrijeme i živce.

Ako vam ovo sve dobro zvuči, sve što vam je potrebno da bi ste počeli koristiti
Semantičko verzioniranje je da navedete da ga koristite i slijedite pravila.
Stavite poveznicu na ovu stranicu u svoju README datoteku, kako bi i ostali bili
svjesni pravila i mogli imati koristi od njih.

Česta pitanja
---

### Kako upravljati promjenama za inicijalne faze razvoja verzija 0.y.z?

Najjednostavniji je način da započnete inicijalni razvoj izdavanjem verzije
0.1.0 te inkrementirate oznaku manje verzije za svako sljedeće izdanje.

### Kako znamo kada izdati verziju 1.0.0?

Ako se softver koristi u produkciji, već bi vjerojatno trebao biti na verziji
1.0.0. Ako već imamo stabilni API, na koji korisnici mogu računati, trebao bi
biti na verziji 1.0.0. Ako ste zabrinuti zbog kompatibilnosti unatrag, softver
bi već trebao biti izdan pod verzijom 1.0.0.

### Ne sprječava li ovo ubrzani razvoj i brzo povećavanje verzija?

Veća verzija nula se svodi na brzi razvoj. Ako mijenjate API svaki dan, trebali
bi ostati na verziji 0.y.z ili na posebnoj grani raditi na sljedećoj većoj
verziji.

### Ako i najmanje unatrag inkompatibilne promjene u APIju zahtijevaju povećanje veće verzije, neću li vrlo brzo doći do verzije 42.0.0?

Ovo je pitanje odgovornog razvoja i predviđanja. U softver koji ima puno
ovisnog koda, inkompatibilne promjene potrebno je uvoditi postupno. Cijena
nadogradnje može biti značajna. Ako morate povećati veću verziju, kako biste
izdali verziju s inkompatibilnim promjenama, morate razmisliti o posljedicama
tih promjenama i procijeniti odnos cijene i koristi.

### Dokumentacija čitavog javnog APIja zahtijeva previše posla!

Vaša je odgovornost kao profesionalnih programera da ispravno dokumentirate
softver koji je namijenjen korisnicima. Upravljanje složenosti softvera vrlo
je važno kako biste projekt održali efikasnim, što je teško ako korisnici ne
znaju kako koristiti vaš softver ili koje metode mogu zvati. Semantičko
verzioniranje i kvalitetno definirani Semantički verzionirani javni API osigurat
će da sve funkcionira kako treba.

### Što ako slučajno izdam unatrag inkompatibilne promjene kao manju verziju?

Čim primijetite da ste prekršili specifikaciju Semantičkog verzioniranja,
potrebno je ispraviti pogrešku te izdati manju verziju koja će ispraviti problem
i vratiti kompatibilnost. Čak i u takvim uvjetima, nije prihvatljivo mijenjati
verzionirana izdanja. Ako je prikladno, dokumentirajte verziju koja krši
specifikaciju te informirajte korisnike kako bi je bili svjesni.

### Što činiti ako promijenim ovisnosti bez mijenjanja javnog APIja?

Takve promjene smatramo kompatibilnima jer ne utječu na javni API. Softver koji
eksplicitno ovisi o istim ovisnostima kao i vaš paket treba imati vlastite
specifikacije ovisnosti, a autor će se brinuti o konfliktima. Je li promjena
na razini zakrpe ili manje verzije, ovisi o tome jeste li dodali ovisnosti
kako bi ispravili *bug* ili dodali nove funkcionalnosti. U posljednjem slučaju
možemo očekivati i dodatni kod, pri čemu se očito radi o novoj manjoj verziji.

### Što ako nehotice promijenim javni API na način koji ne odgovara promjeni oznake verzije (npr. u kodu neispravno uvodim veću unatrag inkompatibilnu promjenu unutar izdanja zakrpe)?

Pokušajte najbolje prosuditi sami. Ako imate velik broj korisnika, na koje će
značajno utjecati promjena unatrag, najbolje je da objavite veću verziju, iako
bi takav ispravak mogli smatrati izdanjem zakrpe. Upamtite, poanta Semantičkog
verzioniranja je dodavanje značenja promjenama oznake verzije. Ako su takve
promjene bitne korisnicima koristite oznake verzije kako biste ih informirali.

### Kako upravljati zastarjelim (deprecating) funkcionalnostima?

Postojeće funkcionalnosti koje zastarijevaju, uobičajeni su dio razvoja softvera
i često su potrebne kako bi razvoj napredovao. Kad označavate dio javnog APIja
kao zastarjeli (deprecated), potrebno je učiniti dvije stvari: (1) ažurirati
dokumentaciju kako bismo informirali korisnika, (2) izdati novu manju verziju
s definiranim zastarjelim (deprecated) dijelovima softvera. Prije nego potpuno
uklonite zastarjele funkcionalnost u novoj većoj verziji, potrebno je izdati
barem jednu manju verziju koja sadrži zastarjele (deprecated) dijelove, kako
bi korisnici glatko prešli na novu verziju APIja.

### Ima li semver ograničenu veličinu oznake verzije?

Ne, ali budite razumni. Oznaka verzije od 255 znakova je vjerojatno pretjerana,
na primjer. Također, neki sustavi mogu imati svoja ograničenja veličine oznake.

O projektu
-----

Autor specifikacije Semantičkog Verzioniranja je [Tom
Preston-Werner](http://tom.preston-werner.com), izumitelj Gravatara i suosnivač
GitHuba.

Ako želite ostaviti povratne informacije, molimo [otvorite issue na
GitHubu](https://github.com/mojombo/semver/issues).

Licenca
-------

[Creative Commons - CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)
