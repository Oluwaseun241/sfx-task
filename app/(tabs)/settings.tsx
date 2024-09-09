import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  Platform,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";
import { Ionicons, Feather, MaterialIcons } from "@expo/vector-icons";

export default function Settings() {
  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={[Colors.light.background, "#F7F4FF"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      locations={[0, 0.15]}
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
        <ScrollView
          style={styles.bodyContainer}
          showsVerticalScrollIndicator={false}
        >
          {/* Available Asset Balance and Referral Earnings */}
          <View style={styles.balanceContainer}>
            <View>
              <Text style={styles.balanceLabel}>Available asset balance</Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.balanceAmount}>900,000 </Text>
                <Text style={{ marginTop: 10, fontSize: 12 }}>USD</Text>
              </View>
            </View>
            <View>
              <Text style={styles.balanceLabel}>Referral earnings</Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.balanceAmount}>50,000 </Text>
                <Text style={{ marginTop: 10, fontSize: 12 }}>USD</Text>
              </View>
            </View>
          </View>

          {/* List Items */}
          <TouchableOpacity style={styles.listItem}>
            <Ionicons
              name="shield-checkmark-outline"
              size={24}
              color={Colors.light.background}
            />
            <Text style={styles.listItemText}>Security</Text>
            <Feather
              name="chevron-right"
              size={24}
              color={Colors.light.tabIconDefault}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.listItem}>
            <Ionicons
              name="notifications-outline"
              size={24}
              color={Colors.light.background}
            />
            <Text style={styles.listItemText}>Notification</Text>
            <Feather
              name="chevron-right"
              size={24}
              color={Colors.light.tabIconDefault}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.listItem}>
            <MaterialIcons
              name="report-problem"
              size={24}
              color={Colors.light.background}
            />
            <Text style={styles.listItemText}>Report scam</Text>
            <Feather
              name="chevron-right"
              size={24}
              color={Colors.light.tabIconDefault}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.listItem}>
            <Ionicons
              name="share-social-outline"
              size={24}
              color={Colors.light.background}
            />
            <Text style={styles.listItemText}>Referral</Text>
            <Feather
              name="chevron-right"
              size={24}
              color={Colors.light.tabIconDefault}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.listItem}>
            <Ionicons
              name="star-outline"
              size={24}
              color={Colors.light.background}
            />
            <Text style={styles.listItemText}>Rate SFx</Text>
            <Feather
              name="chevron-right"
              size={24}
              color={Colors.light.tabIconDefault}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.listItem}>
            <Ionicons
              name="help-circle-outline"
              size={24}
              color={Colors.light.background}
            />
            <Text style={styles.listItemText}>Help & support</Text>
            <Feather
              name="chevron-right"
              size={24}
              color={Colors.light.tabIconDefault}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.listItem}>
            <MaterialIcons
              name="info-outline"
              size={24}
              color={Colors.light.background}
            />
            <Text style={styles.listItemText}>About us</Text>
            <Feather
              name="chevron-right"
              size={24}
              color={Colors.light.tabIconDefault}
            />
          </TouchableOpacity>

          {/* Logout Button */}
          <TouchableOpacity style={styles.logoutButton}>
            <Ionicons name="log-out-outline" size={24} color="#C4C4C4" />
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>

          {/* Version */}
          <View style={styles.versionContainer}>
            <Text style={styles.versionText}>Version: 2.0</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    marginTop: 8,
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
  },
  badgeText: {
    color: "red",
    fontFamily: "Poppins",
    fontSize: 12,
    fontWeight: "500",
  },
  bodyContainer: {
    marginTop: 10,
  },
  balanceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  balanceLabel: {
    fontSize: 12,
  },
  balanceAmount: {
    fontSize: 24,
    fontWeight: "bold",
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    borderBottomColor: "#E0E0E0",
    borderBottomWidth: 1,
  },
  listItemText: {
    fontSize: 16,
    flex: 1,
    marginLeft: 10,
    color: "#000",
  },
  logoutButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9F9F9",
    padding: 15,
    borderRadius: 10,
    marginVertical: 20,
  },
  logoutText: {
    color: "#C4C4C4",
    fontSize: 16,
    marginLeft: 10,
  },
  versionContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  versionText: {
    color: "#9E9E9E",
    fontSize: 12,
  },
});
