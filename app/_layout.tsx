/**
 * @file app/_layout.tsx
 * @description Mengatur layout utama dan memuat semua font kustom untuk aplikasi.
 */
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

// Mencegah splash screen hilang secara otomatis sebelum font dimuat
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // Muat semua 10 font (5 statis, 5 variabel)
  const [loaded, error] = useFonts({
    // --- 5 Font Statis ---
    // Setiap gaya (misal: Regular, Bold) adalah file terpisah.
    "Amara": require("../assets/fonts/static/Amarante-Regular.ttf"),
    "Cormo": require("../assets/fonts/static/CormorantSC-Regular.ttf"),
    "Joan": require("../assets/fonts/static/Joan-Regular.ttf"),
    "Macondo": require("../assets/fonts/static/Macondo-Regular.ttf"),
    "Nothing": require("../assets/fonts/static/NothingYouCouldDo-Regular.ttf"),

    // --- 5 Font Variabel ---
    // Satu file dapat menangani berbagai ketebalan (fontWeight).
    "Changa": require("../assets/fonts/variable/Changa-VariableFont_wght.ttf"),
    "RedHat": require("../assets/fonts/variable/RedHatMono-VariableFont_wght.ttf"),
    "Stix": require("../assets/fonts/variable/STIXTwoText-VariableFont_wght.ttf"),
    "Winky": require("../assets/fonts/variable/WinkyRough-VariableFont_wght.ttf"),
    "Yano": require("../assets/fonts/variable/YanoneKaffeesatz-VariableFont_wght.ttf"),
  });

  // Sembunyikan splash screen setelah font berhasil dimuat atau jika ada error
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  // Jangan render apapun sampai font selesai dimuat
  if (!loaded && !error) {
    return null;
  }

  // Tampilkan halaman utama setelah font siap
  return <Stack />;
}
