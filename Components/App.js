
import React, { Component } from 'react';
import {
  ListView,
  Text,
  View,
  Image
} from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2})
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
        dataSource: this.state.dataSource.cloneWithRows(responseJson),
      });
    })
    .catch((error)=>{
      console.log(error);
    });


  }
  render() {
    return (
        <ListView
        dataSource = {this.state.dataSource}
        renderRow = {(row)=>
          <View style = {{padding:20, borderWidth: 1}}>
          <Image source={{uri: "http://35.162.241.129:3000/uploads/"+ row.coverImage.filename}}
       style={{width: 150, height: 70}} />
          <Text>{row.title}</Text><Text>{"http://35.162.241.129:3000/uploads/"+ row.coverImage.filename}</Text>
          </View>
        }
        />
    );
  }
}
