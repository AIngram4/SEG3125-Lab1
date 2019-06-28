/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';

import MenuScreen from './components/menu/MenuScreen';

type Props = {};
export default class App extends Component<Props> {

  render() {
    return (
        <MenuScreen/>
    );

  }
}

const styles = StyleSheet.create({
});
