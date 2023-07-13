import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";

const Boxcoin = ({ item }: any) => {
  const { colors } = useTheme();
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", }}>
        <Image
          style={{ width: 50, height: 50 ,margin:7}}
          className="rounded-full"
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAJKRMcOGqbrJ2-tI5pcTURsTKl2VuIHkTxg&usqp=CAU",
          }}
        />
        <View style={{ marginLeft: 10 }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              color: colors.primary,
              opacity: 0.5,
            }}
          >
            {item.title}
          </Text>
          <Text style={{ fontSize: 14, color: colors.text, opacity: 0.5 }}>
            {item.shortTitle}
          </Text>
        </View>
      </View>

      <View style={{ marginLeft: 10 }}>
        <TouchableOpacity
          style={{
            flex:1,
            width:70,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: colors.border,
            alignItems: "center",
            paddingVertical:7,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              color: colors.primary,
              opacity: 0.5,
            }}
          >
            {item.status}
          </Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 14, color: colors.text, opacity: 0.5 }}>
          {item.id}
        </Text>
      </View>
    </View>
  );
};

export default Boxcoin;
