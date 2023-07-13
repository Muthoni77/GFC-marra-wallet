import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import {
  DefaultTheme,
  NavigationContainer,
  Theme,
} from "@react-navigation/native";

import RootNavigator from "./src/Navigators/RootNavigator";
import { useMemo } from "react";
import { color } from "react-native-reanimated";

export default function App() {
  const theme: Theme = useMemo(
    () => ({
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        background: "#f5f5f5",
        primary: "#fff",
        text: "#fbfcfa",
        border: "#D9D9D9",
        
      },
    }),
    []
  );
  return (
    <View style={styles.container}>
      <NavigationContainer theme={theme}>
        <RootNavigator />
        <StatusBar />
        <StatusBar style="dark" />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  // background: {
  //   flex:1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   borderRadius: 5,
  //   height: 200,
  //   width: 350,
  // },
});
