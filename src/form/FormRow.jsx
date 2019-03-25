import React, {Component} from "react";
import PropTypes from 'prop-types';
import FormFieldText from "./FormFieldText.jsx";
import FormFieldEmail from "./FormFieldEmail.jsx";

class FormRow extends Component{
  render() {
    const rowType = this.props.row.rowType;
    var rowDOM;
    if (rowType === "2col-input") {
      const columns = this.props.row.fields.map ( (field,idx) => {
        const fieldDOM = (field.inputType === "email") ?
          <FormFieldEmail field={field}/>
        :  
          <FormFieldText field={field}/>
        return <div className="col-sm-6" key={idx.toString()}>{fieldDOM}</div>
      } );
      rowDOM = <div className="form-row">{columns}</div> 
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