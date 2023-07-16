import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import Icons from "@expo/vector-icons/MaterialIcons";
import { FontAwesome } from "@expo/vector-icons";
export type TabsStackParamList = {
  home: undefined;
  markets: undefined;
  futures: undefined;
  browser: undefined;
  settings: undefined;
};
const TabsNavigator = () => {
  const TabsStack = createBottomTabNavigator<TabsStackParamList>();
  return (
    <View style={{  flex: 1,
      }}>
    <TabsStack.Navigator
  
      screenOptions={{ tabBarShowLabel: false, headerTransparent: true }}
    >
     
      <TabsStack.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerTransparent: true,
          headerShown: false,
          tabBarIcon(props) {
            return <Icons name="account-balance-wallet" {...props} />;
          },
        }}
      />
      <TabsStack.Screen
        name="markets"
        component={HomeScreen}
        options={{
          headerTransparent: true,
          headerShown: false,
          tabBarIcon(props) {
            return <Icons name="bar-chart" {...props} />;
          },
        }}
      />
      {/* <TabsStack.Screen
        name="futures"
        component={Example}
        options={{
          headerTransparent: true,
          headerShown: false,
          tabBarIcon(props) {
            return <Icons name="credit-card" {...props} />;
          },
        }}
      /> */}

      <TabsStack.Screen
        name="browser"
        component={Example}
        options={{
          headerTransparent: true,
          headerShown: false,
          tabBarIcon(props) {
            return <Icons name="swap-vert" {...props} />;
          },
        }}
      />
      <TabsStack.Screen
        name="settings"
        component={Example}
        options={{
          headerTransparent: true,
          headerShown: false,
          tabBarIcon(props) {
            return <Icons name="settings" {...props} />;
          },
        }}
      />
      
    </TabsStack.Navigator>
    </View>
  );
};

export default TabsNavigator;

const Example = () => {
  return <View />;
};


