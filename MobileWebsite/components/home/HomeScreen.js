import React, {Component} from 'react';
import {Text, StyleSheet, View, AppRegistry, ScrollView, ImageBackground, TouchableOpacity, Picker} from 'react-native';
import {SearchBar} from "react-native-elements";
import {Dropdown} from 'react-native-material-dropdown';

import NavBar from '../navigation/navBar';

export default class HomeScreen extends Component {

    state = {
        searchCity: '',
        search: '',
        selection: 'sbm',
    };

    static navigationOptions = {
        title: 'Home',
    };

    restaurantSearch = () => {
        if (this.state.search !== '')
            this.setState({search:''});
            this.props.navigation.navigate('Restaurants');
    };

    citySearch = () => {
        if (this.state.searchCity !== '')
            this.setState({searchCity:''});
            this.props.navigation.navigate('Restaurants');
    };

    selectedMeal = () => {
        this.props.navigation.navigate('Restaurants');

    };

    render() {
      const {search,searchCity} = this.state;

        return (
            <View style={styles.container}>
              <ScrollView style={styles.scrollContainer}>
              <ImageBackground source={require('../../images/home_background.png')} style={{flex: 1, height: 600}}>
                <Text style={styles.titleText}>Order It!</Text>

                <SearchBar
                inputContainerStyle={{backgroundColor: '#2c2c2c'}}
                round
                placeholder="Search For Restaurants"
                placeholderTextColor={'white'}
                value={search}
                containerStyle={{
                  backgroundColor: 'transparent',
                  borderBottomWidth: 0,
                  borderTopWidth: 0,
                  marginTop: 35
                }} />

                <SearchBar
                inputContainerStyle={{backgroundColor: '#2c2c2c'}}
                round
                placeholder="Search for City"
                placeholderTextColor={'white'}
                value={searchCity}
                containerStyle={{
                  backgroundColor: 'transparent',
                  borderBottomWidth: 0,
                  borderTopWidth: 0,
                  marginTop: 35,
                  marginBottom: 35,
                }} />

                  <Picker style={styles.picker}
                          selectedValue='sbm'
                          onValueChange={(itemValue, itemIndex) => this.selectedMeal()}>
                      <Picker.Item label="Search by meal!" value="sbm" />
                      <Picker.Item label="Breakfast" value="br" />
                      <Picker.Item label="Lunch" value="lu" />
                      <Picker.Item label="Dinner" value="di" />
                  </Picker>

                </ImageBackground>
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
    titleText: {
        marginLeft: 20,
        textAlign: 'center',
        color: 'white',
        fontSize: 35,
        marginBottom: 10,
        marginTop: 40,
    },
    checkoutButtonText: {
        fontSize: 20,
        color: 'white',
    },
    checkoutButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 60,
        backgroundColor: '#2c2c2c',
    },
    picker: {
        height: 50,
        borderRadius: 5,
        backgroundColor: '#2c2c2c',
        color: 'white',
        borderWidth: 1,
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 10,
    },
});

AppRegistry.registerComponent('HomeScreen', () => HomeScreen);
