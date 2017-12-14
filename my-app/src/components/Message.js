import React, {Component} from 'react';

class Message extends Component {

  render(){
    return (
    	<div>
	      <div>
	        Nombre: {this.props.message} , Apellido: {this.props.apellido}
	      </div>
	      <div>
	      	Telefonos:
	      </div>
	      <ul>
	      	<li> Telefono1 : {this.props.telefonos[0]} </li>
	      	<li> Telefono2 : {this.props.telefonos[1]} </li>
	      </ul>
	      
	    </div>  
    )
  }
}
export default Message