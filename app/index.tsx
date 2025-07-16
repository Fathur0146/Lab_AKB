// Index.tsx
// Komponen React Native (Expo) untuk menampilkan grid 3x3 gambar interaktif.
// Setiap gambar memiliki gambar alternatif dan dapat membesar maksimal 2.0x.

import React, { useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  LayoutAnimation,
  UIManager,
  Platform,
} from "react-native";

// Aktifkan LayoutAnimation untuk Android agar animasi lebih mulus.
if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

// ==== 1. Konstanta dan Konfigurasi ====

// Hitung ukuran sel secara responsif untuk memastikan grid terlihat rapi di semua perangkat.
const screenWidth = Dimensions.get("window").width;
const cellMargin = 8;
const numberOfColumns = 3;
const cellSize = (screenWidth - cellMargin * (numberOfColumns + 1)) / numberOfColumns;

// Daftar lengkap gambar: 9 gambar utama dan 9 gambar alternatif.
const images = [
  // Alone
  {
    main: "https://picsum.photos/id/334/2304/1536",
    alt: "https://picsum.photos/id/338/367/267",
  },
  // Road
  {
    main: "https://picsum.photos/id/335/367/267",
    alt: "https://picsum.photos/id/339/367/267",
  },
  // Nature
  {
    main: "https://picsum.photos/id/324/367/267",
    alt: "https://picsum.photos/id/323/367/267",
  },
  // Transport
  {
    main: "https://picsum.photos/id/364/367/267",
    alt: "https://picsum.photos/id/363/367/267",
  },
  // Market
  {
    main: "https://picsum.photos/id/395/367/267",
    alt: "https://picsum.photos/id/398/367/267",
  },
  // Coffee
  {
    main: "https://picsum.photos/id/425/367/267",
    alt: "https://picsum.photos/id/431/367/267",
  },
  // Mountain and Bear
  {
    main: "https://picsum.photos/id/432/367/267",
    alt: "https://picsum.photos/id/433/367/267",
  },
  // Work Tools
  {
    main: "https://picsum.photos/id/491/367/267",
    alt: "https://picsum.photos/id/495/367/267",
  },
  // Wizard
  {
    main: "https://picsum.photos/id/532/367/267",
    alt: "https://picsum.photos/id/534/367/267",
  },
];

// ==== 2. Tipe Data untuk State ====
interface ImageState {
  clickCount: number; // Melacak jumlah klik pada gambar
  isAlt: boolean;     // Menentukan apakah gambar alternatif yang ditampilkan
  scale: number;      // Skala transformasi gambar saat ini
}

/**
 * @description Komponen ImageGrid menampilkan grid gambar 3x3 yang interaktif.
 * Setiap gambar dapat diklik hingga tiga kali untuk mengubah tampilan dan skala:
 * 1. Klik pertama: Mengganti gambar ke versi alternatifnya.
 * 2. Klik kedua: Memperbesar gambar menjadi 1.2x.
 * 3. Klik ketiga: Memperbesar gambar ke skala maksimum 2.0x.
 * Setelah tiga kali klik, interaksi dinonaktifkan untuk gambar tersebut.
 * @returns {React.ReactElement} Komponen grid gambar yang dapat dirender.
 */
export default function ImageGrid() {
  // State untuk mengelola status setiap gambar dalam grid (klik, gambar alternatif, skala).
  const [states, setStates] = useState<ImageState[]>(
    images.map(() => ({
      clickCount: 0,
      isAlt: false,
      scale: 1,
    }))
  );

  /**
   * @description Menangani event klik pada sebuah gambar.
   * @param {number} index - Indeks gambar yang diklik dalam array.
   */
  const handleClick = (index: number) => {
    // Terapkan animasi transisi yang halus saat state berubah.
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    setStates((prevStates) =>
      prevStates.map((item, i) => {
        // Hanya perbarui state untuk gambar yang diklik dan belum mencapai batas klik.
        if (i !== index || item.clickCount >= 3) {
          return item;
        }

        const nextClick = item.clickCount + 1;

        // Tentukan skala baru berdasarkan jumlah klik.
        let newScale = 1;
        if (nextClick === 2) newScale = 1.2;
        if (nextClick === 3) newScale = 2.0; // Batas skala maksimum adalah 2.0x

        return {
          clickCount: nextClick,
          isAlt: true, // Tampilkan gambar alternatif setelah klik pertama.
          scale: newScale,
        };
      })
    );
  };

  // ==== 3. Render Komponen ====
  return (
    <View style={styles.wrapper}>
      {images.map((img, index) => {
        const current = states[index];
        const sourceUri = current.isAlt ? img.alt : img.main;

        return (
          <TouchableOpacity
            key={index}
            onPress={() => handleClick(index)}
            style={styles.cell}
            activeOpacity={0.8}
            disabled={current.clickCount >= 3} // Nonaktifkan tombol setelah 3 kali klik.
          >
            <Image
              source={{ uri: sourceUri }}
              style={[
                styles.image,
                {
                  transform: [{ scale: current.scale }], // Terapkan skala transformasi.
                },
              ]}
              resizeMode="cover"
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

// ==== 4. StyleSheet untuk Tata Letak ====
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingHorizontal: cellMargin / 2,
    marginTop: 20,
    paddingBottom: 40,
  },
  cell: {
    width: cellSize,
    height: cellSize / (3 / 4), // Jaga rasio aspek 3:4 agar gambar proporsional.
    margin: cellMargin / 2,
    alignItems: "center",
    justifyContent: "center",
    overflow: 'hidden', // Pastikan gambar yang membesar tidak keluar dari batas sel
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});