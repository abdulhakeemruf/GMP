import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBhjAVmpKwSqeky0oGxY8VGVn26CLO3hDk",
  authDomain: "gmp01-e0bd0.firebaseapp.com",
  projectId: "gmp01-e0bd0",
  storageBucket: "gmp01-e0bd0.appspot.com",
  messagingSenderId: "1054428150443",
  appId: "1:1054428150443:web:3075ac3343de945b6095ee",
  measurementId: "G-7N8HZBLVQB"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };