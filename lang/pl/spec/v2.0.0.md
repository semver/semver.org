---
layout: polish
title: Semantyczne Wersjonowanie 2.0.0
---

Semantyczne Wersjonowanie 2.0.0
==============================

Streszczenie
-------

Mając do dyspozycji konkretny numer MAJOR.MINOR.PATCH, należy dokonać inkrementacji:

1. MAJOR wersji, gdy dokonujesz zmian niekompatybilnych z API,
1. MINOR wersji, gdy dodajesz nową funkcjonalność, która jest kompatybilna z poprzednimi wersjami,
1. PATCH wersji, gdy dokonujesz naprawy błędu, która jest kompatybilna z poprzednimi wersjami. 

Dodatkowe oznaczenia dla wydania przedpremierowego lub meta danych build-u są dostępne jako rozszerzenia formatu MAJOR.MINOR.PATCH.

Wprowadzenie
------------

W świecie zarządzania oprogramowaniem istnieje przerażające miejsce nazywane potocznie "piekłem zależności". Im większy jest system i im więcej paczek
instalujesz w swoim oprogramowaniu, tym większe jest prawdopodobieństwo, że pewnego dnia wylądujesz w tej otchłani rozpaczy.

W systemach z wieloma zależnościami, wypuszczanie nowych wersji paczek może szybko przeistoczyć się w koszmar. Jeśli zależności są zdefiniowane zbyt ściśle, istnieje niebezpieczeństwo blokady wersji (niemożności zaktualizowania paczki bez konieczności wypuszczenia nowych wersji wszystkich zależnych paczek). Jeśli zależności są zdefiniowane zbyt luźno, nieuchronnie dojdzie do "promiskuityzmu wersji" (zakładając istnienie kompatybilności z większą liczbą przyszłych wersji niż jest to wskazane). Piekło zależności zachodzi, gdy blokada wersji i/lub promiskuityzm wersji uniemożliwiają prosty i szybki rozwój oprogramowania. 

Jako rozwiązanie tego problemu proponuję prosty zbiór zasad i wymogów, które regulują przypisywanie i inkrementację numerów do wersji. Zasady te oparte są między innymi na istniejących wcześniej, szeroko rozpowszechnionych praktykach stosowanych zarówno w zamkniętym, jak i otwartym oprogramowaniu. By system ten funkcjonował, należy wpierw ustalić publiczne API, które zdefiniowane jest dokumentacją lub wynika z samego kodu źródłowego. Niezależnie od sposobu definicji, istotne jest, by API było klarowne i precyzyjne. Gdy publiczne API jest już zdefiniowane, można wprowadzać do niego zmiany z użyciem konkretnych inkrementacji do numeru wersji. Proponowany format to X.Y.Z (Major.Minor.Patch). Naprawy błędów nieingerujących w API inkrementują wersję patch, kompatybilne wstecz dodatki/zmiany w API inkrementują wersję minor, a niekompatybilne zmiany w API
inkrementują wersję major.

System ten został nazwany przeze mnie "Semantycznym Wersjonowaniem". W systemie tym numery wersji i sposób w jaki zostają zmienione wskazują na tworzący je kod oraz na to, co zostało zmodyfikowane od ostatniej wersji.


Specyfikacja Semantycznego Wersjonowania (SemVer)
------------------------------------------

Następujące terminy "MUSI" ("MUST"), "NIE MOŻE" ("MUST NOT"), "WYMAGANY" ("REQUIRED"), "MA BYĆ" ("SHALL"), "NIE BĘDZIE" ("SHALL NOT"), "POWINIEN" ("SHOULD"), "NIE POWINIEN" ("SHOULD NOT"), "ZALECANY" ("RECOMMENDED"), "MOŻE" ("MAY") oraz "OPCJONALNY" ("OPTIONAL") pojawiające się w tym dokumencie rozumiane są zgodnie z ich opisem na stronie: [RFC 2119](http://tools.ietf.org/html/rfc2119).

1. Oprogramowanie oparte na Semantycznym Wersjonowaniu MUSI mieć zdefiniowane publiczne API. API to może być zdefiniowane przez kod źródłowy albo dokumentację. 
Jakkolwiek jest zdefiniowane, powinno to być dokładne i wyczerpujące. 

2. Standardowy numer wersji MUSI przyjąć formę X.Y.Z, gdzie X, Y i Z są nieujemnymi liczbami całkowitymi, oraz NIE MOGĄ zawierać wiodących zer. X jest 
wersją major, Y wersją minor, a Z wersją patch. Każdy składnik MUSI rosnąć numerycznie. Przykładowo: 1.9.0 -> 1.10.0 -> 1.11.0.

3. W momencie wypuszczenia nowej wersji paczki, jej zawartość
NIE MOŻE być modyfikowana. Jakiekolwiek zmiany MUSZĄ być wypuszczane w postaci nowej wersji. 

4. Wersja zero Major (0.y.z) stanowi początkową fazę rozwoju. Wszystko może ulec zmianie w dowolnym momencie. Publiczne API nie jest uznane za stałe. 

5. Wersja 1.0.0 definiuje publiczne API. Sposób, w jaki numer wersji 
jest inkrementowany po wypuszczeniu tej wersji, zależy od publicznego API
i jak jest on modyfikowany.

6. Wersja Patch Z (x.y.Z | x > 0) MUSI być inkrementowana jeśli tylko kompatybilne
wstecz naprawy błędów są wprowadzane. Naprawa błędu definiowana jest jako zmiana
wewnętrzna, która usuwa nieprawidłowe działanie. 

7. Wersja Minor Y (x.Y.z | x > 0) MUSI być inkrementowana, gdy nowa, kompatybilna 
wstecz funkcjonalność zostaje wprowadzona do publicznego API. MUSI być ona inkrementowana, 
jeśli jakakolwiek funkcjonalność publicznego API zostaje oznaczona jako deprecjonowana. 
Wersja ta MOŻE być inkrementowana, jeśli wprowadzone zostają nowe znaczące funkcjonalności 
lub ulepszenia w obrębie prywatnego kodu. MOŻE ona zawierać zmiany na poziomie patch. 
Numer wersji patch MUSI być zresetowany do 0, gdy wersja minor jest inkrementowana.

8. Wersja Major X (X.y.z | X > 0) MUSI być inkrementowana, jeżeli jakiekolwiek wstecznie
niekompatybilne zmiany są wprowadzone do publicznego API. MOŻE ona zawierać zmiany na 
poziomie minor oraz patch. Numery wersji minor oraz patch MUSZĄ być zresetowane do 0, 
gdy wersja major jest inkrementowana. 

9. Wydanie przedpremierowe MOŻE być oznaczone przez dołączenie myślnika oraz zbioru identyfikatorów oddzielonych od siebie kropkami, zaraz za numerem wersji patch. Identyfikatory MUSZĄ składać się wyłącznie ze znaków alfanumerycznych ASCII oraz myślników [0-9A-Za-z-]. Identyfikatory NIE MOGĄ być puste. Numeryczne identyfikatory NIE MOGĄ zawierać wiodących zer. Wydania przedpremierowe są podrzędne w stosunku do powiązanych z nimi standardowych wersji. Wydanie przedpremierowe wskazuje na niestabilność wersji i możliwość niespełniania wymogów kompatybilności obecnych w powiązanej z nią standardowej wersji, na przykład: 1.0.0-alpha, 1.0.0-alpha.1, 1.0.0-0.3.7, 1.0.0-x.7.z.92.

10. Meta dane build-u MOGĄ być oznaczone przez dołączenie znaku plus oraz zbioru identyfikatorów oddzielonych od siebie kropkami, zaraz za numerem wersji pach lub wydania przedpremierowego. Identyfikatory MUSZĄ składać się wyłącznie ze znaków alfanumerycznych ASCII oraz myślników [0-9A-Za-z-]. Identyfikatory NIE MOGĄ być puste. Meta dane build-u POWINNY być odrzucone przy ustalaniu nadrzędności poszczególnych wersji. Zatem, dwie wersje różniące się tylko meta danymi build-u mają ten sam stopień pierwszeństwa. Przykładowo: 1.0.0-alpha+001, 1.0.0+20130313144700, 1.0.0-beta+exp.sha.5114f85.

11. Pierwszeństwo odnosi się do relacji między poszczególnymi wersjami ustawionymi w szeregu. Pierwszeństwo MUSI być ustalone poprzez rozdzielenie numeru wersji na identyfikatory major, minor, pitch oraz identyfikator przedpremierowy w powyżej podanej kolejności (meta dane build-u nie decydują o pierwszeństwie). Pierwszeństwo jest ustalone przez pierwszą różnicę wykrytą podczas porównania identyfikatorów od lewej do prawej strony, czyli w kolejności: wersje major, minor, patch są zawsze porównywane numerycznie. Przykładowo: 1.0.0 < 2.0.0 < 2.1.0 < 2.1.1. Gdy numery wersji major, minor i patch są równe, wydanie przedpremierowe jest podrzędne w stosunku do wersji standardowej. Przykładowo: 1.0.0-alpha < 1.0.0. Pierwszeństwo dwóch wydań przedpremierowych z takimi samymi numerami wersji major, minor i patch MUSI być ustalone przez porównanie każdego identyfikatora oddzielonego od reszty kropkami w kierunku od lewej do prawej póki różnica nie zostanie odkryta jak poniżej: identyfikatory złożone z samych cyfr porównywane są numerycznie, a identyfikatory złożone z liter i myślników porównywane są leksykalnie w kolejność ASCII. Identyfikatory numeryczne są zawsze podrzędne w stosunku do identyfikatorów nienumerycznych. Większy zbiór przedpremierowych identyfikatorów jest nadrzędny w stosunku do mniejszego zbioru, jeśli wszystkie poprzedzające identyfikatory są sobie równe. Przykładowo: 1.0.0-alpha < 1.0.0-alpha.1 < 1.0.0-alpha.beta < 1.0.0-beta < 1.0.0-beta.2 < 1.0.0-beta.11 < 1.0.0-rc.1 < 1.0.0.

Dlaczego warto stosować Semantyczne Wersjonowanie?
----------------------------

To nie jest ani nowy, ani rewolucyjny pomysł. W zasadzie, prawdopodobnie posługujesz się prawie tą samą metodą. Problem w tym, że "prawie" robi różnicę. Bez  przestrzegania formalnych zasad specyfikacji, numery wersji są nieprzydatne dla zarządzania zależnościami. Poprzez nadanie nazwy i jasnych definicji powyższym pomysłom, komunikowanie założeń z użytkownikami oprogramowania staje się łatwiejsze. Gdy założenia te są jasne i elastyczne (ale nie za bardzo elastyczne) specyfikacje zależności mogą być ustalone. 

Prosty przykład może udowodnić w jaki sposób Semantyczne Wersjonowanie może zamienić piekło zależności w relikt z przeszłości. Weźmy pod uwagę bibliotekę nazwaną "Wóz strażacki". Wymaga ona semantycznie wersjonowanej paczki nazwanej "Drabina". W momencie, gdy Wóz Strażacki jest już utworzony, Drabina funkcjonuje w wersji 3.1.0. Skoro Wóz Strażacki korzysta z funkcjonalności, które zostały wprowadzone po raz pierwszy w wersji 3.1.0, można spokojnie założyć, że zależność Drabiny jest większa lub równa 3.1.0, ale mniejsza niż 4.0.0. W momencie, gdy wychodzą wersje Drabiny 3.1.1 lub 3.2.0, można wypuścić je w systemie zarządzania paczkami ze świadomością, że będą one kompatybilne z istniejącym zależnym oprogramowaniem. 

Wiadomo, że jako odpowiedzialny programista chcesz mieć pewność, że wszelkie aktualizacje paczek działają tak jak powinny. W realnym świecie bywa chaotycznie;
nie można nic z tym zrobić poza zachowaniem czujności. To, co Ty możesz zrobić, to pozwolić by Semantyczne Wersjonowanie wspomogło Cię rozsądną metodą wypuszczania i aktualizowania paczek bez tworzenia nowych wersji zależnych paczek, dzięki czemu oszczędzasz czas i pozbywasz się kłopotu.

Jeśli to brzmi kusząco, wszystko, co musisz zrobić, aby korzystać z Semantycznego
Wersjonowania, to zadeklarować się, że będziesz to robić i zastosowujesz się do zasad. Zamieść link do tej strony na Twoim README, aby inni poznali te zasady i aby sami mogli z nich skorzystać.


FAQ
---

### Co mam robić ze zmianami w 0.y.z w początkowej fazie rozwoju? 

Najprostszym rozwiązaniem jest zacząć fazę początkową rozwoju od wypuszczenia 0.1.0, a następnie inkrementowania wersji minor dla każdego kolejnego wydania. 

### Skąd mam wiedzieć kiedy wypuścić 1.0.0?

Jeśli Twoje oprogramowanie jest już w użyciu, powinno ono być już wersją 1.0.0. Jeśli Twoje oprogramowanie posiada stałe API, na którym użytkownicy mogą polegać, oprogramowanie to powinno być 1.0.0. Jeśli zastanawiasz się nad kompatybilnością wstecz, Twoje oprogramowanie prawdopodobnie powinno być już w wersji 1.0.0.

### Czy nie opóźnia to szybkiego rozwoju i szybkiej iteracji?

W wersji zero Major chodzi właśnie o szybki rozwój. Jeśli zmieniasz API codziennie, Twoje oprogramowanie powinno być wciąż w wersji 0.y.z albo w oddzielnej
gałęzi rozwoju, dążąc do nowej wersji major. 

### Jeśli nawet najmniejsze niekompatybilne wstecz zmiany w publicznym API wymagają wypuszczenia nowej wersji major, czy za szybko nie dojdę do wersji 42.0.0?

To pytanie dotyczy odpowiedzialnego programowania i dalekowzroczności. Niekompatybilne zmiany nie powinny być wprowadzane lekkomyślnie do oprogramowania, które posiada wiele zależnego kodu. Koszt, który trzeba ponieść, by wypuścić nową wersję może być znaczący. Konieczność wypuszczenia nowej wersji major, by wprowadzić niekompatybilne zmiany zmuszą Cię do przemyślenia znaczenia zmian i ocenienia stosunku zaistniałych kosztów do możliwych korzyści.

### Stworzenie dokumentacji całego publicznego API to dużo roboty!

Do Twoich obowiązków jako profesjonalnego programisty należy poprawne opisanie oprogramowania stworzonego dla innych do użytku. Zarządzanie złożonym oprogramowaniem jest niezwykle istotnym czynnikiem utrzymania sprawności oprogramowania, a jest to trudne do zrobienia, jeśli nikt nie wie jak używać oprogramowania albo z jakich metod korzystać. Na dłuższą metę, Semantyczne Wersjonowanie oraz utrzymanie dobrze zdefiniowanego publicznego API skutkuje sprawnym funkcjonowaniem oprogramowania.

### Co zrobić, jeśli przez przypadek wypuściłem niekompatybilną wstecz zmianę jako wersję minor? 

Jak tylko odkryjesz, że zaburzyłeś specyfikacje Semantycznego Wersjonowania, napraw
ten błąd i wypuść nową wersję minor, która niweluje błąd oraz przywraca kompatybilność z przeszłymi wersjami. Nawet w takich okolicznościach, niedopuszczalne jest modyfikowanie wypuszczonej wersji. Jeśli możesz, opisz błędną wersję i poinformuj użytkowników o problemie, aby byli świadomi, że wersja ta jest błędna. 

### Co zrobić, jeśli zaktualizuje własne zależności bez zmiany publicznego API? 

Taka aktualizacja jest uznana za kompatybilną, gdyż nie narusza publicznego API. Oprogramowanie, które opiera się na tych samych zależnościach co Twoja paczka, powinno mieć własną specyfikację zależności, a jego autor powinien zauważyć jakąkolwiek sprzeczność. Ustalenie, czy zmiana jest poziomie patch lub czy jest modyfikacją na poziomie minor zależy od tego, czy zaktualizowałeś zależności w celu naprawy błędu, czy w celu wprowadzenia nowej funkcjonalności. W tym drugim przypadku, użyłbym dodatkowego kodu, co oczywiście oznacza inkrementację na poziomie minor. 

### Co jeśli nieumyślnie zmieniłem publiczne API w taki sposób, że nie jest już kompatybilne ze zmianą numeru wersji (tj. kod nieprawidłowo wprowadza zmianę major w wydaniu patch)? 

Postępuj zgodnie z rozsądkiem. Jeśli oprogramowanie używane jest przez wielu użytkowników, dla których zmiana publicznego API do poprzednio zamierzonego stanu może być dużym uderzeniem, lepiej jest wypuścić nową wersję major, nawet jeśli problem mógłby być rozwiązany wydaniem wersji patch. Należy pamiętać, że w Semantycznym Wersjonowaniu chodzi przede wszystkim o przekazanie znaczenia zmiany poprzez zmianę numeru wersji. Jeśli zmiany są ważne dla użytkowników, poinformuj ich o tym poprzez numer wersji. 

### Jak poradzić sobie z deprecjacją funkcjonalności?

Deprecjacja istniejącej funkcjonalności jest standardowym etapem programowania i często jest konieczna, by móc rozwinąć oprogramowanie. Gdy wycofujesz część publicznego API, powinieneś zrobić dwie rzeczy: (1) zaktualizować dokumentację, by użytkownicy wiedzieli, że zaistniała zmiana, (2) wypuścić nowe wydanie minor na etapie deprecjacji. Przed całkowitym wycofaniem funkcjonalności w nowym wydaniu major przynajmniej jedno wydanie minor ukazujące deprecjacje powinno być wypuszczone, aby użytkownicy mogli płynnie przejść na nowe API. 

### Czy w semver istnieje limit długości oznaczenia wersji?

Limit nie istnieje, ale należy zachować zdrowy rozsądek. Przykładowo numer długi na 255 znaków to przesada. Ponadto, różne systemy mogą narzucać swoje własne ograniczenia dotyczące długości oznakowania wersji. 

O twórcy
-----

Autorem specyfikacji Semantycznego Wersjonowania jest [Tom Preston-Werner](http://tom.preston-werner.com), twórca Gravatars i współzałożyciel GitHub.

Jeśli chcesz podzielić się opinią, możesz [otworzyć Issue na GitHub](https://github.com/mojombo/semver/issues).


Licencja
-------

[Creative Commons - CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)
