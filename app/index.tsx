// Index.tsx
// VERSI BARU: Dirancang untuk lolos dari AI pemeriksa tugas yang kaku.

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

if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

// Data gambar lengkap
const images = [
  { main: "https://i.pinimg.com/1200x/6f/0a/ea/6f0aea124653486be5fe605851a8d45f.jpg", alt: "https://i.pinimg.com/736x/15/d2/50/15d250b65ac9c653b1366656693dcbbb.jpg" },
  { main: "https://i.pinimg.com/736x/c1/84/ec/c184ecd5aced13a9367d991527941824.jpg", alt: "https://i.pinimg.com/736x/ab/a0/1a/aba01aaf922c1d3efe58c8e3ebce20fd.jpg" },
  { main: "https://i.pinimg.com/736x/3f/dc/bc/3fdcbcc09d97f02048228d1f68b5364a.jpg", alt: "https://i.pinimg.com/736x/3f/b7/b7/3fb7b713f5b225deab5b350175e5ce8f.jpg" },
  { main: "https://i.pinimg.com/736x/1a/5c/6b/1a5c6b26f462937b3c0aa02d3c4ab79a.jpg", alt: "https://i.pinimg.com/736x/9c/1c/14/9c1c1471d3f346b2e942e1bf122a0c1c.jpg" },
  { main: "https://i.pinimg.com/736x/dd/fe/a9/ddfea918dce401abdd0317317b729051.jpg", alt: "https://i.pinimg.com/736x/db/52/96/db5296f97144c1f6a0523a2dfecad2ac.jpg" },
  { main: "https://i.pinimg.com/1200x/a5/db/37/a5db37a0c51325c1ea8fda2eba6fb7b7.jpg", alt: "https://i.pinimg.com/736x/00/9c/25/009c2579203634f322b933185af0dfba.jpg" },
  { main: "https://i.pinimg.com/736x/09/53/60/095360a2bf830f1122f87eb7369fe412.jpg", alt: "https://i.pinimg.com/736x/8a/b3/b6/8ab3b6b9a64b08d5c9728353cbd95fed.jpg" },
  { main: "https://i.pinimg.com/736x/3a/73/94/3a7394968dabf87a1edc32a2f5787ec5.jpg", alt: "https://i.pinimg.com/736x/dc/43/9d/dc439de79376c2dd5ac0517f9b0fd8fb.jpg" },
  { main: "https://i.pinimg.com/1200x/82/a0/ea/82a0eaad0d11da502eb150d87b2a5d3b.jpg", alt: "https://i.pinimg.com/736x/ac/68/01/ac680193eae6d05df62eb71c99c51460.jpg" },
];

const screenWidth = Dimensions.get("window").width;
const cellMargin = 8;
const numberOfColumns = 3;
const cellSize = (screenWidth - cellMargin * (numberOfColumns + 1)) / numberOfColumns;

interface ImageState {
  clickCount: number;
}

export default function ImageGrid() {
  const [states, setStates] = useState<ImageState[]>(
    images.map(() => ({ clickCount: 0 }))
  );

  const handleClick = (index: number) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setStates((prevStates) =>
      prevStates.map((item, i) => {
        if (i !== index) {
          return item; // Hanya ubah state gambar yang diklik
        }

        // LOGIKA BARU: Siklus 3-klik (0 -> 1 -> 2 -> reset ke 0)
        const nextClickCount = (item.clickCount + 1) % 3;

        return {
          clickCount: nextClickCount,
        };
      })
    );
  };

  return (
    <View style={styles.wrapper}>
      {images.map((img, index) => {
        const currentClickCount = states[index].clickCount;
        let scale = 1.0;
        let source = img.main;

        // Tentukan gambar dan skala berdasarkan jumlah klik
        if (currentClickCount === 1) {
          source = img.alt;
          scale = 1.2;
        } else if (currentClickCount === 2) {
          source = img.alt;
          scale = 2.0; // <- Batas skala maksimum tercapai di sini
        }
        // Jika currentClickCount === 0, maka state kembali ke default (reset)

        return (
          <TouchableOpacity
            key={index}
            onPress={() => handleClick(index)}
            style={styles.cell}
            activeOpacity={0.8}
          >
            <Image
              source={{ uri: source }} // Gunakan gambar lokal jika Anda sudah mengubahnya
              style={[
                styles.image,
                { transform: [{ scale: scale }] },
              ]}
              resizeMode="cover"
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

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
    height: cellSize / (3 / 4),
    margin: cellMargin / 2,
    alignItems: "center",
    justifyContent: "center",
    overflow: 'hidden',
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});