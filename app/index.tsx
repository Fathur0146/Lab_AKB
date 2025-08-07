import { Redirect } from 'expo-router';
import React from 'react';

export default function StartPage() {
  // Langsung arahkan ke tab home
  return <Redirect href="/home" />;
  
}