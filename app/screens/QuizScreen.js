import React, { useEffect, useState } from "react";
import { Button, Text, FlatList, View, StyleSheet, Alert } from "react-native";
import Modal from "react-native-modal";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";
import QuizApi from "../api/quiz";
import QuizCard from "../components/QuizCard";
import ResultApi from "../api/result";
import useAuth from "../auth/useAuth";
import { AntDesign } from "@expo/vector-icons";
import { SCREENS } from "../config/Screens";

function QuizScreen({ navigation, route }) {
  const [quiz, setQuiz] = useState([]);
  const [counter, setCounter] = useState(0);
  const [score, setScore] = useState(0);
  const [visible, setVisible] = useState(false);
  const [attempt, setAttempt] = useState(false);
  const { user } = useAuth();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setAttempt(true);
    const response = await QuizApi.getQuiz(route.params.id);

    if (!response.ok) {
      Alert.alert("Attention", "Unable to load quiz.", [
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
    setQuiz(response.data.quiz);
    console.log(quiz);
    setAttempt(false);
  };

  const handleChange = (option) => {
    if (option.isCorrect) {
      setScore(score + 1);
      if (counter + 1 > quiz.length - 1) {
        return setVisible(true);
      }
      setCounter(counter + 1);
    }
    if (counter + 1 > quiz.length - 1) {
      return setVisible(true);
    }
    console.log(score);

    setCounter(counter + 1);
  };

  const submitResult = async () => {
    setAttempt(true);
    const info = {
      obtainedmarks: score,
      quizid: route.params.id,
      chaptername: route.params.chapterName,
    };
    console.log("user:", user);
    const response = await ResultApi.postResult(info, user);

    if (!response.ok) {
      Alert.alert("Attention", "Unable to submit result.", [
        {
          text: "Retry",
          onPress: () => submitResult(),
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ]);
      setAttempt(false);
      return;
    }
    setAttempt(false);
    setVisible(false);
    navigation.navigate(SCREENS.ChapterTopic);
  };

  const handleReattempt = () => {
    setCounter(0);
    setScore(0);
    setVisible(false);
  };
  return (
    quiz.length > 0 && (
      <Screen background="2">
        <View style={{ top: 20, alignItems: "center" }}>
          <AppText color="white" style={{ fontWeight: "bold" }}>
            Question Number {counter + 1}
          </AppText>
        </View>
        <QuizCard
          question={quiz[counter].question}
          options={quiz[counter].options}
          onPress={handleChange}
        />

        <Modal transparent={true} visible={visible} animationType="slide">
          <View
            style={{
              height: "60%",
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 30 }}>Quiz Over</Text>
            <AntDesign name="checkcircleo" size={100} color="black" />
            <Text>Your Score is {score}</Text>
            <Button
              title="Submit Result"
              color="black"
              onPress={submitResult}
            />
            <View style={{ top: 20 }}>
              <Button
                title="ReAttempt Quiz"
                color="red"
                onPress={handleReattempt}
              />
              <Button title="Show Correct Options" color="green" />
            </View>
          </View>
          <Button title="Close" onPress={() => setVisible(false)} />
        </Modal>
      </Screen>
    )
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
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
});
export default QuizScreen;
