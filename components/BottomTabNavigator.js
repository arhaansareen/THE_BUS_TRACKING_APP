import React, { Component } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import TransactionScreen from '../screens/Transaction';
import PickRouteScreen from '../screens/PickRoute';
import MapView1Screen from '../screens/MapView1';
import MapView2Screen from '../screens/MapView2';
import MapView3Screen from '../screens/MapView3';
import MapView4Screen from '../screens/MapView4';
import MapView5Screen from '../screens/MapView5';

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Tab.Navigator
        screenOptions={{
          lazy: true,
          headerShown: false,
          swipeEnabled: false,
          tabBarScrollEnabled: true,
          tabBarIconStyle: { display: 'none' },

          tabBarActiveTintColor: '#FF0000',
          tabBarInactiveTintColor: 'white',
          
          tabBarLabelStyle: {
            fontSize: 30,
            fontFamily: 'Rajdhani_600SemiBold',
          },

          tabBarStyle: {
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0b6dd6',
          },
        }}>
        <Tab.Screen name="PR" component={PickRouteScreen} />
        <Tab.Screen name="1" component={MapView1Screen} />
        <Tab.Screen name="2" component={MapView2Screen} />
        <Tab.Screen name="3" component={MapView3Screen} />
        <Tab.Screen name="4" component={MapView4Screen} />
        <Tab.Screen name="5" component={MapView5Screen} />
      </Tab.Navigator>
    );
  }
}
