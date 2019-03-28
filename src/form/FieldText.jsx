import React, {Component} from "react";
import PropTypes from 'prop-types';

class FormFieldText extends Component{
  render() {
    const field = this.props.field;
    return (
      <fieldset className="mt-1">
        <label className="mt-2 m-0" htmlFor={field.name}>
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
FormFieldText.propTypes = {
  field: PropTypes.object,
};
export default FormFieldText;
