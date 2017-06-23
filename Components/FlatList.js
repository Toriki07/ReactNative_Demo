
import React, { Component } from 'react';
import {
  ListView,
  Text,
  View,
  Image,
  FlatList,StyleSheet
} from 'react-native';

export default class FlatViewDemo extends Component {
  constructor(props){
    super(props);
    this.state = {
      refreshing: false,
      listRoom: [],
      refresh: false
    }
  }

  componentDidMount(){
    //load dataSource
    var mang = ["111111", "88888", "3333333"]
    fetch("http://35.162.241.129:3000/api/v1/room")
    .then((response)=>response.json())
    .then((responseJson)=>{
      console.log(responseJson);
      this.setState({
        listRoom: responseJson
      });
    })
    .catch((error)=>{
      console.log(error);
    });


  }

  loadNewData(){
  }

  render() {
    return (
        <FlatList

        refreshing = {this.state.refresh}
        onRefresh = {()=>{this.loadNewData()}}
        data={this.state.listRoom}
        renderItem = {({item})=>
          <View style = {styles.line}>
            <View style = {styles.flet}>
            <Image source={{uri: "http://35.162.241.129:3000/uploads/"+ item.coverImage.filename}}
         style={styles.images} />
            </View>
            <View style = {styles.right}>
            <Text>City:{item.title}</Text>
            <Text>Rate:{item.rating}</Text>
            </View>
          </View>
        }
        // horizontal = {false}
        // numColumns = {2}
        />
    );
  }
}
var styles = StyleSheet.create({
  line: {borderBottomWidth:1, padding: 50, borderRightWidth:1, flexDirection: "row"},
  flet:{flex:5},
  right:{flex:4},
  images:{width:100, height: 100, borderRadius: 50}
})
