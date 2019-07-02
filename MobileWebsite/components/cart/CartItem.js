import React, {Component} from 'react';
import {Text, AppRegistry, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default class CartItem extends Component {

    render(){
        return(
            <View style={this.props.itemStyle}>
                <Text style={styles.itemText}>Menu Item {this.props.itemNumber}</Text>
                <Text style={styles.qtyText}>Qty: {this.props.itemQty}</Text>
                <Text style={styles.costText}>${this.props.itemCost}</Text>
                <TouchableOpacity onPress={() => this.props.onPress(this.props.itemNumber)}>
                    <Image source={require('../../images/x-button.png')} style={styles.xButton}/>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    itemText: {
        fontSize: 13,
        fontWeight: 'bold',
        color: 'black',
    },
    qtyText: {
        fontSize: 13,
        color: 'black',
        marginLeft: 'auto',
        marginRight: 20,
    },
    costText: {
        fontSize: 13,
        color: 'black',
        marginRight: 10,
    },
    xButton: {
        height: 30,
        width: 30,
        marginRight: -5,
    },
});

AppRegistry.registerComponent('CartItem', () => CartItem);