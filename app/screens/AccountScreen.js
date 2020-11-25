import React from "react";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Fontisto,
} from "@expo/vector-icons";

import AccountItems from "../components/AccountItems.js";
import AccountListItem from "../components/ListItem";
import Screen from "../components/Screen";
import useAuth from "../auth/useAuth";

function AccountScreen(props) {
  const { user, logOut } = useAuth();

  return (
    <Screen>
      <AccountListItem
        title={user.name}
        subTitle={user.email}
        IconComponent={<Fontisto name="male" size={40} color="black" />}
      />
      <AccountItems
        title="Settings"
        icon={<MaterialIcons name="settings" size={30} color="black" />}
        onPress={() => console.log("Settings")}
      />
      <AccountItems
        title="Log Out"
        icon={<MaterialCommunityIcons name="logout" size={30} color="black" />}
        onPress={() => logOut()}
      />
    </Screen>
  );
}

export default AccountScreen;
