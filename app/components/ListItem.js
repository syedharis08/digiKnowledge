import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

import Card from "../components/Card";

import AppText from "./AppText";
import colors from "../config/colors";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "../config/Screens";

function ListItem({
  icon,
  title,
  style,
  innerStyle,
  size = 30,
  topic,
  onPress,
}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={style}>
        {icon && (
          <MaterialCommunityIcons
            name={icon}
            size={size}
            color={colors.secondary}
          />
        )}
        <AppText style={innerStyle} color={colors.secondary}>
          {title}
        </AppText>
        {topic && (
          <ScrollView horizontal={true}>
            <FlatList
              horizontal
              style={{ flexDirection: "row" }}
              data={topic}
              keyExtractor={(topic) => topic._id}
              renderItem={({ item }) => (
                <TouchableOpacity>
                  <Card
                    icon="book"
                    title={item.topicName}
                    style={styles.card}
                    styleIcon={styles.icon}
                    onPress={() => navigation.navigate(SCREENS.Video)}
                  />
                </TouchableOpacity>
              )}
            />
          </ScrollView>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    justifyContent: "center",
    width: 118,
    paddingTop: 20,
    paddingBottom: 20,
  },
});

export default ListItem;
