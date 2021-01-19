import React, { useEffect, useState } from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import Screen from "../components/Screen";

import ChapterList from "../components/ChapterList";
import AppText from "../components/AppText";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SCREENS } from "../config/Screens";
import chapterApi from "../api/chapterTopic";
const computer = [
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
const maths = [
  {
    id: 1,
    title: "Triangles",
    topic: [
      { id: 1, title: "Area", icon: "alpha-a-box" },
      { id: 2, title: "Parameter", icon: "alpha-p-box" },
      { id: 3, title: "Circumference", icon: "alpha-c-box" },
    ],
  },
  {
    id: 2,
    title: "Matrices",
    topic: [
      { id: 1, title: "Row Matrix", icon: "alpha-r-box" },
      { id: 2, title: "Column Matrix", icon: "alpha-c-box" },
      { id: 3, title: "Identity Matrix", icon: "alpha-i-box" },
    ],
  },
  {
    id: 3,
    title: "Sets",
    topic: [
      { id: 1, title: "Set Operations", icon: "alpha-s-box" },
      { id: 2, title: "Set Values", icon: "alpha-s-box" },
      { id: 3, title: "Addition of sets", icon: "alpha-a-box" },
    ],
  },
];
const physics = [
  {
    id: 1,
    title: "nuclear phyiscs",
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
const chemistry = [
  {
    id: 1,
    title: "Organic Chemistry",
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
const pakistanStudies = [
  {
    id: 1,
    title: "Naya Pakistan",
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

function ChapterTopicScreen({ navigation, route }) {
  const [chaptername, setChapterName] = useState([]);
  const [attempt, setAttempt] = useState(false);

  useEffect(() => {
    switch (route.params.subject) {
      case "Mathematics":
        setChapterName(maths);
        break;
      case "Computer":
        getData();
        break;
      case "Chemistry":
        setChapterName(chemistry);
        break;
    }
  }, []);

  const getData = async () => {
    setAttempt(true);
    const response = await chapterApi.getChapterAndTopic();
    if (!response.ok) {
      Alert.alert("Attention", "Unable to load chapters.", [
        {
          text: "Retry",
          onPress: () => getData(),
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ]);
      setAttempt(false);
      return;
    }
    setChapterName(response.data);

    setAttempt(false);
  };
  return (
    <Screen background="2">
      <View style={styles.headingStyle}>
        <AppText color="white" style={{ fontSize: 35 }}>
          {route.params.subject}
        </AppText>
        <AppText color="white">Total Chapter={chaptername.length}</AppText>
      </View>
      <View style={styles.items}>
        <FlatList
          data={chaptername}
          keyExtractor={(chaptername) => chaptername._id}
          renderItem={({ item }) => (
            <View>
              <ChapterList
                icon="book"
                title={item.chapterName}
                topic={item.topics}
                chapterId={item._id}
                style={styles.chapterStyle}
                innerStyle={styles.textStyle}
                quizIcon="target-variant"
              />
            </View>
          )}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  items: {
    flex: 1,
    top: 30,
  },
  chapterStyle: {
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 25,
  },
  headingStyle: {
    top: 30,
    left: 20,
  },
});
export default ChapterTopicScreen;
