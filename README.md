# Aplikasi Informasi Unismuh - Tugas Expo Router

Sebuah aplikasi mobile sederhana yang dibuat menggunakan React Native dan Expo Router. Aplikasi ini dirancang untuk menampilkan informasi dalam navigasi tab bar yang mudah digunakan, terdiri dari tiga halaman utama: Home, About, dan Profil.

---

## 📸 Tangkapan Layar

![Tangkapan Layar Aplikasi](./assets/screenshot.png)

*(Catatan: Pastikan Anda menempatkan file screenshot dengan nama `screenshot.png` di dalam folder `assets` agar gambar ini tampil)*

---

## ✨ Fitur Utama

Aplikasi ini memiliki tiga tab utama dengan fungsi sebagai berikut:

1.  **Tab Home**
    -   Menampilkan informasi umum mengenai **Universitas Muhammadiyah Makassar (Unismuh)**.
    -   Menyertakan deskripsi singkat, visi & misi, daftar fakultas, serta logo universitas.

2.  **Tab About**
    -   Berisi penjelasan mengenai aplikasi ini, termasuk tujuan pembuatannya sebagai tugas praktikum.
    -   Menjelaskan fungsi dari masing-masing tab yang ada (Home, About, dan Profil).

3.  **Tab Profil**
    -   Menampilkan data diri pribadi mahasiswa yang membuat aplikasi.
    -   Informasi yang ditampilkan meliputi nama lengkap, NIM, kelas, jurusan, fakultas, dan foto profil yang diambil dari aset lokal.

---

## 🚀 Teknologi yang Digunakan

-   **React Native**: Kerangka kerja utama untuk membangun aplikasi mobile.
-   **Expo**: Platform untuk mempermudah pengembangan dan build aplikasi React Native.
-   **Expo Router**: Sistem navigasi berbasis file untuk mengatur halaman dan navigasi tab bar.
-   **TypeScript**: Menambahkan tipe statis pada JavaScript untuk kode yang lebih robust.
-   **`@expo/vector-icons`**: Pustaka untuk menampilkan ikon pada tab bar.

---

## 📂 Struktur Proyek

Proyek ini menggunakan struktur navigasi tab yang direkomendasikan oleh Expo Router.


/
├── app/
│   ├── (tabs)/            # Grup untuk halaman yang akan ditampilkan di tab bar
│   │   ├── _layout.tsx    # Konfigurasi utama untuk Tab Bar
│   │   ├── home.tsx       # Halaman Home
│   │   ├── about.tsx      # Halaman About
│   │   └── profil.tsx     # Halaman Profil
│   └── _layout.tsx        # Layout utama (root) aplikasi
├── assets/
│   └── images/
│       └── foto-profil.png # Aset gambar lokal untuk foto profil
└── README.md              # File ini


---

## ⚙️ Instalasi dan Menjalankan

Untuk menjalankan proyek ini di lingkungan lokal Anda, ikuti langkah-langkah berikut:

1.  **Clone Repositori**
    ```bash
    git clone [https://github.com/Fathur0146/Lab_AKB.git]
    ```

2.  **Masuk ke Direktori Proyek**
    ```bash
    cd [Lab_AKB]
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

-   **Nama**: Muh. Fathur Hidayat
-   **NIM**: 105841113322

