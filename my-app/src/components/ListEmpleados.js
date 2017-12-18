import React, {Component} from 'react';
import Empleado from './Empleado';
import FormEmpleado from './FormEmpleado';
import _ from 'lodash';
import {db} from '../config/constants'

class ListEmpleados extends Component {

  constructor(props){
    super(props);
    console.log("Constructor ListEmpleados");
    this.state = {
        empleados: [],
        UserId: null,
        Action: null
      };  
  }

  handleSubmit(id) {
   // alert('Your favorite flavor is: ' + this.state.Nombre);
    console.log("id: "+id.key);
    this.setState({
      UserId: id.key,
      Action: 'See'
    });
  }

    handleEdit(id) {
   // alert('Your favorite flavor is: ' + this.state.Nombre);
    console.log("id: "+id.key);
    this.setState({
      UserId: id.key,
      Action: 'Edit'
    });
  }

  handleBack(event) {
   // alert('Your favorite flavor is: ' + this.state.Nombre);
    this.setState({
      UserId: null
    });
  }


  componentDidMount() {
    console.log("ListEmpleados Mounted");
      this.state = {
        empleados: []
      };
    let app = db.ref('User');
    console.log(app);
    app.on('value', snapshot => {
      this.getData(snapshot.val());
    });
  }

  componentWillUnmount(){
    console.log("Unmouting: ListEmpleados");
    db.ref('User').off();
  }

  getData(values){
    let empleadosVal = values;
    console.log("valores: "+values);
    let empleados = _(empleadosVal)
                      .keys()
                      .map(messageKey => {
                          let cloned = _.clone(empleadosVal[messageKey]);
                          cloned.key = messageKey;
                          return cloned;
                      })
                      .value();
      console.log("valores2: "+JSON.stringify(empleados));                
      this.setState({
        empleados: empleados
      });
  }

/*
  getData(values){
    let clientesVal = values;
    console.log(values);
    let clientes = _(clientesVal)
                      .keys()
                      .map(clienteKey => {
                          let cloned = _.clone(clientesVal[clienteKey]);
                          cloned.key = clienteKey;
                          return cloned;
                      })
                      .value();
      this.setState({
        clientes: clientes
      });
  }
*/
  render() {
    let empleadosNodes = this.state.empleados.map((empleado) => {
      return (
        
          <tr>
            <td> {empleado.Name}</td>      
            <td> {empleado.LastName}</td> 
            <td> <button type="button" onClick={this.handleSubmit.bind(this,empleado)}> See Employee </button> </td>
             <td> <button type="button" onClick={this.handleEdit.bind(this,empleado)}> Edit Employee </button> </td>      
          </tr>
        
      )
    });
    if(this.state.UserId===null){
      return (
        <div className="card">
          <div className="card-content">
          <table>
           <thead>
           <th>Nombre</th>
           <th>Apellido</th>
           <th>Boton Agregar</th>
           <th>Boton Editar</th>
           </thead>
           <tbody>
            {empleadosNodes}
            </tbody>
          </table>
             </div>
        </div>
      );
      }else if(this.state.Action==="See"){
      return (
        <div className="card">
          <button type="button" onClick={this.handleBack.bind(this)}> Return </button>
          <Empleado id={this.state.UserId} />
        </div>
      );
      }else{
      return (
        <div className="card">
          <button type="button" onClick={this.handleBack.bind(this)}> Return </button>
          <FormEmpleado id={this.state.UserId} action={this.state.Action} />
        </div>
      );  
      }
    }
  
}

export default ListEmpleados
