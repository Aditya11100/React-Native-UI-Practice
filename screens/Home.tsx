import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableHighlight,
} from "react-native";
import Header from "../components/Header";
import { Feather } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../colors/colors";

const Tab = createBottomTabNavigator();

export default function Home({ navigation }) {
  const onPress = () => {
    navigation.navigate("Details");
  };

  function HomeScreen() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Header />
          <Text
            style={{
              fontSize: 40,
              fontWeight: "bold",
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            What are you decorating today?
          </Text>
          <ScrollView horizontal={true}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={[COLORS.darkgreen, COLORS.limegreen]}
              style={styles.scroll}
            >
              <Text
                style={{ color: COLORS.white, fontSize: 20, fontWeight: "600" }}
              >
                Living Room
              </Text>
            </LinearGradient>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={[COLORS.darkblue, COLORS.lightskyblue]}
              style={{ ...styles.scroll, backgroundColor: "#0000cd" }}
            >
              <Text
                style={{ color: COLORS.white, fontSize: 20, fontWeight: "600" }}
              >
                Bed Rooms
              </Text>
            </LinearGradient>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={[COLORS.darkorchid, COLORS.orchid]}
              style={{ ...styles.scroll, backgroundColor: "#ffa500" }}
            >
              <Text
                style={{ color: COLORS.white, fontSize: 20, fontWeight: "600" }}
              >
                Kitchen
              </Text>
            </LinearGradient>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={[COLORS.orangered, COLORS.darkorange]}
              style={{ ...styles.scroll, backgroundColor: "#c71585" }}
            >
              <Text
                style={{ color: COLORS.white, fontSize: 20, fontWeight: "600" }}
              >
                Hall
              </Text>
            </LinearGradient>
          </ScrollView>
          <View style={styles.middle}>
            <Text
              style={{ color: COLORS.gray, fontWeight: "bold", marginLeft: 10 }}
            >
              Recommended
            </Text>
            <ScrollView style={{ marginTop: 10 }} horizontal={true}>
              <View style={styles.card}>
                <TouchableHighlight onPress={onPress}>
                  <ImageBackground
                    source={require("../assets/candle.jpg")}
                    resizeMode="cover"
                    imageStyle={{ borderRadius: 15 }}
                    style={styles.image}
                  >
                    <Text
                      style={{
                        color: COLORS.honeydew,
                        marginTop: 10,
                        marginLeft: 10,
                      }}
                    >
                      Candle Holders
                    </Text>
                  </ImageBackground>
                </TouchableHighlight>
              </View>
              <View style={styles.card}>
                <TouchableHighlight onPress={onPress}>
                  <ImageBackground
                    source={require("../assets/plant.jpg")}
                    resizeMode="cover"
                    imageStyle={{ borderRadius: 15 }}
                    style={styles.image}
                  >
                    <Text
                      style={{
                        color: COLORS.honeydew,
                        marginTop: 10,
                        marginLeft: 10,
                      }}
                    >
                      Candle Holders
                    </Text>
                  </ImageBackground>
                </TouchableHighlight>
              </View>
              <View style={styles.card}>
                <TouchableHighlight onPress={onPress}>
                  <ImageBackground
                    source={require("../assets/candle.jpg")}
                    resizeMode="cover"
                    imageStyle={{ borderRadius: 15 }}
                    style={styles.image}
                  >
                    <Text
                      style={{
                        color: COLORS.honeydew,
                        marginTop: 10,
                        marginLeft: 10,
                      }}
                    >
                      Candle Holders
                    </Text>
                  </ImageBackground>
                </TouchableHighlight>
              </View>
            </ScrollView>
          </View>
          <View style={styles.middle}>
            <Text
              style={{ color: COLORS.gray, fontWeight: "bold", marginLeft: 10 }}
            >
              Popular
            </Text>
            <ScrollView style={{ marginTop: 10 }} horizontal={true}>
              <View style={styles.card}>
                <TouchableHighlight onPress={onPress}>
                  <ImageBackground
                    source={require("../assets/candle.jpg")}
                    resizeMode="cover"
                    imageStyle={{ borderRadius: 15 }}
                    style={styles.smallImage}
                  ></ImageBackground>
                </TouchableHighlight>
              </View>
              <View style={styles.card}>
                <TouchableHighlight onPress={onPress}>
                  <ImageBackground
                    source={require("../assets/plant.jpg")}
                    resizeMode="cover"
                    imageStyle={{ borderRadius: 15 }}
                    style={styles.smallImage}
                  ></ImageBackground>
                </TouchableHighlight>
              </View>
              <View style={styles.card}>
                <TouchableHighlight onPress={onPress}>
                  <ImageBackground
                    source={require("../assets/candle.jpg")}
                    resizeMode="cover"
                    imageStyle={{ borderRadius: 15 }}
                    style={styles.smallImage}
                  ></ImageBackground>
                </TouchableHighlight>
              </View>
              <View style={styles.card}>
                <TouchableHighlight onPress={onPress}>
                  <ImageBackground
                    source={require("../assets/plant.jpg")}
                    resizeMode="cover"
                    imageStyle={{ borderRadius: 15 }}
                    style={styles.smallImage}
                  ></ImageBackground>
                </TouchableHighlight>
              </View>
              <View style={styles.card}>
                <TouchableHighlight onPress={onPress}>
                  <ImageBackground
                    source={require("../assets/candle.jpg")}
                    resizeMode="cover"
                    imageStyle={{ borderRadius: 15 }}
                    style={styles.smallImage}
                  ></ImageBackground>
                </TouchableHighlight>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
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

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: COLORS.slategray,
            opacity: 0.9,
            height: 70,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <Feather name="home" size={24} color="#87cefa" />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            headerShown: false,
            tabBarLabel: "Search",
            tabBarIcon: ({ color, size }) => (
              <Feather name="search" size={24} color="#87cefa" />
            ),
          }}
        />
        <Tab.Screen
          name="Heart"
          component={Heart}
          options={{
            headerShown: false,
            tabBarLabel: "Heart",
            tabBarIcon: ({ color, size }) => (
              <Feather name="heart" size={24} color="#87cefa" />
            ),
          }}
        />
        <Tab.Screen
          name="ShoppingCart"
          component={ShoppingCart}
          options={{
            headerShown: false,
            tabBarLabel: "ShoppingCart",
            tabBarIcon: ({ color, size }) => (
              <Feather name="shopping-cart" size={24} color="#87cefa" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    // justifyContent: "flex-start",
    // alignItems: "center",
  },
  scroll: {
    marginTop: 40,
    backgroundColor: COLORS.olive,
    paddingHorizontal: 40,
    paddingVertical: 25,
    borderRadius: 15,
    marginHorizontal: 10,
    marginBottom: 20,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  middle: {
    marginTop: 40,
  },
  card: {
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom: 20,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
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
    backgroundColor: COLORS.lightslategrey,
    opacity: 0.7,
  },
});
