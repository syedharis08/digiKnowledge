import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  StatusBar,
} from "react-native";

import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";
import colors from "../config/colors";
function WelcomeScreen(props) {
  return (
    <Screen>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../assets/Logo.png")}
        ></Image>
        <AppText color={colors.primary}>digiKnowledge</AppText>

        <View style={styles.buttonsContainer}>
          <AppButton title="Sign in" onPress={() => console.log("Tapped")} />
          <AppButton title="Sign up" />
        </View>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  buttonsContainer: {
    marginTop: 100,
  },
  container: {
    justifyContent: "center",
    top: 125,
    alignItems: "center",
  },
  logo: {
    width: 125,
    height: 125,
    right: 10,
  },
});
export default WelcomeScreen;
