import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import Icons from "@expo/vector-icons/MaterialIcons"
import WatchList from "../components/WatchList/WatchList";

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
        <View style={{  paddingHorizontal: 24, gap: 16 ,}}>
        <TouchableOpacity
            style={{
              flex: 1,
              height:150,
              borderRadius: 12,
              borderWidth: 1,
              borderColor: colors.border,
              alignItems: "center",
              paddingHorizontal: 24,
              // flexDirection: "row",
              gap: 12,
             
            }}
          >
           
            <Text
              style={{
              
                fontSize: 16,
                color: colors.text,
                opacity: 0.5,
                // bottom:30,
                // left:60
                
              }}
              // numberOfLines={1}
            >
              Your Portfolio
            </Text>
            <View style={{ flexDirection: "row",  gap: 10 }}>
           
            <Icons
              name="attach-money"
              size={34}
              color={colors.text}
              style={{ opacity: 0.5 ,}}
            />
             <Text
              style={{
                // flex: 1,
                fontSize: 34,
                color: colors.text,
                opacity: 0.5,
              }}
            >
              450,937
            </Text>
            </View>
            <Text
              style={{
             
              fontSize: 16,
                color: colors.text,
                opacity: 0.5,
                paddingHorizontal:24,
                            
              }}
              
            >
            Monthly Profit
            </Text>
       
          </TouchableOpacity>
        </View>
        <View>
          {/* Search Bar Section */}
          
        <View style={{ flexDirection: "row", paddingHorizontal: 24, gap: 14 ,marginTop:20,}}>
          <TouchableOpacity
            style={{
              flex: 1,
              width:100,
              height:100,
              borderRadius: 12,
              borderWidth: 1,
              borderColor: colors.border,
              alignItems: "center",
              paddingHorizontal: 24,
              flexDirection: "row",
              gap: 12,
            }}
          >
           
            <Text
              style={{
                flex: 1,
                fontSize: 16,
                color: colors.text,
                opacity: 0.5,
              }}
            >
              Buy Crypto
            </Text>
            <Icons
              name="credit-card"
              size={24}
              color={colors.text}
              style={{ opacity: 0.5 }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flex: 1,
              width:100,
              height:100,
              borderRadius: 12,
              borderWidth: 1,
              borderColor: colors.border,
              alignItems: "center",
              paddingHorizontal: 24,
              flexDirection: "row",
              gap: 12,
            }}
          >
           
            <Text
              style={{
                flex: 1,
                fontSize: 16,
                color: colors.text,
                opacity: 0.5,
              }}
            >
              Sell Crypto
            </Text>
            <Icons
              name="attach-money"
              size={24}
              color={colors.text}
              style={{ opacity: 0.5 }}
            />
          </TouchableOpacity> 

        </View>

        </View>
        <WatchList/>
       
        
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;
