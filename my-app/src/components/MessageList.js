import React, {Component} from 'react';
import Message from './Message';
import _ from 'lodash';
import {db} from '../config/constants'
/*
class MessageList extends Component {
  constructor(props){
    super(props);
    this.state = {
      messages: []
    };
    let app = db.ref('Clientes/1/Telefonos');
    app.on('value', snapshot => {
      this.getData(snapshot.val());
      console.log(app);
    });
  }

  getData(values){
  	console.log(values)
    let messages = values;
    let messages = _(messagesVal)
                      .keys()
                      .map(messageKey => {
                          let cloned = _.clone(messagesVal[messageKey]);
                          console.log(cloned);
                          //cloned.key = messageKey;
                          return cloned;
                      })
                      .value();
                     
      this.setState({
        messages: messages
      });
  }

  render() {
    let messageNodes = this.state.messages.map((message) => {
      return (
        <div className="card">
          <div className="card-content">
           	 <Message message = {message} />
          </div>
        </div>
      )
    });
    return (
      <div>
        {messageNodes}
      </div>
    );
  }
}
*/
class MessageList extends Component {
  constructor(props){
    super(props);
    this.state = {
      messages: []
    };
  }

   componentDidMount() {
    this.state = {
      messages: []
    };
    let app = db.ref('messages');
    console.log(app);
    app.on('value', snapshot => {
      this.getData(snapshot.val());
    });
  }

  getData(values){
    let messagesVal = values;
    	console.log(values);
    let messages = _(messagesVal)
                      .keys()
                      .map(messageKey => {
                          let cloned = _.clone(messagesVal[messageKey]);
                          cloned.key = messageKey;
                          return cloned;
                      })
                      .value();
      this.setState({
        messages: messages
      });
  }

  render() {
    let messageNodes = this.state.messages.map((message) => {
      return (
        <div className="card">
          <div className="card-content">
            <Message message = {message.Nombre} apellido={message.Apellido} telefonos={message.Telefonos} />
          </div>
        </div>
      )
    });
    return (
      <div>
        {messageNodes}
      </div>
    );
  }
}

export default MessageList