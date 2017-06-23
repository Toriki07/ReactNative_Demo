import React, { Component } from 'react';
import {StackNavigator, TabNavigator, DrawerNavigator} from 'react-navigation';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import Home from './screens/Home';
import User from './screens/User';
import Detail from './screens/Detail';
import Menu from './screens/Menu';
import UnitStorage from '../Components/AsyncStorage';
// khi lam du an viet stack, tabs, and drawer moi cai mot file.js d
// You should create each file for stack, tabs, drawer
export const HomeStack = StackNavigator({
  Screen_Home: {
    screen: Home,
    navigationOptions:{
      title:'Trang Chu'
    }
  },
  Screen_Detail: {
    screen: Detail,
    navigationOptions:{
      title:'Chi tiet'
    }
  },
})
export const UserStack = StackNavigator({
  Screen_User: {
    screen: User,
    navigationOptions:{
      title: 'Tai Khoan'
    }
  },
})
export const StorageStack = StackNavigator({
  Screen_Storage: {
    screen: UnitStorage,
    navigationOptions:{
      title: 'Storage'
    }
  },
})
//xet vi tri cho tabbar tren Android
export const Tabs = TabNavigator({
      Home:{
        screen: HomeStack,
        navigationOptions:{
          tabBarLabel: 'HOME'
        }
      },
      User:{
        screen: UserStack,
        navigationOptions:{
          tabBarLabel: 'USER'
        }
      },
      UnitStorage:{
        screen: StorageStack,
        navigationOptions:{
          tabBarLabel: 'STORAGE'
        }
      },
    },
    {
      tabBarPosition: 'bottom',
      swipeEnabled: true,
      tabBarOptions: {
        style:{
          backgroundColor:'#BDBDBD',
        },
          inactiveTintColor:'green',
          activeTintColor:'red'

      },

    }
);

export const SideMenu = DrawerNavigator(
  {
    Tabbar:{
      screen: Tabs
    },
  },
  {
    drawerWidth: 200,
    drawerPosition: 'left',
    contentComponent: props => <ScrollView><Menu {...props} /></ScrollView>
  }
);
