import React, {Component} from 'react';
import {StyleSheet, View, AppRegistry} from 'react-native';
import {FormLabel, FormInput, FormValidationMessage} from 'react-native-elements';
//import CreditCardInput from 'react-credit-card-input';

import NavBar from '../navigation/navBar';

export default class CheckoutScreen extends Component {

    static navigationOptions = {
        title: 'Checkout',
    };

    render() {
        return (
            <View style={styles.container}>
              {/*<CreditCardInput*/}
              {/*  cardNumberInputProps={{ value: cardNumber, onChange: this.handleCardNumberChange }}*/}
              {/*  cardExpiryInputProps={{ value: expiry, onChange: this.handleCardExpiryChange }}*/}
              {/*  cardCVCInputProps={{ value: cvc, onChange: this.handleCardCVCChange }}*/}
              {/*  fieldClassName="input"*/}
              {/*  />*/}
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

AppRegistry.registerComponent('CheckoutScreen', () => CheckoutScreen);
