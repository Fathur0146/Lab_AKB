import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={{ 
        backgroundColor: "darkblue", 
        borderRadius: 10,
        padding: 10, // Menambahkan padding agar lebih rapi
        alignItems: 'center', // Memusatkan teks
        marginBottom: 20, // Memberi jarak ke elemen di bawahnya
      }}>
        <Text style={{
          color: "white",
          fontSize: 25,
          fontWeight: "bold",
        }}>
          Fathur
        </Text>
        <Text style={{
          fontWeight: "bold",
          color: "white",
        }}>
          105841113322
        </Text>
      </View>

      <View style={{ 
        width: 200,
        height: 200,
        backgroundColor: "mediumblue", 
        borderRadius: 100,
        marginBottom: 40, // Memberi jarak ke elemen di bawahnya
      }}>
      </View>

      {/* TUGAS LAB*/}

      {/* Segitiga */}
      <View style={styles.segitiga} />

      {/* Persegi Panjang */}
      <View style={styles.persegiPanjang}>
        <Text style={styles.textDiDalam}>MUH. FATHUR HIDAYAT</Text>
      </View>

      {/* Bentuk Pil (Capsule) */}
      <View style={styles.bentukPil}>
        <Text style={styles.textDiDalam}>105841113322</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#F5F5F5', // Memberi warna latar belakang
  },
  // Style untuk Segitiga
  segitiga: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 80,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'blue', // Warna biru
    marginBottom: 20, // Memberi jarak
  },
  // Style untuk Persegi Panjang
  persegiPanjang: {
    width: 220,
    height: 50,
    backgroundColor: 'green', // Warna hijau
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 20, // Memberi jarak
  },
  // Style untuk Bentuk Pil
  bentukPil: {
    width: 220,
    height: 50,
    backgroundColor: 'red', // Warna merah
    borderRadius: 25, // Setengah dari tinggi (height)
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Style untuk teks di dalam bentuk
  textDiDalam: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});