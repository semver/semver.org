---
layout: french
title: Gestion Sémantique de Version 1.0.0
---

Gestion Sémantique de Version 1.0.0
===================================

Dans le monde du développement logiciel, il existe un recoin terrifiant appelé
"dependency hell". Plus votre système grandit et plus vous intégrez de
paquets dans votre logiciel, plus vous aurez de chances de vous retrouver un
jour au fond de ce trou.

Dans les systèmes qui utilisent beaucoup de dépendances, livrer une nouvelle
version de vos paquets peut rapidement devenir un enfer. Si la spécification
de vos dépendances est trop précise, alors vous prenez le risque d'un blocage 
de version (l'impossibilité de mettre à niveau un paquet sans avoir à livrer 
une nouvelle version de chacun des paquets qui en dépendent). Si vos dépendances 
sont spécifiées avec trop de souplesse, vous serez inévitablement affecté par
des problèmes de versions incompatibles (en ayant supposé une compatibilité 
future avec plus de versions que raisonnable). Vous vous trouvez donc dans le
"dependency hell" lorsque vous êtes bloqué dans une version et/ou qu'une
incompatibilité de version vous empêche de faire avancer votre projet de manière
simple et sécurisée.

En solution à ce problème, je propose une série de règles et exigences qui
dictent comment les numéros de versions sont attribués et augmentés. Pour que
ce système fonctionne, vous devez premièrement déclarer une API publique. Cela
peut se traduire en une documentation ou être forcé par le code lui-même.
Indépendamment, il est très important que cette API soit claire et précise. Une
fois que votre API est identifiée comme publique, vous en communiquez alors les
modifications par un incrément spécifique de la version. Considérez un format de
version X.Y.Z (Majeur.Mineur.Correction). Les corrections de bugs qui n'affectent
pas l'API incrémentent le numéro de version de correction, les ajouts et
changements rétro-compatibles de l'API incrémentent le numéro de version mineur
et les changements non rétro-compatibles incrémentent le numéro de version majeur.

J'appelle ce système de numérotation "Gestion Sémantique de Version". Dans ce schéma,
les versions et la manière dont elles évoluent, transporte de l'information au
sujet du code désigné et sur ce qui a été modifié d'une version à la suivante.


Spécification de la Gestion Sémantique de Version (SemVer)
----------------------------------------------------------

Les mots-clés "DOIT" ("MUST"), "NE DOIT PAS" ("MUST NOT"), "REQUIERT" ("REQUIRED"),
"DEVRA" ("SHALL"), "NE DEVRA PAS" ("SHALL NOT"), "DEVRAIT" ("SHOULD"),
"NE DEVRAIT PAS" ("SHOULD NOT"), "RECOMMANDÉ" ("RECOMMENDED"), "PEUT" ("MAY"),
et "OPTIONNEL" ("OPTIONAL") dans ce document doivent être interprétés comme décrit
dans la RFC 2119.

1. Les logiciels utilisant une gestion sémantique de version DOIVENT 
déclarer une API publique. Cette API pourrait être déclarée dans le code
lui-même ou être sous la forme d'une documentation séparée. Elle doit dans
tous les cas être précise et complète.

2. Une version correcte DOIT prendre la forme X.Y.Z où X, Y et Z sont des 
entiers. X représente le numéro de version majeur, Y représente le numéro
de version mineur et Z le numéro de version de correction. Chaque élément
DOIT être incrémenté numériquement par incréments de 1. Par exemple : 
1.9.0 -> 1.10.0 -> 1.11.0.

3. Quand le numéro de version majeur est incrémenté, les numéros de version
mineur et de correction DOIVENT être remis à zéro. Quand un numéro de version
mineur est incrémenté, le numéro de version de correction DOIT être remis à
zéro. Par exemple : 1.1.3 -> 2.0.0 et 2.1.7 -> 2.2.0.

4. Une version pour une pré-livraison PEUT être démarquée en attachant une
chaîne de caractères arbitraire à la suite du numéro de version de correction
et d'un trait d'union. La chaîne de caractères DOIT être seulement composée de
caractères alphanumériques et/ou de traits d'union [0-9A-Za-z-]. Les versions
de pré-livraison satisfont le schéma d'une version normale mais ont une plus
faible priorité que la version correspondante (sans la chaîne de caractères).
La priorité DEVRAIT ensuite être déterminée dans l'ordre lexicographique ASCII
ascendant. Par exemple : 1.0.0-alpha1 < 1.0.0-beta1 < 1.0.0-beta2 < 1.0.0-rc1 < 1.0.0.

5. Une fois qu'un paquet affecté d'une version a été livré, le contenu de
cette version NE DOIT PAS être modifié. Toute modification doit être livrée
dans une nouvelle version.

6. Le numéro de version majeur zéro (0.y.z) est destiné au développement initial.
Tout ou partie peut être modifié à tout moment. L'API publique ne devrait pas
être considérée comme stable.

7. La version 1.0.0 défini l'API publique. Les incrémentations de la version
après cette livraison sont dépendantes de cette API publique et de ses évolutions.

8. Le numéro de version de correction Z (x.y.Z | x > 0) DOIT être incrémenté
seulement si des corrections rétro-compatibles sont introduites. Une correction
est définie comme un changement interne qui corrige un comportement incorrect.

9. Le numéro de version mineur Y (x.Y.z | x > 0) DOIT être incrémenté si de
nouvelles fonctionnalités rétro-compatibles sont introduites dans l'API
publique. Il PEUT être incrémenté si de nouvelles fonctionnalités ou améliorations
substantielles sont introduites dans le code privé. Cela PEUT inclure dans le
même temps des changements de type correctif. Le numéro de version de correction
DOIT  être remis à zéro lorsque le numéro de version mineur est incrémenté.

10. Le numéro de version majeur X (X.y.z | X > 0) DOIT être incrémenté si des
modifications incompatibles sont introduites dans l'API publique. Cela PEUT inclure
dans le même temps des changements mineurs et des corrections. Les numéros de
version mineur et de correction DOIVENT être remis à zéro quand le numéro de
version majeur est incrémenté.


Spécification de la Labellisation (SemVerTag)
---------------------------------

Cette sous-spécification DEVRAIT être utilisée si vous utilisez un système
de contrôle de version (Git, Mercurial, SVN, etc) pour sauvegarder votre 
code source. Un tel système permet d'automatiser des outils pour inspecter
vos paquets et déterminer votre compatibilité SemVer dans les versions
livrées.

1. Lorsque vous labellisez vos livraisons dans un système de contrôle de
version, le label pour une version donnée DOIT être "vX.Y.Z". Par exemple :
"v3.1.0".

2. La première révision qui introduit la compatibilité SemVer DEVRAIT
être labellisée "semver". Cela permet aux projets préexistants de marquer
leur compatibilité. Cela permet également aux outils automatisés de
reconnaître cet événement.


Pourquoi utiliser la Gestion Sémantique de Version ?
----------------------------------------------------

Il ne s'agit pas d'une idée nouvelle ou révolutionnaire. En fait, vous faites
probablement déjà quelque chose de proche. Et le problème vient du fait que
"quelque chose de proche" n'est pas suffisant. Sans conformité avec une méthode
formelle, les numéros de versions deviennent inutilisables pour la gestion de
vos dépendances. En donnant un nom et une définition claire aux idées exposées
ci-dessus, il est alors plus facile de communiquer vos intentions aux utilisateurs
de votre logiciel. Une fois que vos intentions sont claires, une spécification
flexible (pas trop flexible) des dépendances peut finalement être réalisée.

Un exemple simple permet de montrer comment la Gestion Sémantique de Version
peut faire appartenir le "dependency hell" au passé. Considérez une librairie
du nom de "Firetruck". Elle nécessite un paquet appelé "Ladder" dont la version
est gérée sémantiquement. Lorsque la librairie Firetruck est créée, Ladder en
est à sa version 3.1.0. Et puisque Firetruck utilise des fonctionnalités qui
ont été introduites en 3.1.0, vous pouvez spécifier sans ne courir aucun risque
une dépendance vers Ladder plus grande ou égale à 3.1.0 mais inférieure à 4.0.0.
Maintenant, lorsque les versions 3.1.1 et 3.2.0 de Ladder seront disponibles,
vous pourrez les livrer dans votre système de gestion de paquets en sachant qu'elles
seront compatibles avec les logiciels existants qui en dépendent.

En tant que développeur responsable, bien entendu, vous voudrez vérifier que toute
mise à jour de paquet fonctionne comme cela l'a été annoncé. Dans la réalité, les
choses ne sont pas forcément toujours très cohérentes ; Il n'y a donc rien d'autre à
faire que de rester vigilant. Ce que vous pouvez cependant faire est de laisser la
Gestion Sémantique de Version vous fournir une manière saine de livrer et mettre à
jour vos paquets sans avoir besoin de déployer de nouvelles versions de vos
dépendances vous permettant ainsi d'économiser du temps et du souci.

Si tout cela vous semble intéressant, tout ce que vous avez à faire pour démarrer
l'utilisation de la Gestion Sémantique de Version est de déclaré que vous le faite
et d'en suivre les règles. Ajoutez ensuite un lien vers ce site web dans votre
README pour que d'autres puissent en connaître les règles et en bénéficier.


FAQ
---

### Comment gérer les révisions pendant la période initiale de développement avec une version en 0.y.z ?

Le plus simple est de démarrer vos développements en livrant une version 0.1.0
et d'incrémenter le numéro de version mineur pour chaque nouvelle livraison.

### Comment savoir quand livrer la version 1.0.0?

Si votre logiciel est utilisé en environnement de production ou que vous avez
une API stable de laquelle des utilisateurs ont commencé à dépendre, vous devriez
probablement déjà être en version 1.0.0. Et si vous vous posez déjà des questions
sur la rétro-compatibilité, vous devriez également avoir dépassé la 1.0.0.

### Est ce que cela ne freine pas les développements et décourage les itérations courtes ?

Le numéro de version majeur zéro est concerne essentiellement des développements
rapides. Si vous changez votre API tous les jours, vous devriez soit toujours être
en version 0.x.x, soit sur une branche de développement séparée en préparant le
prochain numéro de version majeur.

### Dans ce cas, si le moindre petit changement à l'API publique non rétro-compatible demande une incrémentation du numéro de version majeur, est ce que je ne vais pas rapidement arriver à la version 42.0.0 ?

C'est une question de développement responsable et d'anticipation. Les
changements incompatibles ne doivent pas être introduits à la légère dans
du logiciel dont beaucoup de code source dépend. Le coût d'une mise à jour
vers une nouvelle version peut être important. Le besoin d'incrémenter le
numéro de version majeur pour livrer des changements incompatibles signifie
que vous aurez mesuré les implications et évalué le rapport entre le coût
et les bénéfices de ces modifications.

### Documenter l'intégralité d'une API publique demande trop de travail !

Il est de votre responsabilité en tant que développeur professionnel de documenter
correctement un logiciel qui est destiné à être utilisé par d'autres. Gérer la
complexité d'un logiciel est un élément extrêmement important pour maintenir son
projet efficacement. Cela devient difficile à faire si personne ne sait comment
utiliser votre logiciel ou quelles sont les méthodes que l'on peut appeler sans
prendre de risque. À long terme, la Gestion Sémantique de Version et l'obstination
dans la conservation d'une API publique correctement définie permettront à tout
le monde d'avancer proprement.

### Que faire si je livre accidentellement une version mineure contenant un changement incompatible avec une version précédente ?

Aussitôt que vous réalisez que vous avez rompu votre Gestion Sémantique de
Version, corrigez le problème et livrez une nouvelle version mineure qui
rétabli la compatibilité avec les versions précédentes. Souvenez-vous qu'il
n'est pas acceptable de modifier une version déjà livrée, même dans de telles
circonstances. Si cela est approprié, mettez à jour la documentation de la
version défectueuse et informez vos utilisateurs de ce problème.

### Que dois-je faire lorsque je mets à jour mes propres dépendances sans modifier l'API publique ?

Cela serait considéré comme compatible car ça n'affecte pas l'API publique.
Un logiciel qui dépend d'une même librairie que votre paquet devrait avoir
sa propre spécification de dépendances et l'auteur remarquera ainsi tout
conflit éventuel. Pour déterminer si la modification est de niveau correctif
ou de niveau mineur, il faut vous poser la question de savoir si vous avez mis
à jour vos dépendances pour corriger un bug ou pour introduire une nouvelle
fonctionnalité. Je considère généralement l'ajout de nouveau code comme la
deuxième option ce qui sous-entend évidemment un incrément du numéro de
version mineur.

### Que dois-je faire si le bug qui est en cours de correction remet le code en conformité avec l'API publique (le code était devenu malencontreusement incompatible avec de la documentation de l'API publique) ?

Faites appel à votre jugement. Si vous avez une large audience sur laquelle
un retour à ce que l'API publique prévoyait aura de grande conséquences, alors
il est peut être préférable de faire une livraison d'une version majeure. Même
dans le cas où la modification pourrait être considérés uniquement comme une
livraison de correction. Souvenez-vous encore que la Gestion Sémantique de Version
est une question de transmission d'information dans la manière dont les numéros
de version changent. Si ces changements sont importants pour vos utilisateurs,
utilisez les numéros de version pour les en informer.


À propos
--------

La spécification de la Gestion Sémantique de Version est écrite par [Tom Preston-Werner](http://tom.preston-werner.com), inventeur de Gravatars et cofondateur de GitHub.

Si vous souhaitez laisser des commentaires, [ouvrez un ticket sur GitHub](https://github.com/mojombo/semver/issues) s'il vous plait.


Licence
-------

Creative Commons - CC BY 3.0
http://creativecommons.org/licenses/by/3.0/