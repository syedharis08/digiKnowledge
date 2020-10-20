import React from "react";
import { FlatList, Image, StyleSheet } from "react-native";

import Card from "../components/Card";
import Screen from "../components/Screen";
function HomeScreen(props) {
  const subjects = [
    {
      id: 1,
      title: "Computer",
    },
    {
      id: 2,
      title: "Maths",
    },
    {
      id: 3,
      title: "Physics",
    },
    {
      id: 4,
      title: "Chemistry",
    },
    {
      id: 5,
      title: "Biology",
    },
    {
      id: 6,
      title: "Urdu",
    },
    {
      id: 7,
      title: "English",
    },
    {
      id: 8,
      title: "Islamiat",
    },
    {
      id: 9,
      title: "Pak Studies",
    },
  ];

  return (
    <Screen background="2">
      <Image style={styles.logo} source={require("../assets/Logo.png")}></Image>
      <FlatList
        numColumns={3}
        data={subjects}
        keyExtractor={(subjects) => subjects.id.toString()}
        renderItem={({ item }) => <Card icon="book" title={item.title} />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    right: 10,
    alignSelf: "center",
  },
});
export default HomeScreen;
