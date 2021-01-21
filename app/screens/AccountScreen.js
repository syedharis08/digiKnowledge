import React from "react";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Fontisto,
} from "@expo/vector-icons";

import AccountItems from "../components/AccountItems.js";
import Screen from "../components/Screen";
import useAuth from "../auth/useAuth";

function AccountScreen(props) {
  const { user, logOut } = useAuth();

  return (
    <Screen background="2">
      {console.log(user.name)}
      <AccountItems
        title={user.name}
        icon={<MaterialCommunityIcons name="account" size={40} color="black" />}
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
