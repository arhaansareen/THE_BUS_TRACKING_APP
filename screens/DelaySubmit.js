import React from 'react';
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
  FlatList,
} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class DelaySubmitScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { bus, routeName } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.upperContainer}>
          <View style={styles.pickRoute}>
            </View>
            </View>
            <Text style = {styles.bus1}>Delay Notification Sent Through</Text>
            <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Delay');
          }}>
          <View>
            <Text style={styles.back}>Back</Text>
          </View>
        </TouchableOpacity>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5653D4',
  },
  upperContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:'.2',
  },
  bus1: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:200,
    textAlign:'center',
    fontSize: 30,
    color: 'white',
    fontFamily: 'Rajdhani_600SemiBold',
    marginBottom:0,
    width: 330,
    height:50,
    borderRadius:1.0,
    flex:1.0,
  },
});

  
