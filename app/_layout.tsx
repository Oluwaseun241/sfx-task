import { Feather } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { Stack, useNavigation } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("@/assets/fonts/SpaceMono-Regular.ttf"),
    Poppins: require("@/assets/fonts/Poppins-Regular.ttf"),
  });

  const navigate = useNavigation();

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="referral"
        options={{
          headerTitle: "Referral",
          headerLeft: () => (
            <Feather
              name="arrow-left"
              size={24}
              color="grey"
              onPress={() => navigate.goBack()}
            />
          ),
        }}
      />
      <Stack.Screen
        name="editBill"
        options={{
          headerTitle: "Bill Payment",
          headerLeft: () => (
            <Feather
              name="arrow-left"
              size={24}
              color="grey"
              onPress={() => navigate.goBack()}
            />
          ),
        }}
      />
    </Stack>
  );
}
