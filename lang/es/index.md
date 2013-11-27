---
layout: spanish
title: Versionamiento Semántico 2.0.0-rc.2 
---

Versionamiento Semántico 2.0.0-rc.2 
===================================


En el mundo de la gestión de software existe el temor de caer en algún momento en el llamado “infierno de las dependencias”. Mientras más grande crece tu sistema y mientras más paquetes integras en tu software, más probable es que te encuentres, un día, en este pozo de la desesperación.

En sistemas con muchas dependencias, publicar nuevas versiones de un paquete puede transformarse rápidamente en una pesadilla. Si las especificaciones de dependencia son muy estrictas está el peligro del bloqueo de versiones (la imposibilidad de actualizar un paquete sin tener que actualizar todos los que dependen de este). Si las dependencias se especifican de manera muy amplia, inevitablemente caerás en promiscuidad de versiones (asumir más compatibilidad con versiones futuras de lo razonable). El infierno de las dependencias es donde te encuentras cuando el bloqueo de versiones o la promiscuidad de versiones te impiden avanzar en tu proyecto de manera fácil y segura.

Como solución a este problema, propongo un set simple de reglas y requerimientos que dictan cómo asignar y cómo aumentar los números de versión. Para que este sistema funcione, tienes que declarar primero un API pública. Esto puede consistir en documentación o ser explicitado en el código mismo. De cualquier forma, es importante que esta API sea clara y precisa. Una vez que identificaste tu API pública, comunicas cambios a ella con aumentos específicos al número de versión. Considera un formato de versión del tipo X.Y.Z (Major.Minor.Patch) Los arreglos de bugs que no cambian el API incrementan el patch, los cambios y adiciones que no rompen la compatibilidad de las dependencias anteriores incrementan el minor, y los cambios que rompen la compatibilidad incrementan el major.

Yo llamo a este sistema “Versionamiento Semántico”. Bajo este esquema, los números de versión y la forma en que cambian entregan significado del código que está detrás y lo que fue modificado de una versión a otra.


Especificación de Versionamiento Semántico (en inglés SemVer)
------------------------------------------------------------

En el documento original se usa el [RFC 2119](http://tools.ietf.org/html/rfc2119) para el uso de las palabras MUST, MUST NOT, SHOULD, SOULD NOT y MAY. Para que la traducción sea lo más fiel posible, he traducido siempre MUST por el verbo deber en presente (DEBE, DEBEN), SHOULD como el verbo deber en condicional (DEBERÍA, DEBERÍAN) y el verbo MAY como el verbo PODER.

1. El software que use Versionamiento Semántico DEBE declarar una API pública. Esta API puede ser declarada en el código mismo o existir en documentación estricta. De cualquier manera, debería ser precisa y completa.

1. Un número normal de versión DEBE tomar la forma X.Y.Z donde X, Y, y Z son enteros no negativos. X es la versión “major”, Y es la versión “minor”, y Z es la versión “patch”. Cada elemento DEBE incrementarse numéricamente en incrementos de 1. Por ejemplo: 1.9.0 -> 1.10.0 -> 1.11.0.

1. Una vez que un paquete versionado ha sido liberado (release), los contenidos de esa versión NO DEBEN ser modificadas. Cualquier modificación DEBE ser liberada como una nueva versión.

1. La versión major en cero (0.y.z) es para desarrollo inicial. Cualquier cosa puede cambiar en cualquier momento. El API pública no debiera ser considerada estable.

1. La versión 1.0.0 define el API pública. La forma en que el número de versión es incrementado después de este release depende de esta API pública y de cómo esta cambia.

1. La versión patch Z (x.y.Z | x > 0) DEBE incrementarse cuando se introducen solo arreglos compatibles con la versión anterior. Un arreglo de bug se define como un cambio interno que corrige un comportamiento erróneo.

1. La versión minor Y (x.Y.z | x > 0) DEBE ser incrementada si se introduce nueva funcionalidad compatible con la versión anterior. Se DEBE incrementar si cualquier funcionalidad de la API es marcada como deprecada. PUEDE ser incrementada si se agrega funcionalidad o arreglos considerables al código privado. Puede incluir cambios de nivel patch. La versión patch DEBE ser reseteada a 0 cuando la versión minor es incrementada.

1. La versión major X (X.y.z | X > 0) DEBE ser incrementada si cualquier cambio no compatible con la versión anterior es introducida a la API pública. PUEDE incluir cambios de niver minor y/o patch. Las versiones patch y minor DEBEN ser reseteadas a 0 cuando se incrementa la versión major.

1. Una versión pre-release PUEDE ser representada por adjuntar un guión y una serie de identificadores separados por puntos inmediatamente después de la versión patch. Los identificadores DEBEN consistir solo de caracteres ASCII alfanuméricos y el guión  [0-9A-Za-z-]. Las versiones pre-release satisfacen pero tienen una menor precedencia que la versión normal asociada.Ejemplos: 1.0.0-alpha, 1.0.0-alpha.1, 1.0.0-0.3.7, 1.0.0-x.7.z.92.

1. La metadata de build PUEDE ser representada adjuntando un signo más y una serie de identificadores separados por puntos inmediatamente después de la versión patch o la pre-release. Los identificadores DEBEN consistir sólo de caracteres ASCII alfanuméricos y el guión [0-9A-Za-z-]. Los meta-datos de build DEBIERAN ser ignorados cuando se intenta determinar precedencia de versiones. Luego, dos paquetes con la misma versión pero distinta metadata de build se consideran la misma versión. Ejemplos: 1.0.0-alpha+001, 1.0.0+20130313144700, 1.0.0-beta+exp.sha.5114f85.

1. La precedencia DEBE ser calculada separando la versión en major, minor, patch e identificadores pre-release en ese orden (La metadata de build no figuran en la precedencia). Las versiones major, minor, y patch son siempre comparadas numéricamente. La precedencia de pre-release DEBE ser determinada comparando cada identificador separado por puntos de la siguiente manera: los identificadores que solo consisten de números son comparados numéricamente y los identificadores con letras o guiones son comparados de acuerdo al orden establecido por ASCII. Los identificadores numéricos siempre tienen una precedencia menor que los no-numéricos. Ejemplo: 1.0.0-alpha < 1.0.0-alpha.1 < 1.0.0-beta.2 < 1.0.0-beta.11 < 1.0.0-rc.1 < 1.0.0.

¿Por qué usar Versionamiento Semántico?
---------------------------------------

Esta no es una idea nueva o revolucionarias. De hecho, probablemente ya haces algo cercano hoy en día. El problema es que “cercano” no es suficientemente bueno. Sin un acuerdo en algun tipo de especificación formal, los números de versiones son esencialmente inútiles para el manejo de dependencias. Al darle un nombre y una definición clara a las ideas expresadas arriba, se hace facil comunicar tus intenciones a los usuarios de tu software. Una vez que estas intenciones son claras y flexibles (pero no demasiado flexibles) finalmente se pueden hacer especificaciones de dependencias.

Un ejemplo simple puede demostrar como el Versionamiento Semántico puede ayudar a que el infierno de dependencias quede en el pasado. Considera una librería llamada "CarroBomba" Requiere de un paquete Semanticamente Versionado llamado “Escalera”. En el momento en que se crea CarroBomba, Escalera está en su versión 3.1.0. Como CarroBomba usa algunas de las funcionalidades que recién se estrenaron en la versión 3.1.0, puedes tranquilamente definir la dependencia de Escalera como mayor o igual a 3.1.0, pero menor a 4.0.0. Ahora, cuando la versión 3.1.1 y 3.2.0 de Escalera sean liberadas, puedes usarlas en tu sistema de versionamiento de paquetes sabiendo que serán compatibles con el software dependiente.

Como desarrollador responsable que eres, claro, querrás verificar que cualquier actualización de paquete funcione como se anunció. El mundo real es complejo; no hay nada que podamos hacer salvo estar atentos. Lo que puedes hacer es dejar que el Versionamiento Semántico te provea de una manera sana de liberar y actualizar paquetes sin tener que entregar nuevas versiones de tus paquetes dependientes, ahorrándote tiempo y molestias.

Si todo esto suena deseable, todo lo que tienes que hacer para comenzar usando Versionamiento Semántico es declarar que lo estás haciendo y seguir las reglas. Haz un link a este sitio desde tu README para que otros conozcan las reglas y se puedan beneficiar de ellas.

FAQ
---

### ¿Cómo tengo que hacer con las revisiones en la etapa inicial de desarrollo 0.y.z ?

Lo más facil es empezar tu desarrollo inicial en 0.1.0 e incrementar la versión minor en cada release.

### ¿Cómo sé cuándo liberar la versión 1.0.0?

Si tu software está siendo usado en producción, probablemente ya deberías estar en 1.0.0. SI tienes una API estable de la cual tus usuarios ya están dependiendo, deberías estar en 1.0.0. Si te preocupa mucho la compatibilidad con versiones anteriores, ya deberías estar en 1.0.0. 

### ¿Esto no desincentiva el desarrollo rápido y las iteraciones cortas?

La versión major en cero se trata de desarrollo rápido. Si estás cambiando la API todos los días debieras o bien estar todavía en la versión 0.y.z o estar trabajando en un branch separado para la próxima versión major.

### Si incluso el cambio incompatible con la versión anterior más pequeño requiere un aumento de la versión major ¿No voy a terminar en la versión 42.0.0 demasiado rápido?

Este es un tema de desarrollo responsable y visión anticipada. Los cambios incompatibles no debieran ser introducidos con ligereza al software del cual depende mucho código. El costo de actualizar puede ser significante. Tener que aumentar la versión major para publicar cambios incompatibles significa que vas a pensar bien el efecto de tus cambios, y evaluar el costo/beneficio asociado.

### Documentar la API pública entera es demasiado trabajo!

Es tu responsabilidad como desarrollador profesional documentar adecuadamente el software pensado para que lo usen otros. Gestionar la complejidad del software es una parte tremendamente importante de mantener un proyecto eficiente, y es muy dificil de lograr si nadie sabe cómo usar tu software o qué métodos es seguro llamar. A largo plazo, el Versionamiento Semántico, y la insistencia en una API pública bien definida pueden asegurar que todos y todo corra de manera suave.

### ¿Qué hago si accidentalmente publico un cambio incompatible con la versión anterior como un cambio de versión minor?

Apenas te des cuenta de que rompiste con la especificación de Versionamiento Semántico, repara el problema y publica una nueva versión minor que corrige el problema y recupera la compatiblidad. Incluso en esta circunstancia, es inaceptable modificar releases versionados. Si corresponde, documenta la versión que rompe la especificación e informa a tus usuarios que estén atentos a ella.

### ¿Qué debería hacer si actualizo mis propias dependencias sin cambiar la API pública?

Eso sería considerado compatible ya que no afecta al API pública. El software que explícitamente depende de las mismas dependencias que tu paquete debiera tener sus propias especificaciones de dependencia y el autor va a notar cualquier conflicto. La determinación de si el cambio es a nivel de patch o minor depende de si actualizaste tus dependencias para arreglar un bug o para agregar funcionalidad nueva. Yo esperaría que haya código adicional si se trata de lo segundo, en cuyo caso el incremento del minor es la opción obvia.

### ¿Qué debería hacer si el bug que estoy arreglando justamente hace que vuelva a estar de acuerdo con la especificación del API pública? (es decir, el código estaba incorrectamente desincronizado con la documentación del API) 

Usa tu sentido común. Si tienes una gran audiencia que se va a ver drásticamente afectada al cambiar el comportamiento a lo que la API pública debía hacer, entonces lo mejor puede ser hacer un release major, incluso si el arreglo es estrictamente un release de tipo patch. Recuerda, el Versionamiento Semántico se trata de incorporar significado a la forma en que el número de versión cambia. Si estos cambios son importantes para tus usuarios, usa el número de versión para informarlos.

### ¿Cómo debiera controlar la funcionalidad deprecada?

Deprecar (desaprobar) funcionalidad existente es una parte normal del desarrollo de software y es típicamente requerida para avanzar. Cuando desapruebas parte de tu API pública, deberías hacer dos cosas: (1) actualizar tu documentación para permitir que los usuarios sepan del cambio, (2) emitir un nuevo release minor con la desaprobación. Antes de sacar la funcionalidad por completo en un nuevo release major, debería haber al menos un release minor que contenga la desaprobación de manera tal que los usuarios puedan traspasarse a la nueva API de manera suave.

Acerca de
---------

La especificación de Versionamiento Semántico fue creada por [Tom Preston-Werner](http://tom.preston-werner.com), inventor de los Gravatars y co-fundador de GitHub. Esta traducción fue realizada por Agustin Feuerhake.

Si quieres dar feedback, [puedes abrir un issue en GitHub](https://github.com/mojombo/semver.org/issues).

Licencia
--------

[Creative Commons - CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)
