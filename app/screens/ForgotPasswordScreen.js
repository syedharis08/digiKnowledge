import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  Alert,
  KeyboardAvoidingView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import * as Yup from "yup";

import AppText from "../components/AppText";
import color from "../config/colors";

import AppButton from "../components/AppButton";
import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  ErrorMessages,
  SubmitButton,
} from "../components/forms";
import { SCREENS } from "../config/Screens";
import userApi from "../api/user";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
});

function ForgotPasswordScreen({ navigation }) {
  const createTwoButtonAlert = () =>
    Alert.alert(
      "Email Sent",
      "Check your email for the link",
      [
        {
          text: "Go back to sigin page",
          onPress: () => navigation.navigate(SCREENS.SignIn),
        },
      ],
      { cancelable: false }
    );

  const handleSubmit = () => {};
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
          >
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              name="email"
              keyboardType="email-address"
              placeholder="Email                                                        "
            />
            <AppButton title="Send Email" onPress={createTwoButtonAlert} />
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
