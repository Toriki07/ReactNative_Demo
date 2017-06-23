/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import App from "./Components/App.js";
import ListView1 from "./Components/ListView.js";
import FlatViewDemo from "./Components/FlatList.js";
import FlatViewRefesh from "./Components/FlatListRefesh.js";

import AppNavi from "./src/AppNavi.js";


export default class MyShop extends Component {
  render() {
    return (
        <AppNavi />
    );
  }
}

AppRegistry.registerComponent('MyShop', () => MyShop);
