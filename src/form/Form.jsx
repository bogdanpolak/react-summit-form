import React, {Component} from "react";
import PropTypes from 'prop-types';
import FormRow from "./FormRow.jsx";

class Form extends Component{
  render() {
    const model = this.props.formModel;
    const formDOM = 
      <form id={this.props.formID} className="needs-validation" noValidate>
        {model.map((row,idx)=><FormRow row={row} key={idx.toString()}/>)}
      </form>
    return formDOM;
  }
}
Form.propTypes = {
  formID: PropTypes.string,
  formModel: PropTypes.array,
};
export default Form;