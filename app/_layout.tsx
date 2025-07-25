import { Stack } from 'expo-router';
import React from 'react';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{
          title: 'Galeri 10 Ikon',
          headerStyle: {
            backgroundColor: '#f4f6f8',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#333',
          },
        }} 
      />
    </Stack>
  );
}
