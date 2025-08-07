/**
 * @file app/(tabs)/home.tsx
 * @description Halaman yang menampilkan informasi tentang Unismuh Makassar.
 */
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const ListItem = ({ children }: { children: React.ReactNode }) => (
  <View style={styles.listItem}>
    <Text style={styles.bullet}>•</Text>
    <Text style={styles.listItemText}>{children}</Text>
  </View>
);

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Universitas Muhammadiyah Makassar</Text>
        
        <Image 
          source={{ uri: 'https://lp2ai.unismuh.ac.id/storage/photos/path/logo/logo_unismuh.png' }} 
          style={styles.image} 
        />
        
        <Text style={styles.paragraph}>
          Universitas Muhammadiyah Makassar (Unismuh Makassar) adalah salah satu perguruan tinggi swasta terkemuka di Makassar, Sulawesi Selatan. Didirikan pada 19 Juni 1963, Unismuh berdiri sebagai wujud nyata komitmen Persyarikatan Muhammadiyah dalam memajukan pendidikan tinggi di Indonesia, khususnya di kawasan timur.
        </Text>

        <Text style={styles.sectionTitle}>Visi dan Misi</Text>
        <Text style={styles.paragraph}>
          Sebagai institusi berlandaskan nilai-nilai Islam dan Kemuhammadiyahan, Unismuh Makassar memiliki visi menjadi universitas unggul, terpercaya, dan mandiri dalam pengembangan ilmu pengetahuan, teknologi, dan seni. Misi utamanya adalah menyelenggarakan pendidikan berkualitas, penelitian inovatif, serta pengabdian masyarakat yang bermanfaat bagi kemaslahatan umat dan bangsa.
        </Text>

        <Text style={styles.sectionTitle}>Fakultas dan Program Studi</Text>
        <Text style={styles.paragraph}>
          Saat ini, Unismuh Makassar menaungi berbagai fakultas dengan puluhan program studi dari jenjang diploma, sarjana, hingga pascasarjana. Beberapa fakultas yang ada antara lain:
        </Text>
        
        {/* Daftar Fakultas dengan styling yang lebih baik */}
        <View style={styles.listContainer}>
          <ListItem>Fakultas Keguruan dan Ilmu Pendidikan (FKIP)</ListItem>
          <ListItem>Fakultas Ekonomi dan Bisnis (FEB)</ListItem>
          <ListItem>Fakultas Teknik (FT)</ListItem>
          <ListItem>Fakultas Pertanian (FP)</ListItem>
          <ListItem>Fakultas Ilmu Sosial dan Ilmu Politik (FISIP)</ListItem>
          <ListItem>Fakultas Kedokteran dan Ilmu Kesehatan (FKIK)</ListItem>
          <ListItem>Fakultas Agama Islam (FAI)</ListItem>
        </View>

        <Text style={styles.paragraph}>
          Dengan fasilitas yang terus berkembang dan komitmen terhadap kualitas, Unismuh Makassar terus berupaya mencetak lulusan yang tidak hanya kompeten secara akademis, tetapi juga memiliki integritas dan akhlak yang mulia.
        </Text>

        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Lokasi:</Text>
          <Text style={styles.infoText}>Jl. Sultan Alauddin No. 259, Makassar, Sulawesi Selatan, Indonesia</Text>
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
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#1e3a8a',
  },
  image: {
    width: '100%',
    height: 150, // Tinggi disesuaikan untuk logo
    marginBottom: 20,
    resizeMode: 'contain', // PENTING: Agar logo tidak terpotong
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
    color: '#334155',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1e293b',
    marginTop: 10,
    marginBottom: 10,
  },
  listContainer: {
    marginBottom: 15,
    paddingLeft: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 5,
  },
  bullet: {
    fontSize: 16,
    marginRight: 10,
    color: '#334155',
  },
  listItemText: {
    fontSize: 16,
    color: '#334155',
    flex: 1, // Agar teks bisa wrap jika panjang
  },
  infoContainer: {
    marginTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
    paddingTop: 15,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  infoText: {
    fontSize: 16,
    color: '#475569',
    marginTop: 5,
  },
});
