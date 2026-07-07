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
