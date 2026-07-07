// import { Tabs } from "expo-router";
// import { Text, View } from "react-native";
// import { Colors } from "../../constants/colors";
// import { Ionicons } from "@expo/vector-icons";
// //import { MaterialCommunityIcons } from "@expo/vector-icons";
// // import { Feather } from "@expo/vector-icons";
// // import { FontAwesome5 } from "@expo/vector-icons";
// // import { AntDesign } from "@expo/vector-icons";

// interface TabIconProps {
//   emoji: string;
//   label: string;
//   focused: boolean;
// }

// const TabIcon = ({ emoji, label, focused }: TabIconProps) => (
//   <View className="items-center justify-center pt-1">
//     <Text style={{ fontSize: 20 }}>{emoji}</Text>
//     <Text
//       className="text-xs mt-0.5"
//       style={{
//         color: focused ? Colors.green : Colors.gray,
//         fontWeight: focused ? "700" : "400",
//       }}
//     >
//       {label}
//     </Text>
//   </View>
// );

// export default function TabsLayout() {
//   return (
//     <Tabs
//       screenOptions={{
//         headerShown: false,
//         tabBarShowLabel: false,
//         tabBarStyle: {
//           backgroundColor: Colors.white,
//           borderTopColor: Colors.border,
//           borderTopWidth: 1,
//           height: 70,
//           paddingBottom: 10,
//         },
//       }}
//     >
//       <Tabs.Screen
//         name="home"
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <TabIcon emoji="🏠" label="Home" focused={focused} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="explore"
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <TabIcon emoji="🔍" label="Explore" focused={focused} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="map"
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <TabIcon emoji="🗺️" label="Map" focused={focused} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="bookings"
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <TabIcon emoji="📅" label="Bookings" focused={focused} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="profile"
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <TabIcon emoji="👤" label="Profile" focused={focused} />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { Text, View, StyleSheet, Platform } from "react-native";
import { Colors } from "../../constants/colors";

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
    marginTop: 4,
    textAlign: "center",
  },
  tabBar: {
    backgroundColor: Colors.gold,
    borderTopColor: Colors.border || "#E5E7EB",
    borderTopWidth: 2,
    // Accommodate safe areas perfectly on newer iOS devices
    height: Platform.OS === "ios" ? 88 : 72,
    paddingBottom: Platform.OS === "ios" ? 28 : 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 18,
  },
});
