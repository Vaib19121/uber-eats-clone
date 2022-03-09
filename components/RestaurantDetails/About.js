import { View, Text, Image } from "react-native";
import React from "react";

const restaurantinfo = {
  name : "Farmhouse Kitchen Thai Cuisine",
  image: "https://images.unsplash.com/photo-1569229490681-4085b3f54ba3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1158&q=80",
  price: "$$",
  reviews: "1500",
  ratings: 4.4,
  categories: [{title: "Thai"}, {title: "Vegetarian"}, {title: "Vegan"},],

}


export default function About(props) {
  const {name, image, price, reviews, ratings, categories} = props.route.params;
  
  const FormatedCategories = categories.map((category) => category.title).join(" . ");
  
  const description = `${FormatedCategories} ${
    price ? " • " + price : ""
  } • 🎫 • ${ratings} ⭐ (${reviews}+)`;
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle title={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = (props) => {
  return (
    <Image
      source={{ uri: props.image }}
      style={{ width: "100%", height: 200 }}
    />
  );
};

const RestaurantTitle = (props) => {
    return (
        <Text style={{ fontSize: 20, fontWeight: "bold",marginTop:10, marginHorizontal:15 }}>{props.title}</Text>
    );
};

const RestaurantDescription = (props) => {
    return (
        <Text style={{ fontSize: 15, color: "grey", marginTop:10,marginHorizontal:15,fontWeight:"400" }}>{props.description}</Text>
    );
};

