# Laboratorium Komputasi Bergerak - Fathur

Ini adalah proyek React Native (Expo) yang dikembangkan sebagai bagian dari tugas praktikum Laboratorium Komputasi Bergerak. Proyek ini berfokus pada implementasi dan penggunaan font kustom dalam aplikasi mobile.

---

## ✨ Fitur Utama

- **Pemuatan 10 Font Kustom**: Mengimpor dan memuat 10 jenis font yang berbeda, terdiri dari:
  - **5 Font Statis**: Setiap gaya (misal: Regular, Bold) memiliki file sendiri.
  - **5 Font Variabel**: Satu file font mendukung berbagai tingkat ketebalan.
- **Splash Screen**: Menampilkan *splash screen* saat aplikasi sedang memuat font untuk memastikan font siap digunakan sebelum halaman tampil.
- **Tampilan Nama Berdasarkan Urutan**: Menampilkan daftar 10 nama mahasiswa yang ditentukan berdasarkan nomor urutan stambuk acuan.
- **Gaya Unik**: Setiap nama dalam daftar ditampilkan menggunakan `fontFamily` yang berbeda untuk mendemonstrasikan pemuatan semua font.

---

## 🚀 Teknologi yang Digunakan

- **React Native**: Kerangka kerja utama untuk membangun aplikasi mobile.
- **Expo**: Platform untuk mempermudah pengembangan dan build aplikasi React Native.
- **Expo Router**: Sistem navigasi berbasis file untuk mengatur halaman aplikasi.
- **TypeScript**: Menambahkan tipe statis pada JavaScript untuk kode yang lebih robust.
- **Git & GitHub**: Untuk kontrol versi dan manajemen kode.

---

## 📂 Struktur Proyek

```
/
├── app/                # Direktori utama untuk halaman (Expo Router)
│   ├── _layout.tsx     # Layout global, tempat font dimuat
│   └── index.tsx       # Halaman utama untuk menampilkan tugas
├── assets/
│   ├── fonts/          # Direktori untuk menyimpan semua file font kustom
│   │   ├── static/
│   │   └── variable/
└── README.md           # File ini
```

---

## ⚙️ Instalasi dan Menjalankan Proyek

Untuk menjalankan proyek ini di lingkungan lokal Anda, ikuti langkah-langkah berikut:

1.  **Clone Repositori**
    ```bash
    git clone [https://github.com/Fathur0146/Lab_AKB.git](https://github.com/Fathur0146/Lab_AKB.git)
    ```

2.  **Masuk ke Direktori Proyek**
    ```bash
    cd Lab_AKB
    ```

3.  **Install Dependencies**
    ```bash
    npm install
    ```
    _Atau jika Anda menggunakan Yarn:_
    ```bash
    yarn install
    ```

4.  **Jalankan Aplikasi**
    ```bash
    npx expo start
    ```
    Setelah itu, pindai kode QR yang muncul menggunakan aplikasi Expo Go di perangkat seluler Anda.

---

## 👨‍💻 Dibuat oleh

- **Nama**: Muh. Fathur Hidayat
- **NIM**: 105841113322