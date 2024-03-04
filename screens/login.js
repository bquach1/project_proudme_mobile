import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View, Image, Button } from "react-native";
import axios from "axios";
import { DATABASE_URL } from "../constants/constants";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleLogin = () => {
    setLoading(true);

    axios
      .post(`${DATABASE_URL}/login`, {
        email,
        password,
      })
      .then((response) => {
        // localStorage.setItem("authToken", response.data);
        setIsSubmitted(true);
        setLoading(false);
        navigation.navigate("Home");
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        error.code === "ERR_NETWORK"
          ? alert(
              "There seems to be a server-side error. Please wait a moment before trying again."
            )
          : alert("Incorect email or password. Please try again.");
      });
  };

  return (
    <View style={styles.container}>
      <Image
        style={{ width: 80, height: 80 }}
        source={require("../assets/loginScreen/proudme_logo.png")}
      />
      <Image source={require("../assets/loginScreen/logo.png")} />
      <Text>Login to your ProudMe dashboard</Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          margin: 20,
        }}
      >
        <Text>Username/Email: </Text>
        <TextInput
          style={styles.loginInput}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Text>Password: </Text>
        <TextInput
          secureTextEntry={true}
          style={styles.loginInput}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <Button title="Login" onPress={() => handleLogin()} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  loginInput: {
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    width: 200,
    padding: 5,
  },
});
