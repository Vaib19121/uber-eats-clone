import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

export default function ViewCart() {
  const items = useSelector((state) => state.cartReducer.selectedItems.items);
  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
  console.log(total);
  return (
    <>
      {total ? (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            flexDirection: "row",
            bottom: 50,
            justifyContent: "center",
            zIndex: 999,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              position: "absolute",
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "black",
                borderRadius: 50,
                marginTop: 20,
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
                width: 300,
                padding: 13,
                position: "relative",
              }}
            >
              <Text style={{ color: "white", fontSize: 20, marginRight: 70 }}>
                View Cart
              </Text>
              <Text style={{ color: "white", fontSize: 18 }}>$ {totalUSD}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}
