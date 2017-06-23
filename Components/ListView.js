
import React, { Component } from 'react';
import {
  ListView,
  Text,
  View,
  Image,
  RefreshControl
} from 'react-native';

export default class ListView1 extends Component {
  constructor(props){
    super(props);
    this.state = {
      refreshing: false,
      page: 0,
      dataSource: new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2})
    }
  }

  componentDidMount(){
    //load dataSource
    var mang = ["111111", "88888", "3333333"]
    fetch('http://35.162.241.129:3000/api/v1/comment?query={"roomId":"593de77e1098b5cd7a06f4f8"}&limit=3&skip='+ this.state.page)
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

  loadNewData(){
    this.setState({
      refreshing:true
    });

    fetch('http://35.162.241.129:3000/api/v1/comment?query={"roomId":"593de77e1098b5cd7a06f4f8"}&limit=3&skip=' + this.state.page)
    .then((response)=>response.json())
    .then((responseJson)=>{
      console.log(responseJson);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseJson),
        refreshing:false,
        page: this.state.page + 3
      });
    })
    .catch((error)=>{
      console.log(error);
    });
  }
  loadOldData(){
    this.setState({
      refreshing:true
    });

    fetch('http://35.162.241.129:3000/api/v1/comment?query={"roomId":"593de77e1098b5cd7a06f4f8"}&limit=3&skip=' + this.state.page)
    .then((response)=>response.json())
    .then((responseJson)=>{
      console.log(responseJson);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseJson),
        refreshing:false,
        page: this.state.page -3
      });
    })
    .catch((error)=>{
      console.log(error);
    });
  }
  render() {
    return (
        <ListView
        refreshControl = {
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.loadNewData.bind(this)}
          />
        }
        dataSource = {this.state.dataSource}
        renderRow = {(row)=>
          <View style = {{padding:20, borderWidth: 1}}>
          <Text>{row.name}</Text><Text>{row.content}</Text>
          </View>
        }
        onEndReached ={ ()=> <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.loadOldData.bind(this)}
          />}
        />
    );
  }
}
