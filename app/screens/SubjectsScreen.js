import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Card from "../components/Card";
import Screen from "../components/Screen";

const subjectNames = [
  {
    id: 1,
    title: "Mathematics",
    icon: "numeric-1",
  },
  {
    id: 2,
    title: "English",
    icon: "numeric-2",
  },
  {
    id: 3,
    title: "Biology",
    icon: "numeric-3",
  },
  {
    id: 4,
    title: "Pak-Studies",
    icon: "numeric-4",
  },
  {
    id: 5,
    title: "Islamiyat",
    icon: "numeric-5",
  },
  {
    id: 6,
    title: "Computer",
    icon: "numeric-6",
  },
  {
    id: 7,
    title: "Chemistry",
    icon: "numeric-7",
  },
  {
    id: 8,
    title: "Physics",
    icon: "numeric-8",
  },
  {
    id: 9,
    title: "Urdu",
    icon: "numeric-9",
  },
];

function SubjectsScreen(props) {
  return (
    <Screen background="2">
      <View style={styles.items}>
        <FlatList
          data={subjectNames}
          numColumns={3}
          keyExtractor={(subjectNames) => subjectNames.id.toString()}
          renderItem={({ item }) => (
            <Card
              icon={item.icon}
              title={item.title}
              style={styles.card}
              styleIcon={styles.icon}
            />
          )}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  items: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  card: {
    alignItems: "center",
    justifyContent: "center",
    width: 118,

    paddingTop: 1,
  },
  icon: {
    borderRadius: 100 / 2,
    borderColor: "white",
    borderWidth: 1,
  },
});

export default SubjectsScreen;
