import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import ScreenGradient from "./ScreenGradient";
import Icons from "@expo/vector-icons/MaterialIcons";
import { useTheme } from "@react-navigation/native";

const list = [
  {
    id: "1",
    icon: "icon 1",
    title: "General",
    shortTitle:
      "Currency conversion , primary currency, language and search engine",
  },
  {
    id: "2",
    icon: "icon 2",
    title: "Security & Privacy",
    shortTitle:
      "Privacy settings , Metatrics, private key and wallet  Secret Recovery Phrase",
  },
  {
    id: "3",
    icon: "icon 1",
    title: "Advanced ",
    shortTitle:
      "Accsess developer features , reset account , set up testnets, state logs, IPFS gateaway and custom RPC",
  },
  {
    id: "4",
    icon: "icon 1",
    title: "Contacts",
    shortTitle: "Add , edit , remove, and manage your accounts",
  },
  {
    id: "5",
    icon: "icon 1",
    title: "Networks",
    shortTitle: "Add edit Custom RPC",
  },
  {
    id: "6",
    icon: "icon 1",
    title: "Buy Crypto",
    shortTitle: "Region & more...",
  },
  {
    id: "1",
    icon: "icon 1",
    title: "Experimental",
    shortTitle: "WalletConnect & more...",
  },
  {
    id: "1",
    icon: "icon 1",
    title: "About MetaMask",
    // shortTitle: "Currency conversion , primary currency, language and search engine",
  },
  {
    id: "1",
    icon: "icon 1",
    title: "Request a feature",
    // shortTitle: "Currency conversion , primary currency, language and search engine",
  },
  {
    id: "1",
    icon: "icon 1",
    title: "Contact support",
    // shortTitle: "Currency conversion , primary currency, language and search engine",
  },
  {
    id: "1",
    icon: "icon 1",
    title: "Lock",
    // shortTitle: "Currency conversion , primary currency, language and search engine",
  },
];

const SettingScreen = () => {
  const [listIndex, setListIndex] = useState(0);
  const { colors } = useTheme();
  return (
    <ScreenGradient>
      <ScrollView>
        <SafeAreaView style={{ paddingVertical: 24, gap: 24 }}>
          <View style={{ paddingHorizontal: 24 }}>
            <Text style={{ color: "white", fontWeight: "700", fontSize: 16 }}>
              Settings
            </Text>
          </View>

          {/* Flatlist */}

          <FlatList
            data={list}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingVertical: 16,
              gap: 12,
            }}
            renderItem={({ item, index }) => {
              const isSelected = listIndex === index;

              return (
                <TouchableOpacity
                  onPress={() => setListIndex(index)}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 20,

                    backgroundColor: isSelected ? "rgba(3, 4, 95, 0.2)" : "",
                    paddingHorizontal: 20,
                    paddingVertical: 12,
                    borderRadius: 12,
                    // borderWidth: isSelected ? 1 : 0,
                    // borderColor: colors.border,
                  }}
                >
                  <View
                    style={{
                      paddingHorizontal: 5,
                      alignItems: "center",
                    }}
                  >
                    <View style={{ width: 300 }}>
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 16,
                          // color: "white",
                          color: isSelected ? "#F61491" : "white",
                          // opacity: 0.5,
                        }}
                      >
                        {item.title}
                      </Text>
                      <Text
                        style={{ fontSize: 16, color: "white",  opacity: isSelected ? 1: 0.5,}}
                      >
                        {item.shortTitle}
                      </Text>
                    </View>
                  </View>

                  <View>
                    <Icons
                      name="chevron-right"
                      size={26}
                      color="white"
                      // style={{ opacity: 0.5 }}
                    />
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </SafeAreaView>
      </ScrollView>
    </ScreenGradient>
  );
};

export default SettingScreen;
