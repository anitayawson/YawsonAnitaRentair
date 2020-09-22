import * as firebase from 'firebase/app'

import 'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyCZPUQC4CRYyufH35m_Ms1RHcnxAHP-BUM",
    authDomain: "rentair-weather.firebaseapp.com",
    databaseURL: "https://rentair-weather.firebaseio.com",
    projectId: "rentair-weather",
    storageBucket: "rentair-weather.appspot.com",
    messagingSenderId: "696141278160",
    appId: "1:696141278160:web:00f18f789b9abb3c10e7d5",
    measurementId: "G-7BL9M6Z3B5"
  };
   

// // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
