//
// index.jsx
// Halaman utama yang menampilkan daftar mahasiswa.
//
import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
const { STUDENTS_DATA } = require('../../students/students');
import Ionicons from '@expo/vector-icons/Ionicons';

export default function StudentListScreen() {
  const renderItem = ({ item }) => (
    <Link href={`../user/${item.nim}`} asChild>
      <TouchableOpacity style={styles.itemContainer}>
        <Ionicons name="person-circle-outline" size={28} color="#007AFF" />
        <Text style={styles.itemText}>{item.name}</Text>
        <Ionicons name="chevron-forward" size={24} color="#C7C7CC" />
      </TouchableOpacity>
    </Link>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={STUDENTS_DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.nim}
        contentContainerStyle={styles.listContentContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  listContentContainer: {
    paddingTop: 8,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
  },
  itemText: {
    flex: 1,
    fontSize: 17,
    marginLeft: 12,
  },
});
