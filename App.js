import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  useState,
  Fragment,
  useCallback,
  useMemo,
  useRef,
} from 'react-native';
import BottomTabNavigatorScreen from './components/BottomTabNavigator';
import AdminLoginScreen from './screens/AdminLogin';
import { Rajdhani_600SemiBold } from '@expo-google-fonts/rajdhani';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AorDScreen from './screens/AorD';
import PickRouteScreen from './screens/PickRoute';
import AdminScreen from './screens/Admin';
import CancelScreen from './screens/Cancel';
import CancelSubmitScreen from './screens/CancelSubmit';
import DelayScreen from './screens/Delay';
import DelaySubmitScreen from './screens/DelaySubmit';
import DriverScreen from './screens/Driver';
import DriverBus1Screen from './screens/DriverBus1';
import DriverBus2Screen from './screens/DriverBus2';
import DriverBus3Screen from './screens/DriverBus3';
import DriverBus4Screen from './screens/DriverBus4';
import DPickRouteScreen from './screens/driverPickRoute';
import DelayNotificationScreen from './screens/DelayNotificaiton';
import DriverLoginScreen from './screens/DriverLogin';
import db from './config';
import firebase from 'firebase';
import * as Font from 'expo-font';

const Stack = createStackNavigator();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
      driverID: '',
      route: '',
    };
  }

  async loadFonts() {
    await Font.loadAsync({
      Rajdhani_600SemiBold: Rajdhani_600SemiBold,
    });
    this.setState({
      fontLoaded: true,
    });
  }
  componentDidMount() {
    this.loadFonts();
  }
  render() {
    const { fontLoaded } = this.state;
    if (fontLoaded) {
      return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Menu" component={AorDScreen} />
            <Stack.Screen name="AdminLogin" component={AdminLoginScreen} />
            <Stack.Screen name="DriverLogin" component={DriverLoginScreen} />
            <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigatorScreen}/>
            <Stack.Screen name="DriverBus1" component={DriverBus1Screen}/>
            <Stack.Screen name="DriverBus2" component={DriverBus2Screen}/>
            <Stack.Screen name="DriverBus3" component={DriverBus3Screen}/>
            <Stack.Screen name="DriverBus4" component={DriverBus4Screen}/>
            <Stack.Screen name="DriverBus5" component={DriverScreen}/>
<Stack.Screen name="DriverPickRoute" component={DPickRouteScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
    return null;
  }
}

/*const AppSwitchContainer = createStackNavigator({
  
  PickRoute:{
    screen:PickRouteScreen
  },
  Admin: {
    screen:AdminScreen
  },

  
  Cancel:{
    screen:CancelScreen
  },
  CancelSubmit:{
    screen:CancelSubmitScreen
  },
  Delay:{
    screen:DelayScreen
  },
  DelaySubmit:{
    screen:DelaySubmitScreen,
  },

  Driver:{
    screen:DriverScreen,
  },
  DriverBus1:{
    screen:DriverBus1Screen,
  },
  DriverBus2:{
    screen:DriverBus2Screen,
  },
  DriverBus3:{
    screen:DriverBus3Screen,
  },
  DriverBus4:{
    screen:DriverBus4Screen
  },
  DelayNotif:{
    screen:DelayNotificationScreen,
  },
  DriverPickRoute: {
    screen:DPickRouteScreen
  },
  BottomTabNavigator:{
    screen:BottomTabNavigatorScreen
  },
},
{initialRouteName:'Menu'}
)
const AppContainer = createAppContainer(creatStackNavigator)*/
