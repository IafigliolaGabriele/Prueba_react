import React, {Component} from 'react';
import {db} from '../config/constants';
import firebase from 'firebase';

class Prueba extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Nombre: 'Juan',
      Apellido: 'Perez',
      Telefonos: { }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

  }

  handleInputChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log('Nombre o Apellido: '+value);
    if(name=='Nombre' || name=='Apellido'){
     this.setState({
      [name]: value
    });
   }else{
     var valores = this.state.Telefonos;
     var index=0;
     if(name=='Telefono1'){
        valores[0]=target.value;
     }else{
        valores[1]=target.value;
     }
      this.setState({
      ["Telefonos"]: valores
      });
   }

  }

   handleSubmit(event) {
   // alert('Your favorite flavor is: ' + this.state.Nombre);
    let cliente = this.state;
    var newPostKey = db.ref().child('messages').push().key;
    console.log('Key:' + newPostKey);
    console.log(JSON.stringify(cliente));
    db.ref('/messages/'+newPostKey).update(cliente);
    event.preventDefault();
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Nombre
          <input
            name="Nombre"
            type="text"
            value={this.state.Nombre}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Apellido
          <input name="Apellido" type="text" placeholder="Apellido" onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Telefono
          <input name="Telefono1" type="number" placeholder="0212 0000000" onChange={this.handleInputChange} /> 
         </label> 
         <br />
         <label>
          Telefono2
          <input name="Telefono2" type="number" placeholder="0212 0000000" onChange={this.handleInputChange}/>
          </label>
          <br />
      </form>

      <button type="button" onClick={this.handleSubmit}> Agregar Cliente </button>
      </div>
    );
  }
}

export default Prueba
