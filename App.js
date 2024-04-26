import { NavigationContainer } from "@react-navigation/native";
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import MainStack from "./src/navigations/MainStack";
import { StatusBar } from "expo-status-bar";
// import Router from "./src/navigations/Router";
// import Welcome from "./src/screens/Welcome";
import SignUp from "./src/screens/auth/SignUp";
// import Login from "./src/screens/auth/Login";

export default function App() {
  return (
    
 
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
    <NavigationContainer>
      <MainStack />
      {/* <Router /> */}
      {/* <Welcome /> */}
      {/* <SignUp /> */}
     
    </NavigationContainer>
    </SafeAreaView>
  );
}
