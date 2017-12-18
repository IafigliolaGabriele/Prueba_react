import React, {Component} from 'react';
import Cliente from './Cliente';
import FormCliente from './FormCliente';
import _ from 'lodash';
import {db} from '../config/constants'

class ListClientes extends Component {

  constructor(props){
    super(props);
    this.state = {
        clientes: []
      };
  }

  componentDidMount() {
    let app = db.ref('Clientes');
    console.log(app);
    app.on('value', snapshot => {
      this.getData(snapshot.val());
    });
  }

  getData(values){
    let clientesVal = values;
      console.log("valores: "+JSON.stringify(values));
    let clientes = _(clientesVal)
                      .keys()
                      .map(messageKey => {
                          let cloned = _.clone(clientesVal[messageKey]);
                          cloned.key = messageKey;
                          return cloned;
                      })
                      .value();
      console.log("valores2: "+JSON.stringify(clientes));                 
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
    let clienteNodes = this.state.clientes.map((cliente, id) => {
      return (
        <div className="card">
          <h5>{cliente.keys}</h5>
          <div className="card-content">
            <Cliente cliente = {cliente}  />
          </div>
        </div>
      )
    });
    return (
    <div>  
      <div>
        {clienteNodes}
      </div>
    </div>  
    );
  }
}

export default ListClientes
