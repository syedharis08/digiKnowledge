import React, { useEffect, useState } from "react";
import { Button, Text, FlatList, View, StyleSheet, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";
import quizApi from "../api/quiz";
import UserApi from "../api/user";

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
  const [attempt, setAttempt] = useState(false);
  const [quiz, setQuiz] = useState([]);
  const [index, setIndex] = useState(0);
  const [object, setObject] = useState({});
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [rightAnswer, setRightAnswer] = useState();
  const [score, setScore] = useState(0);
  // const [item, setItem] = useState();

  useEffect(() => {
    getQuiz();
  }, []);

  const handleSubmit = async () => {
    setAttempt(true);
    const response = await UserApi.updateResult(score);

    if (!response.ok) {
      setAttempt(false);
      setSearchFailed(true);
      if (response.data) {
        setError(response.data);
        return;
      }
      setError("An unexpected error occured");
      return;
    }
  };

  const getQuiz = async () => {
    setAttempt(true);
    const response = await quizApi.getQuiz();
    if (!response.ok) {
      Alert.alert("Attention", "Unable to load quiz.", [
        {
          text: "Retry",
          onPress: () => getQuiz(),
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ]);
      setAttempt(false);
      return;
    }
    console.log("In getQuiz");
    console.log(response.data);
    setQuiz(response.data);

    setAttempt(false);
  };

  const handleStart = () => {
    setVisible3(true);
    setObject(quiz[index]);
    setIndex(index + 1);
    console.log(index);
  };

  const correctedAnswer = (item) => {
    console.log(item.isCorrect);
    if (item.isCorrect) {
      setScore(score + 1);
    }
    if (index + 1 > quiz.length - 1) {
      setVisible2(true);
    }
    if (index + 1 > quiz.length) {
      setVisible(true);
    }
    setIndex(index + 1);
    setObject(quiz[index]);
    console.log(index);
  };
  console.log(quiz);
  return (
    <Screen background="2">
      <View style={styles.mainContainer}>
        <View style={styles.heading}>
          <AppText color="white" style={{ fontWeight: "bold", fontSize: 25 }}>
            {object.questionTitle}
          </AppText>
          <View style={styles.listStyle}>
            <FlatList
              data={object["options"]}
              keyExtractor={(item) => item.id.toString()}
              render
              Item={({ item }) => {
                return (
                  <TouchableOpacity>
                    <AppButton
                      title={item.optionTitle}
                      onPress={() => correctedAnswer(item)}
                    />
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </View>

      <Button title="Start" onPress={handleStart} disabled={visible3} />
      <Button title="Show Result" disabled={visible} />
      <Button tile="ReAttempt Quiz" disbaled={visible} />
      <Button title="Submit Quiz" onPress={handleSubmit} disabled={visible} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  heading: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  listStyle: {
    width: "100%",
    height: "50%",
    top: 100,
    left: 80,
    justifyContent: "center",
  },
});
export default QuizScreen;
