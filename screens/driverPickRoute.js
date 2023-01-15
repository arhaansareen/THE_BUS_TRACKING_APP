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

export default class DPickRouteScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { bus, routeName } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.upperContainer}>
          <View style={styles.pickRoute}></View>
          </View>
          <Text style = {styles.submit3}>Driver, Which Route?</Text>  
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('DriverBus1');
          }}>
          <View>
            <Text style={styles.submit}>1</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('DriverBus2');
          }}>
          <View>
            <Text style={styles.submit}>2</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('DriverBus3');
          }}>
          <View>
            <Text style={styles.submit}>3</Text>
          </View>
        </TouchableOpacity>
         <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('DriverBus4');
          }}>
          <View>
            <Text style={styles.submit}>4</Text>
          </View>
        </TouchableOpacity>
         <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Driver');
          }}>
          <View>
            <Text style={styles.submit}>5</Text>
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
    marginTop: 100,
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Rajdhani_600SemiBold',
  },
  submit: {
    height: 50,
    padding: 10,
    marginTop:30,
    marginBottom:0,
    borderColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 3,
    fontSize: 18,
    backgroundColor: '#0b6dd6',
    fontFamily: 'Rajdhani_600SemiBold',
    color: '#FFFFFF',
    textAlign:'center',
  },
  upperContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '.2',
  },
  submit2: {
    fontSize: 50,
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
