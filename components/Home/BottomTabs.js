import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function () {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        marginHorizontal: 18,
        margin: 10,
      }}
    >
      <Icon icon="home" text="Home" />
      <Icon icon="search" text="Search" />
      <Icon icon="shopping-bag" text="Grocery" />
      <Icon icon="receipt" text="Orders" />
      <Icon icon="user" text="Accounts" />
    </View>
  );
}

const Icon = (props) => {
  return (
    <TouchableOpacity>
      <View>
        <FontAwesome5
          name={props.icon}
          size={20}
          style={{ marginBottom: 2, alignSelf: "center" }}
        />
        <Text>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};
