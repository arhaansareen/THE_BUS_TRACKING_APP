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

export default class CancelSubmitScreen extends React.Component {
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
            <Text style = {styles.bus1}>Cancel Notification Sent Through</Text>
            <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Cancel');
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
    textAlign:'center',
    color: 'white',
    fontFamily: 'Rajdhani_600SemiBold',
    fontSize:30,
  },
   back: {
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F48D20',
    borderRadius: 15,
    marginTop: 30,
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Rajdhani_600SemiBold',
  },
}); 

  
