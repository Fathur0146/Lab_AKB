# Aplikasi Daftar Mahasiswa - Expo Router

Sebuah aplikasi mobile sederhana yang dibuat dengan React Native dan Expo Router. Aplikasi ini menampilkan daftar mahasiswa dari data lokal dan memungkinkan pengguna untuk melihat detail setiap mahasiswa dengan menekan nama mereka dalam daftar.

## ✨ Fitur Utama

-   **Daftar Mahasiswa**: Menampilkan 10 nama mahasiswa yang bersumber dari file data lokal.
-   **Navigasi ke Detail**: Pengguna dapat menekan nama mahasiswa untuk bernavigasi ke halaman detail. Setiap item daftar dilengkapi ikon untuk UX yang lebih baik.
-   **Halaman Detail Dinamis**: Halaman detail secara dinamis menampilkan informasi lengkap (Nama, NIM, dan Foto) dari mahasiswa yang dipilih. Judul halaman juga berubah sesuai nama mahasiswa.
-   **Navigasi Modern**: Menggunakan Expo Router untuk menangani navigasi berbasis file, termasuk:
    -   **Navigasi Stack**: Alur dari daftar ke detail menggunakan fungsionalitas navigator `Stack`.
    -   **Rute Dinamis**: Menggunakan rute dinamis (`/user/[id]`) untuk membuat halaman detail yang fleksibel.

---

## 🚀 Teknologi yang Digunakan

-   **React Native**: Kerangka kerja utama untuk membangun aplikasi mobile.
-   **Expo**: Platform untuk mempermudah pengembangan dan build aplikasi React Native.
-   **Expo Router**: Sistem navigasi berbasis file untuk mengatur alur halaman.
-   **TypeScript**: Menambahkan tipe statis pada JavaScript untuk kode yang lebih robust.
-   **`@expo/vector-icons`**: Pustaka untuk menampilkan ikon di dalam daftar.

---

## 📂 Struktur Proyek

Proyek ini menggunakan struktur navigasi Stack yang direkomendasikan oleh Expo Router, dengan data yang dipisahkan ke dalam folder `students`.

```
/
├── app/
│   ├── user/
│   │   └── [id].tsx     # Halaman dinamis untuk detail mahasiswa
│   ├── _layout.tsx      # Layout utama (root) yang mengatur Stack Navigator
│   └── index.tsx        # Halaman utama yang menampilkan daftar mahasiswa
├── students/
│   └── students.ts      # File data lokal yang berisi daftar mahasiswa
└── README.md            # File ini
```

---

## ⚙️ Instalasi dan Menjalankan

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

4.  **Jalankan Aplikasi**
    ```bash
    npx expo start
    ```
    Setelah itu, pindai kode QR yang muncul menggunakan aplikasi Expo Go di perangkat seluler Anda.

---

## 👨‍💻 Dibuat oleh

-   **Nama**: Muh. Fathur Hidayat
-   **NIM**: 105841113322