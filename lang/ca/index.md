---
title: Gestió semàntica de versions 2.0.0
language: ca
---

Gestió semàntica de versions 2.0.0
==================================

Sumari
------

Donat un nombre de versió MAJOR.MINOR.PATCH, heu d'incrementar:

1. el nombre de versió MAJOR quan hi hagi canvis incompatibles a l'API,
1. el nombre de versió MINOR quan hi hagi canvis compatibles amb versions anteriors, i
1. el nombre de versió PATCH quan hi hagi correccions o pedaços compatibles amb versions anteriors.

Es poden afegir etiquetes addicionals per a versions preliminars i metadades de compilació com a extensió del format MAJOR.MINOR.PATCH.

Introducció
-----------

Al món de la gestió del programari hi ha un lloc temut anomenat "l'infern de
les dependències" (de l'anglès "dependency hell"). Com més gran creixi el vostre
sistema i més components hi integreu, més probable serà que us trobeu, algun
dia, en aquest abisme de desesperació.

En sistemes amb moltes dependències, publicar la versió d'un nou component pot
esdevenir ràpidament un malson. Si les regles de dependència són massa
estrictes, us podeu trobar en el perill de blocar les vostres versions, (la
incapacitat d'actualitzar un component sense haver de publicar una nova
versió de cada component que en depèn d'ell). En canvi, si les regles de
dependència són massa toves, inevitablement patireu la promiscuïtat de versions
(mantenir una compatibilitat amb més versions futures del que seria raonable).
L'infern de les dependències és quan el bloqueig o la promiscuïtat de versions
us impedeixen avançar el vostre projecte de manera fàcil i sense riscos.

Com a solució a aquest problema, proposo un conjunt de regles i requisits
senzills que dicten com s'assignen i incrementen els nombres de versions.
Aquestes regles es basen, però no es limiten necessàriament, en pràctiques
generalitzades en programari privat i lliure. Perquè aquest sistema funcioni,
primer heu de declarar una API pública. Pot consistir en un document o en les
normes imposades pel propi codi. Tanmateix, és important que aquesta API
sigui clara i precisa. Un cop l'hàgiu enllestida, comuniqueu els canvis que
hi feu amb increments específics en el nombre de versió. Considerant el format
de la versió X.Y.Z (Major.Minor.Patch): quan les correccions o pedaços no
afectin l'API s'ha d'incrementar la versió de correcció ('patch'), quan s'hi
afegeixin canvis i/o millores que tampoc afectin l'API s'ha d'incrementar la versió
menor ('minor'), i quan els canvis afectin la compatibilitat de l'API amb versions
anteriors s'ha d'incrementar la versió principal ('major').

Jo anomeno aquest sistema "gestió semàntica de versions". Amb aquest sistema,
els nombres de versió i la manera com canvien donen sentit al codi subjacent
i a tot allò que s'ha modificat d'una versió a una altra.

Especificació de la gestió semàntica de versions (SemVer)
---------------------------------------------------------

Les paraules clau "HA DE" ("MUST", "REQUIRED" i "SHALL"), "NO HA DE" ("MUST
NOT" i "SHALL NOT"), "HAURIA DE" ("SHOULD" i "RECOMMENDED") i "POT" ("MAY i
"OPTIONAL") d'aquest document han de ser interpretades tal i com es descriuen
en el document [RFC 2119](http://tools.ietf.org/html/rfc2119).

1. Tot programari que utilitzi la gestió semàntica de versions HA DE declarar
una API pública. Aquesta API es pot declarar en el mateix codi o en un document.
En qualsevol cas, ha de ser precisa i comprensible.

1. Un nombre de versió normal HA DE tenir la forma X.Y.Z on X, Y i Z representen
nombres enters no negatius, i NO HAN DE ser prefixats amb zeros. X representa
l'identificador de versió principal ('major'), Y representa l'identificador de
versió menor ('minor') i Z l'identificador de versió de correcció ('patch'). Cada
element HA DE ser augmentat numèricament. Per exemple: 1.9.0 -> 1.10.0 -> 1.11.0.

1. Un cop es publica una nova versió d'un component, el contingut d'aquesta versió
NO HA DE ser modificat. Qualsevol canvi HA DE ser publicat en una nova versió.

1. L'identificador de versió principal ('major') a zero (0.y.z) és per al
desenvolupament inicial. Vol dir que qualsevol cosa pot canviar en qualsevol
moment. En aquest punt, l'API pública no hauria de considerar-se estable.

1. La versió 1.0.0 defineix l'API pública. La forma en què el nombre de versió
s'incrementi després d'aquesta publicació dependrà d'aquesta API pública i
de les seves evolucions.

1. L'identificador de versió de correcció ('patch') Z (x.y.Z | x > 0) HA DE ser
incrementat si només s'introdueixen correccions compatibles amb les versions
anteriors. Una correcció es defineix com un canvi intern que corregeix un
comportament incorrecte.

1. L'identificador de versió menor ('minor') Y (x.Y.z | x > 0) HA DE ser
incrementat si s'introdueixen a l'API pública noves funcionalitats compatibles
amb versions anteriors. També HA DE ser incrementat si es tracta d'una funcionalitat
marcada com a obsoleta a l'API pública. Es POT incrementar si s'introdueixen noves
funcionalitats o millores substancials en el codi privat. POT incloure alhora
petites correccions. L'identificador de versió de correcció ('patch')
s'HA DE posar a 0 quan s'incrementi l'identificador de versió menor ('minor').

1. L'identificador de versió principal ('major') X (X.y.z | X > 0) HA DE ser
incrementat si s'introdueixen canvis no compatibles amb versions anteriors de
l'API pública. POT incloure alhora petits canvis i correccions. Els identificadors
de versió menor ('minor') i de correcció ('patch') s'HAN DE posar a 0 quan
s'incrementi l'identificador de versió principal ('major').

1. Es POT marcar una versió de pre-llançament afegint un guió i una sèrie
d'identificadors separats per punts immediatament després de l'identificador
de versió de correcció ('patch'). Aquests identificadors HAN DE consistir
únicament en guions i caràcters ASCII alfanumèrics [0-9A-Za-z-]. Aquests
identificadors NO HAN D'estar buits. Els identificadors numèrics NO HAN DE
ser prefixats amb zeros. Les versions de pre-llançament precedeixen la versió
normal associada. Una versió de pre-llançament indica que la versió
no és estable i no necessàriament compleix els requisits de compatibilitat
associat a una versió normal. Exemples: 1.0.0-alpha, 1.0.0-alpha.1,
1.0.0-0.3.7, 1.0.0-x.7.z.92.

1. Les metadades de compilació es PODEN marcar afegint un signe més i una sèrie
d'identificadors separats per punts immediatament després de l'identificador
de versió de correcció ('patch') o de pre-llançament. Aquests identificadors HAN DE
consistir únicament en guions i caràcters ASCII alfanumèrics [0-9A-Za-z-]. Aquests
identificadors NO HAN D'estar buits. Les metadades de la compilació HAURIEN DE ser
ignorades quan es determini l'ordre de les versions. Per tant, dues versions que
difereixen només per la seva informació de compilació tenen la mateixa prioritat.
Exemples: 1.0.0-alpha+001, 1.0.0+20130313144700, 1.0.0-beta+exp.sha.5114f85.

1. La prioritat o precedència defineix com s'ordenen les versions entre sí. La
prioritat HA DE ser calculada separant els identificadors de la versió entre
principal, menor, correcció i pre-llançament, seguint aquest ordre. (La informació
de compilació no compta durant la comparació). La prioritat es determina per la
primera diferència que apareix a la comparació de cadascun d'aquests identificadors
en l'ordre: principal, menor i correcció. Aquests identificadors sempre es comparen
numèricament. Exemple: 1.0.0 < 2.0.0 < 2.1.0 < 2.1.1. Quan els identificadors
principal, menor i correcció són idèntics, una versió de pre-llançament té menor
prioritat que una versió normal. Exemple: 1.0.0-alpha < 1.0.0. La prioritat de
dues versions de pre-llançament amb els mateixos identificadors principal, menor
i correcció HA DE ser determinada mitjançant la comparació de cadascun dels
identificadors separats per un punt, d'esquerra a dreta fins que es trobi la
diferència, de la següent manera: els identificadors compostos només de nombres
es comparen numèricament, i els identificadors que contenen lletres o guions es
comparen en ordre ASCII. Els identificadors numèrics sempre són menys importants
que els identificadors no numèrics. Un conjunt més llarg d'identificadors de
pre-llençament té major prioritat sobre un conjunt més curt, si tots els identificadors
anteriors són idèntics. Exemple: 1.0.0-alpha < 1.0.0-alpha.1 < 1.0.0-alpha.beta <
1.0.0-beta < 1.0.0-beta.2 < 1.0.0-beta.11 < 1.0.0-rc.1 < 1.0.0.

Per què utilitzar la gestió semàntica de versions?
--------------------------------------------------

No és pas una idea nova o revolucionària. De fet, probablement ja esteu fent
alguna cosa semblant. El problema és que això 'semblant' no és prou bo. Sense
el compliment d'un mètode els nombres de versió no es poden utilitzar per la
gestió de dependències. Pel sol fet de donar un nom i una definició clares a
les idees que s'han mostrat a dalt, es fa fàcil comunicar les vostres
intencions als usuaris del vostre programari. Un cop aquestes intencions són
clares i flexibles (però no gaire flexibles) es pot dur a terme l'especificació
de dependències.

Un senzill exemple pot mostrar com la gestió semàntica de versions pot fer que
l'infern de les dependències sigui una cosa del passat. Considera una llibreria
anomenada "CamióDeBombers". Requereix un component anomenat "Escala", el qual
tracte les versions de forma semàntica. Quan es crea la llibreria CamióDeBombers,
l'Escala és a la versió 3.1.0. Atès que CamióDeBombers utilitza funcions que es
van introduir a la versió 3.1.0, podeu especificar, sense cap risc, una
dependència de l'Escala superior o igual a 3.1.0 però inferior a 4.0.0. Ara,
quan les versions 3.1.1 i 3.2.0 de l'Escala estan disponibles, podeu publicar-les
al vostre sistema de gestió de dependències i sabreu que seran compatibles amb
el programari existent que en depèn d'elles.

Com a desenvolupador responsable, voldreu verificar evidentment que qualsevol
actualització del component funciona tal i com s'anuncia. El món real és un
merder; no hi ha res que puguem fer excepte estar a l'aguait. El que podeu fer,
però, és deixar que la gestió semàntica de versions us proporcioni una manera
saludable de publicar i actualitzar els vostres components, sense haver
d'implementar noves versions de components dependents, estalviant-vos temps i
esforç.

Si tot això us sona bé, tot el que heu de fer per començar a utilitzar la gestió
semàntica de la versions és declarar que ho feu i llavors seguiu les regles.
Afegiu un enllaç a aquest lloc web al vostre fitxer README i així altres podran
conèixer les regles i beneficiar-se'n.

FAQ
---

### Com hauria de gestionar les revisions en la fase inicial de desenvolupament 0.y.z?

El més fàcil de fer és començar els teus desenvolupaments amb la versió 0.1.0 i,
a continuació, incrementar l'identificador de versió menor a cada nova publicació.

### Com sé quan he de llançar la versió 1.0.0?

Si el vostre programari s'utilitza en un entorn de producció, ja hauríeu d'estar
a la versió 1.0.0. Si teniu una API estable a partir de la qual els usuaris han
començat a dependre'n, ja hauríeu d'estar a la versió 1.0.0. Si us amoïna molt la
compatibilitat amb versions anteriors, ja hauríeu d'estar a la versió 1.0.0.

### No desincentiva tot això el ràpid desenvolupament i les iteracions curtes?

La versió principal ('major') a 0 es fa precisament per tenir un desenvolupament
ràpid. Si canvieu l'API cada dia hauríeu de ser a la versió 0.y.z o en una branca
de desenvolupament independent que acabarà sent la nova versió principal.

### Si fins i tot el canvi més petit a l'API pública no compatible amb versions anteriors requereix augmentar l'identificador de versió principal, no arribaré a la versió 42.0.0 massa ràpidament?

Es tracta d'un desenvolupament responsable i d'una anticipació. Els canvis
incompatibles no s'han d'introduir a la lleugera en un programari amb un
gran nombre de codi font depenent. El cost d'una actualització a una nova versió
pot ser important. La necessitat d'augmentar la versió principal per publicar
els canvis que no siguin compatibles amb amb versions anteriors, significa que
haureu mesurat les implicacions dels canvis i avaluada la relació entre el seu
cost i els seus beneficis.

### Documentar tota l'API pública demana massa feina!

És la vostra responsabilitat com a desenvolupador professional documentar
correctament el programari que altres usuaris pensen utilitzar. Gestionar la
complexitat d'un programari és una part immensament important per mantenir
un projecte eficient, i es fa difícil de fer quan ningú no sap com utilitzar
el vostre programari, o quins són els mètodes adequats per cridar. A la llarga
la gestió semàntica de versions, i els esforços en la conservació d'una
API pública ben definida permetrà que tots puguem avançar sense problemes.

### Què he de fer si accidentalment publico un canvi no compatible amb versions anteriors com una versió menor?

Tan bon punt us adoneu que heu trencat la gestió semàntica de la vostra versió,
corregiu el problema i publiqueu una nova versió menor que restauri la
compatibilitat amb versions anteriors. Fins i tot en aquestes circumstàncies,
és inacceptable modificar una versió ja publicada. Actualitzeu, si cal, la
documentació informant sobre la versió defectuosa i informeu als vostres usuaris
d'aquest problema.

### Què he de fer si actualitzo les meves pròpies dependències sense canviar l'API pública?

Això es pot considerar compatible ja que no afecta l'API pública. El programari
que depèn de les mateixes dependències que el vostre component hauria de tenir
la seva pròpia especificació de dependència i l'autor també s'adonarà de
qualsevol conflicte. Per determinar si el canvi és una correcció o un canvi
menor, heu de preguntar-vos si heu actualitzat les vostres dependències per
corregir un error o per introduir una nova característica. En general, esperaria
afegir codi nou en la segona opció, cosa que implica òbviament un increment de
l'identificador de versió menor.

### Què passa si canvio l'API pública de forma involuntària de manera que no coincideix amb el canvi de nombre de versió (per exemple: el codi introdueix per error un canvi que trenca la versió major en un llançament de versió de correcció)?

Feu servir el seny. Si teniu un gran públic que es veurà afectat dràsticament pel
canvi de comportament de l'API pública respecte el que hauria de fer, llavors pot
ser preferible llançar una nova versió principal ('major'), encara que aquesta
versió es pugui considerar una versió de correcció. Recordeu, la gestió semàntica
de versions és bàsicament per transmetre significats en la forma en què canvia el
nombre de versió. Si aquests canvis són importants per als vostres usuaris,
utilitzeu els nombres de versió per informar-los.

### Com he de gestionar les funcionalitats obsoletes?

La obsolescència de funcionalitats existents és una part normal del desenvolupament
del programari i molt sovint es fa necessari per avançar. Quan desaproveu
una part de la vostra API pública, heu de fer dues coses: (1) actualitzar la
documentació per informar els usuaris del canvi, (2) publicar una nova versió
menor amb la part desaprovada. Abans d'eliminar completament la funcionalitat
en un nou llançament de versió important ('major'), hauria d'haver almenys una
versió menor que contingui la desaprovació perquè els usuaris puguin transitar
sense problemes cap a la nova API.

### La gestió semàntica de versions especifica un límit màxim per a la cadena del nombre de versió?

No, però feu servir el sentit comú. Per exemple, un nombre de versió de 255 caràcters
probablement sigui excessiu. A més, alguns sistemes poden imposar les seves pròpies
limitacions en aquesta mida.

Quant a
-------

L'especificació de la gestió semàntica de versions està escrita per [Tom
Preston-Werner](http://tom.preston-werner.com), inventor de Gravatars i
cofundador de GitHub.

Traducció d'aquest document a càrrec de:
- [Jordi Sanfeliu](https://github.com/mikaku)

Si voleu deixar comentaris, si us plau [obre un tiquet a
GitHub](https://github.com/mojombo/semver/issues).

Llicència
---------

[Creative Commons ― CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)
