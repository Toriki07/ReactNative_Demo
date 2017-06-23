
import React, { Component } from 'react';
import {
  ListView,
  Text,
  View,
  Image,
  FlatList,StyleSheet,
  TouchableOpacity
} from 'react-native';

export default class FlatViewRefesh extends Component {
  constructor(props){
    super(props);
    this.state = {
      refreshing: false,
      listRoom: [],
      refresh: false,
      page: 0,
    }
  }

  componentDidMount(){
    //load dataSource
    var mang = ["111111", "88888", "3333333"]
    fetch('http://35.162.241.129:3000/api/v1/comment?query={"roomId":"593de77e1098b5cd7a06f4f8"}&limit=6&skip='+ this.state.page)
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
    this.setState({
      refresh:true
    });

    fetch('http://35.162.241.129:3000/api/v1/comment?query={"roomId":"593de77e1098b5cd7a06f4f8"}&limit=6&skip=' + this.state.page)
    .then((response)=>response.json())
    .then((responseJson)=>{
      console.log(responseJson);
      this.setState({
        listRoom: responseJson ,
        refresh:false,
        page: this.state.page + 6
      });
    })
    .catch((error)=>{
      console.log(error);
    });
  }

  render() {
    return (
        <FlatList

        refreshing = {this.state.refresh}
        onRefresh = {()=>{this.loadNewData()}}

        onEndReachedThreshold={-0.2}
        onEndReached={()=>{this.loadNewData()}}
        data={this.state.listRoom}
        renderItem = {({item})=>
          <TouchableOpacity style = {styles.line}
            onPress={()=>{alert(item.name)}}
          >
            <View style = {styles.flet}>
              <Text>Name: {item.name}</Text>
            </View>
            <View style = {styles.right}>
            <Text>Comment: {item.content}</Text>
            </View>
          </TouchableOpacity>
        }
        // horizontal = {false}
        // numColumns = {2}
        />
    );
  }
}
var styles = StyleSheet.create({
  line: {borderBottomWidth:1, padding: 50, borderRightWidth:1, flexDirection: "row"},
  flet:{flex:2},
  right:{flex:3},
  images:{width:100, height: 100, borderRadius: 50}
})
