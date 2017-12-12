import React, { Component } from 'react';
import MessageList from './components/MessageList';
import MessageBox from './components/MessageBox';
import Header from './components/Header';
import firebase from 'firebase';

class App extends Component {

  constructor(props){
  super(props);
  var config = {
    apiKey: "AIzaSyAuQnXRc7jhSnulqOY7qZ0Xzrt2NCv0KmI",
    authDomain: "prueba-react-8a044.firebaseapp.com",
    databaseURL: "https://prueba-react-8a044.firebaseio.com",
    projectId: "prueba-react-8a044",
    storageBucket: "prueba-react-8a044.appspot.com",
    messagingSenderId: "32856357933"
  };
  firebase.initializeApp(config);
}

  render() {
    return (
        <div className="container">
            <Header title="Simple Firebase App" />
            <div className="columns">
              <div className="column is-3"></div>
              <div className="column is-6">
                 <MessageList db={firebase} />
              </div>
            </div>
            <div className="columns">
              <div className="column is-3"></div>
              <div className="column is-6">
                <MessageBox db={firebase} />
              </div>
            </div>
        </div>
    );
  }
}

export default App;
