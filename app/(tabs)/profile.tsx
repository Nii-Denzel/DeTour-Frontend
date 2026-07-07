import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors } from "../../constants/colors";

interface MenuItemProps {
  iconName: keyof typeof Ionicons.glyphMap;
  label: string;
  onPress?: () => void;
  danger?: boolean;
}

const MenuItem = ({ iconName, label, onPress, danger }: MenuItemProps) => {
  const itemColor = danger ? Colors.alertRed || "#EF4444" : "#1F2937";

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.menuItem}
      activeOpacity={0.7}
    >
      <View style={styles.menuIconContainer}>
        <Ionicons name={iconName} size={20} color={itemColor} />
      </View>
      <Text style={[styles.menuItemText, { color: itemColor }]}>{label}</Text>
      <Ionicons name="chevron-forward" size={20} color="#D1D5DB" />
    </TouchableOpacity>
  );
};

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* ═══════════════════════════
            PROFILE CARD
        ═══════════════════════════ */}
        <View style={[styles.profileHeader, { backgroundColor: Colors.green }]}>
          <View
            style={[styles.avatarContainer, { backgroundColor: Colors.gold }]}
          >
            <Ionicons
              name="person"
              size={48}
              color="#fff"
              style={{ opacity: 0.9 }}
            />
          </View>
          <Text style={styles.profileName}>Ama Owusu</Text>
          <Text style={styles.profileEmail}>ama.owusu@email.com</Text>

          <TouchableOpacity style={styles.editButton} activeOpacity={0.8}>
            <Ionicons name="pencil" size={14} color="#fff" />
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* ═══════════════════════════
            MENU GROUPS
        ═══════════════════════════ */}
        <View style={styles.menuGroup}>
          <Text style={styles.sectionHeader}>Preferences</Text>
          <MenuItem iconName="globe-outline" label="Language Preference" />
          <MenuItem iconName="heart-outline" label="Saved Places" />
          <MenuItem iconName="star-outline" label="Reviews" />
          <MenuItem
            iconName="card-outline"
            label="Payment Methods"
            onPress={() => router.push("/payments" as any)}
          />
        </View>

        <View style={styles.menuGroup}>
          <Text style={styles.sectionHeader}>App</Text>
          <MenuItem iconName="settings-outline" label="Settings" />
          <MenuItem iconName="help-circle-outline" label="Help & Support" />
          <MenuItem
            iconName="information-circle-outline"
            label="About DeTour"
          />
        </View>

        <View style={styles.menuGroup}>
          <MenuItem iconName="log-out-outline" label="Sign Out" danger />
        </View>

        {/* ═══════════════════════════
            SHORTCUT ACTIONS
        ═══════════════════════════ */}
        <View style={styles.shortcutsContainer}>
          <TouchableOpacity
            style={[
              styles.shortcutCard,
              { backgroundColor: Colors.alertBg || "#FEE2E2" },
            ]}
            onPress={() => router.push("/safety" as any)}
            activeOpacity={0.8}
          >
            <Ionicons
              name="medkit"
              size={28}
              color={Colors.alertRed || "#EF4444"}
              style={styles.shortcutIcon}
            />
            <Text
              style={[
                styles.shortcutText,
                { color: Colors.alertRed || "#EF4444" },
              ]}
            >
              Safety
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.shortcutCard,
              { backgroundColor: Colors.lightGreen },
            ]}
            onPress={() => router.push("/phrasebook" as any)}
            activeOpacity={0.8}
          >
            <Ionicons
              name="chatbubbles"
              size={28}
              color={Colors.green}
              style={styles.shortcutIcon}
            />
            <Text style={[styles.shortcutText, { color: Colors.green }]}>
              Phrasebook
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F9FAFB", // gray-50
  },

  // Profile Header Styles
  profileHeader: {
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  avatarContainer: {
    width: 96,
    height: 96,
    borderRadius: 48,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    borderWidth: 4,
    borderColor: "rgba(255,255,255,0.2)",
  },
  profileName: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 22,
    letterSpacing: -0.3,
  },
  profileEmail: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 14,
    marginTop: 4,
  },
  editButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.3)",
    backgroundColor: "rgba(255,255,255,0.1)",
    gap: 6,
  },
  editButtonText: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 13,
  },

  // Menu Styles
  menuGroup: {
    marginTop: 24,
  },
  sectionHeader: {
    fontSize: 12,
    color: "#9CA3AF",
    fontWeight: "700",
    paddingHorizontal: 24,
    paddingVertical: 8,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6", // gray-100
  },
  menuIconContainer: {
    width: 32,
    alignItems: "flex-start",
  },
  menuItemText: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
  },

  // Shortcuts
  shortcutsContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 32,
    gap: 16,
  },
  shortcutCard: {
    flex: 1,
    borderRadius: 20,
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  shortcutIcon: {
    marginBottom: 8,
  },
  shortcutText: {
    fontWeight: "700",
    fontSize: 14,
  },
});
