import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, AppRegistry, AsyncStorage} from 'react-native';

import MenuItem from './MenuItem';
import NavBar from '../navigation/navBar';
import CartScreen from "../cart/CartScreen";

var globalCart = {
    items: [],
    total: 0,
    totalItems: 0
};

var foodItem = function(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.qty = 0;
};

var saveData = function() {
    AsyncStorage.setItem('cart', JSON.stringify(globalCart));
    GLOBAL.globalCart = globalCart;
};

async function getData() {
    var cart = null;
    try {
        let json = await AsyncStorage.getItem('cart');
        if (json != null)
            cart = JSON.parse(json);

    } catch(e) {

    }
    return cart;
}

getData().then(value => {
    if (value != null)
    {
        globalCart.items = value.items;
        globalCart.total = value.total;
        globalCart.totalItems = value.totalItems;

        GLOBAL.globalCart = globalCart;
    }
});

export default class MenuScreen extends Component {

    addMenuItem = (itemNumber, itemPrice) => {
        if (globalCart.items[itemNumber-1] == null)
            globalCart.items[itemNumber-1] = new foodItem(itemNumber, "Menu Item " + itemNumber, itemPrice);

        globalCart.items[itemNumber-1].qty++;
        globalCart.total+=itemPrice;
        globalCart.totalItems++;
        saveData();
    };

    static navigationOptions = {
        title: 'Menu',
    };

    render() {
        getData();
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollContainer}>
                    <MenuItem itemNumber={1} itemPrice={4.99} onPress={this.addMenuItem}/>
                    <MenuItem itemNumber={2} itemPrice={4.99} onPress={this.addMenuItem}/>
                    <MenuItem itemNumber={3} itemPrice={4.99} onPress={this.addMenuItem}/>
                    <MenuItem itemNumber={4} itemPrice={4.99} onPress={this.addMenuItem}/>
                    <MenuItem itemNumber={5} itemPrice={4.99} onPress={this.addMenuItem}/>
                    <MenuItem itemNumber={6} itemPrice={4.99} onPress={this.addMenuItem}/>
                    <MenuItem itemNumber={7} itemPrice={4.99} onPress={this.addMenuItem}/>
                    <MenuItem itemNumber={8} itemPrice={4.99} onPress={this.addMenuItem}/>
                    <View style={styles.filler}/>
                </ScrollView>
                <NavBar navigation={this.props.navigation}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F2F4F5',
    },
    menuTitle: {
        textAlign: 'center',
        color: 'black',
        fontSize: 35,
        marginTop: 15,
    },
    filler: {
        height: 20,
    },
});

AppRegistry.registerComponent('MenuScreen', () => MenuScreen);