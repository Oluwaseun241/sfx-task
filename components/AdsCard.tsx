import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Swiper from "react-native-swiper";

const adsData = [
  { key: "1", imageUrl: require("@/assets/images/header2.png") },
  { key: "2", imageUrl: require("@/assets/images/header2.png") },
  { key: "3", imageUrl: require("@/assets/images/header2.png") },
];

const AdsView = () => {
  return (
    <View style={styles.container}>
      <Swiper autoplay={false} autoplayTimeout={5}>
        {adsData.map((ad) => (
          <View key={ad.key} style={styles.slide}>
            <View>
              <Text style={{ fontWeight: 500, fontSize: 16, color: "#022201" }}>
                Personalized recommendation
              </Text>
              <Text style={{ color: "#022201", textAlign: "left", width: 225 }}>
                You have made multiple transfers to the same account today.
                Review
              </Text>
            </View>

            <Image source={ad.imageUrl} style={styles.image} />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 140,
    padding: 20,
    marginTop: 15,
  },
  slide: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  image: {
    width: 58,
    height: 58,
  },
});
export default AdsView;
