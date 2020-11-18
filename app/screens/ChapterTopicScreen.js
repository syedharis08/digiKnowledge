import React from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import Screen from "../components/Screen";

import ListItem from "../components/ListItem";
const chapterName = [
  {
    id: 1,
    title: "NumberSystem",
    topic: [
      { id: 1, title: "Topic1", icon: "book" },
      { id: 2, title: "Topic2", icon: "book" },
      { id: 3, title: "Topic3", icon: "book" },
      { id: 4, title: "Topic3", icon: "book" },
      { id: 5, title: "Topic3", icon: "book" },
      { id: 6, title: "Topic3", icon: "book" },
    ],
  },
  {
    id: 2,
    title: "Problem Solving",
    topic: [
      { id: 1, title: "Topic1", icon: "book" },
      { id: 2, title: "Topic2", icon: "book" },
      { id: 3, title: "Topic3", icon: "book" },
    ],
  },
];

function ChapterTopicScreen(props) {
  return (
    <Screen background="2">
      <ScrollView style={styles.items}>
        <FlatList
          data={chapterName}
          keyExtractor={(chapterName) => chapterName.id.toString()}
          renderItem={({ item }) => (
            <View>
              <ListItem
                icon={item.icon}
                title={item.title}
                topic={item.topic}
                style={styles.direction}
                innerStyle={styles.innerStyle}
              />
            </View>
          )}
        />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  items: {
    flex: 1,
  },
});
export default ChapterTopicScreen;
