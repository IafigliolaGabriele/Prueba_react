import React, { Component } from 'react';
import MessageList from './components/MessageList';
import MessageBox from './components/MessageBox';
import ListClientes from './components/ListClientes';
import FormCliente from './components/FormCliente';
import FormEmpleado from './components/FormEmpleado';
import Header from './components/Header';
import Prueba from './components/Prueba';
import firebase from 'firebase';
import ReactDOM from 'react-dom';
import Empleados from './Empleados';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";


class Administrador extends Component {

  constructor(props){
  super(props);
  
}

  render() {
    return (
    	<div>
	        <div className="container">
	            <div className="columns">
	              <div className="column is-3"></div>
	              <div className="column is-6">
	                 <ListClientes />
	              </div>
	            </div>
	            <div className="columns">
	              <div className="column is-3"></div>
	              <div className="column is-6">
	                <FormEmpleado />
	              </div>
	            </div>
	            
	        </div>
        </div>
    );
  }
}

export default Administrador;
