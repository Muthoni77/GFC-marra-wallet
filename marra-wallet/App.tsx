import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Pressable} from 'react-native';
import {DefaultTheme, NavigationContainer, Theme} from "@react-navigation/native"

import RootNavigator from './src/Navigators/RootNavigator';
import { useMemo } from 'react';
import { color } from 'react-native-reanimated';
import  {LinearGradient}  from 'expo-linear-gradient';
export default function App() {
 const theme: Theme= useMemo(()=>({...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    // background : "#f5f5f5",
    
    border:"#D9D9D9",
    primary: "#fff",
    text: "#fff",
    
   },
   
   
}
  ),
 []
 );
  return (
    <View style={styles.container}>
       <LinearGradient
        // Background Linear Gradient
        colors={['#301934', 'indigo', 'purple','yellow']}
        // colors={['rgba(0,0,0,0.8)', 'transparent']}
        start={{ x: 0, y: 0.7}}
        style={styles.background}>
     <NavigationContainer theme={theme}>
   
      
     
                <RootNavigator/>
                <StatusBar/>
                {/* <StatusBar style="light"/> */}
               
            </NavigationContainer>
            {/* <Text style={{color:"#fff"}}>Please work</Text> */}
            </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  background: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 200,
    width: 350,
  },
});



