import React from "react";
import {
  Image,
  FlatList,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import Card from "../components/Card";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import { SCREENS } from "../config/Screens";

const subjectNames = [
  {
    id: 3,
    title: "Biology",
    icon: "alpha-b-box-outline",
  },
  {
    id: 7,
    title: "Chemistry",
    icon: "alpha-c-box-outline",
  },
  {
    id: 6,
    title: "Computer",
    icon: "alpha-c-box-outline",
  },
  {
    id: 2,
    title: "English",
    icon: "alpha-e-box-outline",
  },
  {
    id: 5,
    title: "Islamiyat",
    icon: "alpha-i-box-outline",
  },
  {
    id: 1,
    title: "Mathematics",
    icon: "alpha-m-box-outline",
  },
  {
    id: 4,
    title: "Pak-Studies",
    icon: "alpha-p-box-outline",
  },

  {
    id: 8,
    title: "Physics",
    icon: "alpha-p-box-outline",
  },
  {
    id: 9,
    title: "Urdu",
    icon: "alpha-u-box-outline",
  },
];

const topic = [
  { id: 1, title: "Logarithms", icon: "alpha-l-box" },
  { id: 2, title: "Factorization", icon: "alpha-f-box" },
  { id: 3, title: "Number Systems", icon: "alpha-n-box" },
  { id: 4, title: "Velocity", icon: "alpha-v-box" },
];

function SubjectsScreen({ navigation }) {
  return (
    <Screen background="2">
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={require("../assets/Logo.png")}
          ></Image>
          <AppText color="white" style={{ fontWeight: "bold" }}>
            Welcome
          </AppText>
        </View>
        <View style={styles.items}>
          <AppText
            color="white"
            style={{ fontWeight: "bold", fontSize: 25, top: 10, right: 45 }}
          >
            Choose your Subject
          </AppText>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={subjectNames}
            numColumns={3}
            keyExtractor={(subjectNames) => subjectNames.id.toString()}
            renderItem={({ item }) => (
              <Card
                icon={item.icon}
                title={item.title}
                style={styles.card}
                styleIcon={styles.icon}
                onPress={() =>
                  navigation.navigate(SCREENS.ChapterTopic, {
                    subject: item.title,
                  })
                }
              />
            )}
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  items: {
    top: 30,
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    width: "100%",
    height: 420,
  },
  card: {
    alignItems: "center",
    justifyContent: "center",
    width: 118,
    paddingTop: 20,
    paddingBottom: 20,
  },
  logo: {
    width: 70,
    height: 70,
  },
  mainContainer: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  recommendedTopic: {
    top: 30,
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    width: "100%",
    height: 220,
  },
});

export default SubjectsScreen;
