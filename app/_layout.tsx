/**
 * @file app/_layout.tsx
 * @description Layout utama (root) untuk seluruh aplikasi.
 */
import React from 'react';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      {/* Opsi ini akan menyembunyikan header di level paling atas */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
