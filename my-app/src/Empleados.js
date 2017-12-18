import React, { Component } from 'react';
import FormEmpleado from './components/FormEmpleado';
import Empleado from './components/Empleado';
import Header from './components/Header';
import firebase from 'firebase';
import { ref } from './config/constants'
import {
  Route,
  NavLink,
  BrowserRouter,
  Link
} from "react-router-dom";

class Empleados extends Component {

  constructor(props){
    super(props);
  }

/*
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
*/

  render() {
    return (
        <div className="container">
               <Route exact path="/empleado/agregarEmpleado" component={FormEmpleado}/>
               <Route exact path="/administrador" component={Empleado}/>
        </div>
    );
  }
}

export default Empleados;
