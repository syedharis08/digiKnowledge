import React from "react";
import { Video } from "expo-av";
import { View, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";

function VideoScreen(props) {
  return (
    <Screen background="2">
      <Video
        source={{
          uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        isLooping
        useNativeControls
        style={{ width: "100%", height: 300, justifyContent: "center" }}
      />
      <View style={styles.buttonContainer}>
        <AppButton title="Attmpt Quiz" />
      </View>
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
