import { Colors } from "@/constants/Colors";
import { StyleSheet, View, Text, Image } from "react-native";

export default function Referral() {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "700", fontSize: 32 }}>Refer friends!</Text>
      <Text style={styles.smallText}>
        Use your referral code to invite your friends and earn once they join,
        verify and fund their account
      </Text>
      <Image
        source={require("../assets/images/refer.png")}
        resizeMode="contain"
        style={{ marginTop: 10 }}
      />
      <Text style={styles.smallText}>
        You will receive your reward once your friend
      </Text>
      <View style={{ flexDirection: "row" }}>
        <Text>Sign up and verify account</Text>
        <Text>Fund their wallet with ₦2,000 or more</Text>
        <Text>Perform a transaction within 24hrs</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.light.backdrop,
    padding: 20,
  },
  smallText: {
    marginTop: 10,
    color: Colors.light.tabIconDefault,
    fontWeight: "400",
    fontSize: 14,
    textAlign: "center",
  },
});
