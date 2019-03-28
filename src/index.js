import React from "react";
import ReactDOM from "react-dom";
import Form from "./form/Form.jsx";

const formRederer = {
	validator: {
		errorMessageList: [],
		init: function(){
			this.errorMessageList = [];
		},
		logError: function (msg) {
			this.errorMessageList.push(msg);
		},
		validate: function (sectionID, rootElem, definition) {
			var v1 = (typeof sectionID === "string") || this.logError (
				"param1: sectionID string paramerer is required");
			var v2 = (rootElem !== null) || this.logError (
				"param1: sectionID has to be proper id of the HTML element");
			var v3 = (typeof definition === "object") || this.logError (
				"param2: formDefinition has to be object");
			var v4 = v3 && (typeof definition.formID === "string" || this.logError (
				"param2: formDefinition.formID: string is required"));
			var v5 = v3 && (Array.isArray(definition.model) ||  this.logError (
				"param2: formDefinition.model: Array is required"));
			return v1 && v2 && v3 && v4 && v5;
		},
	},
	reportErrors: function(errors) {
		return errors.map ( (msg) => console.error(msg) )
	},
	generate: function (sectionID, formDefinition) {
		this.validator.init();
		const elem = document.getElementById(sectionID);
		if (this.validator.validate (sectionID, elem, formDefinition)) {
			ReactDOM.render( <Form 
				formID={formDefinition.formID} 
				formModel={formDefinition.model}/> , 
			elem);
		} else {
			this.reportErrors(this.validator.errorMessageList);
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
