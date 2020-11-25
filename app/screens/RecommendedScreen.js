import React from "react";
import { View, StyleSheet, ScrollView, FlatList } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import Card from "../components/Card";

const topic = [
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
    id: 4,
    title: "FOUR",
    icon: "numeric-4-box",
  },
  {
    id: 4,
    title: "FOUR",
    icon: "numeric-4-box",
  },
  {
    id: 4,
    title: "FOUR",
    icon: "numeric-4-box",
  },
];
function RecommendedScreen(props) {
  return (
    <View>
      <AppText
        style={{ fontWeight: "bold", fontSize: 25 }}
        color={colors.primary}
      >
        Recommended Topics for you:
      </AppText>
      <ScrollView horizontal={true}>
        <FlatList
          horizontal
          style={{ flexDirection: "row" }}
          data={topic}
          keyExtractor={(topic) => topic.id.toString()}
          renderItem={({ item }) => (
            <Card icon={item.icon} title={item.title} style={styles.card} />
          )}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    justifyContent: "center",
  },
});
export default RecommendedScreen;
