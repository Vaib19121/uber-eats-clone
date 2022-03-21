import { View, Text, Modal, StyleSheet } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { Pressable } from "react-native";
import OrderItem from "./OrderItem";
import firebase from "../../firebase";

export default function ViewCart() {
  const [modalvisible, setmodalvisible] = useState(false);

  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

  const addOrdertoFirebase = () => {
    const db = firebase.firestore();
    db.collection("orders").add({
      items: items,
      restaurantName: restaurantName,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setmodalvisible(false);
  }

  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  const styles = StyleSheet.create({
    modalcontainer: {
      flex: 1,
      justifyContent: "flex-end",
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalcheckoutcontainer: {
      backgroundColor: "white",
      padding: 16,
      height: 500,
      borderWidth: 1,
    },
    modalcheckoutbutton: {
      textAlign: "center",
      fontWeight: "600",
      fontSize: 18,
      marginBottom: 10,
    },
    subtotalcontainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 20,
    },
    resturantName: {
      textAlign: "center",
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 10,
    },
    subtotalText: {
      textAlign: "center",
      fontWeight: "700",
      fontSize: 20,
      marginBottom: 10,
    },
  });

  const checkoutModelContext = () => {
    return (
      <>
        <View style={styles.modalcontainer}>
          <View style={styles.modalcheckoutcontainer}>
            <Text style={styles.resturantName}>{restaurantName}</Text>
            {items.map((item, index) => (
              <OrderItem key={index} item={item} />
            ))}
            <View style={styles.subtotalcontainer}>
              <Text style={styles.subtotalText}>SubTotal</Text>
              <Text style={{ fontWeight: "700", fontSize: 18 }}>{totalUSD}</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity style={{marginTop:20, backgroundColor: 'black', alignItems: 'center', padding:13, borderRadius: 22, width: 250, position:'relative'}}>
                <Text style={{color: 'white', fontSize: 20}}>Checkout</Text>
                <Text style={{position: 'absolute', right: 20, color: 'white', top: 16, fontSize: 14}}>
                  ${total ? totalUSD : ""}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };
  console.log(total);
  return (
    <>
      <Modal
        animationType="slide"
        visible={modalvisible}
        transparent={true}
        onRequestClose={() => setmodalvisible(false)}
      >
        {checkoutModelContext()}
      </Modal>
      {total ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30,
          }}
        >
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
                onPress={() => addOrdertoFirebase()}
              >
                <Text style={{ color: "white", fontSize: 20, marginRight: 70 }}>
                  View Cart
                </Text>
                <Text style={{ color: "white", fontSize: 18 }}>
                  $ {totalUSD}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}
