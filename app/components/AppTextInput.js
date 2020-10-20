import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput, View, StyleSheet } from "react-native";

import colors from "../config/colors";
import defaultStyles from "../config/styles";

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.secondary}
          style={styles.icon}
        />
      )}
      <TextInput style={defaultStyles.text} {...otherProps} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginLeft: 15,
    marginBottom: 10,
    marginRight: 15,
    backgroundColor: "#f9f9f9",
    borderRadius: 25,
  },
  icon: {
    marginRight: 10,
  },
});
export default AppTextInput;
