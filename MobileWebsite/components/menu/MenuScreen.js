import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, AppRegistry} from 'react-native';

import MenuItem from './MenuItem';
import NavBar from '../navigation/navBar';

export default class MenuScreen extends Component {

    addMenuItem = (itemNumber, itemPrice) => {
        console.log("Add item " + itemNumber + " at " + itemPrice);
    };

    static navigationOptions = {
        title: 'Menu',
    };

    render() {
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