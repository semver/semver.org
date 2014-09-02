---
layout: slovak
title: Sémantické verzovanie 2.0.0
---

Sémantické verzovanie 2.0.0
===========================

Zhrnutie
--------

V čísle verzie vo formáte MAJOR.MINOR.PATCH zväčšujeme číslo:
1. MAJOR verzie, keď sme spravili zmeny, ktoré nie sú spätne kompatibilné,
2. MINOR verzie, keď sme pridali funkcionalitu so zachovaním spätnej
kompatibility,
3. PATCH verzie, keď sme opravili chyby a ostala zachovaná spätná kompatibilita.

Značenie predbežných verzií a pridávanie metadát verzií je možné rozšírením
spomínaného formátu MAJOR.MINOR.PATCH o potrebné informácie.

Úvod
----

Vo svete softvéru, jeho vývoja a správy existuje hrozné miesto nazývané peklo
závislostí *(angl. dependency hell)*. Znamená to, že čím viac váš systém rastie
a máte v ňom integrovaných čoraz viac knižníc, tým je väčšia pravdepodobnosť,
že sa ocitnete v tomto pekle a budete kompletne zúfalí.

Ak majú systémy veľa závislostí, raz-dva sa vám stane, že vydávanie novej verzie sa
stane nočnou morou. Ak je špecifikácia závislostí príliš striktná, hrozí vám, že
ostanete na jednej verzii *(angl. version lock)* a nebudete mať možnosť prejsť
na ďalšiu verziu bez toho, aby ste vydali ďalšie verzie všetkých balíčkov, na
ktorých závisí. Naopak, ak je špecifikácia závislostí príliš voľná, prídete na
to, že váš systém je kompatibilný s viac verziami, ako je potrebné. V pekle
závislostí sa nachádzate, ak ste zviazaný určitou verziou, prípadne nie je presne
špecifikované, ktorú máte použiť. Jednoducho, bráni vám to v tom, aby ste sa so
svojim projektom pohli bezpečne vpred.

Riešením tohto problému je jednoduchý súbor pravidiel, ktorý
určuje, ako budú čísla verzií priraďované a zväčšované. Tieto pravidlá sú
založené (no nie nevyhnutne obmedzené) na už existujúcich bežne zaužívaných
praktikách vo vývoji otvoreného, či uzavretého softvéru. Pre fungovanie
tohto systému si musíte najskôr zadefinovať rozhranie popisujúce spôsob,
akým sa bude komunikovať s vaším systémom (ďalej len API). Môže byť zadefinované
formou dokumentácie, prípadne vynútené samotným kódom. Bez ohľadu na formu akou
to bude, je
dôležité aby toto API bolo presné a jasné. Akonáhle budete mať zadefinované vaše
API, jeho zmeny budete oznamovať špecifickým zväčšením čísla verzie vašeho
systému. Uvažujme, že číslo verzie bude vo formáte MAJOR.MINOR.PATCH. Opravy
chýb, ktoré nemenia vaše API, zväčšujú číslo PATCH verzie. Spätne kompatibilné
zmeny API zväčšujú číslo MINOR verzie a spätne nekompatibilné zmeny API zväčšujú
číslo MAJOR verzie.

Tento systém je nazývaný "Sémantické verzovanie". Používanie tejto schémy za
číslami verzií a spôsobom akým sa menia, skrýva súvisiaci kód a čo bolo zmenené
medzi dvoma verziami.

Špecifikácia sémantického verzovania (SemVer)
---------------------------------------------

Kľúčové slová "MUSÍ" *(angl. MUST, REQUIRED, SHALL)*, "NESMIE" *(angl. MUST NOT,
SHALL NOT)*, "MALO BY" *(angl. SHOULD, RECOMMENDED)*, "NEMALO BY" *(angl. SHOULD
NOT)* a "MÔŽE" *(angl. MAY, OPTIONAL)* sú interpretovené ako je popísané
v dokumente [RFC 2119](http://tools.ietf.org/html/rfc2119).

1. Softvér používajúci Sémentické verzovanie MUSÍ mať zadefinované API. Toto API
môže byť definované priamo v kóde, prípadne môže existovať v dokumentácií. Nech
už to je tak alebo onak, malo by byť presné a komplexné.

2. Normálne číslo verzie MUSÍ byť vo formáte X.Y.Z, kde X, Y a Z sú nezáporné
celé čisla a NESMÚ obsahovať úvodné nuly. X je číslo MAJOR verzie, Y je číslo
MINOR verzie a Z je číslo PATCH verzie. Každé z týchto čísel sa musí zväčšovať
štandardne. Napr.: 1.9.0 -> 1.10.0 -> 1.11.0.

3. Akonáhle je takto očíslovaná verzia vydaná, softvér pod číslom tejto verzie
už NESMIE byť modifikovaný a každá zmena MUSÍ byť vydaná ako nová verzia.

4. MAJOR verzia s číslom 0 (0.y.z) je pre začiatočný vývoj. Čokoľvek sa môže
zmeniť a API takto očíslovanej verzie by nemalo byť považované za stabilné.

5. Verzia 1.0.0 už presne definuje API. Spôsob, akým sa po vydaní takejto verzie
mení číslo verzie je závislý na tomto API a jeho zmenách.

6. Číslo PATCH verzie Z (x.y.Z | x > 0) MUSÍ byť zväčšené len vtedy, ak
boli implementované spätne kompatibilné opravy chýb. Oprava chyby je definovaná
ako interná zmena opravujúca nežiadúce chovanie.

7. Číslo MINOR verzie Y (x.Y.z | x > 0) MUSÍ byť zväčšené ak bola do API
pridaná nová, spätne kompatibilná funkcionalita a tiež MUSÍ byť zväčšené, ak
bola nejaká funcionalita označená ako zastaralá. MÔŽE tiež byť zväčšené ak bola
pridaná alebo vylepšená podstatná funkcionalita v rámci kódu, ktorý
neovplyvňuje API. MÔŽE zahrnúť aj zmenu v rámci PATCH verzie, no vtedy MUSÍ byť
PATCH verzia nastavená na 0.

8. Číslo MAJOR verzie X (X.y.z | X > 0) MUSÍ byť zväčšené ak boli pridané
zmeny, ktoré spôsobili, že API nie je spätne kompatibilné. MÔŽE zahrnúť aj zmenu
v rámci MINOR a PATCH verzie, no vtedy MUSIA byť tieto verzie nastavené na 0.

9. Predbežná verzia *(angl. pre-release)* MÔŽE byť označená pridaním pomlčky
a sériou identifikátorov oddelených bodkou, hneď za číslo PATCH verzie.
Identifikátory MUSIA obsahovať len ASCII alfanumerické znaky a pomlčku
[0-9A-Za-z-], NESMÚ byť prázdne a číselné identifikátory NESMÚ obsahovať úvodné
nuly. Predbežné verzie majú nižšiu prioritu ako súvisiace normálne verzie.
Predbežná verzia je nestabilná a nemusí spĺňať požiadavky a závislosti ako
súvisiaca normálna verzia. Napr.: 1.0.0-alpha, 1.0.0-alpha.1, 1.0.0-0.3.7,
1.0.0-x.7.z.92.

10. Metadáta MÔŽU byť označené vo verzii pridaním znaku plus (+) a sériou
identifikátorov oddelených bodkou, hneď za číslo PATCH alebo predbežnej verzie.
Identifikátory MUSIA obsahovať len ASCII alfanumerické znaky a pomlčku
[0-9A-Za-z-], NESMÚ byť prázdne a číselné identifikátory NESMÚ obsahovať úvodné
nuly. Metadáta by MALI BYŤ ignorované pri rozhodovaní o priorite verzie, a teda
dve verzie, ktoré sa líšia len v metadátach majú rovnakú prioritu.
Napr.: 1.0.0-alpha+001, 1.0.0+20130313144700, 1.0.0-beta+exp.sha.5114f85.

11. Priorita sa vzťahuje k tomu, ako sú verzie navzájom porovnávané. Priorita
MUSÍ byť počítaná rozdelením verzie na MAJOR, MINOR, PATCH a identifikátory
predbežných verzií - presne v takomto poradí (s metadátami sa nepočíta).
Priorita je daná prvým rozdielom pri porovnávaní zľava doprava pričom čísla
MAJOR, MINOR a PATCH sú porovnávané vždy ako čísla. Napr.: 1.0.0 < 2.0.0 <
2.1.0 < 2.1.1. Keď sú čísla MAJOR, MINOR a PATCH rovnaké, predbežná verzia má
menšiu prioritu ako normálna. Napr.: 1.0.0-alpha < 1.0.0. Priorita pre dve
predbežné verzie, ktoré sa zhodujú v číslach MAJOR, MINOR a PATCH MUSÍ byť
počítaná z bodkou oddelených identifikátorov zľava doprava až pokiaľ sa nenájde
rozdiel, a to takýmto spôsobom: identifikátory obsahujúce len číslice sú
porovnávané číselne a identifikátory s písmenami alebo pomlčkami sú porovnávané
lexikálne, zoradené podľa ASCII. Číselné identifikátory majú vždy nižšiu
prioritu ako nečíselné. Ak sú všetky predchádzajúce identifikátory v predbežnej
verzii rovnaké, tak viac identifikátorov má väčšiu prioritu ako menej
identifikátorov. Napr.: 1.0.0-alpha < 1.0.0-alpha.1 < 1.0.0-alpha.beta <
1.0.0-beta < 1.0.0-beta.2 < 1.0.0-beta.11 < 1.0.0-rc.1 < 1.0.0.

Prečo používať sémantické verzovanie?
-------------------------------------

Sémantické verzovanie nie je revolučná myšlienka a ak vydávate softvér,
pravdepodobne robíte niečo podobné. Problémom je, že "niečo podobné" nestačí.
Bez dodržiavania akejsi formálnej špecifikácie, sú čísla pre manažment závislostí
v podstate nanič. Tým, že hore uvedeným myšlienkam dávame presnú a jasnú
definíciu, je ľahšie komunikovať zámery vášho softvéru jeho používateľom.
Akonáhle sú zámery jasné a flexibilné (ale nie príliš), špecifikácia závislostí
môže začať.

Jednoduchým príkladom demonštrujeme, že peklo závislostí môže byť pre vás ľahko
minulosťou. Predstavte si, že máte knižnicu Hasičské auto. Táto knižnica
vyžaduje sémanticky verzovanú knižnicu Rebrík. V čase kedy je Hasičské auto
vytvorené, verzia Rebríka je 3.1.0. Keďže Hasičské auto používa funkcie,
ktoré boli pridané vo verzii 3.1.0, môžete bezpečne špecifikovať, že potrebujete
verziu Rebríka väčšiu alebo rovnú 3.1.0, no menšiu ako 4.0.0. A potom, keď vyjde
nová verzia Rebríka 3.1.1 alebo 3.2.0, môžete ju použiť vo vašom Hasičskom aute
a budete vedieť, že je s ním kompatibilná.

Ako zodpovední developeri si určite budete chcieť skontrolovať, či všetko
funguje podľa predpokladov. V skutočnosti je však všade neporiadok, čiže
musíme dávať pozor. Čo však môžete spraviť je nechať Sémantické verzovanie aby
vám umožnilo rozumný spôsob ako vydávať a aktualizovať knižnice tak, aby ste
nemuseli riešiť nové verzie závislostí, ušetrili čas a vyhli sa zmätkom.

Ak to znie rozumne, všetko čo potrebujete spraviť pre začatie používania
Sémantického verzovania je povedať, že to robíte a následne dodržiavať pravidlá.
Odkážte z README vášho softvéru na tieto stránky, nech aj ostatní vedia aké
pravidlá používate a majú z nich prospech.

Často kladené otázky (FAQ)
--------------------------

### Ako si poradiť s verziami 0.y.z na začiatku vývoja?

Najjednoduchším spôsobom je začať vývoj na verzii 0.1.0 a potom zväčšovať MINOR
verziu pri každom ďalšom vydaní softvéru.

### Ako vedieť, kedy vydať verziu 1.0.0?

Ak sa váš softvér už používa v produkcii, už by pravdepodobne mal mať verziu
1.0.0. Ak máte stabilné API, ktoré už používatelia majú medzi svojimi
závislosťami, mali by ste mať verziu 1.0.0. Taktiež, ak sa obávate o spätnú
kompatibilitu, už by ste mali mať 1.0.0.

### Neodrádza to od rýchleho vývoja a iterácií?

MAJOR verzia nula je o rýchlom vývoji. Ak každý deň meníte API, stále by ste
mali byť niekde vo fáze 0.x.y alebo na separátnej vývojovej vetve, kde sa
pripravuje nasledujúca MAJOR verzia.

### Ak aj tie najmenšie spätne nekompatibilné zmeny v API znamenajú zväčšenie MAJOR verzie, neskončíme pomerne rýchlo niekde pri verzii 42.0.0?

To je otázka zodpovedného vývoja a prognóz. Nekompatibilné zmeny by nemali byť
do softvéru, ktorý má veľa závislostí zavádzané len tak. Náklady vynaložené na
aktualizáciu môžu byť dosť veľké. To, že musíte vydať novú MAJOR verziu znamená,
že ste si dobre premysleli dopad vašich zmien a zrátali aké to bude mať výhody
a následky.

### Zdokumentovať celé API je strašne veľa práce!

Je vašou zodpovednosťou, ako profesionálnych developerov, správne dokumentovať
softvér, ktorý je určený na používanie aj pre ostatných. Spravovanie zložitosti
softvéru je veľmi dôležitá časť, ak chcete projekt udržať efektívny. A to nebude
možné, ak nikto nebude vedieť ako váš softvér používať alebo ktoré metódy je
bezpečné volať. Z dlhodobého hľadiska sa Sémantické verzovanie a dôraz na dobre
definované API ukázalo ako správna voľba a umožňuje bežať veciam hladko.

### Čo spraviť, keď vydám spätne nekompatibilnú verziu ako MINOR?

Akonáhle zistíte, že ste porušili pravidlá Sémantického verzovania, opravte
problém a vydajte ďalšiu MINOR verziu, ktorá opäť vráti spätnú kompatibilitu.
Napriek takejto situácií, je neprípustné aby ste menili už vydanú verziu. A ak
je to možné a vhodné, informujte používateľov o zlej verzii, aby vedeli, že sa
jedná o chybu a danej verzii sa vyhli.

### Čo robiť, keď som aktualizoval vlastné závislosti bez toho, aby sa zmenilo API?

Môžeme to považovať za kompatibilné, keďže to nijako neovplyvnilo API. Softvér,
ktorý presne závisí na balíčkoch ako váš, by mal mať vlastnú definíciu
závislostí a autor si všimne akékoľvek konflikty. Rozhodnutie, či sa jedná o
MINOR alebo PATCH závisí od toho, či ste upravili vaše závislosti kvôli nejakej
chybe alebo preto, že ste pridali novú funkcionalitu. Ak sa jedná o druhý
prípad, zvyčajne tam bude aj nejaký kód, a tak sa jedná o zväčšenie MINOR
verzie.

### Čo keď som nechtiac zmenil API, spôsobom, ktorý nie v súlade so zmenou čísla verzie (napríklad som zaviedol MAJOR zmenu v PATCH verzii)?

Usúďte, čo je najlepšie. Ak máte veľkú skupinu používateľov, ktorá by bola
ovplyvnená zmenou späť, tak asi bude najlepšie vydať MAJOR verziu, napriek tomu,
že oprava späť by mala byť súčasťou PATCH verzie. Pamätajte, že Sémantické
verzovanie je o tom, ako sa verzie menia. Ak sú zmeny pre vašich používateľov
dôležité, použite také číslo verzie, aby ste ich informovali.

### Ako sa vysporiadať so zastarávaním funkcionality?

Označenie funcionality ako zastaralej je štandardná časť softvérového vývoja
a väčšinou je žiadané ísť vpred, takže k tomu jednoducho dôjde. Keď zastarávate
časť svojho API, mali by ste spraviť dve veci:
(1) upraviť dokumentáciu aby užívatelia vedeli o zmene,
(2) vydať ďalšiu MINOR verziu, ktorá funcionalitu zastaráva. A teda, predtým ako
funkcionalitu kompletne odstránite v ďalšej MAJOR verzii, mali by ste spraviť
aspoň jednu MINOR verziu, ktorá obsahuje zastaranie a užívatelia mohli ľahko
prejsť na nové API.

### Má Semantické verzovanie nejaký limit na dĺžku označenie verzie?

Nie, no použite zdravý rozum. Číslo verzie, ktoré má 255 znakov je už asi moc,
no špecifické systémy môžu mať vlastné limity na dĺžku čísla verzie.

O špecifikácii
--------------

Autorom špecifikácie sémantického verzovania je
[Tom Preston-Werner](http://tom.preston-werner.com), autor projektu Gravatar a
spoluzakladateľ projektu Github.

Ak chcete zanechať spätnú väzbu, prosím
[cez GitHub](https://github.com/mojombo/semver/issues).

### Preklad

[Vladimír Kriška](https://github.com/ujovlado) (autor),
[Tibor Soviš](https://github.com/tiso) (korektor)

Licencia
--------

[Creative Commons - CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)
