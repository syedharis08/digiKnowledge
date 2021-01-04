import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import * as Yup from "yup";

import AppText from "../components/AppText";

import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  ErrorMessages,
} from "../components/forms";
import { SCREENS } from "../config/Screens";

import AuthApi from "../api/auth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
});

function ForgotPasswordScreen({ navigation }) {
  const [attemptFailed, setAttemptFailed] = useState(false);
  const [searchFailed, setSearchFailed] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async ({ email }) => {
    setAttemptFailed(true);
    const response = await AuthApi.forgetPassword(email);

    if (!response.ok) {
      setAttemptFailed(false);
      setSearchFailed(true);
      if (response.data) {
        setError(response.data);
        return;
      }
      setError("An unexpected error occured");
      return;
    }

    setAttemptFailed(false);
    setSearchFailed(false);
    let code = response.data;
    code = code.toString();
    navigation.navigate(SCREENS.ForgetPasswordCode, {
      EMAIL: email,
      CODE: code,
    });
  };
  return (
    <Screen background="2">
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../assets/Logo.png")}
        ></Image>
        <AppText color="white" style={{ fontWeight: "bold" }}>
          DigiKnowledge
        </AppText>
      </View>

      <View style={styles.fieldContainer}>
        <View style={styles.innerContainer}>
          <AppForm
            initialValues={{
              email: " ",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <ErrorMessages error={error} visible={searchFailed} />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              name="email"
              keyboardType="email-address"
              placeholder="Email                                                        "
            />
            <SubmitButton title="Send Email" />
          </AppForm>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    top: 10,
  },
  fieldContainer: {
    width: "100%",
    height: "100%",
    top: 200,
    alignItems: "center",
  },
  innerContainer: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 70,
    height: 70,
    right: 5,
  },
});

export default ForgotPasswordScreen;
