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
  HashRouter
} from "react-router-dom";


class App extends Component {

  constructor(props){
  super(props);
  
}

  render() {
    return (
    	<HashRouter>
    	<div>
	          <div className="content">
	             <Header title="Simple Firebase App" />
	             <Route path="/empleado" component={Empleados}/>
                 <Route path="/administrador" component={Administrador}/>
	          </div>
	          <div>
	          </div>
        </div>
        </HashRouter>
    );
  }
}

export default App;
