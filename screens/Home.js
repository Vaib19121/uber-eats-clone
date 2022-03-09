import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderTabs from "../components/Home/HeaderTabs";
import SearchBar from "../components/Home/SearchBar";
import Categories from "../components/Home/Categories";
import RestaurantItems, {
  localRestaurants,
} from "../components/Home/RestaurantItems";
import { Divider } from "react-native-elements";
import BottomTabs from "../components/Home/BottomTabs";

const YELP_API_KEY =
  "UMGrNyPExbk90V2rd6XQnnV5PyhR0Wz1zKS7dsBvAQqGbdnkoued5JKLKLhMU6EOYGR1wfJj471dsiVsCyMoiV_v7mdWdxt71U2qkNy4JgVpXrM_Z6h6OX48JMr3YXYx";

export default function Home({navigation}) {
  const [restaurantData, setrestaurantData] = useState(localRestaurants);
  const [city, setcity] = useState("new jersey");
  const [ activeTab, setactiveTab ] = useState("Delivery");  
  // const [cityname, setcityname] = useState();
  // fetch('https://foodieone.herokuapp.com/cities')
  // .then(x => x.json())
  // .then(data => {
  //   const city = data.map(user =>{
  //     return user.cityName;
  //   } )
  // });

  const getRestaurantsFromYelp = () => {
    const yelpurl =
      'https://api.yelp.com/v3/businesses/search?location=' + city;
    const apioptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpurl, apioptions)
      .then((response) => response.json())
      .then((json) => {
        setrestaurantData(json.businesses.filter((item) => item.transactions.includes(activeTab.toLowerCase())));
      
      });
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city,activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 10 }}>
        <HeaderTabs activeTab={activeTab} setactiveTab={setactiveTab} />
        <SearchBar cityhandler={setcity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} navigation={navigation} />
      </ScrollView>
      <Divider width={2} />
      <BottomTabs/>
    </SafeAreaView>
  );
}
