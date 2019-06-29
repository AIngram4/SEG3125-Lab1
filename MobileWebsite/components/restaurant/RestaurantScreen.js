import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, AppRegistry} from 'react-native';

import RestaurantButton from './RestaurantButton';

export default class RestaurantScreen extends Component {

    goToRestaurant = (restaurantID) => {
        console.log("Navigating to restaurant " + restaurantID);
        this.props.navigation.navigate('Menu');
    };

    static navigationOptions = {
        title: 'Restaurants',
    };

    render() {
        return (
            <ScrollView style={styles.scrollContainer}>
                <RestaurantButton restaurantID={1} restaurantHours='9am - 10pm' restaurantAddress='937 Albert St' starRating={4.7} onPress={this.goToRestaurant}/>
                <RestaurantButton restaurantID={2} restaurantHours='9am - 10pm' restaurantAddress='937 Albert St' starRating={4.7} onPress={this.goToRestaurant}/>
                <RestaurantButton restaurantID={3} restaurantHours='9am - 10pm' restaurantAddress='937 Albert St' starRating={4.7} onPress={this.goToRestaurant}/>
                <RestaurantButton restaurantID={4} restaurantHours='9am - 10pm' restaurantAddress='937 Albert St' starRating={4.7} onPress={this.goToRestaurant}/>
                <RestaurantButton restaurantID={5} restaurantHours='9am - 10pm' restaurantAddress='937 Albert St' starRating={4.7} onPress={this.goToRestaurant}/>
                <RestaurantButton restaurantID={6} restaurantHours='9am - 10pm' restaurantAddress='937 Albert St' starRating={4.7} onPress={this.goToRestaurant}/>
                <RestaurantButton restaurantID={7} restaurantHours='9am - 10pm' restaurantAddress='937 Albert St' starRating={4.7} onPress={this.goToRestaurant}/>
                <View style={styles.filler}/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F2F4F5',
    },
    restaurantTitle: {
        textAlign: 'center',
        color: 'black',
        fontSize: 35,
        marginTop: 15,
        marginBottom: 10,
    },
    filler: {
        height: 40,
    },
});

AppRegistry.registerComponent('RestaurantScreen', () => RestaurantScreen);