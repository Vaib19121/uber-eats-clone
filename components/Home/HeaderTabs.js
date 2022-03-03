import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function HeaderTabs(props) {
  
  return (
    <View style={styles.container}>
      <HeaderButton text='Delivery' btnColor="black" textColor="white" activeTab={props.activeTab} setactiveTab={props.setactiveTab} />
      <HeaderButton text='Pickup' btnColor="white" textColor="black" activeTab={props.activeTab} setactiveTab={props.setactiveTab}/>
    </View>
  );
}

const HeaderButton = (props) => (
  <View>
    <TouchableOpacity style={{
        backgroundColor: props.activeTab === props.text ? 'black' : 'white',
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
    }} onPress={() => props.setactiveTab(props.text)}>
      <Text style={{color: props.activeTab === props.text ? 'white' : 'black', fontSize: 16, fontWeight:'700' }}>{props.text}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    alignSelf: 'center',
    justifyContent: "center",
    flexDirection: "row",
  },
});
