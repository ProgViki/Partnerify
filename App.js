import { NavigationContainer } from "@react-navigation/native";
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import MainStack from "./src/navigations/MainStack";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    
 
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
    </SafeAreaView>
  );
}
