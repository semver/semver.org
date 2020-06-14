---
title: Anlamsal Sürümleme 2.0.0
language: tr
author: Inanc Gumus
---

Anlamsal Sürümleme 2.0.0
======================================

Özet
----

BÜYÜK.KÜÇÜK.YAMA diye belirtilen bir sürüm numarasında,

1. Önceki sürümle uyumsuz API değişiklikleri yaptığınızda BÜYÜK sürümü,
2. Önceki sürümle uyumlu bir davranış eklediğinizde KÜÇÜK sürümü, ve
3. Önceki sürümle uyumlu bir hata düzeltmesi yaptığınızda YAMA sürümünü

arttırın.

Ayrıca, BÜYÜK.KÜÇÜK.YAMA biçiminin sonuna ön-sunum (_pre-release_) ve derleme üstverisi (_build metadata_) gibi etiketler eklenebilmektedir.

Giriş
-----

Yazılım yönetimi dünyasında "bağımlılık cehennemi" (_dependency hell_) adında korkulu bir diyar vardır. Sisteminiz büyüdükçe ve yazılımınıza daha çok paket eklediğinizde, büyük ihtimalle bir gün gelecek ve kendinizi bu çaresizlik batağında bulacaksınız. 

Bir çok bağımlılığı olan sistemlerde, yeni bir paket sürümü çıkarmak bir kabusa dönüşebilir. Bağımlılıklar çok sıkı belirlenmişse, sürüm kitlenmesi (bağımlı olunan tüm paketlerin yeni sürümünü yükseltmeden istenen paketin sürümünü yükseltememek) tehlikesiyle karşı karşıyasınız demektir. Eğer bağımlılıklar çok gevşek belirlenmişse, ister istemez sürüm çeşitliliği (gelecekteki sürümlerle aşırı uyumluluk varsaymak) tarafından ısırılacaksınızdır.

Sürüm kitlenmesi ve/veya sürüm çeşitliliği nedeniyle projenizi güvenli bir şekilde ilerletemediğinizde bağımlılık cehenneminin içindesiniz demektir.

Bu soruna bir çözüm olarak, sürüm numaralarının nasıl verildiği ve arttırıldığı konusunda bazı basit kurallar ve gereklilikler öneriyorum. Bu kurallar, genel kabul görmüş, hem kapalı hem de açık-kaynak yazılım uygulamalarına dayansa da, onlarla sınırlı değildir. Bu sistemin çalışması için, öncelikle erişime açık bir API (_public API_) tanımlamanız gerekiyor. Bu, belgeleme veya kod tarafından konulmuş bir kuraldan oluşabilir. Ne şekilde olursa olsun, önemli olan bu API'ın açık ve kesin olmasıdır. Erişime açık API'ınızı tanımladığınız anda, bundan sonra geçireceği değişimleri, sürüm numaranızı belirli arttırımlara tabi tutarak iletmelisiniz. Şu şekilde bir sürüm numarası ele alalım: X.Y.Z (Büyük.Küçük.Yama). API'ı etkilemeyen hata düzeltmeleri yama sürümünü arttırır, önceki sürümlerle uyumlu API eklemeleri/değişiklikleri küçük sürümü arttırır, ve önceki sürümler ile uyumsuz API değişikleri büyük sürümü arttırır.

Bu sistemi: "Anlamsal Sürümleme" diye nitelendiriyorum. Bu düzen sayesinde, sürüm numaraları ve sürüm numaralarının değişim şekilleri, kodda, bir sürümden diğerine neyin değiştiğini anlatır hale gelmektedir.

Anlamsal Sürümleme Tanımı (SemVer)
----------------------------------------

Bu belge içindeki anahtar sözcükler ve/veya eklerinden oluşan "-MALI", "-MELİ", "-MAMALI", "-MEMELİ", "GEREKLİ", "-ECEK", "-ACAK", "-MEYECEK", "-MAYACAK", "-EBİLİR", ÖNERİLİR", "OLABİLİR", ve "KEYFE BAĞLI", [RFC 2119](http://tools.ietf.org/html/rfc2119)'da belirtildiği şekilde anlaşılmalıdır.

1. Anlamsal Sürümleme kullanan bir yazılım erişime açık bir API tanımlamalıdır. Bu API, kodun kendi içinde veya yalnızca zaten var olan bir belgelemenin içinde tanımlanabilir. Nasıl yapılırsa yapılsın, kesin ve eksiksiz olmalıdır.

2. Normal bir sürüm numarası X.Y.Z biçimde OLMALIDIR; burada X, Y, ve Z negatif olmayan tam sayılardır, ve başlarında sıfır İÇERMEMELİDİR. X büyük sürümdür, Y küçük sürümdür, ve Z yama sürümüdür. Her öğe sayısal olarak ARTMALIDIR. Örnek: 1.9.0 -> 1.10.0 -> 1.11.0.

3. Sürümlenmiş bir paket sunulduğunda, o sürümün içeriği DEĞİŞTİRİLMEMELİDİR. Yapılan her hangi bir değişim yeni bir sürüm olarak sunulmalıdır.

4. Büyük sürüm sıfırı başlangıçta yapılan yazılım geliştirme içindir. Her şey her an değişebilir. Erişime açık API dengeli (_stable_) diye değerlendirilmemelidir.

5. 1.0.0 sürümü erişime açık API'ı tanımlar. Sürüm numarasının bu sürümden sonra nasıl arttırılacağı bu erişime açık API'a ve nasıl değiştiğine bağlıdır.

6. Yama sürümü Z (x.y.Z `|` X > 0) sadece önceki sürümle uyumlu hata düzeltmeleri yapıldığında ARTTIRILMALIDIR. Hata düzeltmesi şöyle tanımlanır: Yanlış bir davranışı düzelten içsel bir değişiklik.

7. Küçük sürüm Y (x.Y.z `|` x > 0), erişime açık API'a yeni, önceki sürümle uyumlu bir işlevsellik eklendiğinde ARTTIRILMALIDIR. Erişime açık API'daki bir işlevsellik çürümüş (_deprecated_) diye işaretlendiğinde ARTTIRILMALIDIR. Özel koda ciddi oranda yeni işlevler veya geliştirmeler katıldığında ARTTIRILABİLİR. Yama düzeyindeki değişiklikler buna dahil EDİLEBİLİR. Yama sürümü, küçük sürüm arttırıldığında SIFIRLANMALIDIR.

8. Büyük sürüm X (X.y.z `|` X > 0) önceki sürümle uyumsuz değişiklikler yapıldığında ARTTIRILMALIDIR. Yama ve küçük düzeydeki değişiklikler buna dahil edilebilir. Büyük sürüm arttırıldığında, yama ve küçük sürüm SIFIRLANMALIDIR.

9. Bir ön-sunum (_pre-release_) sürümü, yama sürümünden hemen sonraki kısımda, bir tire işaretiyle ve bir dizi nokta ayracıyla GÖSTERİLEBİLİR. Tanımlayıcılar yalnızca ASCII alfasayısal ve tire işaretlerinden [0-9A-Za-z-] OLUŞMALIDIR. Tanımlayıcılar boş OLMAMALIDIR. Sayısal tanımlayıcılar öncül sıfırlar İÇERMEMELİDİR. Ön-sunum sürümleri ilişkili normal sürümden daha düşük önceliğe sahiptir. İlişkili normal sürümün tersine, bir ön-sunum sürümü, sürümün dengesiz olduğunu ve beklenen uyumluluk gereksinimlerini karşılayamayacağını gösterir. Örnekler: 1.0.0-ilk, 1.0.0-ilk.1, 1.0.0-0.3.7, 1.0.0-x.7.z.92.

10. Derleme üst verisi, yama sürümünü veya ön-sunum sürümünü hemen takip ederek eklenen bir artı işaretiyle ve bir dizi nokta ayracıyla GÖSTERİLEBİLİR. Tanımlayıcılar yalnızca ASCII alfasayısal ve tire işaretlerinden [0-9A-Za-z-] OLUŞMALIDIR. Tanımlayıcılar boş OLMAMALIDIR. Derleme üstverisi sürüm önceliği belirlenirken dikkate ALINMAMALIDIR. Böylece, yalnızca derleme üstverisiyle farklılık gösteren iki sürüm de aynı önceliğe sahip olacaktır. Örnekler: 1.0.0-ilk+001, 1.0.0+20130313144700, 1.0.0-ikincil+deneme.sha.5114f85.

11. Öncelik, sürümlerin sıralandıklarında, birbirleriyle sıralarının nasıl karşılaştırılacaklarını belirtir. Öncelik sürüm numarası büyük, küçük, yama ve ön-sunum tanımlayıcılarıyla, burada yazıldığı sırada (Derleme üstverisi öncelik belirlenirken anlamsızdır) ayırarak HESAPLANMALIDIR. Öncelik, soldan sağa doğru tanımlayıcıların her birini şu şekilde karşılaştırırken belirlenir: Büyük, küçük, ve yama sürümleri daima sayısal olarak karşılaştırılır. Örnek: 1.0.0 < 2.0.0 < 2.1.0 < 2.1.1. Büyük, küçük, ve yama eşit olduğunda, bir ön-sunum sürümü, normal bir sürümden daha düşük önceliğe sahiptir. Örnek: 1.0.0-ilk < 1.0.0.  Aynı büyük, küçük, ve yama sürümüne sahip iki ön-sunum sürümünün önceliği, şu şekilde gösterildiği gibi, soldan sağa doğru her bir tanımlayıcıyı ayırıp karşılaştırarak BELİRLENMELİDİR: yalnızca rakamlardan oluşan tanımlayıcılar sayısal olarak karşılaştırılır ve harfli veya tire çizgili tanımlayıcılar ise ASCII sözcük sıralamalarına göre karşılaştırılırlar. Sayısal tanımlayıcılar, sayısal-olmayan tanımlayıcılardan daima daha düşük önceliğe sahiptirler.

Önce gelen tüm tanımlayıcıları eşitse, büyük bir dizi ön-sunumun alanlarının, daha küçük bir dizininkinden daha yüksek önceliği vardır. Örnek: 1.0.0-ilk < 1.0.0-ilk.1 < 1.0.0-ilk.ikincil < 1.0.0-ikincil < 1.0.0-ikincil.2 < 1.0.0-ikincil.11 < 1.0.0-sa.1 < 1.0.0.

Anlamsal Sürümlendirme Neden Kullanılmalıdır?
---------------------------------------------

Aslında, bu yeni veya çığır açan bir fikir değil. Büyük olasılıkla buna yakın bir şeyler zaten yapıyorsunuzdur. Sorun şudur: "yakın" olması yeterince iyi değildir. Bir şekilde belirlenmiş, resmi bir şartnameye uymadan, sürüm sayıları bağımlılık yönetimi için gerçek hayatta kullanışsızdır. Üstteki fikirleri isimlendirip, açık tanımlamalar yaparak, yazılımınızın kullanıcılarına niyetinizi iletmeniz kolaylaşır. Niyetler bir kere açık, esnek (fakat aşırı esnekleştirmeden) oldu mu, bağımlılık tanımlamaları yapılabilir hale gelir.

Basit bir örnek Anlamsal Sürümlendirme'nin bağımlılık cehennemini nasıl mazinin bir parçası haline getirebildiğini gösterecek. "İtfaiye Aracı" isminde bir kütüphaneyi ele alalım. "Merdiven" adındaki Anlamsal Sürümlendirilmiş bir pakete ihtiyaç duymaktadır. İtfaiye Aracı yaratıldığında, Merdiven 3.1.0 sürümündedir. İtfaiye Aracı 3.1.0'da eklenmiş bazı işlevlere ihtiyaç duyduğundan, Merdiven bağımlılığının 3.1.0'a eşit ya da daha büyük fakat 4.0.0'dan küçük olduğunu güvenle belirtebilirsiniz. Böylelikle, Merdiven sürüm 3.1.1 ve 3.2.0 kullanılabilir olduğunda, paket yönetim sisteminize bunları sunabilirsiniz ve halihazırdaki bağımlılığı bulunduğu yazılımla uyumlu olacağını bilirsiniz.

Sorumluluk sahibi bir yazılım geliştirici olarak, tabii ki, her paket güncellemesinin reklam edildiği şekilde işlediğini kontrol etmek isteyeceksiniz. Gerçek dünya karışık bir yerdir; gözünüzü açık tutmak dışında yapabileceğiniz pek bir şey yoktur. Ancak, yapabileceğiniz şudur: Bağımlı olunan paketlerin yeni sürümlerini çıkarmaya gerek kalmadan paketleri sunmak ve yükseltmek için sizi zaman ve eziyetten kurtaracak mantıklı bir yol öneren Anlamsal Sürümlendirme'yi kullanmaktır.

Bütün bunlar hoşunuza gittiyse, Anlamsal Sürünlendirme'yi kullanmaya başlamak için yapmanız gereken tek şey kullanmaya başladığınızı ve kurallarını takip ettiğinizi duyurmaktır. BENİOKU (_README_) dosyanızdan bu web sitesine bağlantı vererek diğerlerinin de kuralları bilmesini ve bunlardan yarar sağlamalarını sağlayabilirsiniz.

SSS
---

### İlk geliştirme fazı olan 0.y.z'deki değişikliklerle nasıl başa çıkmalıyım?

Yapılabilecek en basit şey ilk geliştirme sunumunuzu 0.1.0'da başlatmaktır ve takip eden her sunum için küçük sürümü arttırmaktır.

### 1.0.0'ı ne zaman sunacağımı nasıl anlarım?

Yazılımınız piyasa (_production_) ortamında kullanılmaya başlanmışsa, zaten muhtemelen 1.0.0'dır. Kullanıcıların güvenebildiği dengeli bir API'a sahipseniz, 1.0.0 olmalısınız. Önceki sürümle uyumlu olmayı dert ediyorsanız, büyük olasılıkla, çoktandır 1.0.0 olmalısınız.

### Seri geliştirmeden ve hızlı döngüden caydırmaz mı?

Büyük sürümün sıfır olması tamamen seri geliştirmeyle alakalıdır. Eğer API'ı her gün değiştiriyorsanız ya hala 0.y.z sürümü ya da sıradaki büyük sürümün üzerinde çalıştığınız ayrı bir geliştirme dalı (_branch_) üzerinde olmalısınız.

### Erişime açık API'ımın önceki bir sürümüyle uyumsuz en küçük değişiklikler bile büyük sürümü arttıracaksa, kendimi birden 42.0.0 sürümünde bulmayacak mıyım?

Bu sorumluluk sahibi yazılım geliştirmekle ve ileri görüşlülükle alakalı bir sorudur. Bir çok bağımlılığı olan bir yazılıma uyumsuz değişiklikler öylesine eklenmemelidir. Maruz kalınacak yükseltme maliyeti ciddi boyutlarda olabilir. Uyumsuz değişikliklerde büyük sürümü arttırmak demek yaptığınız değişikliklerin etkileri hakkında etraflıca düşüneceğinizi, ve maliyet/kazanç oranına göre karar vermenizi gerektirecektir.

### Erişime açık API'ın tamamını belgelendirmek büyük iş!

Başkaları tarafından kullanılacağı düşünülen bir yazılımı düzgün bir şekilde belgelendirmek usta bir yazılım geliştirici olarak sizin sorumluluğunuzdur. Yazılım karmaşıklığını yönetmek bir projeyi verimli tutmanın çok önemli bir kısmıdır ve kimse yazılımınızı nasıl kullanacağını ya da hangi yöntemleri (_methods_) çağırmanın güvenli olacağını bilemiyorsa bunu yapmak zordur. Anlamlı Sürümlendirme, uzun dönemde, ve iyi tanımlanmış erişime açık bir API ile herkesin ve her şeyin sorunsuzca devam etmesini sağlar.

### Önceki sürümle uyumsuz bir değişikliği yanlışlıkla küçük bir sürüm olarak sunarsam ne yaparım?

Anlamsal Sürümlendirme şartnamesini bozduğunuzu farkettiğiniz anda, sorunu düzeltin ve sorunu düzelten ve önceki sürümle uyumluluğunu sağlayan yeni bir küçük sürüm sunun. Bu şartlar altında bile, sürümlendirilmiş sunumları kesinlikle değiştirmeyin. Mümkünse, sıkıntı çıkaran sürümü belgelendirin ve kullanıcılarınızı sorunla alakalı olarak bilgilendirin böylece sıkıntı çıkaran sürümden haberleri olmuş olur.

### Erişime açık API'ı değiştirmeden yazılımın bağımlılıklarını güncellersem ne yapmalıyım?

Erişime açık API'ı etkilemediğinden uyumlu olarak değerlendirilebilecek bir durumdur. Paketinizle aynı bağımlılıklara sahip olan bir yazılımın kendi bağımlılık şartnameleri olmalıdır ve yazılımcısı tüm uyuşmazlıkları farkedecektir. Bir hatayı düzeltmek ya da yeni bir işlev kazandırmak için bağımlılıklarınızı güncelleyip güncellemediğiniz, yama ya da küçük seviyede bir değişiklik yapıp yapmadığınızı belirler. İkinci örnekteki durum için genelde ek kod beklerim; her iki durumun da küçük seviye bir artış olduğu bellidir.

### Ya yanlışlıkla erişime açık API'ı sürüm numarasıyla uyumlu olmayacak bir şekilde değiştirmişsem (örn: yama sunumunda büyük bir kırıcı değişim oluşturan kod)?

Sağduyunuzu kullanın. Erişime açık API'ın davranışını beklenen, önceki haline geri getirmenizden etkilenecek büyük bir kitleniz varsa, düzeltmeniz bir yama sunumu gibi değerlendirilebilir olsa da, büyük bir sürüm sunumu yapmak en iyisi olabilir. Anlamsal Sürümlendirme'nin tüm amacının sürüm numaralarının nasıl değiştiğini ifade ettiğini unutmayın. Eğer bu değişiklikler kullanıcılarınız için önemliyse, sürüm numarasını kullanarak onları bilgilendirin.

### Çürüyen bir işlevi nasıl ele almalıyım?

Varolan işlevlerin çürümesi yazılım geliştirmenin normal bir parçasıdır ve ileri adım atabilmek için genellikle gerekir. Erişime açık API'ınızın bir kısmını çürüttüğünüzde, iki şey yapmalısınız: (1) değişiklik konusunda kullanıcılarınızı bilgilendirmek için belgelendirmenizi güncelleyin, (2) çürümenin konduğu küçük bir sunum çıkarın. İşlevi büyük bir sunumla tamamen kaldırmadan önce, kullanıcılarınızın yeni API'a kolayca geçiş yapabilmeleri için çürümeyi içeren en az bir adet küçük bir sunum olmalıdır.

### Semver, sürüm karakterlerinde (_string_)  bir sınıra sahip midir?

Hayır, fakat sağduyunuzu kullanın. Örneğin, 255 karaktere sahip bir sürüm karakteri muhtemelen gereksizdir. Ayrıca, karakterlerin uzunluğu konusunda bazı sistemler kendi sınırlarını koyabilirler.

Hakkında
--------

Anlamsal Sürümlendirme şartnamesi, Gravatar'ların kaşifi ve GitHub'un kurucu ortaklarından olan [Tom Preston-Werner](http://tom.preston-werner.com) tarafından yazılmıştır.

Yorum bırakmak isterseniz, lütfen [GitHub'da bir konu açın](https://github.com/mojombo/semver/issues).

Lisans
------

[Creative Commons ― CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)
