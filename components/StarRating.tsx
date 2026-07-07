import React from "react";
import { Text, View } from "react-native";
import { Colors } from "../constants/colors";

interface StarRatingProps {
  rating: number;
  reviews?: number;
  size?: "sm" | "md";
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  reviews,
  size = "sm",
}) => {
  const textSize = size === "sm" ? "text-xs" : "text-sm";
  return (
    <View className="flex-row items-center gap-1">
      <Text style={{ color: Colors.gold }} className={`font-bold ${textSize}`}>
        ★ {rating.toFixed(1)}
      </Text>
      {reviews !== undefined && (
        <Text className={`text-gray-400 ${textSize}`}>({reviews})</Text>
      )}
    </View>
  );
};
