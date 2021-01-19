import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, TextInput } from "react-native";
import Screen from "../components/Screen";

import chapterApi from "../api/chapterTopic";
import AppButton from "../components/AppButton";

function SearchBarScreen(props) {
  const data = [
    {
      id: 1,
      topicName: "Islamabad",
    },
    {
      id: 2,
      topicName: "Islamiyat",
    },
    {
      id: 3,
      topicName: "Islam",
    },
    {
      id: 4,
      topicName: "Lahore",
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
              <View>
                <Text>{item.topicName}</Text>
              </View>
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
});
export default SearchBarScreen;
