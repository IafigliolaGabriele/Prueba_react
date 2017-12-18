import React, {Component} from 'react';
import {db} from '../config/constants';

class FormEmpleado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: null,
      LastName: null,
      Mail: null,
      Blood: null,
      Birthdate: null,
      AltMail: null,
      ContactHome:{
        PhoneH:null,
        RelationshipH:null
        },
      ContactPer:{
        Infoad:null,
        PhonePer:null,
        RelationshipPer:null
      },
      ContactEmer:{
        PhoneEme:null,
        RelationshipEme:null
      },
      Diseases:{},
      Allergies:{},
      Insurance:{
        Agency: null,
        Number: null
      },
      Balance: 0,
      btAllergies: [],
      btDiseases: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAllergyAdd = this.handleAllergyAdd.bind(this);
    this.handleDiseaseAdd = this.handleDiseaseAdd.bind(this);
    this.handleAllergyRemove = this.handleAllergyRemove.bind(this);
    this.handleDiseaseRemove = this.handleDiseaseRemove.bind(this);
  }

  componentDidMount(){
    const itemsRef = db.ref('/User/'+this.props.id);
    if(this.props.action==='Edit'){
       itemsRef.on('value', (snapshot) => {
          this.modifyValues(snapshot.val());
      });
    }
  }

  modifyValues(values){
      let items = values;
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
            this.setState({
            [item[allergie]]:items[item][allergie]
          });
          }
          this.setState({
            ['btAllergies']: allergies
          });
        }else if(item==="Diseases"){
          console.log("Entre en diseases:" +JSON.stringify(items[item]));
          for(let disease in items[item]){
            diseases.push({
              id: disease,
                [disease]: items[item][disease]
            });
            this.setState({
            [item[disease]]:items[item][disease]
          });
          }
          this.setState({
            ['btDiseases']: diseases
          });
        }else{
          this.setState({
            [item]: items[item]
          });
      }
        
      }
      console.log("Preuba: "+JSON.stringify(this.state));
  }

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

  handleAllergyAdd(event){
    this.setState({
      btAllergies: this.state.btAllergies.concat(
        [{Allergie: null}]
        )
    })
    console.log('Alergias: '+JSON.stringify(this.state.btAllergies));
  }

  handleDiseaseAdd(event){
    this.setState({
      btDiseases: this.state.btDiseases.concat(
        [{Disease: null}]
        )
    })
    console.log('Alergias: '+JSON.stringify(this.state.btDiseases));
  }

  handleAllergyRemove(event){
    var aux= this.state.btAllergies;
    var aux2= this.state.Allergies;
    var text = 'Allergy'.concat(aux.length);
    aux2[text]="";
    aux.splice(aux.length-1,1);
    this.setState({
      btAllergies: aux,
      Allergies: aux2
    })
  }

  handleDiseaseRemove(event){
    var aux= this.state.btDiseases;
    var aux2 =this.state.Diseases;
    var text = 'Disease'.concat(aux.length);
    aux2[text]="";
    aux.splice(aux.length-1,1);
    this.setState({
      btDiseases: aux,
      Diseases: aux2
    })
  }

   handleSubmit(event) {
   // alert('Your favorite flavor is: ' + this.state.Nombre);
    var vacio=[];
    var integro = true;
    var newPostKey=null;

    for(let item in this.state){
      console.log("Item: "+item+"[y]"+this.state[item]);
      if(this.state[item] instanceof Object){
        for(let item2 in this.state[item] ){
          console.log('Dentro:'+item2);
          if(this.state[item][item2]===null){
            integro=false;
            alert('The input '+item2+' from'+item+'  must be filled');
            break;
          }      
        }
      }else if(this.state[item]===null){
        integro=false;
        alert('The input '+item+' must be filled');
        break;
      }else if(item.indexOf('Mail')!=-1){
        if(this.state[item].indexOf('@')===-1){
          integro = false;
          alert('The value of'+item+' must contain @something');
            break;
        }  
      }
    }

    console.log("Estado: "+JSON.stringify(this.state));
    if(integro){
      this.state.btAllergies=vacio;
      this.state.btDiseases=vacio;
      let cliente = this.state;
      if(this.props.action==='Edit'){
        newPostKey = this.props.id;
        console.log('Key:' + newPostKey);
        console.log(JSON.stringify(cliente));
        db.ref('/User/'+this.props.id).update(cliente);
      }else{
        newPostKey = db.ref().child('User').push().key;
        console.log('Key:' + newPostKey);
        console.log(JSON.stringify(cliente));
        db.ref('/User/'+newPostKey).update(cliente);
      }
      
    }else{
     //alert('All the inputs must be full ');
    }
    //document.getElementById("miForm").reset();
    event.preventDefault();

  }

  render() {

    return (
      <div>
      <h1> Employee Form </h1>
      <form id='miForm' onSubmit={this.handleSubmit}>
        <label>
          Name
          <input name="Name" type="text" value={this.state.Name} placeholder="Nombre" onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          LastName
          <input name="LastName" type="text" value={this.state.LastName} placeholder="Apellido" onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Email
          <input name="Mail" type="email" value={this.state.Mail} placeholder="taco@correo.com" onChange={this.handleInputChange}/>
        </label>
        <br />
        <label>
          Alternative Email
          <input name="AltMail" type="email" value={this.state.AltMail} placeholder="alt@correo.com" onChange={this.handleInputChange} /> 
         </label> 
         <br />
         <label>
          Blood Type
          <input name="Blood" type="text" value={this.state.Blood} placeholder="Blood Type" onChange={this.handleInputChange}/>
          </label>
          <br />
          <label>
          Birthdate
          <input name="Birthdate" type="date" value={this.state.Birthdate} onChange={this.handleInputChange}/>  
          </label>
          <br />
          <h3> Diseases</h3>
          {
            this.state.btDiseases.map((disease,id)=>(
              <label>
                Disease
                <input type='text' name={'Disease'.concat(id+1)} value={disease[disease.id]} placeholder='Disease' onChange={this.handleInputChange}/>
               <br/>
               </label>
            ))
          }
          <button type="button" onClick={this.handleDiseaseAdd} className="small"> Add Disease </button>
          <button type="button" onClick={this.handleDiseaseRemove} className="small"> Remove Disease </button>
          <br/>
          <h3>Allergies</h3>
          {
            this.state.btAllergies.map((allergie,id)=>(
              <label>
                Allergy
                <input type='text' name={'Allergy'.concat(id+1)} value={allergie[allergie.id]} placeholder='Allergy' onChange={this.handleInputChange}/>
                <br/>
              </label>
            ))
          }
          <br/>
          <button type="button" onClick={this.handleAllergyAdd} className="small"> Add Allergie </button>
          <button type="button" onClick={this.handleAllergyRemove} className="small"> Remove Allergie </button>
          <br/>
          <h3>Insurance</h3>
          <br/>
          <label>
            Agency
            <input type="text" name="Agency" value={this.state.Insurance.Agency} placeholder='Agency' onChange={this.handleInputChange}/>
          </label>
          <br/>
          <label>
            Number 
            <input type="text" name="Number" value={this.state.Insurance.Number} placeholder='Number' onChange={this.handleInputChange}/>
          </label>
          <br/>
          <h3>Home Contact</h3>
          <br />
          <label>
          Home Phone
          <input name="PhoneH" type="number" value={this.state.ContactHome.PhoneH} placeholder="02122912111" onChange={this.handleInputChange}/>
          </label>
          <br />
          <label>
          Relationship
          <input name="RelationshipH" type="text" value={this.state.ContactHome.RelationshipH}  placeholder="Relationship" onChange={this.handleInputChange}/>
          </label>
          <br />
          <h3>Emergency Contact</h3>
          <br />
          <label>
          Emergency Phone
          <input name="PhoneEme" type="number" value={this.state.ContactEmer.PhoneEme}  placeholder="02122914442" onChange={this.handleInputChange}/>
          </label>
          <br />
          <label>
          Relationship
          <input name="RelationshipEme" type="text" value={this.state.ContactEmer.RelationshipEme} placeholder="Relationship" onChange={this.handleInputChange}/>
          </label>
          <br />
          <h3>Personal Contact</h3>
          <br />
          <label>
            Aditional Information
            <input name="Infoad" type="text" value={this.state.ContactPer.Infoad} placeholder="Aditional Information" onChange={this.handleInputChange}/>
          </label>
          <br />
          <label>
          Personal Phone
          <input name="PhonePer" type="number"  value={this.state.ContactPer.PhonePer} placeholder="02122914442" onChange={this.handleInputChange}/>
          </label>
          <br />
          <label>
          Relationship
          <input name="RelationshipPer" type="text" value={this.state.ContactPer.RelationshipPer} placeholder="Relationship" onChange={this.handleInputChange}/>
          </label>
          <br />
      </form>
          <button type="button" onClick={this.handleSubmit}> Add Employee </button>
      </div>
    );
  }
}

export default FormEmpleado
