import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { createStackNavigator } from "@react-navigation/stack";
import { SCREENS } from "../config/Screens";
import ClassScreen from "../screens/ClassScreen";
import TabNavigation from "./TabNavigation";

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={SCREENS.Class} component={ClassScreen} />
    <Stack.Screen name={SCREENS.Tab} component={TabNavigation} />
  </Stack.Navigator>
);

export default AppNavigator;
