import React, {Component} from "react";
import "./App.css";
import FormRow from "./form/FormRow.jsx";

class App extends Component{
  render(){
    const myForm = [{ 
      rowType: "title",
      title: "Osoba rejestrujaca" 
    },{ 
      rowType: "2col-input",
      fields: [{
        name: "person", 
        caption: "Imię i nazwisko", 
        feedback: "Proszę wprowadzić imię i nazwisko",
        isRequired: true
      },{
        name: "position", 
        caption: "Stanowisko", 
        feedback: "Proszę wprowadzić stanowisko",
        isRequired: true
      }]
    },{ 
      rowType: "2col-input",
      fields: [{
        name: "email", 
        caption: "Email", 
        feedback: "Proszę wprowadzić adres email",
        // <input type="email" />
        inputType: "email",
        isRequired: true
      },{
        name: "phone", 
        caption: "Telefon (najlepiej mobilny)", 
        feedback: "Proszę wprowadzić nr telefonu",
        isRequired: true
      }]
    },{ 
      rowType: "title",
      title: "Bilety" 
    }]

    /*
    {entry.isRequired ? required : ""} 
    .map. (row.rowType === "2col-input") ?
    */
    return(
      <section className="container">
        <form id="form-ticket" className="needs-validation" noValidate>
          {myForm.map((row,idx)=><FormRow row={row} key={idx.toString()}/>)}
        </form>
        <div className="react-alert">  React: Hello, World! </div>
      </section>
    );
  }
}

export default App;