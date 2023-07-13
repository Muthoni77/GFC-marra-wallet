import { View, Text ,FlatList} from 'react-native'
import {useState} from 'react'

import Boxcoin from './Boxcoin'
import Header from './Header'
import { useTheme } from '@react-navigation/native'

const WatchList = () => {
  const {colors} = useTheme()
  const [coins, setCoins]=useState([
    {
  icon:"icon 1",
  title:"title 1",
  shortTitle:"sm",
  price:"pricw 1",
  status:"status 1",
  id:"id 1"
  },   {
  icon:"icon 2",
  title:"title 2",
  shortTitle:"sm",
  price:"price 2",
  status:"status 2",
  id:"id 2",
    }, 
    {
      icon:"icon 1",
      title:"title 1",
      shortTitle:"sm",
      price:"pricw 1",
      status:"status 1",
      id:"id 1"
      },   {
  icon:"icon 3",
  title:"title 3",
  shortTitle:"sm",
  price:"price 3",
  status:"status 3",
  id:"id 3"
    }
  ])

  return (
    <View style={{gap:12,borderWidth:1,margin:20,borderRadius:16,
    padding:15,  backgroundColor: "#4162D0",
    opacity: 1,}}>
       <Header/>
       <FlatList
        data={coins} 
        keyExtractor={(coin)=>coin.id}
        renderItem={({item})=><Boxcoin  item={item}/>}
        />
       
    </View>
  )
}

export default WatchList