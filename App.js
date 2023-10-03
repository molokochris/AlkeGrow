import { StatusBar } from "expo-status-bar";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import homeStyles from "./assets/styles/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";
import Market from "./components/Market";
import Chat from "./components/Chat";
import Profile from "./components/Profile";
import Layout from "./components/Layout";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={homeStyles.container}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="market"
              component={Market}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="chat"
              component={Chat}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="layout"
              component={Layout}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
}
