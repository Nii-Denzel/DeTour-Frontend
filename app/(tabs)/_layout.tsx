import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { Text, View, StyleSheet, Platform } from "react-native";
import { Colors } from "../../constants/colors";
import { blue } from "react-native-reanimated/lib/typescript/Colors";

interface TabIconProps {
  iconName: keyof typeof Ionicons | string;
  label: string;
  focused: boolean;
}

const TabIcon = ({ iconName, label, focused }: TabIconProps) => {
  const activeColor = focused ? Colors.green : Colors.gray;

  return (
    <View style={styles.iconContainer}>
      <Ionicons
        name={iconName as any}
        size={22}
        color={activeColor}
      />
      <Text
        style={[
          styles.iconLabel,
          {
            color: activeColor,
            fontWeight: focused ? "700" : "500",
          },
        ]}
      >
        {label}
      </Text>
    </View>
  );
};

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              iconName={focused ? "home" : "home-outline"}
              label="Home"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              iconName={focused ? "search" : "search-outline"}
              label="Explore"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              iconName={focused ? "map" : "map-outline"}
              label="Map"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="bookings"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              iconName={focused ? "calendar" : "calendar-outline"}
              label="Bookings"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              iconName={focused ? "person" : "person-outline"}
              label="Profile"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
    marginTop: 18,
    width: 70,
  },
  iconLabel: {
    fontSize: 12,
   marginTop: 2,
    textAlign: "center",
  },
  tabBar: {
    backgroundColor:'white',
    // Accommodate safe areas perfectly on newer iOS devices
    height: Platform.OS === "ios" ? 88 : 72,
    paddingBottom: Platform.OS === "ios" ? 28 : 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,

  },
});
