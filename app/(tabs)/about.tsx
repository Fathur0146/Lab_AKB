/**
 * @file app/(tabs)/about.tsx
 * @description Halaman yang menjelaskan tentang aplikasi.
 */
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Tentang Aplikasi Ini</Text>
        <Text style={styles.paragraph}>
          Aplikasi ini dibuat sebagai bagian dari pemenuhan tugas praktikum untuk mata kuliah Laboratorium Komputasi Bergerak.
        </Text>
        <Text style={styles.paragraph}>
          Aplikasi ini menggunakan Expo Router untuk membuat navigasi tab bar dengan tiga halaman utama:
        </Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>1. Halaman Home</Text>
          <Text style={styles.sectionContent}>
            Menampilkan informasi singkat mengenai Universitas Muhammadiyah Makassar, lengkap dengan gambar dan alamat lokasi.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>2. Halaman About</Text>
          <Text style={styles.sectionContent}>
            Halaman yang sedang Anda lihat ini, memberikan penjelasan mengenai tujuan dan fungsi dari setiap halaman dalam aplikasi.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>3. Halaman Profil</Text>
          <Text style={styles.sectionContent}>
            Menampilkan data diri mahasiswa yang membuat aplikasi ini, termasuk nama, NIM, kelas, jurusan, fakultas, dan foto profil.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f0f4f8',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1e3a8a',
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
    color: '#334155',
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 5,
  },
  sectionContent: {
    fontSize: 16,
    lineHeight: 22,
    color: '#475569',
  },
});
