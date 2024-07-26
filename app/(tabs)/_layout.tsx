import { Tabs } from "expo-router";
import React from "react";
import { Text } from "react-native";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarStyle: {
          height: 55,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused
                  ? Colors.light.tabIconSelected
                  : Colors.light.icon,
                fontSize: 11,
                fontFamily: "Poppins",
              }}
            >
              Home
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={focused ? Colors.light.tabIconSelected : Colors.light.icon}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          title: "Wallet",
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused
                  ? Colors.light.tabIconSelected
                  : Colors.light.icon,
                fontSize: 11,
                fontFamily: "Poppins",
              }}
            >
              Wallet
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name={focused ? "wallet" : "wallet-outline"}
              color={focused ? Colors.light.tabIconSelected : Colors.light.icon}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="transaction"
        options={{
          title: "Transaction",
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused
                  ? Colors.light.tabIconSelected
                  : Colors.light.icon,
                fontSize: 11,
                fontFamily: "Poppins",
              }}
            >
              Transaction
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name={focused ? "receipt" : "receipt-outline"}
              color={focused ? Colors.light.tabIconSelected : Colors.light.icon}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused
                  ? Colors.light.tabIconSelected
                  : Colors.light.icon,
                fontSize: 11,
                fontFamily: "Poppins",
              }}
            >
              Settings
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name={focused ? "settings" : "settings-outline"}
              color={focused ? Colors.light.tabIconSelected : Colors.light.icon}
            />
          ),
        }}
      />
    </Tabs>
  );
}
