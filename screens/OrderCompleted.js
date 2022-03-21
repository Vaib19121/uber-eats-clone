import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";
import MenuItem from "../components/RestaurantDetails/MenuItem";
import firebase from "../firebase";

export default function OrderCompleted() {
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: "Vegetables",
        description: "Vegetables are a group of plant and in many other uses. ",
        price: "98",
        image:
          "https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
      },
    ],
  });

  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db
      .collection("orders")
      .orderBy("createdAt", "desc")
      .limit(1)
      .onSnapshot((snapshot) => {
        const lastOrder = snapshot.docs.map((doc) => doc.data())[0];
        setLastOrder(lastOrder);
      });
    return () => unsubscribe();
  }, []);

  return (
    <View style={{ paddingTop: 20, flex: 1 }}>
      <View style={{ margin: 10, alignItems: "center", height: "100%" }}>
        <LottieView
          style={{ height: 100, alignSelf: "center", marginBottom: 20 }}
          source={require("../assets/animations/check-animation.json")}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>
          Your Order at {restaurantName} has been placed for ${totalUSD}{" "}
          Successfully.
        </Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <MenuItem foods={lastOrder.items} hideCheckbox={true} />
          <LottieView
            style={{ height: 200, alignSelf: "center" }}
            source={require("../assets/animations/cooking.json")}
            autoPlay
            speed={0.5}
          />
        </ScrollView>
      </View>
    </View>
  );
}
