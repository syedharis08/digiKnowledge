import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

import Card from "../components/Card";

import AppText from "./AppText";
import colors from "../config/colors";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "../config/Screens";

function ChapterList({
  icon,
  title,
  style,
  innerStyle,
  size = 30,
  topic,
  onPress,
  quizIcon,
  chapterId,
}) {
  const navigation = useNavigation();
  return (
    <View style={style}>
      <View style={{ flexDirection: "row" }}>
        <AppText
          style={{ fontWeight: "bold", fontSize: 25 }}
          color={colors.secondary}
        >
          {title}
        </AppText>
      </View>
      <ScrollView horizontal={true}>
        <FlatList
          horizontal
          style={{ flexDirection: "row" }}
          data={topic}
          keyExtractor={(topic) => topic._id}
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
        <TouchableOpacity
          style={styles.card}
          onPress={() =>
            navigation.navigate(SCREENS.Quiz, {
              id: chapterId,
              chapterName: title,
            })
          }
        >
          <View style={{ alignItems: "center" }}>
            <MaterialCommunityIcons
              name="target-variant"
              size={70}
              style={{ color: "black" }}
            />
            <AppText color="white" style={{ fontSize: 15, fontWeight: "bold" }}>
              Attempt Quiz
            </AppText>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    justifyContent: "center",
    width: 118,
    paddingTop: 20,
    paddingBottom: 20,
  },
});

{
  /* <View>
<MaterialCommunityIcons
  name="target-variant"
  size={70}
  style={{ left: 250, bottom: 60, color: "black" }}
/>

</View> */
}

export default ChapterList;
