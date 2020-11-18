import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, TouchableOpacity } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";

function Card({ icon, title, size = 80, style, styleIcon }) {
  return (
    <TouchableOpacity>
      <View style={style}>
        <View style={styleIcon}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={size}
              color={colors.secondary}
            />
          )}
        </View>
        <AppText color={colors.primary}>{title}</AppText>
      </View>
    </TouchableOpacity>
  );
}

export default Card;
