import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../colors/colors";

const Tab = createBottomTabNavigator();

function AddtoCart() {
  const [defaultRating, setDefaultRating] = useState(2);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  const starImageFilled =
    "https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png";
  const starImageCorner =
    "https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png";

  const CustomRatingBar = () => {
    return (
      <View style={styles.customRatingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setDefaultRating(item)}
            >
              <Image
                style={styles.starImageStyle}
                source={
                  item <= defaultRating
                    ? { uri: starImageFilled }
                    : { uri: starImageCorner }
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <View
            style={{
              shadowColor: COLORS.black,
              shadowOffset: {
                width: 0,
                height: 12,
              },
              shadowOpacity: 0.58,
              shadowRadius: 16.0,
              elevation: 24,
            }}
          >
            <Image
              style={{ height: 200, width: "100%", borderRadius: 20 }}
              source={require("../assets/plant.jpg")}
            ></Image>
          </View>
          <View style={{ marginTop: 30 }}>
            <Text style={{ fontSize: 45, fontWeight: "bold" }}>
              Le Decor Veases set of 5
            </Text>
            <Text style={{ color: COLORS.gray, fontSize: 20 }}>by LeDecor</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 15,
            }}
          >
            <Text
              style={{
                color: COLORS.limegreen,
                fontSize: 30,
                fontWeight: "bold",
              }}
            >
              $ 24.99
            </Text>
            <View style={styles.childView}>
              <CustomRatingBar />
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={{ color: COLORS.darkgray, fontSize: 25 }}>
              Ideal for
            </Text>
            <ScrollView horizontal={true}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={[COLORS.darkgreen, COLORS.limegreen]}
                style={styles.scroll}
              >
                <Text
                  style={{
                    color: COLORS.white,
                    fontSize: 20,
                    fontWeight: "600",
                  }}
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
                  style={{
                    color: COLORS.white,
                    fontSize: 20,
                    fontWeight: "600",
                  }}
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
                  style={{
                    color: COLORS.white,
                    fontSize: 20,
                    fontWeight: "600",
                  }}
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
                  style={{
                    color: COLORS.white,
                    fontSize: 20,
                    fontWeight: "600",
                  }}
                >
                  Hall
                </Text>
              </LinearGradient>
            </ScrollView>
          </View>
          <Text
            style={{ marginVertical: 15, color: COLORS.darkgray, fontSize: 15 }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged
          </Text>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: COLORS.slategray,
            padding: 10,
          }}
        >
          <Feather name="shopping-cart" size={24} color={COLORS.lightskyblue} />
          <Text style={{ fontSize: 20, marginLeft: 10 }}>Add to Cart</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default function Details() {
  return (
    // <NavigationContainer>
    //   <Tab.Navigator
    //     screenOptions={{
    //       tabBarStyle: { backgroundColor: "#708090", opacity: 1 },
    //     }}
    //   >
    //     <Tab.Screen
    //       name="Add To Cart"
    //       component={AddtoCart}
    //       options={{
    //         headerShown: false,
    //         tabBarLabel: "Add To Cart",
    //         tabBarIcon: ({ color, size }) => (
    //           <Feather name="shopping-cart" size={24} color={"#87cefa"} />
    //         ),
    //       }}
    //     />
    //   </Tab.Navigator>
    // </NavigationContainer>
    <AddtoCart />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    // flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  childView: {
    flexDirection: "row",
  },
  starImageStyle: {
    width: 20,
    height: 20,
    resizeMode: "cover",
  },
  customRatingBarStyle: {
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 10,
  },
  scroll: {
    marginTop: 10,
    backgroundColor: COLORS.olive,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    marginHorizontal: 10,
  },
});
