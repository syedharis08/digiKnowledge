import React from "react";
import { View, StyleSheet, TouchableHighlight, Text } from "react-native";

function AccountListItem({ title, subTitle, IconComponent, onPress }) {
  return (
    <TouchableHighlight underlayColor={"red"} onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>{IconComponent}</View>
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.subTitle} numberOfLines={2}>
            {subTitle}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
    backgroundColor: "white",
    borderRadius: 10,
    height: 80,
    width: "100%",
    marginTop: 10,
  },
  detailsContainer: {
    flex: 3,
    marginLeft: 20,
    justifyContent: "center",
  },

  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 60,
    backgroundColor: "black",
    borderRadius: 27,
  },
  subTitle: {
    color: "black",
    fontSize: 14,
  },
  title: {
    fontWeight: "500",
    fontSize: 18,
    color: "#fff",
  },
});

export default AccountListItem;
