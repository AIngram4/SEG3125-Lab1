import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, AppRegistry} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import RestaurantButton from './RestaurantButton';
import NavBar from '../navigation/navBar';

export default class RestaurantScreen extends Component {

    goToRestaurant = () => {
        this.props.navigation.navigate('Menu');
    };

    static navigationOptions = {
        title: 'Restaurants',
    };

    render() {
        return (
            <View style={styles.container}>
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
    filler: {
        height: 5,
    },
});

AppRegistry.registerComponent('RestaurantScreen', () => RestaurantScreen);