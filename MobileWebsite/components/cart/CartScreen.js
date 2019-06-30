import React, {Component} from 'react';
import {StyleSheet, View, AppRegistry} from 'react-native';

import NavBar from '../navigation/navBar';

export default class CartScreen extends Component {

    static navigationOptions = {
        title: 'Cart',
    };

    render() {
        return (
            <View style={styles.container}>
                {/*Use a scroll view to make sure the nav bar gets forced to bottom*/}
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

AppRegistry.registerComponent('CartScreen', () => CartScreen);