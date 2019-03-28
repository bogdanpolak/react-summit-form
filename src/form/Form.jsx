import React, {Component} from "react";
import PropTypes from 'prop-types';

import FormFieldText from "./FieldText.jsx";
import FieldExtTickets from "./FieldExtTickets.jsx";
import FieldAgreeGDPR from "./FieldAgreeGDPR.jsx";

export default class Form extends Component{

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
        case "one-column":
          return (
            <div key={key} className="form-row">
              <FormFieldText 
                type = {row.field.fieldType}
                id = {row.field.name}
                caption = {row.field.caption}
                feedback = {row.field.feedback}
                isRequired = {row.field.isRequired}
              />
            </div>
          )
        case "two-columns":
          return (
            <div key={key} className="form-row">
              {
                row.fields.map ( (field,idx)=> (
                  <div 
                    key={idx.toString()}
                    className="col-sm-6" >
                    <FormFieldText 
                      type = {field.fieldType}
                      id = {field.name}
                      caption = {field.caption}
                      feedback = {field.feedback}
                      isRequired = {field.isRequired}
                    />
                  </div> 
                ))
              }
            </div>
          )
        case "ext-tickets":
          return (
            <FieldExtTickets 
              key={key}
              ticketValue={row.ticketValue}
              select={row.select}
              total={row.total} />
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