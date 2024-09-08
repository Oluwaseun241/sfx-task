import { StyleSheet, View, Text, Platform, SafeAreaView } from "react-native";

export default function Transaction() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Transactions</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
