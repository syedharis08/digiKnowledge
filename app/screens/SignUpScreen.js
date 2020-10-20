import React from "react";
import { Image, StyleSheet, View } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

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

function SignUpScreen(props) {
  return (
    <Screen background="2">
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../assets/Logo.png")}
        ></Image>
      </View>
      <View style={styles.fieldContainer}>
        <AppForm
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <AppFormField
            autoCorrect={false}
            icon="account"
            name="name"
            placeholder="Name                                                        "
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            name="email"
            keyboardType="email-address"
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
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="confirmPassword"
            placeholder="Confirm Password                                                    "
            secureTextEntry
            textContentType="password"
          />

          <SubmitButton title="Sign Up" />
        </AppForm>
      </View>
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

export default SignUpScreen;
