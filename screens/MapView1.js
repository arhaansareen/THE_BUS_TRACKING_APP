import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Text, Image } from 'react-native';
import Marker from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
const appIcon = require('../assets/bus.png');
import db from '../config';
import firebase from 'firebase';

const GOOGLE_MAPS_APIKEY = 'AIzaSyC41IAyuyX25CVLQUATK8Omk4EHhNK3qNw';
const Route = 'Route1';

export default class MapViewScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hardCode: [],
      latitude: '',
      longitude: '',
      coordinates: [],
      initialRegionLat: '',
      initialRegionLong: '',
      latDelta: '',
      longDelta: '',
    };
  }

  getStopsLocation = () => {
    this.setState({
      coordinates: [],
    });
    db.collection(`Routes/${Route}/Stops`)
      .get()
      .then((location) => {
        location.docs.map((doc) => {
          const stopData = doc.data();

          this.setState({
            coordinates: [
              ...this.state.coordinates,
              { latitude: stopData.Latitude, longitude: stopData.Longitude },
            ],
          });
        });
      });
  };

  getHardCodedData = (latitude, longitude) => {
    db.collection('Routes')
      .doc(Route)
      .onSnapshot((routeData) => {
        const locationData = routeData.data();

        this.setState({
          latitude: locationData.latitude,
          longitude: locationData.longitude,
          initialRegionLat: locationData.IRLatitude,
          initialRegionLong: locationData.IRLongitude,
          latDelta: locationData.LatDelta,
          longDelta: locationData.LongDelta,
        });
      });
  };

  componentDidMount = async () => {
    this.getHardCodedData();
    this.getStopsLocation();
  };

  render() {
    const driverCoordinates = {
      longitude: this.state.longitude,
      latitude: this.state.latitude,
    };
    console.log(this.state);
    console.log(this.state.initialRegionLat);
    return (
      <View style={styles.container}>
        <View style={styles.container2}>
          <Image source={appIcon} style={styles.appIcon} />
        </View>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 43.671075640513514,
            longitude: -79.82058595332548,
            latitudeDelta: 0.08,
            longitudeDelta: 0.04,
          }}>
          <MapView.Marker
            coordinate={driverCoordinates}
            image={require('../assets/mapicon.png')}
          />
          {this.state.coordinates.map((val, index) => {
            return (
              <MapView.Marker
                coordinate={{
                  latitude: val.latitude,
                  longitude: val.longitude,
                }}
                key={index}
                //title = {"parking markers"}
              />
            );
          })}

          {this.state.coordinates.map((val, index) => {
            return (
              <MapViewDirections
                origin={this.state.coordinates[index]}
                destination={this.state.coordinates[index + 1]}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth="3"
                strokeColor="red"
              />
            );
          })}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    backgroundColor: '#0b6dd6',
  },
  appIcon: {
    width: 80,
    height: 80,
    marginTop: 50,
    justifyContent: 'center',
    marginLeft: 145,
    marginBottom: 10,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
