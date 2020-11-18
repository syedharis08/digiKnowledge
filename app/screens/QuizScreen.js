import React, { Fragment, useRef } from "react";
import { FlatList, View, Text, ScrollView, Button } from "react-native";

import QuizCard from "../components/QuizCard";
import Screen from "../components/Screen";

const quiz = [
  {
    id: 1,
    question: "this is a question1",
    answer: [
      {
        id: 1,
        correct: true,
        title: "this is first answer of question1",
      },
      {
        id: 2,
        title: "this is second answer of question1",
      },
    ],
  },
  {
    id: 2,
    question: "this is a question2",
    answer: [
      {
        id: 1,

        title: "this is first answer of question2",
      },
      {
        id: 2,
        title: "this is second answer of question2",
      },
    ],
  },
];

function QuizScreen(props) {
  return (
    <ScrollView>
      <View>
        <FlatList
          data={quiz}
          keyExtractor={(question) => question.id.toString()}
          renderItem={({ index, item }) => (
            <QuizCard
              question={item.question}
              answer={
                <FlatList
                  data={item.answer}
                  keyExtractor={(answer) => answer.id.toString()}
                  renderItem={({ item }) => <Text>{item.title}</Text>}
                />
              }
              aobj={item.answer}
              index={index}
            />
          )}
        />
        <Button title="Next" />
      </View>
    </ScrollView>
  );
}

export default QuizScreen;
