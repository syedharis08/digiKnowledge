import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

function QuizCard({ question, answer, aobj, index }) {
  console.log("Answer  ", aobj);
  console.log("Answers", answer);
  console.log("Index  ", index);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.question}>
        <Text>{question}</Text>
      </View>
      <View style={styles.answers}>
        <TouchableOpacity>
          <Text>{answer.answer}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    width: "90%",
    height: 400,
    borderColor: "black",
    borderRadius: 75,
    borderWidth: 1.5,
    // elevation: 35,
    alignSelf: "center",
  },
  question: {
    width: "100%",
    height: 40,
    marginVertical: 80,
    marginHorizontal: 80,
    alignSelf: "center",
    borderColor: "black",

    borderWidth: 1.5,
  },
  answers: {
    width: "90%",
    height: 200,
    padding: 50,
  },
});
export default QuizCard;
