import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../Screens/HomeScreen'
import Icons from "@expo/vector-icons/MaterialIcons"
import { FontAwesome } from '@expo/vector-icons';
export type TabsStackParamList ={
  home : undefined,
  markets:undefined,
  futures:undefined,
  spot:undefined,
  assets:undefined
}
const TabsNavigator = () => {
  const TabsStack = createBottomTabNavigator<TabsStackParamList>()
  return (
    
     
    <TabsStack.Navigator 
    screenOptions={{tabBarShowLabel:false,headerTransparent:true}}
    >
    
      <TabsStack.Screen name ="home" component={HomeScreen}  
       options={{
        headerTransparent: true,
          headerShown: false,
          tabBarIcon(props){
            return <Icons name='home' {...props}/>
          },
         }}/>
      <TabsStack.Screen name ="markets" component={HomeScreen}
        options={{
          headerTransparent: true,
          headerShown: false,
          tabBarIcon(props){
            return <Icons name='bar-chart' {...props}/>
          },
         }}
      />
      <TabsStack.Screen name ="futures" component={Example}
        options={{
          headerTransparent: true,
          headerShown: false,
          tabBarIcon(props){
            return <Icons name='credit-card' {...props}/>
          },
         }}/>
       
      <TabsStack.Screen name ="spot" component={Example}
        options={{
          headerTransparent: true,
          headerShown: false,
          tabBarIcon(props){
            return <Icons name='toll' {...props}/>
          },
         }}/>
           <TabsStack.Screen name ="assets" component={Example}
        options={{
          headerTransparent: true,
          headerShown: false,
          tabBarIcon(props){
            return <Icons name='account-balance-wallet' {...props}/>
          },
         }}/>
    </TabsStack.Navigator>
  )
}

export default TabsNavigator

const Example =() => {
return <View/>;
};