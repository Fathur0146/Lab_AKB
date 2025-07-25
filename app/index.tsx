import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';

// Impor keluarga ikon yang ingin Anda gunakan
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Galeri 10 Ikon</Text>
      
      {/* Container untuk grid ikon */}
      <View style={styles.iconGrid}>

        {/* Ikon 1 */}
        <View style={styles.iconContainer}>
          <Ionicons name="home" size={40} color="#3498db" />
          <Text style={styles.iconLabel}>Home</Text>
        </View>

        {/* Ikon 2 */}
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="cards-heart" size={40} color="#e74c3c" />
          <Text style={styles.iconLabel}>Suka</Text>
        </View>

        {/* Ikon 3 */}
        <View style={styles.iconContainer}>
          <FontAwesome name="send" size={40} color="#2ecc71" />
          <Text style={styles.iconLabel}>Kirim</Text>
        </View>

        {/* Ikon 4 */}
        <View style={styles.iconContainer}>
          <Feather name="settings" size={40} color="#9b59b6" />
          <Text style={styles.iconLabel}>Pengaturan</Text>
        </View>

        {/* Ikon 5 */}
        <View style={styles.iconContainer}>
          <Ionicons name="camera" size={40} color="#f1c40f" />
          <Text style={styles.iconLabel}>Kamera</Text>
        </View>
        
        {/* Ikon 6 */}
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="cart" size={40} color="#e67e22" />
          <Text style={styles.iconLabel}>Keranjang</Text>
        </View>

        {/* Ikon 7 */}
        <View style={styles.iconContainer}>
          <FontAwesome name="user" size={40} color="#1abc9c" />
          <Text style={styles.iconLabel}>Profil</Text>
        </View>

        {/* Ikon 8 */}
        <View style={styles.iconContainer}>
          <Feather name="bell" size={40} color="#34495e" />
          <Text style={styles.iconLabel}>Notifikasi</Text>
        </View>

        {/* Ikon 9 */}
        <View style={styles.iconContainer}>
          <Ionicons name="stats-chart" size={40} color="#d35400" />
          <Text style={styles.iconLabel}>Statistik</Text>
        </View>

        {/* Ikon 10 */}
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="cloud-upload" size={40} color="#2980b9" />
          <Text style={styles.iconLabel}>Upload</Text>
        </View>

      </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f4f6f8',
  },
  container: {
    flexGrow: 1,
    backgroundColor: '#f4f6f8',
    alignItems: 'center',
    paddingVertical: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  iconGrid: {
    flexDirection: 'row', // Susun ikon secara horizontal
    flexWrap: 'wrap',     // Pindah ke baris baru jika tidak cukup ruang
    justifyContent: 'center', // Pusatkan ikon di dalam baris
    width: '90%',
  },
  iconContainer: {
    width: '30%', // Setiap kontainer mengambil sekitar 1/3 lebar
    aspectRatio: 1, // Membuat kontainer menjadi bujur sangkar
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    margin: 5,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#e8e8e8',
  },
  iconLabel: {
    marginTop: 8,
    fontSize: 12,
    color: '#666',
  },
});
