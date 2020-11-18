import React from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";

import Logo from "../assets/Logo.png";
import AppText from "../components/AppText";
import colors from "../config/colors";

const classNames = [
  {
    id: 1,
    title: "ONE",
    icon: "numeric-1-box",
  },
  {
    id: 2,
    title: "TWO",
    icon: "numeric-2-box",
  },
  {
    id: 3,
    title: "THREE",
    icon: "numeric-3-box",
  },
  {
    id: 4,
    title: "FOUR",
    icon: "numeric-4-box",
  },
  {
    id: 5,
    title: "FIVE",
    icon: "numeric-5-box",
  },
  {
    id: 6,
    title: "SIX",
    icon: "numeric-6-box",
  },
  {
    id: 7,
    title: "SEVEN",
    icon: "numeric-7-box",
  },
  {
    id: 8,
    title: "EIGHT",
    icon: "numeric-8-box",
  },
  {
    id: 9,
    title: "SSC-I",
    icon: "numeric-9-box",
  },
  {
    id: 10,
    title: "SSC-II",
    icon: "numeric-10-box",
  },
];

function ClassScreen(props) {
  return (
    <Screen background="2">
      <Image style={styles.imageStyles} source={Logo} />
      <AppText style={styles.textStyles} color={colors.primary}>
        Choose Your Class
      </AppText>
      <View style={styles.items}>
        <FlatList
          data={classNames}
          keyExtractor={(classNames) => classNames.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              icon={item.icon}
              title={item.title}
              style={styles.direction}
              innerStyle={styles.innerStyle}
            />
          )}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  items: {
    alignItems: "center",
  },
  imageStyles: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },
  textStyles: {
    alignSelf: "center",
    paddingBottom: 15,
    fontWeight: "bold",
  },
  direction: {
    flexDirection: "row",
    paddingVertical: 10,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  innerStyle: {
    paddingLeft: 10,
    fontWeight: "bold",
  },
});
export default ClassScreen;
