/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'FU',
  android: 'Droid'
});

export default class Component2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style ={styles.box1}>
            <Text style = {styles.text1}>
                Kintu
            </Text>
        </View>
        <View style ={styles.box1}>
            <Text style = {styles.text1}>
                Kiyingi
            </Text>
        </View>
        <View style ={styles.box1}>
            <Text style = {styles.text1}>
                Hassan
            </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  box1: {
      flex:1,
      backgroundColor: 'black',
      height: 100,
      padding:10,
      borderColor: 'red',
      borderWidth: 0.5
  },
  text1: {
      color: 'white'
  }
})
