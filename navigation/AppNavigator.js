import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import AuthStackNavigator from "./AuthStackNavigator";
import WrappedAuthScreen from "./WrappedAuthScreen";

export default createAppContainer(
  createSwitchNavigator(
    {
      // You could add another route here for authentication.
      // Read more at https://reactnavigation.org/docs/en/auth-flow.html
      Main: MainTabNavigator,
      Auth: AuthStackNavigator,
      WrappedAuth: WrappedAuthScreen
    },
    {
      initialRouteName: "WrappedAuth"
    }
  )
);
