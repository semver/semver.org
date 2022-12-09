---
title: Semantičko Verzionisanje 2.0.0
language: sr
author: Aleksandar Marinković
---

Semantičko Verzionisanje 2.0.0
==============================

Sažetak
-------

Za dati broj verzije MAJOR.MINOR.PATCH, inkrementirajte:

1. MAJOR (GLAVNU) verziju kada unesete nekompatibilne izmene API-ja
1. MINOR (MANJU) verziju kada dodate unazad kompatibilnu funkcionalnost
1. PATCH (ZAKRPU) verziju kada dodate unazad kompatibilne ispravke bugova (grešaka)

Dodatne oznake za predizdanja i metapodatke builda (izrade) dostupne su kao proširenja
u formatu MAJOR.MINOR.PATCH.

Uvod
------------

U svetu upravljanja softverom postoji užasno mesto koje nazivamo
„pakao zavisnosti“. Kako vaš sistem raste i što više paketa
integrišete u svoj softver, veća je verovatnoća da ćete se naći
u ovom stanju dubokog očaja.

U sistemima sa mnoštvom zavisnosti, objavljivanje novih verzija paketa može brzo
postati košmar. Ako su specifikacije zavisnosti suviše stroge, nalazite se u opasnosti
od zaključavanja verzije (nemogućnost nadogradnje paketa bez neophodne
objave nove verzije svakog zavisnog paketa). Takođe, ako su specifikacije zavisnosti isuviše labave, neizbežno će vas dovesti u situaciju verzijskog promiskuiteta
(pod pretpostavkom kompatibilnosti sa više budućih verzija nego što je razumno).
Pakao zavisnosti je situacija u kojoj se nalazite kada zaključavanje verzije i/ili verzijski promiskuitet sprečavaju jednostavno i bezbedno napredovanje projekta.

Kao rešenje ovog problema, predlažemo jednostavan skup pravila i
zahteva koji diktiraju kako se brojevi verzija dodeljuju i inkrementiraju.
Ova pravila su zasnovana, ali nisu nužno ograničena na već postojeće i
široko rasprostranjene uobičajene prakse koje se koriste u closed i open-source
softveru. Kako bi ovaj sistem funkcionisao, neophodno je prvo objaviti public (javni) API. 
Možemo to primeniti u dokumentaciji ili u samom kodu. U svakom slučaju, važno je da
API bude jasan i precizan. Jednom kad identifkujemo public API, izmene prenosimo 
kroz specifikovane inkrementacije broja verzije.
Razmotrimo format verzije X.Y.Z (Major.Minor.Patch). Ispravke bugova (grešaka) koji 
ne utiču na API inkrementiraju patch (zakrpa) verziju, a unazad nekompatibilne promene API-ju inkrementiraju major (glavnu) verziju.

Ovaj sistem nazivamo „Semantičko Verzionisanje“. Prema ovoj šemi, brojevi verzija
i način na koji se menjaju daju informacije o osnovnom kodu koji se nalazi pod datom verzijom, kao i šta se menjalo od jedne verzije do sledeće.

Specifikacija Semantičkog Verzionisanja (SemVer)
------------------------------------------------

Ključne reči "MUST" ("MORA"), "MUST NOT" ("NE SME"), "REQUIRED ("NEOPHODNO"), "SHALL"("HOĆE"), "SHALL NOT" ("NEĆE"),"SHOULD" ("TREBA"), "SHOULD NOT" ("NE TREBA"), "RECOMMENDED" ("PREPORUČENO"), "MAY" ("MOŽE") i "OPTIONAL" ("OPCIONO") ovom dokumentu treba tumačiti kako je opisano u [RFC 2119](https://tools.ietf.org/html/rfc2119).

1. Softver koji koristi Semantičko Verzionisanje MUST (MORA) objaviti publlic (javni) API. Ovaj API može biti deklarisan u samom kodu ili postojati striktno u dokumentaciji.
U svakom slučaju, SHOULD (TREBA) da bude precizan i sveobuhvatan.

1. Normalna oznaka verzije MUST (MORA) biti u formatu X.Y.Z gde su X, Y i Z ne-negativni
celi brojevi i ne smeju počinjati sa nulom. X označava glavnu verziju, Y manju
verziju, a Z zakrpu. Svaki element MUST (MORA) se numerički inkrementirati.
Na primer: 1.9.0 -> 1.10.0 -> 1.11.0.

1. Jednom kad je verzionisani paket objavljen, sadržaj te verzije MUST NOT (NE SME) se
menjati. Svaka izmena MUST (MORA) se objavljivati kao nova verzija.

1. MAJOR (GLAVNA) verzija nula (0.y.z) je za inicijalni razvoj. Bilo šta se MAY (MOŽE) menjati
u svakom trenutku. Ovaj public (javni) API SHOULD NOT (NE TREBA) smatrati stabilnim.

1. Verzija 1.0.0 definiše public (javni) API. Način na koji će se oznaka verzije
inkrementirati nakon ove objave zavisi od ovog public (javnog) API-ja i izmena na njemu.

1. Patch (zakrpa) verzija Z (x.y.Z | x > 0) MUST (MORA) se inkrementirati kada se dodaju samo unazad kompatibilne ispravke bagova (gresaka). Ispravke bugova (gresaka) su definisane kao promene koda koje ispravljaju nepravilno ponašanje.

1. Minor (manja) verzija Y (x.Y.z | x > 0) MUST (MORA) se inkrementirati ako je nova, unazad kompatibilna funkcionalnost uvedena u javni API. Takođe MUST (MORA) se inkrementirati kada se neka od funkcionalnosti API-ja označi kao deprecated (zastarela).
MAY (MOŽE) biti inkrementirana ukoliko se uvedu substancijalno nove funkcionalnosti ili
poboljšanja u okviru privatnog koda. MAY (MOŽE) uključivati promene nivoa zakrpe.
PATCH (ZAKRPA) verzija MUST (MORA) se resetovati na 0 kada se minor (manja) verzija inkrementira.

1. Major (glavna) verzija X (X.y.z | X > 0) MUST (MORA) se inkrementirati ako se unazad nekompatibilne promene uvode u javni API. MAY (MOŽE) uključivati i promene minor (manje) i promene na nivou patch (zakrpe) verzije. Patch (zakrpe) i minor (manje) verzije MUST (MORA) da se resetuju na 0 kada se major (glavna) verzija inkrementira.

1. Verzija predizdanja MAY (MOŽE) biti označena dodavanjem hyphena (povlake) i serijom identifikatora razdvojenih tačkom neposredno nakon patch (zakrpe) verzije.Identifikatori MUST (MORAJU) sadržati samo ASCII alfanumeričke znakove i hyphene (povlake)
[0-9A-Za-z-]. Identifikatori MUST NOT (NE SMEJU) biti prazni. Numerički identifikatori MUST NOT (NE SMEJU) počinjati nulom. Verzije predizdanja imaju niži prioritet od povezane normalne verzije. Verzija predizdanja označava da je verzija nestabilna i da možda neće biti zadovoljeni predviđeni zahtevi kompatibilnosti kao što je označeno njegovim povezanim
normalnim verzijama. Primeri: 1.0.0-alpha, 1.0.0-alpha.1, 1.0.0-0.3.7,
1.0.0-x.7.z.92, 1.0.0-x-y-z.\-\-.

1. Metadata (metapodaci) builda (izrade) MAY (MOGU) biti označeni dodavanjem znaka plus
i niza identifikatora odvojenih tačkom, koji se odmah nastavljaju na patch (zakrpu) verziju ili verziju predizdanja. Identifikatori MUST (MORAJU) da sadrže iskljucivo ASCII alfanumeričke znakove i hyphene (povlake) [0-9A-Za-z-]. Identifikatori MUST NOT (NE SMEJU) da budu prazni. Metadata (metapodaci) o buildu (izgradnji) MUST (MORAJU) se zanemariti prilikom određivanja prioriteta verzije. Prema tome dve verzije koje se razlikuju samo u metapodacima builda (izrade), imaju isti prioritet. Primeri: 
1.0.0-alpha+001, 1.0.0+20130313144700, 1.0.0-beta+exp.sha.5114f85,
1.0.0+21AF26D3\-\-\-\-117B344092BD.

1. Prioritet se odnosi na način kojim se verzije u poretku međusobno upoređuju.

   1. Prioritet se MUST (MORA) izračunati odvajanjem verzije na major (glavne),
 minor (manje), patch (zakrpe) i identifikatora predizdanja (metadata (metapodaci) builda (izrade) nemaju ulogu u odredjivanju prioriteta).

   1. Prioritet se određuje prvom razlikom kada se upoređuje svaki od identifikatora
   s leva na desno: major (glavni), minor (manji) i patch (zakrpa). Verzije se uvek upoređuju brojčano.

   Primer: 1.0.0 < 2.0.0 < 2.1.0 < 2.1.1.

   1. Kada su major (glavna), minor (manja) i patch (zakrpa) jednake, verzija predizdanja ima niži prioritet od normalne verzije:

   Primer: 1.0.0-alpha < 1.0.0.

   1. Prioritet između dve verzije predizdanja sa jednakim major (glavnom), minor (manjom) i patch (zakrpom) MUST (MORA) biti određen upoređivanjem svakog identifikatora razdvojenog tačkama sa leva na desno dok se ne pronađe razlika na sledeći način:

      1. Identifikatori koji se sastoje samo od cifara upoređuju se numerički.

      1. Identifikatori sa slovima ili hyphenima (povlakama) se upoređuju leksički u ASCII
      poretku.

      1. Numerički identifikatori uvek imaju nizi prioritet od nenumeričkih
      identifikatora.

      1. Veći skup oznaka predizdanja ima visi prioritet od manjeg skupa, ako su svi prethodni identifikatori jednaki.

      Primer: 1.0.0-alpha < 1.0.0-alpha.1 < 1.0.0-alpha.beta < 1.0.0-beta < 
      1.0.0-beta.2 < 1.0.0-beta.11 < 1.0.0-rc.1 < 1.0.0.


Backus–Naur Gramatički Obrazac za Validne SemVer Verzije
--------------------------------------------------------
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



Zašto koristiti Semantičko Verzionisanje?
-----------------------------------------

Ovo nije nova ili revolucionarna ideja. Tačnije, verovatno već radite nešto vrlo slično. Problem je što nešto "slično" nije dovoljno dobro. Bez usaglašenosti sa nekom vrstom formalne specifikacije, brojevi verzija su
u suštini beskorisni za upravljanje zavisnostima. Davanjem imena i jasne
definicije gore navedenih ideja, postaje lako preneti svoje namere
korisnicima vašeg softvera. Jednom kada su ove namere jasne, fleksibilne (ali
ne previše fleksibilne) specifikacije zavisnosti konačno je moguće napraviti.

Jednostavan primer može pokazati kako pakao zavisnosti uz Semantičko Verzionisanje ostaje stvar prošlosti. Zamislite library (biblioteku) pod nazivom "Vatrogasno_vozilo". Neophodan joj je Semantičko Verzionisani pod nazivom "Merdevine". U trenutku kreiranja Vatrogasno_vozilo, Merdevine su u verziji 3.1.0. Pošto Vatrogasno_vozilo koristi neke funkcije prvobitno uvedene
u 3.1.0, možete bezbedno specifikovati zavisnost od Merdevine kao veću ili jednaku 3.1.0, ali manju od 4.0.0. Sada, kada Merdevine verzije 3.1.1 i 3.2.0 postaju dostupne, možete ih uneti u svoj sistem upravljanja paketima i biti siguni da će biti kompatibilni sa postojećim zavisnim softverom.

Kao odgovoran programer, vi ćete, naravno, želeti da verifikujete da li upgrade (nadgradnje) paketa funkcionišu kako je navedeno. Stvarni svet je mahom neuredjeno mesto; ne možemo ništa uraditi povodom toga osim da budemo oprezni.
Ono što možemo uciniti je da usvojimo Semantičko Verzionisanje koje nam pruža razuman način za objavljivanje i nadogradnju paketa, bez potrebe za pokretanjem novih verzija zavisnih paketa, štedeći vreme i trud.

Ako vam ovo zvuči poželjno, sve što je potrebno uraditi da biste počeli da koristite Semantičko Verzionisanje je da se deklariste kao korisnik i da potom
sledite pravila. Linkujte ovaj website sa vašim README-ma tako da bi i drugi bili svesni pravila i mogu imati koristi od njih.

Često Postavljana Pitanja
-------------------------

### Kako se nositi sa revizijama 0.y.z u inicijalnoj fazi razvoja?

Najjednostavniji način je da započnete inicijalni razvoj objavom verzije
0.1.0 i potom inkrementirate oznaku minor (manje) verzije za svako sledeće izdanje.

### Kako da znamo kada treba objaviti verziju 1.0.0??

Ako se softver koristi u produkciji, već bi verovatno trebalo biti 1.0.0. Ako već imate stabilni API, na koji se korisnici mogu pouzdati, trebalo bi
biti 1.0.0. Ukoliko ste prilično zabrinuti oko kompatibilnosti unazad, softver
bi već trebalo da je objavljen pod verzijom 1.0.0.

### Zar to ne obeshrabruje rapidan razvoj i brzu iteraciju?

Major (glavna) verzija nula je zapravo predodređena rapidnom razvoju. Ako menjate API svaki dan, trebalo bi ostati na verziji 0.y.z ili na posebnoj grani za razvoj raditi na sledećoj major (glavnoj) verziji.

### Ukoliko i najsitnije unazad nekompatibilne izmene u API-ju zahtevaju naglo uvećavanje major (glavne) verzije, nećemo li vrlo brzo doći do verzije 42.0.0?

Ovo je pitanje odgovornog razvoja i predviđanja. U softver koji ima puno
zavisnog koda, nekompatibilne promene ne treba olako uvoditi. Troškovi
nadogradnje mogu biti značajni. Ako morate povećati major (glavnu) verziju, kako biste objavili verziju sa nekompatibilnim izmenama, morate razmisliti o uticaju tih izmena i proceniti odnos uključenih troškova i koristi.

### Dokumentacija celokupnog public (javnog) API-ja zahteva previše posla!

Vaša je odgovornost kao profesionalnih programera da pravilno dokumentujete
softver koji je namenjen korisnicima. Upravljanje složenošću softvera je izuzetno važan deo održavanja efikasnosti projekta, što je teško ako korisnici ne znaju kako koristiti vaš softver ili koje metode mogu bezbedno pozvati. Dugoročno, Semantičko Verzionisanje i insistiranje na kvalitetno definisanom API-ju omogućiće da svi i sve rade glatko.

### Šta ukoliko slučajno objavimo unazad nekompatibilne izmene kao minor (manju) verziju?

Čim primetite da ste prekršili specifikacije Semantičkog Verzionisanja,
potrebno je ispraviti grešku pa objaviti minor (manju) verziju koja će ispraviti problem i povratiti kompatibilnost unazad. Čak i u takvim uslovima, nije prihvatljivo modifikovati verzionisane objave. Ako je prikladno, dokumentujte verziju koja krši specifikaciju i tako obavestite korisnike kako bi bili svesni toga.

### Šta činiti ukoliko izmenimo sopstvene zavisnosti bez promene public (javnog) API-ja?

Takve izmene smatramo kompatibilnima jer ne utiču na public (javni) API. Softver koji
eksplicitno zavisi od istih zavisnosti kao i naš sopstveni paket treba imati vlastite specifikacije zavisnosti, a autor će se primetiti eventualne konflikte. Je li promjena na nivou patch (zakrpe) ili minor (manje) verzije, zavisi od toga da li ste dodavali svoje zavisnosti kao ispravke bagova (gresaka) ili ste ih uveli kao nove funkcionalnosti. U posljednjem slučaju
možemo očekivati i dodatni kod, pri čemu se očigledno radi o inkrementu minor (manje) verzije.

### Šta ukoliko slučajno izmenimo public (javni) API na način koji ne odgovara izmeni broja verzije (npr. u kod neispravno uvedemo veću unazad nekompatibilnu izmenu u okviru objave patch (zakrpe))?

Koristite svoju najbolju procenu. Ako imate veliki broj korisnika, na koje će
značajno uticati promena unatrag, najbolje je da objavite major (glavnu) verziju, iako
bi takav ispravak mogli smatrati izdanjem zakrpe. Zapamtite, svrha Semantičkog
Verzionisanja je prenošenje značenja putem izmene broja verzije. Ako su takve
izmene važne za vaše korisnike, koristite broj verzije da biste ih informisali.

### Kako postupati sa deprecating (zastarelim) funkcionalnostima?

Postojeće funkcionalnosti koje zastarijevaju, sastavni su deo razvoja softvera
i često su neophodne kako bi razvoj napredovao. Kad označavate deo public(javnog) APIja kao deprecated (zastareli), potrebno je učiniti dve stvari: (1) ažurirati dokumentaciju kako bismo informisali korisnike, (2) objaviti novu minor (manju) verziju sa definisanim deprecated (zastareli) delovima softvera. Pre nego što potpuno uklonite funkcionalnost u novoj major (glavnoj) verziji, potrebno je izdati barem jednu minor (manju) verziju koja sadrži deprecated (zastarele) delove, kako bi korisnici nesmetano prešli na novu verziju API-ja.

### Ima li SemVer ograničenu veličinu stringa verzije?

Ne, ali procenite sami. String verzije od 255 znakova je verovatno preteran,
na primer. Takođe, neki sistemi mogu imati svoja ograničenja veličine stringa.

### Da li je "v1.2.3" semantička verzija?

Ne, "v1.2.3" nije semantička verzija. Međutim, prefiksiranje semantičke verzije
sa "v" je uobičajen način (na engleskom) da se naznači da je to broj verzije.
Skraćenje "verzije" kao "v" se često vidi sa kontrolom verzija. Primer:
`git tag v1.2.3 -m "Release version 1.2.3"`, u kom slučaju je "v1.2.3" naziv
taga (oznake), a semantička verzija je "1.2.3".

### Da li postoji predloženi regularni izraz (RegEx) za proveru SemVer stringa?

Postoje dva. Jedan sa imenovanim grupama za one sisteme koji ih podržavaju
(PCRE [Perl kompatibilni regularni izrazi, tj. Perl, PHP i R], , Python
i Go).

Pogledajte: <https://regex101.com/r/Ly7O1x/3/>

```
^(?P<major>0|[1-9]\d*)\.(?P<minor>0|[1-9]\d*)\.(?P<patch>0|[1-9]\d*)(?:-(?P<prerelease>(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+(?P<buildmetadata>[0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$
```

And one with numbered capture groups instead (so cg1 = major, cg2 = minor,
cg3 = patch, cg4 = prerelease and cg5 = buildmetadata) that is compatible
with ECMA Script (JavaScript), PCRE (Perl Compatible Regular Expressions,
i.e. Perl, PHP and R), Python and Go.

Pogledajte: <https://regex101.com/r/vkijKf/1/>

```
^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$
```


O projektu
----------

Autor specifikacije Semantičkog Verzionisanja je [Tom
Preston-Werner](http://tom.preston-werner.com), pronalazač Gravatar-a i suosnivač GitHub-a.

Ako želite ostaviti povratne informacije, molimo [otvorite issue na
GitHub-u](https://github.com/mojombo/semver/issues).


Licenca
-------

[Creative Commons ― CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)
