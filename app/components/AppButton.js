import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";
function AppButton({ title, onPress, width = 300 }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, { width: width }]}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginVertical: 10,
    overflow: "hidden",
  },
  text: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: "bold",
  },
});
export default AppButton;
