import React, {Component} from 'react';
import {StyleSheet, View, AppRegistry, ScrollView} from 'react-native';
import {SearchBar} from "react-native-elements";

import NavBar from '../navigation/navBar';

export default class HomeScreen extends Component {

    static navigationOptions = {
        title: 'Home',
    };

    render() {
        return (
            <View style={styles.container}>
                {/*Use a scroll view to make sure the nav bar gets forced to bottom*/}
                <SearchBar placeholder="Type here..."/>
                <NavBar navigation={this.props.navigation}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

AppRegistry.registerComponent('HomeScreen', () => HomeScreen);