import React, {Component} from 'react';
import {StyleSheet, Text, View, AppRegistry, ScrollView, TouchableOpacity, AsyncStorage} from 'react-native';

import NavBar from '../navigation/navBar';
import CartItem from "./CartItem";

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
};

async function getData() {
    var cart = null;
    try {
        let json = await AsyncStorage.getItem('cart');
        if (json != null)
        {
            cart = JSON.parse(json);
        }

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

getData().catch(err => {
    console.log(err);
});

export default class CartScreen extends Component {
    static navigationOptions = {
        title: 'Cart',
    };

    initializeItems = () => {
        if (GLOBAL.globalCart != null)
        {
            globalCart = GLOBAL.globalCart;
        }
        else
        {
            getData();
        }
        var temp = [];
        for (var i = 0; i < 8; i++)
        {
            if (globalCart.items[i] != null)
            {
                if (globalCart.items[i].qty > 0)
                {
                    if (i === 0)
                        temp.push((<CartItem key={i} itemStyle={styles.firstItemContainer} itemNumber={globalCart.items[i].id} itemQty={globalCart.items[i].qty} itemCost={globalCart.items[i].price} onPress={this.removeItem}/>));
                    else
                        temp.push((<CartItem key={i} itemStyle={styles.itemContainer} itemNumber={globalCart.items[i].id} itemQty={globalCart.items[i].qty} itemCost={globalCart.items[i].price} onPress={this.removeItem}/>));
                }
            }
        }
        return temp;
    };

    removeItem = (id) => {
        if (globalCart.items[id-1].qty > 0) {
            globalCart.totalItems--;
            globalCart.items[id-1].qty--;
            globalCart.total -= globalCart.items[id-1].price;
            saveData();
            this.forceUpdate();
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollContainer}>
                    <View style={styles.whiteBack}>
                        { this.initializeItems() }
                        <Text style={styles.totalText}>Total: ${globalCart.total.toFixed(2)}</Text>
                        <TouchableOpacity style={styles.checkoutButton} onPress={() => this.props.navigation.navigate('Checkout', { onGoBack: () => this.forceUpdate()})}>
                            <Text style={styles.checkoutButtonText}>Checkout</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
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