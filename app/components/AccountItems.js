import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

function AccountItems({ title, icon, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        {icon}
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    height: 40,
    width: "100%",
    flexDirection: "row",
  },
  title: {
    fontSize: 18,
    color: "#D8D8D8",
    marginLeft: 10,
    marginTop: 5,
  },
});

export default AccountItems;
