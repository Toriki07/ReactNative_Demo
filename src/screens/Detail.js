import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class Detail extends Component {
  // static navigationOptions = {
  //   title: 'Chi tiet'
  // }
  render() {
    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#F781D8'}}>
        <Text style={{fontSize:70}}>
          Detail
        </Text>
        <Text style={{fontSize:30}}>{this.props.navigation.state.params.thamso}</Text>
        <TouchableOpacity style={{backgroundColor: '#00FF80'}}
          onPress={()=>{this.props.navigation.goBack()}}
        >
          <Text style={{color: 'white', fontSize: 20, padding: 10}}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
