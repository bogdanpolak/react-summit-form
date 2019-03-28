import React, {Component} from "react";
import PropTypes from 'prop-types';
import FormFieldText from "./FormFieldText.jsx";
import FormFieldEmail from "./FormFieldEmail.jsx";
import FormFieldExtTicketCounter from "./FormFieldExtTicketCounter.jsx";

class Form extends Component{
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
  
  render() {
    const model = this.props.formModel;

    var rows = model.map((row,idx)=> {
      var key = idx.toString();
      var columns;
      switch (row.rowType) {
        case "form-row":
          return Array.isArray(row.fields) && 
            (row.fields.length>0) &&
            (<div className="form-row" key={key}>
              {this.renderFormField (row.fields[0])}
            </div>)
        case "two-columns":
          columns = row.fields.map ( 
            (fld,idx2) => (<div className="col-sm-6" key={idx2.toString()}>
            {this.renderFormField (fld)}
          </div> ))
          return (
            <div className="form-row" key={key}>
              {columns}
            </div>
          )
        case "section":
          return <div className="h6 form-section" key={key}>{row.title}:</div>
      }
    })
    return <form id={this.props.formID} className="needs-validation" noValidate>
      {rows} </form>
  }
}
Form.propTypes = {
  formID: PropTypes.string,
  formModel: PropTypes.array,
};
export default Form;