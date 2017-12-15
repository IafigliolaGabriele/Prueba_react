import React, {Component} from 'react';
import Cliente from './Cliente';
import _ from 'lodash';
import {db} from '../config/constants'

class ListClientes extends Component {

  constructor(props){
    super(props);
      this.state = {
        clientes: []
      };
    let app = db.ref('Clientes');
    console.log(app);
    app.on('value', snapshot => {
      this.getData(snapshot.val());
    });
  }

  getData(values){
    let clientesVal = values;
      console.log(values);
    let clientes = _(clientesVal)
                      .keys()
                      .map(messageKey => {
                          let cloned = _.clone(clientesVal[messageKey]);
                          cloned.key = messageKey;
                          return cloned;
                      })
                      .value();
      this.setState({
        clientes: clientes
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
    let clienteNodes = this.state.clientes.map((cliente) => {
      return (
        <div className="card">
          <div className="card-content">
            <Cliente nombre = {cliente.Nombre} apellido={cliente.Apellido} telefonos={cliente.Telefonos} correo={cliente.Correo} />
          </div>
        </div>
      )
    });
    return (
      <div>
        {clienteNodes}
      </div>
    );
  }
}

export default ListClientes
