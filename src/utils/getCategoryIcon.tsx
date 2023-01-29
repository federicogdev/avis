import React from "react";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Feather,
  FontAwesome5,
  Entypo,
  Ionicons,
  Fontisto,
} from "@expo/vector-icons";

export const getCategoryIcon = (
  category: string,
  color: string,
  sizeMultiplier: number = 1
) => {
  switch (category) {
    case "health":
      return (
        <MaterialCommunityIcons
          name="hospital-box"
          size={24 * sizeMultiplier}
          color={color}
        />
      );
    case "entertainment":
      return <Ionicons name="md-tv" size={24 * sizeMultiplier} color={color} />;
    case "general":
      return <Feather name="globe" size={24 * sizeMultiplier} color={color} />;
    case "science":
      return (
        <MaterialIcons
          name="science"
          size={24 * sizeMultiplier}
          color={color}
        />
      );
    case "business":
      return (
        <FontAwesome5
          name="funnel-dollar"
          size={19 * sizeMultiplier}
          color={color}
        />
      );
    case "science":
      return (
        <MaterialCommunityIcons
          name="hospital-box"
          size={24 * sizeMultiplier}
          color={color}
        />
      );
    case "sports":
      return (
        <MaterialIcons
          name="sports-basketball"
          size={24 * sizeMultiplier}
          color={color}
        />
      );
    case "technology":
      return (
        <Entypo
          name="tablet-mobile-combo"
          size={24 * sizeMultiplier}
          color={color}
        />
      );
    default:
      return null;
  }
};
