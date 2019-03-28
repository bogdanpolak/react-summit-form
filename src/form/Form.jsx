import React, {Component} from "react";
import PropTypes from 'prop-types';
import FormFieldText from "./FieldText.jsx";
import FormFieldEmail from "./FieldEmail.jsx";
import FormFieldExtTicketCounter from "./FieldExtTickets.jsx";
import FieldAgreeGDPR from "./FieldAgreeGDPR.jsx";


export default class Form extends Component{

  renderFormField (field) {
    var fd;
    switch (field.fieldType) {
      case "text":
        fd = <FormFieldText field={field}/>
        break
      case "email":
        fd = <FormFieldEmail field={field}/>
        break
      case "ext-ticket-counter":
        fd = <FormFieldExtTicketCounter field={field}/>
        break
    }
    return fd
  }
  
  renderTwoColumns(fields) {
    return fields.map ( 
      (fld,idx) => (
        <div className="col-sm-6" key={idx.toString()}>
          {this.renderFormField (fld)}
        </div> 
      )
    )
  }

  render() {
    var rows = this.props.formModel.map((row,idx)=> {
      var key = idx.toString();
      switch (row.rowType) {
        case "section":
          return (
            <div key={key} className="h6 form-section"> 
              {row.title}:
            </div>
          )
        case "two-columns":
          return (
            <div key={key} className="form-row">
              {this.renderTwoColumns(row.fields)}
            </div>
          )
        case "form-row":
          return Array.isArray(row.fields) && 
            (row.fields.length>0) &&
            (
              <div key={key} className="form-row">
                {this.renderFormField (row.fields[0])}
              </div>
            )
        case "confirm-gdpr":
          return (
            <FieldAgreeGDPR 
              key={key}
              checkboxId={row.name} 
              isRequired={row.isRequired} />
          )
      }
    })
    return (
      <form id={this.props.formID} className="needs-validation" noValidate>
        {rows} 
      </form>
    )
  }

}

Form.propTypes = {
  formID: PropTypes.string,
  formModel: PropTypes.array,
};