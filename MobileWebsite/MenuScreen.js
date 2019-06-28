import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, AppRegistry} from 'react-native';

import MenuItem from './MenuItem';

export default class MenuScreen extends Component {

    addMenuItem = (itemNumber, itemPrice) => {
        console.log("Add item " + itemNumber + " at " + itemPrice);
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.menuTitle}>Menu</Text>
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
        );
    }
}

const styles = StyleSheet.create({
    container: {
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
        height: 80,
    },
});

AppRegistry.registerComponent('MenuScreen', () => MenuScreen);