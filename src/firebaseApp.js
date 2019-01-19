import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyApJYzeSavB9kcmISz3a3cGnWLGtDAOkOQ",
  authDomain: "purin-c1d5b.firebaseapp.com",
  databaseURL: "https://purin-c1d5b.firebaseio.com",
  projectId: "purin-c1d5b",
  storageBucket: "purin-c1d5b.appspot.com",
  messagingSenderId: "1001117497659"
};


export const firebaseApp = firebase.initializeApp(config);
