import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { COLORS } from "../colors/colors";

export default function Header() {
  return (
    <View style={styles.container}>
      <MaterialIcons name="menu" size={24} color="black" />
      <Image
        style={{ height: 30, width: 30, borderRadius: 50 }}
        source={require("../assets/user.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flexDirection: "row",
    // alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
});
