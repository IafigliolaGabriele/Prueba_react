import React, { Component } from 'react';
import MessageList from './components/MessageList';
import MessageBox from './components/MessageBox';
import ListClientes from './components/ListClientes';
import FormCliente from './components/FormCliente';
import Header from './components/Header';
import Prueba from './components/Prueba';
import firebase from 'firebase';
import ReactDOM from 'react-dom';
import Empleados from './Empleados';
import Administrador from './Administrador';
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";


class App extends Component {

  constructor(props){
  super(props);
  
}

  render() {
    return (
    	<BrowserRouter>
    	<div>
    	<nav className="navbar">
	        <div className="navbar-brand">
	          <NavLink exact to="/empleado" className="navbar-item">
	          Empleado
	          </NavLink>
	          <NavLink exact to="/administrador" className="navbar-item">
	          Administrador
	          </NavLink>
	        </div>
        </nav>
	          <div className="content">
	             <Route path="/empleado" component={Empleados}/>
                 <Route path="/administrador" component={Administrador}/>
	          </div>
	          <div>
	          </div>
        </div>
        </BrowserRouter>
    );
  }
}

export default App;
