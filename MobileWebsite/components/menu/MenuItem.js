import React, {Component} from 'react';
import { Text, AppRegistry, View, StyleSheet, TouchableOpacity, Animated} from 'react-native';

export default class MenuItem extends Component {

    state = {
        animated: new Animated.Value(0)
    };

    addItem = function(onPress, itemNumber, itemPrice, state) {
        Animated.timing(state.animated, {
            toValue: 1,
            duration: 100,
        }).start(() => {
            this.fadeOut(state);
        });
        onPress(itemNumber, itemPrice);
    };

    fadeOut = function(state) {
        Animated.timing(state.animated, {
            toValue: 0,
            duration: 100,
        }).start();
    };

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
                    <TouchableOpacity style={styles.button} onPress={() => this.addItem(this.props.onPress, this.props.itemNumber, this.props.itemPrice, this.state)}>
                        <Text style={styles.addText}>Add</Text>
                    </TouchableOpacity>
                </View>
                <Animated.View style={{
                    marginRight: -25,
                    opacity: this.state.animated,
                }}>
                    <Text style={styles.addedText}>+1</Text>
                </Animated.View>
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
    },
    addedText: {
        fontSize: 15,
        color: 'black',
    },
});

AppRegistry.registerComponent('MenuItem', () => MenuItem);
