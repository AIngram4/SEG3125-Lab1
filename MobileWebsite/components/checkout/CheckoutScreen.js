import React, {Component} from 'react';
import {StyleSheet, View, AppRegistry, Text, ScrollView} from 'react-native';
import t from 'tcomb-form-native';

import NavBar from '../navigation/navBar';

// const Form = t.form.Form;
// const User = t.struct({
//     firstName: 'Aidan',
//     lastName: 'Boase',
// });

export default class CheckoutScreen extends Component {

    static navigationOptions = {
        title: 'Checkout',
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollContainer}>
                    <Text style={styles.paragraph}>
                        nice
                    </Text>
                </ScrollView>
                <NavBar navigation={this.props.navigation}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 50,
        padding: 20,
        backgroundColor: 'white',
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',

    }
});

AppRegistry.registerComponent('CheckoutScreen', () => CheckoutScreen);
