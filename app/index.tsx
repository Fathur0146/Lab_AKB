/**
 * @file app/index.tsx
 * @description Menampilkan 10 nama spesifik dengan font yang berbeda.
 */
import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

// --- 1. Konfigurasi Awal ---

// Daftar 10 nama yang ingin ditampilkan (tanpa nama Anda)
const daftarNamaTampilan = [
  "Isnandar",                   // Nim 128
  "Muh.Raditya Setiawan",       // Nim 129
  "Muh. Dzikri Alfauzan Nuzul", // Nim 130
  "Nisa Natayanti",             // Nim 131
  "Eki Dian Safitri",           // Nim 132
  // "Muh. Fathur Hidayat" // NIM acuan, tidak ditampilkan(133)
  "Reyhan Al Gifari",           // Nim 134
  "Afil Anugrah",               // Nim 135
  "Abdul Naim",                 // Nim 136
  "Syahrul Ramadhan",           // Nim 137
  "Abdullah Khaeruna Anwar",    // Nim 138
];

// Daftar 10 nama font yang akan digunakan
const daftarFont = [
  "Amara", "Cormo", "Joan", "Macondo", "Nothing",
  "Changa", "RedHat", "Stix", "Winky", "Yano",
];

// --- 2. Komponen Utama ---

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Daftar Nama Tugas Font</Text>
      <Text style={styles.subHeader}>
        Menampilkan 5 nama sebelum dan 5 sesudah urutan 133
      </Text>
      <View style={styles.listContainer}>
        {daftarNamaTampilan.map((nama, index) => {
          // Terapkan font yang berbeda untuk setiap nama
          const namaFont = daftarFont[index];

          return (
            <View key={index} style={styles.namaItem}>
              <Text
                style={[
                  styles.namaText,
                  { fontFamily: namaFont },
                ]}
              >
                {nama}
              </Text>
              <Text style={styles.fontInfo}>({namaFont})</Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

// --- 3. StyleSheet ---

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#f0f4f8",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
    color: "#1e293b",
  },
  subHeader: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 24,
    color: "#475569",
  },
  listContainer: {
    width: "100%",
  },
  namaItem: {
    backgroundColor: "#ffffff",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  namaText: {
    fontSize: 22,
    color: "#334155",
  },
  fontInfo: {
    fontSize: 12,
    color: "#94a3b8",
    marginTop: 4,
    fontStyle: "italic",
  },
});
