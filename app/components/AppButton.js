import React from "react";
import { View, StyleSheet, Text, TouchableHighlight } from "react-native";

import colors from "../config/colors";
function AppButton({ title, onPress, width = 300 }) {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={[styles.button, { width: width }]}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableHighlight>
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
