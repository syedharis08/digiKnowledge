import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Alert } from "react-native";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import colors from "../config/colors";
import ResultApi from "../api/result";
import useAuth from "../auth/useAuth";
import ResultCard from "../components/ResultCard";
import { FlatList } from "react-native-gesture-handler";

function ResultScreen(props) {
  const [attempt, setAttempt] = useState(false);
  const [marks, setMarks] = useState(0);
  const [resultData, setResultData] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setAttempt(true);
    const response = await ResultApi.getResult(user);

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
    setResultData(response.data);
    console.log(resultData);
    setAttempt(false);
  };
  return (
    resultData.length > 0 && (
      <Screen background="2">
        <View style={{ top: 30 }}>
          <View style={{ justifyContent: "center", alignSelf: "center" }}>
            <AppText color="white" style={{ fontWeight: "bold", fontSize: 30 }}>
              Result Of Attempted quiz
            </AppText>
          </View>
          <FlatList
            data={resultData}
            keyExtractor={(resultData) => resultData._id}
            renderItem={({ item }) => (
              <View>
                <ResultCard
                  obtainedMarks={item.obtained}
                  chapterName={item.chaptername}
                />
              </View>
            )}
          />
        </View>
      </Screen>
    )
  );
}

const styles = StyleSheet.create({});
export default ResultScreen;
