/**
 * @file app/(tabs)/about.tsx
 * @description Halaman yang memberikan informasi mengenai aplikasi.
 */
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

// Komponen kecil untuk deskripsi fitur
const FeatureDescription = ({ title, content }: { title: string, content: string }) => (
  <View style={styles.featureBlock}>
    <Text style={styles.featureTitle}>{title}</Text>
    <Text style={styles.featureContent}>{content}</Text>
  </View>
);

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.pageWrapper}>
      <View style={styles.infoContainer}>
        <Text style={styles.mainHeader}>Tentang Aplikasi Ini</Text>
        <Text style={styles.introParagraph}>
          Aplikasi ini dirancang dan dikembangkan untuk memenuhi salah satu tugas dalam mata kuliah Laboratorium Komputasi Bergerak.
        </Text>
        <Text style={styles.introParagraph}>
          Navigasi aplikasi ini dibangun menggunakan Expo Router dengan tiga tab utama yang memiliki fungsi masing-masing:
        </Text>

        <FeatureDescription
          title="1. Tab Beranda (Home)"
          content="Menyajikan informasi ringkas mengenai Universitas Muhammadiyah Makassar, termasuk logo, deskripsi umum, dan lokasi kampus."
        />

        <FeatureDescription
          title="2. Tab Tentang (About)"
          content="Halaman ini memberikan penjelasan detail mengenai tujuan pembuatan aplikasi serta fungsi dari setiap tab navigasi yang tersedia."
        />

        <FeatureDescription
          title="3. Tab Profil"
          content="Menampilkan biodata mahasiswa yang bertanggung jawab atas pengembangan aplikasi ini, lengkap dengan foto, nama, NIM, dan detail akademik lainnya."
        />
      </View>
    </ScrollView>
  );
}

// Nama-nama style diubah agar unik
const styles = StyleSheet.create({
  pageWrapper: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#eef2f9',
  },
  infoContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
  },
  mainHeader: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 16,
    color: '#1a2c5b',
    textAlign: 'center',
  },
  introParagraph: {
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 16,
    color: '#3f3f46',
  },
  featureBlock: {
    marginTop: 12,
    marginBottom: 8,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a2c5b',
    marginBottom: 6,
  },
  featureContent: {
    fontSize: 15,
    lineHeight: 22,
    color: '#52525b',
  },
});
