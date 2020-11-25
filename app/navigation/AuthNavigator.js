import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import { SCREENS } from "../config/Screens";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={SCREENS.Welcome} component={WelcomeScreen} />
    <Stack.Screen name={SCREENS.SignIn} component={SignInScreen} />
    <Stack.Screen name={SCREENS.SignUp} component={SignUpScreen} />
    <Stack.Screen
      name={SCREENS.ForgotPassword}
      component={ForgotPasswordScreen}
    />
  </Stack.Navigator>
);
export default AuthNavigator;
