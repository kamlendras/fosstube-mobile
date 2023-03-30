// Homescreen.js
import React from "react";
import { Button, View, Text } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Welcome To Our Dev Community :)</Text>
      <Button
        title="About"
        onPress={() => navigation.navigate("About")}
      />
    </View>
  );
}