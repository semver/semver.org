---
title: Sémantické verzování 2.0.0
language: cs
author: Jakub Křižka
---

Sémantické verzování 2.0.0
===========================

Shrnutí
--------

Číslo verzí zapisujeme ve formátu MAJOR.MINOR.PATCH
Navyšování jednotlivých čísel verzí probíhá následovně:

1. MAJOR ― když nastala změna, která není zpětně kompatibilní s ostatními (API)
2. MINOR ― když se přidá funkcionalita se zachováním zpětné kompatibility
3. PATCH ― když se opravila chyba a zůstala kompatibilita

Pomocí předběžných verzí a přidáváním metadat je možné upřesnit informace. Např.: `1.0.0-alfa`, `1.0.1-beta+2`

Úvod
----

Ve světě softwaru, jeho vývoje a správy existuje děsivé místo, kterému anglicky říkáme „dependency hell“ (v překladu „peklo závislostí“). Čím větší a komplexnější váš projekt je, tím je větší šance, že se na tomto místě jednou ocitnete.

Když mají systémy mnoho závislostí, může se stát, že vydání nové verze je noční můrou pro obě strany. Pokud je specifikovaná závislost příliš striktní, hrozí, že zůstanete na jedné verzi (angl. „version lock“) a nebudete mít možnost přejít na další verzi bez toho, abyste vydali další verze všech balíčků nebo knihoven, na kterých projekt stojí. Na druhou stranu, když je specifikovaná závislost příliš volná, přijdete na to, že váš program je kompatibilní s více verzemi než je nutné a potřebné. V pekle závislostí se nacházíte, jakmile jste vázaný určitou verzí nebo v případně, že není přesně specifikován rozsah verzí, které máte použít. Taková situace brání v bezpečném vývoji kupředu.

Řešením tohoto problému je jednoduchý sled pravidel, které určují, jak budou čísla verzí přiřazována a navyšována. Tato pravidla jsou založena (ale nikoliv omezena) na již ověřené praxi a to ve vývoji otevřeného i uzavřeného softwaru. Pro správné fungování systému, si musíte nejdříve nadefinovat způsob, jakým se bude komunikovat s Vaší aplikací (dále API). Toto API může být nadefinováno pomocí rozsáhlé dokumentace nebo zapsáno přímo ve zdrojovém kódu. Nezáleží na způsobu zápisu, je důležité, aby bylo srozumitelné a snadno čitelné. Je třeba mít kompletní dokumentaci, způsob oznamovaní a čitelné rozdíly v nových verzích. Zápis verzí je ve formátu MAJOR.MINOR.PATCH. Opravy chyb, které nezměnily Vaše API, zvyšují číslo PATCH verze. Zpětně kompatibilní změny v API zvyšují hodnotu MINOR verze a rozdílné verze API, které nejsou zpětně kompatibilní, zvyšují číslo MAJOR verze.

Tímto způsobem je nastavený systém Sémantického verzování.

Specifikace Sémantického verzování (SemVer)
--------------------------------------------

„MUSÍ“ (angl. MUST, REQUIRED, SHALL)
„NESMÍ“ (angl. MUST NOT, SHALL NOT)
„MĚLO BY“ (angl. SHOULD, RECOMMENDED)
„NEMĚLO BY“ (angl. SHOULD NOT)
„MŮŽE“ (angl. MAY, OPTIONAL)
(výrazy jsou interpretované z dokumentu: [RFC 2119](http://tools.ietf.org/html/rfc2119))

1. Software používající Sémantické verzování, MUSÍ mít nadefinované API, buďto přímo ve zdrojovém kódu a nebo v externí dokumentaci. V obou případech to musí být hlavně přesné a komplexní.

2. Číslo verzí MUSÍ být ve formátu X, Y, Z. Jedná se o celá nezáporná čísla, přičemž X se NESMÍ rovnat hodnotě nula. Může se rovnat nule jen v případě, kdy se jedná o počáteční vývoj. X je číslo MAJOR verze, Y je číslem MINOR verze a Z je číslem PATCH verze, přičemž každé číslo má svoji hodnotu a navyšují se zvlášť a standardně, např.1.9.0 => 1.10.0 => 1.11.0.

3. Jakmile se vydá očíslovaná verze programu, NESMÍ se měnit a každá další úprava nebo oprava je vydána pod novou verzí.

4. MAJOR verze s hodnotou 0 (0.y.z.) je určena pro počáteční vývoj. Cokoliv se může změnit a API v tomto formátu by NEMĚLO být považováno za stabilní.

5. Verze 1.0.0 definuje veřejně vydané API. Způsob, jakým se dále navyšuje číslo verze je ovlivněné tímto API a jeho změnami.

6. Číslo PATCH (Z) MUSÍ být navýšené jenom pokud byly implentované zpětně kompatibilní opravy chyb. Oprava chyb je definována jako interní změna opravující nežádoucí chování programu.

7. Číslo MINOR (Y) MUSÍ být zvýšené, když byla do API přidána nová, zpětně kompatibilní funkcionalita nebo pokud byla jakákoliv funkcionalita odebrána (jako zastaralá) i pokud neovlivňuje samotný API kód. MŮŽE zahrnout i změnu PATCH verze. Číslo PATCH verze se musí vynulovat vždy, když se změní MINOR verze.

8. Číslo MAJOR (X) MUSÍ být zvýšené, když byly přidané změny, které způsobily zpětnou nekompatibilitu. MŮŽE zahrnout i změny v rámci MINOR a PATCH verze. Číslo MINOR i PATCH se MUSÍ vynulovat vždy, když se změní MAJOR verze.

9. Předběžné verze (angl. pre-release) MOHOU být označeny přidáním pomlčky a sérií identifikátorů oddělených tečkou hned za číslo PATCH verze. Identifikátory MUSÍ obsahovat pouze ASCII alfanumerické znaky a pomlčku [0-9A-Za-z-], NESMÍ být prázdné a číselné identifikátory NESMÍ obsahovat úvodní nulu. Předběžné verze mají nižší prioritu jako související normální verze. Předběžná verze je nestabilní a nemusí splňovat požadavky a závislosti jako normální verze. Např.: 1.0.0-alpha, 1.0.0-alpha.1, 1.0.0-0.3.7, 1.0.0-x.7.z.92.

10. Metadata MOHOU být označené ve verzi přidáním znaku plus (+) a sérií identifikátorů oddělených tečkou hned za číslo PATCH a nebo pomocí předběžné verze. Identifikátory MUSÍ obsahovat pouze ASCII alfanumerické znaky a pomlčku [0-9A-Za-z-], NESMÍ být prázdné a číselné identifikátory NESMÍ obsahovat úvodní nulu. Metadata by NEMĚLA hrát roli při volbě priority verze. Např.: verze 1.0.0-alpha+001, 1.0.0+20130313144700, 1.0.0-beta+exp.sha.5114f85 mají všechny stejnou prioritu.

11. Priorita se vztahuje na to, jak se verze vzájemně porovnávají. Priorita MUSÍ být určována rozdělením verze na MAJOR, MINOR, PATCH a identifikátory předběžných verzí ― přesně v tomto pořadí (s metadaty se nepočítá). Priorita je daná prvním rozdílem při porovnání zleva doprava přičemž čísla MAJOR, MINOR a PATCH jsou vždy porovnávána jako čísla. Např.: 1.0.0 < 2.0.0 < 2.1.0 < 2.1.1. Pokud jsou čísla MAJOR, MINOR a PATCH stejná, předběžná verze má menší prioritu, než normální. Např.: 1.0.0-alpha < 1.0.0. Priorita pro dvě předběžné verze, které se shodují v číslech MAJOR, MINOR a PATCH musí být počítána zleva doprava od tečky oddělených identifikátorů a to do doby, dokud se nenajde rozdíl a to následujícím způsobem: (1) Identifikátory obsahující pouze číslice, jsou porovnané číselně a identifikátory s písmeny nebo pomlčkami jsou porovnávané lexikálně, zařazené podle ASCII. (2) Číselné identifikátory mají vždy nižší prioritu jak nečíslené. (3) Jsou-li všechny předchozí identifikátory v předběžné verzi stejné, tak větší množství identifikátorů značí vyšší prioritu, než s menším počtem. Např.: 1.0.0-alpha < 1.0.0-alpha.1 < 1.0.0-alpha.beta < 1.0.0-beta < 1.0.0-beta.2 < 1.0.0-beta.11 < 1.0.0-rc.1 < 1.0.0.

Proč používat Sémantické verzování?
------------------------------------

Sémantické verzování není revoluční myšlenka a když vydáváte software, tak už pravděpodobně děláte něco podobného. Problém je, že „něco podobného“ nestačí. Bez dodržování daných formálních specifikací jsou čísla pro managment závislostí v podstatě na nic. Tím, že výše uvedeným myšlenkám dáváme přesnou a jasnou definici, je lehčí komunikovat záměry Vašeho softwaru jeho uživatelům. Jakmile jsou záměry jasné a flexibilní (ale ne příliš), specifikace závislostí může začít.

Následující příklad ilustruje, jak se díky Sémantickému verzování můžete snadno vyhnout problémům se závislostmi (tzv. „dependency hell“). Mějme knihovnou „Firetruck“ (česky požární vůz). Ta závisí na Sémanticky verzované knihovně „Ladder“ (česky žebřík). Ve době vzniku knihovny Firetruck je aktuální verze knihovny Ladder 3.1.0. Protože Firetruck využívá některé funkce knihovny Ladder, které do ni byly přidány až ve verzi 3.1.0, můžete bez rizika nadefinovat závislost na knihovně Ladder ve verzi vyšší nebo rovno 3.1.0 a menší než 4.0.0. Jakmile bude vydána verze Ladder 3.2.0, můžete se spolehnout na to, že s ní bude knihovna Firetruck kompatibilní.

Jako zodpovědní vývojáři určitě budete chtít kontrolovat, že všechno funguje podle Vašich předpokladů. Sématické verzování vám umožní rozumný způsob, jak vydávat a aktualizovat knihovny tak, abyste nemuseli řešit nové verze závislostí, ušetřili si čas a vyhnuli se zmatkům.

Pokud vám tyto argumenty připadají rozumné, všechno co potřebujete udělat pro začátek používání Sémantického verzování, je dát vědět, že to děláte, a následně dodržovali stanovená pravidla. Odkazem ze souboru README z vaší aplikace/softwaru na tyto stránky dejte ostatním vědět, jaká pravidla používáte. Přinese to užitek vám i uživatelům vašeho software nebo aplikace.

Často kladené otázky (FAQ)
--------------------------

### Jak si poradit s verzemi 0.y.z. na začátku vývoje?

Nejjednodušším způsobem je začít vývoj na verzi 0.1.0. a potom zvyšovat MINOR verzi při každém dalším vydání softwaru.

### Jak poznat, kdy vydat verzi 1.0.0?

Pokud se váš software již používá v produkci, už by pravděpodobně měl mít verzi 1.0.0. Jestli máte stabilní API, které už uživatelé mají mezi svými závislostmi, měli byste mít už verzi 1.0.0. Taktéž, když se obáváte o zpětnou kompatibilitu.

### Neodrazuje to od rychlého vývoje?

MAJOR verze nula je o rychlém vývoji. Když každý den měníte API, stále byste měli být někde ve fázi 0.y.z nebo na separátní vývojové větvi, kde se připravuje následující MAJOR verze.

### Pokud ty nejmenší zpětně nekompatibilní změny v API znamenají navýšení MAJOR verze, neskončíme poměrně rychle někde ve verzi 42.0.0?

To je otázka zodpovědného vývoje a prognóz. Nekompatibilní změny by neměly být v softwaru, který má mnoho závislostí, zavedeny jen tak. Náklady vynaložené na aktualizaci mohou být dost vysoké. To, že musíte vydat novou verzi MAJOR znamená, že jste si dobře promysleli dopad všech změn, výhody i následky.

### Zdokumentovat celé API je strašně moc práce!

Je Vaší zodpovědností jako profesionálních vývojářů správně dokumentovat software, který je určený i pro ostatní. Spravování složitosti softwaru je velmi důležitá část, pokud chcete váš projekt udržovat efektivní. A to nebude možné, když nikdo nebude vědět, jak váš software používat nebo které metody je bezpečné volat. Z dlouhodobého hlediska se Sématické verzování a důraz na dobře definované API ukázaly jako správná volba, umožňující hladké i dlouhodobé fungování.

### Co dělat, když vydám zpětně nekompatibilní verzi MINOR?

Jakmile zjistíte, že jste porušili pravidla Sémantického verzování, opravte problém a vydejte další MINOR verzi, která opět vrátí zpětnou kompatibilitu. I vzhledem na vzniklou situaci je nepřípustné, abyste měnili už vydanou verzi. Pokud je to možné a vhodné, informujte uživatele o špatné verzi, aby věděli, že se jedná o chybu a dané verzi se vyhnuli.

### Co dělat, když jsem aktualizoval vlastní závislosti bez toho, aby se změnilo API?

Můžeme to považovat za kompatibilní, když to nijak neovlivnilo API. Software, který přesně závisí na balíčcích jako váš, by měl mít vlastní definici závislostí a jeho autor si všimne jakýchkoliv konfliktů. Rozhodnutí, zda se jedná o MINOR nebo PATCH závisí od toho, jestli jste upravili své závislosti kvůli nějaké chybě nebo proto, že jste přidali novou funkcionalitu. Pokud se jedná o druhý případ, očekává se, že přibude i nějaký kód a tím pádem se jedná o zvýšení MINOR verze.

### Co když jsem nechtěně změnil API, způsobem, který není v souladě se změnou čísla verze (například jsem udělal MAJOR změnu v PATCH verzi)

Posuďte, co je nejlepší. Jestli máte velkou skupinu uživatelů, která by byla ovlivněna změnou zpět, tak asi bude nejlepší vydat MAJOR verzi i na úkor toho, že oprava zpět by měla být součástí PATCH verze. Pamatujte, že Sémantické verzování je o tom, jak se verze mění. Jestli jsou změny pro Vaše uživatele důležité, použijte také číslo verze, abyste je informovali.

### Jak se vypořádat se zastaralými funkcionalitami?

Označení funkcionality jako zastaralé je standardní část softwarového vývoje a většinou je to potřeba k tomu, aby šel vývoj kupředu. Když zestárne část API, měli by jste udělat dvě věci: (1) upravit dokumentaci, aby uživatelé věděli o změně, (2) vydat další MINOR verzi, která funkcionalitu „zestárne“. Předtím, než funkcionalitu kompletně odstraníte v další MAJOR verzi, měli byste vytvořit alespoň jednu MINOR verzi, která obsahuje „zestárnutí“. To umožní uživatelům hladký a snadný přechod nebo převod na nové API.

### Má Sémantické verzování nějaký limit délky označení verzí?

Ne, nemá. Limit je 255 ASCII znaků, ale na to při běžném použití verzování nenarazíte.

O specifikaci
-------------

Autorem Specifikace sémantického verzování je
[Tom Preston-Werner](http://tom.preston-werner.com), autor projektu Gravatar a spolu-zakladatel projektu Github.

Pokud chcete zanechat zpětnou vazbu, prosím
[přes GitHub](https://github.com/semver/semver/issues).

### Český překlad

[Jakub Křižka](https://github.com/jakubkrizka) (autor),
[Zuzana Bertová](https://www.facebook.com/suzanna.bertova) (korektor),
[Aleš Pařízek](https://www.facebook.com/ales.parizek.1) (korektor),
[Jan Barášek](http://baraja.cz) (korektor),
[R3gi](https://www.r3gi.cz) (korektor)

Licence
--------

[Creative Commons ― CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)
