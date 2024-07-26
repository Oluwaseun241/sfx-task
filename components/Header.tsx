import { View, Image, Text } from "react-native";

export default function Header() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", gap: 20 }}>
        <Image
          source={require("@/assets/images/header.png")}
          style={{ width: 38, height: 38 }}
        />
        <View>
          <Text style={{ fontFamily: "Poppins", fontSize: 12 }}>Welcome</Text>
          <Text style={{ fontFamily: "Poppins" }}>Martins Chidume</Text>
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
  );
}
