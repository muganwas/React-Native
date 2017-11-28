import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet} from 'react-native';
import Component1 from './app/components/component1/Component1';
import Component2 from'./app/components/component2/Component2';

export default class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: this.props.name,
            sex: "Male",
            showSex: false
        };     
    }
    componentWillMount () {
        this.setState({
            //name:"steven",
            sex: "Male",
            showSex:true
        });
    }
    static defaultProps = {
        name: "John"
    }
    render () {
        return (
            <View style={styles.container}>
                <Text style = {styles.welcome}>These are all the components! Some are from {this.state.name || "shrek!"}</Text>
                <Text style = {styles.welcome}>{this.state.showSex?this.state.sex : "We are not allowed to show sex!"}</Text>
                <Component1 name="Kiberumbe!" />
                <Component2 />
            </View>
        );   
    }
}
AppRegistry.registerComponent('myApp', () => App);
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