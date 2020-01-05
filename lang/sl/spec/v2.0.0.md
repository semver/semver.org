---
title: Semantične verzije 2.0.0
language: sl
author: Peter Kokot
---

Semantične verzije 2.0.0
========================

Povzetek
--------

Dane številke verzij GLAVNA.MANJŠA.POPRAVEK povečajte:

1. GLAVNO verzijo, ko naredite nazaj nezdružljive spremembe API-ja,
1. MANJŠO verzijo, ko dodate funkcionalnost na način združljivosti za
   nazaj in
1. POPRAVEK verzije, ko naredite popravke hroščev z združljivostjo za nazaj.

Dodatne oznake za pred-izdaje in metapodatki gradnje so na voljo kot razširitve
v obliki GLAVNA.MANJŠA.POPRAVEK.

Uvod
----

V svetu programske opreme obstaja grozen prostor imenovan "pekel odvisnosti".
Bolj kot sistem zraste in več kot je paketov, ki jih integrirate v vašo
programsko opremo, bolj verjetno se boste našli nekega dne v tem obupu.

V sistemih z veliko odvisnostmi lahko izdaja nove verzije paketa hitro postane
nočna mora. Če so specifikacije odvisnosti preozke, ste v nevarnosti zaklenjenih
verzij (nezmožnost nadgradnje paketa brez, da izdate nove verzije za vsak
odvisni paket). Če so odvisnosti določene preohlapno, se boste neizogibno opekli
s promiskuiteto verzij (ob predpostavki, da je združljivost z večimi prihodnjimi
verzijami razumna). Pekel odvisnosti je, kjer ste vi, ko je verzija zaklenjena
in/ali vam promiskuiteta verzije preprečuje, da enostavno in varno prestavite
vaš projekt naprej.

Kot rešitev tega problema, se predlaga enostaven skupek pravil in zahtev, ki
diktirajo, kako naj bodo številke verzij določene in povečane. Ta pravila so
osnovana na in ne nujno omejena na pred obstoječe široko skupne prakse v uporabi
tako v programski opremi zaprte kode kot odprte kode. Da ta sistem deluje,
morate najprej določiti javni API. To lahko sestoji iz dokumentacije ali je
izvršeno s strani same kode. Ne glede na to, pomembno je, da je ta API jasen in
točen. Ko enkrat identificirate vaš javni API, lahko komunicirate spremembe na
njem z določenimi povečanji na vaši številki verzije. Smatrajte obliko verzije
X.Y.Z (Glavna.Manjša.Popravek). Popravki hroščev ne vplivajo na API a povečujejo
številko popravka, nazaj združljivi API dodatki/spremembe povečujejo manjšo
verzijo in nazaj nezdružljive API spremembe povečujejo glavno verzijo.

Ta sistem se imenuje "Semantične verzije." Pod to shemo, številke verzij in
način, kako spreminjajo poslani pomen o podležeči kodi in kaj je bilo
spremenjeno iz ene verzije v naslednji.

Specifikacija semantičnih verzij (SemVer)
-----------------------------------------

Ključne besede "MORA", "NE SME", "ZAHTEVANO", "BO", "NE BO", "BI MORALO",
"NE BI SMELO", "PRIPOROČLJIVO", "LAHKO" in "OPCIJSKO" se v tem dokumentu
interpretira, kot so opisane v [RFC 2119](http://tools.ietf.org/html/rfc2119).

1. Programska oprema, ki uporablja semantične verzije MORA določiti javni API.
Ta API je lahko določen v sami kodi ali obstaja striktno v dokumentaciji.
Kakorkoli je končan, BI MORAL biti točen in celovit.

1. Običajna številka verzije MORA biti oblike X.Y.Z, kjer so X, Y, in Z
pozitivna cena števila in NE SMEJO vsebovati vodilnih ničel. X je glavna
verzija, Y je manjša verzija in Z je verzija popravka. Vsak element se MORA
povečati numerično. Na primer: 1.9.0 -> 1.10.0 -> 1.11.0.

1. Ko je enkrat paket verzije izdan, se vsebina te verzija NE SME spremeniti.
Kakršnekoli spremembe MORAJO biti izdane kot nova verzija.

1. Glavna verzija nič (0.y.z) je za začetni razvoj. Karkoli se LAHKO spremeni
kadarkoli. Javni API NE BI SMEL biti smatran za stabilnega.

1. Verzija 1.0.0 definira javni API. Način, kako je številka verzija povečana za
to izdajo je odvisno od tega javnega API-ja in kako se spremeni.

1. Verzija popravka Z (x.y.Z | x > 0) MORA biti povečana, če so predstavljeni
samo nazaj združljivi popravki hroščev. Popravek hrošča je definiran kot
notranja sprememba, ki popravi nepravilno obnašanje.

1. Manjša verzija Y (x.Y.z | x > 0) MORA biti povečana, če so nove nazaj
združljive funkcionalnosti predstavljene javnemu API-ju. MORA biti povečana, če
je katerakoli funkcionalnost javnega API-ja označena za opuščeno. LAHKO je
povečana, če so znatna nova funkcionalnost ali izboljšave predstavljene znotraj
privatne kode. LAHKO vključuje spremembe nivoja popravka. Verzija popravka MORA
biti ponastavljena na nič, ko je manjša verzija povečana.

1. Glavna verzija X (X.y.z | X > 0) MORA biti povečevana, če je kakršnakoli
nazaj nezdružljiva sprememba predstavljena javnemu API-ju. LAHKO vključuje tudi
spremembe manjše verzije in verzije popravka. Manjša verzija in popravek MORATA
biti ponastavljena na 0, ko je glavna verzija povečana.

1. Verzija pred-izdaje je LAHKO označena z dodajanjem vezaja in serije s pikami
ločenih identifikatorjev, ki jim takoj sledi verzija popravka. Identifikatorji
MORAJO biti sestavljeni iz samo alfanumeričnih ASCII-jev in vezaja [0-9A-Za-z-].
Identifikatorji NE SMEJO biti prazni. Numerični identifikatorji NE SMEJO
vključevati vodilnih ničel. Verzije pred-izdaj imajo manjši vrstni red, ko
povezana običajna verzija. Verzija pred-izdaje označuje, da je verzija
nestabilna in lahko ne zadosti namenjenim zahtevam združljivosti, kot je
označeno z njihovimi povezanimi normalnimi verzijami. Na primer: 1.0.0-alpha,
1.0.0-alpha.1, 1.0.0-0.3.7, 1.0.0-x.7.z.92.

1. Metapodatki gradnje so LAHKO označeni z dodajanjem znaka plus in serije pik
ločenih identifikatorjev, ki jim takoj sledi popravek ali verzija pred-izdaje.
Identifikatorji MORAJO biti sestavljeni iz samo alfanumeričnih ASCII-jev in
vezajev [0-9A-Za-z-]. Identifikatorji NE SMEJO biti prazni. Podatki metagradnje
MORAJO biti ignorirani, ko se določa vrstni red verzij. Zato dve verziji, ki
se razlikujeta samo v metapodatkih gradnje, imata enak vrstni red. Na primer:
1.0.0-alpha+001, 1.0.0+20130313144700, 1.0.0-beta+exp.sha.5114f85.

1. Vrstni red se sklicuje na to, kako so verzije primerjane druga z drugo, ko so
urejene. Vrstni red MORA biti izračunan z ločitvijo verzije v glavno, manjšo,
popravek in identifikator pred-izdaje v tem vrstnem redu (metapodatki gradnje ne
pašejo v vrstni red). Vrstni red je določen s prvo razliko, ko primerjate vsako
od teh identifikatorjev iz leve proti desni kot sledi: Verzije glavna, manjša in
popravek so vedno primerjane s številkami. Na primer: 1.0.0 < 2.0.0 < 2.1.0 <
2.1.1. Ko so glavna, manjša in popravek enake, ima verzija pred-izdaje manjši
vrstni red kot običajne izdaje. Na primer 1.0.0-alpha < 1.0.0. Vrstni red za dve
verziji pred-izdaje z enako verzijo glavne, manjše in popravka MORATA biti
določeni s primerjanjem vsake pike ločenega identifikatorja iz leve proti desni
dokler ni razlika najdena kot sledi: identifikatorji sestavljeni iz samo številk
so primerjani numerično in identifikatorji s črkami ali vezaji so primerjani
besedno v ASCII vrstnem redu. Numerični identifikatorji imajo vedno manjši
vrstni red kot ne-numerični identifikatorji. Večji skupek polj pred-izdaje imajo
večji vrstni red kot manjši skupek, če vsi prejšnji identifikatorji so enaki. Na
primer: 1.0.0-alpha < 1.0.0-alpha.1 < 1.0.0-alpha.beta < 1.0.0-beta <
1.0.0-beta.2 < 1.0.0-beta.11 < 1.0.0-rc.1 < 1.0.0.

Backus–Naurova oblika slovnice za veljavne semantične verzije
-------------------------------------------------------------

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

Zakaj uporabljati semantične verzije?
-------------------------------------

To ni nova ali revolucionarna ideja. V bistvu delate nekaj podobnega temu že
sedaj. Problem je, da "nekaj podobnega" ni dovolj dobro. Brez skladnosti z
nekakšno uradno specifikacijo, so številke verzij v bistvu neuporabne za
upravljanje odvisnosti. Z dodajanjem imena in jasne definicije zgornjim idejam,
postane enostavno za komunicirati vaše namere uporabnikom vaše programske
opreme. Ko enkrat postanejo te namere jasne, fleksibilne (vendar ne preveč
fleksibilne), se lahko končno naredi specifikacija odvisnosti.

Enostaven primer bo demonstriral, kako semantične verzije lahko naredijo pekel
odvisnosti stvar preteklosti. Premislite o knjižnici imenovani "Firetruck".
Zahteva paket s semantično verzijo in se imenuje "Ladder". Ko je Firetruck
narejen, je Ladder pri verziji 3.1.0, lahko varno določite verzijo odvisnosti
Ladder kot večjo ali enako 3.1.0, vendar manjšo kot 4.0.0. Sedaj ko postane
Ladder verzija 3.1.1 in 3.2.0 postane na voljo, jih lahko izdate v vašem sistemu
paketnega upravljanja in veste, da bodo postale kompatibilne z obstoječo odvisno
programsko opremo.

Kot odgovoren razvijalec boste seveda želeli preveriti, da katerakoli nadgradnja
paketa funkcionira, kot je oglaševano. Realni svet je grdo mesto; ničesar ni,
kar bi lahko naredili o tem, razen da smo pazljivi. Kar lahko naredite je
omogočiti semantičnim verzijam, da vam ponudijo pameten način izdaje in
nadgradnje paketov brez, da morate kotaliti nove verzije odvisnih paketov, kar
vam prihrani čas in težave.

Če to vse zveni zaželjeno, je vse kar morate storiti, da začnete uporabljati
semantične verzije, razglasitev, da to tako delate in nato slediti pravilom.
Povežite na to spletno stran iz vaše datoteke README, da ostali vedo pravila in
jih lahko koristijo.

Pogosta vprašanja
-----------------

### Kako ravnam z revizijami v 0.y.z začetni fazi razvoja?

Najenostavnejše je začeti vašo začetno razvojno izdajo pri 0.1.0 in nato
povečevati manjše verzije za vsako naknadno izdajo.

### Kako vem, kdaj izdati 1.0.0?

Če je vaša programska oprema uporabljena v produkciji, bi morala verjeno že biti
1.0.0. Če imate stabilni API od katerega so postali uporabniki odvisni, bi
morali imeti 1.0.0. Če vas skrbi veliko o združljivosti za nazaj, bi morali
verjetno že biti na 1.0.0.

### Ali to ne odvrača hitrega razvoja in hitrih interacij?

Glavna verzija nič je vse o hitrem razvoju. Če spreminjate API vsak dan, bi
morali ali biti še vedno na verziji 0.y.z ali na ločeni razvojni veji delati na
naslednji glavni verziji.

### Če tudi najmanjša nazaj nezdružljiva sprememba javnega API-ja zahteva povečanje glavne verzije, ali ne bom potem končal pri verziji 42.0.0 zelo hitro?

To je vprašanje odgovornega razvoja in vpogleda vnaprej. Nezdružljive spremembe
ne bi smele biti predstavljene ohlapno v programsko opremo, ki ima veliko
odvisne kode. Cena, ki mora nastati za nadgradnjo, je lahko pomembna. Povečanje
glavnih verzij za izdajo nekompatibilnih sprememb pomeni, da boste premislili
skozi vpliv vaših sprememb in ocenili vpleteno razmerje cena/korist.

### Dokumentiranje celotnega javnega API-ja je preveč dela!

Vaša odgovornost kot profesionalnega razvijalca je, da ustrezno dokumentirate
programsko opremo, ki je nameravana za uporabo s strani drugih. Upravljanje
kompleksnosti programske opreme je zelo pomemben del, da obdržite projekt
učinkovit in to narediti je težko, če nihče ne ve, kako uporabiti vašo
programsko opremo ali katere metode so varne za klicanje. Na dolgi rok
semantične verzije in vztrajanje na dobro definiranem javnem API-ju lahko obdrži
poganjanje vsakogar in vsega gladko.

### Kaj narediti, če ponesreči izdam nazaj nezdružljivo spremembo kot manjšo verzijo?

Kakor hitro se zaveste, da ste prelomili specifikacijo semantičnih verzij,
popravite problem in izdajte novo manjšo verzijo, ki popravi problem in
povrne združljivost za nazaj. Tudi pod temi okoliščinami, ni sprejemljivo
spreminjati verzij izdaj. Če je primerno, dokumentirajte kršeno izdajo in
obvestite vaše uporabnike o problemu, da so seznanjeni o kršeni izdaji.

### Kaj naj naredim, če posodobim svoje lastne odvisnosti brez spremembe javnega API-ja?

To bi moralo biti smatrano kompatibilno, ker ne vpliva na javni API. Programska
oprema, ki je eksplicitno odvisna od istih odvistnosti, bi vaš paket moral imeti
svoje lastne specifikacije odvisnosti in avtor bo opazil kakršnekoli konflikte.
Določanje ali je sprememba modifikacije nivoja popravka ali manjšega nivoja
zavisi na tem ali posodabljate vaše odvisnosti z namenom popraviti hrošč ali
dodati novo funkcionalnost. Običajno bi pričakoval dodatno kodo za slednjo
instanco, v katerem primeru je očitno povečanje manjšega nivoja.

### Kaj če nehote spremenim javni API na način, ki ni skladen s spremembo številke verzije (t.j. koda nepravilno predstavi glavno prelomno spremembo v izdaji popravka)?

Uporabite vašo najboljšo presojo. Če imate veliko občinstvo, ki bo pod velikim
vplivom s spremembo prejšnjega obnašanja čemur je bil javni API namenjen, potem
je morda najboljše opraviti glavno verzijo izdaje, četudi bi popravek striktno
bil smatran za izdajo popravka. Spomnimo se, semantične verzije so samo
transportiranje, kar pomeni za koliko se številka verzije spremeni. Če so te
verzije pomembne za vaše uporabnike, uporabite številko verzije, da jih
obvestite.

### Kako ravnam z opuščenimi funkcionalnostmi?

Opuščanje obstoječe funkcionalnosti je običajen del razvoja programske opreme in
je pogosto zahtevano za narediti, da se naredi nadaljnji razvoj. Ko opuščate del
vašega javnega API-ja, bi morali narediti dve stvari: (1) posodobiti vašo
dokumentacijo, da obvestite uporabnike o spremembi, (2) izdati novo manjšo
verzijo z opuščenostjo na mestu. Preden v celoti odstranite funkcionalnost v
novi glavni izdaji bi morala biti vsaj ena manjša izdaja, ki vsebuje opuščenost,
da lahko uporabniki gladko preidejo na nov API.

### Ali ima SemVer omejitev velikosti na nizu verzije?

Ne, vendar uporabite dobro presojo. Na primer verzija z 255 dolgim nizom je
verjetno pretiravanje. Tudi določeni sistemi lahko nalagajo njihove lastne
omejitve na velikosti niza.

### Ali je "v1.2.3" semantična verzija?

Ne, "v1.2.3" ni semantična verzija. Vendar dodajanje predpone semantični verziji
z "v" je pogost način (v angleščini) za označevanje, da gre za številko verzije.
Skrajševanje "version" kot "v" je pogosto v sistemu za nadzor različic. Primer:
`git tag v1.2.3 -m "Release version 1.2.3"`, kjer je "v1.2.3" ime oznake in
semantična verzija je "1.2.3".

### Ali obstaja predlagani regularni izraz (RegEx) za preverjanje niza SemVer?

Sta dva. Eden z imenskimi skupinami zajemanj za sisteme, ki jih podpirajo (PCRE
[Perl Compatible Regular Expressions, t.j. Perl, PHP in R], Python in Go).

Glejte: <https://regex101.com/r/Ly7O1x/3/>

```
^(?P<major>0|[1-9]\d*)\.(?P<minor>0|[1-9]\d*)\.(?P<patch>0|[1-9]\d*)(?:-(?P<prerelease>(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+(?P<buildmetadata>[0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$
```

In drugi z oštevilčenimi skupinami zajemanj (torej cg1 = major, cg2 = minor,
cg3 = patch, cg4 = prerelease in cg5 = buildmetadata), ki je kompatibilen z ECMA
Script (JavaScript), PCRE (Perl Compatible Regular Expressions, t.j. Perl, PHP
in R), Python in Go.

Glejte: <https://regex101.com/r/vkijKf/1/>

```
^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$
```

O projektu
----------

Specifikacija sementičnih verzij je avtorizirana s strani [Toma
Preston-Werner-ja](http://tom.preston-werner.com), izumitelja Gravatar-ja in
soustanovitelja GitHub-a.

Slovenski prevod so prispevali:

* [Peter Kokot](https://github.com/petk)
* [Aleš Šarkanj](https://github.com/alsar)

Če želite pustiti povratne informacije, prosimo, da [odprete vprašanje na
GitHub-u](https://github.com/semver/semver/issues).

Licenca
-------

[Creative Commons - CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)
