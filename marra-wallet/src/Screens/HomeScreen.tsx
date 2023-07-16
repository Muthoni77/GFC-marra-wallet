import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
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
              justifyContent: "space-between",
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
                width: 20,

                alignItems: "center",
                justifyContent: "center",
                borderRadius: 22,
                borderWidth: 1,
                backgroundColor: "#050730",
                // borderColor:colors.border,
              }}
            >
              <Text style={{ color: "white" }}>Balance $</Text>
              <Text style={{ color: "white", fontWeight: "bold" }}>0.00</Text>
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

                backgroundColor: "rgba(3, 4, 95, 0.2)",
              }}
            >
              <View style={{ gap: 12 }}>
                <Text
                  style={{
                    top: 10,
                    fontSize: 16,
                    color: "white",
                    left: 24,
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
            {/* add request */}

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
                  backgroundColor: 'rgba(3, 4, 95, 0.2)',

                }}
              >
                 <Icons
                  name="add"
                  size={24}
                  color="white"
                  // style={{ opacity: 0.5 }}
                />
                <Text
                  style={{
                    flex: 1,
                    fontSize: 18,
                    color: "white",
                    // opacity: 0.5,
                  }}
                >
                  Add Money
                </Text>
               
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
                  backgroundColor: 'rgba(3, 4, 95, 0.2)',

                }}
              >
                  <Icons
                  name="person-add"
                  size={24}
                  color="white"
                  // style={{ opacity: 0.5 }}
                />
                <Text
                  style={{
                    flex: 1,
                    fontSize: 18,
                    color: "white",
                  }}
                >
                  Request
                </Text>
              
              </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity
                style={{
                  flex: 1,
                  // width: 80,
                  height:120,
                  borderRadius: 12,
                  borderWidth: 1,
                  borderColor: colors.border,
                  alignItems: "center",
                  paddingHorizontal: 30,
                  flexDirection: "row",
                  gap: 12,
                  backgroundColor: 'rgba(3, 4, 95, 0.2)',
                  margin:20,

                }}
              >
                    <Icons
                  name="east"
                  size={24}
                  color="white"
                  style={{ paddingHorizontal:24 }}
                />
                <Text
                  style={{
                    flex: 1,
                    fontSize: 18,
                    color: "white",
                  }}
                >
                  Pay & transfer
                </Text>
            
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
              gap: 12,
            }}
            renderItem={({ item, index }) => {
              const isSelected = categoryIndex === index;

              return (
                <TouchableOpacity
                  onPress={() => setCategoryIndex(index)}
                  style={{
                    

                    backgroundColor: isSelected ? 'rgba(3, 4, 95, 0.2)' : "",
                    paddingHorizontal: 20,
                    paddingVertical: 12,
                    borderRadius: 100,
                    borderWidth: isSelected ? 1 : 0,
                    borderColor: colors.border,
                  }}
                >
                  <Text
                    style={{
                      color: isSelected ? "white" : "white",
                      fontWeight: "600",
                      fontSize: 14,
                      opacity: isSelected ? 0.5 : 1,
                    }}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />


{/* notifications card */}
<View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      
        backgroundColor: 'rgba(3, 4, 95, 0.2)',
        margin:20,
        borderColor: colors.border,
 
        
      }}
    >
      <View style={{  alignItems: "center", paddingHorizontal:5 ,flexDirection:"row" }}>
      <Icons
                  name="south"
                  size={24}
                  color="white"
                  style={{ paddingHorizontal:24 }}
                />
     <View style={{}}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              color: 'white',
              // opacity: 0.5,
            }}
          >
            Score
          </Text>
          <Text style={{ fontSize: 14, color: "white", opacity: 0.5 }}>
            03:09pm
          </Text>
          </View>
        
       
      </View>
      {/* last price */}
      <View>
        <Text style={{fontSize:18, color:"white"}}>5 points</Text>
        <Text style={{color:"white"}}>Daily Open</Text>
      </View>

     
      
    </View>
          {/* list of coins */}
          <WatchList />
        
          <TouchableOpacity
              style={{
                
                paddingHorizontal: 14,
                flexDirection: "row",
                height: 40,
                // paddingVertical:"24",
              

                alignItems: "center",
                justifyContent: "center",
                borderRadius: 22,
                borderWidth: 1,
                backgroundColor: "#050730",
                // borderColor:colors.border,
              }}
            >
              <Text style={{ color: "white" }}>Add Favorites</Text>
             
            </TouchableOpacity>
        </SafeAreaView>
      </ScrollView>
    </ScreenGradient>
  );
};

export default HomeScreen;
