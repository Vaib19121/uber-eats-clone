import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import Home from "./screens/Home";
import RestaurantDetails from "./screens/RestaurantDetails";
import OrderCompleted from "./screens/OrderCompleted";
import configurestore from "./Redux/store";

const store = configurestore();

export default function RootNavigation() {
  const stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
          <stack.Screen name="Home" component={Home} />
          <stack.Screen
            name="RestaurantDetails"
            component={RestaurantDetails}
          />
          <stack.Screen
            name="OrderCompleted"
            component={OrderCompleted}
          />
        </stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
