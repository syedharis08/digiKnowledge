import React from "react";
import { View, StyleSheet, StatusBar, ImageBackground } from "react-native";

const Screen = ({ background = "1", children }) => {
  const image1 = require("../assets/backgroundImage.png");
  const image2 = require("../assets/backgroundImage1.png");

  return (
    <View style={styles.container}>
      <ImageBackground
        blurRadius={1}
        source={background == "1" ? image1 : image2}
        style={styles.image}
      >
        {children}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
  },
  image: {
    flex: 1,
  },
});

export default Screen;
