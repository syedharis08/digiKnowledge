import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ResultScreen from "../screens/ResultScreen";
import SearchBarScreen from "../screens/SearchBarScreen";
import AccountScreen from "../screens/AccountScreen";
import FeedNavigator from "./FeedNavigator";

const Tab = createBottomTabNavigator();
const TabNavigation = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name="Home" component={FeedNavigator} />
    <Tab.Screen name="Search" component={SearchBarScreen} />
    <Tab.Screen name="Result" component={ResultScreen} />
    <Tab.Screen name="Account" component={AccountScreen} />
  </Tab.Navigator>
);

export default TabNavigation;
