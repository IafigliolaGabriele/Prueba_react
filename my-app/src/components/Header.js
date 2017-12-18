import React, {Component} from 'react';
import Empleados from '../Empleados';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

  

class Header extends Component {

  constructor(props){
  super(props); 
   this.state = {
        type: [props.title]
      };
  }

  render(){
    if(this.state.type=="Administrador"){
      return (
        <nav className="navbar">
          <div className="navbar-brand">
            <NavLink exact to="/" className="navbar-item">
              Home
            </NavLink>
            <NavLink exact to="/empleado" className="navbar-item">
            Empleado
            </NavLink>
            <NavLink exact to="/administrador" className="navbar-item">
            Administrador
            </NavLink>
            <NavLink exact to="/administrador/agregarEmpleado" className="navbar-item">
            AddEmployee
            </NavLink>
            <NavLink exact to="/administrador/verEmpleados" className="navbar-item">
            SeeEmployees
            </NavLink>
            <NavLink exact to="/administrador/verClientes" className="navbar-item">
            SeeClients
            </NavLink>
            <NavLink exact to="/administrador/agregarClientes" className="navbar-item">
            AddClients
            </NavLink>
          </div>
        </nav>
      )
    }else{
      return(
        <h4>{this.state.type}</h4>
      )
    }
  }
}
export default Header