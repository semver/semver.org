---
title: Pemversian Semantik 2.0.0
language: id
---

Pemversian Semantik 2.0.0
=========================

Ringkasan
---------

Versi semantik ditulis dalam bentuk MAJOR.MINOR.PATCH, dengan:

1. Tambah angka versi MAJOR jika membuat perubahan API yang tidak lagi cocok dengan versi sebelumnya.
2. Tambah angka versi MINOR jika menambah fitur tanpa membuat versi lama tidak bisa digunakan.
3. Tambah angka versi PATCH jika ada perbaikan bug tanpa membuat versi lama tidak bisa digunakan.

Tambahan label dan versi sebelum rilis atau info tambahan tersedia sebagai ekstensi dari format
MAJOR.MINOR.PATCH.

Pendahuluan
------------

Dalam pengembangan perangkat lunak, sering terjadi permasalahan *dependency hell*. Semakin besar sistem yang dibuat dan semakin banyak modul yang digunakan sistem kita, semakin sering permasalahan ini akan terjadi.

Dalam sistem yang saling terkait, merilis versi baru bisa menjadi mimpi buruk. Jika spesifikasi dependensi sistem terlalu ketat, bisa jadi sistem kita tidak bisa dikembangkan lagi. Jika spesifikasi dependensi sistem terlalu bebas, semakin sulit untuk berasumsi versi mana yang bisa digunakan dengan versi yang lain. *Dependency hell* adalah saat Anda berada pada satu atau dua masalah ini, yang menahan Anda untuk bergerak maju dengan aman dan mudah.

Sebagai solusi permasalahan ini, kami mengusulkan seperangkat aturan dan persayaratan sederhana yang menentukan bagaimana nomor versi diberikan dan bertambah. Aturan-aturan ini didasarkan pada, namun tidak terbatas pada, praktik-praktik yang sudah ada pada perangkat lunak sumber terbuka dan tertutup. Agar sistem ini dapat bekerja, Anda harus mengumumkan API publik terlebih dahulu. Ini dapat terdiri dari dokumentasi atau diberlakukan oleh kode itu sendiri. Apapun itu, API ini harus jelas dan tepat. Setelah Anda mengidentifikasi API publik Anda, Anda mengomunikasikan perubahan pada API tersebut dengan penambahan spesifik pada nomor versi Anda. Pertimbangkan format versi X.Y.Z (Major.Minor.Patch). Perbaikan bug yang tidak memengaruhi API tersebut akan menambah versi *patch*, penambahan/perubahan API yang kompatibel dengan versi sebelumnya akan menambah versi *minor*, dan perubahan API yang tidak kompatibel dengan versi sebelumnya akan menambah versi major.

Standar ini bernama "Pemversian Semantik". Dengan skema ini, setiap orang yang melihat angka versi bisa tahu secara umum apa yang berubah dengan sistem tersebut.

Spesifikasi Pemversian Semantik (SemVer)
----------------------------------------

Kata "HARUS", "TIDAK BOLEH", "DIBUTUHKAN", "SEHARUSNYA", "JANGAN SAMPAI", "SEBAIKNYA", "SEBAIKNYA TIDAK", "DIREKOMENDASIKAN", "BISA" di dokumen ini sesuai dengan [RFC 2119](https://tools.ietf.org/html/rfc2119).

1. Perangkat lunak dengan Pemversian Semantik HARUS menentukan API public. Bisa dijelaskan dengan kode, atau ditulis di dokumentasi saja. Apapun itu HARUS ditulis dengan jelas dan akurat.

1. Versi normal HARUS ditulis dalam bentuk X.Y.Z, dengan X, Y, dan Z adalah bilangan bulat nonnegatif, dan TIDAK BOLEH didahului angka 0 (contoh 01.02.03). X adalah versi *major*, Y adalah *minor*, dan Z adalah *patch*. Setiap elemen HARUS bertambah secara numerik dengan kenaikan sebesar satu. Contohnya: 1.9.0 -> 1.10.0 -> 1.11.0

1. Setelah sebuah paket berversi dirilis, isi dari versi tersebut TIDAK BOLEH diubah. Setiap perubahan HARUS dirilis sebagai versi baru.

1. Versi *major* 0 (0.y.z) adalah untuk pengembangan awal. Apapun BISA bisa berubah kapan saja. API publik SEBAIKNYA
dianggap tidak stabil di versi ini.

1. Versi 1.0.0 adalah titik awal API publik. Cara nomor versi ini dinaikkan setelah rilis ini adalah tergantung dengan API publik ini dan bagaimana ia berubah.

1. Versi *patch* Z (x.y.Z | x > 0) HARUS dinaikkan jika ada perbaikan bug yang kompatibel dengan versi lama. Sebuah perbaikan bug didefinisikan sebagai perubahan internal yang memperbaiki perilaku yang salah.

1. Versi *minor* Y (x.Y.z | x > 0) HARUS dinaikkan jika ada fitur baru yang kompatibel dengan versi lama dalam API publik. Ini HARUS dinaikkan jika sebuah fungsionalitas API publik dibuat usang. Ini BISA dinaikkan jika ada tambahan fungsionalitas substansial atau terjadi peningkatan di dalam kode privat. Ini BISA diubah bersama dengan perubahan tingkat *patch*. Versi *patch* HARUS dikembalikan ke angka 0 jika versi *minor* dinaikkan.

1. Versi *major* X (X.y.z | X > 0) HARUS dinaikkan jika ada perubahan yang membuat versi baru tidak kompatibel dengan versi lama pada API publik. Ini juga BISA diubah bersama dengan perubahan tingkat *patch* dan *minor*. Versi *minor* dan *patch* HARUS dikembalikan ke angka 0 jika versi *major* dinaikkan.

1. Versi prarilis BISA ditulis dengan menambahkan tanda hubung dan rangkaian pengenal dengan pemisah titik tepat setelah versi *patch*. Pengenal ini HARUS terdiri dari hanya alfanumerik ASCII dan tanda hubung [0-9A-Za-z]. Pengenal TIDAK BOLEH kosong. Pengenal numerik TIDAK BOLEH didahului angka 0. Versi prarilis memiliki presendens yang lebih rendah dibandingkan dengan versi normal yang terkait. Versi prarilis dianggap tidak stabil dan mungkin tidak memuaskan persyaratan kompatibilitas yang dimaksudkan seperti yang ditunjukkan oleh versi normal yang terkait. Contoh: 1.0.0-alpha, 1.0.0-alpha.1, 1.0.0-0.3.7, 1.0.0-x.7.z.92, 1.0.0-x-y-z.\-\-.

1. *Build metadata* BISA ditulis didahului dengan tanda tambah dan rangkaian pengenal dengan pemisah titik setelah versi *patch* atau prarilis. *Build metadata* HARUS ditulis dengan huruf ASCII alfanumerik dan tanda hubung [0-9A-Za-z]. Pengenal ini HARUS terdiri dari hanya alfanumerik ASCII dan tanda hubung [0-9A-Za-z]. Pengenal TIDAK BOLEH kosong. *Build metadata* HARUS diabaikan saat menentukan presedens versi. Dengan begitu, dua versi yang berbada hanya di *build metadata*-nya memiliki preseden yang sama. Contoh: 1.0.0-alpha+001, 1.0.0+20130313144700, 1.0.0-beta+exp.sha.5114f85, 1.0.0+21AF26D3\-\-\-\-117B344092BD.

1. Presedens mengacu pada bagaimana versi-versi dibandingkan satu sama lain ketika diurutkan.

   1. Presedens HARUS dihitung dengan memisahkan versi menjadi pengenal *major*, *minor*, *patch*, dan prarilis dalam urutan tersebut (*Build metadata* tidak diperhitungkan dalam pengurutan).

   1. Presedens ditentukan oleh perbedaan pertama saat membandingkan masing-masing
      pengenal ini dari kiri ke kanan sebagai berikut: *Major*, *minor*, dan *patch*
      selalu dibandingkan secara numerik.

      Contoh: 1.0.0 < 2.0.0 < 2.1.0 < 2.1.1.

   1. Saat versi *major*, *minor*, dan *patch* sama, versi prarilis lebih rendah
      memiliki presedens lebih rendah dibandingkan dengan versi normal:

      Contoh: 1.0.0-alpha < 1.0.0.

   1. Prioritas untuk dua versi prarilis dengan versi *major*, *minor*, dan
      *patch* HARUS ditentukan dengan membandingkan setiap pengenal yang dipisahkan titik
      dari kiri ke kanan hingga ditemukan perbedaan sebagai berikut:

      1. Pengenal yang hanya terdiri dari angka dibandingkan secara numerik.

      2. Pengenal dengan huruf atau tanda hubung dibandingkan secara leksikal dalam urutan pengurutan ASCII.

      3. Pengenal numerik selalu memiliki presedens yang lebih rendah daripada pengenal non-numerik pengenal non-numerik.

      4. Suatu set yang lebih besar dari bidang prarilis memiliki presedens yang lebih tinggi daripada yang set yang lebih kecil, jika semua pengenal sebelumnya sama.

      Contoh: 1.0.0-alpha < 1.0.0-alpha.1 < 1.0.0-alpha.beta < 1.0.0-beta < 1.0.0-beta.2 < 1.0.0-beta.11 < 1.0.0-rc.1 < 1.0.0.

Kenapa Menggunakan Pemversian Semantik?
---------------------------------------

Ini bukanlah ide baru yang revolusioner. Faktanya, kalian mungkin sudah menggunakan standar ini, hanya saja tidak terlalu ketat. Masalahnya, "tidak teralu ketat" saja tidak cukup bagus. Tanpa kepatuhan terhadap beberapa jenis spesifikasi formal, nomor versi adalah pada dasarnya tidak berguna untuk manajemen dependensi. Dengan memberikan nama dan definisi yang jelas definisi yang jelas untuk ide-ide tersebut, mengkomunikasikan maksud Anda kepada pengguna perangkat lunak Anda menjadi lebih mudah. Setelah maksud ini jelas, spesifikasi ketergantungan yang fleksibel (tetapi tidak terlalu fleksibel) akhirnya dapat dibuat.

Contoh sederhana ini menunjukkan manfaat Pemversian Semantik untuk menghilangkan "*dependency hell*." Misalkan ada sebuah modul bernama "MobilPemadamKebakaran". Modul "MobilPemadamKebakaran" membutuhkan modul lain bernama "Tangga". Pada waktu "MobilPemadamKebakaran" dibuat, "Tangga" memiliki versi 3.1.0. Dengan menggunakan Pemversian Semantik, "MobilPemadamKebakaran" bisa dengan yakin menggunakan modul "Tangga" selama modul tersebut mempunyai versi antara 3.1.0 sampai dengan sebelum versi 4.0.0.

Sebagai pengembang yang bertanggung jawab, tentu saja Anda ingin memverifikasi bahwa peningkatan paket berfungsi seperti yang diiklankan. Dunia nyata tidaklah pasti; tidak ada yang bisa kita lakukan selain waspada. Yang bisa Anda lakukan adalah membiarkan Pemversian Semantik memberi Anda cara yang masuk akal untuk merilis dan memutakhirkan paket tanpa harus menggulirkan versi baru dari paket dependen, membuat Anda menghemat waktu dan kerumitan.

Jika menurut kalian aturan ini bagus, cara untuk memulai menggunakan pemversian semantik adalah dengan menautkan situs ini dalam README kalian supaya orang lain bisa tahu mengenai aturan ini dan mulai menggunakannya juga.

Pertanyaan Yang Sering Diajukan
-------------------------------

### Bagaimana cara menangani revisi dalam fase pengembangan awal 0.y.z?

Hal yang paling sederhana untuk dilakukan adalah memulai rilis pengembangan awal Anda pada 0.1.0 dan kemudian meningkatkan versi minor untuk setiap rilis berikutnya.

### Bagaimana saya tahu kapan merilis 1.0.0?

Jika perangkat lunak Anda digunakan dalam produksi, mungkin perangkat lunak Anda sudah versi 1.0.0. Jika Anda memiliki API yang stabil yang menjadi andalan pengguna, Anda harusnya sudah pada 1.0.0. Jika Anda sangat mengkhawatirkan kompatibilitas versi lama, Anda mungkin sudah pada 1.0.0.

### Bukankah standar ini mencegah perkembangan yang cepat?

Versi *major* nol adalah tentang pengembangan yang cepat. Jika Anda mengubah API setiap hari, Anda harus tetap berada di versi 0.y.z atau di pengembangan terpisah yang bekerja pada versi *major* berikutnya.

### Jika perubahan terkecil yang tidak kompatibel dengan API publik memerlukan kenaikkan versi *major*, bukankah saya akan berakhir di versi 42.0.0 dengan sangat cepat?

Ini adalah pertanyaan tentang pengembangan yang bertanggung jawab dan pandangan ke depan. Perubahan yang tidak kompatibel tidak boleh diperkenalkan dengan mudah ke perangkat lunak yang memiliki banyak kode dependen. Biaya yang harus dikeluarkan untuk meng-upgrade bisa sangat besar. Kewajiban mengganti versi utama untuk merilis perubahan yang tidak kompatibel seharusnya membuat Anda memikirkan dampak dari perubahan Anda, dan mengevaluasi perbandingan biaya dan manfaat yang terkait.

### Mendokumentasikan seluruh API publik sangatlah merepotkan!

Sudah tanggung jawab Anda sebagai pengembang profesional untuk mendokumentasikan perangkat lunak untuk digunakan oleh orang lain dengan benar. Mengelola kompleksitas perangkat lunak adalah bagian yang sangat penting dalam menjaga proyek tetap efisien, dan itu sulit dilakukan jika tidak ada yang tahu cara menggunakan perangkat lunak Anda, atau metode apa yang aman untuk dihubungi. Dalam jangka panjang, Pemversian Semantik, dan desakan pada API publik yang terdefinisi dengan baik dapat membuat semua orang dan segala sesuatu berjalan dengan lancar.

### Bagaimana jika secara tidak sengaja membuat perubahan yang menjadikan versi lama tidak bisa dipakai?

Setelah Anda menyadari bahwa Anda telah melanggar spesifikasi Pemversian Semantik, perbaiki dan rilis versi *minor* baru yang memperbaiki masalah dan mengembalikan kompatibilitas versi lama. Bahkan dalam kondisi ini, memodifikasi rilis yang telah diberi versi adalah dilarang. Jika mau, dokumentasikan versi yang bermasalah dan memberi tahu pengguna Anda tentang masalah tersebut sehingga mereka mengetahui versi yang bermasalah.

### Apa yang harus saya lakukan jika saya memperbarui dependensi saya sendiri tanpa mengubah API publik?

Hal tersebut dianggap kompatibel karena tidak mempengaruhi API publik. Perangkat lunak yang secara eksplisit bergantung pada dependensi yang sama dengan paket Anda harus memiliki spesifikasi dependensi mereka sendiri dan pembuatnya akan memberi tahu konflik yang ada. Menentukan apakah perubahan tersebut merupakan tingkat *patch* atau tingkat *minor*  tergantung pada apakah Anda memperbarui dependensi untuk memperbaiki *bug* atau memperkenalkan fungsionalitas baru. Kami biasanya mengharapkan kode tambahan untuk contoh yang kedua, yang dalam hal ini jelas merupakan kenaikan tingkat *minor*.

### Bagaimana jika saya secara tidak sengaja mengubah API publik dengan cara yang tidak sesuai dengan perubahan nomor versi (misalnya, kode secara tidak benar memperkenalkan perubahan besar dalam rilis patch)?

Gunakan kebijakan terbaik Anda. Jika Anda memiliki audiens yang sangat besar yang akan terpengaruh secara drastis dengan apa yang dimaksudkan oleh API publik, maka lebih baik melakukan rilis versi *major*, meskipun perbaikannya dapat sangat dianggap sebagai rilis *patch*. Ingat, Pemversian Semantik adalah segalanya tentang menyampaikan makna melalui perubahan nomor versi. Jika perubahan ini perubahan ini penting bagi pengguna Anda, gunakan nomor versi itu untuk memberi tahu mereka.

### Bagaimana cara menangani fungsionalitas yang sudah diusangkan?

Mengusangkan fungsionalitas yang ada adalah hal yang lumrah dalam pengembangan perangkat lunak dan sering kali diperlukan untuk membuat suatu kemajuan. Ketika Anda mengusangkan bagian  dari API publik Anda, Anda harus melakukan dua hal: (1) memperbarui dokumentasi Anda untuk memberi tahu pengguna tahu tentang perubahan tersebut, dan (2) mengeluarkan rilis minor baru dengan penghentian yang baru dengan pengusangan itu dibuat. Sebelum Anda benar-benar menghapus fungsionalitas dalam rilis *major* yang baru harus ada setidaknya satu rilis *minor* yang berisi pengusangan itu sehingga pengguna dapat beralih dengan lancar ke API yang baru.

### Apakah Versi Semantik punya batasan jumlah karakter dalam versi?

Tidak, tetapi gunakan kebijakan yang baik. Misalnya, versi dengan panjang 255 karakter mungkin teralu banyak. Selain itu, sistem tertentu mungkin memiliki batasan mereka sendiri pada ukuran string.

### Apakah ada *regular expression* (RegEx) yang disarankan untuk memeriksa string SemVer?

Ada dua. Satu dengan grup bernama untuk sistem yang didukung (PCRE [Perl Compatible Regular Expressions, yaitu Perl, PHP dan R], Python dan Go).

Lihat: <https://regex101.com/r/Ly7O1x/3/>

```
^(?P<major>0|[1-9]\d*)\.(?P<minor>0|[1-9]\d*)\.(?P<patch>0|[1-9]\d*)(?:-(?P<prerelease>(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+(?P<buildmetadata>[0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$
```

Dan satu lagi dengan kelompok tangkapan bernomor (jadi cg1 = *major*, cg2 = *minor*, cg3 = *patch*, cg4 = prarilis dan cg5 = *build metadata*) yang kompatibel dengan ECMA Script (JavaScript), PCRE (Perl Compatible Regular Expressions,
yaitu Perl, PHP dan R), Python dan Go.
```
^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$
```

Tentang
-------

Spesifikasi Pemversian Semantik awalnya dibuat oleh [Tom Preston-Werner](http://tom.preston-werner.com), pembuat Gravatar dan
*cofounder* dari GitHub.

Translasi Bahasa Indonesia ditulis oleh [Aditya Purwa](https://adityamyria.wordpress.com) dan dikoreksi oleh
[Christian B. Wibowo](https://github.com/cwibowo) dan [Hans5958](https://github.com/Hans5958).

Untuk saran dan kritik, silahkan [buka issue di GitHub](https://github.com/semver/semver/issues).

Lisensi
-------

[Creative Commons ― CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)
