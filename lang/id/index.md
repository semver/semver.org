---
title: Semantic Versioning 2.0.0
language: id
---

Semantic Versioning 2.0.0
=============================

Ringkasan
-------

Diberi nomor versi MAJOR.MINOR.PATCH, kenaikan pada:

1. versi MAJOR ketika anda membuat perubahan kompatibilitas API,
1. versi MINOR ketika anda menambah fungsionalitas pada gaya kompatibilitas sebelumnya dan,
1. versi PATCH ketika anda membuat perbaikan bug untuk kompatibilitas sebelumnya.

label tambahan untuk pre-release dan build metadata tersedia sebagai ekstensi
untuk format MAJOR.MINOR.PATCH.

Pengantar
------------

Dalam dunia manajemen software terdapat tempat menakutkan yang disebut
"dependency hell" Semakin besar sistem anda tumbuh dan semakin paket anda
diintegrasikan ke dalam perangkat lunak anda, semakin besar kemungkinan anda
untuk menemukan diri anda suatu hari pada lingkaran keputusasaan ini.

Pada sistem dengan banyak dependensi, merilis versi paket baru dapat dengan cepat
menjadi mimpi buruk. Jika spesifikasi dependensi terlalu ketat, anda akan masuk ke
bahaya dari "version lock" (ketidakmampuan untuk meng-upgrade paket tanpa harus
merilis versi baru dari setiap paket terkait). Jika dependensi
ditentukan terlalu longgar, anda pasti akan digigit oleh "version promiscuity"
(dengan asumsi kompatibilitas dengan versi yang lebih di masa mendatang lebih dari wajar).
Dependency hell tempat anda berada ketika "version lock" dan/atau "version promiscuity"
mencegah anda dari kemudahan dan keamanan pergerakan projek anda kedepan.

Sebagai solusi untuk masalah ini, saya mengusulkan seperangkat aturan dan
persyaratan yang mendikte bagaimana nomor versi ditugaskan dan bertambah.
Aturan-aturan ini didasarkan pada metode yang ada dan banyak digunakan,
tetapi tidak harus terbatas pada pre-existing praktek umum luas yang digunakan
pada kedua perangkat lunak closed dan open-source. Untuk sistem ini bekerja,
anda harus terlebih dahulu mendeklarasikan API publik. Hal ini mungkin
terdiri dari dokumentasi atau ditunjukan oleh kode itu sendiri. Bagaimanapun, itu adalah
penting bahwa API ini menjadi jelas dan tepat. Setelah anda mengidentifikasi publik API
anda, anda mengkomunikasikan perubahan dengan penambahan khusus untuk nomor versi anda.
Pertimbangkan format versi X.Y.Z (Major.Minor.Patch). Perbaikan bug tidak mempengaruhi API
kenaikan patch versi, penambahan/perubahan API kompatibel kenaikan versi minor, dan perubahan
API sebelumnya kompatibel kenaikan versi utama.

Saya menyebut sistem ini "Semantic Versioning." berdasarkan skema ini, penomoran versi
dan cara mereka mengubah menyampaikan makna tentang kode yang mendasari dan apa yang
telah dimodifikasi dari satu versi ke yang berikutnya.


Spesifikasi Semantic Versioning (SemVer)
------------------------------------------

Kata kunci "HARUS", "TIDAK HARUS", "DIPERLUKAN", "AKAN", "TIDAK AKAN", "SEHARUSNYA",
"TIDAK SEHARUSNYA", "DIREKOMENDASIKAN", "MUNGKIN", dan "OPSIONAL" pada dokumen ini harus
ditafsirkan seperti yang dijelaskan dalam [RFC 2119](http://tools.ietf.org/html/rfc2119).

1. Perangkan lunak menggunakan Semantic Versioning HARUS menyatakan API publik. API ini
bisa dinyatakan dalam kode itu sendiri atau ada ketepatan dalam dokumentasi.
Bagaimanapun hal itu dikakukan, SEHARUSNYA tepat dan komprehensif.

1. Penomoran versi normal HARUS mengambil bentuk X.Y.Z dimana X, Y, dan Z adalah
bukan bilangan bulat negatif, dan TIDAK HARUS berisi nol terkemuka. X adalah
versi Major, Y adalah versi Minor, dan Z adalah versi Patch.
Setiap elemen HARUS meningkat secara numerik. Misalnya: 1.9.0 -> 1.10.0 -> 1.11.0.

1. Setelah paket berversi dirilis, isi dari versi tersebut
TIDAK HARUS dirubah. Semua perubahan HARUS dirilis sebagai versi baru.

1. Versi Major nol (0.y.z) adalah untuk pengembangan awal. Apapun MUNGKIN berubah
sewaktu-waktu. API publik SEHARUSNYA TIDAK dianggap stabil.

1. Versi 1.0.0 mendefinisikan API publik. cara dimana nomor versi
bertambah setelah rilis ini tergantung pada publik API ini dan bagaimana
itu berubah.

1. Versi Patch Z (x.y.Z | x > 0) HARUS bertambah jika hanya perbaikan
bug kompatibel sebelumnya diperjenalkan. Perbaikan bug didefinisikan sebagai perbaikan
internal yang memperbaiki perilaku yang tidak benar.

1. Versi Minor Y (x.Y.z | x > 0) HARUS bertambah jika baru, fungsionalitas
kompatibel sebelymnya diperkenalkan pada API publik. itu HARUS
bertambah jika ada fungsinalitas API yang ditandai sebagai deprecated (usang). itu MUNGKIN
bertambah jika substansial fungsionalitas baru atau improvisasi diperkenalkan
beserta kode privat. itu MUNGKIN termasuk perubahan tingkat patch. versi Patch
HARUS reset ke 0 ketika versi minor bertambah.

1. Versi Major X (X.y.z | X > 0) HARUS bertambah jika ada perubahan kompatibilitas
sebelumnya diperkenalkan pada API publik. itu MUNGKIN juga mencakup perubahan
minor dan patch level. Versi patch dan minor HARUS reset ke 0 ketika versi
major bertambah.

1. Versi pre-release MUNGKIN dinotasikan dengan menambah tanda hubung dan
serangkaian dari titik pengidentifikasi dipisahkan langsung mengikuti versi
patch. Pengidentifikasi HARUS hanya terdiri dari ASCII alfanumerik dan tanda hubung
[0-9A-Za-z-]. Pengidentifikasi TIDAK HARUS kosong. Pengidentifikasi numerik TIDAK
HARUS termasuk nol terkemuka. Versi pre-release memiliki prioritas
lebih rendah dari versi normal terkait. Versi pre-release
menunjukkan bahwa versi tidak stabil dan mungkin tidak memuaskan
dimaksudkan persyaratan kompatibilitas sebagai dilambangkan dengan yang terkait
versi normal. Contoh: 1.0.0-alpha, 1.0.0-alpha.1, 1.0.0-0.3.7,
1.0.0-x.7.z.92.

1. Build metadata MUNGKIN dilambangkan dengan menambahkan tanda plus dan serangkaian titik
pengidentifikasi terpisah langsung mengikuti versi patch atau pre-release.
Pengidentifikasi HARUS hanya terdiri dari ASCII alfanumerik dan tanda hubung [0-9A-Za-z].
Pengidentifikasi TIDAK HARUS kosong. Build metadata harus diabaikan saat menentukan versi didahulukan. Dengan demikian dua versi yang perbedaannya hanya dalam build metadata,
memiliki hak yang sama. Contoh: 1.0.0-alpha+001, 1.0.0+20130313144700,
1.0.0-beta+exp.sha.5114f85.

1. Diutamakan mengacu pada bagaimana versi dibandingkan dengan satu sama lain ketika memerintahkan.
Diutamakan HARUS dihitung dengan memisahkan versi ke major, monir, patch
dan pengenal pre-release agar (build metadata bukan angka
yang diutamakan). Diutamakan ditentukan oleh perbedaan pertama ketika
membandingkan masing-masing pengidentifikasi ini dari kiri ke kanan sebagai berikut: major, minor,
dan versi patch yang selalu dibandingkan numerik. Contoh: 1.0.0 < 2.0.0 <
2.1.0 < 2.1.1. Ketika major, minor, dan patch yang sama, versi pre-release memiliki
hak lebih rendah dari versi normal. Contoh: 1.0.0-alpha < 1.0.0. Diutamakan
untuk dua versi pre-release dengan versi major, minor, dan patch yang sama HARUS
ditentukan berdasarkan perbandingan setiap pengidentifikasi titik pemisah dari kiri ke kanan
sampai perbedaan yang ditemukan sebagai berikut: pengidentifikasi yang terdiri dari angka saja
dibandingkan dengan angka dan pengidentifikasi dengan huruf atau tanda hubung dibandingkan
leksikal pada urutan ASCII. Pengidentifikasi numerik selalu memiliki prioritas yang lebih rendah
dari pengidentifikasi non-numerik. Satu set besar bidang pre-release memiliki prioritas
lebih tinggi dibanding satu set kecil, jika semua pengidentifikasi sebelumnya adalah sama.
Contoh: 1.0.0-alpha < 1.0.0-alpha.1 < 1.0.0-alpha.beta < 1.0.0-beta <
1.0.0-beta.2 < 1.0.0-beta.11 < 1.0.0-rc.1 < 1.0.0.

Backus-Naur Form Grammar untuk Versi SemVer yang valid
--------------------------------------------------

    <valid semver> ::= <version core>
                     | <version core> "-" <pre-release>
                     | <version core> "+" <build>
                     | <version core> "-" <pre-release> "+" <build>

    <version core> ::= <major> "." <minor> "." <patch>

    <major> ::= <numeric identifier>

    <minor> ::= <numeric identifier>

    <patch> ::= <numeric identifier>

    <pre-release> ::= <dot-separated pre-release identifiers>

    <dot-separated pre-release identifiers> ::= <pre-release identifier>
                                              | <pre-release identifier> "." <dot-separated pre-release identifiers>

    <build> ::= <dot-separated build identifiers>

    <dot-separated build identifiers> ::= <build identifier>
                                        | <build identifier> "." <dot-separated build identifiers>

    <pre-release identifier> ::= <alphanumeric identifier>
                               | <numeric identifier>

    <build identifier> ::= <alphanumeric identifier>
                         | <digits>

    <alphanumeric identifier> ::= <non-digit>
                                | <non-digit> <identifier characters>
                                | <identifier characters> <non-digit>
                                | <identifier characters> <non-digit> <identifier characters>

    <numeric identifier> ::= "0"
                           | <positive digit>
                           | <positive digit> <digits>

    <identifier characters> ::= <identifier character>
                              | <identifier character> <identifier characters>

    <identifier character> ::= <digit>
                             | <non-digit>

    <non-digit> ::= <letter>
                  | "-"

    <digits> ::= <digit>
               | <digit> <digits>

    <digit> ::= "0"
              | <positive digit>

    <positive digit> ::= "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"

    <letter> ::= "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J"
               | "K" | "L" | "M" | "N" | "O" | "P" | "Q" | "R" | "S" | "T"
               | "U" | "V" | "W" | "X" | "Y" | "Z" | "a" | "b" | "c" | "d"
               | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n"
               | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x"
               | "y" | "z"


Mengapa menggunakan Semantic Versioning?
----------------------------

Ini bukan ide baru atau revolusioner. Bahkan, anda mungkin sudah melakukan sesuatu
mendekati ini. Masalahnya adalah bahwa "dekat" tidaklah cukup. Tanpa
kepatuhan terhadap semacam spesifikasi formal, nomor versi yang
dasarnya tidak berguna untuk manajemen dependensi. Dengan memberikan nama dan definisi
yang jelas untuk gagasan di atas, menjadi mudah untuk mengkomunikasikan keinginan anda
untuk para pengguna perangkat lunak anda. Setelah keinginan ini jelas, fleksibel (tapi
tidak terlalu fleksibel) spesifikasi dependensi akhirnya dapat dibuat.

Contoh sederhana akan mendemonstrasikan bagaimana Semantic Versioning dapat membuat dependency
hell dimasa lalu. Anggaplah sebuah library yang disebut "Firetruck." membutuhkan sebuah
paket berversi semantik dengan nama "Ladder." pada saat Firetruck dibuat,
Ladder memiliki versi 3.1.0. Sejak Firetruck menggunakan beberapa fungsionalitas
yang diperkenalkan pada 3.1.0, anda bisa dengan aman menentukan dependensi
Ladder sebagai lebih dari atau sama dengan 3.1.0 namun kurang dari 4.0.0. Sekarang, ketika
Ladder versi 3.1.1 dan 3.2.0 menjadi tersedia, anda dapat merilis mereka pada
sistem manajemem paket dan tahu mereka itu akan kompatibel dengan ketergantungan
software yang ada.

Sebagai pengembang bertanggung jawab anda tentu saja ingin memverifikasi bahwa setiap
Paket upgrade berfungsi seperti yang diiklankan. Dunia nyata adalah tempat yang berantakan;
tidak ada yang bisa kita lakukan tentang itu tapi waspada.
Apa yang dapat anda lakukan adalah membiarkan
Semantic Versioning memberikan anda dengan cara masuk akal untuk merilis dan meningkatkan
paket tanpa harus bangun versi baru dari paket tergantung, menghemat
waktu dan kerumitan.

Jika semua ini terdengar diinginkan, semua yang perlu anda lakukan untuk mulai menggunakan Semantic
Versioning adalah untuk menyatakan bahwa anda melakukannya dan kemudian mengikuti aturan. Link
ke website ini dari README anda agar orang lain tahu aturan dan bisa mendapatkan keuntungan dari
mereka.


FAQ
---

### Bagaimana saya harus berurusan dengan revisi dalam tahap pengembangan awal 0.y.z?

Hal paling sederhana untuk dilakukan adalah mulai rilis pengembangan awal Anda di 0.1.0
dan kemudian kenaikan versi minor untuk setiap rilis berikutnya.

### Bagaimana saya tahu kapan harus merilis 1.0.0?

Jika perangkat lunak Anda sedang digunakan dalam produksi, mestinya mungkin sudah menjadi
1.0.0. Jika Anda memiliki API yang stabil di mana pengguna telah tergantung, anda seharusnya
menjadi 1.0.0. Jika Anda khawatir banyak tentang kompatibilitas sebelumnya, anda harus
mestinya sudah menjadi 1.0.0.

### Apakah ini tidak menyurutkan perkembangan pesat dan iterasi cepat?

Versi Major nol adalah semua tentang perkembangan pesat. Jika Anda mengubah API
setiap hari anda harus tetap dalam versi 0.y.z atau memisahkan
cabang development yang bekerja pada versi utama berikutnya.

### Jika segala perubahan kecil sebelumnya tidak kompatibel pada API publik memerlukan benturan versi major, akankah saya berakhir pada versi 42.0.0 sangat cepat?

Ini adalah pertanyaan dari development yang bertanggung jawab dan pandangan ke depan. Perubahan
tidak kompatibel tidak harus diperkenalkan enteng untuk software yang memiliki banyak
kode tergantung. Biaya yang harus dikeluarkan untuk meng-upgrade bisa menjadi signifikan.
Harus bertemu versi utama untuk merilis perubahan yang tidak kompatibel berarti Anda akan
memikirkan dampak dari perubahan, dan mengevaluasi rasio biaya/manfaat
terlibat.

### Mendokumentasikan seluruh API publik terlalu banyak pekerjaan!

Ini adalah tanggung jawab Anda sebagai developer profesional untuk mendokumentasikan dengan benar
perangkat lunak yang dimaksudkan untuk digunakan oleh orang lain. Mengelola kompleksitas
perangkat lunak sangat penting dari menjaga proyek efisien, dan itu sulit untuk dilakukan jika
tidak ada yang tahu bagaimana menggunakan perangkat lunak Anda, atau metode
apa yang aman untuk memanggil.
Di jangka panjang, Semantic Versioning, dan desakan pada API publik didefinisikan dengan baik dapat menjaga semua orang dan semuanya berjalan lancar.

### Apa yang harus saya lakukan jika saya tak sengaja merilis perubahan kompatibel sebelumnya sebagai versi minor?

Begitu Anda menyadari bahwa Anda telah melanggar Semantic Versioning spec,
perbaiki masalah dan rilis versi minor baru yang mengoreksi masalah dan
mengembalikan kompatibilitas sebelumnya. Bahkan dalam keadaan ini, tidak dapat diterima
untuk memodifikasi rilis berversi. Jika sesuai, mencatat versi berkenaan dan
menginformasikan pengguna anda dari masalah sehingga mereka sadar versi berkenaan.

### Apa yang harus saya lakukan jika saya mengupdate dependensi sendiri tanpa mengubah API publik?

Yang akan dianggap kompatibel karena tidak mempengaruhi API publik.
Software yang secara eksplisit tergantung pada dependensi yang sama dengan paket Anda harus
memiliki spesifikasi ketergantungan mereka sendiri dan penulis akan melihat konflik apapun.
Menentukan apakah perubahan itu tingkat patch atau modifikasi tingkat minor tergantung pada apakah
Anda diperbarui dependensi Anda dalam rangka untuk memperbaiki bug atau memperkenalkan fungsi
baru. Saya biasanya akan mengharapkan kode tambahan untuk contoh terakhir, dalam hal ini jelas
selisih tingkat minor.

### Bagaimana jika saya tidak sengaja mengubah API publik dengan cara yang tidak sesuai dengan perubahan nomor versi (misalnya: Kesalahan kode memperkenalkan perubahan major dalam rilis yang tidak kompatibel dari patch)

Gunakan penilaian terbaik Anda. Jika Anda memiliki audiens yang besar yang akan secara drastis
mempengaruhi dengan cara mengubah perilaku itu kembali ke apa yang API publik maksudkan,
maka mungkin yang terbaik untuk melakukan rilis versi utama, meskipun perbaikan bisa ketat
dianggap rilis patch. Ingat, Semantic Versioning adalah semua tentang menyampaikan makna
dengan bagaimana perubahan nomor versi. Jika perubahan ini penting untuk pengguna Anda,
menggunakan nomor versi untuk memberitahu mereka.

### Bagaimana seharusnya saya menangani fungsionalitas deprecated (usang)?

Mengusangkan fungsi yang ada adalah bagian normal dari pengembangan perangkat lunak dan
seringkali diperlukan untuk membuat kemajuan ke depan. Ketika Anda mengusangkan bagian dari
API publik anda, anda harus melakukan dua hal: (1) informasi dokumentasi anda untuk membiarkan
pengguna tahu tentang perubahan, (2) mengeluarkan rilis minor baru dengan keusangan tersebut
di tempat. Sebelum anda benar-benar menghapus fungsi dalam rilis utama baru
harus ada setidaknya satu rilis minor yang berisi keusangan sehingga
pengguna dapat dengan lancar transisi ke API baru.

### Apakah SemVer memiliki batas ukuran pada string versi?

Tidak, tapi gunakan penilaian yang baik. 255 karakter string untuk versi mungkin berlebihan,
misalnya. Sistem tertentu dapat membatasi mereka sendiri pada ukuran string.

### Apakah "v1.2.3" adalah versi semantik?

Bukan, "v1.2.3" bukan merupakan versi semantik. Namun, awalan versi semantic
dengan "v" adalah cara yang umum (pada bahasa Inggris) untuk menunjukkan itu adalah nomor versi.
Menyingkat "versi" sebagai "v" sering terlihat dengan kontrol versi. Contoh:
`git tag v1.2.3 -m "Release version 1.2.3"`, dalam hal ini "V1.2.3" adalah nama tag
dan versi semantiknya adalah "1.2.3".


Tentang
-----

Spesifikasi Semantic Versioning ditulis oleh [Tom
Preston-Werner] (http://tom.preston-werner.com), penemu Gravatars dan
salah seorang pendiri GitHub.

Jika Anda ingin meninggalkan umpan balik, silakan [membuka masalah pada
GitHub] (https://github.com/mojombo/semver/issues).


Lisensi
-------

Creative Commons - CC BY 3.0
http://creativecommons.org/licenses/by/3.0/
