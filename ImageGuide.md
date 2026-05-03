# Panduan Optimasi Gambar - Mitra Olahraga Indonesia

Untuk memastikan website tetap berjalan cepat dan gambar tidak pecah atau "crash", ikuti panduan teknis berikut saat mengganti gambar.

## 1. Lokasi & Ukuran Gambar yang Disarankan

| Lokasi | Ukuran (px) | Aspek Rasio | Format | Kegunaan |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Headline** | 2600 x 1600 | 16:10 | WebP / JPG | Banner utama yang menyambut pengunjung. |
| **Service Cards** | 1200 x 1800 | 2:3 (Portrait) | WebP / JPG | Kartu layanan di beranda & halaman layanan. |
| **Project Showcase**| 1600 x 1000 | 16:10 / 4:3 | WebP / JPG | Galeri proyek di portofolio. |
| **Admin Settings** | 800 x 800 | 1:1 (Square) | PNG / WebP | Foto profil atau ikon kecil. |

## 2. Tips Menghindari Gambar "Crash"
1. **Gunakan Sumber Terpercaya**: Jika menggunakan link eksternal (seperti Unsplash), pastikan link tersebut permanen.
2. **Format File**: Gunakan `.webp` untuk kompresi terbaik tanpa mengurangi kualitas. Jika tidak ada, gunakan `.jpg` dengan kualitas 80%.
3. **Ukuran File**: Usahakan ukuran satu file gambar tidak melebihi **500KB - 800KB**. Gambar di atas 2MB akan memperlambat loading dan bisa menyebabkan browser "hang" pada perangkat mobile.
4. **Fallback Handling**: Website ini sudah dilengkapi dengan sistem "Fallback" otomastis. Jika link gambar rusak, sistem akan menampilkan gradien warna supaya layout tetap cantik.

## 3. Cara Menggunakan Link Unsplash
Jika Anda mencari gambar di Unsplash (unsplash.com), gunakan format URL berikut untuk performa terbaik:
`https://images.unsplash.com/[IMAGE_ID]?q=80&w=2600&auto=format&fit=crop`
Ganti `[IMAGE_ID]` dengan ID unik dari foto yang Anda pilih.

---
*Dokumen ini dibuat untuk membantu tim Admin mengelola konten visual secara mandiri.*
