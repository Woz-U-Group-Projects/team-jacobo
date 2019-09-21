import * as firebase from 'firebase';

//configuration object
const config = {
    apiKey: "AIzaSyC6sq2OqcOlQL31aK-HHhpT9GGCpDskxrg",
    authDomain: "decideify.firebaseapp.com",
    databaseURL: "https://decideify.firebaseio.com",
    projectId: "decideify",
    storageBucket: "decideify.appspot.com",
    messagingSenderId: "503365699064",
    appId: "1:503365699064:web:971c255a00f1914f5dc20d"
  };

  // Initialize Firebase
firebase.initializeApp(config);

// tests connection to backend NoSQL database on Google Firebase Cloud
firebase.database().ref().set({
    name: 'Alex Jacobo'
  });


//Firebase is a Backend As A Service or BAAS, meaning it is a NoSQL data store that is in the cloud that your clients can access directly in realtime.

//Now this means Firebase has it’s own Realtime Database, Cloud Storage, Authentication, Hosting and many other services.

// The Firebase Realtime Database is a cloud - hosted database.Data is stored as JSON and synchronized in realtime to every connected client.