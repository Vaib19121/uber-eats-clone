import React from "react";
import { SafeAreaView } from "react-native";
import About from "../components/RestaurantDetails/About";
import { Divider } from "react-native-elements";
import MenuItem from "../components/RestaurantDetails/MenuItem";
import ViewCart from "../components/RestaurantDetails/ViewCart";

const food = [
  {
    title: "Chicken",
    description:
      "Chicken is a meat dish of the genus Corvus in the family Suidae.",
    price: "10",
    image:
      "https://images.unsplash.com/photo-1606502973842-f64bc2785fe5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
  },
  {
    title: "Pork",
    description:
      "Pork is a meat dish of the genus Corvus in the family Suidae. ",
    price: "70",
    image:
      "https://images.unsplash.com/photo-1597430123721-a0a4fe363a54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    title: "Beef",
    description:
      "Beef is a meat dish of the genus Corvus  in the family Suidae.",
    price: "50",
    image:
      "https://images.unsplash.com/photo-1569229490681-4085b3f54ba3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1158&q=80",
  },
  {
    title: "Fish",
    description:
      "Fish is a meat dish of the genus Corvus in the family Suidae.",
    price: "16",
    image:
      "https://images.unsplash.com/photo-1611657366409-55549160be82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    title: "Vegetables",
    description: "Vegetables are a group of plant and in many other uses. ",
    price: "98",
    image:
      "https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
  },
];

export default function RestaurantDetails({ route, navigation }) {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <About route={route} />
      <Divider width={1} style={{ marginVertical: 15 }} />
      <MenuItem restaurantname={route.params.name} foods={food} />
      <ViewCart navigation={navigation} restaurantname={route.params.name} />
    </SafeAreaView>
  );
}
