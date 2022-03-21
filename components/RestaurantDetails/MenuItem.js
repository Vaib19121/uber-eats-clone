import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Platform,
} from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";



export default function MenuItem({
  restaurantname,
  foods,
  hideCheckbox,
  marginLeft,
}) {
  const dispatch = useDispatch();
  const selctitem = (item, checkboxValue, title) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurantName: restaurantname,
        checkboxValue: checkboxValue,
        title: title,
      },
    });

  const cartitems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );
  const isFoodinCart = (food, cartitems) =>
    Boolean(cartitems.find((item) => item.title === food.title));
  return (
    <ScrollView style={styles.menu} showsVerticalScrollIndicator={false}>
      {foods.map((item, index) => (
        <View key={index}>
          <View style={styles.menuitemstyles}>
            {hideCheckbox ? (
              <></>
            ) : (
              <BouncyCheckbox
                isChecked={isFoodinCart(item, cartitems)}
                onPress={(checkboxValue) =>
                  selctitem(item, checkboxValue, item.title)
                }
                iconStyle={{ borderColor: "lightgrey", borderRadius: 5 }}
                size={20}
                fillColor="green"
              />
            )}
            <FoodInfo food={item} />
            <FoodImage image={item} marginLeft={marginLeft ? marginLeft : 0}/>
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const FoodInfo = (props) => {
  return (
    <View style={{ width: 200, justifyContent: "space-evenly" }}>
      <Text style={styles.titlestyle}>{props.food.title}</Text>
      <Text style={{ fontSize: 15 }}>{props.food.description}</Text>
      <Text style={{ fontSize: 15 }}>💲{props.food.price}</Text>
    </View>
  );
};

const FoodImage = ({marginLeft, ...props}) => {
  return (
    <View>
      <Image
        source={{ uri: props.image.image }}
        style={{ width: 100, height: 100, borderRadius: 8, marginLeft: marginLeft }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  menuitemstyles: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 8,
    padding: 8,
  },
  titlestyle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
