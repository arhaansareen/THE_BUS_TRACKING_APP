import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image,
  CheckBox,
  Button,
  Platform,
  Alert,
  ToastAndroid,
  KeyboardAvoidingView,
  FlatList,
} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});


export default class DelayScreen extends React.Component {
  constructor(props) {
 
    super(props);
    this.state = {
      busData: [],
      delay: false,
      timeofDelay: '',
      reasonofDelay: '',
      date: '',
    };
  }






  cancelNotification() {
    const data = {};
    db.collection('CancelNotifiation')
      .add({
        cancelled: this.state.delay,
        timeofDelay: this.state.timeofDelay,
        reasonofDelay: this.state.reasonofDelay,
        date: this.state.date,
      })
      .then((docRef) => {
        console.log('Delay Submitted', docRef.id);
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  }

  getBusData = (busData) => {
    db.collection('Routes')
      .get()
      .then((bus) => {
        bus.docs.map((doc) => {
          this.setState({
            busData: [...this.state.busData, { id: doc.id, ...doc.data() }],
          });
        });
      });
  };

  componentDidMount = async () => {
    this.getBusData();
    this.cancelNotification();
    console.log('arhaan')
  };

  renderItem = ({ item, i }) => {
    console.log('renderItem');
    console.log(item);
    return (
      <TouchableOpacity
        onPress={() => {
          this.getBusData(item);
        }}>
        <View>
          <Text style={styles.stops}> {item.Bus}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const { bus, routeName } = this.state;
    const { busData } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.upperContainer}>
          <View>
            <Text style={styles.bus1}>Delay </Text>
          </View>
        </View>
        <View>
          <TextInput
            style={styles.textinput}
            placeholder={'MM/DD/YEAR'}
            placeholderTextColor={'#FFFFFF'}
            onChangeText={(text) => this.setState({ date: text })}
          />
        </View>
        <FlatList
          style={styles.text}
          data={busData}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
        <View>
          <TextInput
            style={styles.textinput}
            placeholder={'Reason Of Delay'}
            placeholderTextColor={'#FFFFFF'}
            onChangeText={(text) => this.setState({ timeofDelay: text })}
          />
          <TextInput
            style={styles.textinput}
            placeholder={'Time Of Delay'}
            placeholderTextColor={'#FFFFFF'}
            onChangeText={(text) => this.setState({ reasonofDelay: text })}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            this.cancelNotification();
            this.setState({ delay: true });
            this.props.navigation.navigate('DelayNotif')
          }}>
          <View>
            <Text style={styles.buttonText}>Submit</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Admin');
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
    backgroundColor: '#0b6dd6',
  },
   textinput: {
    height: 50,
    padding: 10,
    borderColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 3,
    fontSize: 18,
    backgroundColor: '#0b6dd6',
    fontFamily: 'Rajdhani_600SemiBold',
    color: '#FFFFFF',
  },
  submit: {
    fontSize: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F48D20',
    borderRadius: 15,
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Rajdhani_600SemiBold',
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
  upperContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '.2',
  },
  text: {
    marginTop: 30,
    fontSize: 15,
    width: 60,
    backgroundColor: '#f50707',
    height: 50,
    borderRadius: 1.0,
    flex: 1.0,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
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
  bus1: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'black',
    fontFamily: 'Rajdhani_600SemiBold',
    marginBottom: 0,
    fontSize: 30,
    width: 320,
    marginTop: 30,
    height: 50,
    borderRadius: 1.0,
    flex: 1.0,
    textDecorationLine: 'underline',
  },
});
