import React, { Component } from 'react'
import TypeWriter from 'react-native-typewriter'
import { Animated,View, Text ,Image} from 'react-native'
import * as Animatable from 'react-native-animatable';

export default class App extends Component {
   fadeIn = {
    0: {
      opacity: 0,

    },
    0.5: {
      opacity: 1,
      
    },
    1: {
      opacity: 0,
      
    },
   
  };
  render() {
    return(
      <View style={{flex:1,backgroundColor:'white'}}>
        
        <View style={{flexDirection:'row',top:300,backgroundColor:'black',width:300,height:60,left:35,borderRadius:15}}>
          <Text style={{fontSize:35,left:10,color:'white',top:5}}>Downloading</Text>
          <View style={{  backgroundColor:'white',height:50,width:60,left:35,top:5,borderRadius:10}}>
            <View style={{flexDirection:'row',justifyContent:'space-around',top:23}}>
          <Animatable.Text  animation={this.fadeIn} delay = {500} iterationCount='infinite' duration={3000}  style={{ textAlign: 'center' }}>
          <Image style={{height:10,width:10,top:80}}
        source={require('./assets/dot.png')}
      />
      
          </Animatable.Text>
          <Animatable.Text  animation={this.fadeIn} delay = {1100} duration={3000} iterationCount='infinite' style={{ textAlign: 'center' }}>
          <Image style={{height:10,width:10,}}
        source={require('./assets/dot.png')}
      />
          </Animatable.Text>
          <Animatable.Text  animation={this.fadeIn} delay = {1700} iterationCount='infinite' duration={3000}  style={{ textAlign: 'center' }}>
          <Image style={{height:10,width:10}}
        source={require('./assets/dot.png')}
      />
          </Animatable.Text>
          <Animatable.Text  animation={this.fadeIn} delay = {2300} iterationCount='infinite'  duration={3000} style={{ textAlign: 'center' }}>
          <Image style={{height:10,width:10}}
        source={require('./assets/dot.png')}
      />
          </Animatable.Text>
          </View>
          </View>
     </View>

      </View>
      );
  }
}
