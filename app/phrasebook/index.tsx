// import { useRouter } from "expo-router";
// import React, { useState } from "react";
// import {
//   SafeAreaView,
//   ScrollView,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import { Colors } from "../../constants/colors";
// import { PHRASES } from "../../constants/data";

// type Language = "twi" | "ga" | "ewe" | "hausa";
// const LANGUAGES: { key: Language; label: string }[] = [
//   { key: "twi", label: "Twi" },
//   { key: "ga", label: "Ga" },
//   { key: "ewe", label: "Ewe" },
//   { key: "hausa", label: "Hausa" },
// ];

// export default function PhrasebookScreen() {
//   const router = useRouter();
//   const [activeLang, setActiveLang] = useState<Language>("twi");

//   return (
//     <SafeAreaView className="flex-1 bg-white">
//       {/* Header */}
//       <View className="flex-row items-center px-5 py-4 border-b border-gray-100">
//         <TouchableOpacity onPress={() => router.back()} className="mr-3">
//           <Text className="text-2xl text-gray-600">‹</Text>
//         </TouchableOpacity>
//         <Text className="font-bold text-xl text-gray-900">Phrasebook</Text>
//       </View>

//       {/* Language Tabs */}
//       <View className="flex-row px-5 py-3 border-b border-gray-100 gap-2">
//         {LANGUAGES.map((l) => (
//           <TouchableOpacity
//             key={l.key}
//             onPress={() => setActiveLang(l.key)}
//             className="flex-1 py-2 rounded-xl items-center"
//             style={{
//               backgroundColor:
//                 activeLang === l.key ? Colors.green : Colors.lightGreen,
//             }}
//           >
//             <Text
//               className="text-sm font-semibold"
//               style={{
//                 color: activeLang === l.key ? Colors.white : Colors.green,
//               }}
//             >
//               {l.label}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       <ScrollView
//         className="flex-1 px-5 pt-3"
//         showsVerticalScrollIndicator={false}
//       >
//         {PHRASES.map((phrase, i) => (
//           <View
//             key={i}
//             className="flex-row items-center justify-between py-4 border-b border-gray-100"
//           >
//             <View className="flex-1">
//               <Text className="font-bold text-base text-gray-900">
//                 {phrase[activeLang] ?? "—"}
//               </Text>
//               <Text className="text-gray-500 text-sm mt-0.5">
//                 {phrase.english}
//               </Text>
//             </View>
//             <TouchableOpacity
//               className="w-10 h-10 rounded-full items-center justify-center ml-3"
//               style={{ backgroundColor: Colors.lightGreen }}
//             >
//               <Text className="text-lg">▶</Text>
//             </TouchableOpacity>
//           </View>
//         ))}
//         <View className="h-8" />
//       </ScrollView>
//     </SafeAreaView>
//   );
// }
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors } from "../../constants/colors";
import { PHRASES } from "../../constants/data";

type Language = "twi" | "ga" | "ewe" | "hausa";
const LANGUAGES: { key: Language; label: string }[] = [
  { key: "twi", label: "Twi" },
  { key: "ga", label: "Ga" },
  { key: "ewe", label: "Ewe" },
  { key: "hausa", label: "Hausa" },
];

export default function PhrasebookScreen() {
  const router = useRouter();
  const [activeLang, setActiveLang] = useState<Language>("twi");

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* ═══════════════════════════
          HEADER
      ═══════════════════════════ */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Ionicons name="chevron-back" size={24} color="#4B5563" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Phrasebook</Text>
      </View>

      {/* ═══════════════════════════
          LANGUAGE TABS
      ═══════════════════════════ */}
      <View style={styles.tabsContainer}>
        {LANGUAGES.map((l) => {
          const isActive = activeLang === l.key;
          return (
            <TouchableOpacity
              key={l.key}
              onPress={() => setActiveLang(l.key)}
              style={[
                styles.tabButton,
                {
                  backgroundColor: isActive ? Colors.green : Colors.lightGreen,
                },
              ]}
              activeOpacity={0.8}
            >
              <Text
                style={[
                  styles.tabText,
                  { color: isActive ? "#ffffff" : Colors.green },
                ]}
              >
                {l.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* ═══════════════════════════
          PHRASES LIST
      ═══════════════════════════ */}
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {PHRASES.map((phrase, i) => (
          <View key={i} style={styles.phraseRow}>
            <View style={styles.phraseTextContainer}>
              <Text style={styles.translatedText}>
                {phrase[activeLang] ?? "—"}
              </Text>
              <Text style={styles.englishText}>{phrase.english}</Text>
            </View>

            <TouchableOpacity
              style={[
                styles.playButton,
                { backgroundColor: Colors.lightGreen },
              ]}
              activeOpacity={0.7}
            >
              <Ionicons name="volume-high" size={20} color={Colors.green} />
            </TouchableOpacity>
          </View>
        ))}
        <View style={{ height: 32 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  // Header Styles
  header: {
    marginTop:40,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  backButton: {
    marginRight: 12,
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#111827",
  },

  // Tabs Styles
  tabsContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
    gap: 8,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 12,
    alignItems: "center",
  },
  tabText: {
    fontSize: 14,
    fontWeight: "600",
  },

  // Scroll Content Styles
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 12,
  },

  // Phrase Row Styles
  phraseRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  phraseTextContainer: {
    flex: 1,
  },
  translatedText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#111827",
  },
  englishText: {
    color: "#6B7280",
    fontSize: 14,
    marginTop: 4,
  },
  playButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 12,
  },
});
