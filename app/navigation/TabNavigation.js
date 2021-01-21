import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ResultScreen from "../screens/ResultScreen";
import SearchBarScreen from "../screens/SearchBarScreen";
import AccountScreen from "../screens/AccountScreen";
import FeedNavigator from "./FeedNavigator";
import SearchFeedNavigator from "./SearchFeedNavigator";

const Tab = createBottomTabNavigator();
const TabNavigation = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen
      name="Home"
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={SearchFeedNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="book-search-outline"
            color={color}
            size={size}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Result"
      component={ResultScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="note" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Account"
      component={AccountScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default TabNavigation;
