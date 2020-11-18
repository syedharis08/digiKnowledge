import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(8).label("Password"),
});

function SignInScreen(props) {
  const [push, setpush] = useState(false);
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
          </View>
          <View style={styles.fieldContainer}>
            <AppForm
              initialValues={{ email: "", password: "" }}
              onSubmit={(values) => console.log(values)}
              validationSchema={validationSchema}
            >
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
            </AppForm>
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
  },
  fieldContainer: {
    width: "100%",
    height: "100%",
    top: 60,
    alignItems: "center",
  },
  logo: {
    width: 125,
    height: 125,
    right: 10,
  },
});
export default SignInScreen;
