//Component that shows the information of a client

import React, { Component } from 'react';
import {db} from '../config/constants'

//Import of the components used
import Header from './Header'



class Empleado extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      Name: null,
      LastName: null,
      Mail: null,
      Blood: null,
      Birthdate: null,
      AltMail: null,
      ContactHome:{},
      ContactPer:{},
      ContactEmer:{},
      Diseases:[],
      Allergies:[],
      Insurance:{},
      Balance: null
    };

  }


  componentDidMount() {
    const itemsRef = db.ref('/User/'+this.props.id);
    console.log(JSON.stringify(this.state)+ " y " +this.props.id);
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      let allergies=[];
      let diseases=[]; 
      for (let item in items) {
      	console.log("Item: "+ item)
      	if(item==="Allergies"){
      		console.log("Entre en allergies:" +JSON.stringify(items[item]));
	      	for(let allergie in items[item]){
	      		console.log("Item2:"+allergie+" y "+ item[allergie] +" o "+ items[item].allergie+" u" + items[item][allergie]);
	      		allergies.push({
	      			id: allergie,
	          		[allergie]: items[item][allergie]
	        	});
	      	}
	      	this.setState({
        		[item]: allergies
      		});
      	}else if(item==="Diseases"){
      		console.log("Entre en diseases:" +JSON.stringify(items[item]));
	      	for(let disease in items[item]){
	      		diseases.push({
	      			id: disease,
	          		[disease]: items[item][disease]
	        	});
	      	}
	      	this.setState({
        		[item]: diseases
      		});
      	}else{
	        this.setState({
        		[item]: items[item]
      		});
    	}
      }
      console.log("alergias: " + JSON.stringify(allergies));
      console.log("diseases: " + JSON.stringify(diseases));
      console.log("nuevo estado: "+ JSON.stringify(newState));	
      console.log("Estado: "+ JSON.stringify(this.state));
    });
  }

  render() {
      let allergiesNodes = this.state.Allergies.map((allergie) => {	
      return (
        <li>
          <h6> {allergie[allergie.id]} </h6>
        </li>
      )
    });
      let diseasesNodes = this.state.Diseases.map((disease, id) => {
      return (
        <li>
          <h6> {disease[disease.id]} </h6>
        </li>
      )
    });
    return (
      <div className="App">
        <h3>Empleado: {this.state.LastName}, {this.state.Name}</h3>
        	<div className="card">
        		<h4> Relevant Information</h4>
        		<div>Birthdate : {this.state.Birthdate}</div>
        		<div>Blood Type: {this.state.Blood}</div>
        		<div>Balance : {this.state.Balance}</div>
        		<h5> Insurance Information </h5>
	        		<ul>
	        			<li> Agency: {this.state.Insurance.Agency} </li>
	        			<li> Number: {this.state.Insurance.Number} </li>
	        		</ul>	
		        <h4> Allergies </h4>
		        <ol>
		        {allergiesNodes}
		        </ol>
		      	<h4> Diseases </h4>
		      	<ol>
		        {diseasesNodes}
		        </ol> 
	        	<h4> Contact Information </h4>
	        	<h5> Mails </h5>
	        	<ol>
	        		<li> Principal:   {this.state.Mail} </li>
	        		<li> Alternative: {this.state.AltMail} </li>
	        	</ol>
	        	<h5> Personal Contact </h5>
	        	<ul>
	        		<li> Relationship: {this.state.ContactPer.RelationshipPer}</li>
	        		<li> Number: {this.state.ContactPer.PhonePer}</li>
	        		<li> Aditional Information: {this.state.ContactPer.Infoad}</li>
 	        	</ul> 
	        	<h5> Home Contact </h5>
	        	<ul>
	        		<li> Relationship: {this.state.ContactHome.RelationshipH}</li>
	        		<li> Number: {this.state.ContactHome.PhoneH}</li>
	        	</ul> 
	        	<h5> Emergency Contact </h5>
	        	<ul>
	        		<li> Relationship: {this.state.ContactEmer.RelationshipEme}</li>
	        		<li> Number: {this.state.ContactEmer.PhoneEme}</li>
	        	</ul> 
	        </div>
      </div>
    );
  }
  
}
export default Empleado;