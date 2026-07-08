// import { useRouter } from "expo-router";
// import React from "react";
// import {
//   SafeAreaView,
//   ScrollView,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import { Colors } from "../../constants/colors";
// import { TRANSACTIONS } from "../../constants/data";

// export default function PaymentsScreen() {
//   const router = useRouter();

//   return (
//     <SafeAreaView className="flex-1 bg-white">
//       {/* Header */}
//       <View className="flex-row items-center px-5 py-4 border-b border-gray-100">
//         <TouchableOpacity onPress={() => router.back()} className="mr-3">
//           <Text className="text-2xl text-gray-600">‹</Text>
//         </TouchableOpacity>
//         <Text className="font-bold text-xl text-gray-900">Payments</Text>
//       </View>

//       <ScrollView showsVerticalScrollIndicator={false}>
//         {/* Balance Card */}
//         <View
//           className="mx-5 mt-5 rounded-3xl overflow-hidden"
//           style={{ backgroundColor: Colors.green }}
//         >
//           <View className="px-5 pt-5 pb-6">
//             <View className="flex-row items-center gap-3 mb-4">
//               <View className="bg-yellow-400 rounded-xl px-3 py-1.5">
//                 <Text className="font-bold text-green-900 text-sm">
//                   MTN MoMo
//                 </Text>
//               </View>
//               <Text className="text-white opacity-70 text-sm">
//                 024 123 4567
//               </Text>
//             </View>
//             <Text className="text-white opacity-60 text-sm mb-1">Balance</Text>
//             <Text className="text-white font-bold" style={{ fontSize: 32 }}>
//               GHS 120.50
//             </Text>
//           </View>
//         </View>

//         {/* Recent Transactions */}
//         <View className="px-5 mt-6">
//           <Text className="font-bold text-lg text-gray-900 mb-4">
//             Recent Transactions
//           </Text>
//           {TRANSACTIONS.map((tx) => (
//             <View
//               key={tx.id}
//               className="flex-row items-center justify-between py-4 border-b border-gray-50"
//             >
//               <View className="flex-row items-center gap-3">
//                 <View
//                   className="w-10 h-10 rounded-full items-center justify-center"
//                   style={{ backgroundColor: Colors.lightGreen }}
//                 >
//                   <Text className="text-base">🎟️</Text>
//                 </View>
//                 <View>
//                   <Text className="font-semibold text-sm text-gray-900">
//                     {tx.name}
//                   </Text>
//                   <Text className="text-gray-400 text-xs">{tx.date}</Text>
//                 </View>
//               </View>
//               <View className="items-end">
//                 <Text
//                   className="font-bold text-sm"
//                   style={{ color: Colors.alertRed }}
//                 >
//                   - GHS {tx.amount}
//                 </Text>
//                 <View className="bg-green-100 rounded-full px-2 py-0.5 mt-1">
//                   <Text className="text-xs font-semibold text-green-700 capitalize">
//                     {tx.status}
//                   </Text>
//                 </View>
//               </View>
//             </View>
//           ))}
//         </View>

//         {/* Add Payment */}
//         <View className="px-5 mt-6 mb-10">
//           <TouchableOpacity
//             className="w-full py-4 rounded-2xl items-center border-2"
//             style={{ borderColor: Colors.green }}
//           >
//             <Text
//               className="font-bold text-base"
//               style={{ color: Colors.green }}
//             >
//               + Add Payment Method
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../constants/colors";
import { TRANSACTIONS } from "../../constants/data";

const PAYMENT_METHODS = [
  {
    id: "momo",
    label: "MTN MoMo",
    number: "024 123 4567",
    balance: "GHS 120.50",
    color: "#FFCC00",
    textColor: "#1a1a1a",
    icon: <MaterialCommunityIcons name="cellphone" size={22} color="#1a1a1a" />,
  },
  {
    id: "Telecel",
    label: "Telecel Cash",
    number: "050 987 6543",
    balance: "GHS 45.00",
    color: "#E60000",
    textColor: "#fff",
    icon: <MaterialCommunityIcons name="cellphone" size={22} color="#fff" />,
  },
];

export default function PaymentsScreen() {
  const router = useRouter();
  const [activeCard, setActiveCard] = useState("momo");

  const active = PAYMENT_METHODS.find((p) => p.id === activeCard)!;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F4F6F5" }}>
      <StatusBar barStyle="dark-content" backgroundColor="#F4F6F5" />

      {/* ═══════════════════════════
          HEADER
      ═══════════════════════════ */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 20,
          paddingTop: 16,
          paddingBottom: 14,
          backgroundColor: "#F4F6F5",
          marginTop: 35,
        }}
      >
        <TouchableOpacity
          onPress={() => router.back()}
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
            marginRight: 14,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.07,
            shadowRadius: 6,
            elevation: 2,
          }}
        >
          <Ionicons name="chevron-back" size={20} color="#111827" />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "700",
            color: "#111827",
            letterSpacing: -0.5,
          }}
        >
          Payments
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 48 }}
      >
        <View style={{ paddingHorizontal: 20 }}>
          {/* ═══════════════════════════
              WALLET CARD
          ═══════════════════════════ */}
          <View
            style={{
              borderRadius: 28,
              marginTop: 10,
              overflow: "hidden",
              marginBottom: 15,
              backgroundColor: Colors.green,
              shadowColor: Colors.green,
              shadowOffset: { width: 0, height: 8 },
              shadowOpacity: 0.35,
              shadowRadius: 20,
              elevation: 8,
            }}
          >
            {/* Card inner */}
            <View style={{ padding: 24 }}>
              {/* Top row: label + network badge */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 28,
                }}
              >
                <View>
                  <Text
                    style={{
                      color: "rgba(255,255,255,0.55)",
                      fontSize: 12,
                      fontWeight: "600",
                      letterSpacing: 1,
                    }}
                  >
                    WALLET BALANCE
                  </Text>
                  <Text
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      fontSize: 13,
                      marginTop: 2,
                    }}
                  >
                    {active.number}
                  </Text>
                </View>

                {/* Network badge */}
                <View
                  style={{
                    backgroundColor: active.color,
                    borderRadius: 14,
                    paddingHorizontal: 12,
                    paddingVertical: 6,
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  {active.icon}
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "700",
                      color: active.textColor,
                    }}
                  >
                    {active.label}
                  </Text>
                </View>
              </View>

              {/* Balance */}
              <Text
                style={{
                  color: "#fff",
                  fontSize: 38,
                  fontWeight: "800",
                  letterSpacing: -1,
                }}
              >
                {active.balance}
              </Text>

              {/* Glass divider */}
              <View
                style={{
                  height: 1,
                  backgroundColor: "rgba(255,255,255,0.15)",
                  marginVertical: 20,
                }}
              />

              {/* Quick actions */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                {[
                  { icon: "arrow-up-circle-outline", label: "Send" },
                  { icon: "arrow-down-circle-outline", label: "Receive" },
                  { icon: "time-outline", label: "History" },
                  { icon: "ellipsis-horizontal-outline", label: "More" },
                ].map((action) => (
                  <TouchableOpacity
                    key={action.label}
                    activeOpacity={0.75}
                    style={{ alignItems: "center", gap: 6 }}
                  >
                    <View
                      style={{
                        width: 46,
                        height: 46,
                        borderRadius: 23,
                        backgroundColor: "rgba(255,255,255,0.14)",
                        borderWidth: 1,
                        borderColor: "rgba(255,255,255,0.2)",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Ionicons
                        name={action.icon as any}
                        size={20}
                        color="#fff"
                      />
                    </View>
                    <Text
                      style={{
                        color: "rgba(255,255,255,0.7)",
                        fontSize: 11,
                        fontWeight: "600",
                      }}
                    >
                      {action.label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>

          {/* ═══════════════════════════
              CARD SWITCHER DOTS
          ═══════════════════════════ */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              gap: 6,
              marginBottom: 28,
            }}
          >
            {PAYMENT_METHODS.map((p) => (
              <TouchableOpacity
                key={p.id}
                onPress={() => setActiveCard(p.id)}
                style={{
                  width: activeCard === p.id ? 24 : 8,
                  height: 8,
                  borderRadius: 4,
                  backgroundColor:
                    activeCard === p.id ? Colors.green : "#D1D5DB",
                }}
              />
            ))}
          </View>

          {/* ═══════════════════════════
              ADD PAYMENT METHOD
          ═══════════════════════════ */}
          <TouchableOpacity
            activeOpacity={0.85}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              backgroundColor: "#fff",
              borderRadius: 18,
              paddingVertical: 14,
              marginBottom: 28,
              borderWidth: 1.5,
              borderColor: Colors.lightGreen,
              borderStyle: "dashed",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.04,
              shadowRadius: 6,
              elevation: 1,
            }}
          >
            <View
              style={{
                width: 28,
                height: 28,
                borderRadius: 14,
                backgroundColor: Colors.lightGreen,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons name="add" size={18} color={Colors.green} />
            </View>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "700",
                color: Colors.green,
              }}
            >
              Add Payment Method
            </Text>
          </TouchableOpacity>

          {/* ═══════════════════════════
              RECENT TRANSACTIONS
          ═══════════════════════════ */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <Text
              style={{
                fontSize: 17,
                fontWeight: "700",
                color: "#111827",
                letterSpacing: -0.3,
              }}
            >
              Recent Transactions
            </Text>
            <TouchableOpacity>
              <Text
                style={{ fontSize: 12, fontWeight: "700", color: Colors.green }}
              >
                See all
              </Text>
            </TouchableOpacity>
          </View>

          {/* Transaction list */}
          <View
            style={{
              backgroundColor: "#fff",
              borderRadius: 24,
              overflow: "hidden",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.05,
              shadowRadius: 10,
              elevation: 2,
            }}
          >
            {TRANSACTIONS.map((tx, index) => (
              <View key={tx.id}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingHorizontal: 16,
                    paddingVertical: 14,
                  }}
                >
                  {/* Icon */}
                  <View
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 22,
                      backgroundColor: Colors.lightGreen,
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: 12,
                    }}
                  >
                    <MaterialCommunityIcons
                      name="ticket-outline"
                      size={20}
                      color={Colors.green}
                    />
                  </View>

                  {/* Info */}
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "600",
                        color: "#111827",
                        letterSpacing: -0.1,
                      }}
                      numberOfLines={1}
                    >
                      {tx.name}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 4,
                        marginTop: 3,
                      }}
                    >
                      <Ionicons
                        name="calendar-outline"
                        size={11}
                        color="#9CA3AF"
                      />
                      <Text style={{ fontSize: 11, color: "#9CA3AF" }}>
                        {tx.date}
                      </Text>
                    </View>
                  </View>

                  {/* Amount + status */}
                  <View style={{ alignItems: "flex-end" }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "700",
                        color: Colors.alertRed,
                      }}
                    >
                      - GHS {tx.amount}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 3,
                        backgroundColor: "#DCFCE7",
                        borderRadius: 10,
                        paddingHorizontal: 7,
                        paddingVertical: 2,
                        marginTop: 4,
                      }}
                    >
                      <Ionicons
                        name="checkmark-circle"
                        size={11}
                        color="#16A34A"
                      />
                      <Text
                        style={{
                          fontSize: 10,
                          fontWeight: "700",
                          color: "#16A34A",
                          textTransform: "capitalize",
                        }}
                      >
                        {tx.status}
                      </Text>
                    </View>
                  </View>
                </View>

                {/* Divider — skip on last item */}
                {index < TRANSACTIONS.length - 1 && (
                  <View
                    style={{
                      height: 1,
                      backgroundColor: "#F3F4F6",
                      marginHorizontal: 16,
                    }}
                  />
                )}
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
