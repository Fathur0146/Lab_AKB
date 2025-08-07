/**
 * @file app/(tabs)/home.tsx
 * @description Halaman beranda yang menyajikan informasi Unismuh Makassar.
 */
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

// Komponen baru yang unik untuk menampilkan blok informasi
const InfoBlock = ({ heading, children }: { heading: string, children: React.ReactNode }) => (
  <View style={styles.infoSection}>
    <Text style={styles.infoHeading}>{heading}</Text>
    <Text style={styles.infoText}>{children}</Text>
  </View>
);

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.screenWrapper}>
      <View style={styles.mainCard}>
        <Text style={styles.pageTitle}>Profil Universitas Muhammadiyah Makassar</Text>
        
        <View style={styles.logoContainer}>
            <Image 
              source={require('../../assets/images/Logo.jpg')} 
              style={styles.universityLogo} 
            />
        </View>
        
        <Text style={styles.mainParagraph}>
          Universitas Muhammadiyah Makassar, atau yang akrab disapa Unismuh, adalah institusi pendidikan tinggi swasta yang menjadi tonggak utama di Makassar, Sulawesi Selatan. Berdiri sejak 19 Juni 1963, Unismuh merupakan perwujudan dari amal usaha Persyarikatan Muhammadiyah dalam memajukan pendidikan, khususnya di kawasan timur Indonesia.
        </Text>

        <InfoBlock heading="Visi & Misi">
          Berlandaskan nilai Islam dan Kemuhammadiyahan, Unismuh memiliki cita-cita untuk menjadi universitas yang mandiri, unggul, dan terpercaya. Fokus utamanya adalah pada pengembangan IPTEKS melalui pendidikan berkualitas, riset inovatif, dan pengabdian masyarakat yang berdampak luas.
        </InfoBlock>

        <InfoBlock heading="Alamat Kampus">
          Jl. Sultan Alauddin No. 259, Kota Makassar, Sulawesi Selatan, Indonesia.
        </InfoBlock>
      </View>
    </ScrollView>
  );
}

// Nama-nama style diubah total agar unik
const styles = StyleSheet.create({
  screenWrapper: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  mainCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e9ecef'
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#0d3b66',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  universityLogo: {
    width: '90%',
    height: 150,
    // --- PERUBAHAN UTAMA DI SINI ---
    resizeMode: 'contain', // Memastikan seluruh logo terlihat
  },
  mainParagraph: {
    fontSize: 15,
    lineHeight: 25,
    textAlign: 'justify',
    color: '#495057',
    marginBottom: 16,
  },
  infoSection: {
    marginTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#dee2e6',
    paddingTop: 12,
  },
  infoHeading: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0d3b66',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 15,
    lineHeight: 22,
    color: '#6c757d',
  },
});
