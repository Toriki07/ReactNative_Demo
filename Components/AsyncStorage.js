import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AsynStorage
} from 'react-native';

export default class UnitStorage extends Component {
  save = async()=>{
    try{
      await AsynStorage.setItem("@AAA:key", "PHUONG LE");
      console.log("SAVE OK!!!");
    }catch(e){
      console.log(e)
    }
  }
  get = async()=>{
    try{
      var v = await AsynStorage.getItem("@AAA:key");
      console.log(v)
    }catch(e){
      console.log(e)
    }
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity style={styles.button}
          onPress={()=>{this.save()}}
        >
          <Text style={styles.text}>
            SAVE
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
        onPress={()=>{this.get()}}
        >
          <Text style={styles.text}>
            GET
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  wrapper: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#F781D8'},
  text:{color: 'yellow'},
  button:{ borderWidth: 1, borderColor: 'yellow', width:200, padding: 30, margin:30, alignItems: 'center', justifyContent: 'center'}
}
);
