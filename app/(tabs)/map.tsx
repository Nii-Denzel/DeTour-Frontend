import {
  Feather,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import * as Location from "expo-location";
import { useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MapView, { Marker, Region } from "react-native-maps";
import { StarRating } from "../../components/StarRating";
import { Colors } from "../../constants/colors";
import { ATTRACTIONS } from "../../constants/data";

const COORDS: Record<string, { latitude: number; longitude: number }> = {
  "1": { latitude: 5.1053, longitude: -1.2466 },
  "2": { latitude: 5.5601, longitude: -0.2069 },
  "3": { latitude: 5.35, longitude: -1.38 },
  "4": { latitude: 7.0557, longitude: 0.3989 },
  "5": { latitude: 5.5694, longitude: -0.1534 },
};

const ACCRA_FALLBACK: Region = {
  latitude: 5.6037,
  longitude: -0.187,
  latitudeDelta: 0.5,
  longitudeDelta: 0.5,
};

const MAP_FILTERS = [
  { id: "All", label: "All", icon: "map-marked-alt", lib: "FA5" },
  { id: "Heritage", label: "Heritage", icon: "bank", lib: "MCI" },
  { id: "Park", label: "Parks", icon: "tree-outline", lib: "MCI" },
  { id: "Beach", label: "Beaches", icon: "beach", lib: "MCI" },
];

const MAP_STYLE = [
  { featureType: "poi.business", stylers: [{ visibility: "off" }] },
  { featureType: "transit", stylers: [{ visibility: "off" }] },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#ffffff" }],
  },
  { featureType: "water", stylers: [{ color: "#c9e2ff" }] },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#d4edda" }],
  },
];

export default function MapScreen() {
  const router = useRouter();
  const mapRef = useRef<MapView>(null);

  const [region, setRegion] = useState<Region | null>(null);
  const [userLocation, setUserLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [locationError, setLocationError] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  /* ── Request location on mount ── */
  useEffect(() => {
    (async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setLocationError(true);
          setRegion(ACCRA_FALLBACK);
          setLoading(false);
          return;
        }

        const loc = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.Balanced,
        });

        const userRegion: Region = {
          latitude: loc.coords.latitude,
          longitude: loc.coords.longitude,
          latitudeDelta: 0.08,
          longitudeDelta: 0.08,
        };

        setUserLocation({
          latitude: loc.coords.latitude,
          longitude: loc.coords.longitude,
        });
        setRegion(userRegion);
      } catch {
        setLocationError(true);
        setRegion(ACCRA_FALLBACK);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const centreOnUser = () => {
    if (!userLocation || !mapRef.current) return;
    mapRef.current.animateToRegion(
      {
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      },
      600
    );
  };

  const filteredAttractions = ATTRACTIONS.filter(
    (a) =>
      activeFilter === "All" ||
      a.category.toLowerCase() === activeFilter.toLowerCase()
  );

  const selectedAttraction = selected
    ? ATTRACTIONS.find((a) => a.id === selected)
    : null;

  const renderFilterIcon = (lib: string, icon: string, color: string) =>
    lib === "MCI" ? (
      <MaterialCommunityIcons name={icon as any} size={15} color={color} />
    ) : (
      <FontAwesome5 name={icon as any} size={13} color={color} />
    );

  const getMarkerIcon = (category: string, isSelected: boolean) => {
    const color = isSelected ? "#fff" : Colors.green;
    switch (category.toLowerCase()) {
      case "beach":
        return <MaterialCommunityIcons name="beach" size={18} color={color} />;
      case "park":
        return (
          <MaterialCommunityIcons name="tree-outline" size={18} color={color} />
        );
      case "heritage":
        return <MaterialCommunityIcons name="bank" size={15} color={color} />;
      default:
        return <Ionicons name="location" size={18} color={color} />;
    }
  };

  /* ── Loading state ── */
  if (loading) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#F4F6F5",
          alignItems: "center",
          justifyContent: "center",
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
          <Ionicons name="location-outline" size={32} color={Colors.green} />
        </View>
        <ActivityIndicator
          size="large"
          color={Colors.green}
          style={{ marginBottom: 12 }}
        />
        <Text style={{ fontSize: 15, fontWeight: "600", color: "#374151" }}>
          Finding your location...
        </Text>
        <Text style={{ fontSize: 12, color: "#9CA3AF", marginTop: 4 }}>
          Please allow location access
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F4F6F5" }}>
      {/* ═══════════════════════════
          FLOATING HEADER
      ═══════════════════════════ */}
      <View
        style={{
          position: "absolute",
          top: 50,
          left: 16,
          right: 16,
          zIndex: 20,
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        {/* Title pill */}
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
            backgroundColor: "#fff",
            borderRadius: 20,
            paddingHorizontal: 16,
            paddingVertical: 14,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 10,
            elevation: 5,
          }}
        >
          <Feather name="map" size={18} color={Colors.green} />
          <Text
            style={{
              fontWeight: "700",
              fontSize: 16,
              color: "#1F2937",
              letterSpacing: -0.3,
              flex: 1,
            }}
          >
            Explore Map
          </Text>

          {/* Location permission warning badge */}
          {locationError && (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 4,
                backgroundColor: "#FEF3C7",
                borderRadius: 10,
                paddingHorizontal: 8,
                paddingVertical: 3,
              }}
            >
              <Ionicons name="warning-outline" size={12} color="#D97706" />
              <Text
                style={{ fontSize: 10, fontWeight: "600", color: "#D97706" }}
              >
                Accra fallback
              </Text>
            </View>
          )}
        </View>

        {/* Filter button */}
        <TouchableOpacity
          style={{
            width: 48,
            height: 48,
            borderRadius: 24,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 10,
            elevation: 5,
          }}
        >
          <Ionicons name="options-outline" size={20} color={Colors.green} />
        </TouchableOpacity>
      </View>

      {/* ═══════════════════════════
          CATEGORY FILTER PILLS
      ═══════════════════════════ */}
      <View
        style={{
          position: "absolute",
          top: 118,
          left: 0,
          right: 0,
          zIndex: 20,
        }}
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16, gap: 8 }}
        >
          {MAP_FILTERS.map((f) => {
            const isActive = activeFilter === f.id;
            return (
              <TouchableOpacity
                key={f.id}
                onPress={() => {
                  setActiveFilter(f.id);
                  setSelected(null);
                }}
                activeOpacity={0.8}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 6,
                  paddingHorizontal: 14,
                  paddingVertical: 9,
                  borderRadius: 18,
                  backgroundColor: isActive ? Colors.green : "#fff",
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 3 },
                  shadowOpacity: 0.08,
                  shadowRadius: 6,
                  elevation: 3,
                }}
              >
                {renderFilterIcon(
                  f.lib,
                  f.icon,
                  isActive ? "#fff" : Colors.green
                )}
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "600",
                    color: isActive ? "#fff" : "#4B5563",
                  }}
                >
                  {f.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* ═══════════════════════════
          MAP
      ═══════════════════════════ */}
      {region && (
        <MapView
          ref={mapRef}
          style={{ flex: 1 }}
          initialRegion={region}
          customMapStyle={MAP_STYLE}
          showsUserLocation
          showsMyLocationButton={false}
          showsCompass={false}
          onPress={() => setSelected(null)}
        >
          {filteredAttractions.map((a) => {
            if (!COORDS[a.id]) return null;
            const isSelected = selected === a.id;
            return (
              <Marker
                key={a.id}
                coordinate={COORDS[a.id]}
                onPress={() => setSelected(a.id)}
                tracksViewChanges={false}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: isSelected ? Colors.gold : "#fff",
                    paddingHorizontal: isSelected ? 12 : 10,
                    paddingVertical: 10,
                    borderRadius: 24,
                    borderWidth: 2,
                    borderColor: isSelected ? Colors.gold : "rgba(0,0,0,0.08)",
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.2,
                    shadowRadius: 5,
                    elevation: 6,
                    gap: isSelected ? 6 : 0,
                  }}
                >
                  {getMarkerIcon(a.category, isSelected)}
                  {isSelected && (
                    <Text
                      style={{ color: "#fff", fontSize: 11, fontWeight: "700" }}
                    >
                      {a.name}
                    </Text>
                  )}
                </View>
              </Marker>
            );
          })}
        </MapView>
      )}

      {/* ═══════════════════════════
          LOCATION FAB
      ═══════════════════════════ */}
      <TouchableOpacity
        onPress={centreOnUser}
        activeOpacity={0.8}
        style={{
          position: "absolute",
          bottom: selectedAttraction ? 260 : 36,
          right: 16,
          width: 50,
          height: 50,
          borderRadius: 25,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.15,
          shadowRadius: 8,
          elevation: 6,
          borderWidth: 1,
          borderColor: "rgba(0,0,0,0.04)",
        }}
      >
        <FontAwesome5
          name="crosshairs"
          size={18}
          color={userLocation ? Colors.green : "#9CA3AF"}
        />
      </TouchableOpacity>

      {/* ═══════════════════════════
          BOTTOM SHEET
      ═══════════════════════════ */}
      {selectedAttraction && (
        <View
          style={{
            position: "absolute",
            bottom: 24,
            left: 16,
            right: 16,
            backgroundColor: "#fff",
            borderRadius: 28,
            padding: 16,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 10 },
            shadowOpacity: 0.2,
            shadowRadius: 20,
            elevation: 12,
            borderWidth: 1,
            borderColor: "rgba(0,0,0,0.03)",
          }}
        >
          {/* Drag handle */}
          <View
            style={{
              alignSelf: "center",
              width: 36,
              height: 4,
              backgroundColor: "#E5E7EB",
              borderRadius: 2,
              marginBottom: 14,
            }}
          />

          <View style={{ flexDirection: "row", gap: 14, alignItems: "center" }}>
            <Image
              source={{ uri: selectedAttraction.image }}
              style={{ width: 84, height: 84, borderRadius: 20 }}
              resizeMode="cover"
            />
            <View style={{ flex: 1 }}>
              {/* Category chip */}
              <View
                style={{
                  alignSelf: "flex-start",
                  backgroundColor: Colors.lightGreen,
                  borderRadius: 10,
                  paddingHorizontal: 8,
                  paddingVertical: 3,
                  marginBottom: 5,
                }}
              >
                <Text
                  style={{
                    fontSize: 10,
                    fontWeight: "700",
                    color: Colors.green,
                    textTransform: "uppercase",
                    letterSpacing: 0.5,
                  }}
                >
                  {selectedAttraction.category}
                </Text>
              </View>

              <Text
                style={{
                  fontWeight: "700",
                  fontSize: 16,
                  color: "#111827",
                  letterSpacing: -0.3,
                }}
                numberOfLines={1}
              >
                {selectedAttraction.name}
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                  marginTop: 6,
                }}
              >
                <StarRating
                  rating={selectedAttraction.rating}
                  reviews={selectedAttraction.reviews}
                />
                {selectedAttraction.distance && (
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
                      color="#9CA3AF"
                    />
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#6B7280",
                        fontWeight: "500",
                      }}
                    >
                      {selectedAttraction.distance}
                    </Text>
                  </View>
                )}
              </View>
            </View>
          </View>

          {/* Action buttons */}
          <View style={{ flexDirection: "row", gap: 10, marginTop: 16 }}>
            <TouchableOpacity
              onPress={() => setSelected(null)}
              style={{
                flex: 1,
                backgroundColor: "#F3F4F6",
                borderRadius: 16,
                paddingVertical: 14,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{ color: "#4B5563", fontWeight: "600", fontSize: 13 }}
              >
                Dismiss
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                router.push(`/attraction/${selectedAttraction.id}` as any)
              }
              activeOpacity={0.85}
              style={{
                flex: 2,
                backgroundColor: Colors.green,
                borderRadius: 16,
                paddingVertical: 14,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
                shadowColor: Colors.green,
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
                elevation: 4,
              }}
            >
              <FontAwesome5 name="location-arrow" size={12} color="#fff" />
              <Text style={{ color: "#fff", fontWeight: "700", fontSize: 13 }}>
                View Details
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}
