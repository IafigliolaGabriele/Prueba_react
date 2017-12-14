import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAuQnXRc7jhSnulqOY7qZ0Xzrt2NCv0KmI",
    authDomain: "prueba-react-8a044.firebaseapp.com",
    databaseURL: "https://prueba-react-8a044.firebaseio.com",
    projectId: "prueba-react-8a044",
    storageBucket: "prueba-react-8a044.appspot.com",
    messagingSenderId: "32856357933"
  };

firebase.initializeApp(config)

export const db = firebase.database()
export const firebaseAuth = firebase.auth