---
title: Gestion sémantique de version 2.0.0
language: fr
---

Gestion sémantique de version 2.0.0
===================================

En bref
-------

Étant donné un numéro de version MAJEUR.MINEUR.CORRECTIF, il faut incrémenter :

1. le numéro de version MAJEUR quand il y a des changements non rétrocompatibles,
1. le numéro de version MINEUR quand il y a des ajouts de fonctionnalités rétrocompatibles,
1. le numéro de version de CORRECTIF quand il y a des corrections d’anomalies rétrocompatibles.

Des libellés supplémentaires peuvent être ajoutés pour les versions de pré-livraison et pour
des méta-données de construction sous forme d'extension du format MAJEURE.MINEURE.CORRECTIF.

Introduction
------------

Dans le monde de la gestion des logiciels, il existe un endroit redouté appelé
«&nbsp;l'enfer des dépendances&nbsp;» (de l'anglais _dependency hell_). Plus votre système se
développe et plus vous intégrez de composants dans votre logiciel, plus vous êtes
susceptible de vous trouver un jour dans cet abîme de désespoir.

Dans les systèmes comportant de nombreuses dépendances, publier une nouvelle
version d'un composant peut vite devenir un cauchemar. Si les règles de
dépendance sont trop strictes, vous risquez de verrouiller vos versions
(incapacité de mettre à jour un composant sans avoir à publier une nouvelle
version de chaque composant qui en dépend). Si les règles de dépendances sont
trop lâches, vous allez inévitablement subir la promiscuité de version (supposer
une compatibilité avec plus de futures versions que raisonnable). L'enfer des
dépendances est l'endroit où vous vous trouvez lorsque vous êtes bloqué dans
une version et/ou qu'une incompatibilité de version vous empêche d'avancer
sans risque dans votre projet.

Comme solution à ce problème, je propose un ensemble de règles et d'exigences
simples qui dictent la façon dont les numéros de version sont attribués et
incrémentés. Ces règles sont basées mais pas nécessairement limitées à des
pratiques très répandues aussi bien dans les domaines du logiciel privé que du
logiciel libre. Pour que ce système fonctionne, vous devez d'abord déclarer une API
publique. Il peut s'agir d'un document ou de règles imposées par le code lui-même. Quoi qu'il en soit, il est important que cette API soit claire et précise.
Une fois celle-ci prête, vous communiquez ses modifications par des incrémentations
successives de son numéro de version. Considérons le format de version X.Y.Z
où X, Y et Z identifient la version (Majeure.Mineure.Corrective). Les corrections qui
n'affectent pas l'API incrémentent le dernier identifiant qui est l'identifiant de
version de correction. Lors d'ajouts ou de modifications rétrocompatibles de l'API,
il faut incrémenter l'identifiant de version mineure. Enfin, pour des modifications
non rétrocompatibles, il faut incrémenter l'identifiant de version majeure.

J'appelle ce système «&nbsp;gestion sémantique de version&nbsp;». Avec ce système, les numéros de
version, et la façon dont ils changent, donnent du sens au code sous-jacent et à ce
qui a été modifié d'une version à l'autre.

Spécification de la gestion sémantique de version (SemVer)
----------------------------------------------------------

Les mots clés "DOIT", "NE DOIT PAS", "OBLIGATOIRE", "DEVRA", "NE DEVRA PAS",
"DEVRAIT", "NE DEVRAIT PAS", "RECOMMANDÉ", "PEUT", et "OPTIONNEL" dans ce
document doivent être interprétés comme décrit dans la [RFC 2119](http://microformats.org/wiki/rfc-2119-fr).

1. Tout logiciel utilisant la gestion sémantique de version DOIT déclarer une API
publique. Cette API peut être déclarée dans le code lui-même ou dans un document.
Dans tous les cas, elle doit être précise et claire.

1. Un numéro de version standard DOIT prendre la forme X.Y.Z où X, Y et Z sont
des entiers non négatifs et NE DOIVENT PAS être préfixés par des zéros. X
représente l'identifiant de version majeure, Y représente l'identifiant de version mineure
et Z l'identifiant de version de correction. Chaque élément DOIT s'incrémenter
numériquement.
Exemple : 1.9.0 -> 1.10.0 -> 1.11.0.

1. Une fois qu'un composant est publié, le contenu de sa version NE DOIT PAS
être modifié. Toute modification DOIT être publiée dans une nouvelle version.

1. L'identifiant de version majeure zéro (0.y.z) est destiné au développement initial.
Tout ou partie peut être modifié à tout moment. L'API publique ne devrait pas
être considérée comme stable.

1. La version 1.0.0 définit l'API publique. La façon dont le numéro de version
est incrémenté après cette publication est dépendante de cette API publique et
de ses évolutions.

1. L'identifiant de version de correction Z (x.y.Z | x > 0) DOIT être incrémenté
si seules des corrections rétrocompatibles sont introduites. Une correction
est définie comme un changement interne qui corrige un comportement incorrect.

1. L'identifiant de version mineure Y (x.Y.z | x > 0) DOIT être incrémenté si de
nouvelles fonctionnalités rétrocompatibles sont introduites dans l'API
publique. Il DOIT être incrémenté si une fonctionnalité de l'API publique
est marquée comme obsolète. Il PEUT être incrémenté si de nouvelles fonctionnalités
ou améliorations substantielles sont introduites dans le code privé. Il PEUT
inclure dans le même temps des corrections. L'identifiant de version de correction
DOIT être remis à zéro lorsque l'identifiant de version mineure est incrémenté.

1. L'identifiant de version majeur X (X.y.z | X > 0) DOIT être incrémenté si des
changements non rétrocompatibles sont introduits dans l'API publique. Cela PEUT
inclure dans le même temps des changements mineurs et des corrections. Les
identifiants de version mineure et de correction DOIVENT être remis à zéro quand
l'identifiant de version majeure est incrémenté.

1. Une version de pré-livraison PEUT être notée par l'ajout d'un trait d'union et d'une
série d'identifiants séparés par des points suivant immédiatement l'identifiant de version
de correction. Les identifiants DOIVENT être composés uniquement de caractères
alphanumériques ASCII et de traits d'union [0-9A-Za-z-]. Les identifiants NE DOIVENT PAS
être vides. Les identifiants numériques NE DOIVENT PAS être préfixés par des zéros.
Les versions de pré-livraison précèdent la version normale associée (version de
pré-livraison < version normale). Une version de pré-livraison indique que la version
n’est pas stable et ne satisfait pas forcément les exigences de compatibilité
associées à une version normale.
Exemples : 1.0.0-alpha, 1.0.0-alpha.1, 1.0.0-0.3.7, 1.0.0-x.7.z.92.

1. Les méta-données de construction PEUVENT être notées par l'ajout d'un signe
«&nbsp;plus&nbsp;» et d'une série d'identifiants séparés par des points suivant immédiatement
l'identifiant de version de correction ou de pré-livraison. Les identifiants DOIVENT
être composés uniquement de caractères alphanumériques ASCII et de traits d'union [0-9A-Za-z-].
Les identifiants NE DOIVENT PAS être vides. Les méta-données de construction DEVRAIENT
être ignorées dans l'ordre des versions. Autrement dit, deux versions qui diffèrent
seulement par leurs informations de construction ont la même priorité.
Exemples : 1.0.0-alpha+001, 1.0.0+20130313144700, 1.0.0-beta+exp.sha.5114f85.

1. La priorité définit la façon dont sont ordonnées les versions entre elles.
La priorité DOIT être calculée en séparant les identifiants de versions entre
majeures, mineures, de correction et de pré-livraison, en suivant cet ordre
(les informations de construction n’entrent pas en compte dans la comparaison).
La priorité est déterminée par la première différence apparaissant dans la comparaison
de chacun de ces identifiants dans l'ordre : majeur, mineur et correctif. Ces
identifiants sont toujours comparés numériquement.
Exemple : 1.0.0 < 2.0.0 < 2.1.0 < 2.1.1.
Lorsque ces identifiants sont identiques, une version de pré-livraison est moins
prioritaire qu’une version normale.
Exemple : 1.0.0-alpha < 1.0.0.
La priorité pour deux versions de pré-livraison ayant les mêmes identifiants de
version majeure, mineure et de correction DOIT être déterminée en comparant chaque
identifiant séparé par un point de la gauche vers la droite jusqu’à ce qu’une
différence soit trouvée, comme suit : les identifiants composés uniquement de
chiffres sont comparés numériquement et les identifiants contenant des lettres
ou des traits d'union sont comparés dans l'ordre ASCII. Les identifiants numériques
sont toujours moins prioritaires que les identifiants non numériques (identifiants
numériques < identifiants non-numériques). Un ensemble de champs plus long est
prioritaire par rapport à un ensemble de champs plus court si tous les identifiants
précédents sont identiques.
Exemple : 1.0.0-alpha < 1.0.0-alpha.1 < 1.0.0-alpha.beta < 1.0.0-beta < 1.0.0-beta.2 < 1.0.0-beta.11 < 1.0.0-rc.1 < 1.0.0.

Pourquoi utiliser la gestion sémantique de version ?
----------------------------------------------------

Il ne s'agit pas d'une idée nouvelle ou révolutionnaire. En fait, vous faites
probablement déjà quelque chose d'approchant. Et le problème vient du fait que
«&nbsp;quelque chose de proche&nbsp;» n'est pas suffisant. Sans conformité avec une méthode
formelle, les numéros de version deviennent inutilisables pour la gestion de
vos dépendances. En donnant un nom et une définition claire aux idées exposées
ci-dessus, il devient facile de communiquer vos intentions aux utilisateurs
de votre logiciel. Une fois que vos intentions sont claires, une spécification
souple (mais pas «&nbsp;trop&nbsp;» souple) des dépendances peut être réalisée.

Un exemple simple permet de montrer comment la gestion sémantique de version peut
faire de l'enfer des dépendances, une chose du passé. Considérons une bibliothèque
appelée «&nbsp;CamionDePompier&nbsp;». Elle nécessite un composant appelé «&nbsp;Échelle&nbsp;» dont la
version est gérée sémantiquement. Lorsque la librairie CamionDePompier est créée,
Échelle en est à sa version 3.1.0. Et puisque CamionDePompier utilise des fonctionnalités
qui ont été introduites en 3.1.0, vous pouvez spécifier, sans courir le moindre risque,
une dépendance vers Échelle plus grande ou égale à 3.1.0 mais inférieure à 4.0.0.
Maintenant, lorsque les versions 3.1.1 et 3.2.0 de Échelle seront disponibles, vous
pourrez les publier dans votre système de gestion de dépendances en sachant qu'elles
seront compatibles avec les logiciels existants qui en dépendent.

En tant que développeur responsable, bien entendu, vous voudrez vérifier que toute
mise à jour de composant fonctionne comme annoncée. Dans la réalité, les choses ne
sont pas forcément toujours très cohérentes ; il n'y a donc rien d'autre à faire que
de rester vigilant. Ce que vous pouvez cependant faire est de laisser la gestion
sémantique de version vous fournir une manière saine de publier et mettre à jour vos
composants et ainsi ne pas avoir besoin de déployer de nouvelles versions de vos
sous-composants vous permettant ainsi d'économiser du temps et du souci.

Si tout cela vous semble intéressant, tout ce que vous avez à faire pour commencer
à utiliser la gestion sémantique de version est de déclarer que vous le faites
et d'en suivre les règles. Ajoutez ensuite un lien vers ce site web dans votre
README pour que d'autres puissent en connaître les règles et en bénéficier.

FAQ
---

### Comment dois-je gérer les révisions dans la phase initiale de développement 0.y.z ?

La chose la plus simple à faire est de commencer vos développements avec
une version initiale à 0.1.0 puis d'incrémenter l'identifiant de version mineure
pour chaque nouvelle publication.

### Comment savoir quand publier la version 1.0.0 ?

Si votre logiciel est utilisé en environnement de production ou que vous avez
une API stable de laquelle des utilisateurs ont commencé à dépendre, vous devriez
probablement déjà être en version 1.0.0. Et si vous vous faites déjà du souci
pour la rétro-compatibilité, vous devriez également avoir dépassé la 1.0.0.

### N'est-ce pas décourager le développement rapide et les itérations courtes ?

La version majeure zéro est faite pour un développement
rapide. Si vous changez votre API tous les jours, vous devriez toujours être
en version 0.y.z ou sur une branche de développement séparée en préparant la
prochaine version majeure.

### Si le moindre changement non rétrocompatible de l'API publique nécessite une incrémentation de l'identifiant de version majeure, ne vais-je pas me retrouver à la version 42.0.0 très rapidement ?

C'est une question de développement responsable et d'anticipation. Les changements
incompatibles ne doivent pas être introduits à la légère dans du logiciel dont
beaucoup de code source dépend. Le coût d'une mise à jour vers une nouvelle version
peut être important. Le besoin de faire évoluer la version majeure pour publier des
changements non rétrocompatibles signifie que vous aurez mesuré les implications de
vos modifications et évalué le rapport entre leur coût et leurs bénéfices.

### Documenter l'ensemble de l'API publique demande trop de travail !

Il est de votre responsabilité en tant que développeur professionnel de documenter
correctement le logiciel qui est destiné à être utilisé par d'autres. Gérer la
complexité d'un logiciel est un élément extrêmement important pour maintenir son
projet efficacement. Cela devient difficile à faire quand personne ne sait comment
utiliser votre logiciel ou ne connaît les bonnes méthodes à appeler. Sur le long
terme, la gestion sémantique de version et les efforts dans la conservation d'une
API publique bien définie permettront à tout le monde d'avancer sans problème.

### Que faire si j'ai accidentellement publié un changement non rétrocompatible dans une version mineure ?

Dès que vous réalisez que vous avez cassé votre gestion sémantique de version,
corrigez le problème et publiez une nouvelle version mineure qui rétablit la
compatibilité avec les versions précédentes. Même dans de telles circonstances,
il est inacceptable de modifier une version déjà publiée. Mettez à jour la
documentation en signalant la version défectueuse et informez vos utilisateurs
de ce problème.

### Que dois-je faire lorsque je mets à jour mes propres dépendances sans changer l'API publique ?

Cela peut être considéré comme compatible dans la mesure où cela n'affecte pas l'API
publique. Les logiciels qui dépendent des mêmes librairies que votre composant
devraient avoir leur propre spécification de dépendances et l'auteur remarquera ainsi
tout conflit. Pour déterminer si la modification est de niveau correctif ou mineur,
il faut vous poser la question de savoir si vous avez mis à jour vos dépendances pour
corriger un bug ou pour introduire une nouvelle fonctionnalité. Je considère
généralement l'ajout de nouveau code comme la deuxième option ce qui sous-entend
évidemment un incrément de l'identifiant de version mineure.

### Que faire si par mégarde je modifie l’API publique d’une façon qui ne correspond pas au changement de numéro de version (exemple : le code introduit un changement non rétrocompatible dans une publication de correctif) ?

C'est à vous de décider. Si vous avez une large audience qui sera considérablement
affectée par un retour à ce que l'API publique prévoyait, alors il est peut être préférable
de publier une version majeure, même si la livraison pourrait être uniquement considérée
comme un correctif. Souvenez-vous encore que la gestion sémantique de version consiste
essentiellement à transmettre du sens dans la façon dont le numéro de version change. Si
ces changements sont importants pour vos utilisateurs, utilisez les numéros de version
pour les en informer.

### Comment dois-je traiter les fonctionnalités obsolètes ?

Rendre des fonctionnalités obsolètes est une part normale du développement de logiciels
et cela est souvent nécessaire pour aller de l'avant. Lorsque vous dépréciez une partie
de votre API publique, vous devez faire deux choses : (1) mettre à jour la documentation
pour informer les utilisateurs du changement, (2) publier une nouvelle version mineure
avec la dépréciation en place. Avant que vous ne supprimiez complètement la fonctionnalité
dans une nouvelle version majeure, il devrait y avoir au moins une version mineure qui
contient la dépréciation pour que les utilisateurs puissent effectuer la transition en douceur.

### Est-ce que la gestion sémantique de version spécifie une limite de taille pour la chaîne de caractères d'un numéro de version ?

Non, mais faites preuve de bon sens. Par exemple, un numéro de version de 255 caractères
est probablement excessif. De plus, certains systèmes peuvent imposer leurs propres limites
sur cette taille.

À propos
--------

La spécification de la gestion sémantique de version est écrite par [Tom
Preston-Werner](http://tom.preston-werner.com), inventeur de Gravatars et
cofondateur de GitHub.

Si vous souhaitez laisser des commentaires, veuillez [ouvrir un ticket sur
GitHub](https://github.com/mojombo/semver/issues).

Licence
-------

[Creative Commons - CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)
