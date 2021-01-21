import React, { useEffect, useState } from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View, FlatList, TextInput } from "react-native";
import Screen from "../components/Screen";

import chapterApi from "../api/chapterTopic";
import AppButton from "../components/AppButton";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SCREENS } from "../config/Screens";
import Card from "../components/Card";

function SearchBarScreen({ navigation }) {
  const data = [
    {
      id: 1,
      topicName: "FlowChart",
    },
    {
      id: 2,
      topicName: "Computer Networks",
    },
    {
      id: 3,
      topicName: "Bla",
    },
    {
      id: 4,
      topicName: "Bla bla",
    },
  ];

  const [topicName, setTopicName] = useState([]);
  const [chapterName, setChapterName] = useState([]);
  const [attempt, setAttempt] = useState(false);
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState("");
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const filterArray = (text) => {
    setNotFound(false);
    if (!text) {
      setVisible(true);
      return;
    }
    setVisible(false);
    const result = data.filter((item) => item.topicName.toLowerCase() === text);
    if (result.length == 0) {
      setTopicName([]);
      setNotFound(true);
      return;
    }
    setNotFound(false);
    setTopicName(result);
  };

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
    chapterName.length > 0 && (
      <Screen background="2">
        <View
          style={{
            marginLeft: 10,
            marginRight: 40,
            marginTop: 5,
            flexDirection: "row",
          }}
        >
          <View style={{ flex: 3, width: "100%" }}>
            <TextInput
              style={{
                paddingLeft: 10,
                marginTop: 15,
                borderColor: "black",
                borderWidth: 1,
                height: 50,
              }}
              autoCapitalize="none"
              onChangeText={setText}
              placeholder="Enter Topic Name"
            />
          </View>
          <View style={{ flex: 1, paddingLeft: 30 }}>
            <AppButton
              width={100}
              title="Search"
              onPress={() => filterArray(text)}
            />
          </View>
        </View>
        {notFound && <Text>Topic not Found</Text>}
        {visible ? (
          <Text>Enter topic name to search!</Text>
        ) : (
          <FlatList
            data={topicName}
            keyExtractor={(topicName) => topicName.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <Card
                  icon="book"
                  title={item.topicName}
                  style={styles.card}
                  styleIcon={styles.icon}
                  onPress={() => navigation.navigate(SCREENS.Video)}
                />
              </TouchableOpacity>
            )}
          />
        )}
      </Screen>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "#101010",
    marginTop: 60,
    fontWeight: "700",
  },
  listItem: {
    marginTop: 10,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#fff",
    width: "100%",
  },
  listItemText: {
    fontSize: 18,
  },
  card: {
    alignItems: "center",
    justifyContent: "center",
    width: 118,
    paddingTop: 20,
    paddingBottom: 20,
  },
});
export default SearchBarScreen;
