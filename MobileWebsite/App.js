/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import MenuScreen from './components/menu/MenuScreen';
import RestaurantScreen from './components/restaurant/RestaurantScreen';
import CartScreen from "./components/cart/CartScreen";
import CheckoutScreen from "./components/checkout/CheckoutScreen";
import HomeScreen from "./components/home/HomeScreen";

const RootStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
    },
    Cart: {
        screen: CartScreen,
    },
    Restaurants: {
        screen: RestaurantScreen,
    },
    Menu: {
        screen: MenuScreen,
    },
    Checkout: {
        screen: CheckoutScreen,
    },
});

const App = createAppContainer(RootStack);

export default App;
