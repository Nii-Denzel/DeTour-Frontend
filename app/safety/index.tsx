import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../constants/colors";
import { SAFETY_ALERTS } from "../../constants/data";

const CONTACTS = [
  { iconName: "shield-checkmark", name: "Police", number: "191" },
  { iconName: "flame", name: "Fire Service", number: "192" },
  { iconName: "medkit", name: "Ambulance", number: "193" },
  { iconName: "headset", name: "Tourist Helpline", number: "0302 123 456" },
];

export default function SafetyScreen() {
  const router = useRouter();

  const handleCall = (number: string) => {
    Linking.openURL(`tel:${number}`);
  };

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
        <Text style={styles.headerTitle}>Safety</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* ═══════════════════════════
            SOS EMERGENCY CARD
        ═══════════════════════════ */}
        <View
          style={[
            styles.sosCard,
            { backgroundColor: Colors.alertRed || "#EF4444" },
          ]}
        >
          <View>
            <Text style={styles.sosTitle}>Emergency</Text>
            <Text style={styles.sosSubtitle}>Tap for help</Text>
          </View>
          <TouchableOpacity
            style={styles.sosButton}
            onPress={() => handleCall("191")}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.sosButtonText,
                { color: Colors.alertRed || "#EF4444" },
              ]}
            >
              SOS
            </Text>
          </TouchableOpacity>
        </View>

        {/* ═══════════════════════════
            SAFETY ALERTS
        ═══════════════════════════ */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Safety Alerts</Text>
          <TouchableOpacity>
            <Text style={[styles.sectionLink, { color: Colors.green }]}>
              View all
            </Text>
          </TouchableOpacity>
        </View>

        {SAFETY_ALERTS.map((alert) => (
          <View
            key={alert.id}
            style={[
              styles.alertCard,
              { backgroundColor: Colors.alertBg || "#FEE2E2" },
            ]}
          >
            <Ionicons
              name="warning"
              size={24}
              color={Colors.alertRed || "#EF4444"}
            />
            <View style={styles.alertTextContainer}>
              <Text
                style={[
                  styles.alertMessage,
                  { color: Colors.alertRed || "#EF4444" },
                ]}
              >
                {alert.message}
              </Text>
              <Text style={styles.alertDate}>{alert.datetime}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#D1D5DB" />
          </View>
        ))}

        {/* ═══════════════════════════
            USEFUL CONTACTS
        ═══════════════════════════ */}
        <Text style={[styles.sectionTitle, styles.contactsTitle]}>
          Useful Contacts
        </Text>

        {CONTACTS.map((c) => (
          <TouchableOpacity
            key={c.name}
            onPress={() => handleCall(c.number)}
            style={styles.contactRow}
            activeOpacity={0.7}
          >
            <View style={styles.contactInfo}>
              <Ionicons name={c.iconName as any} size={22} color="#4B5563" />
              <Text style={styles.contactName}>{c.name}</Text>
            </View>
            <Text style={[styles.contactNumber, { color: Colors.green }]}>
              {c.number}
            </Text>
          </TouchableOpacity>
        ))}

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  // Header
  header: {
    marginTop: 40,
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
  scrollContent: {
    paddingHorizontal: 20,
  },

  // SOS Card
  sosCard: {
    marginTop: 20,
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  sosTitle: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 24,
  },
  sosSubtitle: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 14,
    marginTop: 2,
  },
  sosButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sosButtonText: {
    fontWeight: "900",
    fontSize: 16,
    letterSpacing: 0.5,
  },

  // Alerts
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 24,
    marginBottom: 12,
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#111827",
  },
  sectionLink: {
    fontSize: 14,
    fontWeight: "500",
  },
  alertCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    gap: 12,
  },
  alertTextContainer: {
    flex: 1,
  },
  alertMessage: {
    fontWeight: "600",
    fontSize: 14,
  },
  alertDate: {
    fontSize: 12,
    color: "#9CA3AF",
    marginTop: 4,
  },

  // Contacts
  contactsTitle: {
    marginTop: 16,
    marginBottom: 12,
  },
  contactRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  contactInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  contactName: {
    fontSize: 16,
    color: "#1F2937",
    fontWeight: "500",
  },
  contactNumber: {
    fontWeight: "600",
    fontSize: 15,
  },
});
