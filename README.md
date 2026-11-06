# Ruang Semester

Planner sederhana untuk mahasiswa yang ingin mengatur jadwal mingguan dan tenggat tugas tanpa akun. Data tersimpan di browser pada perangkat yang digunakan.

## Fitur

- Tambah jadwal mingguan dengan hari, waktu, dan lokasi; jadwal yang bertabrakan pada hari yang sama ditolak.
- Tambah tugas dengan tanggal tenggat dan mata kuliah opsional; tandai selesai, hapus, dan filter status.
- Ekspor dan impor cadangan JSON dengan validasi sebelum penggantian data.
- Tata letak responsif dan kontrol HTML yang dapat difokuskan lewat keyboard.

## Menjalankan

Unduh repository dan buka `index.html` di browser modern. Browser harus mendukung JavaScript, localStorage, Blob, dan `crypto.randomUUID`; untuk hasil konsisten jalankan lewat localhost atau HTTPS. Tidak ada paket eksternal untuk aplikasi. Untuk tes logika, gunakan Node.js 20+ dan jalankan `npm test`.

## Batas versi awal

Jadwal berlaku setiap minggu dan hanya mendeteksi bentrok waktu di hari yang sama, belum mendukung rentang semester atau jadwal yang melewati tengah malam. Kalender bulanan, edit jadwal/tugas, notifikasi, pengulangan tugas dan sinkronisasi belum tersedia. Menghapus mata kuliah dengan tugas terkait ditolak hingga tugas terkait dihapus. Impor mengganti seluruh data setelah konfirmasi dan dibatasi 2 MB; simpan salinan sebelum mengimpor.

Penyimpanan browser dapat hilang atau tidak tersedia, termasuk saat data situs dibersihkan. Tidak ada enkripsi; hindari informasi sensitif. Tidak ada akun atau server. Pengujian screen reader dan kompatibilitas semua browser belum diaudit. Proyek ini dibangun dengan bantuan OpenAI Codex.

## Kontribusi

Jelaskan masalah yang direproduksi dan jalankan `npm test` sebelum mengusulkan perubahan. Jangan memasukkan data mahasiswa asli ke contoh atau laporan publik. Lisensi MIT.

## English summary

A local-first student planner for recurring weekly classes and task deadlines, with same-day conflict checks and validated JSON backup. Monthly calendar and editing are future work.
