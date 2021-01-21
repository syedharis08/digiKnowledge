import React, { useEffect, useState } from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import Screen from "../components/Screen";

import ChapterList from "../components/ChapterList";
import AppText from "../components/AppText";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SCREENS } from "../config/Screens";
import chapterApi from "../api/chapterTopic";

function ChapterTopicScreen({ navigation, route }) {
  const [chaptername, setChapterName] = useState([]);
  const [attempt, setAttempt] = useState(false);

  useEffect(() => {
    switch (route.params.subject) {
      case "Computer":
        getData();
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
      {chaptername.length == 0 && (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            bottom: 300,
          }}
        >
          <AppText
            color="white"
            style={{
              width: "90%",
            }}
          >
            Our team is working on this chapter. Kindly Check later for updates
          </AppText>
        </View>
      )}
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
