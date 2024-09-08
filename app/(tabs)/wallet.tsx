import { StyleSheet, View, Text, Platform, SafeAreaView } from "react-native";

export default function Wallet() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Wallet</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
