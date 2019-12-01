import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input, Text } from "react-native-elements";

const RegisterScreen = ({ params }) => (
  <View style={styles.container}>
    <View style={styles.box}>
      <Text h1>Register</Text>
      <Input
        placeholder="Nombre Completo"
        //errorStyle={{ color: "red" }}
        //errorMessage="Entre "
      />

      <Input
        placeholder="INPUT WITH ERROR MESSAGE"
        //errorStyle={{ color: "red" }}
        //errorMessage="ENTER A VALID ERROR HERE"
      />
      <Input
        placeholder="INPUT WITH ERROR MESSAGE"
        //errorStyle={{ color: "red" }}
        //errorMessage="ENTER A VALID ERROR HERE"
      />
      <Button
        icon={<Icon name="arrow-right" size={15} color="white" />}
        iconRight
        title="Registrar "
      />
    </View>
  </View>
);

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  box: {
    width: "80%"
  }
});
