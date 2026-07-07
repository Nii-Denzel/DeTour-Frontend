// import {
//   Feather,
//   FontAwesome5,
//   Ionicons,
//   MaterialCommunityIcons,
// } from "@expo/vector-icons";
// import React, { useState } from "react";
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import { AttractionCard } from "../../components/AttractionCard";
// import { Colors } from "../../constants/colors";
// import { ATTRACTIONS } from "../../constants/data";

// // Updated filters with vector icon rendering logic matching the template setup
// const FILTERS = [
//   {
//     id: "All",
//     label: "All",
//     icon: (active: boolean) => (
//       <FontAwesome5
//         name="map-marked-alt"
//         size={16}
//         color={active ? "#fff" : Colors.green}
//       />
//     ),
//   },
//   {
//     id: "Heritage",
//     label: "Heritage",
//     icon: (active: boolean) => (
//       <MaterialCommunityIcons
//         name="bank"
//         size={18}
//         color={active ? "#fff" : Colors.green}
//       />
//     ),
//   },
//   {
//     id: "Park",
//     label: "Park",
//     icon: (active: boolean) => (
//       <MaterialCommunityIcons
//         name="tree-outline"
//         size={18}
//         color={active ? "#fff" : Colors.green}
//       />
//     ),
//   },
//   {
//     id: "Beach",
//     label: "Beach",
//     icon: (active: boolean) => (
//       <MaterialCommunityIcons
//         name="beach"
//         size={18}
//         color={active ? "#fff" : Colors.green}
//       />
//     ),
//   },
//   {
//     id: "Attraction",
//     label: "Attraction",
//     icon: (active: boolean) => (
//       <Ionicons
//         name="star-outline"
//         size={17}
//         color={active ? "#fff" : Colors.green}
//       />
//     ),
//   },
// ];

// export default function ExploreScreen() {
//   const [search, setSearch] = useState("");
//   const [activeFilter, setActiveFilter] = useState("All");

//   const filtered = ATTRACTIONS.filter((a) => {
//     const matchesSearch =
//       a.name.toLowerCase().includes(search.toLowerCase()) ||
//       a.location.toLowerCase().includes(search.toLowerCase());
//     const matchesFilter =
//       activeFilter === "All" ||
//       a.category.toLowerCase() === activeFilter.toLowerCase();
//     return matchesSearch && matchesFilter;
//   });

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: "#F4F6F5" }}>
//       <StatusBar barStyle="light-content" backgroundColor={Colors.green} />

//       {/* ═══════════════════════════
//           HEADER
//       ═══════════════════════════ */}
//       <View
//         style={{
//           backgroundColor: Colors.green,
//           paddingHorizontal: 20,
//           paddingTop: 50,
//           paddingBottom: 30,
//           borderBottomLeftRadius: 32,
//           borderBottomRightRadius: 32,
//         }}
//       >
//         <Text
//           style={{
//             color: "#fff",
//             fontSize: 32,
//             fontWeight: "700",
//             letterSpacing: -0.5,
//             marginBottom: 20,
//           }}
//         >
//           Explore
//         </Text>

//         {/* Search Bar matching template design */}
//         <View
//           style={{
//             flexDirection: "row",
//             alignItems: "center",
//             backgroundColor: "#fff",
//             borderRadius: 22,
//             paddingHorizontal: 14,
//             paddingVertical: 8,
//           }}
//         >
//           <Feather name="search" size={20} color="#9CA3AF" />
//           <TextInput
//             value={search}
//             onChangeText={setSearch}
//             placeholder="Search places, locations..."
//             placeholderTextColor="#B0B0B0"
//             style={{
//               flex: 1,
//               fontSize: 13,
//               color: "#1F2937",
//               fontWeight: "500",
//               marginLeft: 8,
//             }}
//           />
//           {search.length > 0 && (
//             <TouchableOpacity
//               onPress={() => setSearch("")}
//               style={{ marginRight: 4 }}
//             >
//               <View
//                 style={{
//                   width: 18,
//                   height: 18,
//                   borderRadius: 9,
//                   backgroundColor: "#E5E7EB",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 <Text
//                   style={{ fontSize: 9, color: "#6B7280", fontWeight: "700" }}
//                 >
//                   ✕
//                 </Text>
//               </View>
//             </TouchableOpacity>
//           )}
//           <View
//             style={{
//               width: 1,
//               height: 10,
//               backgroundColor: "#E5E7EB",
//             }}
//           />
//           <TouchableOpacity style={{ marginLeft: 8 }}>
//             <Ionicons name="options-outline" size={28} color={Colors.green} />
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* ═══════════════════════════
//           FILTER PILLS
//       ═══════════════════════════ */}
//       <ScrollView
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={{
//           paddingHorizontal: 20,
//           marginTop: 18,
//           gap: 10,
//           height: 35,
//           marginBottom: 30,
//         }}
//         style={{ flexGrow: 0 }}
//       >
//         {FILTERS.map((f) => {
//           const isActive = activeFilter === f.id;
//           return (
//             <TouchableOpacity
//               key={f.id}
//               onPress={() => setActiveFilter(f.id)}
//               activeOpacity={0.75}
//               style={{
//                 flexDirection: "row",
//                 alignItems: "center",
//                 gap: 8,
//                 paddingHorizontal: 16,
//                 paddingVertical: 10,
//                 borderRadius: 17,
//                 backgroundColor: isActive ? Colors.green : Colors.lightGreen,
//                 shadowColor: isActive ? Colors.green : "transparent",
//                 shadowOffset: { width: 0, height: 4 },
//                 shadowOpacity: 0.3,
//                 shadowRadius: 8,
//                 elevation: isActive ? 5 : 0,
//               }}
//             >
//               {f.icon(isActive)}
//               <Text
//                 style={{
//                   fontSize: 12,
//                   fontWeight: "600",
//                   color: isActive ? "#fff" : Colors.green,
//                 }}
//               >
//                 {f.label}
//               </Text>
//             </TouchableOpacity>
//           );
//         })}
//       </ScrollView>

//       {/* ═══════════════════════════
//           RESULTS
//       ═══════════════════════════ */}

//       {/* Results count */}
//       {(search.length > 0 || activeFilter !== "All") && (
//         <View
//           style={{
//             paddingHorizontal: 20,
//             paddingBottom: 12,
//           }}
//         >
//           <Text
//             style={{
//               fontSize: 15,
//               color: "#9CA3AF",
//               fontWeight: "500",
//               letterSpacing: -0.2,
//             }}
//           >
//             {filtered.length} result{filtered.length !== 1 ? "s" : ""} found
//           </Text>
//         </View>
//       )}

//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={{
//           paddingHorizontal: 20,
//           paddingTop: 4,
//           paddingBottom: 48,
//         }}
//       >
//         {filtered.length === 0 ? (
//           /* ── Empty state ── */
//           <View
//             style={{
//               alignItems: "center",
//               justifyContent: "center",
//               paddingVertical: 80,
//             }}
//           >
//             <View
//               style={{
//                 width: 72,
//                 height: 72,
//                 borderRadius: 36,
//                 backgroundColor: Colors.lightGreen,
//                 alignItems: "center",
//                 justifyContent: "center",
//                 marginBottom: 16,
//               }}
//             >
//               <Feather name="search" size={24} color={Colors.green} />
//             </View>
//             <Text
//               style={{
//                 fontSize: 18,
//                 fontWeight: "700",
//                 color: "#111827",
//                 marginBottom: 6,
//                 letterSpacing: -0.3,
//               }}
//             >
//               No results found
//             </Text>
//             <Text
//               style={{
//                 fontSize: 14,
//                 color: "#9CA3AF",
//                 textAlign: "center",
//                 lineHeight: 20,
//               }}
//             >
//               Try a different search term{"\n"}or select another filter
//             </Text>
//             <TouchableOpacity
//               onPress={() => {
//                 setSearch("");
//                 setActiveFilter("All");
//               }}
//               activeOpacity={0.8}
//               style={{
//                 marginTop: 24,
//                 paddingHorizontal: 24,
//                 paddingVertical: 12,
//                 borderRadius: 20,
//                 backgroundColor: Colors.lightGreen,
//               }}
//             >
//               <Text
//                 style={{
//                   fontSize: 13,
//                   fontWeight: "700",
//                   color: Colors.green,
//                 }}
//               >
//                 Clear filters
//               </Text>
//             </TouchableOpacity>
//           </View>
//         ) : (
//           /* ── Cards ── */
//           <View style={{ gap: 20 }}>
//             {filtered.map((a) => (
//               <AttractionCard key={a.id} attraction={a} variant="full" />
//             ))}
//           </View>
//         )}
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  FlatList,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AttractionCard } from "../../components/AttractionCard";
import { Colors } from "../../constants/colors";
import { ATTRACTIONS } from "../../constants/data";
const FILTERS = [
  { id: "All", icon: "map", lib: "Feather" },
  { id: "Heritage", icon: "bank", lib: "MCI" },
  { id: "Park", icon: "tree-outline", lib: "MCI" },
  { id: "Beach", icon: "beach", lib: "MCI" },
  { id: "Attraction", icon: "star-outline", lib: "Ionicons" },
];

export default function ExploreScreen() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = ATTRACTIONS.filter((a) => {
    const matchesSearch =
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.location.toLowerCase().includes(search.toLowerCase());
    const matchesFilter =
      activeFilter === "All" ||
      a.category.toLowerCase() === activeFilter.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  const renderIcon = (lib: string, icon: string, color: string) => {
    if (lib === "MCI")
      return (
        <MaterialCommunityIcons name={icon as any} size={15} color={color} />
      );
    if (lib === "Ionicons")
      return <Ionicons name={icon as any} size={15} color={color} />;
    return <Feather name={icon as any} size={14} color={color} />;
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F4F6F5" }}>
      <StatusBar barStyle="dark-content" backgroundColor="#F4F6F5" />

      {/* ── Header ── */}
      <View
        style={{
          backgroundColor: "#F4F6F5",
          paddingHorizontal: 20,
          paddingTop: 16,
          paddingBottom: 14,
          borderBottomWidth: 1,
          borderBottomColor: "#EFEFEF",
        }}
      >
        <Text
          style={{
            fontSize: 26,
            fontWeight: "700",
            color: "#111827",
            letterSpacing: -0.5,
            marginBottom: 14,
          }}
        >
          Explore
        </Text>

        {/* Search */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#fff",
            borderRadius: 18,
            paddingHorizontal: 14,
            paddingVertical: 13,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.06,
            shadowRadius: 8,
            elevation: 2,
          }}
        >
          <Feather
            name="search"
            size={16}
            color="#9CA3AF"
            style={{ marginRight: 8 }}
          />
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Search places, locations..."
            placeholderTextColor="#B0B0B0"
            style={{
              flex: 1,
              fontSize: 13,
              color: "#1F2937",
              fontWeight: "500",
            }}
          />
          {search.length > 0 && (
            <TouchableOpacity onPress={() => setSearch("")}>
              <View
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: 9,
                  backgroundColor: "#D1D5DB",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="close" size={11} color="#6B7280" />
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* ── Filter pills — stays as ScrollView, only 5 items ── */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingVertical: 14,
          gap: 8,
        }}
        style={{ flexGrow: 0, backgroundColor: "#F4F6F5" }}
      >
        {FILTERS.map((f) => {
          const isActive = activeFilter === f.id;
          return (
            <TouchableOpacity
              key={f.id}
              onPress={() => setActiveFilter(f.id)}
              activeOpacity={0.75}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 6,
                paddingHorizontal: 14,
                paddingVertical: 8,
                borderRadius: 20,
                backgroundColor: isActive ? Colors.green : "#fff",
                shadowColor: isActive ? Colors.green : "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: isActive ? 0.25 : 0.05,
                shadowRadius: 6,
                elevation: isActive ? 4 : 1,
              }}
            >
              {renderIcon(f.lib, f.icon, isActive ? "#fff" : Colors.green)}
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: "600",
                  color: isActive ? "#fff" : "#374151",
                }}
              >
                {f.id}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* ── Results count ── */}
      {(search.length > 0 || activeFilter !== "All") && (
        <View style={{ paddingHorizontal: 20, paddingBottom: 8 }}>
          <Text style={{ fontSize: 12, color: "#9CA3AF", fontWeight: "500" }}>
            {filtered.length} result{filtered.length !== 1 ? "s" : ""} found
          </Text>
        </View>
      )}

      {/* ── FlatList replaces ScrollView here ── */}
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 4,
          paddingBottom: 36,
          gap: 16,
          // shows empty state centered even when list is empty
          flexGrow: 1,
        }}
        renderItem={({ item }) => (
          <AttractionCard attraction={item} variant="full" />
        )}
        // Built-in performance props
        removeClippedSubviews={true}
        maxToRenderPerBatch={8}
        windowSize={10}
        initialNumToRender={6}
        // Empty state — no need for conditional rendering around FlatList
        ListEmptyComponent={
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 60,
            }}
          >
            <View
              style={{
                width: 72,
                height: 72,
                borderRadius: 36,
                backgroundColor: Colors.lightGreen,
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 16,
              }}
            >
              <Feather name="search" size={28} color={Colors.green} />
            </View>
            <Text
              style={{
                fontSize: 17,
                fontWeight: "700",
                color: "#111827",
                marginBottom: 6,
              }}
            >
              No results found
            </Text>
            <Text
              style={{
                fontSize: 13,
                color: "#9CA3AF",
                textAlign: "center",
                lineHeight: 20,
              }}
            >
              Try a different search term{"\n"}or select another filter
            </Text>
            <TouchableOpacity
              onPress={() => {
                setSearch("");
                setActiveFilter("All");
              }}
              style={{
                marginTop: 20,
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 20,
                backgroundColor: Colors.lightGreen,
              }}
            >
              <Text
                style={{ fontSize: 13, fontWeight: "600", color: Colors.green }}
              >
                Clear filters
              </Text>
            </TouchableOpacity>
          </View>
        }
      />
    </SafeAreaView>
  );
}
