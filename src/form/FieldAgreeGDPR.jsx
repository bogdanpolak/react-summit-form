import React, {Component} from "react";
import PropTypes from 'prop-types';

class FieldAgreeGDPR extends Component{
  render() {
    return (
      <div className="form-check mt-4">
        <input className="form-check-input" 
          type="checkbox" id={this.props.checkboxId}  
          name={this.props.checkboxId} 
          required={this.props.isRequired} />
        <label className="form-check-label" htmlFor={this.props.checkboxId}>
          Zgoda na przetwarzanie danych.
        </label>
        <div className="ml-6 invalid-feedback mb-2">
          Pole musi zostać zaznaczone. Bez zgody na przetwarzanie danych osobowych nie możemy przyjać Państwa rejestracji.
        </div>
        <div className="ml-6 small">
          Wyrażam zgodę na przetwarzanie moich danych osobowych w celach marketingowych. Wyrażam zgodę na otrzymywanie od BSC Polska Sp. z o.o, informacji handlowych dotyczących produktów i usług oferowanych przez firmę. Zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO/GDPR).
        </div>
      </div>
    );
  }
}
FieldAgreeGDPR.propTypes = {
  checkboxId: PropTypes.string,
  isRequired: PropTypes.bool,
};
export default FieldAgreeGDPR;
