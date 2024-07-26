import { StyleSheet, StatusBar, View, Text, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";
import Header from "@/components/Header";

export default function Settings() {
  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={[Colors.light.background, "#F7F4FF"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      locations={[0, 0.3]}
    >
      <SafeAreaView style={styles.container}>
        <Header />
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
  },
});
