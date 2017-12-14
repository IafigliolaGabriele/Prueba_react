import React, { Component } from 'react';
import MessageList from './components/MessageList';
import MessageBox from './components/MessageBox';
import Header from './components/Header';
import firebase from 'firebase';
import { ref } from './config/constants'

class Empleados extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
        <div className="container">
        <Header title="Simple Firebase App" />
            <div className="columns">
              <div className="column is-3"></div>
              <div className="column is-6">
                 <MessageList />
              </div>
            </div>
            <div className="columns">
              <div className="column is-3"></div>
              <div className="column is-6">
                <MessageBox  />
              </div>
            </div>
        </div>
    );
  }
}

export default Empleados;
