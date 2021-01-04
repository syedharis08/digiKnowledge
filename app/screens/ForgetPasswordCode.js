import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import * as Yup from "yup";

import AppText from "../components/AppText";
import AppForm from "../components/forms/AppForm";
import AppFormField from "../components/forms/AppFormField";
import AuthApi from "../api/auth";
import ErrorMessages from "../components/forms/ErrorMessages";
import SubmitButton from "../components/forms/SubmitButton";
import Screen from "../components/Screen";
import { SCREENS } from "../config/Screens";
const validationSchema = Yup.object().shape({
  code: Yup.string().required().label("Code"),
});

const ForgetPasswordCode = ({ navigation, route }) => {
  const [emailedCode, setEmailedCode] = useState(route.params.CODE);
  const [email, setEmail] = useState(route.params.EMAIL);
  const [attemptFailed, setAttemptFailed] = useState(false);
  const [searchFailed, setSearchFailed] = useState(false);
  const [error, setError] = useState();

  const handleSubmit = ({ code }) => {
    setAttemptFailed(true);
    if (emailedCode === code) {
      setAttemptFailed(false);
      setSearchFailed(false);
      navigation.navigate(SCREENS.NewPasswordScreen, {
        EMAIL: email,
      });
      return;
    }
    setAttemptFailed(false);
    setAttemptFailed(true);
    setError("Code does not match.");
  };

  const handleResend = async () => {
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
    let reset = response.data;
    reset = reset.toString();
    setEmailedCode(reset);
  };
  return (
    <>
      <Screen background="2">
        <ErrorMessages error={error} visible={searchFailed} />
        <View style={styles.container2}>
          <Image
            style={styles.logo}
            source={require("../assets/Logo.png")}
          ></Image>
          <AppText color="white" style={{ fontWeight: "bold" }}>
            DigiKnowledge
          </AppText>
        </View>
        <AppForm
          initialValues={{ code: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <View style={styles.container}>
            <AppText color="yellow" style={styles.text}>
              Your password reset code has been sent to your email.
            </AppText>
            <AppFormField
              name="code"
              placeholder="Enter reset code"
              keyboardType="number-pad"
            />
            <SubmitButton title="Change Password" />
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AppText color="white" style={styles.again}>
              If you didn't receive the code.
            </AppText>
            <TouchableOpacity onPress={handleResend}>
              <AppText color="royalblue" style={styles.resend}>
                Resend code?
              </AppText>
            </TouchableOpacity>
          </View>
        </AppForm>
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    margin: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  container2: {
    justifyContent: "center",
    alignItems: "center",
    top: 10,
  },
  logo: {
    width: 70,
    height: 70,
    right: 5,
  },

  text: {
    alignItems: "center",
    color: "black",
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 5,
    fontWeight: "bold",
  },
  again: {
    marginLeft: 20,
    marginTop: 20,
  },
  resend: {
    marginLeft: 10,
    marginTop: 20,
  },
});

export default ForgetPasswordCode;
