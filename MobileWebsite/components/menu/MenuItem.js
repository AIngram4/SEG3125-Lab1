import React, {Component} from 'react';
import { Text, AppRegistry, View, StyleSheet, TouchableOpacity} from 'react-native';

export default class MenuItem extends Component {

    render(){
        return(
            <View style={styles.container}>
                <View>
                    <Text style={styles.text}>Item {this.props.itemNumber}</Text>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.textPrice}>${this.props.itemPrice}</Text>
                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.onPress(this.props.itemNumber, this.props.itemPrice)}>
                        <Text style={styles.addText}>Add</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
   container: {
       flexDirection: 'row',
       alignItems: 'center',
       marginTop: 20,
       marginRight: 40,
       marginLeft: 40,
       height: 60,
       backgroundColor: 'white',
   },

   text: {
       textAlign: 'center',
       color: 'black',
       fontSize: 20,
       marginLeft: 15,
   },

   buttonView: {
       marginLeft: 'auto',
       marginRight: 15,
       width: 60,
   },

   button: {
       backgroundColor: '#000000',
       height: 30,
       width: '100%',
       justifyContent: 'center',
   },

   addText: {
       color: 'white',
       textAlign: 'center',
   },

    textPrice: {
        textAlign: 'center',
        color: 'black',
        fontSize: 15,
    },

    priceContainer: {
       marginLeft: 120,
    }
});

AppRegistry.registerComponent('MenuItem', () => MenuItem);
