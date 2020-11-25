import React from "react";
import { View, StyleSheet, ProgressBarAndroid, Text } from "react-native";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import colors from "../config/colors";
import { ProgressChart } from "react-native-chart-kit";
import ProgressCircle from "react-native-progress-circle";

const data = {
  // optional
  data: [0.8],
};

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 3, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};
function ResultScreen(props) {
  return (
    <Screen background="2">
      <View style={styles.textContainer}>
        <AppText
          color={colors.primary}
          style={{ fontWeight: "bold", fontSize: 30 }}
        >
          Your overall Percentage
        </AppText>
      </View>
      <View style={styles.barView}>
        <ProgressCircle
          percent={30}
          radius={100}
          borderWidth={8}
          color="#3399FF"
          shadowColor="#999"
          bgColor="#fff"
        >
          <AppText color={colors.secondary} style={{ fontSize: 18 }}>
            30%
          </AppText>
        </ProgressCircle>
        <View></View>
      </View>
      <View style={styles.textContainer1}>
        <AppText
          color={colors.primary}
          style={{ fontWeight: "bold", fontSize: 30 }}
        >
          Individual Quiz Result
        </AppText>
      </View>

      <View style={styles.container}>
        <View style={styles.example}>
          <AppText color={colors.secondary} style={{ fontWeight: "bold" }}>
            Result of Topic
          </AppText>
          <ProgressBarAndroid
            styleAttr="Horizontal"
            indeterminate={false}
            progress={0.5}
          />
          <AppText color={colors.secondary} style={{ fontWeight: "bold" }}>
            Result of Topic
          </AppText>
          <ProgressBarAndroid
            styleAttr="Horizontal"
            indeterminate={false}
            progress={0.2}
          />
          <AppText color={colors.secondary} style={{ fontWeight: "bold" }}>
            Result of Topic
          </AppText>
          <ProgressBarAndroid
            styleAttr="Horizontal"
            indeterminate={false}
            progress={1}
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    justifyContent: "center",
    alignSelf: "center",
    top: 20,
  },
  textContainer1: {
    justifyContent: "center",
    alignSelf: "center",
    top: 40,
  },
  barView: {
    alignSelf: "center",
    top: 20,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    top: 60,
  },
});
export default ResultScreen;
