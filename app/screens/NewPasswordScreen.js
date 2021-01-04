import React, { useState } from "react";
import { Image, StyleSheet, View, KeyboardAvoidingView } from "react-native";
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

import UserApi from "../api/user";

const validationSchema = Yup.object().shape({
  password: Yup.string().required().min(8).label("Password"),
  confirmPassword: Yup.string().required().min(8).label("Confirm Password"),
});

function NewPasswordScreen({ navigation, route }) {
  const email = route.params.EMAIL;
  const [avoidKeyboard, setAvoidKeyboard] = useState(false);
  const [attemptFailed, setAttemptFailed] = useState(false);
  const [updateFailed, setUpdateFailed] = useState(false);
  const [error, setError] = useState(false);
  const [visible, setVisible] = useState(false);

  console.log(email);
  const handleSubmit = async ({ password, confirmPassword }) => {
    setAttemptFailed(true);
    if (password !== confirmPassword) {
      setAttemptFailed(false);
      setVisible(true);
      setError("Password does not match");
      return;
    }

    setVisible(false);
    const response = await UserApi.updatePassword(email, password);

    if (!response.ok) {
      setAttemptFailed(false);
      setUpdateFailed(true);
      setError(response.data);
      return;
    }

    setAttemptFailed(false);
    setUpdateFailed(false);
    navigation.navigate(SCREENS.SignIn);
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
            <ErrorMessages error={error} visible={updateFailed} />

            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              name="password"
              placeholder="Password                                                    "
              secureTextEntry
              textContentType="password"
              onFocus={() => setAvoidKeyboard(true)}
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              name="confirmPassword"
              placeholder="Confirm Password                                                    "
              secureTextEntry
              textContentType="password"
              onFocus={() => setAvoidKeyboard(true)}
            />
            <ErrorMessages error={error} visible={visible} />

            <SubmitButton title="Update Password" />
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

export default NewPasswordScreen;
