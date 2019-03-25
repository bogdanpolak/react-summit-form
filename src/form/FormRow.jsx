import React, {Component} from "react";

class FormRow extends Component{
  render() {
    const rowType = this.props.row.rowType;
    if (rowType === "2col-input") {
      const [fieldL, fieldR] = this.props.row.fields;
      return (
        <div className="form-row">
          <fieldset className="col-sm-6" key={fieldL.name}>
            <label htmlFor={fieldL.name}>
              {fieldL.caption}
            </label>
            <input type="text" 
              className="form-control" 
              id={fieldL.name} 
              name={fieldL.name} 
              required={fieldL.isRequired} />
            <div className="invalid-feedback">
              {fieldL.feedback}
            </div>
          </fieldset>
          <fieldset className="col-sm-6" key={fieldR.name}>
            <label htmlFor={fieldR.name}>
              {fieldR.caption}
            </label>
            <input type="text" 
              className="form-control" 
              id={fieldR.name} 
              name={fieldR.name} 
              required={fieldR.isRequired} />
            <div className="invalid-feedback">
              {fieldR.feedback}
            </div>
          </fieldset>
        </div>
      )
    } else if (rowType === "title") {
      return (
        <div className="h6 form-section">
          {this.props.row.title}:
        </div>
      )
    }
  }
}

export default FormRow;
