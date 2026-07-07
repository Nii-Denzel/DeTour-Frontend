import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { StarRating } from "../components/StarRating";
import { Attraction } from "../types";

interface AttractionCardProps {
  attraction: Attraction;
  variant?: "compact" | "full";
}

export const AttractionCard: React.FC<AttractionCardProps> = ({
  attraction,
  variant = "compact",
}) => {
  const router = useRouter();

  const handlePress = () => {
    router.push(`/attraction/${attraction.id}` as any);
  };

  if (variant === "full") {
    return (
      <TouchableOpacity
        onPress={handlePress}
        className="bg-white rounded-2xl overflow-hidden mb-4 shadow-sm border border-gray-100"
        activeOpacity={0.85}
      >
        <Image
          source={{ uri: attraction.image }}
          className="w-full h-44"
          resizeMode="cover"
        />
        <View className="p-3">
          <Text className="font-bold text-base text-gray-900">
            {attraction.name}
          </Text>
          <Text className="text-gray-500 text-xs mb-1">
            {attraction.location}
          </Text>
          <StarRating rating={attraction.rating} reviews={attraction.reviews} />
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      onPress={handlePress}
      className="w-44 mr-3 bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
      activeOpacity={0.85}
    >
      <Image
        source={{ uri: attraction.image }}
        className="w-full h-28"
        resizeMode="cover"
      />
      <View className="p-2">
        <Text className="font-bold text-sm text-gray-900" numberOfLines={1}>
          {attraction.name}
        </Text>
        <Text className="text-gray-400 text-xs" numberOfLines={1}>
          {attraction.location}
        </Text>
        <StarRating rating={attraction.rating} reviews={attraction.reviews} />
      </View>
    </TouchableOpacity>
  );
};
