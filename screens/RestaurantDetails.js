import React from 'react'
import { SafeAreaView } from 'react-native'
import About from '../components/RestaurantDetails/About'
import { Divider } from 'react-native-elements'
import MenuItem from '../components/RestaurantDetails/MenuItem'
import ViewCart from '../components/RestaurantDetails/ViewCart'

export default function RestaurantDetails({route, navigation}) {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <About route={route}/>
      <Divider width={1} style={{marginVertical:15}}/>
      <MenuItem restaurantname={route.params.name} />
      <ViewCart navigation={navigation} restaurantname={route.params.name} />
    </SafeAreaView>
  )
}