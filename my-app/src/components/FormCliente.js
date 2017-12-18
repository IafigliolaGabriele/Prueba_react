import React, {Component} from 'react';
import {db} from '../config/constants';

class FormCliente extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Nombre: null,
      Correo: null,
      Telefonos: { 
        Telefono1: null,
        Telefono2: null
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount(){
    console.log(this.props.type);
  }

  handleInputChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;

    console.log('Nombre o Apellido: '+value);
    if(name==='Nombre' || name==='Apellido' || name==='Correo'){
     this.setState({
      [name]: value
    });

   }else{
     var valores = this.state.Telefonos;
     if(name==='Telefono1'){
        valores['Telefono1']=target.value;
     }else{
        valores['Telefono2']=target.value;
     }
      this.setState({
      ["Telefonos"]: valores
      });
   }

  }

   handleSubmit(event) {
   // alert('Your favorite flavor is: ' + this.state.Nombre);
    let cliente = this.state;
    var newPostKey = db.ref().child('Clientes').push().key;
    console.log('Key:' + newPostKey);
    console.log(JSON.stringify(cliente));
    db.ref('/Clientes/'+newPostKey).update(cliente);
    document.getElementById("miForm").reset();
    event.preventDefault();
  }

  render() {
    return (
      <div>
      <form id='miForm' onSubmit={this.handleSubmit}>
        <label>
          Nombre
          <input name="Nombre" type="text" value={this.state.Nombre} placeholder="Nombre" onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Apellido
          <input name="Apellido" type="text" value={this.state.Apellido} placeholder="Apellido" onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Correo
          <input name="Correo" type="email" placeholder="taco@correo.com" value={this.state.Correo} onChange={this.handleInputChange}/>
        </label>
        <br />
        <label>
          Telefono
          <input name="Telefono1" type="number" placeholder="02120000000" value={this.state.Telefonos.Telefono1} onChange={this.handleInputChange} /> 
         </label> 
         <br />
         <label>
          Telefono2
          <input name="Telefono2" type="number" placeholder="02120000000" value={this.state.Telefonos.Telefono2}onChange={this.handleInputChange}/>
          </label>
          <br />
      </form>

      <button type="button" onClick={this.handleSubmit}> Agregar Cliente </button>
      </div>
    );
  }
}

export default FormCliente
