/**
 * @file app/_layout.tsx
 * @description Layout utama (root) yang mengarahkan ke grup navigasi tab.
 */
import React from 'react';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      {/* Baris ini akan menampilkan grup (tabs) dan menyembunyikan header ganda */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
