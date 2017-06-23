import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {HomeStack} from './Router';
import {Tabs} from './Router';
import {SideMenu} from './Router';

export default class AppNavi extends Component {
  render() {
    return (
      <SideMenu/>
    );
  }
}
