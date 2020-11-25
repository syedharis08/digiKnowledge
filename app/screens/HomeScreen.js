import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import SubjectsScreen from "./SubjectsScreen";

import color from "../config/colors";
import RecommendedScreen from "./RecommendedScreen";

function HomeScreen(props) {
  return (
    <Screen background="2">
      <ScrollView>
        <View style={styles.textStyle}>
          <AppText
            color={color.primary}
            style={{ fontSize: 40, fontWeight: "bold" }}
          >
            Welcome
          </AppText>
          <AppText color={color.primary} style={{ fontWeight: "bold" }}>
            Username
          </AppText>
        </View>
        <SubjectsScreen />
        <RecommendedScreen />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    padding: 20,
  },
});
export default HomeScreen;
