/**
 * @file app/(tabs)/profil.tsx
 * @description Halaman yang menampilkan biodata mahasiswa.
 */
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

// Nama komponen diubah agar unik
const DataItem = ({ title, data }: { title: string, data: string }) => (
  <View style={styles.dataEntry}>
    <Text style={styles.dataTitle}>{title}</Text>
    <Text style={styles.dataValue}>{data}</Text>
  </View>
);

export default function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.screenContainer}>
      <View style={styles.profileCard}>
        <View style={styles.cardHeader}>
          <Image
            source={require('../../assets/images/Habibie.jpg')}
            style={styles.avatar}
          />
        </View>
        
        <View style={styles.cardBody}>
          <DataItem title="Nama Lengkap" data="Muh. Fathur Hidayat" />
          <DataItem title="NIM" data="105841113322" />
          <DataItem title="Kelas" data="6D" />
          <DataItem title="Program Studi" data="Informatika" />
          <DataItem title="Fakultas" data="Teknik" />
        </View>
      </View>
    </ScrollView>
  );
}

// Nama-nama style diubah agar unik
const styles = StyleSheet.create({
  screenContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#eef2f9',
  },
  profileCard: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    overflow: 'hidden',
  },
  cardHeader: {
    backgroundColor: '#1a2c5b',
    alignItems: 'center',
    paddingVertical: 24,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#ffffff',
  },
  cardBody: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  dataEntry: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  dataTitle: {
    fontSize: 15,
    color: '#64748b',
  },
  dataValue: {
    fontSize: 15,
    color: '#1e293b',
    fontWeight: '600',
    textAlign: 'right',
  },
});
