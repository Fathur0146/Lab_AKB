// app/index.tsx
// Komponen React Native (Expo) untuk menampilkan grid 3x3 gambar interaktif dari aset lokal.

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
  ImageSourcePropType,
} from "react-native";

// Aktifkan LayoutAnimation untuk Android
if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

// ==== 1. Impor Gambar Lokal ====
// Pastikan path dan nama file sesuai dengan yang ada di folder assets/images Anda.
const imagesData = [
  { main: require("../assets/images/goblin.jpg"), alt: require("../assets/images/goblin2.jpg") },
  { main: require("../assets/images/arcerquen.jpg"), alt: require("../assets/images/archerquen2.jpg") },
  { main: require("../assets/images/dragon.jpg"), alt: require("../assets/images/drgon2.jpg") },
  { main: require("../assets/images/minion.jpg"), alt: require("../assets/images/minion2.jpg") },
  { main: require("../assets/images/giant.jpg"), alt: require("../assets/images/giant2.jpg") },
  { main: require("../assets/images/barking.jpg"), alt: require("../assets/images/barking2.jpg") },
  { main: require("../assets/images/wallbraker.jpg"), alt: require("../assets/images/wallbraker2.jpg") },
  { main: require("../assets/images/bowler.jpg"), alt: require("../assets/images/bowler2.jpg") },
  { main: require("../assets/images/wizard2.jpg"), alt: require("../assets/images/wizard.jpg") },
];

// ==== 2. Konstanta dan Konfigurasi ====
const screenWidth = Dimensions.get("window").width;
const cellMargin = 8;
const numberOfColumns = 3;
const cellSize = (screenWidth - cellMargin * (numberOfColumns + 1)) / numberOfColumns;

interface ImageState {
  clickCount: number;
  isAlt: boolean;
  scale: number;
}

export default function ImageGrid() {
  const [states, setStates] = useState<ImageState[]>(
    imagesData.map(() => ({ clickCount: 0, isAlt: false, scale: 1 }))
  );

  const handleClick = (index: number) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setStates((prevStates) =>
      prevStates.map((item, i) => {
        if (i !== index || item.clickCount >= 3) {
          return item;
        }

        const nextClick = item.clickCount + 1;
        let newScale = item.scale;

        if (nextClick === 2) newScale = 1.2;
        if (nextClick === 3) newScale = 2.0;

        return {
          clickCount: nextClick,
          isAlt: true,
          scale: newScale,
        };
      })
    );
  };

  return (
    <View style={styles.wrapper}>
      {imagesData.map((img, index) => {
        const current = states[index];
        // Pilih antara gambar utama atau alternatif
        const sourceUri: ImageSourcePropType = current.isAlt ? img.alt : img.main;

        return (
          <TouchableOpacity
            key={index}
            onPress={() => handleClick(index)}
            style={styles.cell}
            activeOpacity={0.8}
            disabled={current.clickCount >= 3}
          >
            <Image
              source={sourceUri} // Untuk gambar lokal, `source` langsung menerima hasil `require()`
              style={[
                styles.image,
                { transform: [{ scale: current.scale }] },
              ]}
              resizeMode="cover"
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

// ==== 4. StyleSheet ====
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