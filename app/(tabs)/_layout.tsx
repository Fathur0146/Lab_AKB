/**
 * @file app/(tabs)/_layout.tsx
 * @description Mengatur navigasi tab bar dan halaman di dalamnya.
 */
import React from 'react';
import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: '#007AFF',
        },
        headerTintColor: '#fff',
        tabBarActiveTintColor: '#007AFF',
      }}>
      <Tabs.Screen
        name="index" // Ini merujuk ke file app/(tabs)/index.tsx
        options={{
          title: 'Mahasiswa',
          headerTitle: 'Daftar Mahasiswa',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="users" color={color} />,
        }}
      />
      <Tabs.Screen
        name="user/[id]" // Ini merujuk ke file app/(tabs)/user/[id].tsx
        options={{
          // Opsi ini menyembunyikan halaman detail dari tab bar
          href: null,
        }}
      />
    </Tabs>
  );
}
