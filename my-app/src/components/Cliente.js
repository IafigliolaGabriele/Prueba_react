import React, {Component} from 'react';

class Cliente extends Component {

  render(){
    return (
    	<div>
    		<h1>Cliente</h1>
	      <div>
	        Nombre: {this.props.nombre} , Apellido: {this.props.apellido}
	      </div>
	      <div>
	      	Correo: {this.props.correo}
	      </div>
	      <div>
	      	Telefonos:
	      </div>
	      <ul>
	      	<li> Telefono1 : {this.props.telefonos['Telefono1']} </li>
	      	<li> Telefono2 : {this.props.telefonos['Telefono2']} </li>
	      </ul>
	      
	    </div>  
    )
  }
}
export default Cliente