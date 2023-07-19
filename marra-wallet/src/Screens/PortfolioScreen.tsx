import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React, { useState } from "react";
import ScreenGradient from "./ScreenGradient";
import { SafeAreaView } from "react-native-safe-area-context";
import Icons from "@expo/vector-icons/MaterialIcons";
import { useTheme } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

const list = [
  {
    id: "1",
    icon: "icon 1",
    title: "HERE Earn",
    shortTitle: "0.36hNEAR",

    text: "$0.54",
  },
  {
    id: "2",
    icon: "icon 2",
    title: "Holding ",
    shortTitle: "0.25 NEAR",
    text: "$0.38",
  },
];

const AVATAR_URL =
  "https://image.winudf.com/v2/image1/bmV0LndsbHBwci5ib3lzX3Byb2ZpbGVfcGljdHVyZXNfc2NyZWVuXzBfMTY2NzUzNzYxN18wOTk/screen-0.webp?fakeurl=1&type=.webp";

const Portfolio = () => {
  const { colors } = useTheme();
  const [listIndex, setListIndex] = useState(0);

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
          <View style={{ paddingHorizontal: 14, gap: 16, flex: 1 }}>
            <TouchableOpacity
              style={{
                flex: 1,

                height: 150,
                borderRadius: 12,
                borderWidth: 1,
                borderColor: "gray",
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
                    paddingHorizontal: 34,

                    // opacity: 0.5,
                  }}
                >
                  Your Portfolio
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    gap: 10,
                    paddingHorizontal: 24,
                  }}
                >
                  <Icons
                    name="attach-money"
                    size={34}
                    color="white"
                    // style={{ opacity: 0.5 }}
                  />
                  <Text
                    style={{
                      fontSize: 24,
                      color: "white",

                      // opacity: 0.5,
                    }}
                  >
                    0.42
                  </Text>
                  <Icons
                    name="sync"
                    size={34}
                    color="white"
                    // style={{ opacity: 0.5 }}
                  />
                </View>

                <View style={{ paddingHorizontal: 34, height: 30 }}>
                  <TouchableOpacity
                    style={{
                      flex: 1,
                      width: 150,
                      // height: 80,

                      borderRadius: 12,
                      borderWidth: 1,
                      borderColor: colors.border,
                      alignItems: "center",
                      paddingHorizontal: 24,
                      flexDirection: "row",
                      gap: 12,
                      backgroundColor: "#050730",
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 14,
                        color: "#F61491",

                        // opacity: 0.5,
                      }}
                    >
                      -$0.04 (-4.19%)
                    </Text>
                  </TouchableOpacity>
                </View>

                {/*swap buttons  */}
                <View
                  style={{
                    flexDirection: "row",
                    paddingHorizontal: 24,
                    paddingVertical: 14,
                    gap: 10,
                  }}
                >
                  <TouchableOpacity
                    style={{
                      flex: 1,
                      width: 150,
                      // height: 80,

                      borderRadius: 12,
                      borderWidth: 1,
                      // borderColor: colors.border,
                      alignItems: "center",
                      paddingHorizontal: 24,
                      flexDirection: "row",
                      gap: 12,
                      backgroundColor: "rgba(3, 4, 95, 0.2)",
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
                      width: 150,
                      // height: 80,
                      borderRadius: 12,
                      borderWidth: 1,
                      // borderColor: colors.border,

                      alignItems: "center",
                      paddingHorizontal: 24,
                      flexDirection: "row",
                      gap: 12,
                      backgroundColor: "rgba(3, 4, 95, 0.2)",
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

                {/* end of swap buttons */}
              </View>
            </TouchableOpacity>
          </View>

          {/* FLATLIST */}

          <View
            style={{
              gap: 12,
              borderWidth: 1,
              margin: 20,
              borderRadius: 16,
              padding: 10,
              backgroundColor: "rgba(3, 4, 95, 0.2)",
              borderColor: "gray",
            }}
          >
            <Card />
            <FlatList
              data={list}
              // showsHorizontalScrollIndicator={false}
              // contentContainerStyle={{
              //   paddingHorizontal: 16,
              //   gap: 12,}}
              renderItem={({ item, index }) => {
                // const isSelected = listIndex === index;

                return (
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: 10,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        paddingHorizontal: 5,
                        alignItems: "center",
                      }}
                    >
                      <Image
                        style={{ width: 30, height: 30, margin: 7 }}
                        className="rounded-full"
                        source={{
                          uri: "https://t4.ftcdn.net/jpg/02/95/12/57/240_F_295125771_qVOz1TkErXCwaOna0KvquKR32H4ASyf9.jpg",
                        }}
                      />

                      <View style={{ flexDirection: "row" }}>
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 16,
                            color: "white",
                            // opacity: 0.5,
                          }}
                        >
                          {item.title}
                        </Text>
                        <Text
                          style={{ fontSize: 14, color: "white", opacity: 0.5 }}
                        >
                          {item.shortTitle}
                        </Text>
                      </View>
                    </View>

                    <View>
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 16,
                          color: "white",
                          // opacity: 0.5,
                        }}
                      >
                        {item.text}
                      </Text>
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </SafeAreaView>
      </ScrollView>
    </ScreenGradient>
  );
};

export default Portfolio;

const Card = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 5,
          alignItems: "center",
        }}
      >
        <Image
          style={{ width: 40, height: 40, margin: 7 }}
          className="rounded-full"
          source={{
            uri: "https://t4.ftcdn.net/jpg/02/95/12/57/240_F_295125771_qVOz1TkErXCwaOna0KvquKR32H4ASyf9.jpg",
          }}
        />
        <View>
          <Text style={{ fontSize: 16, fontWeight: "700", color: "white" }}>
            {" "}
            Near
          </Text>
          <Text style={{ color: "white", opacity: 0.5, fontSize: 16 }}>
            {" "}
            0.61 . $1.5
          </Text>
        </View>
      </View>

      <View>
        <Text style={{ fontSize: 18, color: "white" }}>$0.92</Text>
        <Text style={{ fontSize: 16, color: "#F61491" }}> -$0.04 .-4.37%</Text>
      </View>
    </View>
  );
};
