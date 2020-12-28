import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  ErrorMessages,
} from "../components/forms";
import AppText from "../components/AppText";
import color from "../config/colors";
import { SCREENS } from "../config/Screens";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(8).label("Password"),
});

function SignInScreen({ navigation }) {
  const [attempt, setAttempt] = useState(false);
  const [error, setError] = useState("");
  const [displayError, setDisplayError] = useState(false);
  const [push, setpush] = useState(false);
  const { logIn } = useAuth();
  const handleSubmit = async ({ email, password }) => {
    setAttempt(true);

    const response = await authApi.login(email, password);

    if (!response.ok) {
      if (response.data) {
        setAttempt(false);
        setDisplayError(true);
        setError(response.data);
      } else {
        setAttempt(false);
        setDisplayError(true);
        setError("An unexpected Error occured");
      }
      return;
    }

    setAttempt(false);
    setDisplayError(false);
    logIn(response.data);
  };

  return (
    <Screen background="2">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
          enabled={push}
        >
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
                initialValues={{ email: "", password: "" }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
              >
                <ActivityIndicator animating={attempt} />
                <ErrorMessages error={error} visible={displayError} />
                <AppFormField
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="email"
                  name="email"
                  keyboardType="email-address"
                  placeholder="Email                                                        "
                  onFocus={() => {
                    setpush(false);
                  }}
                />
                <AppFormField
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="lock"
                  name="password"
                  placeholder="Password                                                    "
                  secureTextEntry
                  textContentType="password"
                />

                <SubmitButton title="Sign In" />
                <TouchableOpacity>
                  <AppText
                    onPress={() => navigation.navigate(SCREENS.ForgotPassword)}
                    color="orange"
                    style={{
                      fontWeight: "bold",
                      fontSize: 15,
                      textDecorationLine: "underline",
                    }}
                  >
                    Forgot Password?
                  </AppText>
                </TouchableOpacity>
              </AppForm>
              <View style={styles.navigationContainer}>
                <AppText color={color.primary} style={{ fontSize: 15 }}>
                  Does not have an account?
                </AppText>
                <TouchableOpacity>
                  <AppText
                    onPress={() => navigation.navigate(SCREENS.SignUp)}
                    style={{
                      fontWeight: "bold",
                      fontSize: 25,
                      textDecorationLine: "underline",
                    }}
                    color={color.secondary}
                  >
                    SIGN UP
                  </AppText>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
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
    top: 100,
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
    top: 50,
  },
});
export default SignInScreen;
