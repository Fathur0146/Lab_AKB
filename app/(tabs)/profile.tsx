/**
 * @file app/(tabs)/profil.tsx
 * @description Halaman yang menampilkan data diri mahasiswa.
 */
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

// Komponen untuk menampilkan satu baris data
const ProfileRow = ({ label, value }: { label: string, value: string }) => (
  <View style={styles.row}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

export default function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Image
            // PENTING: Pastikan Anda memiliki file ini di folder assets/images/
            source={require('../../assets/images/Habibie.jpg')}
            style={styles.profileImage}
          />
        </View>
        
        <View style={styles.detailsContainer}>
          <ProfileRow label="Nama" value="Muh. Fathur Hidayat" />
          <ProfileRow label="NIM" value="105841113322" />
          <ProfileRow label="Kelas" value="6D" />
          <ProfileRow label="Jurusan" value="Informatika" />
          <ProfileRow label="Fakultas" value="Teknik" />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f4f8',
  },
  card: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 8,
  },
  header: {
    backgroundColor: '#1e3a8a',
    alignItems: 'center',
    paddingVertical: 30,
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 4,
    borderColor: '#ffffff',
  },
  detailsContainer: {
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  label: {
    fontSize: 16,
    color: '#64748b',
    fontWeight: '600',
  },
  value: {
    fontSize: 16,
    color: '#1e293b',
    fontWeight: 'bold',
    textAlign: 'right',
    flex: 1,
    marginLeft: 10,
  },
});
