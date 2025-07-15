// ImageGrid.tsx
// Komponen React Native (Expo) untuk menampilkan grid 3x3 gambar interaktif.
// Setiap gambar memiliki gambar alternatif dan dapat membesar maksimal 2.4x.

import React, { useState } from "react";
import { View, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

// ==== 1. Hitung ukuran sel secara responsif (agar grid terlihat rapi di semua perangkat) ====
const screenWidth = Dimensions.get("window").width;
const cellMargin = 8;
const cellSize = (screenWidth - cellMargin * 4) / 3;

// ==== 2. Daftar gambar: 9 gambar utama dan 9 gambar alternatif ====
const images = [
  //Goblin
  {
    main: "https://i.pinimg.com/1200x/6f/0a/ea/6f0aea124653486be5fe605851a8d45f.jpg",
    alt: "https://i.pinimg.com/736x/15/d2/50/15d250b65ac9c653b1366656693dcbbb.jpg",
  },
  //Archer Queen
  {
    main: "https://i.pinimg.com/736x/c1/84/ec/c184ecd5aced13a9367d991527941824.jpg",
    alt: "https://i.pinimg.com/736x/ab/a0/1a/aba01aaf922c1d3efe58c8e3ebce20fd.jpg",
  },
  //Dragon
  {
    main: "https://i.pinimg.com/736x/3f/dc/bc/3fdcbcc09d97f02048228d1f68b5364a.jpg",
    alt: "https://i.pinimg.com/736x/3f/b7/b7/3fb7b713f5b225deab5b350175e5ce8f.jpg",
  },
  //Minion
  {
    main: "https://i.pinimg.com/736x/1a/5c/6b/1a5c6b26f462937b3c0aa02d3c4ab79a.jpg",
    alt: "https://i.pinimg.com/736x/9c/1c/14/9c1c1471d3f346b2e942e1bf122a0c1c.jpg",
  },
  //Giant
  {
    main: "https://i.pinimg.com/736x/dd/fe/a9/ddfea918dce401abdd0317317b729051.jpg",
    alt: "https://i.pinimg.com/736x/db/52/96/db5296f97144c1f6a0523a2dfecad2ac.jpg",
  },
  //Barbarian King
  {
    main: "https://i.pinimg.com/1200x/a5/db/37/a5db37a0c51325c1ea8fda2eba6fb7b7.jpg",
    alt: "https://i.pinimg.com/736x/00/9c/25/009c2579203634f322b933185af0dfba.jpg",
  },
  //Wall Breaker
  {
    main: "https://i.pinimg.com/736x/09/53/60/095360a2bf830f1122f87eb7369fe412.jpg",
    alt: "https://i.pinimg.com/736x/8a/b3/b6/8ab3b6b9a64b08d5c9728353cbd95fed.jpg",
  },
  //Bowler
  {
    main: "https://i.pinimg.com/736x/3a/73/94/3a7394968dabf87a1edc32a2f5787ec5.jpg",
    alt: "https://i.pinimg.com/736x/dc/43/9d/dc439de79376c2dd5ac0517f9b0fd8fb.jpg",
  },
  //Wizard
  {
    main: "https://i.pinimg.com/1200x/82/a0/ea/82a0eaad0d11da502eb150d87b2a5d3b.jpg",
    alt: "https://i.pinimg.com/736x/ac/68/01/ac680193eae6d05df62eb71c99c51460.jpg",
  },
];

// ==== 3. Komponen utama ====
export default function ImageGrid() {
  // State untuk setiap gambar: status klik, gambar alternatif, dan skala transformasi
  const [states, setStates] = useState(
    images.map(() => ({
      clickCount: 0,   // jumlah klik
      isAlt: false,    // apakah gambar alternatif sedang aktif
      scale: 1,        // skala gambar (default 1)
    }))
  );

  // Fungsi saat gambar diklik
  const handleClick = (index: number) => {
    setStates((prev) =>
      prev.map((item, i) => {
        if (i !== index || item.clickCount >= 3) return item;

        const nextClick = item.clickCount + 1;

        return {
          clickCount: nextClick,
          isAlt: true, // aktifkan gambar alternatif mulai dari klik pertama
          scale:
            nextClick === 1
              ? 1 // klik pertama hanya ganti gambar
              : nextClick === 2
              ? 1.2 // klik kedua mulai membesar
              : 2.4, // klik ketiga maksimum scale
        };
      })
    );
  };

  return (
    <View style={styles.wrapper}>
      {images.map((img, index) => {
        const current = states[index];
        const source = current.isAlt ? img.alt : img.main;

        return (
          <TouchableOpacity
            key={index}
            onPress={() => handleClick(index)}
            style={styles.cell}
            activeOpacity={0.8}
            disabled={current.clickCount >= 3} // klik dihentikan setelah 3 kali
          >
            <Image
              source={{ uri: source }}
              style={[
                styles.image,
                {
                  transform: [{ scale: current.scale }],
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

// ==== 4. StyleSheet untuk tata letak grid dan gambar ====
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 20,
    paddingBottom: 40,
  },
  cell: {
    width: cellSize,
    height: cellSize / (3 / 4), // jaga rasio 3:4 agar gambar tetap proporsional
    margin: cellMargin / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});
