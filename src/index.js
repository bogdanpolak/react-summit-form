import React from "react";
import ReactDOM from "react-dom";
import Form from "./form/Form.jsx";

const reactFormRederer = {
	reportErrors: function(errors) {
		return errors.map ( (msg) => console.error(msg) )
	},
	generate: function (sectionID, formDefinition) {
		const htmlRootElem = document.getElementById(sectionID);
		const isValid = paramsValidator.validate (
			sectionID, htmlRootElem, formDefinition
		);
		if (isValid) {
			ReactDOM.render( 
				<Form 
					formID={formDefinition.formID} 
					formModel={formDefinition.model} /> , 
				htmlRootElem
			);
		} else {
			this.reportErrors(paramsValidator.errorMessageList);
		}
	}
}

const paramsValidator = {
	errorMessageList: [],
	logError: function (msg) {
		this.errorMessageList.push(msg);
	},
	validate: function (sectionID, rootElem, definition) {
		this.errorMessageList = [];
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
}


window.reactFormRederer = reactFormRederer;
