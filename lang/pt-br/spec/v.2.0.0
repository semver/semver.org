---
layout: default
title: Versionamento Semântico 2.0.0
---

Versionamento Semântico 2.0.0
==============================

Sumário
-------

Dado o número de uma versão MAJOR,MINOR,PATCH, incremente o:

1. MAJOR quando você fizer mudanças que trazem incompatibilidade na API
2. MINOR quando você adicionar funcionalidade mantendo a compatibilidade com versões anteriores.
3. PATCH quando você fizer bug fixes mantendo a compatibilidade com versões anteriores.

Nomes adicionais para pre-releases e metadados de build estão disponíveis como extensões ao
formato MAJOR.MINOR.PATCH.

Introdução
------------

Em um mundo de gerenciamento de software existe um lugar pavoroso chamado
“*dependency hell*”. Quanto mais seu sistema cresce e mais pacotes você
integra no seu software, mais você vai se encontrar, um dia, neste poço de
desespero.

Em sistemas com muitas dependências, lançar novas versões de pacotes podem
rapidamente se tornar um pesadelo.	Se as especificações das dependências
estiverem muito acopladas, você corre  perigo de *version lock*
(impossibilidade de atualizar um pacote sem ter que lançar uma versão nova
de cada pacote que é dependência). Se as dependências estiverem muito
desacopladas, você vai inevitavelmente ser mordido pela promiscuidade de
versão (assumindo compatibilidade com mais versões futuras do que o sensato).
*Dependency hell* é onde você está quando o *version lock* e/ou a
promiscuidade de versão não te deixam ir com o projeto adiante de forma fácil
e segura.

Como solução para este problema, eu proponho um simples conjunto de regras e
requerimentos que ditam como os números de versão são atribuídos e
incrementados. Estas regras são baseadas em, mas não necessariamente limitadas
a práticas comuns já bastante difundidas, usadas em ambos, softwares fechados
e open-source. Para este sistema funcionar, primeiro você precisa declarar uma
API pública. A declaração pode ser feita via documentação ou no próprio código.
Entretanto, é importante que a API seja limpa e precisa. Uma vez que
você identifica o público da sua API, você comunica as mudanças dela com
incrementos especificos ao seu número de versão. Considerando um formato de
versão X.Y.Z (Major.Minor.Patch). Correções de bugs que não afetam a API incrementam
o patch, adições/mudanças compativéis com as versões anteriores
incrementam o minor e mudanças na API não compatíveis com as versões anterioes
incrementam o major.

Eu chamo este sistema de "Versionamento Semântico". Neste esquema, os números de versão
e a forma que eles mudam transmitem o significado do código subjacente e o que foi modificado
de uma versão para a próxima.


Especificação do Versionamento Semântico (SemVer)
------------------------------------------

As palavras "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD",
"SHOULD NOT", "RECOMMENDED", "MAY", e "OPTIONAL" neste documento devem ser
interpretadas como descrito em [RFC 2119](http://tools.ietf.org/html/rfc2119).

1. Softwares que usam Versionamento Semântico devem(MUST) declarar uma API pública.
Esta API poderia ser declarada no próprio código ou estritamente na documentação.
Entretanto não basta fazer, deve(SHOULD) ser precisa e compreensiva.

1. Um número normal de versão deve(MUST) ter a forma X.Y.Z onde X, Y e Z são números
inteiros não negativos, e não devem(MUST NOT) conter zeros na frente. X é a versão major,
Y é a versão minor e Z é a versão patch. Cada elemento deve(MUST) ser incrementado numericamente.
Por exemplo: 1.9.0 -> 1.10.0 -> 1.11.0.

1. Uma vez que um pacote versionado for lançado, o conteúdo daquela versão não deve(MUST NOT)
ser modificado. Qualquer modificação deve(MUST) ser lançada como uma nova versão.

1. A versão major zero (0.y.z) é para desenvolvimento inicial. Qualquer coisa pode(MAY)
mudar a qualquer momento. A API pública não deve(SHOULD) ser considerada estável.

1. A versão 1.0.0 define a API pública. A forma em que o número de versão é incrementado
depois deste release é dependente desta API pública e como ela muda.

1. A versão patch Z (x.y.Z | x > 0) deve(MUST) ser incrementada somente se introduzir
correções de bugs de versões anteriores. Uma correção de bug é definida como uma mudança
interna que corrige um comportamento incorreto.

1. A versão minor Y (x.Y.z | x > 0) deve(MUST) ser incrementada se alguma funcionalidade
nova for introduzida a API pública, desde que compatível com as versões anteriores.
Ela deve(MUST) ser incrementada se qualquer funcionalidade na API pública for marcada
como depreciada. Ela pode(MAY) ser incrementada se alguma nova funcionalidade substancial ou
melhorias forem introduzidas dentro do código privado. Isso pode(MAY) incluir mudanças na patch.
A versão patch deve(MUST) ser resetada para zero quando a versão minor é incrementada.

1. A versão major X (X.y.z | X > 0) deve(MUST) ser incrementada se qualquer mudança
incompatível com as versões anteriores for introduzida a API pública. Isso pode(MAY)
também incluir mudanças na patch e na minor. As versões patch e minor devem(MUST) ser
resetadas para zero quando a major for incrementada.

1. Uma versão de pré-release pode(MAY) ser denotada por acrescentar um hífen e uma série
de identificadores separados por ponto seguindo a versão patch. Identificadores devem(MUST)
compreender apenas caractéres ASCII alfanuméricos e hífen [0-9A-Za-z-]. Identificadores não devem(MUST NOT)
ser vazios. Identificadores numéricos não devem(MUST NOT) ter zeros na frente. Versões de pré-release tem
menor precedencia que a versão normal associada. Uma versão de pré-release indica que a versão é
não-estável e pode não satisfazer os requerimentos de compatibilidade denotados por sua versão normal
associada. Exemplos: 1.0.0-alpha, 1.0.0-alpha.1, 1.0.0-0.3.7, 1.0.0-x.7.z.92.

1. Os metadados de build podem(MAY) ser denotados acrescrentando um sinal de mais(+)
e ua série de identificadores separados por ponto seguindo a versão patch ou de pré-release.
Identificadores devem(MUST) compreender apenas caractéres ASCII alfanuméricos e hífen [0-9A-Za-z-].
Identificadores não devem(MUST NOT) ser vazios. Metadados de build devem(MUST) ser ignorados
quando determinada precedencia de versão. Assim duas versões que diferem somente em metadados de build,
tem a mesma precedencia. Exemplos: 1.0.0-alpha+001, 1.0.0+20130313144700, 1.0.0-beta+exp.sha.5114f85.

1. Precedencia refere a como as versões são comparadas umas as outras quando
ordenadas. A precedencia deve(MUST) ser calculada separando os identificadores
do número da versão em major, minor, patch e pré-release nesta ordem (metadados
de build não são considerados na precedencia). A precedencia é determinada pela primeira
diferença quando comparando cada um desses identificadores da esquerda para a direita como
a seguir: major, minor e patch são sempre comparadas numericamente. Exemplo: 1.0.0 < 2.0.0 < 2.1.0 < 2.1.1.
Quando as versões major, minor e patch são iguais, uma versão de pré-release tem menor
precedencia que a normal. Exemplo: 1.0.0-alpha < 1.0.0. A precedencia para duas versões de pré-releases
com o mesmo major, minor e patch deve(MUST) ser determinada comparando cada identificador separado
por ponto da esquerda para a direita até a diferença ser encontrada como a seguir: identificadores
consistindo em apenas digitos são comparados numéricamente e identificadores com letras ou hífen são
comparados lexicamente na ordenação ASCII. Identificadores numéricos sempre tem menor precedencia que
não numéricos. Um grande conjunto de campos de pré-releases tem uma precedencia maior que um menor, se
todos os identificadores precedentes forem iguais. Exemplo: 1.0.0-alpha < 1.0.0-alpha.1 <
1.0.0-alpha.beta < 1.0.0-beta < 1.0.0-beta.2 < 1.0.0-beta.11 < 1.0.0-rc.1 < 1.0.0.


Por que usar o versionamento semântico?
---------------------------------------

Esta não é uma idéia nova ou revolucionária. Na verdade, você provavelmente
já faz algo parecido. O problema é que "parecido" não é bom o suficiente. Sem
o cumprimento de algum tipo de especificação formal, o número de versões são
praticamente inúteis para o gerenciamento de dependência. Ao dar um nome e uma
definição clara para as idéias apresentadas acima, fica mais fácil de comunicar
as suas intenções para os usuários de seu software. Uma vez que estas intenções
sejam claras, a especificação das dependências podem finalmente ser flexível
(mas  não tão flexível).

Um exemplo simples sobre o versionamento semântico pode demonstrar como aquela
frustação de gerenciamento de dependência é coisa do passado. Considere uma
biblioteca chamada "CarroDeBombeiro", a qual precisa de um pacote "Escada"
versionado semanticamente. No momento em que é criado o CarroDeBombeiro, o
pacote Escada está na versão 3.1.0. Um vez que CarroDeBombeiro utilize
funcionalidades introduzidas em 3.1.0, você pode especificar a versão de Escada
como maior ou igual a 3.1.0, e menor que 4.0.0 com uma certa segurança. Assim
que a versão 3.1.1 e 3.2.0 de Escada estiver disponível, você pode usá-la no
seu sistema de gerenciamento de pacotes e certificar que essas versões serão
compatíveis com o software existente.

Como um desenvolvedor responsável, é claro que você vai querer verificar se
todas as atualizações de pacotes funcionam como anunciado. O mundo real não é
um lugar tão confiável, infelizmente não há nada que possamos fazer sobre isso,
mas podemos pelo menos ser atentos. O que você pode fazer é deixar o
Versionamento Semântico fornecer um caminho sensato para atualizar e lançar
novos pacotes, sem ter que se enrolar em versões recentes, economizando tempo
e evitando aborrecimentos.

Se tudo isso lhe parece conveniente, tudo que você precisa fazer para começar a
usar o Versionamento Semântico é avisar que você está seguindo e respeitando as
regras. Faça um link para esse site no README de seu projeto para que as outras
pessoas saibam dessas regras e possam se beneficiar delas.

FAQ
---

### Como eu devo lidar com revisões na fase inicial de desenvolvimento 0.y.z

A coisa mais simples a fazer é começar seu release de desenvolvimento inicial na versão 0.1.0
e então incrementar a versão minor para cada release subsequente.

### Como identificar o momento de lançar a versão 1.0.0?

Se seu software tem sido usado em produção, ele provavelmente já é 1.0.0. Se você
tem uma API estável na qual os usuários ficaram dependentes, ele já deve ser 1.0.0.
Se você está se preocupando bastante com compatibilidade com versões anteriores, ele
já deve provavelmente ser 1.0.0.

### Isso não desencoraja a agilidade no desenvolvimento e iterações rápidas?

A versão major zero é totalmente sobre agilidade no desenvolvimento. Se você está mudando a API todo dia
você deve ou ainda estar na versão 0.y.z ou em um branch separado trabalhando no próximo release major.

### Se até mesmo a menor mudança que gere incompatibilidade com a API pública precisa incrementar a versão major, eu não vou chegar na versão 42.0.0 muito rapidamente?

Esta é uma questão de responsabilidade no desenvolvimento e previsão. Mudanças
incompatíveis não devem ser introduzidas rapidamente ao software que tem um tanto
de código dependente. O custo que deve ser incorrido para atualizar pode ser significante.
Tento que incrementar as versões major para mudanças incompatíveis significam que você vai
pensar no impacto das suas mudanças, e avaliar a proporção do custo/benefício involvido.

### Documentar toda a API pública é muito trabalhoso!

É responsabilidade sua como um desenvolvedor profissional, documentar o software
que é feito para outras pessoas usarem. Administrar a complexidade do software é
uma parte muito importante para manter o projeto eficiente, e isso é difícil de
fazer se ninguém sabe como usar seu software, ou quais métodos são seguros para chamar.
A longo prazo, o Versionamento Semântico, e a insistência em uma bem definida API pública
podem manter todos e tudo funcionando sem problemas.

### E se eu sem querer lançar um versão com mudanças incompatíveis como uma versão minor?

Assim que você perceber que quebrou a especificação do Versionamento Semântico,
concete o problema e lance uma nova versão minor que corrija o problema e recupere
a compatibilidade com as versões anterioes. Mesmo sob esta circunstância, é inaceitável
modificar versões que já foram lançadas. Se for apropriado, documente a versão problemática
e informe seus usuários sobre o problema, dessa forma eles ficaram cientes da versão problemática.

### O que eu devo fazer se eu atualizar minhas próprias dependências sem mudar a API pública

Seria considerado compatível desde não afete a API pública.
Software que explicitamente depende das mesmas dependências como seu pacote
devem ter suas próprias especificações de dependências e o autor vai notar
qualquer conflito. Determinando se a mudança é a nível de modificação na versão
patch ou minor dependendo se você atualizou suas dependência com o propósito de
corrigir um bug ou introduzir uma nova funcionalidade. Eu costumo esperar por
código adicional em último caso, neste caso é obviamente um incremento na versão
minor.

### E se eu sem querer alterar a API pública de uma maneira que não é compatível com a mudança do número
de versão (ou seja, que o código incorretamente introduz uma mudança grande em um release de correção)

Use seu melhor julgamento. Se você tem uma audiência grande que será
drasticamente impactada pela mudança de comportamento de volta para o
que a API pública pretendia, então é melhor realizar um release maior,
mesmo que o conserto poderia ser considerato estritamente um release de
correção. Lembre-se que versionamento semântico é sobre dar significado
sobre a maneira que o número de versão muda. Se essas mudanças são
importantes para seus usuários, use o número de versão necessário para informá-los.

### Como faço para depreciar funcionalidades?

Depreciar uma funcionalidade extistente é uma parte comum no ciclo de
desenvolvimento de software e é normalmente uma medida necessária para se progredir.
Quando você depreca parte da sua API pública, você deve fazer duas coisas: (1) atualizar
sua documentação para deixar os usuários saberem da mudança, (2) lançar um novo
release menor com a deprecação feita. Antes de você completamente remover a
funcionalidade em um release maior deve existir pelo menos um release menor
que contém a funcionalidade deprecada então os usuários poderão transicionar
suavemente para a nova API.

### O SemVer tem um tamanho limite na string de versão?

Não, mas use um bom julgamento. Uma string de 255 caracteres é
provavelmente mais do que necessário, por exemplo. E também, sistemas
específicos podem impor seus próprios limites no tamanho da string.

Sobre
-----

A especificação do Versionamento Semântico é de autoria de [Tom
Preston-Werner](http://tom.preston-werner.com), inventor dos Gravatars
e cofounder do GitHub

Se quiser dar feedback, por favor [crie uma issue no
GitHub](https://github.com/mojombo/semver/issues).

License
-------

Creative Commons - CC BY 3.0
http://creativecommons.org/licenses/by/3.0/
