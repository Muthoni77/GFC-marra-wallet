import { View, Text, ScrollView, Image, TouchableOpacity, FlatList } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import Icons from "@expo/vector-icons/MaterialIcons";
import WatchList from "../components/WatchList/WatchList";
import ScreenGradient from "./ScreenGradient";

const Categories = [
  "Favorites",
  "Hot",
  "Gainers",
  "Losers",
  "New Listing",
  "24th Vol",
  "Market Cap",
];

const AVATAR_URL =
  "https://image.winudf.com/v2/image1/bmV0LndsbHBwci5ib3lzX3Byb2ZpbGVfcGljdHVyZXNfc2NyZWVuXzBfMTY2NzUzNzYxN18wOTk/screen-0.webp?fakeurl=1&type=.webp";

const HomeScreen = () => {
  const { colors } = useTheme();
  const [categoryIndex, setCategoryIndex] = useState(0);
  return (
    <ScreenGradient>
      <ScrollView>

      <SafeAreaView style={{ paddingVertical: 24, gap: 24 }}>
        
          <View
            style={{
              paddingHorizontal: 24,
              paddingVertical: 24,
              flexDirection: "row",
              alignItems: "center",
              gap: 120,
              justifyContent:"space-between"
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
                flex: 1,
                paddingHorizontal: 14,
                flexDirection: "row",
                height: 40,
                width:20,
      
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 22,
                borderWidth: 1,
                backgroundColor: "#050730",
                // borderColor:colors.border,
              }}
            >
              <Text style={{ color: "white"}}>Balance $</Text>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                0.00
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ paddingHorizontal: 24, gap: 16, height: 110 }}>
            <TouchableOpacity
              style={{
                flex: 1,
                height: 150,
                borderRadius: 12,
                borderWidth: 1,
                borderColor: colors.border,
                alignItems: "center",
                paddingHorizontal: 24,

                // flexDirection: "row",

                // backgroundColor: "#4162D0",
                opacity: 1,
              }}
            >
              <View style={{ gap: 12 }}>
                <Text
                  style={{
                    top: 10,
                    fontSize: 16,
                    color: "white",
                    left:24,
                    // opacity: 0.5,
                  }}
              
                >
                  Your Portfolio
                </Text>
                <View style={{ flexDirection: "row", gap: 10 }}>
                  <Icons
                    name="attach-money"
                    size={34}
                    color="white"
                    // style={{ opacity: 0.5 }}
                  />
                  <Text
                    style={{
                      // flex: 1,
                      fontSize: 34,
                      color: "white",
                      // opacity: 0.5,
                    }}
                  >
                    450,937
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 16,
                    color: "white",
                    // opacity: 0.5,
                    paddingHorizontal: 24,
                    // bottom: 10,
                  }}
                >
                  Monthly Profit
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            {/* Search Bar Section */}

            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 24,
                gap: 14,
                
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 1,
                  width: 80,
                  height: 80,
                  borderRadius: 12,
                  borderWidth: 1,
                  borderColor: colors.border,
                  alignItems: "center",
                  paddingHorizontal: 24,
                  flexDirection: "row",
                  gap: 12,
                  // backgroundColor: "#4162D0",
                  // opacity: 0.2,
                }}
              >
                <Text
                  style={{
                    flex: 1,
                    fontSize: 18,
                    color: "white",
                    // opacity: 0.5,
                  }}
                >
                  Buy Crypto
                </Text>
                <Icons
                  name="credit-card"
                  size={24}
                  color= "white"
                  // style={{ opacity: 0.5 }}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  flex: 1,
                  width: 80,
                  height: 80,
                  borderRadius: 12,
                  borderWidth: 1,
                  borderColor: colors.border,
                  alignItems: "center",
                  paddingHorizontal: 24,
                  flexDirection: "row",
                  gap: 12,
                  // backgroundColor: "#4162D0",
                  opacity:1
                }}
              >
                <Text
                  style={{
                    flex: 1,
                    fontSize: 18,
                    color: "white",
                  
                  }}
                >
                  Sell Crypto
                </Text>
                <Icons
                  name="attach-money"
                  size={24}
                  color="white"
                  // style={{ opacity: 0.5 }}
                />
              </TouchableOpacity>
            </View>
          </View>
               {/* category section */}
        <FlatList
          data={Categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 16,
            gap: 12,}}
          renderItem={({ item, index }) => {
            const isSelected = categoryIndex === index;
            

            return (
              
              <TouchableOpacity onPress={()=> setCategoryIndex(index)}
                style={{
                  
                  // backgroundColor: isSelected ? "grey" : colors.card,
                  paddingHorizontal: 20,
                  paddingVertical: 12,
                  borderRadius: 100,
                  borderWidth: isSelected ? 1: 0,
                  borderColor: colors.border,
                }}
              >
                <Text
                  style={{ color: isSelected ? "white": "white",
                    fontWeight: "600",
                    fontSize: 14,
                    opacity: isSelected ? 0.5: 1,
                  }}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
        
        {/* list of coins */}
          <WatchList />
        </SafeAreaView>
      </ScrollView>
    </ScreenGradient>
  );
};

export default HomeScreen;
