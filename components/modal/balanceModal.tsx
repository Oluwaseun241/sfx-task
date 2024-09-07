import { Modal, View, Text, Pressable, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function BalanceModal({ modalVisible, setModalVisible }) {
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
          <Ionicons name="arrow-back" size={24} color="grey" />
          <Text style={{ fontSize: 16, fontWeight: "400" }}>
            Available balance
          </Text>
        </View>
        <View style={styles.separator} />
      </View>
      currency view selction here
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
});
