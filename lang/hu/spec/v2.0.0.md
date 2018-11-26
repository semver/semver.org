---
title: Szemantikus Verziószámozás 2.0.0
redirect_from: /lang/hu/
---

Szemantikus Verziószámozás 2.0.0
==============================

Összefoglalás
-------

Vegyünk egy adott verzió számot, MAJOR.MINOR.PATCH, és növeljük:

1. a MAJOR verzió számot ha a változtatásaink eredményeként elveszítjük a
   kompatibilitást korábbi verziókkal
2. a MINOR verzió számot ha olyan funkcionalitásokat adunk amik megőrzik a
visszafelé kompatibilitást.
3. a PATCH verzió számot ha visszafelé kompatibilis hibajavításokat adunk hozzá

További verzió címkéket és kiadással kapcsolatos metaadatokat a MAJOR.MINOR.PATCH
formátum kiegészítéseként lehet még hozzáadni.

Bevezetés
------------

A szoftver menedzsment univerzumában létezik egy hely, ami még a bátrak szívét
is megrendíti: az Függősések Számontartásának Pokolja. Minél nagyobbra nő a
rendszered, minél több csomagot adsz hozzá, annál valószínűbb hogy előbb
utóbb ebben az átkozott zúgban találod magad.

Sok összefüggőségsel rendelkező rendszerekben az új csomagverziók hozzáadása
gyorsan rémálommá alakul át. Ha túl szigorúak az szoftver-függőségeidnek a leírásai,
fenn áll a veszélye annak, hogy "version lock" alakul ki (amikor nem tudsz úgy
frissíteni egy csomagot, hogy vele együtt az összes tőle függő csomgagot ne
frissítsd). Ugyanakkor, ha túl szabadon vannak ugyanezek megszabva,
elkerülhetetlen, hogy idővel utólérjen a verzió-keveredés (amikor jobb
kompatibilitást remélünk szoftver komponensek között mint ami realisztikus).
Az Függősések Számontartásának Pokolja az, amikor e két helyzet közül az
egyik vagy akár egyszerre mindkettő meggátol a projekt könnyed és rizikómentes
előrevitelében.

Erre a problémára válaszként fejlesztettem ki az itt található szabály- és
feltételrendszert amik meghatározza, hogy hogyan válasszuk és növeljük a
verziószámokat. A szabályok alapja - bár nem egyetlen forrása - már elterjedt,
legjobban bevált gyakorlatok amik egyaránt találhatóak zárt és nyílt forráskódú
szoftverben. Az rendszer első feltétele egy publikus API létrehozása: ez
egyaránt lehet dokumentáció formájában, vagy a programon keresztül meghatározva.
Kulcsfontosságú, hogy ez az API átlátható es precíz legyen. Amiután az API már
közzé lett téve, minden változást a szoftverben verziószám növelésével
kommunikálunk. A X.Y.Z (Major.Minor.Patch) formátumot választjuk. Hiba javítások
amik nem érintik az API-t a "patch" verziószámot; hátrafele kompatibilis
fejlesztések a "minor" verziószámot; kompatibilitást megszakító változások a
"major" verziószámot növelik.

A rendszert "Semantic Versioning", tehát szemantikus verziószámozásnak
kereszteltem. A séma mellett a szoftver evolúcióját az őt fedő verziószámok
változása tükrözi: a verziószámok így valós jelentéssel bírnak.


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

2. Az általános verziószám formátuma MUSZÁJ, hogy az X.Y.Z legyen, ahol az X, Y
és Z a természetes számok halmazába tartoznak, kezdő nullák nélkül. X a
"major", Y a "minor" és Z a "patch" verziószám. Mindhárom MUSZÁJ, hogy
számtanilag helyesen növekedjen. Például: 1.9.0 -> 1.10.0 -> 1.11.0.

3. Amiután egy új csomagverzió forgalomba lett hozva, a csomag tartalma nem
változhat. Bármilyen változás MUSZÁJ, hogy új verzióként legyen hozzáadva.

4. A nulladik "major" verzió (0.Y.Z) korai fejlesztésekre alkalmazható. Bárhol
várhatóak változások a szoftverben és a publikus API-tól nem elvárható, hogy
tökéletesen stabil legyen.

5. Az első verzió (1.0.0) defíniálja a publikus API-t. Ezt követő
verziószámok ennek az API-nak a változásától függnek.

6. A "patch", Z verziószámot (x.y.Z | x > 0) MUSZÁJ növelni, amikor kizárólag
hátrafele kompatibilis hibajavításokat addunk a szoftverhez. Ilyen hibajavítás
definíciója egy olyan belső változás ami addig hibás viselkedést korrigál.

7. A "minor", Y verziószámot (x.Y.z | x > 0) MUSZÁJ növelni, amikor olyan új
funkciókat adunk hozzá az API-hoz, ami a hátrafele kompatibilitást nem érinti.
MUSZÁJ növelni, amikor korábbi funkciókat elavultként jelölünk meg. Növelni
LEHET, amikor a új funkciók kerülnek a belső, privát kódbázisba. VÁLASZTHATÓAN
tartalmazhat "patch" szintű változásokat is. A "patch" verziószám MUSZÁJ, hogy
nullára csökkenjen amikor a "minor" verziószám növekszik.

8. A "major", X verziószámot (X.y.z | X > 0) MUSZÁJ növelni, amikor visszafelé
inkompatiblis változások vannak hozzáadva a nyílvános API-hoz. VÁLASZTHATÓAN
tartalmazhat "patch" és "minor" szintű változásokat is. A "patch" és "minor"
verziószámok MUSZÁJ, hogy nullára csökkenjenek amikor a "major" verziószám
növekszik.

9. Egy kiadás előtti ("pre-release") verzió VÁLASZTHATÓAN jelölhető egy
kötőjelet követően pontokkal elválasztott azonosítókkal, közvetlenül a "patch"
verzió után. Ezek az azonosítók MUSZÁJ, hogy kizárólag ASCII alfanumerikus
karakterekből és kötőjelekből álljon. Azonosítók NEM LEHETNEK üresek.
Számazonosítók NEM SZABAD, hogy nullával kezdődjenek. A kiadás előtti verziókhoz
képest elsőbbséget élveznek a hozzátartozó normál verziók. Egy kiadás előtti
verzió arra utal, hogy a verzió instabil és lehet, hogy nem elégíti ki a
szándékozott kompatibilitási feltételeket amire a normál verzió utal. Például:
1.0.0-alpha, 1.0.0-alpha.1, 1.0.0-0.3.7, 1.0.0-x.7.z.92.

10. Kiadással ("build") kapcsolatos metaadatok VÁLASZTHATÓAN egy plusz jel
hozzáadásával, majd pontokkal elválasztott azonotsítokkal rögzíthetőek,
közvetlenül a "patch" vagy kiadás előtti ("pre-release") verzió után. Ezek az
azonosítól MUSZÁK hogy kizárólag ASCII alfanumerikus karakterekből és
kötőjelekből álljon. Azonosítók NEM LEHETNEK üresek. Számazonosítók NEM SZABAD,
hogy nullával kezdődjenek. A kiadással kapcsolatos metaadatokat AJÁNLOTT
figyelmen kívül hagyni a verziók elsőbbségének meghatározásakor. Ennélfogva
két verzió ami csupán kiadással kapcsolatos metaadatban különböznek egyenlő
elsőbbséget élveznek. Például: 1.0.0-alpha+001, 1.0.0+20130313144700,
1.0.0-beta+exp.sha.5114f85.

11. Az elsőbbség arra utal, hogy hogy viszonyulnak egymáshoz a verziók amikor
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
kommunikálni a szándékaidat a szofvered felhasználóinak. Ha ezek a törekvések
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

Ha ez kívánatosnak hangzódik, mindössze annyit kell tenned, hogy kijelentsd,
hogy használod a Szemantikus Verziószámozást és kövesd a szabályait. Linkeld 
ezt a honlapot a csomagod README-jébe, hogy mások is megismerjék a szabályokat és
részesülhessenek az előnyeiben.


Gyakori kérdések
---

### How should I deal with revisions in the 0.y.z initial development phase?

The simplest thing to do is start your initial development release at 0.1.0
and then increment the minor version for each subsequent release.

### How do I know when to release 1.0.0?

If your software is being used in production, it should probably already be
1.0.0. If you have a stable API on which users have come to depend, you should
be 1.0.0. If you're worrying a lot about backwards compatibility, you should
probably already be 1.0.0.

### Doesn't this discourage rapid development and fast iteration?

Major version zero is all about rapid development. If you're changing the API
every day you should either still be in version 0.y.z or on a separate
development branch working on the next major version.

### If even the tiniest backwards incompatible changes to the public API require a major version bump, won't I end up at version 42.0.0 very rapidly?

This is a question of responsible development and foresight. Incompatible
changes should not be introduced lightly to software that has a lot of
dependent code. The cost that must be incurred to upgrade can be significant.
Having to bump major versions to release incompatible changes means you'll
think through the impact of your changes, and evaluate the cost/benefit ratio
involved.

### Documenting the entire public API is too much work!

It is your responsibility as a professional developer to properly document
software that is intended for use by others. Managing software complexity is a
hugely important part of keeping a project efficient, and that's hard to do if
nobody knows how to use your software, or what methods are safe to call. In
the long run, Semantic Versioning, and the insistence on a well defined public
API can keep everyone and everything running smoothly.

### What do I do if I accidentally release a backwards incompatible change as a minor version?

As soon as you realize that you've broken the Semantic Versioning spec, fix
the problem and release a new minor version that corrects the problem and
restores backwards compatibility. Even under this circumstance, it is
unacceptable to modify versioned releases. If it's appropriate,
document the offending version and inform your users of the problem so that
they are aware of the offending version.

### What should I do if I update my own dependencies without changing the public API?

That would be considered compatible since it does not affect the public API.
Software that explicitly depends on the same dependencies as your package
should have their own dependency specifications and the author will notice any
conflicts. Determining whether the change is a patch level or minor level
modification depends on whether you updated your dependencies in order to fix
a bug or introduce new functionality. I would usually expect additional code
for the latter instance, in which case it's obviously a minor level increment.

### What if I inadvertently alter the public API in a way that is not compliant with the version number change (i.e. the code incorrectly introduces a major breaking change in a patch release)?

Use your best judgment. If you have a huge audience that will be drastically
impacted by changing the behavior back to what the public API intended, then
it may be best to perform a major version release, even though the fix could
strictly be considered a patch release. Remember, Semantic Versioning is all
about conveying meaning by how the version number changes. If these changes
are important to your users, use the version number to inform them.

### Hogyan kezeljem az elavult funkcionalitást?

Teljesen normális esemény a szoftverfejlesztésben, hogy egyes funkcionalitások elavulnak, sőtt mi több, gyakran elvárt a szoftver fejlődésének érdekében. Amikor lecserélsz egy elavult részt a publikus API-dban, két dolgot kell tenned: (1) frissítsd a dokumentációt, hogy a felhasználók tudjanak a változásról, (2) eszközölj egy új minor kiadást az elavult résszel. Mielőtt teljesen eltörölnéd a funkcionalitást egy új, major kiadásban, kell lennie egy minor kiadásnak ami még tartalmazza az elavult részt, hogy a felhasználók zökkenőmentesen áttudjanak állni az új API-ra. 

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
