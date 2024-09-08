import { useState } from "react";
import {
  Modal,
  View,
  Text,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";

export default function BalanceModal({ modalVisible, setModalVisible }) {
  const [selectedCurrency, setSelectedCurrency] = useState("");
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <Pressable
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.5)",
          justifyContent: "flex-end",
        }}
        onPress={() => setModalVisible(false)} // Close the modal when pressing outside
      />
      <View style={styles.container}>
        <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
          <Ionicons
            name="arrow-back"
            size={24}
            color="grey"
            onPress={() => setModalVisible(false)}
          />
          <Text style={{ fontSize: 16, fontWeight: "400" }}>
            Available balance
          </Text>
        </View>

        {/* Divider */}
        <View style={styles.separator} />

        {/* Balance Card 1 - USD */}
        <TouchableOpacity
          style={[
            styles.card,
            selectedCurrency === "USD" && styles.selectedCard,
          ]}
          onPress={() => setSelectedCurrency("USD")}
        >
          <View style={styles.cardContent}>
            <Text style={styles.amount}>900,000</Text>
            <Text style={styles.currency}>USD</Text>
          </View>
          {selectedCurrency === "USD" ? (
            <AntDesign
              name="checkcircle"
              size={24}
              color={Colors.light.tabIconSelected}
            />
          ) : (
            <Feather
              name="circle"
              size={24}
              color={Colors.dark.tabIconDefault}
            />
          )}
        </TouchableOpacity>

        {/* Balance Card 2 - TRY */}
        <TouchableOpacity
          style={[
            styles.card,
            selectedCurrency === "TRY" && styles.selectedCard,
          ]}
          onPress={() => setSelectedCurrency("TRY")}
        >
          <View style={styles.cardContent}>
            <Text style={styles.amount}>900,000</Text>
            <Text style={styles.currency}>TRY</Text>
          </View>
          {selectedCurrency === "TRY" ? (
            <AntDesign
              name="checkcircle"
              size={24}
              color={Colors.light.tabIconSelected}
            />
          ) : (
            <Feather
              name="circle"
              size={24}
              color={Colors.light.tabIconDefault}
            />
          )}
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  container: {
    height: "50%",
    backgroundColor: Colors.light.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 25,
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    marginVertical: 25,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.light.white,
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: Colors.light.tabIconDefault,
  },
  selectedCard: {
    borderColor: Colors.light.tabIconSelected,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  amount: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 2,
  },
  currency: {
    fontSize: 10,
    marginTop: 5,
    color: Colors.light.text,
  },
});
