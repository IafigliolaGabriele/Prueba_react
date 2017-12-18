import React, {Component} from 'react';

class Cliente extends Component {

  render(){
    return (
    	<div>
    		<h1>Cliente</h1>
	      <div>
	        Nombre: {this.props.cliente.Nombre} , Apellido: {this.props.cliente.Apellido}
	      </div>
	      <div>
	      	Correo: {this.props.cliente.Correo}
	      </div>
	      <div>
	      	Telefonos:
	      </div>
	      <ul>
	      	<li> Telefono1 : {this.props.cliente.Telefonos['Telefono1']} </li>
	      	<li> Telefono2 : {this.props.cliente.Telefonos['Telefono2']} </li>
	      </ul>
	      
	    </div>  
    )
  }
}
export default Cliente