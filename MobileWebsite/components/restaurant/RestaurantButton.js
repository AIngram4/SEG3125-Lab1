import React, {Component} from 'react';
import {StyleSheet, Text, View, AppRegistry, TouchableOpacity, Image} from 'react-native';

export default class RestaurantButton extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.onPress(this.props.restaurantID)}>
                    <View style={styles.restaurantButton}>
                        <Image source={require('../../images/Placeholder.png')} style={styles.restaurantImage}/>
                        <View style={styles.restaurantColumn}>
                            <Text style={styles.restaurantName}>Restaurant {this.props.restaurantID}</Text>
                            <Text style={styles.restaurantHours}>{this.props.restaurantHours}</Text>
                            <Text style={styles.restaurantAddress}>{this.props.restaurantAddress}</Text>
                        </View>
                        <View style={styles.starColumn}>
                            <Image source={require('../../images/yellow-star.png')} style={styles.starImage}/>
                            <Text style={styles.starText}>{this.props.starRating}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 5,
        height: 140,
        backgroundColor: 'white',
    },
    restaurantImage: {
        width: 100,
        height: 90,
        marginLeft: 10,
    },
    restaurantButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    restaurantColumn: {
        flexDirection: 'column',
        marginLeft: 15,
    },
    restaurantName: {
        fontSize: 18,
        color: 'black',
    },
    restaurantHours:{
        fontSize: 10,
        color: 'rgba(102,102,102,0.48)',
    },
    restaurantAddress: {
        fontSize: 10,
        color: 'rgba(102,102,102,0.48)',
    },
    starImage: {
        width: 25,
        height: 25,
        marginRight: 5,
    },
    starText: {
        fontSize: 15,
        color: 'black',
    },
    starColumn: {
        flexDirection: 'row',
        marginLeft: 'auto',
        marginRight: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },

});

AppRegistry.registerComponent('RestaurantButton', () => RestaurantButton);