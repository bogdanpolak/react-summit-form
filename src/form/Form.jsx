import React, {Component} from "react";
import PropTypes from 'prop-types';
import FormRow from "./FormRow.jsx";

class Form extends Component{
  render() {
    const formModel = this.props.formModel;
    const formDOM = 
      <section className="container">
        <form id="form-ticket" className="needs-validation" noValidate>
          {formModel.map((row,idx)=><FormRow row={row} key={idx.toString()}/>)}
        </form>
        <div className="react-alert">  React: Hello, World! </div>
      </section>
    return formDOM;
  }
}
Form.propTypes = {
  formModel: PropTypes.object,
};
export default Form;