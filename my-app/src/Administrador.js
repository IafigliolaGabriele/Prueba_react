import React, { Component } from 'react';
import MessageList from './components/MessageList';
import MessageBox from './components/MessageBox';
import ListClientes from './components/ListClientes';
import ListEmpleados from './components/ListEmpleados';
import FormCliente from './components/FormCliente';
import FormEmpleado from './components/FormEmpleado';
import Header from './components/Header';
import Prueba from './components/Prueba';
import firebase from 'firebase';
import ReactDOM from 'react-dom';
import Empleados from './Empleados';
import Empleado from './components/Empleado';
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
    		<Header title="Administrador"/>
	        <div className="container">
	           <Route exact path="/administrador/agregarEmpleado" component={FormEmpleado}/>
               <Route exact path="/administrador/verEmpleados" component={ListEmpleados}/>
               <Route exact path="/administrador/verClientes" component={ListClientes}/>
               <Route exact path="/administrador/agregarClientes" component={FormCliente} type="Editar"/>
	        </div>
        </div>
    );
  }
}

export default Administrador;
