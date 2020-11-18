import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, FlatList, TouchableOpacity, ScrollView } from "react-native";

import Card from "../components/Card";

import AppText from "./AppText";
import colors from "../config/colors";

function ListItem({ icon, title, style, innerStyle, size = 30, topic }) {
  return (
    <TouchableOpacity>
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
              style={{ flexDirection: "row" }}
              data={topic}
              keyExtractor={(topic) => topic.id.toString()}
              renderItem={({ item }) => (
                <Card icon={item.icon} title={item.title} />
              )}
            />
          </ScrollView>
        )}
      </View>
    </TouchableOpacity>
  );
}

export default ListItem;
