import { Colors } from "@/constants/Colors";
import { StyleSheet, Image, View, Text } from "react-native";

export default function EditBill() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          padding: 8,
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
            source={require("@/assets/images/water.png")}
          />
          <Text>Water</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginLeft: 40,
          gap: 30,
          marginTop: 12,
        }}
      >
        <View style={{ alignItems: "center", gap: 8 }}>
          <Image
            style={styles.icon}
            source={require("@/assets/images/airtime.png")}
          />
          <Text>Airtime</Text>
        </View>
        <View style={{ alignItems: "center", gap: 8 }}>
          <Image
            style={styles.icon}
            source={require("@/assets/images/flight.png")}
          />
          <Text>Flight</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    backgroundColor: Colors.light.background2,
  },
  icon: {
    width: 34,
    height: 34,
  },
});
