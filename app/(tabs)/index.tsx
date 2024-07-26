import AdsView from "@/components/AdsCard";
import Card from "@/components/Card";
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
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";

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
        <View style={{ paddingTop: 18 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: Colors.light.white,
                borderRadius: 10,
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
        <Card />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 16,
            marginTop: 20,
            backgroundColor: Colors.light.white,
            borderRadius: 10,
          }}
        >
          <View style={{ alignItems: "center", gap: 8 }}>
            <Image
              style={styles.icon}
              source={require("@/assets/images/withdraw.png")}
            />
            <Text>Withdraw</Text>
          </View>
          <View style={{ alignItems: "center", gap: 8 }}>
            <Image
              style={styles.icon}
              source={require("@/assets/images/swap.png")}
            />
            <Text>Swap</Text>
          </View>
          <View style={{ alignItems: "center", gap: 8 }}>
            <Image
              style={styles.icon}
              source={require("@/assets/images/card.png")}
            />
            <Text>Card</Text>
          </View>
          <View style={{ alignItems: "center", gap: 8 }}>
            <Image
              style={styles.icon}
              source={require("@/assets/images/referral.png")}
            />
            <Text>Referral</Text>
          </View>
        </View>
        <AdsView />
        <View
          style={{
            backgroundColor: Colors.light.white,
            borderRadius: 10,
            padding: 10,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontWeight: 200 }}>Bills payment</Text>
            <View style={{ flexDirection: "row", gap: 3 }}>
              <Text>Edit</Text>
              <Image
                source={require("@/assets/images/edit.png")}
                style={{ height: 18, width: 20 }}
              />
            </View>
          </View>
          <View style={styles.separator} />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 16,
              marginTop: 10,
            }}
          >
            <View style={{ alignItems: "center", gap: 8 }}>
              <Image
                style={styles.icon}
                source={require("@/assets/images/internet.png")}
              />
              <Text>Internet</Text>
            </View>
            <View style={{ alignItems: "center", gap: 8 }}>
              <Image
                style={styles.icon}
                source={require("@/assets/images/tution.png")}
              />
              <Text>Tution</Text>
            </View>
            <View style={{ alignItems: "center", gap: 8 }}>
              <Image
                style={styles.icon}
                source={require("@/assets/images/electricity.png")}
              />
              <Text>Electricity</Text>
            </View>
            <View style={{ alignItems: "center", gap: 8 }}>
              <Image
                style={styles.icon}
                source={require("@/assets/images/more.png")}
              />
              <Text>More</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            marginTop: 15,
            padding: 20,
            backgroundColor: Colors.light.white,
            borderRadius: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontWeight: 200 }}>Transactions</Text>
            <View
              style={{ flexDirection: "row", gap: 3, alignItems: "center" }}
            >
              <Text>View all</Text>
              <Entypo name="chevron-small-right" size={24} color="grey" />
            </View>
          </View>
          <View style={styles.separator} />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Image
              source={require("@/assets/images/flag.png")}
              style={styles.icon}
            />
            <View style={{ marginRight: 80 }}>
              <Text>GHN-NGN</Text>
              <Text style={{ fontWeight: "200" }}>6:00 am * 12 jul 2014</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 16 }}>500</Text>
              <Text style={{ fontSize: 10, marginTop: 5, fontWeight: "200" }}>
                USD
              </Text>
            </View>
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
  text: {
    fontFamily: "Poppins",
    fontSize: 13,
  },
  icon: {
    width: 34,
    height: 34,
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    marginVertical: 10,
  },
});
