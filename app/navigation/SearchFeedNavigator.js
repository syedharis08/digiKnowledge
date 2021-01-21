import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { SCREENS } from "../config/Screens";
import ChapterTopicScreen from "../screens/ChapterTopicScreen";
import SearchBarScreen from "../screens/SearchBarScreen";
import VideoScreen from "../screens/VideoScreen";
import QuizScreen from "../screens/QuizScreen";
import UpdatePasswordScreen from "../screens/UpdatePasswordScreen";

const Stack = createStackNavigator();

const SearchFeedNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={SCREENS.SearchBar} component={SearchBarScreen} />
    <Stack.Screen name={SCREENS.Video} component={VideoScreen} />
  </Stack.Navigator>
);

export default SearchFeedNavigator;
