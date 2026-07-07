import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { JSX, useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from "../../constants/colors";
import { ATTRACTIONS } from "../../constants/data";

const { width } = Dimensions.get("window");

const AMENITY_CONFIG: Record<string, { icon: JSX.Element; label: string }> = {
  Parking: {
    icon: (
      <MaterialCommunityIcons name="parking" size={22} color={Colors.green} />
    ),
    label: "Parking",
  },
  "Rest Area": {
    icon: <Ionicons name="cafe-outline" size={22} color={Colors.green} />,
    label: "Rest Area",
  },
  Food: {
    icon: <Ionicons name="restaurant-outline" size={22} color={Colors.green} />,
    label: "Food",
  },
  Guide: {
    icon: <Ionicons name="compass-outline" size={22} color={Colors.green} />,
    label: "Guide",
  },
  Museum: {
    icon: (
      <MaterialCommunityIcons
        name="bank-outline"
        size={22}
        color={Colors.green}
      />
    ),
    label: "Museum",
  },
  "Gift Shop": {
    icon: <Ionicons name="bag-handle-outline" size={22} color={Colors.green} />,
    label: "Gift Shop",
  },
};

export default function AttractionDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const [saved, setSaved] = useState(false);

  const attraction = ATTRACTIONS.find((a) => a.id === id);

  /* ── Not found ── */
  if (!attraction) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#F4F6F5",
          alignItems: "center",
          justifyContent: "center",
          gap: 12,
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
          }}
        >
          <Ionicons name="map-outline" size={32} color={Colors.green} />
        </View>
        <Text style={{ fontSize: 16, fontWeight: "700", color: "#111827" }}>
          Attraction not found
        </Text>
        <TouchableOpacity
          onPress={() => router.back()}
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 20,
            backgroundColor: Colors.lightGreen,
          }}
        >
          <Text
            style={{ fontSize: 13, fontWeight: "600", color: Colors.green }}
          >
            Go back
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#F4F6F5" }}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
        bounces
      >
        {/* ═══════════════════════════
            HERO IMAGE
        ═══════════════════════════ */}
        <View style={{ position: "relative" }}>
          <Image
            source={{ uri: attraction.image }}
            style={{ width: "100%", height: 340 }}
            resizeMode="cover"
          />

          {/* Dark scrim at top for nav button readability */}
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 120,
              backgroundColor: "rgba(0,0,0,0.25)",
            }}
          />

          {/* Bottom scrim with name */}
          <View
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              paddingHorizontal: 20,
              paddingBottom: 20,
              paddingTop: 60,
              backgroundColor: "rgba(11,70,42,0.72)",
            }}
          >
            {/* Category chip */}
            <View
              style={{
                alignSelf: "flex-start",
                backgroundColor: Colors.gold,
                borderRadius: 20,
                paddingHorizontal: 10,
                paddingVertical: 4,
                marginBottom: 8,
              }}
            >
              <Text
                style={{
                  color: Colors.green,
                  fontSize: 9,
                  fontWeight: "800",
                  letterSpacing: 1,
                  textTransform: "uppercase",
                }}
              >
                {attraction.category}
              </Text>
            </View>

            <Text
              style={{
                color: "#fff",
                fontSize: 26,
                fontWeight: "800",
                letterSpacing: -0.5,
              }}
            >
              {attraction.name}
            </Text>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                marginTop: 6,
              }}
            >
              <Ionicons
                name="location-outline"
                size={13}
                color="rgba(255,255,255,0.75)"
              />
              <Text style={{ color: "rgba(255,255,255,0.75)", fontSize: 13 }}>
                {attraction.location}
              </Text>
            </View>
          </View>

          {/* ── Floating nav buttons ── */}
          <View
            style={{
              position: "absolute",
              top: insets.top + 10,
              left: 16,
              right: 16,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Back */}
            <TouchableOpacity
              onPress={() => router.back()}
              style={{
                width: 42,
                height: 42,
                borderRadius: 21,
                backgroundColor: "rgba(255,255,255,0.9)",
                alignItems: "center",
                justifyContent: "center",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.15,
                shadowRadius: 6,
                elevation: 4,
              }}
            >
              <Ionicons name="chevron-back" size={22} color="#111827" />
            </TouchableOpacity>

            {/* Save + Share */}
            <View style={{ flexDirection: "row", gap: 10 }}>
              <TouchableOpacity
                onPress={() => setSaved((p) => !p)}
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 21,
                  backgroundColor: "rgba(255,255,255,0.9)",
                  alignItems: "center",
                  justifyContent: "center",
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.15,
                  shadowRadius: 6,
                  elevation: 4,
                }}
              >
                <Ionicons
                  name={saved ? "heart" : "heart-outline"}
                  size={20}
                  color={saved ? "#EF4444" : "#111827"}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 21,
                  backgroundColor: "rgba(255,255,255,0.9)",
                  alignItems: "center",
                  justifyContent: "center",
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.15,
                  shadowRadius: 6,
                  elevation: 4,
                }}
              >
                <Feather name="share-2" size={18} color="#111827" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* ═══════════════════════════
            CONTENT CARD
        ═══════════════════════════ */}
        <View
          style={{
            backgroundColor: "#fff",
            borderTopLeftRadius: 32,
            borderTopRightRadius: 32,
            marginTop: -24,
            paddingHorizontal: 20,
            paddingTop: 28,
          }}
        >
          {/* Rating row */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <Ionicons name="star" size={18} color={Colors.gold} />
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "800",
                  color: "#111827",
                  letterSpacing: -0.3,
                }}
              >
                {attraction.rating.toFixed(1)}
              </Text>
              <Text style={{ fontSize: 13, color: "#9CA3AF", marginTop: 1 }}>
                ({attraction.reviews} reviews)
              </Text>
            </View>

            {/* Entry fee pill */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                backgroundColor: Colors.lightGreen,
                borderRadius: 20,
                paddingHorizontal: 12,
                paddingVertical: 6,
              }}
            >
              <Ionicons name="ticket-outline" size={14} color={Colors.green} />
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: "700",
                  color: Colors.green,
                }}
              >
                {attraction.entryFee ?? "Free"}
              </Text>
            </View>
          </View>

          {/* ── Info strip ── */}
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#F8FAF9",
              borderRadius: 20,
              padding: 16,
              marginBottom: 24,
              borderWidth: 1,
              borderColor: "#EFEFEF",
            }}
          >
            {/* Hours */}
            <View style={{ flex: 1, alignItems: "center", gap: 6 }}>
              <View
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 18,
                  backgroundColor: Colors.lightGreen,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="time-outline" size={18} color={Colors.green} />
              </View>
              <Text
                style={{ fontSize: 10, color: "#9CA3AF", fontWeight: "600" }}
              >
                OPEN
              </Text>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: "700",
                  color: "#374151",
                  textAlign: "center",
                }}
              >
                {attraction.openHours ?? "Varies"}
              </Text>
            </View>

            <View
              style={{
                width: 1,
                backgroundColor: "#E5E7EB",
                marginVertical: 4,
              }}
            />

            {/* Distance */}
            <View style={{ flex: 1, alignItems: "center", gap: 6 }}>
              <View
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 18,
                  backgroundColor: Colors.lightGreen,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons
                  name="navigate-outline"
                  size={18}
                  color={Colors.green}
                />
              </View>
              <Text
                style={{ fontSize: 10, color: "#9CA3AF", fontWeight: "600" }}
              >
                DISTANCE
              </Text>
              <Text
                style={{ fontSize: 11, fontWeight: "700", color: "#374151" }}
              >
                {attraction.distance ?? "—"}
              </Text>
            </View>

            <View
              style={{
                width: 1,
                backgroundColor: "#E5E7EB",
                marginVertical: 4,
              }}
            />

            {/* Entry Fee */}
            <View style={{ flex: 1, alignItems: "center", gap: 6 }}>
              <View
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 18,
                  backgroundColor: Colors.lightGreen,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="cash-outline" size={18} color={Colors.green} />
              </View>
              <Text
                style={{ fontSize: 10, color: "#9CA3AF", fontWeight: "600" }}
              >
                ENTRY
              </Text>
              <Text
                style={{ fontSize: 11, fontWeight: "700", color: "#374151" }}
              >
                {attraction.entryFee ?? "Free"}
              </Text>
            </View>
          </View>

          {/* ── About ── */}
          <Text
            style={{
              fontSize: 17,
              fontWeight: "700",
              color: "#111827",
              letterSpacing: -0.3,
              marginBottom: 10,
            }}
          >
            About
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "#4B5563",
              lineHeight: 22,
              marginBottom: 28,
            }}
          >
            {attraction.description ?? "A wonderful destination in Ghana."}
          </Text>

          {/* ── Amenities ── */}
          {attraction.amenities && attraction.amenities.length > 0 && (
            <>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "700",
                  color: "#111827",
                  letterSpacing: -0.3,
                  marginBottom: 16,
                }}
              >
                Amenities
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  gap: 12,
                  marginBottom: 8,
                }}
              >
                {attraction.amenities.map((a) => {
                  const config = AMENITY_CONFIG[a];
                  return (
                    <View
                      key={a}
                      style={{
                        alignItems: "center",
                        width: (width - 40 - 36) / 4,
                        gap: 6,
                      }}
                    >
                      <View
                        style={{
                          width: 52,
                          height: 52,
                          borderRadius: 16,
                          backgroundColor: Colors.lightGreen,
                          alignItems: "center",
                          justifyContent: "center",
                          borderWidth: 1,
                          borderColor: "rgba(11,70,42,0.08)",
                        }}
                      >
                        {config?.icon ?? (
                          <Ionicons
                            name="checkmark-circle-outline"
                            size={22}
                            color={Colors.green}
                          />
                        )}
                      </View>
                      <Text
                        style={{
                          fontSize: 11,
                          fontWeight: "600",
                          color: "#4B5563",
                          textAlign: "center",
                        }}
                      >
                        {config?.label ?? a}
                      </Text>
                    </View>
                  );
                })}
              </View>
            </>
          )}
        </View>
      </ScrollView>

      {/* ═══════════════════════════
          STICKY BOOK CTA
      ═══════════════════════════ */}
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "#fff",
          paddingHorizontal: 20,
          paddingTop: 14,
          paddingBottom: insets.bottom + 16,
          borderTopWidth: 1,
          borderTopColor: "#F3F4F6",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.06,
          shadowRadius: 12,
          elevation: 10,
        }}
      >
        <View style={{ flexDirection: "row", gap: 12 }}>
          {/* Price info */}
          <View style={{ justifyContent: "center" }}>
            <Text style={{ fontSize: 11, color: "#9CA3AF", fontWeight: "500" }}>
              Starting from
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "800",
                color: Colors.green,
                letterSpacing: -0.5,
              }}
            >
              {attraction.entryFee ?? "Free"}
            </Text>
          </View>

          {/* Book button */}
          <TouchableOpacity
            onPress={() => router.push(`/book/${attraction.id}` as any)}
            activeOpacity={0.88}
            style={{
              flex: 1,
              backgroundColor: Colors.green,
              borderRadius: 18,
              paddingVertical: 16,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              shadowColor: Colors.green,
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 10,
              elevation: 5,
            }}
          >
            <Ionicons name="calendar-outline" size={18} color="#fff" />
            <Text style={{ color: "#fff", fontWeight: "700", fontSize: 15 }}>
              Book a Tour
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
