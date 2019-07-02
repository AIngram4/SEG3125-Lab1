import React, {Component} from 'react';
import {Text, StyleSheet, View, AppRegistry, ScrollView} from 'react-native';
import {SearchBar} from "react-native-elements";
import {Dropdown} from 'react-native-material-dropdown';

import NavBar from '../navigation/navBar';

export default class HomeScreen extends Component {

    static navigationOptions = {
        title: 'Home',
    };

    render() {
      let data = [{
        value: 'Breakfast',
      }, {
        value: 'Lunch',
      }, {
        value: 'Dinner',
      }, {
        value: 'Other',
      }];
        return (
            <View style={styles.container}>
              <ScrollView style={styles.scrollContainer}>
                <Text style={styles.titleText}>Welcome to Order It!</Text>
                <SearchBar
                containerStyle={{
                  backgroundColor: 'transparent',
                  borderBottomWidth: 0,
                  borderTopWidth: 0,
                }}
                round
                placeholder="Search For Restaurants"/>
                <SearchBar
                round
                containerStyle={{
                  backgroundColor: 'transparent',
                  borderBottomWidth: 0,
                  borderTopWidth: 0,
                }}
                placeholder="Search for City"/>

                <Dropdown
                  label='Select Meal Type'
                  data={data} />
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
    titleText: {
        marginLeft: 20,
        textAlign: 'center',
        color: 'black',
        fontSize: 28,
        marginBottom: 10,
        marginTop: 25,
    },
});

AppRegistry.registerComponent('HomeScreen', () => HomeScreen);
