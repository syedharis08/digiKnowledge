import React from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import AppText from "./AppText";

function ResultCard({ obtainedMarks, chapterName }) {
  const getObtainedMarks = (marks) => {
    if (marks > 7) {
      return 1;
    }
    return 0;
  };
  return (
    <View style={styles.container}>
      <AppText color="white" style={{ fontSize: 20 }}>
        {chapterName}
      </AppText>
      <View style={{ flexDirection: "row" }}>
        <AppText color="white">Obtained Marks:</AppText>
        <Text
          style={[
            getObtainedMarks(obtainedMarks) == 1 ? styles.green : styles.red,
          ]}
        >
          {obtainedMarks}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderColor: "white",
    borderWidth: 3,
    elevation: 2,
  },
  green: {
    color: "green",
  },
  red: {
    color: "red",
    fontSize: 20,
    paddingLeft: 10,
  },
});
export default ResultCard;
