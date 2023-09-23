---
title: Wersjonowanie semantyczne 2.0.0
language: pl
---

Wersjonowanie semantyczne 2.0.0
===============================

Streszczenie
------------

Dla numeru wersji MAJOR.MINOR.PATCH, zwiększaj:

1. wersję MAJOR, gdy dokonujesz zmian niekompatybilnych z API,
2. wersję MINOR, gdy dodajesz nową funkcjonalność, która jest kompatybilna
   z poprzednimi wersjami,
3. wersję PATCH, gdy naprawiasz błąd nie zrywając kompatybilności z poprzednimi
   wersjami.

Dodatkowe oznaczenia dla wydania przedpremierowego lub meta-danych buildu są
dostępne jako rozszerzenia formatu MAJOR.MINOR.PATCH.

Wprowadzenie
------------

W świecie zarządzania oprogramowaniem istnieje przerażające miejsce nazywane
„piekłem zależności”. Im bardziej twój system rośnie i im więcej pakietów
integrujesz w swoim oprogramowaniu, tym większe jest prawdopodobieństwo, że
pewnego dnia znajdziesz się w tej otchłani rozpaczy.

W systemach z wieloma zależnościami, wydawanie nowych wersji pakietu może szybko
stać się koszmarem. Jeśli zależności są określone zbyt wąsko, jesteś zagrożony
blokadą wersji (niemożnością zaktualizowania pakietu bez konieczności wydania
nowych wersji każdego zależnego pakietu). Jeśli zależności są określone zbyt
luźno, nieuchronnie natniesz się na „rozwiązłość wersji” (założenie
kompatybilności z większą liczbą kolejnych wersji niż jest to rozsądne). Piekłem
zależności jest sytuacja, w której blokada wersji i/lub rozwiązłość wersji
uniemożliwiają wygodny i bezpieczny rozwój twojego projektu.

Jako rozwiązanie tego problemu proponuję prosty zbiór zasad i wymogów, które
regulują jak przypisywać i zwiększać numery wersji. Zasady te są oparte, ale
niekoniecznie ograniczone, na istniejących wcześniej, szeroko rozpowszechnionych
praktykach, stosowanych zarówno w zamkniętym, jak i otwartym oprogramowaniu. Aby
ten system działał, musisz najpierw określić publiczne API. Może to być
dokumentacja lub może wymusić je sam kod źródłowy. Niezależnie od sposobu
określenia, ważne jest, by to API było przejrzyste i precyzyjne. Kiedy już masz
swoje publiczne API, komunikujesz zmiany w nim określonymi zwiększeniami w swoim
numerze wersji. Rozważmy format wersji X.Y.Z (major.minor.patch). Naprawy błędów
nieingerujących w API zwiększają wersję patch, kompatybilne wstecz
dodatki/zmiany w API zwiększają wersję minor, a niekompatybilne wstecz zmiany
w API zwiększają wersję major.

Nazywam ten system „wersjonowaniem semantycznym”. W tym układzie numery wersji
i sposób, w jaki się zmieniają, przenoszą informacje o kodzie pod spodem i co
było zmieniane z wersji na wersję.

Specyfikacja wersjonowania semantycznego (SemVer)
-------------------------------------------------

Terminy „MUSI” („MUST”), „NIE MOŻE” („MUST NOT”), „WYMAGANY” („REQUIRED”), „MA
BYĆ” („SHALL”), „NIE BĘDZIE” („SHALL NOT”), „POWINIEN” („SHOULD”), „NIE
POWINIEN” („SHOULD NOT”), „ZALECANY” („RECOMMENDED”), „MOŻE” („MAY”)
i „OPCJONALNY” („OPTIONAL”) w tym dokumencie należy interpretować jak opisano
w [RFC 2119](http://tools.ietf.org/html/rfc2119).

1. Oprogramowanie używające wersjonowania semantycznego MUSI określać swoje
   publiczne API. API to może być zadeklarowane w samym kodzie lub może istnieć
   w samej dokumentacji. Jakkolwiek jest zdefiniowane, powinno być precyzyjne
   i wyczerpujące.

2. Standardowy numer wersji MUSI przyjąć formę X.Y.Z, gdzie X, Y i Z są
   nieujemnymi liczbami całkowitymi i NIE MOGĄ zawierać wiodących zer. X jest
   wersją major, Y wersją minor, a Z wersją patch. Każdy składnik MUSI rosnąć
   numerycznie. Przykładowo: 1.9.0 → 1.10.0 → 1.11.0.

3. Po wydaniu wersjonowanego pakietu zawartość tej wersji NIE MOŻE być
   modyfikowana. Jakiekolwiek zmiany MUSZĄ być wydane jako nowa wersja.

4. Wersja major zero (0.y.z) jest przeznaczona dla początkowej fazy rozwoju.
   Wszystko może ulec zmianie w dowolnym momencie. Publiczne API nie powinno być
   traktowane jako stabilne.

5. Wersja 1.0.0 określa publiczne API. Sposób, w jaki numer wersji jest
   zwiększany po tym wydaniu, zależy od tego publicznego API i jak się ono zmienia.

6. Wersja patch Z (x.y.Z | x > 0) MUSI zostać zwiększona, jeśli wprowadza się
   tylko kompatybilne wstecz naprawy błędów. Naprawa błędu definiowana jest jako
   zmiana wewnętrzna, która usuwa nieprawidłowe działanie.

7. Wersja minor Y (x.Y.z | x > 0) MUSI zostać zwiększona, jeśli nowa,
   kompatybilna wstecz funkcjonalność zostaje wprowadzona do publicznego API. MUSI
   zostać zwiększona, jeśli jakakolwiek funkcjonalność publicznego API zostaje
   zdezaprobowana. MOŻE zostać zwiększona, jeśli wprowadzone zostają nowe znaczące
   funkcjonalności lub ulepszenia w obrębie prywatnego kodu. MOŻE ona zawierać
   zmiany na poziomie patch. Numer wersji patch MUSI być ustawiony na 0, gdy wersja
   minor jest zwiększana.

8. Wersja major X (X.y.z | X > 0) MUSI zostać zwiększona, jeżeli do publicznego
   API są wprowadzane jakiekolwiek wstecznie niekompatybilne zmiany. MOŻE zawierać
   zmiany na poziomie minor oraz patch. Numery wersji minor oraz patch MUSZĄ być
   ustawione na 0, gdy wersja major jest zwiększana.

9. Wydanie przedpremierowe MOŻE być oznaczone przez dołączenie dywizu oraz
   zbioru identyfikatorów rozdzielonych kropkami, zaraz za numerem wersji
   patch. Identyfikatory MUSZĄ składać się wyłącznie ze znaków alfanumerycznych
   ASCII oraz myślników [0-9A-Za-z-]. Identyfikatory NIE MOGĄ być puste. Numeryczne
   identyfikatory NIE MOGĄ zawierać wiodących zer. Wydania przedpremierowe
   poprzedzają powiązane z nimi wersje standardowe. Wydanie przedpremierowe
   wskazuje na niestabilność wersji i możliwość niespełniania wymogów
   kompatybilności, które cechują powiązaną z nią standardową wersję. Przykłady:
   1.0.0-alpha, 1.0.0-alpha.1, 1.0.0-0.3.7, 1.0.0-x.7.z.92.

10. Meta-dane buildu MOGĄ być oznaczone przez dołączenie znaku plus oraz zbioru
    identyfikatorów rozdzielonych kropkami, zaraz za numerem wersji patch lub
    wydania przedpremierowego. Identyfikatory MUSZĄ składać się wyłącznie ze znaków
    alfanumerycznych ASCII oraz myślników [0-9A-Za-z-]. Identyfikatory NIE MOGĄ być
    puste. Meta-dane buildu POWINNY być ignorowane przy ustalaniu kolejności wersji.
    Zatem dwie wersje różniące się tylko meta-danymi buildu mają ten sam stopień
    pierwszeństwa. Przykłady: 1.0.0-alpha+001, 1.0.0+20130313144700,
    1.0.0-beta+exp.sha.5114f85.

11. Pierwszeństwo odnosi się do sposobu porównywania wersji między sobą podczas
    ich porządkowania. Pierwszeństwo MUSI być ustalane w rozdzieleniu wersji na
    identyfikatory major, minor, patch oraz identyfikator przedpremierowy w podanej
    kolejności (meta-dane buildu nie decydują o pierwszeństwie). Pierwszeństwo jest
    ustalane przez pierwszą różnicę wykrytą podczas porównania każdego
    z identyfikatorów od lewej do prawej: wersje major, minor, patch są zawsze
    porównywane numerycznie. Przykład: 1.0.0 < 2.0.0 < 2.1.0 < 2.1.1. Gdy numery
    wersji major, minor i patch są równe, wydanie przedpremierowe poprzedza wersję
    standardową. Przykładowo: 1.0.0-alpha < 1.0.0. Pierwszeństwo dwóch wydań
    przedpremierowych z takimi samymi numerami wersji major, minor i patch MUSI być
    ustalane przez porównywanie każdego z identyfikatorów rozdzielonych kropkami
    w kierunku od lewej do prawej, póki nie zostanie wykryta różnica w taki sposób:
    identyfikatory złożone z samych cyfr porównywane są numerycznie,
    a identyfikatory z literami lub dywizami porównywane są leksykalnie w kolejności
    ASCII. Identyfikatory numeryczne zawsze poprzedzają identyfikatory
    nienumeryczne. Większy zbiór przedpremierowych pól poprzedza mniejszy zbiór,
    o ile wszystkie poprzedzające identyfikatory są sobie równe. Przykład:
    1.0.0-alpha < 1.0.0-alpha.1 < 1.0.0-alpha.beta < 1.0.0-beta < 1.0.0-beta.2 <
    1.0.0-beta.11 < 1.0.0-rc.1 < 1.0.0.

Gramatyka poprawnej wersji SemVer w zapisie BNF
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

Dlaczego warto stosować wersjonowanie semantyczne?
--------------------------------------------------

To nie jest nowy ani rewolucyjny pomysł. W zasadzie prawdopodobnie już
posługujesz się prawie tą samą metodą. Problem w tym, że „prawie” robi różnicę.
Bez zgodności z jakimś rodzajem formalnej specyfikacji, numery wersji są
całkowicie nieprzydatne przy zarządzaniu zależnościami. Poprzez nadanie nazwy
i jasnych definicji powyższym pomysłom, łatwiejszym staje się przekazywanie
twoich intencji użytkownikom twojego oprogramowania. Gdy te intencje są jasne,
wreszcie da się robić elastyczne (ale nie zbyt elastyczne) specyfikacje
zależności.

Prosty przykład może udowodnić, w jaki sposób wersjonowanie semantyczne może
zamienić piekło zależności w relikt przeszłości. Rozważmy bibliotekę nazwaną
„Wóz strażacki”. Wymaga ona wersjonowanego semantycznie pakietu o nazwie
„Drabina”. W czasie, gdy Wóz strażacki jest tworzony, Drabina jest w wersji
3.1.0. Jako że Wóz strażacki korzysta z funkcjonalności, które zostały
wprowadzone po raz pierwszy w wersji 3.1.0, możesz bezpiecznie założyć, że
wymagana wersja Drabiny jest większa lub równa 3.1.0, ale mniejsza niż 4.0.0.
Teraz gdy staną się dostępne wersje Drabiny 3.1.1 lub 3.2.0, możesz puścić je
w swoim systemie zarządzania pakietami ze świadomością, że będą one kompatybilne
z istniejącym zależnym oprogramowaniem.

Jako odpowiedzialny programista musisz oczywiście zweryfikować, że każde
aktualizacje pakietów działają, jak powinny. Prawdziwy świat potrafi dać w kość;
nic nie możemy z tym zrobić poza zachowaniem czujności. To, co ty możesz zrobić,
to pozwolić by wersjonowanie semantyczne dostarczyło ci rozsądną metodę
wydawania i aktualizowania pakietów bez konieczności wydawania nowych
wersji pakietów zależnych, oszczędzającą ci czas i wysiłek.

Jeśli to wszystko brzmi zachęcająco, wszystko, co musisz zrobić, aby korzystać
z wersjonowania semantycznego, to zadeklarować się, że będziesz to robić,
a następnie przestrzegać zasad. Podlinkuj tę stronę w swoim README, aby inni
znali te zasady i mogli z nich korzystać.

Często zadawane pytania
-----------------------

### Jak powinienem zajmować się wersjami w 0.y.z początkowej fazie rozwoju?

Najprościej jest zacząć swoje wydanie początkowej fazy rozwoju od 0.1.0,
a następnie zwiększać wersję minor dla każdego kolejnego wydania.

### Skąd mam wiedzieć, kiedy wydać 1.0.0?

Jeśli twoje oprogramowanie jest w użyciu w produkcji, powinno prawdopodobnie już
być 1.0.0. Jeśli masz stabilne API, z którego zaczęli korzystać użytkownicy,
powinieneś mieć 1.0.0. Jeśli dużo się martwisz o kompatybilność wstecz,
powinieneś prawdopodobnie już mieć 1.0.0.

### Czy nie opóźnia to szybkiego rozwoju i szybkiej iteracji?

W wersji major zero chodzi o szybki rozwój. Jeśli zmieniasz API codziennie,
powinieneś albo być wciąż w wersji 0.y.z, albo w oddzielnej gałęzi rozwoju,
pracując nad nową wersją major.

### Jeśli nawet najmniejsze niekompatybilne wstecz zmiany w publicznym API wymagają podbicia wersji major, czy bardzo szybko nie skończę na wersji 42.0.0?

To jest kwestia odpowiedzialnego programowania i dalekowzroczności.
Niekompatybilne zmiany nie powinny być wprowadzane z lekkością do
oprogramowania, które jest zależnością w wielu miejscach. Koszt, który trzeba
ponieść, by zaktualizować pakiet, może być znamienny. Konieczność podbijania
wersji major przy wprowadzaniu niekompatybilnych zmian powoduje, że będziesz
myślał przez pryzmat siły oddziaływania swoich zmian i szacował stosunek
poniesionych kosztów do zysków.

### Stworzenie dokumentacji całego publicznego API to zbyt dużo pracy!

Jako profesjonalny programista jesteś odpowiedzialny za prawidłową dokumentację
oprogramowania, które jest przeznaczone do użytku przez innych. Zarządzanie
złożonością oprogramowania jest niezwykle ważną częścią utrzymania sprawności
projektu, a jest to trudne do zrobienia, jeśli nikt nie wie, jak używać twojego
oprogramowania albo z których metod jest bezpiecznie korzystać. Na dłuższą metę
wersjonowanie semantyczne oraz obstawanie przy dobrze zdefiniowanym publicznym
API pozwoli wszystkim i wszystkiemu działać płynnie.

### Co zrobić, jeśli przez przypadek wypuściłem niekompatybilną wstecz zmianę jako wersję minor?

Jak tylko odkryjesz, że zaburzyłeś specyfikację semantycznego wersjonowania,
napraw ten błąd i wydaj nową wersję minor, która niweluje błąd i przywraca
wsteczną kompatybilność. Nawet w takich okolicznościach niedopuszczalne jest
modyfikowanie wydanej wersji. Jeśli możesz, opisz błędną wersję i poinformuj
użytkowników o problemie, aby byli świadomi, że ta wersja jest błędna.

### Co powinienem zrobić, jeśli aktualizuję własne zależności bez zmiany publicznego API?

Taka aktualizacja jest uznawana za kompatybilną, gdyż nie narusza publicznego
API. Oprogramowanie, które opiera się na tych samych zależnościach co twój
pakiet, powinno mieć własną specyfikację zależności, a jego autor zauważy
konflikt. Ustalenie, czy zmiana jest na poziomie patch lub, czy jest modyfikacją
na poziomie minor, zależy od tego, czy zaktualizowałeś zależności w celu naprawy
błędu, czy w celu wprowadzenia nowej funkcjonalności. Zazwyczaj spodziewałbym
się dodatkowego kodu w tym drugim przypadku, co oczywiście oznacza zwiększenie
wersji minor.

### Co zrobić, gdy nieumyślnie zmieniłem publiczne API w taki sposób, że nie jest już zgodne ze zmianą numeru wersji (tj. kod nieprawidłowo wprowadza zmianę major w wydaniu patch)?

Postępuj zgodnie z rozsądkiem. Jeśli oprogramowanie używane jest przez wielu
użytkowników, dla których zmiana publicznego API do poprzednio zamierzonego
stanu może być dużym uderzeniem, lepiej jest wypuścić nową wersję major, nawet
jeśli problem mógłby być rozwiązany wydaniem wersji patch. Należy pamiętać, że
w semantycznym wersjonowaniu chodzi przede wszystkim o przekazanie znaczenia
zmiany poprzez zmianę numeru wersji. Jeśli zmiany są ważne dla użytkowników,
poinformuj ich o tym poprzez numer wersji.

### Jak powinienem radzić sobie z dezaprobowaniem funkcjonalności?

Dezaprobowanie istniejącej funkcjonalności jest normalną częścią programowania
i często jest konieczne, by móc rozwijać oprogramowanie. Gdy wycofujesz część
swojego publicznego API, powinieneś zrobić dwie rzeczy: (1) zaktualizować
dokumentację, by użytkownicy wiedzieli o tej zmianie, (2) wypuścić nowe wydanie
minor z informacją o zdezaprobowaniu. Zanim całkowicie usuniesz funkcjonalność
w nowym wydaniu major, powinno być co najmniej jedno wydanie minor zawierające
informację o zdezaprobowaniu, aby użytkownicy mogli płynnie przejść na nowe API.

### Czy SemVer ma limit długości na oznaczenie wersji?

Nie, ale miej zdrowy rozsądek. Na przykład numer wersji długi na 255 znaków to
prawdopodobnie przesada. Ponadto konkretne systemy mogą narzucać swoje własne
ograniczenia na rozmiar tego ciągu znaków.

### Czy ciąg „v1.2.3” spełnia zasady?

Nie, „v1.2.3” nie jest zgodne z wersjonowaniem semantycznym. Jednak przedrostek „v” jest
zazwyczaj używany w języku angielskim do oznaczenia, że mamy do czynienia z numerem wersji.
Skrót „v” od angielskiego słowa „version” jest często spotykany w systemach kontroli wersji.
Przykładowo, w przypadku `git tag v1.2.3 -m "Release version 1.2.3"`, „v1.2.3” jest nazwą taga,
a semantyczna wersja to „1.2.3”.

### Czy istnieje sugerowane wyrażenie regularne (RegEx) do weryfikacji porawności SemVer?

Istnieją dwa. Pierwsze wykorzystuje grupy nazwane i jest przeznaczone dla systemów, które
wspierają tę funkcjonalność (PCRE [Perl Compatible Regular Expressions, np. Perl, PHP i R], Python czy Go).

Patrz: https://regex101.com/r/Ly7O1x/3/
```
^(?P<major>0|[1-9]\d*)\.(?P<minor>0|[1-9]\d*)\.(?P<patch>0|[1-9]\d*)(?:-(?P<prerelease>(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+(?P<buildmetadata>[0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$
```

Druga wykorzystuje numerowane grupy przechwytujące (wzór gp1 = major, gp2 = minor, gp3 = patch, gp4 = przedpremierowa i gp5 =
meta-dane buildu) i jest kompatybilna z ECMA Script (JavaScript), PCRE [Perl Compatible Regular Expressions, np. Perl, PHP i R],
Python czy Go.

Patrz: https://regex101.com/r/vkijKf/1/

```
^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$
```

O specyfikacji
--------------

Autorem specyfikacji wersjonowania semantycznego jest
[Tom Preston-Werner](http://tom.preston-werner.com), wynalazca Gravatara
i współzałożyciel GitHuba.

Jeśli chcesz podzielić się opinią, prosimy
o [otworzenie zgłoszenia na GitHubie](https://github.com/semver/semver/issues).

Licencja
--------

[Creative Commons – CC BY 3.0](http://creativecommons.org/licenses/by/3.0/).
