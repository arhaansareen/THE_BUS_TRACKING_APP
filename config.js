import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyA42hjBWyJdCoCBEH0csDJqT_kMHGmLsGw",
  authDomain: "bus-tracking-app-c413f.firebaseapp.com",
  projectId: "bus-tracking-app-c413f",
  storageBucket: "bus-tracking-app-c413f.appspot.com",
  messagingSenderId: "572919008122",
  appId: "1:572919008122:web:35a685c80795e4ac55e4c3"
};

// Initialize Firebase
if(!firebase.apps.length){ firebase.initializeApp(firebaseConfig); }
export default firebase.firestore()