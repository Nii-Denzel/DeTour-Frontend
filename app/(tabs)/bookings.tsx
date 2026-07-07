import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors } from "../../constants/colors";
import { BOOKINGS } from "../../constants/data";
import { Booking } from "../../types";

type BookingTab = "upcoming" | "completed" | "cancelled";

const StatusBadge = ({ status }: { status: Booking["status"] }) => {
  const config = {
    upcoming: { label: "Confirmed", bg: "#DCFCE7", text: "#166534" },
    completed: { label: "Completed", bg: "#DBEAFE", text: "#1E40AF" },
    cancelled: {
      label: "Cancelled",
      bg: Colors.alertBg || "#FEE2E2",
      text: Colors.alertRed || "#991B1B",
    },
  };
  const c = config[status];

  return (
    <View style={[styles.badgeContainer, { backgroundColor: c.bg }]}>
      <Text style={[styles.badgeText, { color: c.text }]}>{c.label}</Text>
    </View>
  );
};

const BookingCard = ({ booking }: { booking: Booking }) => (
  <View style={styles.cardContainer}>
    <Image
      source={{ uri: booking.image }}
      style={styles.cardImage}
      resizeMode="cover"
    />
    <View style={styles.cardBody}>
      {/* Title & Status */}
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle} numberOfLines={1}>
          {booking.attractionName}
        </Text>
        <StatusBadge status={booking.status} />
      </View>

      {/* Info Rows */}
      <View style={styles.infoRow}>
        <Ionicons name="calendar-outline" size={14} color="#6B7280" />
        <Text style={styles.infoText}>
          {booking.date} • {booking.time}
        </Text>
      </View>

      {booking.guide && (
        <View style={styles.infoRow}>
          <Ionicons name="person-outline" size={14} color="#6B7280" />
          <Text style={styles.infoText}>{booking.guide} (Guide)</Text>
        </View>
      )}

      <View style={styles.infoRow}>
        <Ionicons name="people-outline" size={14} color="#6B7280" />
        <Text style={styles.infoText}>{booking.people} People</Text>
      </View>

      {/* Footer / Pricing */}
      <View style={styles.cardFooter}>
        <Text style={[styles.priceText, { color: Colors.green }]}>
          GHS {booking.totalAmount}
        </Text>
        <TouchableOpacity
          style={[styles.btnDetails, { backgroundColor: Colors.lightGreen }]}
          activeOpacity={0.8}
        >
          <Text style={[styles.btnDetailsText, { color: Colors.green }]}>
            View Details
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

export default function BookingsScreen() {
  const [activeTab, setActiveTab] = useState<BookingTab>("upcoming");

  const filtered = BOOKINGS.filter((b) => b.status === activeTab);

  const TABS: { key: BookingTab; label: string }[] = [
    { key: "upcoming", label: "Upcoming" },
    { key: "completed", label: "Completed" },
    { key: "cancelled", label: "Cancelled" },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Bookings</Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        {TABS.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <TouchableOpacity
              key={tab.key}
              onPress={() => setActiveTab(tab.key)}
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
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Main Content Area */}
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {filtered.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Ionicons name="calendar-clear-outline" size={48} color="#D1D5DB" />
            <Text style={styles.emptyTitle}>No {activeTab} bookings</Text>
            <Text style={styles.emptyDesc}>
              Your {activeTab} tours and experiences will appear here.
            </Text>
          </View>
        ) : (
          filtered.map((b) => <BookingCard key={b.id} booking={b} />)
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
    marginTop: 40,
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#111827",
  },
  tabsContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 8,
    gap: 8,
  },
  tabButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  tabText: {
    fontSize: 14,
    fontWeight: "600",
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 32,
  },

  // Empty State Styles
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 80,
  },
  emptyTitle: {
    color: "#6B7280",
    fontSize: 16,
    fontWeight: "600",
    marginTop: 12,
  },
  emptyDesc: {
    color: "#9CA3AF",
    fontSize: 14,
    marginTop: 4,
    textAlign: "center",
    paddingHorizontal: 32,
  },

  // Card Styles
  cardContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#F3F4F6",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
  },
  cardImage: {
    width: "100%",
    height:30,
  },
  cardBody: {
    padding: 16,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#111827",
    flex: 1,
    marginRight: 8,
  },
  badgeContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: "flex-start",
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "600",
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
    gap: 6,
  },
  infoText: {
    color: "#6B7280",
    fontSize: 14,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#F3F4F6",
  },
  priceText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  btnDetails: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 12,
  },
  btnDetailsText: {
    fontSize: 14,
    fontWeight: "600",
  },
});
