import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet} from 'react-native';
import Component1 from './app/components/component1/Component1';

export default class App extends Component {
    constructor () {
        super();
        this.state = {name: null, showName:false};     
    }
    componentWillMount () {
        this.setState({
            name:"steven",
            showName:true
        })
    }
    render () {
        return (
            <View style={styles.container}>
                <Text style = {styles.welcome}>These are all the components! Some are from {this.state.showName?this.state.name : "shrek"}</Text>
                <Component1 name="steven" />
                <Component1 name="Kiberumbe!" />
            </View>
        );   
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  })