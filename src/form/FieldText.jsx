import React, {Component} from "react";
import PropTypes from 'prop-types';

export default class FieldText extends Component{
  render() {
    return (
      <fieldset className="mt-1 w-100">
        <label 
          className="mt-2 m-0" 
          htmlFor={this.props.id}>
          {this.props.caption}
        </label>
        <input 
          type={this.props.type}
          className="form-control" 
          id={this.props.id} 
          name={this.props.id} 
          required={this.props.isRequired} />
        <div className="invalid-feedback">
          {this.props.feedback}
        </div>
      </fieldset>
    );
  }
}
FieldText.propTypes = {
  type: PropTypes.oneOf(['text','email']),
  id: PropTypes.string,
  caption: PropTypes.string,
  feedback: PropTypes.string,
  isRequired: PropTypes.bool,
};
