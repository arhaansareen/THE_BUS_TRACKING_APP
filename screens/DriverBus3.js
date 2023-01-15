import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import Device from 'expo-device';
import * as Location from 'expo-location';
import db from '../config';
import firebase from 'firebase';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

   saveLocation = () => {
    const data = {};
    db.collection('Routes').doc('Route3')
      .set({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      },{ merge: true })
      .then((docRef) => {
        console.log('noted', );
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  }

  useEffect(() => {
    (async () => {
      if (Platform.OS === 'android' && !Device.isDevice) {
        setErrorMsg(
          'Oops, this will not work on Snack in an Android Emulator. Try it on your device!'
        );
        return;
      }
      let { status } = await Location.requestForegroundPermissionsAsync();


      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      //let location = await Location.getCurrentPositionAsync({});
      
      let  foregroundSubscrition= Location.watchPositionAsync(
    {
      // Tracking options
      accuracy: Location.Accuracy.High,
      distanceInterval: 0,
    },
       (location) => {setLocation(location);
      this.saveLocation();
       }
    
  )


      
    })();
  }, []);

  let text = 'Waiting..';
  let latitude = '';
  let longitude = '';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
    latitude = location.coords.latitude;
    longitude = location.coords.longitude; 
    console.log(longitude);
    console.log(latitude);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Bus 3</Text>
      <Text style={styles.paragraph2}>BroadCasting </Text>
      <Text style={styles.paragraph2}>Started </Text>
      <Text style={styles.paragraph3}>{longitude}</Text>
      <Text style={styles.paragraph3}>{latitude}</Text>

      <Text style={styles.paragraph4}>If wrong route please refresh app</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor:'#0b6dd6'
  },
 paragraph: {
    fontSize: 38,
    textAlign: 'center',
    marginTop: 10,
    color: 'white',
    fontFamily: 'Rajdhani_600SemiBold',
  },
  paragraph2: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 0,
    color: 'white',
    fontFamily: 'Rajdhani_600SemiBold',
  },
  paragraph3: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 30,
    color: 'white',
    fontFamily: 'Rajdhani_600SemiBold',
  },
  paragraph4: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 80,
  },
});
