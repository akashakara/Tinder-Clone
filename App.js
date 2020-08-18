import React, { Component } from 'react'
import TypeWriter from 'react-native-typewriter'
import { View, Text } from 'react-native'
 
export default class App extends Component {
  render() {
    return(
      <View style={{flex:1,backgroundColor:'black'}}>
        <Text style={{fontSize:20,color:'white',top:50,textAlign:'center'}}>React-Native-Typewriter</Text>
        <View style={{top:200}}>
      <TypeWriter   typing={1}><Text style={{fontSize:25,color:'white',alignContent:'center'}}>Hello Everyone! My name is <Text style={{color:'red'}}>Akash Kumar Singh.</Text>I am a React Native Developer and this is the example of React-Native-Typewriter</Text></TypeWriter>
     </View>

      </View>
      );
  }
}
