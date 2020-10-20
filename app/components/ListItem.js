import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, StyleSheet, Text } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";

function ListItem({ icon, title }) {
  return (
    <>
      <MaterialCommunityIcons name={icon} size={20} color={colors.secondary} />
      <AppText color={colors.primary}>{title}</AppText>
    </>
  );
}
const styles = StyleSheet.create({});
export default ListItem;
