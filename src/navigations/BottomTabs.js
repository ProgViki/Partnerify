import React from "react";

import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, AntDesign, Ionicons, Octicons, FontAwesome6 } from "@expo/vector-icons";
import Giving from "../screens/Giving";
import More from "../screens/More";
import Home from "../screens/Home";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 100,
          paddingHorizontal: 20,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
          elevation: 4,
        },
      }}
    >
      <Tab.Screen
        component={Home}
        name="Home"
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <View style={{ alignItems: "center" }}>
                <Octicons name="home" size={20} color="#369FFF" />
                <Text style={{ color: "#369FFF" }}>Home</Text>
              </View>
            ) : (
              <View style={{ alignItems: "center" }}>
                <Octicons name="home" size={20} color="black" />
                <Text style={{ color: "black" }}>Home</Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen component={Giving} name="Giving" 
        options={{
            tabBarIcon: ({ focused }) => {
              return focused ? (
                <View style={{ alignItems: "center" }}>
                 <FontAwesome6 name="donate" size={20} color="#369FFF"  />
                  <Text style={{ color: "#369FFF" }}>Giving</Text>
                </View>
              ) : (
                <View style={{ alignItems: "center" }}>
                 <FontAwesome6 name="donate" size={20} color="black" />
                  <Text style={{ color: "black" }}>Giving</Text>
                </View>
              );
            },
          }}
      />
      <Tab.Screen component={More} name="More" 
          options={{
            tabBarIcon: ({ focused }) => {
              return focused ? (
                <View style={{ alignItems: "center" }}>
                 <AntDesign name="setting" size={20} color="#369FFF" /> 
                  <Text style={{ color: "#369FFF" }}>More</Text>
                </View>
              ) : (
                <View style={{ alignItems: "center" }}>
                 <AntDesign name="setting" size={20} color="black" /> 
                  <Text style={{ color: "black" }}>More</Text>
                </View>
              );
            },
          }}/>
    </Tab.Navigator>
  );
};

export default BottomTabs;