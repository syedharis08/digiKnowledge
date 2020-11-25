import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import * as Yup from "yup";

import AppText from "../components/AppText";
import color from "../config/colors";
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
  name: Yup.string()
    .matches(/(\w.+\s).+/, "Enter at least 2 names")
    .required()
    .label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string()
    .matches(/\w*[a-z]\w*/, "Password must have a small letter")
    .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
    .matches(/\d/, "Password must have a number")
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      "Password must have a special character"
    )
    .required()
    .min(8)
    .label("Password"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords do not match")
    .required()
    .label("Confirm Password"),
});

function SignUpScreen({ navigation }) {
  const [attempt, setAttempt] = useState(false);
  const [error, setError] = useState("");
  const [displayError, setDisplayError] = useState(false);
  const [avoidKeyboard, setAvoidKeyboard] = useState(false);

  const handleSubmit = async (userInfo) => {
    setAttempt(true);
    const response = await userApi.signUp(userInfo);

    if (!response.ok) {
      if (response.data) {
        setAttempt(false);
        setDisplayError(true);
        setError(response.data);
      } else {
        setAttempt(false);
        setDisplayError(true);
        setError("Unexpecter Error occured!");
        console.log(response);
      }

      setAttempt(false);
      return;
    }
    setAttempt(false);
    setDisplayError(false);
    navigation.navigate(SCREENS.SignIn);
  };
  return (
    <Screen background="2">
      <KeyboardAvoidingView behavior="position" enabled={avoidKeyboard}>
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
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
              }}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              <ActivityIndicator animating={attempt} />
              <ErrorMessages error={error} visible={displayError} />
              <AppFormField
                autoCorrect={false}
                icon="account"
                name="name"
                onFocus={() => setAvoidKeyboard(false)}
                placeholder="Name                                                        "
              />
              <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                icon="email"
                name="email"
                keyboardType="email-address"
                onFocus={() => setAvoidKeyboard(false)}
                placeholder="Email                                                        "
              />
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

              <SubmitButton title="Sign Up" />
            </AppForm>
            <View style={styles.navigationContainer}>
              <AppText color={color.primary} style={{ fontSize: 15 }}>
                Already have an account?
              </AppText>
              <TouchableOpacity>
                <AppText
                  onPress={() => navigation.navigate(SCREENS.SignIn)}
                  style={{
                    fontWeight: "bold",
                    fontSize: 25,
                    textDecorationLine: "underline",
                  }}
                  color={color.secondary}
                >
                  SIGN IN
                </AppText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
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
    top: 40,
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
  navigationContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
});

export default SignUpScreen;
