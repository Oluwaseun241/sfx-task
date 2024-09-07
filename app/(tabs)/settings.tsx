import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  Platform,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";

export default function Settings() {
  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={[Colors.light.background, "#F7F4FF"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      locations={[0, 0.2]}
    >
      <SafeAreaView style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", gap: 15 }}>
            <Image
              source={require("@/assets/images/header.png")}
              style={{ width: 38, height: 38 }}
            />
            <View style={{ gap: 4 }}>
              <Text style={{ fontFamily: "Poppins", fontSize: 14 }}>
                Martins Chidume
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: Colors.light.white,
                  borderRadius: 10,
                  width: 95,
                  height: 20,
                  padding: 1,
                  alignItems: "center",
                }}
              >
                <Text style={styles.badgeText}>Not verified</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Image
              source={require("@/assets/images/scan.png")}
              style={{ width: 20, height: 20 }}
            />
            <Image
              source={require("@/assets/images/notification.png")}
              style={{ width: 20, height: 20 }}
            />
          </View>
        </View>
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
  badgeText: {
    color: "red",
    fontFamily: "Poppins",
    fontSize: 12,
    fontWeight: "500",
  },
});
