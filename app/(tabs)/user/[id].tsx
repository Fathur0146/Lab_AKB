/**
 * @file app/user/[id].tsx
 * @description Halaman dinamis untuk menampilkan detail mahasiswa.
 */
import React from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
// --- PERUBAHAN DI SINI ---
import { STUDENTS_DATA } from '../../../students/students';

export default function StudentDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const student = STUDENTS_DATA.find((s) => s.nim === id);

  if (!student) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
        <Text>Mahasiswa tidak ditemukan!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Mengatur judul header secara dinamis */}
      <Stack.Screen options={{ title: student.name }} />
      
      <View style={styles.card}>
        <Image source={{ uri: student.photoUrl }} style={styles.profileImage} />
        <Text style={styles.name}>{student.name}</Text>
        <Text style={styles.nim}>{student.nim}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
    padding: 20,
    alignItems: 'center',
  },
  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#007AFF',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#1C1C1E',
  },
  nim: {
    fontSize: 18,
    color: '#8E8E93',
  },
});
