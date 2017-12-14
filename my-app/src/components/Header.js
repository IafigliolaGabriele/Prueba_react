import React, {Component} from 'react';
import Empleados from '../Empleados';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

class Header extends Component {

  render(){
    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <NavLink exact to="/" className="navbar-item">
          {this.props.title}
          </NavLink>
          <NavLink exact to="/empleado" className="navbar-item">
          Empleado
          </NavLink>
          <NavLink exact to="/administrador" className="navbar-item">
          Administrador
          </NavLink>
        </div>
      </nav>
    )
  }
}
export default Header