---
title: Семантичне версіонування 2.0.0
language: uk
---

Семантичне версіонування 2.0.0
==============================

Коротко
-------

У випадку, коли версія має вигляд МАЖОРНА.МІНОРНА.ПАТЧ, слід збільшувати:

1. МАЖОРНУ версію, якщо зроблені зміни API, що несумісні з попередньою версією
2. МІНОРНУ версію, якщо доданий новий функціонал, що є сумісним з попередніми версіями
3. ПАТЧ версію, якщо зроблені невеликі зміни або фікси, що не впливають на підтримку попередніх версій

Додаткові позначки для передрелізних збірок дозволені, як розширення до формату МАЖОРНА.МІНОРНА.ПАТЧ.


Вступ
------------

У світі управління програмним забезпеченням існує таке поняття, як "dependency hell", і з розростанням системи, та інтеграції в неї великої кількості пакетів дуже ймовірно опинитись у цій ситуації.

У системах з багатьма залежностями, випуск нових версій пакетів може швидко перетворитись на жах. Якщо специфікації залежностей надто жорсткі, існує небезпеці блокування версії (неможливість оновити пакет без випуску нових версій кожного залежного пакета). Якщо специфікація занадто вільна, це неминуче призведе до несумісності версій (припускаючи сумісність з майбутніми версіями). Dependency hell ― це ситуація, коли блокування версій та/або несумісність версій не дає можливості легко і безпечно оновлювати систему та працювати з нею.

Як вирішення цієї проблеми пропонується простий набір правил і вимог, про призначення та збільшення номерів версій. Ці правила ґрунтуються, на існуючих поширених практиках, як в закритому, так і в відкритому програмному забезпеченні. Щоб ця система працювала, спочатку потрібно оголосити відкритий API. Це може бути документація або код. Незважаючи на це, важливо, щоб цей API був чітким і точним. Після того, як був визначений загальнодоступний API, можна повідомляти про його зміни з певними збільшеннями номерів версії. Розглянемо формат версії X.Y.Z (МАЖОРНА.МІНОРНА.ПАТЧ). Виправлення помилок, які не впливають на API, збільшують ПАТЧ-версію, зворотносумісні додавання/зміни API збільшують МІНОРНУ версію, а зворотньонесумісні зміни API збільшують МАЖОРНУ версію.

Цю систему називано "Семантичне версіонування". Відповідно до неї, номери версій і спосіб їх зміни передають інформацію про базовий код і те, що змінено від попередньої до нової версії.


Специфікація Семантичного Версіонування (SemVer)
------------------------------------------

Ключові слова "ПОВИНЕН" (MUST), "НЕ ПОВИНЕН" (MUST NOT), "ОБОВ'ЯЗКОВО" (REQUIRED), "МУСИТЬ" (SHALL), "НЕ МУСИТЬ" (SHALL NOT), "БАЖАНО" (SHOULD),
"НЕ БАЖАНО" (SHOULD NOT), "РЕКОМЕНДОВАНО" (RECOMMENDED), "МОЖЕ" (MAY), та "ОПЦІОНАЛЬНО" (OPTIONAL), що використані в цьому документі, повинні бути інтерпретовані за [RFC 2119](http://tools.ietf.org/html/rfc2119).

1. Програмне забезпечення, що використовує Семантичне Версіонування, ПОВИННЕ оголосити публічний API. Цей API може бути оголошений самим кодом або існувати в документації. Незалежно від типу оголошення, воно повинно бути точним і всеосяжним.

2. Нормальний номер версії ПОВИНЕН прийняти форму X.Y.Z, де X, Y і Z є невід'ємними цілими числами, і НЕ ПОВИННІ мати додаткові нулі на початку. X ― мажорна версія, Y ― мінорна версія, а Z ― патч-версія. Кожен елемент повинен збільшуватися чисельно. Наприклад: 1.9.0 -> 1.10.0 -> 1.11.0.

3. Після випуску пакета конкретної версії, він НЕ ПОВИНЕН змінюватись. Будь-які зміни ПОВИННІ бути випущені, як нова версія.

4. Нульова мажорна версія (0.y.z) призначена для початкової розробки. Все МОЖЕ змінюватись в будь-який час. Публічний API такої версії не слід вважати стабільним.

5. Версія 1.0.0 визначає відкритий API. Збільшення номерів версій відштовхується від цього API і його змін.

6. Патч-версія Z (x.y.Z | x > 0) ПОВИННА бути збільшена, якщо введені лише зворотньосумісні виправлення помилок. Виправлена ​​помилка визначається, як внутрішня зміна, що виправляє неправильну поведінку.

7. Мінорна версія Y (x.Y.z | x > 0) ПОВИННА бути збільшена, якщо до публічного API додана нова зворотньосумісна функціональність. Вона ПОВИННА бути збільшена, якщо будь-яка функціональність публічного API позначена, як застаріла (deprecated). Вона МОЖЕ збільшуватися, якщо в приватному коді вводяться істотні зміни функціональних можливостей або вдосконалення. Вона МОЖЕ включати зміни подібні до патчів. Патч-версія ПОВИННА бути скинута до 0 при збільшенні мінорної версії.

8. Основна версія X (X.y.z | X > 0) ПОВИННА бути збільшена, якщо будь-які зворотньонесумісні зміни вводяться до відкритого API. Вона може включати незначні зміни, та патчі. Патч і мінорна версії ПОВИННІ бути скинуті до 0 при збільшенні мажорної версії.

9. Передрелізна версія МОЖЕ бути позначена додаванням дефісу і серії ідентифікаторів, розділених крапками, відразу після патч-версії. Ідентифікатори ПОВИННІ включати лише алфавітно-цифрові символи ASCII та дефіс [0-9A-Za-z-]. Ідентифікатори НЕ ПОВИННІ бути порожніми. Числові ідентифікатори НЕ ПОВИННІ мати додаткові нулі на початку. Передрелізні версії мають меншу значимість, аніж відповідна нормальна версія. Передрелізна версія вказує, що версія нестабільна і може не задовольняти передбачуваним вимогам щодо сумісності, позначеним відповідною версією. Приклади: 1.0.0-alpha, 1.0.0-alpha.1, 1.0.0-0.3.7, 1.0.0-x.7.z.92.

10. Метадані збірки МОЖНА позначати додаванням знака плюс і серії ідентифікаторів, розділених крапками відразу після патч або передрелізної версії. Ідентифікатори ПОВИННІ включати лише алфавітно-цифрові символи ASCII та дефіс [0-9A-Za-z-]. Ідентифікатори НЕ ПОВИННІ бути порожніми. Метадані збірки ПОВИННІ ігноруватися при визначенні пріоритету версії. Таким чином, дві версії, які відрізняються тільки в метаданими, мають однаковий пріоритет. Приклади: 1.0.0-alpha+001, 1.0.0+20130313144700, 1.0.0-beta+exp.sha.5114f85.

11. Поняття значимості відноситься до того, як версії порівнюються один з одним при упорядкуванні. Значимість ПОВИННА обчислюватись шляхом поділу версії на мажорні, мінорні, патч та передрелізні ідентифікатори в такому порядку (метадані збірки не мають пріоритету). Значимість визначається першою відмінністю при порівнянні кожного з цих ідентифікаторів зліва направо наступним чином: мажорні, мінорні і патч-версії завжди порівнюються чисельно. Приклад: 1.0.0 < 2.0.0 < 2.1.0 < 2.1.1. Коли мажорна, мінорна і патч-версія рівні, передрелізна версія має меншу значимість, аніж звичайна версія. Приклад: 1.0.0-alpha < 1.0.0. Значимість для двох передрелізні версій з однаковою версією мажорною, мінорною і патч-версією ПОВИННІ визначатися шляхом порівняння кожного окремого ідентифікатора зліва направо, поки не буде знайдена різниця: ідентифікатори, що складаються тільки з цифр, порівнюються чисельно і ідентифікатори з літерами або дефіси порівнюються лексично в порядку сортування ASCII. Числові ідентифікатори завжди мають меншу значимість, ніж нечислові ідентифікатори. Більший набір попередніх полів має більш високий пріоритет, ніж менший набір, якщо всі попередні ідентифікатори рівні. Приклад: 1.0.0-alpha < 1.0.0-alpha.1 < 1.0.0-alpha.beta < 1.0.0-beta < 1.0.0-beta.2 < 1.0.0-beta.11 < 1.0.0-rc.1 < 1.0.0.


Навіщо використовувати Семантичне Версіонування?
----------------------------

Це не нова або революційна ідея. Насправді, вже існує багато близького до того. Проблема в тому, що "близького до того" не достатньо. Без відповідності певній формальній специфікації з версіонування, управління залежностями є марним. Надавши назви та чіткі визначення вищенаведеним ідеям, стає легким передати свої наміри кінцевим користувачам. Після того, як ці наміри стануть зрозумілими, нарешті можуть бути зроблені гнучкі (але не занадто гнучкі) специфікації для ведення залежностей.

Простий приклад продемонструє, як Семантичне Версіонування може залишити "dependency hell" в минулому. Розглянемо бібліотеку під назвою "Firetruck". Він залежить від Семантично Версіонованого пакету під назвою "Ladder". На момент створення Firetruck, Ladder мав версію 3.1.0. Оскільки Firetruck використовує деякий функціонал, який був вперше введений в 3.1.0, можна сміливо вказати залежність Ladder, як більше або дорівнює 3.1.0, але менше 4.0.0 (3.1.0 <= version < 4.0.0). Тепер, коли Ladder версії 3.1.1 і 3.2.0 стають доступними, можна буде додати за допомогою системи управління пакунками і знати, що вони будуть сумісні з існуючим програмним забезпеченням.

Відповідальний розробник, звичайно, бажає переконатися, що будь-які оновлення пакета функціонують згідно з документацією. Реальний світ це хаотичне місце і ми нічого не можемо зробити, окрім, як бути пильними. Що можна зробити, це використовувати Семантичне Версіонування для випуску та оновлення пакетів без необхідності оновлення залежностей, заощаджуючи час і нерви.

Якщо це звучить цікаво, то все що потрібно зробити ― це почати користуватися Семантичним Версіонуванням, заявити про це, і дотримуватись правил. Додавши посилання на цей веб-сайт у README до проекту, інші матимуть змогу дізнатись правила та скористатися ними.


FAQ
---

### How should I deal with revisions in the 0.y.z initial development phase?

The simplest thing to do is start your initial development release at 0.1.0 and then increment the minor version for each subsequent release.

### How do I know when to release 1.0.0?

If your software is being used in production, it should probably already be 1.0.0. If you have a stable API on which users have come to depend, you should be 1.0.0. If you're worrying a lot about backwards compatibility, you should probably already be 1.0.0.

### Doesn't this discourage rapid development and fast iteration?

Major version zero is all about rapid development. If you're changing the API every day you should either still be in version 0.y.z or on a separate development branch working on the next major version.

### If even the tiniest backwards incompatible changes to the public API require a major version bump, won't I end up at version 42.0.0 very rapidly?

This is a question of responsible development and foresight. Incompatible changes should not be introduced lightly to software that has a lot of dependent code. The cost that must be incurred to upgrade can be significant. Having to bump major versions to release incompatible changes means you'll think through the impact of your changes, and evaluate the cost/benefit ratio involved.

### Documenting the entire public API is too much work!

It is your responsibility as a professional developer to properly document software that is intended for use by others. Managing software complexity is a hugely important part of keeping a project efficient, and that's hard to do if nobody knows how to use your software, or what methods are safe to call. In the long run, Semantic Versioning, and the insistence on a well defined public API can keep everyone and everything running smoothly.

### What do I do if I accidentally release a backwards incompatible change as a minor version?

As soon as you realize that you've broken the Semantic Versioning spec, fix the problem and release a new minor version that corrects the problem and restores backwards compatibility. Even under this circumstance, it is unacceptable to modify versioned releases. If it's appropriate, document the offending version and inform your users of the problem so that they are aware of the offending version.

### What should I do if I update my own dependencies without changing the public API?

That would be considered compatible since it does not affect the public API. Software that explicitly depends on the same dependencies as your package should have their own dependency specifications and the author will notice any conflicts. Determining whether the change is a patch level or minor level modification depends on whether you updated your dependencies in order to fix a bug or introduce new functionality. I would usually expect additional code for the latter instance, in which case it's obviously a minor level increment.

### What if I inadvertently alter the public API in a way that is not compliant with the version number change (i.e. the code incorrectly introduces a major breaking change in a patch release)?

Use your best judgment. If you have a huge audience that will be drastically impacted by changing the behavior back to what the public API intended, then it may be best to perform a major version release, even though the fix could strictly be considered a patch release. Remember, Semantic Versioning is all about conveying meaning by how the version number changes. If these changes are important to your users, use the version number to inform them.

### How should I handle deprecating functionality?

Deprecating existing functionality is a normal part of software development and is often required to make forward progress. When you deprecate part of your public API, you should do two things: (1) update your documentation to let users know about the change, (2) issue a new minor release with the deprecation in place. Before you completely remove the functionality in a new major release there should be at least one minor release that contains the deprecation so that users can smoothly transition to the new API.

### Does semver have a size limit on the version string?

No, but use good judgment. A 255 character version string is probably overkill, for example. Also, specific systems may impose their own limits on the size of the string.

Про проект
-----

The Semantic Versioning specification is authored by [Tom Preston-Werner](http://tom.preston-werner.com), inventor of Gravatars and cofounder of GitHub.

If you'd like to leave feedback, please [open an issue on GitHub](https://github.com/mojombo/semver/issues).


Ліцензія
-------

[Creative Commons - CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)
