import React, {Component} from 'react';
import {StyleSheet, View, AppRegistry, Text, ScrollView, TextInput, Picker, TouchableOpacity} from 'react-native';
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

    state = {
        paymentMethod: 'de',
        day: '01',
        year: '19',
    };

    creditCart = () => {
        if(this.state.paymentMethod === 'cr')
        {
            return(<View>
                <Text style={styles.text}>
                    Full Name
                </Text>
                <TextInput style={styles.textInput1}/>
                <Text style={styles.text}>
                    Card Number
                </Text>
                <TextInput style={styles.textInput1}/>
                <Text style={styles.text}>
                    CVV
                </Text>
                <TextInput style={styles.textInput1}/>
                <Text style={styles.text}>
                    Exp day
                </Text>
                <Picker style={styles.picker}
                        selectedValue={this.state.day}
                        onValueChange={(itemValue, itemIndex) => this.setState({day: itemValue})}>
                    <Picker.Item label="01" value="01" />
                    <Picker.Item label="02" value="02" />
                    <Picker.Item label="03" value="03" />
                    <Picker.Item label="04" value="04" />
                    <Picker.Item label="05" value="05" />
                    <Picker.Item label="06" value="06" />
                    <Picker.Item label="07" value="07" />
                    <Picker.Item label="08" value="08" />
                    <Picker.Item label="09" value="09" />
                    <Picker.Item label="10" value="10" />
                    <Picker.Item label="11" value="11" />
                    <Picker.Item label="12" value="12" />
                </Picker>
                <Text style={styles.text}>
                    Exp year
                </Text>
                <Picker style={styles.picker}
                        selectedValue={this.state.year}
                        onValueChange={(itemValue, itemIndex) => this.setState({year: itemValue})}>
                    <Picker.Item label="2019" value="2019" />
                    <Picker.Item label="2020" value="2020" />
                    <Picker.Item label="2021" value="2021" />
                    <Picker.Item label="2022" value="2022" />
                    <Picker.Item label="2023" value="2023" />
                    <Picker.Item label="2024" value="2024" />
                </Picker>
            </View>)
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollContainer}>
                    <View style={styles.whiteBack}>
                        <View style={styles.filler}/>
                        <Text style={styles.text}>
                            First Name
                        </Text>
                        <TextInput style={styles.textInput1}/>
                        <Text style={styles.text}>
                            Last Name
                        </Text>
                        <TextInput style={styles.textInput1}/>
                        <Text style={styles.text}>
                            Address
                        </Text>
                        <TextInput style={styles.textInput1}/>
                        <Text style={styles.text}>
                            Unit
                        </Text>
                        <TextInput style={styles.textInput1}/>
                        <Text style={styles.text}>
                            City
                        </Text>
                        <TextInput style={styles.textInput1}/>
                        <Text style={styles.text}>
                            Postal Code
                        </Text>
                        <TextInput style={styles.textInput1}/>
                        <Text style={styles.text}>
                            Payment Method
                        </Text>
                        <Picker style={styles.picker}
                                selectedValue={this.state.paymentMethod}
                                onValueChange={(itemValue, itemIndex) => this.setState({paymentMethod: itemValue})}>
                            <Picker.Item label="Debit" value="de" />
                            <Picker.Item label="Credit" value="cr" />
                            <Picker.Item label="Cash" value="ca" />
                        </Picker>
                        {this.creditCart()}
                        <Text style={styles.totalText}>Total: ${GLOBAL.globalCart.total.toFixed(2)}</Text>
                        <TouchableOpacity style={styles.orderButton}>
                            <Text style={styles.orderText}>Order</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <NavBar navigation={this.props.navigation}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F2F4F5',
    },
    scrollContainer: {
        flex: 1,
        flexDirection: 'column',
        width: '90%',
        marginTop: 10,
    },
    whiteBack: {
        backgroundColor: 'white',
        marginBottom: 10,
    },
    textInput1: {
        height: 40,
        borderColor: 'grey',
        borderWidth: 1,
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 15,
        borderRadius: 5,
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 20,
        marginBottom: 5,
    },
    picker: {
      height: 40,
      backgroundColor: '#d9d9d9',
      borderRadius: 5,
      borderWidth: 1,
      marginRight: 20,
      marginLeft: 20,
      marginBottom: 10,
    },
    filler: {
        marginTop: 10,
    },
    totalText: {
        marginTop: 10,
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 20,
    },
    orderButton: {
        backgroundColor: 'black',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        marginBottom: 15,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
    },
    orderText: {
        fontSize: 13,
        color: 'white',
    },
});

AppRegistry.registerComponent('CheckoutScreen', () => CheckoutScreen);
