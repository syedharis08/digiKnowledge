import React from "react";
import { Video } from "expo-av";
import { View, StyleSheet, Text } from "react-native";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";

function VideoScreen({ props }) {
  const video1 = require("../assets/FlowChart.mp4");
  return (
    <Screen background="2">
      <Text
        style={{
          fontSize: 30,
          top: 100,
          left: 100,
          fontWeight: "bold",
          color: "white",
        }}
      >
        FlowChart
      </Text>
      <Video
        source={video1}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="stretch"
        shouldPlay
        isLooping
        useNativeControls
        orientation="landscape"
        style={{
          width: "100%",
          height: 300,
          justifyContent: "center",
          top: 150,
        }}
      />
      <View style={styles.buttonContainer}></View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignSelf: "center",
    paddingTop: 50,
  },
});
export default VideoScreen;
