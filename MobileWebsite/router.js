import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import MenuScreen from './components/menu/MenuScreen';
import RestaurantScreen from './components/restaurant/RestaurantScreen';

const RootStack = createStackNavigator({
    Menu: {
        screen: MenuScreen,
    },
    Restaurants: {
        screen: RestaurantScreen,
    },
});

const App = createAppContainer(RootStack);

export default App;