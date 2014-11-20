---
layout: default
title: Semantische Versionierung 2.0.0
---

Semantische Versionierung 2.0.0
===============================

Zusammenfassung
---------------

Bei einer Versionsnummer MAJOR.MINOR.PATCH, erhöhen Sie:

1. die MAJOR (Haupt-) Versionsnummer, wenn nicht-kompatible API-Veränderungen
   gemacht werden,
1. die MINOR (Neben-) Versionsnummer, wenn neue abwärtskompatible
   Funktionalität hinzugefügt wird und
1. die PATCH Revisionsnummer, wenn abwärtskompatible Programmfehler behoben
   werden.

Zusätzliche Kennungen für Vorveröffentlichungen und Build-Metadaten sind als
Erweiterungen zu dem MAJOR.MINOR.PATCH-Format verfügbar.

Einleitung
----------

In der Welt des Software-Managements existiert ein gefürchteter Ort namens
"die Abhängigkeitshölle". Je größer ein System wird und je mehr Pakete man in
das System integriert, desto wahrscheinlicher wird es, dass man sich irgendwann
in diesem Abgrund der Verzweiflung wiederfindet.

In Systemen mit vielen Abhängigkeiten kann die Veröffentlichung von neuen Paketversionen
schnell zu einem Albtraum werden. Wenn die Abhängigkeitsangabe zu streng
ist, droht die Gefahr der Versionsblockierung (die Unfähigkeit, ein Paket zu
aktualisieren, ohne neue Versionen für jedes abhängiges Paket zu
veröffentlichen). Wenn Abhängigkeiten dagegen zu locker angegeben werden, wird
man unvermeidlich von dem Problem der Versionspromiskuität (Annahme der Kompatibilität mit
mehr zukünftigen Versionen als vernünftig) eingeholt werden.
Die Abhängigkeitshölle ist der Ort wo Sie sich befinden, wenn Versionsblockierung oder
-promiskuität ein einfaches und sauberes Weiterarbeiten verhindert.

Als Lösung für dieses Problem schlage ich eine einfache Reihe von Regeln und
Voraussetzungen vor, die vorschreiben, wie Versionsnummer zu vergeben und
hochzuzählen sind. Diese Regeln bauen auf bestehenden Methoden auf, die bereits
in Open- und Closed-Source-Software in Gebrauch sind, werden jedoch nicht
zwangsläufig von diesen eingeschränkt. Um erfolgreich mit diesem System zu arbeiten,
muss zuerst eine öffentliche API definiert werden. Diese kann eine Dokumentation
sein oder von dem Code selber festgelegt werden. In jedem Falle ist es wichtig,
dass diese API eindeutig und präzise ist. Nachdem die öffentliche API definiert
ist, werden ihre Änderungen mit spezifischen Erhöhungen der Versionsnummer
kommuniziert. Betrachten wir das Versionsformat X.Y.Z, wobei X die
Hauptversionsnummer ist, Y die Nebenversionsnummer und Z die Revisionsnummer.
Bug-Fixes, die die API nicht ändern, erhöhen die Revisionsnummer,
abwärtskompatible API-Ergänzungen oder -Änderungen erhöhen die
Nebenversionsnummer und nicht-abwärtskompatible API-Änderungen erhöhen die
Hauptversionsnummer.

Ich nenne dieses System "Semantische Versionierung". Mit Hilfe dieses Schemas
enthalten Versionsnummern und die Art ihrer Änderung Information über den zugrunde liegenden
Code und die Änderungen die von einer Version zu einer anderen vorgenommen wurden.


Spezifikation der Semantische Versionierung (SemVer)
----------------------------------------------------

Die Schlüsselwörter "MUSS"/"MÜSSEN" ("MUST"), "DARF NICHT" ("MUST NOT"),
"ERFORDERLICH" ("REQUIRED"), "SOLL" ("SHALL"), "SOLL NICHT" ("SHALL NOT"),
"SOLLTE" ("SHOULD"), "SOLLTE NICHT" ("SHOULD NOT"), "EMPFOHLEN"
("RECOMMENDED"), "KANN"/"KÖNNEN" ("MAY") und "OPTIONAL" in diesem Dokument
sind wie in
[RFC2119](http://tools.ietf.org/html/rfc2119) beschrieben zu verstehen.

1. Software, die die Semantische Versionierung einsetzt, MUSS eine öffentliche
API definieren. Diese API könnte in dem Code selber definiert sein, oder könnte
ausschließlich aus einer Dokumentation bestehen. Wie auch immer sie definiert wird,
sollte sie präsize und umfangreich sein.

1. Eine normale Versionsnummer MUSS die Form X.Y.Z annehmen, wo X, Y, und Z
nicht-negative Ganzzahlen sind und KEINE führende Nullen enthalten DÜRFEN. X ist
die Hauptversionsnummer, Y ist die Nebenversionsnummer und Z ist die
Revisionsnummer. Jedes Element MUSS numerisch hochgezählt werden. Zum Beispiel:
1.9.0 -> 1.10.0 -> 1.11.0.

1. Der Inhalt eines versionierten Pakets DARF NICHT geändert werden nachdem es
veröffentlicht wurde. Alle Änderungen MÜSSEN als eine neue Version
veröffentlicht werden.

1. Die Hauptversionsnummer 0 (0.x.y) ist für initiale Entwicklung vorgesehen. Alles
darf sich in dieser Phase jederzeit verändern. Die öffentliche API kann nicht
als stabil betrachtet werden.

1. Die Version 1.0.0 definiert die öffentliche API. Wie die Versionsnummer nach
dieser Veröffentlichung erhöht wird, ist von dieser öffentlichen API und wie sie sich
ändert abhängig.

1. Die Revisionsnummer Z (x.y.Z | x > 0) MUSS inkrementiert werden, wenn nur
abwärtskompatible Bufixes eingeführt werden. Unter Bugfix versteht man eine
interne Änderung, die fehlerhaftes Verhalten korrigiert.

1. Die Nebenversionsnummer Y (x.Y.z | x > 0) MUSS inkrementiert werden, wenn neue
abwärtskompatible Funktionalität in die öffentliche API eingeführt wird. Sie
MUSS erhöht werden, wenn API-Funktionalität als 'deprecated' (veraltet) markiert wird. Sie
DARF erhöht werden, wenn erhebliche neue Funktionalität oder Verbesserungen in
privatem Code eingeführt wird. Es KÖNNEN auch Änderungen der Revisionsstufe
enthalten sein. Die Revisionsnummer muss auf 0 zurückgesetzt werden, wenn die
Nebenversionsnummer erhöht wird.

1. Die Hauptversionsnummer X (X.y.z | X > 0) MUSS erhöht werden, wenn
nicht-abwärtskompatible Änderungen in die öffentliche API eingeführt werden.
Es KÖNNEN auch Änderungen der Nebenversions- und Revisionsstufen enthalten sein.
Die Revisionsnummer und Nebenversionsnummer MÜSSEN auf 0 zurückgesetzt werden,
wenn die Hauptversionsnummer erhöht wird.

1. Eine Vorveröffentlichungsversion KANN mit einem Bindestrich und einer Reihe
von Punkt-getrennten Kennungen, die der Revisionsnummer direkt folgen,
bezeichnet werden. Eine Kennung MUSS ausschließlich aus ASCII-Alphanumeriken und
Bindestrichen [0-9A-Za-z-] bestehen. Eine Kennung DARF NICHT leer sein. Eine
numerische Kennung DARF KEINE führende Nullen enthalten.
Vorveröffentlichungsversionen haben einen niedrigeren Vorrang als die damit
verbundene Normalversion. Eine Vorveröffentlichungsversion zeigt an, dass die
Version instabil ist und den beabsichtigten Kompatibilitätsanforderungen der
damit verbundenen Normalversion möglicherweise nicht entspricht. Zum Beispiel:
1.0.0-alpha, 1.0.0-alpha.1, 1.0.0-0.3.7, 1.0.0-x.7.z.92.

1. Build-Metadaten KÖNNEN mit einem Pluszeichen und einer Reihe von
Punkt-getrennten Kennungen, die der Revisionsnummer direkt folgen, bezeichnet
werden. Eine Kennung MUSS ausschließlich aus ASCII-Alphanumeriken und
Bindestrichen [0-9A-Za-z-] bestehen. Eine Kennung DARF NICHT leer sein.
Build-Metadaten SOLLTEN bei der Ermittlung des Versionenvorrangs ignoriert werden.
Somit haben zwei Versionen, die sich nur in ihren Build-Metadaten unterscheiden,
den gleichen Vorrang. Zum Beispiel: 1.0.0-alpha+001, 1.0.0+20130313144700,
1.0.0-beta+exp.sha.5114f85.

1. Der Begriff Vorrang bezieht sich darauf, wie Versionen miteinander verglichen werden,
wenn sie sortiert werden. Der Vorrang MUSS berechnet werden, indem die
Hauptversions-, Nebenversions-, Patchversions und
Vorveröffentlichungsversions-Kennungen (Build-Metadaten werden nicht im Vorrang
berücksichtigt) in dieser Reihenfolge getrennt werden. Der Vorrang wird vom
ersten Unterschied bestimmt, wenn diese Kennungen von links nach rechts wie
folgt verglichen werden: Haupt-, Neben- und Revisionsnummern werden immer
numerisch verglichen. Zum Beispiel: 1.0.0 < 2.0.0 < 2.1.0 < 2.1.1. Wenn Haupt-,
Neben- und Revisionsnummern gleich sind, hat eine Vorveröffentlichungsversion
niedrigeren Vorrang als eine Normalversion. Zum Beispiel: 1.0.0-alpha < 1.0.0.
Der Vorrang von zwei Vorveröffentlichungsversionen mit den gleichen Haupt-, Neben-,
und Revisionsnummern MUSS bestimmt werden, indem die Punkt-getrennte Kennungen von
links nach rechts bis zum Finden eines Unterschieds wie folgt verglichen
werden: Kennungen, die ausschließlich aus Ziffern bestehen, werden numerisch
verglichen; Kennungen, die Buchstaben oder Bindestriche enthalten, werden
lexikalisch in ASCII Sortierungsreihenfolge verglichen. Numerische Kennungen haben immer
einen niedrigeren Vorrang als nicht-numerische Kennungen. Eine größere Menge an
Vorveröffentlichungskennzeichnern hat einen höheren Vorrang als eine kleinere Menge,
wenn alle vorangegangene Kennungen gleich sind. Zum Beispiel: 1.0.0-alpha <
1.0.0-alpha.1 < 1.0.0-alpha.beta < 1.0.0-beta < 1.0.0-beta.2 < 1.0.0-beta.11 <
1.0.0-rc.1 < 1.0.0.


Warum semantische Versionierung?
--------------------------------

Das ist keine neue oder revolutionäre Idee. Tatsächlich machen Sie
wahrscheinlich schon etwas Ähnliches. Das Problem besteht darin, dass "ähnlich"
nicht gut genug ist. Ohne Konformität irgendeiner Spezifikation sind
Versionsnummern für Abhangigkeitsverwaltung im Grunde unbrauchbar. Durch die Benennung
und die klare Definition der obigen Ideen wird es einfach den Nutzern der Software Ihre
Absichten zu kommunizieren. Erst wenn diese Absichten klar sind, können
flexible (aber nicht zu flexible) Abhängigkeitsvorgaben gemacht werden.

Ein einfaches Beispiel zeigt auf, wie semantische Versionierung die
Abhängigkeitshölle zur Vergangenheit macht. Betrachten wir eine
Bibliothek namens "Firetruck". Sie erfordert das
semantisch versionierte Paket "Ladder". Zu der Zeit, zu der Firetruck
erstellt wird, ist Ladder bei der Version 3.1.0. Da Firetruck einige
Funktionalitäten verwendet, die erst in 3.1.0 eingeführt wurden, kann
die Ladder-Abhängigkeit mit Sicherheit als größer oder gleich 3.1.0 aber kleiner als
4.0.0 definiert werden. Wenn nun die Ladder-Versionen 3.1.1. und 3.2.0 verfügbar
werden, kann man sie in der Paketverwaltung veröffentlichen und weiß, dass sie mit der
bestehenden abhängigen Software kompatibel sind.

Als verantwortungsbewusste/r Entwickler/in werden Sie natürlich nachprüfen
wollen, dass alle Paket-Aktualisierungen wie angekündigt funktionieren. Die
reale Welt ist ein chaotischer Ort; wir können nichts dagegen tun außer aufmerksam
sein. Was Sie tun können, ist, sich durch semantischer Versionierung
eine vernünftige Arbeitsweise anzubieten zu lassen, um Pakete zu veröffentlichen und zu
aktualisieren, ohne neue Versionen abhängiger Paketen selber erstellen zu müssen.
Das spart Zeit und Aufwand.

Wenn sich dies alles wünschenswert anhört und Sie die semantische Versionierung
benutzen wollen, müssen Sie nur kundtun, dass Sie es machen und die Regeln
dann befolgen. Verlinken Sie diese Seite von Ihrem README, damit andere die
Regeln kennen und davon profitieren können.

FAQ
---

### Wie soll ich mit Revisionen in der initialen 0.x.y Entwicklungsphase umgehen?

Das Einfachste ist, die erste Entwicklingsveröffentlichung mit 0.1.0 zu beginnen
und die Nebenversion mit jeder folgenden Veröffentlichung hochzuzählen.

### Woher weiß ich, wann ich 1.0.0 veröffentlichen soll?

Wenn die Software schon produktiv eingesetzt wird, sollte es wahrscheinlich schon
1.0.0 sein. Wenn sie eine stabile API hat, auf die Benutzer sich verlassen, sollte
es 1.0.0 sein. Wenn Sie sich viele Gedanken über Rückwärtskompatibilität machen
müssen, sollte es wahrscheinlich schon 1.0.0 sein.

### Verhindert das nicht die schnelle Entwicklung und kurze Iteration?

Die Hauptversion 0 ist für schnelle Entwicklung. Wenn die API sich tagtäglich
verändert, sollte das Projekt entweder noch in der Version 0.x.y sein oder es
sollte in einem separaten development branch für die nächste Hauptversion
entwickelt werden.

### Wenn schon kleinste Änderungen der öffentlichen API eine neue Hauptversion benötigen, werde ich dann nicht sehr schnell bei Version 42.0.0 sein?

Das ist eine Frage der verantwortungsbewussten Entwicklung und Voraussicht.
Inkompatible Änderungen von Software mit vielen Abhängigkeiten sollten nicht
unüberlegt vorgenommen werden. Die Kosten, die für den Upgrade nötig sind, können
erheblich sein. Dass man die Hauptversion hochzählen muss, um inkompatible
Änderungen zu veröffentlichen, heißt, dass man sich die Folgen der
Änderungen bewusst machen und die damit verbundenen Vor- und Nachteile einschätzen muss.

### Die gesamte öffentliche API zu dokumentieren ist zu viel Arbeit!

Es zählt zu Ihrer Verantwortung als professionelle/r Entwickler/in, Software, die
andere benutzen, sauber zu dokumentieren. Das Verwalten von Software-Komplexität ist ein
sehr wichtiger Teil bei der effizienten Gestaltung eines Projekts. Dies wird
schwierig, wenn niemand weiß, wie die Software zu benutzen ist oder welche Methoden
sicher aufgerufen werden können. Auf Dauer können eine semantische Versionierung und
das Bestehen auf eine klardefinierte öffentliche API alles reibungslos
halten.

### Was mache ich, wenn ich versehentlich eine rückwärtsinkompatible Änderung als Nebenversion veröffentlicht habe?

Sobald Sie erkennen, dass Sie gegen die Spezifikation der semantischen
Versionierung verstoßen haben, sollen Sie das Problem korrigieren und eine neue
Nebenversion veröffentlichen, die die Rückwärtskompatibilität wiederherstellt.
Auch unter diesen Umständen ist es unakzeptabel, versionierte Veröffentlichungen
zu verändern. Wenn nötig, dokumentieren Sie die fehlerhafte Version
und informieren Sie die Nutzer über das Problem, damit sie über die fehlerhaften
Version Bescheid wissen.

### Was mache ich, wenn ich die eigenen Abhängigkeiten ändere, ohne die öffentliche API zu verändern?

Diese Änderungen können als kompatibel angesehen werden, da sie die öffentliche API nicht beeinflusst.
Software, die explizit von den gleichen Paketen abhängig ist wie Ihr Paket,
sollte eigene Abhängigkeitsvorgaben haben und etwaige Konflikte werden dem Autor
auffallen. Ob die Änderung einer Patch- oder Nebenversionsänderung entspricht,
kommt darauf an, ob die Abhängigkeiten geändert wurden, um einen Bug zu
korrigieren oder um neue Funktionalitäten einzuführen. In letzerem Fall würde
ich normalerweise zusätzlichen Code erwarten, wodurch offenbar
eine Nebenversionsänderung nötig wäre.

### Was ist, wenn ich versehentlich die öffentliche API auf eine Weise verändere, die nicht mit der Versionsnummeränderung übereinstimmt (d.h. der Code führt fälschlicherweise in einer Patch-Veröffentlichung eine Änderung ein, die nicht abwärtskompatibel ist)?

Hier sollte man mit gesundem Menschenverstand urteilen. Wenn Sie eine große Zielgruppe
haben, die drastisch davon beeinträchtigt wird, wenn das Verhalten geändert
wird, um wieder der API zu entsprechen, könnte es besser sein, eine neue
Hauptversion zu veröffentlichen, obwohl der Fix, streng gesehen, auch nur eine
Patch-Veröffentlichung benötigt. Vergessen Sie nicht, dass es bei semantischer
Versionierung darum geht, Bedeutung mit Versionsnummeränderungen zu vermitteln.
Wenn diese Änderungen für die Benutzer wichtig sind, verwenden Sie eine
Versionsnummer um sie zu informieren.

### Wie soll ich mit Deprecation umgehen?

Bestehende Funktionalität als deprecated (veraltet) zu markieren ist ein normaler Teil der
Softwareentwicklung und ist oft nötig um Fortschritte zu machen. Wenn ein Teil
der API als deprecated markiert wird, sollten Sie zwei Dinge tun: (1) die
Dokumentation aktualisieren, um die Benutzer über die Veränderung zu informieren
und (2) eine neue Nebenversion veröffentlichen, in der die Deprecation enthalten
ist. Bevor die Funktionalität in einer neuen Hauptversion vollständig entfernt
wird, sollte es zumindest eine Nebenversion geben, in der die Deprecation enthalten
ist, um Benutzern einen reibungslosen Übergang zu der neuen API zu ermöglichen.

### Begrenzt SemVer die Länge des Versions-Strings?

Nein, aber hier wird gesunder Menschenverstand empfohlen. Eine 255-Zeichen lange Versionsnummer
ist z. B. wohl übertrieben. Spezifische Systeme können auch eigene
Längenbegrenzungen setzen.

Über
-----

Die Spezifikation der semantischen Versionierung wurde von
[Tom Preston-Werner](http://tom.preston-werner.com) geschrieben, Erfinder von
Gravatars und Mitbegründer von GitHub.

Wenn Sie Feedback geben wollen, bitte
[öffnen Sie einen Issue auf Github](https://github.com/mojombo/semver/issues).


Lizenz
-------

[Creative Commons - CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)
