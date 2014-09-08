---
layout: default
title: Semantische Versionierung 2.0.0
---

Semantische Versionierung 2.0.0
===============================

Zusammenfassung
---------------

Mit einer Versionsnummer MAJOR.MINOR.PATCH, erhöhen Sie:

1. die MAJOR (Haupt-) Versionsnummer, wenn nicht-kompatible API-Veränderungen
   gemacht werden,
1. die MINOR (Neben-) Versionsnummer, wenn neue rückwärtskompatible
   Funktionalität hinzugefügt wird und
1. die PATCH Revisionsnummer, wenn rückwärtskompatible Programmfehler behoben
   werden.

Zusätzliche Kennungen für Vorveröffentlichungen und Build-Metadaten sind als
Erweiterungen zu dem MAJOR.MINOR.PATCH-Format verfügbar.

Einleitung
----------

In der Welt des Software-Managements, existiert ein gefürchteter Ort namens
"die Abhängigkeitshölle". Je größer ein System wird und je mehr Pakete man in
das System integriert, desto wahrscheinlicher wird es, dass man sich irgendwann
in diesem Abgrund der Verzweiflung findet.

In Systemen mit vielen Abhängigkeiten, neue Paketversionen zu veröffentlichen
kann schnell zu einem Albtraum werden. Wenn die Abhängigkeitsangabe zu streng
ist, droht die Gefahr der Versionsblockierung (die Unfähigkeit ein Paket zu
aktualisieren, ohne neue Versionen für jedes abhängiges Paket zu
veröffentlichen). Wenn Abhängigkeiten dagegen zu locker angegeben werden, wird
man unvermeidlich von dem Problem der Versionspromiskuität (Kompatibilität mit
mehr künftige Versionen als vernünftig vermuten) gebissen werden. Die
Abhängigkeitshölle ist das, wenn Versionsblockierung oder -Promiskuität ein
einfaches und sauberes Weiterarbeiten verhindert.

Als Lösung für dieses Problem, schlag ich eine einfache Reihe von Regeln und
Voraussetzungen vor, die es vorschreiben, wie Versionsnummer zu vergeben und
hochzuzählen sind. Diese Regeln bauen auf bestehenden Methoden auf, die bereits
in Open- und Closed-Source-Software in Gebrauch sind, werden jedoch nicht
zwangsläufig von diesen eingeschränkt. Um Erfolg mit diesem System zu haben,
muss zuerst eine öffentliche API definiert werden. Diese könnte Dokumentation
sein, oder von dem Code selber kontrolliert werden. So oder so ist es wichtig,
dass diese API eindeutig und präzise ist. Nachdem die öffentliche API definiert
ist, sollen Änderungen dazu mit spezifischen Erhöhungen der Versionsnummer
kommuniziert werden. Bedenken Sie das Versionsformat X.Y.Z, wo X die
Hauptversionsnummer ist, Y die Nebenversionsnummer und Z die Revisionsnummer.
Bug-Fixes, die die API nicht ändern, erhöhen die Revisionsnummer,
rückwärtskompatible API-Ergänzungen oder -Änderungen erhöhen die
Nebenversionsnummer und nicht-rückwärtskompatible API-Änderungen erhöhen die
Hauptversionsnummer.

Ich nenne dieses System "Semantische Versionierung". Unter dieser Anordnung,
kommunizieren Versionsnummern und wie sie sich ändern eine Bedeutung des
unterliegenden Codes und was sich seit der letzten Version sich geändert hat.


Spezification der Semantische Versionierung (SemVer)
----------------------------------------------------

Die Schlüsselwörter "MUSS"/"MÜSSEN" ("MUST"), "DARF NICHT" ("MUST NOT"),
"ERFORDERLICH" ("REQUIRED"), "SOLL" ("SHALL"), "SOLL NICHT" ("SHALL NOT"),
"SOLLTE" ("SHOULD"), "SOLLTE NICHT" ("SHOULD NOT"), "EMPFOHLEN"
("RECOMMENDED"), "KANN"/"KÖNNEN" ("MAY") und "OPTIONAL" in diesem Dokument
sind wie in
[RFC2119](http://tools.ietf.org/html/rfc2119) beschrieben zu verstehen.

1. Software, die die Semantische Versionierung einsetzt, MUSS eine öffentliche
API definieren. Diese API könnte in dem Code selber definiert sein, oder könnte
ausschließlich aus Dokumentation bestehen. Wie auch immer sie gemacht wird,
soll sie präsize und umfangreich sein.

1. Eine normale Versionsnummer MUSS die Form X.Y.Z annehmen, wo X, Y, Z
nicht-negative Ganzzahlen sind und DARF NICHT führende Nullen enthalten. X ist
die Hauptversionsnummer, Y ist die Nebenversionsnummer und Z ist die
Revisionsnummer. Jedes Element MUSS numerisch hochgezählt werden. Zum Beispiel:
1.9.0 -> 1.10.0 -> 1.11.0.

1. Der Inhalt eines versionierten Pakets DARF NICHT geändert werden, nachdem es
veröffentlicht wurde. Alle Änderungen MÜSSEN als eine neue Version
veröffentlicht werden.

1. Hauptversionsnummer 0 (0.x.y) ist für initiale Entwicklung vorgesehen. Alles
darf sich in dieser Phase jederzeit verändern. Die öffentliche API soll nicht
als stabil betrachtet werden.

1. Version 1.0.0 definiert die öffentliche API. Wie die Versionsnummer nach
dieser Veröffentlichung erhöht wird, ist auf dieser API und wie sie sich
ändert abhängig.

1. Die Revisionsnummer Z (x.y.Z | x > 0) MUSS inkrementiert werden, wenn nur
rückwärtskompatible Bufixes eingeführt werden. Unter Bugfix versteht man eine
interne Änderung, die fehlerhaftes Verhalten korrigiert.

1. Die Nebenversionsnummer Y (x.Y.z | x > 0) MUSS inkrementiert werden, wenn neue
rückwärtskompatible Funktionalität in die öffentliche API eingeführt wird. Sie
MUSS erhöht werden, wenn API-Funktionalität als deprecated markiert wird. Sie
DARF erhöht werden, wenn erhebliche neue Funktionalität oder Verbesserungen in
privatem Code eingeführt wird. Es DARF auch Änderungen der Revisionsstufe
enthalten sein. Die Revisionsnummer muss auf 0 zurückgesetzt werden, wenn die
Nebenversionsnummer erhöht wird.

1. Die Hauptversionsnummer X (X.y.z | X > 0) MUSS erhöht werden, wenn
nicht-rückwärtskompatible Änderungen in die öffentliche API eingeführt werden.
Es DARF auch Änderungen der Nebenversions- und Revisionsstufen enthalten sein.
Die Revisionsnummer und Nebenversionsnummer MÜSSEN auf 0 zurückgesetzt werden,
wenn die Hauptversionsnummer erhöht wird.

1. Eine Vorveröffentlichungsversion KANN, mit einem Bindestrich und eine Reihe
von Punkt-getrennte Kennungen, die die Revisionsnummer direkt folgen,
bezeichnet werden. Eine Kennung MUSS ausschließlich aus ASCII-Alphanumeriken und
Bindestrichen [0-9A-Za-z-] bestehen. Eine Kennung DARF NICHT leer sein. Eine
numerische Kennung DARF NICHT führende Nullen enthalten.
Vorveröffentlichungsversionen haben einen niedrigeren Vorrang als die damit
verbundene Normalversion. Eine Vorveröffentlichungsversion zeigt an, dass die
Version instabil ist und die beabsichtigte Kompatibilitätsanforderungen der
damit verbundenen Normalversion möglicherweise nicht entspricht. Zum Beispiel:
1.0.0-alpha, 1.0.0-alpha.1, 1.0.0-0.3.7, 1.0.0-x.7.z.92.

1. Build-Metadaten KÖNNEN mit einem Pluszeichen und einer Reihe von
Punkt-getrennte Kennungen, die die Revisionsnummer direkt folgen, bezeichnet
werden. Eine Kennung MUSS ausschließlich aus ASCII-Alphanumeriken und
Bindestrichen [0-9A-Za-z-] bestehen. Eine Kennung DARF NICHT leer sein.
Build-Metadaten SOLLTEN in der Ermittlung von Versionenvorrang ignoriert werden.
So werden zwei Versionen, die sich nur in ihren Build-Metadaten unterscheiden,
den gleichen Vorrang haben. Zum Beispiel: 1.0.0-alpha+001, 1.0.0+20130313144700,
1.0.0-beta+exp.sha.5114f85.

1. Vorrang bezieht sich darauf, wie Versionen miteinander verglichen werden,
wenn sie sortiert werden. Vorrang MUSS berechnet werden, indem die
Hauptversions-, Nebenversions-, Patchversions und
Vorveröffentlichungsversions-Kennungen (Build-Metadaten werden nicht im Vorrang
berücksichtigt) in dieser Reihenfolge getrennt werden. Vorrang wird von
dem ersten Unterschied bestimmt, wenn diese Kennungen von links nach rechts wie
gefolgt verglichen werden: Haupt-, Neben- und Revisionsnummern werden immer
numerisch verglichen. Zum Beispiel: 1.0.0 < 2.0.0 < 2.1.0 < 2.1.1. Wenn Haupt-,
Neben- und Revisionsnummern gleich sind, eine Vorveröffentlichungsversion hat
niedrigeren Vorrang als eine Normalversion. Zum Beispiel: 1.0.0-alpha < 1.0.0.
Vorrang für zwei Vorveröffentlichungsversionen mit den gleichen Haupt-, Neben-,
und Revisionsnummern MUSS bestimmt werden, indem jede Punkt-getrennte Kennung von
links nach rechts bis einen Unterschied gefunden wird wie gefolgt verglichen
werden: Kennungen, die ausschließlich aus Ziffern bestehen, werden numerisch
verglichen und Kennungen, die Buchstaben oder Bindestriche enthalten, werden
lexikalisch in ASCII Sortierungsreihenfolge. Numerische Kennungen haben immer
einen niedrigeren Vorrang als nicht-numerische Kennungen. Eine größere Menge an
Vorveröffentlichungsfelder haben einen höheren Vorrang als eine kleinere Menge,
wenn alle vorangegangene Kennungen gleich sind. Zum Beispiel: 1.0.0-alpha <
1.0.0-alpha.1 < 1.0.0-alpha.beta < 1.0.0-beta < 1.0.0-beta.2 < 1.0.0-beta.11 <
1.0.0-rc.1 < 1.0.0.


Warum semantische Versionierung?
--------------------------------

Das ist keine neue oder revolutionäre Idee. Tatsächlich, Sie machen
wahrscheinlich schon etwas Ähnliches. Das Problem besteht darin, dass "ähnlich"
nicht gut genug ist. Ohne Konformität irgendeiner Spezifikation, sind
Versionsnummern für Abhangigkeitsverwaltung im Grunde unbrauchbar. Die Benennung
und klare Definition der obigen Ideen vereinfachen die Kommunikation von
Absichten mit Benutzern der Software. Erst wenn diese Absichten klar und
flexibel (aber nicht zu flexibel) sind, kann Abhängigkeitsvorgaben endlich
gemacht werden.

Ein einfaches Beispiel wird vorzeigen, wie semantische Versionierung die
Abhängigkeitshölle zu einer angetanen Sache macht. Betrachten Sie eine
Bibliothek namens "Feuerwehrfahrzeug". Sie erfordert die
semantisch-versioniertes Paket "Leiter". Zu der Zeit, wo Feuerwehrfahrzeug
geschaffen wird, ist Leiter bei der Version 3.1.0. Da Feuerwehrfahrzeug einige
Funktionalitäten verwendet, die erst in 3.1.0 eingeführt wurden, kann man mit
Sicherheit die Leiter-Abhängigkeit als größer oder gleich 3.1.0 aber kleiner als
4.0.0 definiert werden. Nun, wenn Leiter-Versionen 3.1.1. und 3.2.0 verfügbar
werden, kann man sie der Paketverwaltung freigeben und wissen, dass sie mit der
bestehenden abhängigen Software kompatibel sind.

Als verantwortungsbewusste/r Entwickler/in werden Sie natürlich nachprüfen
wollen, dass alle Paket-Aktualisierungen wie angekündigt funktionieren. Die
reale Welt ist ein dreckiger Ort; wir können nichts dagegen tun außer aufmerksam
sein. Was man machen kann, ist es semantischer Versionierung erlauben, Ihnen
eine vernünftige Weise anzubieten,  Pakete zu veröffentlichen und zu
aktualisieren, ohne neue Versionen abhängiger Paketen selber bauen zu müssen.
Das spart Zeit und Ärger.

Wenn das sich alles wünschenswert anhört und Sie die semantische Versionierung
benutzen wollen, müssen Sie nur verkünden, dass Sie es machen und die Regeln
dann befolgen. Verlinken Sie diese Seite von Ihrem README, damit andere die
Regeln kennen und davon profitieren können.

FAQ
---

### Wie soll ich mit Revisionen in der initialen 0.x.y Entwicklungsphase umgehen?

Das Einfachste ist, die erste Entwicklingsveröffentlichung als 0.1.0 anzufangen
und die Nebenversion mit jeder folgenden Veröffentlichung hochzuzählen.

### Wie soll ich wissen, wann ich 1.0.0 veröffentlichen soll?

Wenn die Software schon produktiv eingesetzt wird, soll es wahrscheinlich schon
1.0.0 sein. Wenn es eine stabile API hat, auf die Benutzer sich verlassen, soll
es 1.0.0 sein. Wenn Sie sich viele Gedanken über Rückwärtskompatibilität machen
müssen, soll es wahrscheinlich schon 1.0.0 sein.

### Verhindert das nicht die schnelle Entwicklung und Iteration?

Hauptversion 0 ist für schnelle Entwicklung. Wenn die API sich tagtäglich
verändert sollte das Projekt entweder noch in der Version 0.x.y sein oder es
soll in einem separaten Entwicklungszweig für die nächste Hauptversion
entwickelt werden.

### Wenn auch die kleinste Änderungen der öffentlichen API eine neue Hauptversion benötigen, werde ich nicht sehr schnell bei Version 42.0.0 sein?

Dies ist eine Frage der verantwortungsbewussten Entwicklung und Voraussicht.
Inkompatible Änderungen sollen nicht unüberlegt an Software vorgenommen werden,
die viel abhängigen Code hat. Die Kosten, die für den Upgrade nötig sind, können
erheblich sein. Dass man die Hauptversion hochzählen muss, um inkompatible
Änderungen zu veröffentlichen, heißt, dass man sich die Folgen von den
Änderungen überlegen und die verbundene Vor- und Nachteile auswerten muss.

### Die ganze öffentliche API zu dokumentieren ist zu viel Arbeit!

Es ist die Verantwortung von einem/r professionellen Entwickler/in, für andere
beabsichtigte Software richtig zu dokumentieren. Komplexität Verwalten ist ein
sehr wichtiges Teil davon, ein Projekt effizient zu halten und das wird
schwierig, wenn niemand weiß, wie die Software funktioniert oder welche Methoden
sicher aufgerufen werden können. Auf Dauer können semantische Versionierung und
das Bestehen auf eine klar-definierte öffentliche API kann alles reibungslos
halten.

### Was mache ich, wenn ich versehentlich eine rückwärtsinkompatible Änderung als Nebenversion veröffentlicht habe?

Sobald Sie erkennen, dass Sie gegen die Spezifikation der semantischen
Versionierung verstoßen haben, sollen Sie das Problem korrigieren und eine neue
Nebenversion veröffentlichen, die die Rückwärtskompatibilität wiederherstellt.
Auch unter diesen Umständen, ist es unakzeptabel versionierte Veröffentlichungen
zu verändern. Wo angemessen, soll die fehlerhafte Version dokumentiert werden
und die Benutzer von dem Problem informiert werden, damit sie von der
fehlerhaften Version wissen.

### Was mache ich, wenn ich die eigene Abhängigkeiten ändere, ohne die öffentliche API zu verändern?

Das wäre als kompatibel angesehen, da es die öffentliche API nicht beeinflusst.
Software, die explizit von den gleichen Paketen abhängig ist wie Ihr Paket,
sollte eigene Abhängigkeitsvogaben haben und etwaige Konflikte werden dem Autor
auffallen. Ob die Änderung eine Patch- oder Nebenversionsänderung entspricht,
kommt darauf an, ob die Abhängigkeiten geändert wurden, um einen Bug zu
korrigieren oder um neue Funktionalitäten einzuführen. Ich würde normalerweise
zusätzliches Code für das Zweite erwarten, in welchem Fall es selbstverständlich
eine Nebenversionsänderung wäre.

### Was ist, wenn ich versehentlich die öffentliche API verändere auf einer Weise, die nicht mit der Versionsnummeränderung übereinstimmt (i.e. das Code führt fälschlicherweise in einer Patch-Veröffentlichung eine Änderung ein, die nicht rückwärtskompatibel ist)

Hier sollte man mit Menschenverstand urteilen. Wenn Sie eine große Zielgruppe
haben, die drastisch davon beeinträchtigt wird, wenn das Verhalten geändert
wird, damit es wieder die API entspricht, könnte es besser sein, eine neue
Hauptversion zu veröffentlichen, obwohl der Fix, streng gesehen, auch nur eine
Patch-Veröffentlichung benötigt. Vergessen Sie nicht, dass es bei semantischen
Versionierung darum geht, Bedeutung mit Versionsnummeränderungen zu vermitteln.
Wenn diese Änderungen für die Benutzer wichtig sind, verwenden Sie eine
Versionsnummer um sie zu informieren.

### Wie soll ich mit Deprecation umgehen?

Bestehende Funktionalität als deprecated zu markieren ist ein normales Teil der
Softwareentwicklung und ist oft nötig um Fortschritt zu machen. Wenn ein Teil
der API als deprecated markiert wird, sollte man zwei Sachen machen: (1) die
Dokumentation aktualisieren, um die Benutzer von der Veränderung zu informieren
und (2) eine neue Nebenversion veröffentlichen, wo die Deprecation enthalten
ist. Bevor die Funktionalität in einer neuen Hauptversion vollständig entfernt
wird, sollte es zumindest eine Nebenversion geben, wo die Deprecation enthalten
ist, um Benutzer einen reibungslosen Übergang zu der neuen API zu ermöglichen.

### Begrenzt SemVer die Länge des Versions-Strings?

Nein, aber hier wird Vernunft empfohlen. Eine 255-Zeichen-lange Versionsnummer
ist zum Beispiel wohl übertrieben. Spezifische Systeme können auch eigene
Längenbegrenzungen setzen.

Über
-----

Die Spezifikation der semantische Versionierung wurde von
[Tom Preston-Werner](http://tom.preston-werner.com) geschrieben, Erfinder von
Gravatars und Mitbegründer von GitHub.

Wenn Sie Feedback geben wollen, bitte
[öffnen Sie einen Issue auf Github](https://github.com/mojombo/semver/issues).


Lizenz
-------

[Creative Commons - CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)
