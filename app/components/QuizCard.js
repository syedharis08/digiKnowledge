import React, { useState } from "react";

import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";

import AppText from "./AppText";
const QuizCard = ({ question, options, onPress }) => {
  const check = (value) => {
    console.log(value.isCorrect);
  };
  return (
    <View style={styles.container}>
      <View style={styles.question}>
        <AppText color="black" style={{ fontWeight: "bold" }}>
          {question}
        </AppText>
      </View>
      <View style={styles.answer}>
        <FlatList
          data={options}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View style={styles.answers}>
              <TouchableOpacity
                onPress={() => {
                  onPress(item);
                  check(item);
                }}
              >
                <AppText color="white">{item.option}</AppText>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  text: {
    fontWeight: "bold",
    margin: 8,
  },
  question: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: "90%",
    height: "30%",
  },
  answers: {
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
    width: "90%",
    alignSelf: "center",
  },
  answer: {
    top: 20,
  },
});

export default QuizCard;
