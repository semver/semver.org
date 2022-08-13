---
title: Versi Semantik 2.0.0
language: id
redirect_from: /lang/id/
author: Aditya Purwa
---

Versi Semantik 2.0.0
==============================

Ringkasan
-------

Versi semantik ditulis dalam bentuk MAJOR.MINOR.PATCH, dengan:

1. Tambah angka versi MAJOR jika membuat perubahan API yang tidak lagi cocok dengan versi sebelumnya.
2. Tambah angka versi MINOR jika menambah fitur tanpa membuat versi lama tidak bisa digunakan.
3. Tambah angka versi PATCH jika ada perbaikan bug tanpa membuat versi lama tidak bisa digunakan.

Tambahan label dan versi sebelum rilis atau info tambahan tersedia sebagai ekstensi dari format
MAJOR.MINOR.PATCH.

Pendahuluan
------------

Dalam pengembangan perangkat lunak, sering terjadi permasalahan "dependency hell".
Semakin besar sistem yang dibuat dan semakin banyak modul yang digunakan sistem kita,
semakin sering permasalahan ini akan terjadi.

Dalam sistem yang saling terkait, merilis versi baru dari sebuah modul bisa menjadi mimpi buruk.
Jika spesifikasi dependensi sistem terlalu ketat, bisa jadi sistem kita tidak bisa dikembangkan
lagi. Jika spesifikasi dependensi sistem terlalu bebas, semakin sulit untuk mengatur versi mana
yang bisa digunakan dengan versi yang lain. Situasi inilah yang disebut dengan "dependency hell".

Sebagai solusi permasalahan ini, saya ajukan sebuah standar yang bisa digunakan sebagai
dasar untuk menentukan bagaimana cara menentukan versi, dan bagaimana cara menaikkan angka-angka
di versi tersebut. Aturan ini hanyalah dasar, dan tidak untuk membatasi standar versi yang 
sebelumnya sudah digunakan.

Supaya standar ini bisa bermanfaat, pertama kalian harus menentukan API publik, titik
dimana kalian mulai menggunakan standar ini. Setelah ditentukan, setiap rilis
versi bisa kalian komunikasikan dengan dokumentasi, dan secara langsung melalui angka versi
tersebut. Pembetulan bug menaikkan angka patch, penambahan fitur menaikkan angka minor, perubahan
yang membuat versi lama tidak bisa digunakan menaikkan angka major.

Standar ini bernama "Pemberian Versi Semantik", dengan standar ini, setiap orang yang melihat
angka versi bisa tahu secara umum apa yang berubah dengan sistem tersebut.

Spesifikasi Versi Semantik (VerSem)
------------------------------------------

Kata HARUS, TIDAK BOLEH, DIBUTUHKAN, SEHARUSNYA, JANGAN SAMPAI, SEBAIKNYA, SEBAIKNYA TIDAK,
DIREKOMENDASIKAN, BISA, dan OPSIONAL di dokumen ini sesuai dengan [RFC 2119](http://tools.ietf.org/html/rfc2119).

1. Perangkat lunak dengan Versi Semantik harus menentukan API public. Bisa
dijelaskan dengan kode, atau ditulis di dokumentasi, ditulis dengan jelas dan akurat.

2. Versi HARUS ditulis dalam bentuk X.Y.Z, dengan X, Y, Z bilangan bulat positif, dan TIDAK
BOLEH didahului angka 0 (contoh 01.02.03). X adalah versi MAJOR, Y adalah minor, dan Z adalah patch.

3. Setelah versi dirilis, isi dari versi tersebut TIDAK BOLEH dirubah. Setiap perubahan HARUS
merilis versi baru.

4. Versi major 0 (0.y.z) adalah untuk pengembangan awal, saat banyak perubahan bisa terjadi. API publik
dianggap tidak stabil di versi ini.

5. Versi 1.0.0 adalah titik awal API publik, setiap versi baru ditulis berdasarkan versi ini.

6. Versi patch Z (x.y.Z | x > 0) HARUS dinaikkan jika ada perbaikan bug tanpa menambah fitur.

7. Versi minor Y (x.Y.z | x > 0) HARUS dinaikkan jika ada fitur baru, atau ada fitur lama
yang yang sudah usang. Versi ini BISA dinaikkan jika ada tambahan fungsionalitas substansial atau terjadi peningkatan. Versi ini BISA diubah bersama dengan versi patch. Versi patch HARUS dikembalikan ke angka 0 jika versi minor dinaikkan.

8. Versi major X (X.y.z | X > 0) HARUS dinaikkan jika ada perubahan yang membuat versi baru
tidak kompatibel dengan versi lama, seperti menghapus fitur lama, menambah fitur baru yang tidak bisa
digunakan di versi lama, BISA diubah bersama dengan versi patch dan minor, jika versi major dinaikkan, maka versi minor dan patch harus dikembalikan ke angka 0.

9. Versi sebelum rilis BISA ditulis dengan menambahkan garis dan
bisa dipisah dengan titik tepat setelah versi patch. Versi sebelum rilis HARUS ditulis dengan
huruf ASCII alfanumerik dan garis [0-9A-Za-z], TIDAK BOLEH kosong, dan angka TIDAK BOLEH
didahului dengan angka 0. Versi sebelum rilis dianggap tidak stabil dan dikesampingkan jika ada versi yang stabil. Contoh: 1.0.0-alpha, 2.3.1-beta.

10. _Build Metadata_ BISA ditulis setelah versi sebelum rilis didahului dengan tanda tambah
dan bisa dipisah dengan titik. _Build Metadata_ HARUS ditulis dengan huruf ASCII alfanumerik dan garis
[0-9A-Za-z]. _Build Metadata_ TIDAK BOLEH kosong. _Build Metadata_ merupakan ID dari hasil build, dan dikesampingkan jika ada versi sebelum rilis atau versi yang lebih stabil. Contoh: 1.0.0-alpha+1, 1.5.2+3312

11. Penentuan versi mana yang didahulukan diurutkan berdasarkan versi stabil, lalu versi sebelum rilis, dan versi dengan _Build Metadata_. Jika ada versi stabil yang sama, maka diambil versi dengan angka paling tinggi. Contoh 2.0.0 lebih didahulukan dari 1.0.0. Jika ada versi sebelum rilis, maka diambil versi yang stabil terlebih dahulu. Contoh, 2.0.0 lebih didahulukan dari 2.0.0-alpha.

Kenapa Menggunakan Pemberian Versi Semantik
----------------------------

Versi Semantik bukanlah ide baru yang revolusioner, faktanya, kalian mungkin sudah
menggunakan standar ini, hanya saja tidak terlalu ketat. Masalahnya, jika tidak diatur dengan ketat
akan terjadi permasalah seperti "dependency hell" di atas. Tanpa ada standar, maka pengatur kebutuhan sistem seperti NPM, Composer, tidak akan bisa bekerja dengan baik. Dengan adanya standar ini, bisa lebih mudah dalam mengatur versi dan pengatur kebutuhan sistem bisa bekerja lebih baik.

Contoh sederhana berikut ini menunjukkan manfaat Pemberian Versi Semantik untuk menghilangkan "dependency hell". 
Misalkan ada sebuah modul bernama "MobilPemadamKebakaran". Modul "MobilPemadamKebakaran" membutuhkan modul 
lain bernama "Tangga". Pada waktu "MobilPemadamKebakaran" dibuat, "Tangga" memiliki versi 3.1.0.
Dengan menggunakan Pemberian Versi Semantik, "MobilPemadamKebakaran" bisa dengan yakin menggunakan
modul "Tangga" selama modul tersebut mempunyai versi antara 3.1.0 sampai dengan sebelum versi 4.0.0.

Pemberian Versi Semantik adalah aturan baku yang bisa diikuti atau tidak diikuti, dan tugas dari standar pemberian versi semantik hanyalah untuk membantu supaya pemberian versi bisa lebih jelas.

Jika menurut kalian aturan baku ini bagus, kalian bisa mulai menggunakan pemberian versi semantik. Tautkan situs ini dalam README kalian supaya orang lain bisa tahu mengenai aturan ini dan mulai menggunakannya juga.

Pertanyaan Yang Sering Diajukan
---

### Bagaimana memulai versi pengembangan 0.y.z?

Paling mudah adalah memulai dengan versi 0.1.0.

### Kapan harus dirilis versi 1.0.0?

Ketika sistem yang dikembangkan sudah stabil dan digunakan dalam lingkungan produksi, kalian bisa
mulai menentukannya dengan versi 1.0.0.

### Bukankah standar ini mencegah perkembangan yang cepat?

Versi 0.1.0 adalah tempat dimana banyak perubahan terjadi, jadi standar ini tidak mencegah perkembangan yang cepat.

### Jika perubahan yang tidak membuat versi lama tidak bisa dipakai sangat banyak, bukankah berarti nanti dengan cepat versi kita membengkan menjadi seperti versi 100.0.0?

Ini lebih ke permasalahan pengembangan, jika pengembangan dilakukan dengan seksama, maka seharusnya tidak terjadi perubahan yang terlalu signifikan dalam waktu yang cepat.

### Terlalu merepotkan!

Sudah tanggung jawab pengembang untuk memastikan sistemnya bisa digunakan dengan baik dan mudah. Pemberian Versi Semantik hanya memandu orang untuk konsisten dan bisa bekerja sama dengan baik.

### Bagaimana jika secara tidak sengaja membuat perubahan yang menjadikan versi lama tidak bisa dipakai?

Langsung ganti perubahan tersebut dan kembalikan supaya masih bisa digunakan versi lama dan naikkan versi minor.

### Bagaimana jika saya merubah kebutuhan sistem tanpa merubah API publik?

Seharusnya tidak berpengaruh, karena kebutuhan sistem anda sudah memiliki versi sendiri, dan API publik anda seharusnya berfungsi sebaga jembatan atau hanya sekedar memanfaatkan fitur dari sistem-sistem luar tersebut.

### Bagaimana jika perubahan yang terjadi ternyata sangat besar dan sudah dirilis di versi patch?

Gunakan kebijakan terbaik kalian, jika ada pengguna sistem kalian yang sangat besar, maka lebih
baik segera rilis versi major, meskipun perubahannya tidak begitu mencolok. Dengan ini pengguna
sistem bisa lebih tahu tentang perubahan yang ada di sistem. Ingat, Versi Semantik hanyalah standar sebagai media untuk memberitahu bahwa sistem yang ada sudah berubah dengan batasan-batasan tertentu.

### Bagaimana jika ada fitur yang usang?

Fitur yang usang bisa kalian jelaskan di dokumentasi sehingga pengguna sistem bisa sedikit demi sedikit beradaptasi dengan fitur yang usang setiap ada perubahan versi minor, jika kalian sudah siap menghapus fitur yang usang, hapus fitur tersebut di perubahan versi major.

### Apakah Versi Semantik punya batasan jumlah karakter dalam versi?

Tidak ada, tapi sebaiknya gunakan saja secukupnya. Versi sepanjang 255 terlalu banyak dan membuat pengguna kesulitan untuk membacanya.

Tentang
-----

Spesifikasi Versi Semantik dibuat oleh [Tom Preston-Werner](http://tom.preston-werner.com), pembuat Gravatars dan
cofounder dari GitHub.

Translasi Bahasa Indonesia ditulis oleh [Aditya Purwa](https://adityamyria.wordpress.com) dan dikoreksi oleh
[Christian B. Wibowo](https://github.com/cwibowo).

Untuk saran dan kritik, [buka issue di GitHub](https://github.com/mojombo/semver/issues).

Lisensi
-------

[Creative Commons ― CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)
