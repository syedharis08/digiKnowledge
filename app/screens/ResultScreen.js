import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ProgressBarAndroid,
  Text,
  Alert,
} from "react-native";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import colors from "../config/colors";
import { ProgressChart } from "react-native-chart-kit";
import ProgressCircle from "react-native-progress-circle";
import ResultApi from "../api/result";
import useAuth from "../auth/useAuth";
import { FlatList } from "react-native-gesture-handler";

function ResultScreen(props) {
  const [attempt, setAttempt] = useState(false);
  const [data, setData] = useState([]);
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
    setData(response.data);
    setAttempt(false);
  };
  return (
    data.length > 0 && (
      <Screen background="2">
        {console.log(data)}
        <FlatList data={data} />
      </Screen>
    )
  );
}

const styles = StyleSheet.create({});
export default ResultScreen;
