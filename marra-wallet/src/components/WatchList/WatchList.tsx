import { View, Text, FlatList } from "react-native";
import { useState } from "react";

import Boxcoin from "./Boxcoin";
import Header from "./Header";
import { useTheme } from "@react-navigation/native";

const WatchList = () => {
  const { colors } = useTheme();
  const [coins, setCoins] = useState([
    {
      id: "1",
      icon: "icon 1",
      title: "BTC",
      shortTitle: "/USDT",
      price: "31195.95",
      price2: "$31195.95",
      status: "+23.89%",
      text: "Vol 289.1M",
    },
    {
      id: "2",
      icon: "icon 2",
      title: "ETH",
      shortTitle: "/USDT",
      price: "1996.82",
      price2: "$1996.82",
      status: "-34.56%",
      text: "Vol 197.1M",
    },
    {
      id: "3",
      icon: "icon 1",
      title: "XRP",
      shortTitle: "/USDT",
      price: "0.77",
      price2: "$0.7",
      status: "+23.2%",
      text: "Vol 120.9M",
    },
    {
      id: "4",
      icon: "icon 3",
      title: "GALA",
      shortTitle: "/USDT",
      price: "0.47",
      price2: "$0.4",
      status: "+16.02%",
      text: "Vol 120.7M",
    },
    {
      id: "4",
      icon: "icon 3",
      title: "LUNA",
      shortTitle: "/USDT",
      price: "0.47",
      price2: "$0.4",
      status: "+16.02%",
      text: "Vol 120.7M",
    },
    {
      id: "4",
      icon: "icon 3",
      title: "SOL",
      shortTitle: "/USDT",
      price: "0.47",
      price2: "$0.4",
      status: "+16.02%",
      text: "Vol 120.7M",
    },
  ]);

  return (
    <View
      style={{
        gap: 12,
        borderWidth: 1,
        margin: 20,
        borderRadius: 16,
        padding: 10,
        backgroundColor:'rgba(3, 4, 95, 0.2)',
        
      }}
    >
      <Header />
      <FlatList
        data={coins}
        keyExtractor={(coin) => coin.id}
        renderItem={({ item }) => <Boxcoin item={item} />}
      />
    </View>
  );
};

export default WatchList;
