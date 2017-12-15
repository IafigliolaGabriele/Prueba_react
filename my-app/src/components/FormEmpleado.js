import React, {Component} from 'react';
import {db} from '../config/constants';

class FormEmpleado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: '',
      LastName: '',
      Mail: '',
      Blood: '',
      Birthdate: '',
      AltMail: '',
      ContactHome:{},
      ContactPer:{},
      ContactEmer:{},
      Diseases:{},
      Allergies:{},
      Insurance:{},
      btAllergies: [],
      btDiseases: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAllergyChange = this.handleAllergyChange.bind(this);
    this.handleDiseaseChange = this.handleDiseaseChange.bind(this);
  }


  //'Allergy'===name.substring(0,7)

  handleInputChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    var valores = this.state.ContactHome;

    console.log('Nombre o Apellido: '+name);
    if(name==='Name' || name==='LastName' || name==='Mail' || name==='Blood' || name==='Birthdate' || name==='AltMail'){
     this.setState({
      [name]: value
    });

   }else if('Allergy'===name.substring(0,7)){
      valores=this.state.Allergies;
      valores[name]=value;
      this.setState({
        ['Allergies']: valores
      });
   }else if('Disease'===name.substring(0,7)){
      valores=this.state.Diseases;
      valores[name]=value;
      this.setState({
        ['Diseases']: valores
      });
   }else{
     if(name==='RelationshipPer' || name==='PhonePer' || name=="Infoad"){
      valores=this.state.ContactPer;
      valores[name]=value;
      this.setState({
        ['ContactPer']: valores
      });
     }else if(name==='RelationshipEme' || name==='PhoneEme'){
      valores=this.state.ContactEmer;
      valores[name]=value;
      this.setState({
        ['ContactEmer']: valores
      });
     }else if(name==='RelationshipH' || name==='PhoneH'){
      valores[name]=value;
      this.setState({
        ['ContactHome']: valores
      });
     }else{
      valores= this.state.Insurance;
      valores[name]=value;
      this.setState({
        ['Insurance']: valores
      });
     }
   }
  }

  handleAllergyChange(){
    console.log(this.state.btAllergies.length);
    var name='text';
    this.setState({
      btAllergies: this.state.btAllergies.concat(
        [{Allergie: ''}]
        )
    })
    console.log('Alergias: '+JSON.stringify(this.state.btAllergies));
  }

  handleDiseaseChange(){
    console.log(this.state.btDiseases.length);
    this.setState({
      btDiseases: this.state.btDiseases.concat(
        [{Disease: ''}]
        )
    })
    console.log('Alergias: '+JSON.stringify(this.state.btDiseases));
  }

   handleSubmit(event) {
   // alert('Your favorite flavor is: ' + this.state.Nombre);
    var vacio=[];
    this.state.btAllergies=vacio;
    this.state.btDiseases=vacio;
    let cliente = this.state;
    var newPostKey = db.ref().child('User').push().key;
    console.log('Key:' + newPostKey);
    console.log(JSON.stringify(cliente));
    db.ref('/User/'+newPostKey).update(cliente);
    document.getElementById("miForm").reset();
    event.preventDefault();

  }

  render() {

    return (
      <div>
      <form id='miForm' onSubmit={this.handleSubmit}>
        <label>
          <h5> Name </h5>
          <input name="Name" type="text" placeholder="Nombre" onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          LastName
          <input name="LastName" type="text" placeholder="Apellido" onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Email
          <input name="Mail" type="email" placeholder="taco@correo.com" onChange={this.handleInputChange}/>
        </label>
        <br />
        <label>
          Alternative Email
          <input name="AltMail" type="email" placeholder="alt@correo.com" onChange={this.handleInputChange} /> 
         </label> 
         <br />
         <label>
          Blood Type
          <input name="Blood" type="text" placeholder="Blood Type" onChange={this.handleInputChange}/>
          </label>
          <br />
          <label>
          Birthdate
          <input name="Birthdate" type="date" onChange={this.handleInputChange}/>  
          </label>
          <br />
          <h3> Diseases</h3>
          {
            this.state.btDiseases.map((disease,id)=>(
              <label>
                Disease
                <input type='text' name={'Disease'.concat(id+1)} placeholder='disease' onChange={this.handleInputChange}/>
               <br/>
               </label>
            ))
          }
          <button type="button" onClick={this.handleDiseaseChange} className="small"> Add Disease </button>
          <br/>
          <h3>Allergies</h3>
          {
            this.state.btAllergies.map((allergie,id)=>(
              <label>
                Allergy
                <input type='text' name={'Allergy'.concat(id+1)} placeholder='alergia' onChange={this.handleInputChange}/>
                <br/>
              </label>
            ))
          }
          <br/>
          <button type="button" onClick={this.handleAllergyChange} className="small"> Add Allergie </button>
          <br/>
          <h3>Insurance</h3>
          <br/>
          <label>
            Agency
            <input type="text" name="Agency" placeholder='Agency' onChange={this.handleInputChange}/>
          </label>
          <br/>
          <label>
            Number 
            <input type="text" name="Number" placeholder='Number' onChange={this.handleInputChange}/>
          </label>
          <br/>
          <h3>Home Contact</h3>
          <br />
          <label>
          Home Phone
          <input name="PhoneH" type="number"  placeholder="02122912111" onChange={this.handleInputChange}/>
          </label>
          <br />
          <label>
          Relationship
          <input name="RelationshipH" type="text" placeholder="Relationship" onChange={this.handleInputChange}/>
          </label>
          <br />
          <h3>Emergency Contact</h3>
          <br />
          <label>
          Emergency Phone
          <input name="PhoneEme" type="number"  placeholder="02122914442" onChange={this.handleInputChange}/>
          </label>
          <br />
          <label>
          Relationship
          <input name="RelationshipEme" type="text" placeholder="Relationship" onChange={this.handleInputChange}/>
          </label>
          <br />
          <h3>Personal Contact</h3>
          <br />
          <label>
            Aditional Information
            <input name="Infoad" type="text" placeholder="Aditional Information" onChange={this.handleInputChange}/>
          </label>
          <br />
          <label>
          Personal Phone
          <input name="PhonePer" type="number"  placeholder="02122914442" onChange={this.handleInputChange}/>
          </label>
          <br />
          <label>
          Relationship
          <input name="RelationshipPer" type="text" placeholder="Relationship" onChange={this.handleInputChange}/>
          </label>
          <br />
      </form>

      <button type="button" onClick={this.handleSubmit}> Add Employee </button>
      </div>
    );
  }
}

export default FormEmpleado
