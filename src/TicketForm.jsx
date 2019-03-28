import React, {Component} from "react";
import Form from "./form/Form.jsx";

const ticketFormModel = [
  { 
    rowType: "section",
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
      fieldType: "email",
      name: "email", 
      caption: "Email", 
      feedback: "Proszę wprowadzić adres email",
      // <input type="email" />
      isRequired: true
    },{
      name: "phone", 
      caption: "Telefon (najlepiej mobilny)", 
      feedback: "Proszę wprowadzić nr telefonu",
      isRequired: true
    }]
  },{ 
    rowType: "section",
    title: "Bilety" 
  },{ 
    rowType: "1col-input",
    fields: [{
      fieldType: "ext-ticket-counter",
      name: "tickets",
      caption: "Liczba biletów",
      valueRange: {min:1, max:7},
      ticketValue: 799,
      totalName: "totalTicketValue",
      totalCaption: "Koszt całkowity netto"
    }]
  }
]; 

class TicketForm extends Component{
  render(){
    return (
      <Form formModel={ticketFormModel}/>
    );
  }
}

export default TicketForm;