import React, {Component} from 'react';
import {Text, StyleSheet, View, AppRegistry, ScrollView, ImageBackground, TouchableOpacity} from 'react-native';
import {SearchBar} from "react-native-elements";
import {Dropdown} from 'react-native-material-dropdown';

import NavBar from '../navigation/navBar';

export default class HomeScreen extends Component {
    state = {
      search: '',
    };

    state = {
      searchCity: '',
    };

    static navigationOptions = {
        title: 'Home',
    };

    updateSearch = search => {
      this.setState({search});
    };

    updateSearchCity = searchCity => {
      this.setState({searchCity});
    };

    render() {
      const {search} = this.state;
      const {searchCity} = this.state;

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
              <ImageBackground source={require('../../images/home_background.png')} style={{flex: 1, height: 600}}>
                <Text style={styles.titleText}>Order It!</Text>

                <SearchBar
                inputContainerStyle={{backgroundColor: '#2c2c2c'}}
                round
                placeholder="Search For Restaurants"
                placeholderTextColor={'white'}
                onChangeText={this.updateSearch}
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
                onChangeText={this.updateSearchCity}
                value={searchCity}
                containerStyle={{
                  backgroundColor: 'transparent',
                  borderBottomWidth: 0,
                  borderTopWidth: 0,
                  marginTop: 35,
                  marginBottom: 35,
                }} />

                <Dropdown
                  baseColor='white'
                  textColor='white'
                  label='Select Meal Type'
                  data={data} />

                <TouchableOpacity style={styles.checkoutButton}>
                    <Text style={styles.checkoutButtonText}>Confirm</Text>
                </TouchableOpacity>

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
});

AppRegistry.registerComponent('HomeScreen', () => HomeScreen);
