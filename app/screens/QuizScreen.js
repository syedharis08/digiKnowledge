import React, { useState } from "react";
import { Button, Text, FlatList, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import QuizCard from "../components/QuizCard";
import Screen from "../components/Screen";

const quiz = [
  {
    id: 1,
    questionTitle: "Capital of Pakistan",
    options: [
      {
        id: 1,
        optionTitle: "Islamabad",
        isCorrect: true,
      },
      {
        id: 2,
        optionTitle: "Lahore",
        isCorrect: false,
      },
      {
        id: 3,
        optionTitle: "Karachi",
        isCorrect: false,
      },
      {
        id: 4,
        optionTitle: "Peshawar",
        isCorrect: false,
      },
    ],
  },
  {
    id: 2,
    questionTitle: "Capital of India",
    options: [
      {
        id: 1,
        optionTitle: "New Delhi",
        isCorrect: true,
      },
      {
        id: 2,
        optionTitle: "Mumbai",
        isCorrect: false,
      },
      {
        id: 3,
        optionTitle: "Kolkata",
        isCorrect: false,
      },
      {
        id: 4,
        optionTitle: "Aligarh",
        isCorrect: false,
      },
    ],
  },
  {
    id: 3,
    questionTitle: "President of Pakistan",
    options: [
      {
        id: 1,
        optionTitle: "Nawaz Sharif",
        isCorrect: true,
      },
      {
        id: 2,
        optionTitle: "Arif Alvi",
        isCorrect: false,
      },
      {
        id: 3,
        optionTitle: "Zardari",
        isCorrect: false,
      },
      {
        id: 4,
        optionTitle: "Imran Khan",
        isCorrect: false,
      },
    ],
  },
];
function QuizScreen(props) {
  const [array, setArray] = useState(quiz);
  const [index, setIndex] = useState(0);
  const [object, setObject] = useState({});
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [rightAnswer, setRightAnswer] = useState();
  const [score, setScore] = useState(0);
  // const [item, setItem] = useState();

  const handleNext = () => {
    if (index + 1 > array.length - 1) {
      setVisible2(true);
    }
    setIndex(index + 1);
    setObject(array[index]);
    console.log(index);
  };

  const handleStart = () => {
    setVisible3(true);
    setObject(array[index]);
    setIndex(index + 1);
    console.log(index);
  };

  const correctedAnswer = (item) => {
    console.log(item.isCorrect);
    if (item.isCorrect) {
      setScore(score + 1);
    }
  };
  return (
    <Screen background="2">
      <View style={styles.mainContainer}>
        <View>
          <Text>{object.questionTitle}</Text>
        </View>
      </View>

      <FlatList
        data={object["options"]}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <Button
                title={item.optionTitle}
                onPress={() => correctedAnswer(item)}
              />
            </TouchableOpacity>
          );
        }}
      />
      <Text>{score}</Text>

      <Button title="Start" onPress={handleStart} disabled={visible3} />
      <Button title="Next" onPress={handleNext} disabled={visible2} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
export default QuizScreen;
