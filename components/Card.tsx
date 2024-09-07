import { Colors } from "@/constants/Colors";
import { Feather, Entypo } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import BalanceModal from "./modal/balanceModal";

export default function Card() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View
      style={{
        padding: 12,
        marginTop: 20,
        backgroundColor: Colors.light.white,
        borderRadius: 10,
      }}
    >
      <View style={{ flexDirection: "row", gap: 10, paddingTop: 4 }}>
        <Text>Available asset balance</Text>
        <Feather name="eye" size={24} color="black" />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row", paddingTop: 4 }}>
          <Text style={{ fontWeight: "600", fontSize: 18 }}>900,000</Text>
          <Text style={{ fontSize: 10, marginTop: 8 }}>USD</Text>
          <Entypo
            onPress={() => {
              setModalVisible(true);
            }}
            name="chevron-small-down"
            size={24}
            color="black"
          />
        </View>
        <View style={{ padding: 4 }}>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.light.background,
              padding: 6,
              width: 100,
              borderRadius: 15,
              alignItems: "center",
              marginLeft: 95,
            }}
          >
            <Text style={{ color: Colors.dark.text }}>Add money</Text>
          </TouchableOpacity>
        </View>
        <View />
      </View>
      <BalanceModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}
