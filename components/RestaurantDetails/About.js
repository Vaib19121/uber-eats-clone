import { View, Text, Image } from "react-native";
import React from "react";

const image =
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80";

const title = "Farmhouse kitchen";
const description = " Thai . Comfort Food . $$ . 🎟️ . 4 ⭐ (236+)";

export default function About() {
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle title={title} />
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

