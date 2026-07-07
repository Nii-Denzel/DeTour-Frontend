import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../constants/colors";
import { ATTRACTIONS } from "../../constants/data";

const { width } = Dimensions.get("window");

const CATEGORIES = [
  {
    id: "attractions",
    label: "Attractions",
    icon: (active: boolean) => (
      <MaterialCommunityIcons
        name="bank"
        size={24}
        color={active ? "#fff" : Colors.green}
      />
    ),
  },
  {
    id: "tours",
    label: "Tours",
    icon: (active: boolean) => (
      <MaterialCommunityIcons
        name="ticket-outline"
        size={24}
        color={active ? "#fff" : Colors.green}
      />
    ),
  },
  {
    id: "events",
    label: "Events",
    icon: (active: boolean) => (
      <Ionicons
        name="calendar-outline"
        size={22}
        color={active ? "#fff" : Colors.green}
      />
    ),
  },
  {
    id: "food",
    label: "Food",
    icon: (active: boolean) => (
      <Ionicons
        name="restaurant-outline"
        size={22}
        color={active ? "#fff" : Colors.green}
      />
    ),
  },
  {
    id: "more",
    label: "More",
    icon: (active: boolean) => (
      <Feather name="grid" size={20} color={active ? "#fff" : Colors.green} />
    ),
  },
];

const FEATURED = ATTRACTIONS[0];

export default function HomeScreen() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("attractions");
  const [search, setSearch] = useState("");

  const recommended = ATTRACTIONS.slice(1, 3);
  const popular = ATTRACTIONS.slice(0, 4);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F4F6F5" }}>
      <StatusBar backgroundColor={Colors.green} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 48 }}
      >
        {/* ═══════════════════════════
            HEADER
        ═══════════════════════════ */}
        <View
          style={{
            backgroundColor: Colors.green,
            paddingHorizontal: 20,
            paddingTop: 50,
            paddingBottom: 30,
            borderBottomLeftRadius: 32,
            borderBottomRightRadius: 32,
          }}
        >
          {/* Greeting + bell */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: 20,
            }}
          >
            <View>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 32,
                  fontWeight: "700",
                  letterSpacing: -0.5,
                }}
              >
                Hello, Ama 👋
              </Text>
              <Text
                style={{
                  color: "rgba(255,255,255,0.68)",
                  fontSize: 20,
                  fontWeight: "500",
                  marginTop: 3,
                }}
              >
                Where to today?
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 7,
                  gap: 4,
                }}
              >
                <Ionicons name="location-sharp" size={18} color={Colors.gold} />
                <Text
                  style={{
                    fontSize: 15,
                    color: "rgba(255,255,255,0.58)",
                    fontWeight: "500",
                  }}
                >
                  Accra, Greater Accra
                </Text>
              </View>
            </View>

            {/* Bell */}
            <TouchableOpacity
              style={{
                width: 44,
                height: 44,
                borderRadius: 22,
                backgroundColor: "rgba(255,255,255,0.13)",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Feather name="bell" size={25} color="#fff" />
              <View
                style={{
                  position: "absolute",
                  top: 9,
                  right: 10,
                  width: 9,
                  height: 9,
                  borderRadius: 5,
                  backgroundColor: "#EF4444",
                  borderWidth: 1.5,
                  borderColor: Colors.green,
                }}
              />
            </TouchableOpacity>
          </View>

          {/* Search */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: 22,
              paddingHorizontal: 14,
              paddingVertical: 8,
            }}
          >
            <Feather name="search" size={20} color="#9CA3AF" />
            <TextInput
              value={search}
              onChangeText={setSearch}
              placeholder="Search attractions, places, guides..."
              placeholderTextColor="#B0B0B0"
              style={{
                flex: 1,
                fontSize: 13,
                color: "#1F2937",
                fontWeight: "500",
                marginLeft: 8,
              }}
            />
            <View
              style={{
                width: 1,
                height: 10,
                backgroundColor: "#E5E7EB",
              }}
            />
            <TouchableOpacity style={{ marginLeft: 8 }}>
              <Ionicons name="options-outline" size={28} color={Colors.green} />
            </TouchableOpacity>
          </View>
        </View>

        {/* ═══════════════════════════
            BODY
        ═══════════════════════════ */}
        <View style={{ paddingHorizontal: 10, paddingTop: 28 }}>
          {/* ── Featured Banner with glass overlay ── */}
          <TouchableOpacity
            onPress={() => router.push(`/attraction/${FEATURED.id}` as any)}
            activeOpacity={0.9}
            style={{
              borderRadius: 5,
              overflow: "hidden",
              marginBottom: 24,
              shadowColor: "gray",
              shadowOpacity: 0,
              shadowRadius: 1,
              elevation: 4,
            }}
          >
            <Image
              source={{ uri: FEATURED.image }}
              style={{ width: "100%", height: 300 }}
              resizeMode="cover"
            />

            {/* Frosted glass overlay */}
            <View
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                margin: 20,
                borderRadius: 6,
                backgroundColor: "rgba(11,70,42,0.89)",
                borderWidth: 1,
                borderColor: "rgba(255,255,255,0.18)",
                paddingHorizontal: 16,
                paddingVertical: 10,
              }}
            >
              {/* Gold badge */}
              <View
                style={{
                  alignSelf: "flex-start",
                  backgroundColor: Colors.gold,
                  borderRadius: 20,
                  paddingHorizontal: 9,
                  paddingVertical: 3,
                  marginBottom: 8,
                }}
              >
                <Text
                  style={{
                    color: Colors.green,
                    fontSize: 9,
                    fontWeight: "800",
                    letterSpacing: 1,
                  }}
                >
                  FEATURED
                </Text>
              </View>

              <Text
                style={{
                  color: "#fff",
                  fontSize: 19,
                  fontWeight: "700",
                  letterSpacing: -0.4,
                }}
              >
                {FEATURED.name}
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 6,
                }}
              >
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
                >
                  <Ionicons
                    name="location-outline"
                    size={12}
                    color="rgba(255,255,255,0.7)"
                  />
                  <Text
                    style={{ color: "rgba(255,255,255,0.7)", fontSize: 12 }}
                  >
                    A UNESCO World Heritage Site
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 3,
                    backgroundColor: "rgba(255,255,255,0.15)",
                    paddingHorizontal: 8,
                    paddingVertical: 3,
                    borderRadius: 12,
                    borderWidth: 1,
                    borderColor: "rgba(255,255,255,0.2)",
                  }}
                >
                  <Ionicons name="star" size={11} color={Colors.gold} />
                  <Text
                    style={{ color: "#fff", fontSize: 12, fontWeight: "700" }}
                  >
                    {FEATURED.rating}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          {/* ── Categories ── */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 28,
            }}
          >
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <TouchableOpacity
                  key={cat.id}
                  onPress={() => setActiveCategory(cat.id)}
                  activeOpacity={0.75}
                  style={{
                    alignItems: "center",
                    width: (width - 40) / 5,
                  }}
                >
                  <View
                    style={{
                      width: 54,
                      height: 54,
                      borderRadius: 17,
                      backgroundColor: isActive
                        ? Colors.green
                        : Colors.lightGreen,
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 7,
                      shadowColor: isActive ? Colors.green : "transparent",
                      shadowOffset: { width: 0, height: 4 },
                      shadowOpacity: 0.3,
                      shadowRadius: 8,
                      elevation: isActive ? 5 : 0,
                    }}
                  >
                    {cat.icon(isActive)}
                  </View>
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: "600",
                      color: isActive ? Colors.green : "#6B7280",
                      textAlign: "center",
                    }}
                  >
                    {cat.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* ── Recommended ── */}
          <SectionHeader
            title="Recommended for you"
            onSeeAll={() => router.push("/(tabs)/explore")}
          />

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 17, paddingRight: 4 }}
            style={{ marginBottom: 28 }}
          >
            {recommended.map((a) => (
              <TouchableOpacity
                key={a.id}
                onPress={() => router.push(`/attraction/${a.id}` as any)}
                activeOpacity={0.89}
                style={{
                  borderRadius: 5,
                  overflow: "hidden",
                  marginBottom: 24,
                  shadowColor: "gray",
                  shadowRadius: 1,
                  elevation: 4,
                }}
              >
                <Image
                  source={{ uri: a.image }}
                  style={{ width: 250, height: 130 }}
                  resizeMode="cover"
                />
                {/* Glass info strip */}
                <View
                  style={{
                    margin: 12,
                    backgroundColor: "rgba(255,255,255,0.9)",
                    borderTopWidth: 1,
                    borderTopColor: "rgba(255,255,255,0.6)",
                    padding: 10,
                    borderRadius: 10,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: "700",
                      color: "#111827",
                      letterSpacing: -0.2,
                    }}
                    numberOfLines={1}
                  >
                    {a.name}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: 6,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 3,
                      }}
                    >
                      <Ionicons name="star" size={11} color={Colors.gold} />
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: "700",
                          color: "#374151",
                        }}
                      >
                        {a.rating.toFixed(1)}
                      </Text>
                      <Text style={{ fontSize: 11, color: "#9CA3AF" }}>
                        ({a.reviews})
                      </Text>
                    </View>
                    {a.distance && (
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          gap: 2,
                        }}
                      >
                        <Ionicons
                          name="location-outline"
                          size={11}
                          color="#9CA3AF"
                        />
                        <Text style={{ fontSize: 11, color: "#9CA3AF" }}>
                          {a.distance}
                        </Text>
                      </View>
                    )}
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* ── Popular Destinations — horizontal scroll ── */}
          <SectionHeader
            title="Popular Destinations"
            onSeeAll={() => router.push("/(tabs)/explore")}
          />

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 17, paddingRight: 4 }}
            style={{ marginBottom: 8 }}
          >
            {popular.map((a) => (
              <TouchableOpacity
                key={a.id}
                onPress={() => router.push(`/attraction/${a.id}` as any)}
                activeOpacity={0.88}
                style={{
                  borderRadius: 5,
                  overflow: "hidden",
                  marginBottom: 24,
                  shadowColor: "gray",
                  shadowOpacity: 0,
                  shadowRadius: 1,
                  elevation: 4,
                }}
              >
                <Image
                  source={{ uri: a.image }}
                  style={{ width: 260, height: 190 }}
                  resizeMode="cover"
                />

                {/* Glass bottom strip */}
                <View
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    margin: 10,
                    borderRadius: 14,
                    backgroundColor: "rgba(255,255,255,0.82)",
                    borderWidth: 1,
                    borderColor: "rgba(255,255,255,0.6)",
                    paddingHorizontal: 12,
                    paddingVertical: 10,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "700",
                      color: "#111827",
                      letterSpacing: -0.2,
                    }}
                    numberOfLines={1}
                  >
                    {a.name}
                  </Text>

                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: 5,
                    }}
                  >
                    {/* Location */}
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 3,
                      }}
                    >
                      <Ionicons
                        name="location-outline"
                        size={12}
                        color="#6B7280"
                      />
                      <Text
                        style={{ fontSize: 11, color: "#6B7280" }}
                        numberOfLines={1}
                      >
                        {a.location}
                      </Text>
                    </View>

                    {/* Rating pill */}
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 3,
                        backgroundColor: Colors.lightGreen,
                        paddingHorizontal: 8,
                        paddingVertical: 3,
                        borderRadius: 12,
                      }}
                    >
                      <Ionicons name="star" size={11} color={Colors.gold} />
                      <Text
                        style={{
                          fontSize: 11,
                          fontWeight: "700",
                          color: Colors.green,
                        }}
                      >
                        {a.rating.toFixed(1)}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

/* ═══════════════════════════
   SECTION HEADER
═══════════════════════════ */
interface SectionHeaderProps {
  title: string;
  onSeeAll: () => void;
}

const SectionHeader = ({ title, onSeeAll }: SectionHeaderProps) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 14,
    }}
  >
    <Text
      style={{
        fontSize: 16,
        fontWeight: "700",
        color: "#111827",
        letterSpacing: -0.3,
      }}
    >
      {title}
    </Text>
    <TouchableOpacity onPress={onSeeAll}>
      <Text style={{ fontSize: 12, fontWeight: "700", color: Colors.green }}>
        See all
      </Text>
    </TouchableOpacity>
  </View>
);
