import React, {Component} from "react";
import FormFieldText from "./FormFieldText.jsx";

class FormRow extends Component{
  render() {
    const rowType = this.props.row.rowType;
    var res;
    if (rowType === "2col-input") {
      const columns = this.props.row.fields.map ( (field,idx) => (
        <div className="col-sm-6" key={idx.toString()}>
          <FormFieldText field={field}/>
        </div>
      ) );
      res = <div className="form-row">{columns}</div> 
    } else if (rowType === "title") {
      res = <div className="h6 form-section">{this.props.row.title}:</div>
    }
    return res;
  }
}
export default FormRow;
