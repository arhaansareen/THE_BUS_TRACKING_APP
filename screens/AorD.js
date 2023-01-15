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
const appIcon = require('../assets/bus.png');

export default class AorDScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Menu');
          }}>
          <Image source={appIcon} style={styles.appIcon} />
       </TouchableOpacity>

          <Text style = {styles.submit3}>LOGIN TYPE</Text>  


        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('DriverLogin');
          }}>
          <View>
            <Text style={styles.submit}>Driver</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('BottomTabNavigator');      
            console.log(this.props)
          }}>
          <View>
            <Text style={styles.submit}>Student</Text>
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
  submit3: {
    fontSize: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:30,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Rajdhani_600SemiBold',
  },
  appIcon: {
    width: 120,
    height: 120,
    marginTop: 50,
    justifyContent: 'center',
    marginLeft: 130,
    marginBottom: 10,
  },
  submit: {
    height: 50,
    padding: 10,
    marginTop:50,
    marginBottom:50,
    borderColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 3,
    fontSize: 25,
    backgroundColor: '#0b6dd6',
    fontFamily: 'Rajdhani_600SemiBold',
    color: '#FFFFFF',
    textAlign:'center',
  },
});
