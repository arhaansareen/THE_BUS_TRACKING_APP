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
  Item,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import db from '../config';
import firebase from 'firebase';

const bgImage = require('../assets/background2.png');
const appIcon = require('../assets/bus.png');
const appName = require('../assets/appName.png');

export default class PickRouteScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      busData: [],
      stopsData: [],
      selectedBus:0,
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

  getStopDetails = (item) => {
    
    this.setState({
      stopsData: [],
    });
    db.collection(`Routes/${item.id}/Stops`)
      .get()
      .then((location) => {
        location.docs.map((doc) => {
        
          this.setState({
            stopsData: [...this.state.stopsData, doc.data()],
          });
        });
      });
  };


  
  componentDidMount = async () => {
    this.getBusData();
  };





  renderStopsItem = ({ item, i }) => {
    return (
      <View>
        <Text style={styles.locationText}> {item.Location} </Text>
      </View>
    );
  };


  renderBusTabItem = ({ item, i }) => {

    return (
      <TouchableOpacity
        onPress={() => {
          this.getStopDetails(item);
        }}>
        <View>
          <Text style={styles.bustabs}> {item.Bus}</Text>
        </View>
      </TouchableOpacity>
    );
  };


  render() {
    const { busData } = this.state;
    const { stopsData } = this.state;
    console.log(busData)
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => {
            console.log('arhaan')
            this.props.navigation.navigate('Menu');
          }}>
          <Image source={appIcon} style={styles.appIcon} />
       </TouchableOpacity>
        <Text style={styles.header}>Bus Route Stops</Text>
        <FlatList
          data={busData}
          renderItem={this.renderBusTabItem}
          horizontal={true}
          keyExtractor={(item, index) => index.toString()}
          scrollEnabled='true'
        />
        <FlatList
          data={stopsData}
          extraData={this.state}
          renderItem={this.renderStopsItem}
          keyExtractor={(item, index) => index.toString()}
        />
        <Text style={styles.button}> Bus Location Map</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b6dd6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bustabs: {
    fontFamily: 'Rajdhani_600SemiBold',
    color: 'white',
    fontSize: 20,
    marginRight: 10,
    marginTop: 15,
    textAlign: 'center',
  },
  appIcon: {
    width: 80,
    height: 80,
    marginTop:30,
  },
  header: {
    fontFamily: 'Rajdhani_600SemiBold',
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 20,
  },
  locationText: {
    fontFamily: 'Rajdhani_600SemiBold',
    color: 'white',
    fontSize: 15,
    textAlign: 'left',
    marginBottom: 20,
  },
  button: {
    fontSize: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#',
    borderRadius: 15,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Rajdhani_600SemiBold',
  },
});
