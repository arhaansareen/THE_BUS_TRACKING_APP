import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image,
  CheckBox,
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
    this.state = {
      busData: [],
      isSelected:false,
      isSelected2:false,
    };
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
  };

  renderItem = ({ item, i }) => {
    console.log('renderItem');
    console.log(item);
    return (
      <TouchableOpacity
        onPress={() => {
          this.getStopDetails(item);
        }}>
        <View>
          <Text style={styles.stops}> {item.Bus}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const { busData, isSelected, isSelected2 } = this.state;
    return (
      
      <View style={styles.container}>
      <View>
        
      </View>
        <View style={styles.upperContainer}>
          <View>
            <Text style={styles.bus1}>Cancel</Text>
          </View>
        </View>
        <View>
          <TextInput
            style={styles.date}
            placeholder={'MM/DD/YEAR'}
            placeholderTextColor={'#FFFFFF'}
          />
        </View>
       <View>
        <FlatList
          style={styles.text}
          data={busData}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
       </View>   
       <View>
       <View> 
        </View>
        <Text style = {styles.morningtext}>Morning</Text>
        </View>
               <View>
       <View> 
        </View>
        <Text style = {styles.morningtext}>Evening</Text>
        </View>
      
  
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('CancelSubmit');
          }}>
          <View>
            <Text style={styles.submit}>Submit</Text>
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
    backgroundColor: '#5653D4',
  },
  morningtext: {
    textAlign:'center',
    marginTOp:30,
  },
  checkBox:{
    alignSelf:'center',
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
  upperContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '.2',
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
  text: {
    marginTop: 30,
    fontSize: 15,
    width: 60,
    backgroundColor: '#f50707',
    height: 50,
    borderRadius: 1.0,
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bus1: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'black',
    fontFamily: 'Rajdhani_600SemiBold',
    marginTop: 30,
    fontSize: 30,
    width: 330,
    backgroundColor: '#f50707',
    height: 50,
    borderRadius: 1.0,
    flex: 1.0,
  },
  date: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    fontFamily: 'Rajdhani_600SemiBold',
    fontSize: 30,
    width: 330,
    marginTop: 30,
    backgroundColor: '#f50707',
    height: 50,
    borderRadius: 1.0,
    flex: 1.0,
  },
  timeText: {
    textAlign: 'center',
    marginBottom: 30,
  },
});
