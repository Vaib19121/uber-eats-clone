import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import About from '../components/RestaurantDetails/About'
import { Divider } from 'react-native-elements'
import MenuItem from '../components/RestaurantDetails/MenuItem'

export default function RestaurantDetails() {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <About/>
      <Divider width={1} style={{marginVertical:15}}/>
      <MenuItem/>
    </SafeAreaView>
  )
}