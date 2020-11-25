import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, TouchableOpacity } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

function Card({ icon, title, size = 70, style, styleIcon, onPress }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={onPress}>
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
        <AppText color={colors.primary} style={{ fontSize: 15 }}>
          {title}
        </AppText>
      </View>
    </TouchableOpacity>
  );
}

export default Card;
