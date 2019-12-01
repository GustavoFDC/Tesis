import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";
const AuthStackNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null
      }
    },
    SignUp: RegisterScreen,
    SignIn: LoginScreen
  },
  {
    initialRouteName: "Home"
  }
);

export default AuthStackNavigator;
