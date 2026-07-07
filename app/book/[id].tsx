import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { JSX, useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from "../../constants/colors";
import { ATTRACTIONS, GUIDES } from "../../constants/data";


type PaymentMethod = "momo" | "vodafone";

export default function BookScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const attraction = ATTRACTIONS.find((a) => a.id === id);

  const [selectedDate, setSelectedDate] = useState("May 25, 2025");
  const [selectedTime, setSelectedTime] = useState("8:00 AM");
  const [people, setPeople] = useState(2);
  const [selectedGuide, setSelectedGuide] = useState(GUIDES[0].id);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("momo");

  if (!attraction) return null;

  const guide = GUIDES.find((g) => g.id === selectedGuide)!;
  const total = guide.pricePerGroup;

  const handlePay = () => {
    Alert.alert(
      "Payment Initiated",
      `You will receive a prompt on your ${
        paymentMethod === "momo" ? "MTN MoMo" : "Vodafone Cash"
      } number to complete payment of GHS ${total}.`,
      [{ text: "OK", onPress: () => router.replace("/(tabs)/bookings") }]
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#F4F6F5" }}>
      <StatusBar barStyle="dark-content" backgroundColor="#F4F6F5" />

      {/* ═══════════════════════════
          HEADER
      ═══════════════════════════ */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 20,
          paddingTop: insets.top + 10,
          paddingBottom: 14,
          backgroundColor: "#F4F6F5",
          borderBottomWidth: 1,
          borderBottomColor: "#EFEFEF",
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
            fontSize: 20,
            fontWeight: "700",
            color: "#111827",
            letterSpacing: -0.4,
          }}
        >
          Book a Tour
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
          {/* ═══════════════════════════
              ATTRACTION SUMMARY CARD
          ═══════════════════════════ */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: 22,
              padding: 14,
              marginBottom: 20,
              gap: 14,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.06,
              shadowRadius: 10,
              elevation: 2,
            }}
          >
            <Image
              source={{ uri: attraction.image }}
              style={{ width: 72, height: 72, borderRadius: 16 }}
              resizeMode="cover"
            />
            <View style={{ flex: 1 }}>
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
                    fontSize: 9,
                    fontWeight: "800",
                    color: Colors.green,
                    letterSpacing: 1,
                    textTransform: "uppercase",
                  }}
                >
                  {attraction.category}
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "700",
                  color: "#111827",
                  letterSpacing: -0.2,
                }}
                numberOfLines={1}
              >
                {attraction.name}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 4,
                  marginTop: 4,
                }}
              >
                <Ionicons name="location-outline" size={12} color="#9CA3AF" />
                <Text style={{ fontSize: 12, color: "#9CA3AF" }}>
                  {attraction.location}
                </Text>
              </View>
            </View>
          </View>

          {/* ═══════════════════════════
              DATE & TIME
          ═══════════════════════════ */}
          <SectionLabel title="Schedule" />

          <View
            style={{
              backgroundColor: "#fff",
              borderRadius: 22,
              marginBottom: 20,
              overflow: "hidden",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.06,
              shadowRadius: 10,
              elevation: 2,
            }}
          >
            <BookRow
              icon={
                <Ionicons
                  name="calendar-outline"
                  size={20}
                  color={Colors.green}
                />
              }
              label="Select Date"
              value={selectedDate}
              isLast={false}
            />
            <BookRow
              icon={
                <Ionicons name="time-outline" size={20} color={Colors.green} />
              }
              label="Select Time"
              value={selectedTime}
              isLast
            />
          </View>

          {/* ═══════════════════════════
              PEOPLE SELECTOR
          ═══════════════════════════ */}
          <SectionLabel title="Group Size" />

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#fff",
              borderRadius: 22,
              paddingHorizontal: 18,
              paddingVertical: 16,
              marginBottom: 20,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.06,
              shadowRadius: 10,
              elevation: 2,
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <View
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 19,
                  backgroundColor: Colors.lightGreen,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons
                  name="people-outline"
                  size={20}
                  color={Colors.green}
                />
              </View>
              <View>
                <Text
                  style={{ fontSize: 14, fontWeight: "600", color: "#111827" }}
                >
                  Number of People
                </Text>
                <Text style={{ fontSize: 11, color: "#9CA3AF", marginTop: 1 }}>
                  per group
                </Text>
              </View>
            </View>

            {/* Counter */}
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 14 }}
            >
              <TouchableOpacity
                onPress={() => setPeople(Math.max(1, people - 1))}
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 17,
                  backgroundColor: people <= 1 ? "#F3F4F6" : Colors.lightGreen,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Feather
                  name="minus"
                  size={16}
                  color={people <= 1 ? "#D1D5DB" : Colors.green}
                />
              </TouchableOpacity>

              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "800",
                  color: "#111827",
                  minWidth: 24,
                  textAlign: "center",
                }}
              >
                {people}
              </Text>

              <TouchableOpacity
                onPress={() => setPeople(people + 1)}
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 17,
                  backgroundColor: Colors.green,
                  alignItems: "center",
                  justifyContent: "center",
                  shadowColor: Colors.green,
                  shadowOffset: { width: 0, height: 3 },
                  shadowOpacity: 0.3,
                  shadowRadius: 6,
                  elevation: 3,
                }}
              >
                <Feather name="plus" size={16} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>

          {/* ═══════════════════════════
              TOUR GUIDE
          ═══════════════════════════ */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            <SectionLabel title="Tour Guide" noMargin />
            <TouchableOpacity>
              <Text
                style={{ fontSize: 12, fontWeight: "700", color: Colors.green }}
              >
                View all
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ gap: 10, marginBottom: 20 }}>
            {GUIDES.map((g) => {
              const isSelected = selectedGuide === g.id;
              return (
                <TouchableOpacity
                  key={g.id}
                  onPress={() => setSelectedGuide(g.id)}
                  activeOpacity={0.85}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: isSelected ? Colors.lightGreen : "#fff",
                    borderRadius: 20,
                    padding: 14,
                    borderWidth: isSelected ? 1.5 : 1,
                    borderColor: isSelected ? Colors.green : "#F0F0F0",
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: isSelected ? 0.08 : 0.04,
                    shadowRadius: 8,
                    elevation: isSelected ? 3 : 1,
                  }}
                >
                  {/* Avatar */}
                  <View
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 24,
                      backgroundColor: isSelected ? "#fff" : Colors.lightGreen,
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: 12,
                      borderWidth: isSelected ? 2 : 0,
                      borderColor: Colors.green,
                    }}
                  >
                    <Ionicons
                      name="person-outline"
                      size={22}
                      color={Colors.green}
                    />
                  </View>

                  {/* Info */}
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "700",
                        color: "#111827",
                        letterSpacing: -0.2,
                      }}
                    >
                      {g.name}
                    </Text>
                    <Text
                      style={{ fontSize: 11, color: "#9CA3AF", marginTop: 1 }}
                    >
                      {g.title}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 3,
                        marginTop: 5,
                      }}
                    >
                      <Ionicons name="star" size={12} color={Colors.gold} />
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: "700",
                          color: "#374151",
                        }}
                      >
                        {g.rating.toFixed(1)}
                      </Text>
                      <Text style={{ fontSize: 11, color: "#9CA3AF" }}>
                        ({g.reviews} reviews)
                      </Text>
                    </View>
                  </View>

                  {/* Price + radio */}
                  <View style={{ alignItems: "flex-end", gap: 8 }}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "800",
                        color: Colors.green,
                        letterSpacing: -0.3,
                      }}
                    >
                      GHS {g.pricePerGroup}
                    </Text>
                    <Text style={{ fontSize: 10, color: "#9CA3AF" }}>
                      per group
                    </Text>
                    {/* Radio dot */}
                    <View
                      style={{
                        width: 18,
                        height: 18,
                        borderRadius: 9,
                        borderWidth: 2,
                        borderColor: isSelected ? Colors.green : "#D1D5DB",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {isSelected && (
                        <View
                          style={{
                            width: 9,
                            height: 9,
                            borderRadius: 5,
                            backgroundColor: Colors.green,
                          }}
                        />
                      )}
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* ═══════════════════════════
              PAYMENT METHOD
          ═══════════════════════════ */}
          <SectionLabel title="Payment Method" />

          <View style={{ flexDirection: "row", gap: 12, marginBottom: 20 }}>
            <PaymentOption
              label="MTN MoMo"
              icon={
                <MaterialCommunityIcons
                  name="cellphone"
                  size={20}
                  color={paymentMethod === "momo" ? Colors.green : "#6B7280"}
                />
              }
              accentColor="#FFCC00"
              selected={paymentMethod === "momo"}
              onPress={() => setPaymentMethod("momo")}
            />
            <PaymentOption
              label="Vodafone Cash"
              icon={
                <MaterialCommunityIcons
                  name="signal"
                  size={20}
                  color={
                    paymentMethod === "vodafone" ? Colors.green : "#6B7280"
                  }
                />
              }
              accentColor="#E60000"
              selected={paymentMethod === "vodafone"}
              onPress={() => setPaymentMethod("vodafone")}
            />
          </View>

          {/* ═══════════════════════════
              ORDER SUMMARY
          ═══════════════════════════ */}
          <SectionLabel title="Order Summary" />

          <View
            style={{
              backgroundColor: "#fff",
              borderRadius: 22,
              padding: 18,
              marginBottom: 8,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.06,
              shadowRadius: 10,
              elevation: 2,
            }}
          >
            <SummaryRow label="Tour" value={attraction.name} />
            <SummaryRow label="Guide" value={guide.name} />
            <SummaryRow label="Date" value={selectedDate} />
            <SummaryRow label="Time" value={selectedTime} />
            <SummaryRow
              label="People"
              value={`${people} person${people > 1 ? "s" : ""}`}
            />

            {/* Divider */}
            <View
              style={{
                height: 1,
                backgroundColor: "#F3F4F6",
                marginVertical: 14,
              }}
            />

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{ fontSize: 15, fontWeight: "600", color: "#374151" }}
              >
                Total Amount
              </Text>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: "800",
                  color: Colors.green,
                  letterSpacing: -0.5,
                }}
              >
                GHS {total}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* ═══════════════════════════
          STICKY PAY CTA
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
        <TouchableOpacity
          onPress={handlePay}
          activeOpacity={0.88}
          style={{
            backgroundColor: Colors.green,
            borderRadius: 18,
            paddingVertical: 17,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            shadowColor: Colors.green,
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 0.32,
            shadowRadius: 12,
            elevation: 5,
          }}
        >
          <MaterialCommunityIcons
            name="cellphone-check"
            size={20}
            color="#fff"
          />
          <Text style={{ color: "#fff", fontWeight: "700", fontSize: 16 }}>
            Pay GHS {total} with{" "}
            {paymentMethod === "momo" ? "MTN MoMo" : "Vodafone Cash"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

/* ═══════════════════════════
   SUB-COMPONENTS
═══════════════════════════ */

const SectionLabel = ({
  title,
  noMargin,
}: {
  title: string;
  noMargin?: boolean;
}) => (
  <Text
    style={{
      fontSize: 13,
      fontWeight: "700",
      color: "#6B7280",
      letterSpacing: 0.5,
      textTransform: "uppercase",
      marginBottom: noMargin ? 0 : 12,
    }}
  >
    {title}
  </Text>
);

interface BookRowProps {
  icon: JSX.Element;
  label: string;
  value: string;
  isLast: boolean;
}

const BookRow = ({ icon, label, value, isLast }: BookRowProps) => (
  <TouchableOpacity
    activeOpacity={0.7}
    style={{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 18,
      paddingVertical: 16,
      borderBottomWidth: isLast ? 0 : 1,
      borderBottomColor: "#F3F4F6",
    }}
  >
    <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
      <View
        style={{
          width: 38,
          height: 38,
          borderRadius: 19,
          backgroundColor: Colors.lightGreen,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </View>
      <Text style={{ fontSize: 14, fontWeight: "600", color: "#374151" }}>
        {label}
      </Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
      <Text style={{ fontSize: 13, color: "#6B7280", fontWeight: "500" }}>
        {value}
      </Text>
      <Ionicons name="chevron-forward" size={16} color="#D1D5DB" />
    </View>
  </TouchableOpacity>
);

interface PaymentOptionProps {
  label: string;
  icon: JSX.Element;
  accentColor: string;
  selected: boolean;
  onPress: () => void;
}

const PaymentOption = ({
  label,
  icon,
  accentColor,
  selected,
  onPress,
}: PaymentOptionProps) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.8}
    style={{
      flex: 1,
      alignItems: "center",
      paddingVertical: 16,
      paddingHorizontal: 12,
      borderRadius: 18,
      backgroundColor: selected ? Colors.lightGreen : "#fff",
      borderWidth: selected ? 1.5 : 1,
      borderColor: selected ? Colors.green : "#F0F0F0",
      shadowColor: selected ? Colors.green : "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: selected ? 0.15 : 0.04,
      shadowRadius: 8,
      elevation: selected ? 3 : 1,
      gap: 10,
    }}
  >
    {/* Network color dot + icon */}
    <View
      style={{
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: selected ? "#fff" : "#F9FAFB",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: selected ? accentColor : "transparent",
      }}
    >
      {icon}
    </View>

    <Text
      style={{
        fontSize: 12,
        fontWeight: "700",
        textAlign: "center",
        color: selected ? Colors.green : "#6B7280",
      }}
    >
      {label}
    </Text>

    {/* Radio */}
    <View
      style={{
        width: 16,
        height: 16,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: selected ? Colors.green : "#D1D5DB",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {selected && (
        <View
          style={{
            width: 8,
            height: 8,
            borderRadius: 4,
            backgroundColor: Colors.green,
          }}
        />
      )}
    </View>
  </TouchableOpacity>
);

interface SummaryRowProps {
  label: string;
  value: string;
}

const SummaryRow = ({ label, value }: SummaryRowProps) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 10,
    }}
  >
    <Text style={{ fontSize: 13, color: "#9CA3AF", fontWeight: "500" }}>
      {label}
    </Text>
    <Text
      style={{
        fontSize: 13,
        fontWeight: "600",
        color: "#374151",
        maxWidth: "60%",
        textAlign: "right",
      }}
      numberOfLines={1}
    >
      {value}
    </Text>
  </View>
);
