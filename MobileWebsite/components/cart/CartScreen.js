import React, {Component} from 'react';
import {StyleSheet, Text, View, AppRegistry, ScrollView, TouchableOpacity, Image} from 'react-native';

import NavBar from '../navigation/navBar';
import CartItem from "./CartItem";

export default class CartScreen extends Component {

    cart = {
        items: [],
        total: 0,
        totalItems: 0
    };

    foodItem = function(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.qty = 0;
    };

    static navigationOptions = {
        title: 'Cart',
    };

    initializeItems = () => {
        this.cart.items.push(new this.foodItem(0, "Pizza", 4.99));
        this.cart.items.push(new this.foodItem(1, "Hamburger", 2.99));
        this.cart.items.push(new this.foodItem(2, "Hot dog", 1.99));

        this.addItem(0);
        this.addItem(0);
        this.addItem(0);
        this.addItem(1);

        var temp = [];
        for (var i = 0; i < 3; i++)
        {
            if (this.cart.items[i].qty > 0)
            {
                if (i === 0)
                    temp.push((<CartItem key={i} itemStyle={styles.firstItemContainer} itemNumber={this.cart.items[i].id} itemQty={this.cart.items[i].qty} itemCost={this.cart.items[i].price}/>));
                else
                    temp.push((<CartItem key={i} itemStyle={styles.itemContainer} itemNumber={this.cart.items[i].id} itemQty={this.cart.items[i].qty} itemCost={this.cart.items[i].price}/>));
            }
        }
        return temp;
    };

    removeItem = (id) => {
        if (this.cart.items[id].qty > 0) {
            this.cart.totalItems--;
            this.cart.items[id].qty--;
            this.cart.total -= this.cart.items[id].price;
        }
    };

    addItem = (id) => {
        this.cart.totalItems++;
        this.cart.items[id].qty++;
        this.cart.total += this.cart.items[id].price;
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollContainer}>
                    <View style={styles.whiteBack}>
                        { this.initializeItems() }
                        <Text style={styles.totalText}>Total: ${this.total}</Text>
                        <TouchableOpacity style={styles.checkoutButton}>
                            <Text style={styles.checkoutButtonText}>Checkout</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <NavBar navigation={this.props.navigation}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F2F4F5',
    },
    checkoutButtonText: {
        fontSize: 15,
        color: 'white',
    },
    checkoutButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 35,
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 20,
        backgroundColor: '#2c2c2c',
    },
    scrollContainer: {
        flex: 1,
        flexDirection: 'column',
        width: '90%',
        marginTop: 10,
    },
    totalText: {
        marginLeft: 20,
        color: 'black',
        fontSize: 18,
        marginBottom: 10,
        marginTop: 25,
    },
    firstItemContainer: {
        flex: 1,
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        borderColor: 'black',
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        marginRight: 20,
        marginLeft: 20,
        marginTop: 20,
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        borderColor: 'black',
        borderBottomWidth: 0.5,
        marginRight: 20,
        marginLeft: 20,
    },
    whiteBack: {
        backgroundColor: 'white',
    },
});

AppRegistry.registerComponent('CartScreen', () => CartScreen);