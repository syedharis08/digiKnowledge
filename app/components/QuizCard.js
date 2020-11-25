import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";

function QuizCard({ title, answer = [], onPress, correctAnswer }) {
  // const [correctAnswer, setCorrectAnswer] = useState();

  return (
    <View style={styles.mainContainer}>
      <Text>{title}</Text>
      <FlatList
        data={answer}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <Button
                onPress={onPress(correctAnswer)}
                title={item.optionTitle}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default QuizCard;
