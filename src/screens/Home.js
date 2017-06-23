import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#2EFEF7'}}>
        <Text>Home</Text>
        <TouchableOpacity style={{backgroundColor: '#FF8000'}}
          onPress={()=>{this.props.navigation.navigate('Screen_Detail', {thamso: 'Helo Phuong Le'})}}
        >
          <Text style={{color: 'white', fontSize: 20, padding: 10}}>Go to Detail</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: '#FA5882'}}
          onPress={()=>{ this.props.navigation.navigate('DrawerOpen')}
          }
        >
          <Text style={{color: 'white', fontSize: 20, padding: 10}}>Go to Menu</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
