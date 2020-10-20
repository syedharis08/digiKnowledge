import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, StyleSheet, Image } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";

function Card({ icon, title }) {
  return (
    <View style={styles.card}>
      <MaterialCommunityIcons name={icon} size={30} color={colors.primary} />
      <AppText style={styles.title} color={colors.primary}>
        {title}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    width: 110,
    height: 70,
    marginRight: 30,
    marginTop: 40,
    borderWidth: 1,
    borderColor: "darkgrey",
  },
  title: {
    marginBottom: 7,
  },
});

export default Card;
