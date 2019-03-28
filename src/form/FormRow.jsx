import React, {Component} from "react";
import PropTypes from 'prop-types';
import FormFieldText from "./FormFieldText.jsx";
import FormFieldEmail from "./FormFieldEmail.jsx";
import FormFieldExtTicketCounter from "./FormFieldExtTicketCounter.jsx";

const ticketValue = 699;

class FormRow extends Component{
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
        fd = <FormFieldExtTicketCounter field={field} ticketValue={ticketValue}/>
        break
    }
    return fd
  }
  render() {
    const rowType = this.props.row.rowType;
    var rowDOM;
    if (rowType === "form-row") {
      rowDOM = (Array.isArray(this.props.row.fields)) && 
        (this.props.row.fields.length>0) &&
        (<div className="form-row">
          {this.renderFormField (this.props.row.fields[0])}
        </div>)
    } else if (rowType === "two-columns") {
      const cols = this.props.row.fields.map ( (fld,idx) =>
        <div className="col-sm-6" key={idx.toString()}>
          {this.renderFormField (fld)}
        </div> );
      rowDOM = <div className="form-row">{cols}</div>
    } else if (rowType === "section") {
      rowDOM = <div className="h6 form-section">{this.props.row.title}:</div>
    }
    return rowDOM;
  }
}
FormRow.propTypes = {
  row: PropTypes.object,
};
export default FormRow;