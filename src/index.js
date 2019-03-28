import React from "react";
import ReactDOM from "react-dom";
import Form from "./form/Form.jsx";

const formRederer = {
	validate: function (sectionID, rootElem, definition) {
		var v1 = sectionID && (typeof sectionID === "string");
		!v1 && console.error ("param1: sectionID string paramerer is required");
		var v2 = (rootElem !== null);
		!v2 && console.error ("param1: sectionID has to be proper id of the HTML element");
		var v3 = (typeof definition === "object");
		!v3 && console.error ("param2: formDefinition has to be object");
		var v4 = v3 && typeof definition.formID === "string"
		!v4 && console.error ("param2: formDefinition has to be object with string field [formDefinition.formID]");
		var v5 = v3 && Array.isArray(definition.model)
		!v5 && console.error ("param2: formDefinition has to be object with array field [formDefinition.model]");
		// TODO: Test schema of def object
		return v1 && v2 && v3 && v4 && v5;
	},
	generate: function (sectionID, formDefinition) {
		const elem = document.getElementById(sectionID);
		if (this.validate (sectionID, elem, formDefinition)) {
			ReactDOM.render( <Form 
				formID={formDefinition.formID} 
				formModel={formDefinition.model}/> , 
			elem);
		}
	}
}

window.formRederer = formRederer;

/*
const fakeFormDefinition = {
	formID: "sample-fake-form",
	model : [{ 
		rowType: "section",
		title: "Lorem Ipsum" 
	},{ 
		rowType: "2col-input",
		fields: [{
			fieldType: "text",
			name: "fullname", 
			caption: "Imię i nazwisko", 
			feedback: "Proszę wprowadzić imię i nazwisko",
			isRequired: true
		},{
			fieldType: "email",
			name: "email", 
			caption: "Email", 
			feedback: "Proszę wprowadzić adres email",
			isRequired: true
		}]
	}, { 
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
	}] 
}
*/
