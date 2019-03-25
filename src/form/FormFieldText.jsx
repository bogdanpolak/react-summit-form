import React, {Component} from "react";

class FormFieldText extends Component{
  render() {
    const field = this.props.field;
    return (
      <fieldset key={field.name}>
        <label htmlFor={field.name}>
          {field.caption}
        </label>
        <input type="text" 
          className="form-control" 
          id={field.name} 
          name={field.name} 
          required={field.isRequired} />
        <div className="invalid-feedback">
          {field.feedback}
        </div>
      </fieldset>
    
    );
  }
}

export default FormFieldText;
