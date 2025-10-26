---
title: Numerotarea Semantică a Versiunii Software 2.0.0
language: ro
---

Numerotarea Semantică a Versiunii Software 2.0.0
================================================

Sumar
-----
Fiind dat un număr de versiune MAJOR.MINOR.PATCH, se incrementează:
1. Numărul MAJOR atunci când se fac modificări ale API-ului ce nu sunt
   compatibile cu versiunea precedentă,
1. Numărul MINOR atunci când se adaugă funcționalitate care nu afectează
   compatibilitatea, și
1. Numărul PATCH atunci când se adaugă corectări de bug-uri care nu afectează
   compatibilitatea.

Etichete adiționale pentru pre-release și build sunt disponibile ca extensii ale
formatului MAJOR.MINOR.PATCH.

Introducere
-----------

În lumea dezvoltării de software există ceea ce se numește "iadul
dependențelor". Cu cât sistemul crește și cu cât integrezi mai multe pachete în
soft-ul tău, cu atât crește posibilitatea să ajungi, într-o zi, în acest iad.

În sistemele cu multe dependențe, lansarea de versiuni noi ale pachetelor poate
să devină ușor un coșmar. Dacă specificațiile dependențelor sunt prea stricte,
există riscul de înghețare a versiunii (inabilitatea de a îmbunătății un pachet
fără a lansa versiuni noi pentru fiecare din pachetele dependente). Dacă
specificațiile sunt prea flexibile, există riscul de amestecătură a versiunii
(compatibilitate cu prea multe versiuni viitoare). Iadul dependențelor este
acela când înghețarea versiunii sau amestecătura versiunii te împiedică să
avansezi proiectul ușor și sigur.

Ca o soluție la această problemă, propunem un set de reguli și cerințe simple care
să dicteze modul în care să se stabilească și să se incrementeze numerele
de versiune. Aceste reguli sunt bazate pe, dar nu neapărat limitate la,
practici răspândite folosite în dezvoltarea de software open-source și
closed-source. Pentru ca acest sistem de numerotare a versiunii să funcționeze,
întâi trebuie stabilit și declarat un API public. Acesta poate consta în
documentație sau să reiasă automat din codul sursă. Indiferent de metoda aleasă,
este important ca acest API să fie clar și foarte specific. Odată ce ai stabilit
API-ul public, vei comunica schimbări efectuate asupra sa prin incrementări ale
numărului de versiune. Să luăm în considerare formatul X.Y.Z
(Major.Minor.Patch). Corectările de bug-uri care nu afectează API-ul vor
incrementa versiunea patch, adăugările și modificările care de asemenea păstrează
compatibilitatea vor incrementa versiunea minoră, iar adăugările și modificările
care sunt incompatibile vor incrementa versiunea majoră.

Am numit acest sistem "numerotarea semantică a versiunii software". Sub această
schemă de numerotare, numerele de versiune și modul în care ele se schimbă,
oferă o semnificație anume despre codul sursă și ce a fost modificat de la o
versiune la alta.

Specificații pentru numerotarea semantica a versiunii software (SemVer)
-----------------------------------------------------------------------
Cuvintele cheie "TREBUIE", "NU TREBUIE", "NECESAR", "TREBUIE", "NU TREBUIE",
"AR TREBUI SĂ", "NU AR TREBUI SĂ", "RECOMANDAT", "POATE" și "OPTIONAL" în acest
document trebuiesc interpretate în maniera descrisă în
[RFC 2119](https://tools.ietf.org/html/rfc2119).

1. Software-ul care folosește Numerotarea Semantică a Versiunii TREBUIE să
   declare un API public. Acest API poate fi declarat în codul sursă să existe
   numai în documentație. Indiferent cum este declarat AR TREBUI să fie exact și
   complet.

1. Un număr de versiune normal TREBUIE să ia forma X.Y.Z unde, Z, Y și Z sunt
   numere naturale și NU TREBUIE să conțină cifre zero în față. X este versiunea
   majoră, Y este versiunea minoră și Z este versiunea de corecție (patch). Fiecare
   element TREBUIE să crească numeric. Spre exemplu: 1.9.0 -> 1.10.0 -> 1.11.0.

1. Odată ce un pachet versionat a fost lansat, conținutul acelei versiuni
   NU TREBUIE să fie modificat. Orice modificare TREBUIE să fie lansată ca o nouă
   versiune.

1. Versiunea majoră zero (0.y.z) este pentru faza inițială de dezvoltare. Orice
   POATE să fie modificat la orice moment în această versiune majoră. API-ul public
   NU AR TREBUI SA fie considerat stabil.

1. Versiunea 1.0.0 definește API-ul public. Modul în care numărul versiunii este
   incrementat după această lansare (en. release) depinde de acest API public și
   felul în care acesta se schimbă.

1. Versiunea de corecție (patch-ul) Z (x.y.Z | x > 0) TREBUIE să fie incrementat
   doar dacă există corecții (en. bug fixes) compatibile cu versiunile anterioare au
   fost introduse. O corecție este definită ca o modificare internă care corectează
   un comportament incorect.

1. Versiunea minoră Y (x.Y.z | x > 0) TREBUIE să fie incrementată dacă
   funcționalitate nouă, compatibilă cu versiunea anterioară, este introdusă in
   API-ul public. TREBUIE să fie incrementată dacă orice funcționalitate din API-ul
   public este marcată ca învechită (en. deprecated). POATE fi incrementată dacă
   funcționalitate sau îmbunătățiri substanțiale sunt introduse în codul privat.
   POATE include modificări de tip corecție. Numărul versiunii de corecție TREBUIE
   resetat la 0 când numărul versiunii minore este incrementat.

1. Numărul versiunii majore X (X.y.z | X > 0) TREBUIE incrementat daca modificări
   care nu sunt compatibile cu versiunile anterioare au fost introduse în API-ul
   public. POATE de asemenea include modificări ale numărului versiunii minore și
   ale numărului de versiune de corecție. Numerele de versiune minor și de corecție
   TREBUIE să fie resetate la 0 când versiunea majoră este incrementată.

1. O versiune de tipul pre-lansare (en. pre-release) POATE fi notată adăugând o
   liniuță separatoare și o serie de identificatori separați prin punct imediat
   după numărul versiunii de corecție. Identificatorii TREBUIE să conțină numai
   caractere ASCII alfanumerice și caracterul liniuță [0-9A-Za-z-]. Identificatorii
   NU TREBUIE să fie goi. Identificatorii numerici NU TREBUIE să conțină zerouri în
   față. Versiunile pre-lansare au o precedență față de versiunea normală asociată.
   O versiune pre-lansare indică faptul că versiunea este instabilă și ar putea să
   nu satisfacă nevoile de compatibilitate pe care le implică numărul versiunii
   normale. Exemple: 1.0.0-alpha, 1.0.0-alpha.1, 1.0.0-0.3.7,
   1.0.0-x.7.z.92, 1.0.0-x-y-z.--.

1. Metadatele de build POT fi notate adăugând un plus și o serie de identificatori
   separați cu punct imediat după versiunea de corecție sau de pre-lansare.
   Identificatorii TREBUIE să fie compuși doar din caractere ASCII alfanumerice și
   liniuțe [0-9A-Za-z-]. Identificatorii nu trebuie să fie goi. Metadatele de build
   trebuie ignorate când se determină precedența versiunii. Astfel două versiuni
   care diferă doar prin metadatele de build au aceeași precedență. Exemple:
   1.0.0-alpha+001, 1.0.0+20130313144700,
   1.0.0-beta+exp.sha.5114f85, 1.0.0+21AF26D3----117B344092BD.

1. Precedența se referă la cum versiunile sunt comparate una cu alta atunci când
   se sortează.

1. Precedența trebuie calculată separând versiunea în identificatori major,
   minor, corecți și pre-lansare în această ordine (metadata de build nu este
   luată în considerare la calculul precedenței).

1. Precedența este determinată de prima diferență când se compară fiecare
   dintre acești identificatori de la stânga la dreapta după cum urmează: major,
   minor și corecție sunt întotdeauna comparate numeric.

   Exemplu: 1.0.0 < 2.0.0 < 2.1.0 < 2.1.1.

1. Când numerele versiunii majore, minore și de corecție sunt egale, o versiune
   de pre-lansare are precedență mai mică decât o versiune normală.

   Exemplu: 1.0.0-alpha < 1.0.0.

1. Precedența a două versiuni pre-lansare cu aceeași versiune majoră, minoră și
   de corecție TREBUIE determinată comparând fiecare identificator separat cu
   punct, de la stânga la dreapta până când o diferență este găsită, după cum
   urmează:

    1. Identificatorii care constau în cifre sunt comparați numeric.

    1. Identificatorii cu litere sau liniuță sunt comparați lexical în ordinea
       de sortare ASCII.

    1. Identificatorii numerici au întotdeauna precedență mai mică decât cei
       non-numerici.

    1. Un set mai mare de câmpuri pre-lansare are o precedență mai mare decât
       un set mai mic, daca toți identificatorii precedenți sunt egali.

       Exemplu: 1.0.0-alpha < 1.0.0-alpha.1 < 1.0.0-alpha.beta < 1.0.0-beta < 1.0.0-beta.2 < 1.0.0-beta.11 < 1.0.0-rc.1 < 1.0.0.

Forma gramaticală Backus–Naur pentru versiuni SemVer valide
-----------------------------------------------------------
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

De ce să folosim numerotarea semantică a versiunii?
---------------------------------------------------

Aceasta nu este o idee nouă sau revoluționară. De fapt, deja poate faci ceva de
genul acesta deja. Problema este că "ceva de genul" nu este suficient de bine.
Fără a adera la o specificație formală, numerele de versiune sunt în esență
inutile pentru managementul dependințelor. Oferind un nume și o definiție clară
ideilor de mai sus, devine facil să comunici intențiile tale utilizatorilor
software-ului dezvoltat de tine. Odată ce aceste intenții sunt clare, specificații
de dependințe flexibile (dar nu mult prea flexibile) pot fi făcute.

Un exemplu simplu va demonstra cum Versionarea Semantică poate face iadul
dependințelor (en. dependency hell) o realitate de domeniul trecutului. Să
considerăm o bibliotecă numită "Firetruck". Necesită un package cu Versionare
Semantică numit "Ladder". La momentul când Firetruck este creat, Ladder este
la versiunea 3.1.0. Din moment ce Firetruck folosește niște funcționalitate care
a fost introdusă pentru prima dată în
3.1.0 poți specifica în siguranță ca dependința pentru Ladder este mai mare sau
egală cu 3.1.0 dar mai mică decât 4.0.0. Când versiunile pentru Ladder 3.1.1 și
3.2.0 vor fi disponibile, le poți lansa în sistemul tău de management al
pachetelor știind că vor fi compatibile cu software-ul dependent, existent.

Fiind un dezvoltator responsabil, desigur vei dori să verifici ca orice
upgrade-uri de pachete funcționează așa cum trebuie. Realitatea este un loc
dezordonat și cu probleme; nu putem face nimic în privința asta decât să fim
vigilenți. Ce poți face este să lași Versionarea Semantică să îți ofere o cale
sănătoasă prin care să lansezi și actualizezi pachete fără a fi nevoie să dezvolți
noi versiuni de pachete dependente, fără a pierde vremea și cu deranj minim.

Dacă toate acestea sună ca ceva ce îți dorești să ai, tot ce trebuie să faci ca
să începi să folosești Versionarea Semantică este să declari asta și să urmezi
regulile. Include un link către acest site web đin fișierul README pentru ca
alții să știe regulile și să beneficieze de pe urma lor.

Întrebări frecvente
-------------------

### Care este modul de lucru cu revizuiri (en. revisions) 0.y.z în faza inițială de dezvoltare?

Cel mai simplu lucru care poate fi făcut este să începi lansarea de dezvoltare
inițială la 0.1.0 și apoi să incrementezi versiunea minoră la fiecare lansare
ulterioară.

### Când știu că este momentul să lansez 1.0.0?

Daca software-ul tău este folosit în producție, ar trebui să fie deja 1.0.0. Dacă
ai un API stabil de care utilizatorii au ajuns să depindă, at trebui să fie 1.0.0.
Dacă îti faci griji despre compatibilitate cu versiunile anterioare, ar trebui
deja să fie 1.0.0.

### Nu descurajează asta dezvoltarea și iterațiile rapide?

Versiunea majoră zero este pentru și despre dezvoltare rapidă. Dacă schimbi
API-ul în fiecare zi ar trebui să fi încă în versiunea 0.y.z sau pe o ramură de
dezvoltare separată, lucrând la următoarea versiune majoră.

### Dacă până și cele mai mici modificări ale API-ului public care nu mențin compatibilitatea cu versiunile anterioare necesită o incrementare a versiunii majore, nu voi ajunge foarte repede la versiunea 42.0.0?

Aceasta este o chestiune de dezvoltare responsabilă și prevedere. Modificările
incompatibile nu ar trebui introduse cu ușurință în software care are foarte
mult cod dependent. Costul care poate apărea pentru a actualiza poate să fie
semnificativ. Să crești versiunea majoră pentru a lansa modificări care nu
mențin compatibilitatea înseamna să te gândești dinainte la impactul pe care
îl vor avea modificările și să evaluezi rația costuri/beneficii.

### Să documentez întregul API public necesită prea multă muncă!

Este responsabilitatea ta ca dezvoltator profesionist să documentezi software
care este intenționat spre a fi folosit de alții. Managementul complexității
software este un aspect deosebit de important în a menține un proiect la un
nivel înalt de eficiență și asta este ceva dificil de realizat dacă nimeni nu
știe cum să folosească software-ul dezvoltat de tine sau ce metode poate să
apeleze în siguranță. Pe termen lung, Versionarea Semantică, și insistarea pe
a avea un API public foarte bine definit poate să mențină totul într-o stare bună.

### Ce fac dacă în mod accidental lansez o versiune minoră care este incompatibilă cu versiunile anterioare?

Imediat ce realizezi că ai încălcat specificațiile Versionării Semantice,
rezolvă problema și lansează o nouă versiune minoră care rezolvă problema
incompatibilității și reface compatibilitatea cu versiunile anterioare.
Chiar și în acest caz, nu este acceptabil să modifici versiuni deja lansate.
Dacă este cazul, documentează versiunea care introducea această problemă și
informează utilizatorii de această problemă pentru ca și ei să cunoască
problema introdusă de versiunea în cauză.

### Ce să fac dacă înnoiesc propriile mele dependințe fără a modifica API-ul public?

Acest lucru este considerat compatibil deoarece nu afectează API-ul public.
Software care în mod explicit depinde de aceleași dependințe de care depinde
pachetul tău, ar trebui să aibă propriile sale specificații de dependințe și
autorul sau va realiza orice conflicte. Determinarea dacă modificarea este una
de tip corecție sau de nivel minor, depinde dacă ai înnoit dependințele pentru
a rezolva un bug sau pentru a introduce funcționalități noi. In mod normal ca
dezvoltator mă aștept la cod adițional pentru al doilea caz și natural ar fi o
incrementare de nivel minor.

### Dacă din neatenție alterez API-ul public într-o manieră care nu aderă la principiile schimbării de versiune (ex. codul în mod incorect introduce o modificare care afectează funcționalitatea într-o lansare de tip corecție)

Folosește-ți judecata. Dacă ai o audiență uriașă care va fi afectată în mod
drastic schimbând comportamentul pachetului înapoi la ce se intenționa din
API-ul public, atunci ar putea fi cel mai bine să lansezi o versiune majoră, d
eși corecția în mod strict ar putea fi considerată o versiune de corecție.
Reamintește-ți ca Versionarea Semantică este despre a oferi o semnificație
în funcție de cum se schimbă numărul de versiune. Dacă aceste schimbări sunt
importante pentru utilizatorii tăi, folosește-te de numărul de versiune
pentru a-i informa.

### Cum abordez funcționalitatea care este pe cale să devină învechită?

Funcționalitatea existentă care este pe cale să devină învechită
(en. deprecated) este un aspect normal al dezvoltării software și este de
multe ori necesară pentru a obține progresul. Când parte din API-ul public
devine învechită, ar trebi să faci două lucruri: (1) înnoiește documentația
pentru ca utilizatorii să știe de modificare, (2) lansează o nouă versiune
minoră în care păstrezi codul învechit. Înainte de a elimina complet codul
învechit într-o lansare majoră, ar trebuie să fie cel puțin o lansare minoră
care conține codul învechit care va fi eliminat, pentru ca utilizatorii să
poată trece elegant la noul API.

### Are SemVer o dimensiune limită a șirului de caractere care definește versiunea?

Nu, dar folosește o judecată sănătoasă. Un șir de 255 de caractere este probabil
exagerat spre exemplu. De asemenea, sisteme specifice ar putea impune propriile
lor limite în ceea ce privește dimensiunea șirului de caractere.

### Este "v1.2.3" o versiune semantică?

Nu, "v1.2.3" nu este o versiune semantică. Totuși, prefixarea unei versiuni
semantice cu un "v" este o modalitate comună (în engleză și română) pentru a
indica faptul că este un număr de versiune. Abrevierea cuvântului "versiune"
prin "v" este un comportament văzut des în sistemele de control al versiunii.
Exemplu: `git tag v1.2.3 -m "Lansare versiune 1.2.3"`, în acest caz "v1.2.3"
este o etichetă (en. tag) și versiunea semantică este "1.2.3".

### Există o expresie regulată (RegEx) pentru a verifica un șir de caractere SemVer?

Există două. Una cu grupuri cu denumire pentru acele sisteme care le suportă
(PCRE "Perl Compatible Regular Expressions", i.e. Perl, PHP and R], Python and Go).

Vezi: <https://regex101.com/r/Ly7O1x/3/>

```
^(?P<major>0|[1-9]\d*)\.(?P<minor>0|[1-9]\d*)\.(?P<patch>0|[1-9]\d*)(?:-(?P<prerelease>(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+(?P<buildmetadata>[0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$
```

Și una cu grupuri de captură numerotate (așadar cg1 = major, cg2 = minor,
cg3 = corecție, cg4 = pre-lansare și cg5 = meta-informație de build) 
care sunt compatibile cu ECMA Script (JavaScript), 
PCRE (Perl Compatible Regular Expressions,
i.e. Perl, PHP and R), Python și Go.

Vezi: <https://regex101.com/r/vkijKf/1/>

```
^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$
```

Despre
------

Specificațiile numerotării semantice a versiunii a fost original creată de [Tom
Preston-Werner](https://tom.preston-werner.com), inventatorul Gravatar și co-fondator al GitHub.

Dacă dorești să oferi feedback, te rugăm [înaintează o sesizare pe GitHub](https://github.com/semver/semver/issues).

Traducerea în română a fost realizată de catre echipele de dezvoltatori software ai
[Epigrade](https://www.epigrade.com/),
[Locatorix](https://www.locatorix.com/),
[Moneeva](https://www.moneeva.com/) și
[Lux Rehabs](https://www.luxrehabs.com/).

Licență
-------

[Creative Commons ― CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)
