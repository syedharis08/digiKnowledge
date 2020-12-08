import React from "react";
import { Video } from "expo-av";
import { View, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";

function VideoScreen(props) {
  const video1 = require("../assets/FlowChart.mp4");
  return (
    <Screen background="2">
      <Video
        source={video1}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        isLooping
        useNativeControls
        style={{
          width: "100%",
          height: 300,
          justifyContent: "center",
          top: 200,
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
