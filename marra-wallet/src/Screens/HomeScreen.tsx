import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import Icons from "@expo/vector-icons/MaterialIcons"

const AVATAR_URL =
  "https://clipart-library.com/images/ATbrxjpyc.jpg";

const HomeScreen = () => {
  const {colors}= useTheme()
  return (
    <ScrollView>
      <SafeAreaView>
        <View
          style={{
            paddingHorizontal: 24,
            paddingVertical:24,
            flexDirection: "row",
            alignItems: "center",
            gap: 120,
            
            // marginLeft:24,
          }}
        >
          <Image
            source={{ uri: AVATAR_URL }}
            style={{ width: 32, aspectRatio: 1, borderRadius: 32 }}
            resizeMode="cover"
          />
       
          <TouchableOpacity 
          style={{
            width:150,
            height:50,
            // aspectRatio:1,
            alignItems:"center",
            justifyContent:"center",
            borderRadius:22,
            borderWidth:1,
            borderColor:colors.border,

          }}
          >
            <Text>Balance 0.00</Text>
            {/* <Icons name="notifications" size={24} color={colors.text}/> */}
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;
