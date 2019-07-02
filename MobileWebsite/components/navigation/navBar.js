import React, {Component} from 'react';
import {StyleSheet, Text, View, AppRegistry, TouchableOpacity} from 'react-native';

export default class NavBar extends Component {

    static navigationOptions = {
        title: 'Restaurants',
    };

    render() {
        return (
            <View style={styles.navBar}>
                <TouchableOpacity style={styles.homeNavButton} onPress={() => this.props.navigation.navigate('Home')}>
                    <Text style={styles.navBarText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.restaurantNavButton} onPress={() => this.props.navigation.navigate('Restaurants')}>
                    <Text style={styles.navBarText}>Restaurants</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cartNavButton} onPress={() => this.props.navigation.navigate('Cart')}>
                    <Text style={styles.navBarText}>Cart</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    navBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        borderColor: 'black',
        borderTopWidth: 1,
    },
    navBarText: {
        fontSize: 15,
        color: 'white'
    },
    restaurantNavButton: {
        flex: 1,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 15,
        paddingLeft: 15,
        backgroundColor: '#2C2C2C',
        borderColor: 'white',
        borderRightWidth: 0.5,
    },
    homeNavButton: {
        flex: 1,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 15,
        paddingLeft: 15,
        backgroundColor: '#2C2C2C',
        borderColor: 'white',
        borderRightWidth: 0.5,
    },
    cartNavButton: {
        flex: 1,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 15,
        paddingLeft: 15,
        backgroundColor: '#2C2C2C'
    },
    cartText: {
        fontSize: 15,
        color: 'white'
    },
});

AppRegistry.registerComponent('NavBar', () => NavBar);