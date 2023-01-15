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

export default class CancelScreen extends React.Component {
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
            <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Cancel');
          }}>
            <View>
            <Text style={styles.submit}>Cancel</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Delay');
          }}>
            <View>
            <Text style={styles.submit}>Add Delay</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Menu');
          }}>
          <View>
            <Text style={styles.submit2}>Back</Text>
          </View>
        </TouchableOpacity>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b6dd6',
  },
  upperContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:'.2',
  },
  submit: {
    height: 50,
    padding: 10,
    marginTop:50,
    marginBottom:50,
    borderColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 3,
    fontSize: 18,
    backgroundColor: '#0b6dd6',
    fontFamily: 'Rajdhani_600SemiBold',
    color: '#FFFFFF',
    textAlign:'center',
  },
  submit2: {
    justifyContent:'center',
    textAlign:'center',
    alignContent:'center',
    marginLeft:85,
    width: 200,
    height: 50,
    padding: 10,
    marginTop:50,
    marginBottom:50,
    borderColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 3,
    fontSize: 18,
    backgroundColor: '#0b6dd6',
    fontFamily: 'Rajdhani_600SemiBold',
    color: '#FFFFFF',
    textAlign:'center',
  },
});

  
