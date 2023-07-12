import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';


const Header = () => {
  return (
    <View className="" style={{width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
      <Text style={{fontSize:20,fontWeight:"bold"}}>Watchlist</Text>
      <TouchableOpacity>
      <FontAwesome name="pencil" size={24} color="black" />
      </TouchableOpacity>
    </View>
  )
}

export default Header