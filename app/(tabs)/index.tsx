import Header from "@/components/Header";
import { Colors } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
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
        <View style={{ paddingTop: 12 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: Colors.dark.text,
                borderRadius: 15,
                width: 80,
                height: 22,
                padding: 1,
                alignItems: "center",
              }}
            >
              <Text style={styles.text}>Account</Text>
            </TouchableOpacity>
            <Text style={styles.text}>Rate</Text>
            <Text style={styles.text}>Discover</Text>
            <View />
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    //alignItems: "center",
    padding: 35,
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
  },
  text: {
    fontFamily: "Poppins",
    fontSize: 13,
  },
});
