import React from "react";
import { Image, StyleSheet, View } from "react-native";

import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";
import colors from "../config/colors";
import { SCREENS } from "../config/Screens";

function WelcomeScreen({ navigation }) {
  return (
    <Screen>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../assets/Logo.png")}
        ></Image>
        <AppText color={colors.primary} style={{ fontWeight: "bold" }}>
          DigiKnowledge
        </AppText>

        <View style={styles.buttonsContainer}>
          <AppButton
            title="Sign in"
            onPress={() => navigation.navigate(SCREENS.SignIn)}
          />
          <AppButton
            title="Sign up"
            onPress={() => navigation.navigate(SCREENS.SignUp)}
          />
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
    right: 5,
  },
});
export default WelcomeScreen;
