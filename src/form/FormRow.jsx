import React, {Component} from "react";
import PropTypes from 'prop-types';
import FormFieldText from "./FormFieldText.jsx";
import FormFieldEmail from "./FormFieldEmail.jsx";
import FormFieldExtTicketCounter from "./FormFieldExtTicketCounter.jsx";

const ticketValue = 699;

class FormRow extends Component{
  __renderField (field) {
    let fd;
    if (field.fieldType === "email") {
      fd = <FormFieldEmail field={field}/>
    } else if (field.fieldType === "ext-ticket-counter") {
      fd = <FormFieldExtTicketCounter field={field} ticketValue={ticketValue}/>
    } else {
      fd = <FormFieldText field={field}/>
    }
    return fd
  }
  __renderRowWithOneColumn (field) {
    return <div className="form-row">{this.__renderField (field)}</div> 
  }
  __renderRowWithTwoColumns (fields) {
    const columns = fields.map ( (field,idx) => {
      return (
        <div className="col-sm-6" key={idx.toString()}>
          {this.__renderField (field)}
        </div>
      )});
    return <div className="form-row">{columns}</div> 
  }
  render() {
    const rowType = this.props.row.rowType;
    var rowDOM;
    if (rowType === "1col-input") {
      if (this.props.row.fields instanceof Array)
        rowDOM = this.__renderRowWithOneColumn (this.props.row.fields[0])
    } else if (rowType === "2col-input") {
      rowDOM = this.__renderRowWithTwoColumns (this.props.row.fields)
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