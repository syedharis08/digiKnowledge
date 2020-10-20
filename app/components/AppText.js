import React from "react";
import { Text } from "react-native";

import defaultStyles from "../config/styles";
function AppText({ children, style, color }) {
  return (
    <Text style={[defaultStyles.text, style, { color: color }]}>
      {children}
    </Text>
  );
}
export default AppText;
