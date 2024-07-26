import { StyleSheet, View, Text, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Wallet() {
  return (
    <SafeAreaView>
      <Text>Wallet</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
