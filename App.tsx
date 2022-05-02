import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
} from "react-native";
import Header from "./components/Header";
import { Feather } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Navigator from "./routes/homeStack";

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>HomeScreen</Text>
    </View>
  );
}

function Search() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Search</Text>
    </View>
  );
}

function Heart() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Heart</Text>
    </View>
  );
}

function ShoppingCart() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>ShoppingCart</Text>
    </View>
  );
}

export default function App() {
  return <Navigator />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    // justifyContent: "flex-start",
    // alignItems: "center",
  },
  scroll: {
    marginTop: 40,
    backgroundColor: "#808000",
    paddingHorizontal: 40,
    paddingVertical: 25,
    borderRadius: 15,
    marginHorizontal: 10,
  },
  middle: {
    marginTop: 40,
  },
  card: {
    borderRadius: 10,
    marginHorizontal: 10,
  },
  image: {
    height: 150,
    width: 250,
  },
  smallImage: {
    height: 120,
    width: 100,
  },
  footer: {
    height: 50,
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#778899",
    opacity: 0.7,
  },
});
