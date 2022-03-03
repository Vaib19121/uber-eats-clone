import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function SearchBar({ cityhandler }) {
  const [cityname, setcityname] = useState("london");
  return (
    <View style={{ marginTop: 15, flexDirection: "row" }}>
      <View style={styles.main}>
        <Ionicons
          style={styles.searchicon}
          name="ios-location"
          size={22}
          color="black"
        />
        <TextInput
          onChangeText={(text) => {
            setcityname(text);
          }}
          onEndEditing={() => {
            cityhandler(cityname);
          }}
          value={cityname}
          placeholder="Search"
          style={styles.searchinput}
          clearButtonMode="always"
          autoCapitalize="words"
        />
        <TouchableOpacity onPress={() => setcityname('')}>
          <AntDesign
            style={styles.closeicon}
            name="close"
            size={22}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 30,
    padding: 15,
    width: Platform.OS === "ios" ? "90%" : "95%",
    marginHorizontal: 10,
    marginVertical: 5,
  },
  searchicon: {
    marginLeft: 1,
    marginTop: 1,
  },
  closeicon: {
    marginLeft: "auto",
    marginTop: 3,
  },
  searchinput: {
    flex: 1,
    fontSize: 18,
    color: "black",
    marginLeft: 10,
  },
});
