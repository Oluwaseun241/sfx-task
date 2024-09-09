import { Colors } from "@/constants/Colors";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";

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
      {/* step */}
      <View style={styles.stepContainer}>
        <View style={{ alignItems: "center" }}>
          <View style={styles.circle}>
            <Text style={styles.circleText}>1</Text>
          </View>
          <Text style={styles.stepLabel}>Sign up and verify account</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <View style={styles.circle}>
            <Text style={styles.circleText}>2</Text>
          </View>
          <Text style={styles.stepLabel}>
            Fund their wallet with ₦2,000 or more
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <View style={styles.circle}>
            <Text style={styles.circleText}>3</Text>
          </View>
          <Text style={styles.stepLabel}>
            Perform a transaction within 24hrs
          </Text>
        </View>
      </View>
      {/* Withdrawable Earnings Card */}
      <View style={styles.withdrawCard}>
        <View style={styles.row}>
          <Text style={styles.title}>Withdrawable earnings</Text>
          <Feather
            name="eye"
            size={20}
            color="black"
            style={{ marginRight: "32%" }}
          />
        </View>

        <View style={styles.earningsRow}>
          <Text style={styles.amount}>0</Text>
          <Text style={styles.currency}>USD</Text>
        </View>

        <TouchableOpacity style={styles.redeemButton}>
          <Text style={styles.redeemText}>Redeem</Text>
        </TouchableOpacity>
      </View>
      {/* Earnings and Referral */}
      <View style={styles.statsContainer}>
        {/* Total Earnings */}
        <View style={styles.statsCard}>
          <Text style={styles.statsTitle}>Total earnings</Text>
          <View style={styles.statsRow}>
            <Text style={styles.statsAmount}>0</Text>
            <Text style={styles.statsCurrency}>USD</Text>
          </View>
        </View>

        {/* Total Referral */}
        <View style={styles.statsCard}>
          <Text style={styles.statsTitle}>Total referral</Text>
          <View style={styles.statsRow}>
            <Text style={styles.statsAmount}>0</Text>
          </View>
        </View>
      </View>
      <View style={styles.referralContainer}>
        {/* Referral Code Box */}
        <View style={styles.referralBox}>
          <Text style={styles.referralText}>Your referral code</Text>
          <View style={styles.codeRow}>
            <Text style={styles.referralCode}>tFh273</Text>
            {/* Copy Icon */}
            <TouchableOpacity
              onPress={() => {
                /* Add copy to clipboard functionality */
              }}
            >
              <Feather name="copy" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Share Button */}
        <TouchableOpacity style={styles.shareButton}>
          <Ionicons name="share-social-outline" size={20} color="#fff" />
          <Text style={styles.shareText}>Share</Text>
        </TouchableOpacity>
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
    fontFamily: "Poppins",
  },
  stepContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 20,
    gap: 30,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#C3FFB5",
    justifyContent: "center",
    alignItems: "center",
  },
  circleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  stepLabel: {
    marginTop: 10,
    fontSize: 13,
    fontWeight: "400",
    lineHeight: 16,
    width: 86,
    textAlign: "center",
    height: 86,
  },
  withdrawCard: {
    backgroundColor: "#D6C2FF",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    width: "95%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    color: "#000",
  },
  earningsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  amount: {
    fontSize: 36,
    fontWeight: "bold",
  },
  currency: {
    fontSize: 13,
    marginTop: 10,
    marginLeft: 5,
  },
  redeemButton: {
    backgroundColor: "#8C52FF",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 6,
    alignSelf: "flex-end",
    marginTop: 10,
  },
  redeemText: {
    color: "#fff",
    fontWeight: "bold",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statsCard: {
    padding: 15,
    alignItems: "center",
    width: "50%",
  },
  statsTitle: {
    fontSize: 14,
    color: "#000",
  },
  statsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  statsAmount: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
  },
  statsCurrency: {
    fontSize: 14,
    marginLeft: 5,
    color: "#000",
  },
  referralContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#fff",
  },
  referralBox: {
    flexDirection: "column",
    borderColor: "#C4C4C4",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    padding: 15,
    flex: 0.7,
    marginRight: 10,
  },
  referralText: {
    color: "#9E9E9E",
    fontSize: 12,
  },
  codeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },
  referralCode: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  shareButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.light.background,
    padding: 15,
    borderRadius: 10,
    flex: 0.25,
    justifyContent: "center",
  },
  shareText: {
    color: "#fff",
    marginLeft: 5,
    fontSize: 16,
    fontWeight: "500",
  },
});
