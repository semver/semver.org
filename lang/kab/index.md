---
title: Asefrek anamkan n yileqman 2.0.0
language: kab
---

Asefrek anamkan n yileqman 2.0.0
================================

Agzul
-----

Mi ara tesɛum uṭṭun n ulqem s talɣa MAJOR.MINOR.PATCH, ilaq ad tesnernim:

1. alqem MAJOR mi ara tgem abeddel n API yemyagin d wayen yezrin,
1. alqem MINOR mi ara ternum timahilin yemɛaban d wayen yezrin,
1. alqem PATCH mi ara tgem iseɣtiyen n tuccḍiwin yemɛaban d wayen yezrin.

Llant tecraḍ nniḍen i yileqman send tuffɣa (pre-release) d yidfersefka n usali
(build metadata) i irennun d isiɣzaf i talɣa MAJOR.MINOR.PATCH.

Tazwart
-------

Deg umaḍal n usnefli n yiseɣẓan, tella yiwet n tegnit ttkukrun-tt medden
ssawalen-as "times n teglin" (seg Teglizit "dependency hell"). Simal yettimɣur
unagraw-nwen, simal trennum iwemmusen i useɣẓan-nwen, simal yettaẓ-d wass deg
ur as-tettafem ara akk ixef-is deg wanu-a yesbelɛen asirem.

Deg unagraw deg i caḍent teglin, asufeɣ n yileqman imaynuten n kra yisger yezmer
ad yuɣal awal sin am yir targit. Ma yella ilugan n tigelt bezzaf ḥersen, tzemrem
ad tesweḥlem ileqman-nwen (ur tettizmirem ara ad tleqmem isger war ma
tessufɣem-d ileqman imaynuten n yal isger uɣur yurez). Ma yella tiglin bezzaf
serrḥent, iban ad d-teɣlim deg uceṛṛeɛ n ulqem (aqbal s tmara n umɛabi d
yileqman i d-itteddun nnig wayen ilaqen). Ma ur ken-yeǧǧi ara usewḥel n
yileqman neɣ aceṛṛeɛ n yileqman ad tseddum asenfar-nwen ar zdat s tefses
d tɣellist, ad d-tafem iman-nwen deg "tmes n teglin".

Akken ad yefru wugur-a, summreɣ-d kra n yilugan d tmariwin ara awen-d-yinin amek
ara tesbeddem neɣ ad tesnernim uṭṭunen n yileqman. Ilugan-a bnan - ɣas akken
mačči ala ɣef waya - ɣef tsemras i nennum, yellan yakan ttwaseqdacent s waṭas
ama deg useɣẓan uslig ama deg win yeldin. Akken ad yeddu unagraw-a, ilaq ad
tesbeddem API tazayezt (agrudem n usihel n yesnasen). Aya yezmer ad yili s
usedles neɣ ad yettwaseyyef deg tengalt yakan. Akken yebɣu yili, API-a ilaq ad
tettwafham yerna ad temqet. Mi dayen tesbeddem-tt, ad tessawalem ɣef
ubeddel-is s usnerni n wuṭṭun-nwen n ulqem. Ma nesɛa alqem s talɣa X.Y.Z
(Major.Minor.Patch), iseɣtiyen ur nettbeddil ara API ad snernin alqem patch,
abeddel d usegmu n API yemɛaban d wayen yezrin ad snernin minor, abeddel n API
yemyagin d wayen yezrin ad yesnerni alqem major.

Semmaɣ-as i unagraw-a "aleqqem anamkan". S unagraw-a, uṭṭunen n ulqem d wamek s
i ttnernin ttaken anamek i tengalt uɣur cudden d wayen yettbeddilen seg ulqem
ar wayeḍ.


Asefru n uleqqem anamkan (SemVer)
---------------------------------

Awalen yufraren "ILAQ" (MUST/SHALL), "UR ILAQ ARA" (MUST NOT/SHALL NOT),
"YETTUḤETTMEM" (REQUIRED), "YEWWI-D" (SHOULD), "UR D-YEWWI ARA" (SHOULD NOT),
"YELHA" (RECOMMENDED), "YEZMER" (MAY), "AXETRAN" (OPTIONAL) i d-yeddan deg
wezmam-a, yewwi-d ad ttwafehmen akken i ten-id-mlan deg
[RFC 2119](http://tools.ietf.org/html/rfc2119).

1. Aseɣẓan yesseqdacen aleqqem anamkan ILAQ ad yesbedd API tazayezt. API-a
tezmer ad tili deg tengalt yakan neɣ ad d-tettwasefhem akken iwata deg
yiseftar. Akken tebɣu tili, ILAQ ad tettwafham yerna ad temqet.

1. Uṭṭun amagnu n ulqem ILAQ ad yili s talɣa X.Y.Z anda X, Y d Z d ummiden ur
nelli d uzdiren, UR ILAQ ARA ad gebren ilmawen ur nesɛi anamek. X d alqem
ameqran (major), Y d alqem ameẓyan (minor), ma d Z d alqem n useɣti (patch). Yal
aferdis ILAQ ad yettnerni s wudem umḍin. Amedya: 1.9.0 -> 1.10.0 -> 1.11.0.

1. Ma dayen yeffeɣ-d yisger s kra ulqem, ayen yellan deg ulqem-a UR ILAQ ARA ad
ibeddel. Ma yella-d kra ubeddel, ILAQ ad d-yeffeɣ deg ulqem amaynut.

1. Ilem deg ulqem ameqran (0.y.z) yemmug i usnefli amezwaru. Kullec YEZMER ad
ibeddel seg teswiɛt ar tayeḍ. API tazayezt UR D-YEWWI ARA ad tettwaḥsab terked.

1. D alqem 1.0.0 i yesbeddayen API tazayezt. Abrid ara yaɣ usnerni n wuṭṭun n
ulqem segmi ara d-yeffeɣ, yeqqen ɣer API-nni tazayezt d wamek i tettbeddil.

1. Alqem n useɣti Z (x.y.Z | x > 0) ILAQ ad yennerni ma yella d iseɣtiyen kan
yemɛaban d wayen yezrin i d-ikecmen. Aseɣti n ubug d abeddel agensas i
yettseggimen tikli yeccḍen.

1. Alqem ameẓyan Y (x.Y.z | x > 0) ILAQ ad yennerni ma yella tekcem-d tmahilt
tamaynut yemɛaban d wayen yezrin ɣer API tazayezt. ILAQ daɣen ad yennerni ma
yella kra n tmahilt n API tazayezt tettwacreḍ d tin ara yettwakksen. YEZMER ad
yennerni ma tekcem-d tmahilt tamynut neɣ aseggem meqqren i yerzan tanglat
tusligt kan. YEZMER ad d-yeglu s ubeddel deg uswir n useɣti. Mi ara yennerni
ulqem ameẓyan, alqem n useɣti ILAQ ad yuɣal ar 0.

1. Alqem ameqran X (X.y.z | X > 0) ILAQ ad yennerni ma nessekcem kra ubeddel
yemyagin d wayen yezrin ar API tazayezt. YEZMER daɣen ad d-yeglu s ubeddel deg
uswir ameẓyan neɣ n useɣti. Alqem n useɣti d ulqem ameẓyan ILAQ ad uɣalen ar 0
mi ara yennerni ulqem ameqran.

1. Alqem send tuffɣa YEZMER ad d-iban s tmerna n ujerrid d umazrar n yiferdisen
yebḍan s tenqiḍt deffir kan ulqem n useɣti. Iferdisen-a UR ILAQ ad gebren ala
isekkilen igmumḍinen ASCII d ujerrid [0-9A-Za-z-]. Iferdisen-a UR ILAQ ARA ad
ilin d ilmawen. Iferdisen umḍinen UR ILAQ ARA ad gebren ilmawen ur nesɛi anamek.
Alqem send tuffɣa yettas-d ddaw ulqem amagnu i icudden ɣur-s. Alqem send tuffɣa
d alqem ur nerkid ara yerna yezmer ur yettqadar ara tiwtilin n umɛabi i yeɛnan
alqem amagnu i icudden ɣur-s. Imedyaten: 1.0.0-alpha, 1.0.0-alpha.1,
1.0.0-0.3.7, 1.0.0-x.7.z.92.

1. Idfersefka n usali ZEMREN ad d-binen s tmerna n uzmul "+" d umazrar n
yiferdisen yebḍan s tenqiḍt, deffir kan ulqem n useɣti neɣ n ulqem send
tuffɣa. Iferdisen-a UR ILAQ ad gebren ala isekkilen igmumḍinen ASCII d ujerrid
[0-9A-Za-z-]. Iferdisen-a UR ILAQ ARA ad ilin d ilmawen. Idfersefka n usali
ILAQ ad ttwazeglen deg umyizwer n yileqman. Ɣef waya, ma llan sin n yileqman
mgaraden kan deg yidfersefka n usali, atenan kifkif-iten deg umyizwer.
Imedyaten:  1.0.0-alpha+001, 1.0.0+20130313144700, 1.0.0-beta+exp.sha.5114f85.

1. Amyizwer ger yileqman yemmal-d amek ara ttwasettfen wa deffir wa. Amyizwer
ILAQ ad yettwaḥsab s beṭṭu n ulqem aferdis aferdis: ameqran, ameẓyan, n useɣti
d send tuffɣa s umyizwer-a (idfersefka ur ttekkin ara deg umyizwer). Amyizwer
yettili-d akken kan ara d-naf amgirred amenzu mi ara nesmenyif ger yiferdisen-a
yiwen yiwen seg uzelmaḍ ar uyeffus akka: alqem ameqran, alqem ameẓyan d ulqem
n useɣti nesmenyif-iten dima s wudem umḍin. Amedya: 1.0.0 < 2.0.0 < 2.1.0 <
2.1.1. Mi ara yilin yiferdisen imeqranen d yimeẓyanen d wid n useɣti d imegduya,
alqem send tuffɣa ad d-yezg ddaw ulqem amagnu. Amedya: 1.0.0-alpha < 1.0.0.
Amyizwer ger sin n yileqman send tuffɣa i iɛedlen aferdis ameqran d umeẓyan
d win n useɣti ILAQ ad yili s usmenyif n yal aferdis iḥazen s tenqiḍt seg
uzelmaḍ ar uyeffus alamma nufa-d amgirred akka: asmenyif n yiferdisen igebren
ala uṭṭunen ad d-yili s wudem umḍin, ma d asmenyif n yiferdisen yesɛan
isekkilen d yijerriden ad yili s umyizwer ASCII deg ugemmay. Alqem send tuffɣa
i umi ggten yiferdisen ad d-yezg ddaw n win yesɛan ciṭṭuḥ, ma ɛedlen akk
iferdisen-nni yezwaren. Amedya: 1.0.0-alpha < 1.0.0-alpha.1 < 1.0.0-alpha.beta
< 1.0.0-beta < 1.0.0-beta.2 < 1.0.0-beta.11 < 1.0.0-rc.1 < 1.0.0.

Iwacu ad nseqdec aleqqem anamkan?
---------------------------------

Aya mačči d takti tamaynut neɣ d tin ara ibeddlen tudert. Tidet kan, yezmer
txeddmem yakan ayen iqerben ar waya. Ugur d wa: "iqreben" ur icaḍ ara. War
amtawi d kra n ulugen unṣib, ad uɣalen wuṭṭunen n yileqman ur nfiɛen ara i
usefrek n teglin. S usbeddi n yisem d unamek ibanen i tikta i d-nefka da, ad
yishil ad tesfehmem ayen i tgemnem i widak yesseqdacen aseɣẓan-nwen. Mi ara ibin
wayen tgemnem, tzemrem ad d-txedmem aslugen iserḥen (d acu mačči bezzaf)
n tiglin.

Atan umedya ameẓyan ara d-iseknen amek ara yerr uleqqem anamkan "times n teglin"
d tamsalt yefran. Ad d-nini nesɛa tamkarḍit isem-is "AkamyunUsexsi". Tettuḥwaǧ
isger iteddun s uleqqem anamkan semman-as "Tasellumt". Ass deg i d-yennulfa
AkamyunUsexsi, Tasellumt tella deg ulqem 3.1.0. Ma yesseqdac AkamyunUsexsi kra
n tmahilt i d-ikecmmen deg 3.1.0, tzemrem ad d-tinim war aɣbel belli alqem
n tagelt Tasellumt ilaq ad yili nnig n 3.1.0 maca ddaw n 4.0.0. Imir, asmi
ara d-ffɣen yileqman 3.1.1 d 3.2.0 n Tasellumt, tzemrem ad ten-ternum ar
unagraw-nwen n usefrek n yisegran yerna teẓram ad mɛaban d useɣẓan-nni i
ten-yuḥwaǧen.

Win yellan d aneflay amasay, iban ad yebɣu ad isefqed kra ubeddel i d-yellan
deg yisger ma itteddu akken iwata. Deg tilawt, timsal mačči d iger iberzen;
ulac ayen i nezmer ad nexdem mgal aya nnig uḥader. Ayen i tzemrem ad txedmem,
d aseqdec n uleqqem anamkan ara awen-d-yefken abrid yelhan i usufeɣ d uleqqem
n yisegran war ma tcelɛem-d deg usufeɣ n teglin, s wakka ad d-trebḥem akud
yerna ad tekksem aɣbel.

Ma yella yeffeɣ fell-awen akk waya, tuḥwaǧem kan ad d-tinim belli tseqdacem-t
yerna ad tḍefrem ilugan akken ad tebdum aseqdec n uleqqem anamkan. Rnut aseɣwen
ar usmel-a deg README-nwen akken ad walin wiyaḍ ilugan yerna ad d-sfaydin
seg-sen.


Isteqsiyen imezga
-----------------

### Amek i ilaq ad sferkeɣ abeddel deg uḥric amenzu n usnefli 0.y.z?

Abrid isehlen akk d beddu n usnefli amenzu seg ulqem 0.1.0, syin akkin ad
tesnernayem alqem ameẓyan i yal asufeɣ amaynut.

### Amek ara nẓer melmi ara d-nessufeɣ alqem 1.0.0?

Ma yella useɣẓan-nwen yettwaseqdec deg ufares, ahat yewwi-d ad yili s ulqem
1.0.0. Ma yella tesɛam API irekden uɣur bdan ttwarzen iseqdacen, ilaq ad tilim
s ulqem 1.0.0. Ma tebdam tcelɛem-d deg umɛabi d wayen yezrin, ilaq ad tilim
yakan deg ulqem 1.0.0.

### Wissen aya ma ur yettekkes ara afud i usnefli arurad d wallusen wezzilen?

Alqem ameqran ilem (0) yemmug i usnefli arurad. Ma tettbeddilem API yal ass,
ilaq ad teqqimem deg ulqem 0.y.z neɣ deg ufurek iḥazen i usnefli ad tqeddcem
ɣef ulqem ameqran i d-iteddun.

### Ma kra n ubeddel meẓẓiyen yemyagin d wayen yezrin deg API tazayezt yuḥwaǧ anserni n ulqem, ur nettaweḍ ara awal sin ar ulqem 42.0.0?

Aya d tamsalt n usnefli s tmasit d uwali ar zdat. Abeddel ara yerẓen amɛabi ur
ilaq ara ad d-yekcem kan akka ar useɣẓan uɣur teqqen aṭas n tengalt. Asali ar
ulqem amaynut yezmer ad d-yekker ɣlay. Ma tesnernam alqem ameqran akken ad
d-tessufɣem abeddel ur nemɛaba ara, aql-iken tettmeyyizem ɣef wayen ara d-yeglu
ubeddel-nwen, yerna tettakem azal i wassaɣ yellan ger tseglut d wayen i d-tesqam.

### Asefter n API tazayezt akken ma tella d axeddim meqqren mliḥ!

Yewwi-d fell-awen s yisem-nwen d ineflayen imsaduren ad tesdelsem aseɣẓan-nwen
yemmugen akken ad tesqedcen wiyaḍ. Asefrek n umcubbak n useɣẓan d ayen yesɛan
azal meqqren akken ad yeqqim usenfar ifaz. Yuɛer ad naweḍ ar waya ma yella yiwen
ur yeẓri amek ara iseqdec aseɣẓan, neɣ anti tarrayin i umi yezmer ad isiwel.
Syin akkin, aleqqem anamkan d usbeddi igerrzen n API tazayezt ad ǧǧen yal yiwen
ad yeddu ɣer zdat war uguren. 

### Dacu i ilaq ad nexedem ma yella nessufeɣ-d s tuccḍa abeddel ur nemɛaba ara d wayen yezrin deg ulqem ameẓyan?

Akken kan ara d-takim belli terẓam asefru n uleqqem anamkan, ilaq ad tesseɣtim
ugur yerna ad d-tessufɣem alqem ameẓyan amaynut ara d-yerren amɛabi d wayen
yezrin. Ula deg tegnit am ta, ur ilaq ara ad tbeddlem ileqman i d-yeffɣen. Ma
twalam ilaq, sdelset alqem-nni yeccḍen, tesɛelmem iseqdacen-nwen s wugur-a i
d-yellan.

### Dacu i ilaq ad nexdem mi ara nelqem tiglin-nneɣ war ma nbeddel API tazayezt?

Aya yezmer ad yettusemma d abddel yemɛaban imi ur yettnal ara API tazayezt.
Iseɣẓanen yurzen ɣer teglin yecban tid n uwemmus-nwen ahat ad sɛun asefru-nsen
n teglin, ihi amsekar-nsent ad ifiq ma yella kra n wugur. Akken ad teẓrem ma
ad yili ubeddel deg uswir n useɣti neɣ deg uswir ameẓyan, ilaq ad twalim ma
tessulim tiglin-nwen akken ad tesseɣtim abug neɣ akken ad d-teskecmem tamahilt
tamynut. Tezga tettili-d tmerna n tengalt deg tegnit-nni tis snat, d ayen i
yuḥwaǧen bla ccekk asnerni n ulqem ameẓyan.

### Amek ara nexdem ma nbeddel s tuccḍa API tazayezt s wudem ur nemɛaba ara d ubeddel n wuṭṭun n ulqem (md. tessekcem-d tengalt abeddel meqqren yerẓan amɛabi deg ulqem n useɣti)?

D kunwi i yeẓran. Ma llan aṭas i ken-yeṭṭafaren, ara tḥazem mliḥ s tuɣalin ar
deffir ma terram API tazayezt akken tella, ahat yif-it ma tessufɣem-d alqem
ameqran, ɣas akken abeddel-nwen icaḍ-as uleqqem n useɣti. Ur tettut ara belli
aleqqem anamkan yemmug akken ad yefk anamek i usnerni n wuṭṭunen n yileqman.
Ma yella ubeddel i d-yellan yesɛa azal meqqren i yiseqdacen-nwen, sbinet-asen
-t-id s wuṭṭun n ulqem.

### Amek ara nsefrek acraḍ n tukksa n tmahilin?

Acraḍ n tmahilin send ad ttwakksent d tigawt yuzzlen deg usnefli n useɣẓan yerna
d ayen i as-ilaqen tikwal akken ad yaẓ ɣer zdat. Mi ara tcerḍeḍ aḥric deg
API-nwen tazayezt ad yettwakkes, ɣur-wen snat n tɣawsiwin ad tent-txedmem: (1)
ad tleqmem iseftar-nwen akken ad ẓren iseqdacen-nwen, (2) ad d-tessufɣem alqem
ameẓyan amaynut deg ara d-tseddum acraḍ n tukksa. Send ad tekksem akk kra
tamahilt deg ulqem ameqran amaynut, ilaq ad d-tessufɣem ma drus yiwen ulqem
ameẓyan i d-immalen tukksa-a akken iseqdacen ad ɛeddin dac dac ɣer API tamaynut. 

### Yesɛa uleqqem anamkan kra n tilist ɣef teɣzi n wuṭṭun n ulqem?

Ala, dacu meyyez akken i iwata. Ahat uṭṭun n ulqem n 255 n yisekkilen (d amedya
kan) bezzaf ɣezzif. Yerna, kra n yinagrawen ttseyyifen tilisa ɣef teɣzi n uzrar
n wuṭṭun n ulqem.

### "v1.2.3" d alqem anamkan?

Ala, "v1.2.3" mačči d alqem anamkan. Maca, timerna n "v" (seg Teglizit) deg
tazwara n ulqem anamkan akken ad d-ibin belli d uṭṭun n ulqem, d ayen yuzzlen
s waṭas. Nettmagar-d aṭas asemẓi n "version" s "v" deg usefrek n yileqman.
Amedya: `git tag v1.2.3 -m "Asufeɣ n ulqem 1.2.3"`, anda "v1.2.3" d isem
n tecreḍt, ma yella d alqem anamkan d "1.2.3".

### Tella kra n tenfalit talugant (RegEx) i usentem n uzrar n ulqem anamkan?

Llant snat. Yiwet s yigrawen yettusemman tetteddu deg yinagrawen i asen-izemren
(PCRE [Perl Compatible Regular Expressions, am Perl, PHP d R], Python akked Go).

Wali: <https://regex101.com/r/Ly7O1x/3/>

```
^(?P<major>0|[1-9]\d*)\.(?P<minor>0|[1-9]\d*)\.(?P<patch>0|[1-9]\d*)(?:-(?P<prerelease>(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+(?P<buildmetadata>[0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$
```

Tella tayeḍ s yigrawen n tuṭṭfiwin s wuṭṭunen (agraw1 = major, agraw2 = minor,
agraw3 = patch, agraw4 = prerelease ma d agraw5 = buildmetadata) temɛaba d ECMA
Script (JavaScript), PCRE (Perl Compatible Regular Expressions, am Perl, PHP
d R), Python akked Go.

Wali: <https://regex101.com/r/vkijKf/1/>

```
^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$
```

Ayen yerzan
-----------

Asefru n uleqqem anamkan yura-t [Tom Preston-Werner](http://tom.preston-werner.com),
win i d-yesnulfan Gravatar yerna yettekki deg usufeɣ n GitHub.

Ma tebɣam ad d-teǧǧem iwenniten, [ldit atiki deg GitHub](https://github.com/semver/semver/issues)
ma ulac aɣilif.

Turagt
------

[Creative Commons - CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)
