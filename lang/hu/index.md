---
title: Szemantikus Verziószámozás 2.0.0
redirect_from: /lang/hu/
---

Szemantikus Verziószámozás 2.0.0
==============================

Összefoglalás
-------
Adott egy verziószám, MAJOR.MINOR.PATCH, növeljük:

1. a MAJOR verzió számot ha a változtatásaink eredményeként elveszítjük a
kompatibilitást korábbi verzióval,
1. a MINOR verzió számot ha olyan funkcionalitást adunk ami megőrzi a
visszafelé kompatibilitást, és
1. a PATCH verzió számot ha visszafelé kompatibilis hibajavításokat adunk hozzá.

További verzió címkéket és kiadással kapcsolatos metaadatokat a MAJOR.MINOR.PATCH
formátum kiegészítéseként lehet még hozzáadni.

Bevezetés
------------

A szoftver menedzsment univerzumában létezik egy rettegett hely: a verziópokol. Minél 
nagyobbra nő a rendszered, minél több csomagot adsz hozzá, annál valószínűbb, hogy 
előbb-utóbb a kellős közepében találod magad.

Sok függőséggel rendelező rendszerekben, új csomagverziók kiadása hamar rémálommá válhat.
Ha túl szigorúak az függőségi sepcifikációid, fenn áll a "verzió zár" veszélye (amikor már nem tudsz úgy
frissíteni egy csomagot, hogy vele együtt az összes tőle függő csomgagot ne kelljen frissíteni). 
Ugyanakkor, ha túl szabadon vannak ugyanezek megszabva, elkerülhetetlen, 
hogy idővel utólérjen a verzió-keveredés (amikor jobb
kompatibilitást remélünk szoftver komponensek között mint ami realisztikus).
A verziópokol az, amikor e két helyzet közül az egyik vagy akár egyszerre mindkettő 
meggátol a projekt könnyed és rizikómentes előrevitelében.

A probléma megoldásaként javaslom ezen egyszerű szabályok és követelmények halmazát,
melyek megszabják hogyan rendeljünk hozzá, illetve inkrementáljuk a verziószámokat.
Ezen szabályok, a már jól bevett gyakorlatokon alapulnak - ám, nem szükségszerűen korlátozódnak rájuk -, 
mind zárt- és nyílt forráskódú szofverekben. Az rendszer első feltétele egy publikus API létrehozása. 
Ez egyaránt lehet dokumentáció formájában, vagy a programon keresztül meghatározva.
Kulcsfontosságú, hogy ez az API átlátható es precíz legyen. Miután az API-t kiadtuk, 
minden változást a szoftverben verziószám növelésével kommunikálunk. 
Tekintsük az X.Y.Z(Major.Minor.Patch) verzió formátumot.
Hibajavításoknál, melyek nem értintik az API-t, növeljük a a patch verziót, visszafelé kompatibilis API 
kiegészítések/módosítások esetén növeljük a minor verziót, és visszafelé nem kimpatibilis módosításoknál növeljük
a major verziót.
A rendszert "Szemantikus Verziószámozásnak" keresztelem. Ezen séma alapján, a verziószámok és ahogyan ezek változnak, 
jelentést hordoznak a mögöttes kódról és hogy mi válozott egyik verzióról a másikra térve.


A Szemantikus Verziószámozás leírása (SemVer)
------------------------------------------

A kulcsszavak "MUSZÁJ" vagy "KÖTELEZŐEN" ("MUST"), "NEM LEHET" vagy "NEM SZABAD"
("MUST NOT"), "AJÁNLOTT" ("SHOULD"), "NEM AJÁNLOTT" ("SHOULD NOT"),
"VÁLASZTHATÓ(AN)" ("OPTIONAL") ebben a dokumentumban úgy vannak használva mint
ahogyan itt le vannak írva: [RFC 2119](http://tools.ietf.org/html/rfc2119).

1. Szemantikus verziószámozást használó szoftvernek MUSZÁJ publikus API-t közzétennie.
Ez az felület létezhet kizárolag dokumentáció formájában, vagy akár szoftverben
meghatározva, de mindenféleképpen szükséges, hogy precíz és minden részletre
kiterjedő legyen.

1. Az általános verziószám formátuma MUSZÁJ, hogy az X.Y.Z legyen, ahol az X, Y
és Z a természetes számok halmazába tartoznak, kezdő nullák nélkül. X a
"major", Y a "minor" és Z a "patch" verziószám. Mindhárom MUSZÁJ, hogy
számtanilag helyesen növekedjen. Például: 1.9.0 -> 1.10.0 -> 1.11.0.

1. Amiután egy új csomagverzió forgalomba lett hozva, a csomag tartalma nem
változhat. Bármilyen változás MUSZÁJ, hogy új verzióként legyen hozzáadva.

1. A nulladik "major" verzió (0.Y.Z) korai fejlesztésekre alkalmazható. Bárhol
várhatóak változások a szoftverben és a publikus API-tól nem elvárható, hogy
tökéletesen stabil legyen.

1. Az első verzió (1.0.0) defíniálja a publikus API-t. Ezt követő
verziószámok ennek az API-nak a változásától függnek.

1. A "patch", Z verziószámot (x.y.Z | x > 0) MUSZÁJ növelni, amikor kizárólag
hátrafele kompatibilis hibajavításokat addunk a szoftverhez. Ilyen hibajavítás
definíciója egy olyan belső változás ami addig hibás viselkedést korrigál.

1. A "minor", Y verziószámot (x.Y.z | x > 0) MUSZÁJ növelni, amikor olyan új
funkciókat adunk hozzá az API-hoz, ami a hátrafele kompatibilitást nem érinti.
MUSZÁJ növelni, amikor korábbi funkciókat elavultként jelölünk meg. Növelni
LEHET, amikor a új funkciók kerülnek a belső, privát kódbázisba. VÁLASZTHATÓAN
tartalmazhat "patch" szintű változásokat is. A "patch" verziószám MUSZÁJ, hogy
nullára csökkenjen amikor a "minor" verziószám növekszik.

1. A "major", X verziószámot (X.y.z | X > 0) MUSZÁJ növelni, amikor visszafelé
inkompatiblis változások vannak hozzáadva a nyílvános API-hoz. VÁLASZTHATÓAN
tartalmazhat "patch" és "minor" szintű változásokat is. A "patch" és "minor"
verziószámok MUSZÁJ, hogy nullára csökkenjenek amikor a "major" verziószám
növekszik.

1. Egy kiadás előtti ("pre-release") verzió VÁLASZTHATÓAN jelölhető egy
kötőjelet követően pontokkal elválasztott azonosítókkal, közvetlenül a "patch"
verzió után. Ezek az azonosítók MUSZÁJ, hogy kizárólag ASCII alfanumerikus
karakterekből és kötőjelekből álljon. Azonosítók NEM LEHETNEK üresek.
Számazonosítók NEM SZABAD, hogy nullával kezdődjenek. A kiadás előtti verziókhoz
képest elsőbbséget élveznek a hozzátartozó normál verziók. Egy kiadás előtti
verzió arra utal, hogy a verzió instabil és lehet, hogy nem elégíti ki a
szándékozott kompatibilitási feltételeket amire a normál verzió utal. Például:
1.0.0-alpha, 1.0.0-alpha.1, 1.0.0-0.3.7, 1.0.0-x.7.z.92.

1. Kiadással ("build") kapcsolatos metaadatok VÁLASZTHATÓAN egy plusz jel
hozzáadásával, majd pontokkal elválasztott azonotsítokkal rögzíthetőek,
közvetlenül a "patch" vagy kiadás előtti ("pre-release") verzió után. Ezek az
azonosítól MUSZÁK hogy kizárólag ASCII alfanumerikus karakterekből és
kötőjelekből álljon. Azonosítók NEM LEHETNEK üresek. Számazonosítók NEM SZABAD,
hogy nullával kezdődjenek. A kiadással kapcsolatos metaadatokat AJÁNLOTT
figyelmen kívül hagyni a verziók elsőbbségének meghatározásakor. Ennélfogva
két verzió ami csupán kiadással kapcsolatos metaadatban különböznek egyenlő
elsőbbséget élveznek. Például: 1.0.0-alpha+001, 1.0.0+20130313144700,
1.0.0-beta+exp.sha.5114f85.

1. Az elsőbbség arra utal, hogy hogy viszonyulnak egymáshoz a verziók amikor
sorrendbe vannak téve. Az elsőbbséget MUSZÁJ a "major", "minor", "patch" és
"pre-release" alapján számolni, ebben a sorrendben (kiadással kapcsolatos
metaadatok, "build-metadata" nincsenek beleszámítva). Az elsőbbségi sorrendet
az első eltéző azonosító határozza meg amikor balról jobbra olvassuk a
verziószámot, tehát ebben a sorrendben: "major", "minor" és "patch", és a
különbség számtanilag értelmezhető. Például: 1.0.0 < 2.0.0 < 2.1.0 < 2.1.1.
Amikor a "major", "minor" es "patch" verziószámok egyenlőek, a kiadás előtti
("pre-release") verziónak kisebb elsőbbsége van. Például: 1.0.0-alpha < 1.0.0.
Azonos normál verzióhoz tartozó, kiadás előtti ("pre-release") verziók közötti
elsőbbséget MUSZÁJ annak alapján meghatározni, hogy balról jobbra olvasva a
ponttal elválasztott azonosítókat összehasonlítjuk karakterről karakterre.
Számazonosítok számtanilag, alfanumerikus azonosítók ASCII alapján vannak
sorrendbe rakva. Számazonosítóknak kisebb az elsőbbségge mint nem numerikus
azonosítók. Amikor két "pre-release" verzió közötti különbség csak az, hogy az
egyiknek az azonosítói pontosan megegyeznek a másikéval, de ezen felül még
tartalmaz további azonosítokat is, akkor a több azonosítóval rendelkező verzió
elsőbbséget élvez a másik felett. Például: 1.0.0-alpha < 1.0.0-alpha.1 <
1.0.0-alpha.beta < 1.0.0-beta < 1.0.0-beta.2 < 1.0.0-beta.11 <
1.0.0-rc.1 < 1.0.0.

Miért használjam a Szemantikus Verziószámozást?
----------------------------

Ez nem egy új vagy forradalmi koncepció. Sőt, valószínüleg valami ehhez hasonló
rendszert alkalmazol. A gond az az, hogy a 'hasonló' az nem elég. Egy hivatalos
előíráshoz való szigorú ragaszkodás nélkül a verziószámok gyakorlatilag
teljesen hasztalanná válnak a függőségek számontartásában. Másrészről viszont,
megfelelő előírások és szabályok közlése mellett jelentősen egyszerűbb
kommunikálni a szándékaidat a szoftvered felhasználóinak. Ha ezek a törekvések
egyértelműek, rugalmasak (de nem túl rugalmasak), a függőségi előírások
megfogalmazhatóvá válnak.

Egy egyszerű példa bemutatja, hogy a Szemantikus Verziószámozás hogyan tüntetheti 
el az Függősések Számontartásának Pokolját. Vegyünk egy "Tűzoltóautó" nevű csomagot.
Szüksége van egy szemantikusan verziózott csomagra: a "Létrá"-ra. Amikor a
Tűzoltóautót létrehozták, a Létra verziója 3.1.0. Mivel a Tűzoltóautó olyan
funkcionalitást használ ami a 3.1.0-ban lett bevezetve, nyugodtan meg lehet
nevezni a függőséget: egy verziószám ami nagyobb vagy egyenlő mint 3.1.0, de
kisebb mint 4.0.0. Amikor a Létranak a 3.1.1-es illetve 3.2.0-ás verziói
elérhetővé válnak, bevezethetőek a Tűzoltóautó csomag menedzsment rendszerébe is
anélkül hogy a kompatibilitást veszélyeztetné.

Felelős szoftverfejlesztőként természetesen igazolni akarod majd, hogy a
csomagfrissítések megegyeznek elvártakkal. A világ egy kaotikus hely és ezzel
szemben csak óvatosak lehetünk. Amit tehetsz az az, hogy legalább a saját
szoftverfeljesztésed és kiadásodat szabályozza a Szemantikus Verziószámozás, 
úgy hogy az attól függő csomagok minimálisan legyenek érintve, időt és erőfeszítést
spórolva.

Ha ez kívánatosnak hangzik, mindössze annyit kell tenned, hogy kijelentsd,
hogy használod a Szemantikus Verziószámozást és kövesd a szabályait. Linkeld 
ezt a honlapot a csomagod README-jébe, hogy mások is megismerjék a szabályokat és
részesülhessenek az előnyeiben.


Gyakori kérdések
---

### Hogyan döntsek a revízióról a 0.y.z kezdeti fejlesztési fázisban?

A legegyszerűbb dolog amit tehetsz a kezdeti fejlesztési fázisban, hogy elkezded 
a 0.1.0 verzióval és a minor verziót inkrementálod minden egyes újabb kiadásnál.

### Honnan tudom mikor jön el az 1.0.0 ideje?

Ha a szoftvered élesben lesz használva, akkor valószínűleg eljött az ideje az 1.0.0 verziónak.
Ha van egy stabil API-d, amitől már felhasználók függnek, eljött az ideje az 1.0.0 verziónak. Ha
tartasz a visszafelé kompatibilitástól, nagy a valószínűsége, hogy eljött az 1.0.0 ideje.

### Nem ellenzi ez a gyors fejlesztés és a gyors iterációt?

A zéró major verzió a gyors fejlesztésről a szól. Ha minden nap változtatod az API-t, még a 0.y.z verziónál kell hogy tarts 
vagy egy külön ágban kell hogy dolgozz a következő major verzión.

### Ha a legkissebb visszafelé inkompatibilis változtatás is, a publikus API-ban egy major verzió növelést kíván, nem fogok túl gyorsan a 42.0.0 verziónál kikötni?

Ez előrelátás és felelősségteljes fejlesztés kérdése. Inkompatibilis változtatást nem kéne könnyedén bevezetni olyan szoftverbe
ahol ez sok kód függvénye. A javítás során felmerülő költségek jelentősek lehetnek. Kiadásra szánt major verzió növelésénél 
végig kell gondolnod, a változtatás hatásait és kiértékelned a bennefoglalt költség/haszon arányt.

### Túl sok munka dokumentálni az egész publikus API-t!

Professzionális fejlesztőként a te feladatod megfelelően dokumentálni az éles használatra
kiadott szoftvert. A projekt hatékonyságának megtartása érdekében, egy másik rendkívül fontos feladat
a szoftver komplexitásának kezelése, és azt nehéz kezelni, ha senki nem tudja, hogyan kell használni a szoftvert
vagy milyen metódusokat biztonságos meghívni. Hosszútávon a Szemantikus verziószámozás, és a jól definiált publikus API-hoz 
való ragaszkodás meghozza az eredményét, mindenki és minden zökkenőmentesen fog haladni.

### Mit tegyek ha véletlenül kiadok egy visszafelé inkompatibilis változtatást minor verzióként?

Amint rájösz, hogy megszegted a Szemantikus Verziószámozás szabályait, javítsd a hibát és
adj ki egy új minor verziót a javított hibával és a helyrehozott visszafelé kompatibilitással.
Még ezen körülmények között is elfogadhatatlan, hogy módosíts kiadott verziót. Ha lehetséges, 
dokumentáld az érintett verziót és értesítsd a felhasználókat, hogy tisztában legyenek
a verzió problémájával kapcsolatban.

### Mit tegyek ha frissítem a saját függőségeimet a publikus API változtatása nélkül?

Ez kompatibilisnek számít, mert nem érinti a publikus API-t.
Azon szoftvernek, amelyre egyértleműen ugyanazok a függőségek állnak fent mint a te csomagodra, 
saját függőségi speicifikációval kell rendelkeznie, ezért az író észre fog venni bármilyen konfliktust. 
Annak megállapítása pedig, hogy a változtatás minor vagy major szintű, attól függ, 
hogy a függőségek módosítása bug javítása, avagy új funkció bevezetéséből eredendő. Az utóbbi esetben 
általában kód bővítésre lehet számítani, melynél egyértelmű, hogy minor szintű inkrementálásról beszélünk.

### Mi a teendő, ha véletlenül megváltoztatom a publikus API-t oly módon, amely nem összeférhető a verzió szám változással (pl. nagy, major változást eszközölünk egy patch kiadásban)?

Dönts legjobb meglátásod szerint. Ha meglehetősen nagy a felhasználói kör akiket drasztikusan befolyásolna 
a publikus API működésének degradálása, akkor a legjobb amit tehetsz, hogy eszközölsz egy új major verzió kiadást, 
akkor is ha a változás szigorúan egy patch kiadást kívánna. Tartsd észben, a szemantikus verziószámozás jelentést hordoz a verziószámok változásával.
Ha a változások fontosak a felhasználóid számára, jelezd a verziószámokkal.

### Hogyan kezeljem az elavult funkcionalitást?

Teljesen normális esemény a szoftverfejlesztésben, hogy egyes funkcionalitások elavulnak, sőt mi több, gyakran elvárt a szoftver fejlődésének érdekében. Amikor lecserélsz egy elavult részt a publikus API-dban, két dolgot kell tenned: (1) frissítsd a dokumentációt, hogy a felhasználók tudjanak a változásról, (2) eszközölj egy új minor kiadást az elavult résszel. Mielőtt teljesen eltörölnéd a funkcionalitást egy új, major kiadásban, kell lennie egy minor kiadásnak ami még tartalmazza az elavult részt, hogy a felhasználók zökkenőmentesen át tudjanak állni az új API-ra. 

### Vannak-e megszorítások a verzió string hosszára nézve a semver szerint?

Nincs, de becsüljük meg ésszerűen a hosszát. Például, egy 255 karakteres verzió string erős túlzás. Különböző 
rendszereknél, különböző verzió string hossz korlátokat alkalmazhatnak.


Infó
-----

A Semantic Versioning specifikáció szerzője [Tom Preston-Werner](http://tom.preston-werner.com), a Gravatars feltalálója és a GitHub társalapítója.

Észrevételekért [nyiss egy issue-t a GitHub-on](https://github.com/mojombo/semver/issues).

Fordította:
[Rebeka Marton](https://github.com/esztermarton) (szerző),
[Roland Kovács](https://github.com/koviroli) (szerző)

Licensz
-------

[Creative Commons - CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)
