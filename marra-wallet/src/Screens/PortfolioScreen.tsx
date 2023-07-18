import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import ScreenGradient from './ScreenGradient'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icons from "@expo/vector-icons/MaterialIcons";
import { useTheme } from '@react-navigation/native';



const Portfolio = () => {
  const colors =  useTheme();
 
  return (
    <ScreenGradient>
      <ScrollView>
      <SafeAreaView style={{ paddingVertical: 24, gap: 24 }}>

      <View style={{   gap: 16,top:12}}>
        
            <TouchableOpacity
              style={{
                // flex: 1,
                // height: 150,
                borderRadius: 12,
                borderWidth: 1,
                
                borderColor : "gray",
                // alignItems: "center",
                paddingHorizontal: 24,
                // right : 20,

                backgroundColor: "rgba(3, 4, 95, 0.2)",
              }}
            >
              <View style={{ gap: 12 }}>
                <Text
                  style={{
                    top: 10,
                    fontSize: 16,
                    color: "white",
                    
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

      <View style={{ marginLeft: 10 }}>
        <TouchableOpacity
          style={{
            
            width: 150,
            borderRadius: 12,
            borderWidth: 1,
            // borderColor: colors.border,
            // alignItems: "center",
            paddingHorizontal:14,
            paddingVertical:14,
            backgroundColor:"#050730"
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
              
               {/* end of swap buttons */}
              </View>
            </TouchableOpacity>
          </View>
          

        </SafeAreaView>
      </ScrollView>
    </ScreenGradient>
   
  )
}

export default Portfolio