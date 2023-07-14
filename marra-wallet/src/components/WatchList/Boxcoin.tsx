import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';

const Boxcoin = ({ item }: any) => {
  const { colors } = useTheme();
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom:20,
 
        
      }}
    >
      <View style={{  alignItems: "center", paddingHorizontal:5  }}>
        {/* <Image
          style={{ width: 50, height: 50 ,margin:7}}
          className="rounded-full"
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAJKRMcOGqbrJ2-tI5pcTURsTKl2VuIHkTxg&usqp=CAU",
          }}
        /> */}
     <View style={{flexDirection: "row"}}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              color: 'white',
              // opacity: 0.5,
            }}
          >
            {item.title}
          </Text>
          <Text style={{ fontSize: 14, color: "white", opacity: 0.5 }}>
            {item.shortTitle}
          </Text>
          </View>
        
        <View style={{flexDirection:"row"}}>
        <FontAwesome name="star" size={16} color="white" />
        <Text> {item.text}</Text>
        </View>
      </View>
      {/* last price */}
      <View>
        <Text style={{fontSize:18, color:"white"}}>{item.price}</Text>
        <Text style={{}}>{item.price2}</Text>
      </View>

      <View style={{ marginLeft: 10 }}>
        <TouchableOpacity
          style={{
            flex:1,
            width:70,
            borderRadius: 12,
            borderWidth: 1,
            // borderColor: colors.border,
            alignItems: "center",
            paddingVertical:7,
            backgroundColor:"#050730"
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 14,
              color: "white",
              // opacity: 0.5,
            }}
          >
            {item.status}
          </Text>
        </TouchableOpacity>
 
      </View>
    </View>
  );
};

export default Boxcoin;
