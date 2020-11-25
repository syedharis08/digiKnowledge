import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { SCREENS } from "../config/Screens";
import ChapterTopicScreen from "../screens/ChapterTopicScreen";
import SubjectsScreen from "../screens/SubjectsScreen";
import VideoScreen from "../screens/VideoScreen";
import QuizScreen from "../screens/QuizScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={SCREENS.Subject} component={SubjectsScreen} />
    <Stack.Screen name={SCREENS.ChapterTopic} component={ChapterTopicScreen} />
    <Stack.Screen name={SCREENS.Video} component={VideoScreen} />
    <Stack.Screen name={SCREENS.Quiz} component={QuizScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
