import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class User extends Component {
  render() {
    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#F781D8'}}>
        <Text style={{fontSize:70}}>
          User1
        </Text>

      </View>
    );
  }
}
