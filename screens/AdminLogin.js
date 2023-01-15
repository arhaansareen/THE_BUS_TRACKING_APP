 import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image,
  Alert,
  ToastAndroid,
  KeyboardAvoidingView,
} from 'react-native';

import db from '../config';
import firebase from 'firebase';
import { useContext } from 'react';
import { User } from './UserContext';

const bgImage = require('../assets/background2.png');
const appIcon = require('../assets/bus.png');
const appName = require('../assets/appName.png');

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
 

  handlelogin = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((data) => {
        console.log(data)
        this.props.navigation.navigate('Admin');
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };

  render() {
    const{email,password}=this.state
    return (
     <KeyboardAvoidingView  style={styles.container}>
        <ImageBackground source={bgImage} style={styles.bgImage}>
          <View style={styles.upperContainer}>
            <Image source={appIcon} style={styles.appIcon} />
            <Text style = {styles.appName}>Bus Tracker</Text>
          </View>
          <View style={styles.lowerContainer}>
            <TextInput
              style={styles.textinput}
              placeholder={'enter email'}
              placeholderTextColor={'#FFFFFF'}
              autoFocus
              onChangeText={(text) => this.setState({ email: text })}
            />
            <TextInput
              style={styles.textinput}
              placeholder={'enter password'}
              placeholderTextColor={'#FFFFFF'}
              secureTextEntry
              onChangeText={(text) => this.setState({ password: text })}
            />
            <TouchableOpacity
              style={[styles.button, { marginTop: 20 }]}
              onPress={() => {
                this.handlelogin(email, password);
              }}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  upperContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appIcon: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 80,
  },
  appName: {
    fontSize:50,
    fontFamily: 'Rajdhani_600SemiBold',
    marginBottom:0,
    color:'white',
  },
  lowerContainer: {
    flex: 0.5,
    alignItems: 'center',
  },
  textinput: {
    width: '57%',
    height: 50,
    padding: 10,
    borderColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 3,
    fontSize: 18,
    backgroundColor: '#5653D4',
    fontFamily: 'Rajdhani_600SemiBold',
    color: '#FFFFFF',
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontFamily: 'Rajdhani_600SemiBold',
    textAlign:'center',
  },
  button: {
    width: '43%',
    height: 50,
    padding: 10,
    borderColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 3,
    fontSize: 18,
    backgroundColor: '#5653D4',
    fontFamily: 'Rajdhani_600SemiBold',
    color: '#FFFFFF',
    textAlign:'center',
  },
});
