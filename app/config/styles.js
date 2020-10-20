import { Platform } from "react-native";

import colors from "./colors";

export default {
  colors,
  text: {
    color: colors.secondary,
    fontSize: 20,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
