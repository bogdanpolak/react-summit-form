import React, {Component} from "react";
import PropTypes from 'prop-types';

/* ----------------------------------------------------------------
 * FieldText
 * ---------------------------------------------------------------- */

const FieldText = ({ type, id, caption, feedback, isRequired }) => (
  <fieldset className="mt-1 w-100">
    <label 
      className="mt-2 m-0" 
      htmlFor={id}>
      {caption}
    </label>
    <input 
      type={type}
      className="form-control" 
      id={id} 
      name={id} 
      required={isRequired} />
    <div className="invalid-feedback">
      {feedback}
    </div>
  </fieldset>
)


FieldText.propTypes = {
  type: PropTypes.oneOf(['text','email']),
  id: PropTypes.string,
  caption: PropTypes.string,
  feedback: PropTypes.string,
  isRequired: PropTypes.bool,
}

/* ---------------------------------------------------------------- *
 * FieldExtTickets
 * ---------------------------------------------------------------- */

const SelectOptionsRange = ({min,max}) => (
  // range(min,max) => [min, min+1, ... max]
  Array.from (Array(max-min+1), (i, index) => min+index ).map (
    (val) => (<option key={val} value={val}>{val}</option>)
  )
)

SelectOptionsRange.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number
}

class FieldExtTickets extends Component {
  // static propTypes = {}
  constructor(props) {
    super(props)
    this.state = {
      value: 1,
      totalValue: props.ticketValue
    }
  }
  selectOnChange(ev){
    this.setState({
      value: ev.target.value,
      totalValue: this.props.ticketValue * ev.target.value
    });
  }
  render() {
    return (
      <div className="form-row">
        <fieldset className="col-sm-3">
          <label 
            htmlFor={this.props.select.id} 
            className="m-0" >
            {this.props.select.caption}
          </label>
          <select 
            className="form-control" 
            id="{this.props.select.id}" 
            name="{this.props.select.id}"
            onChange={this.selectOnChange.bind(this)} 
            value={this.state.value} >
            <SelectOptionsRange
              min = {this.props.select.range.min}
              max = {this.props.select.range.max}
            />
          </select>
        </fieldset>
        <div className="col-sm-9 mt-3">
          <p className="mb-0">{this.props.total.caption}</p>
          <h5 className="mt-0"><span id={this.props.total.id}>{this.state.totalValue}</span> zł</h5>
        </div>
      </div>
    )
  }
}
FieldExtTickets.propTypes = {
  ticketValue: PropTypes.number,
  select: PropTypes.shape({
    id: PropTypes.string,
    caption: PropTypes.string,
    range: PropTypes.objct,
  }),
  total: PropTypes.shape({
    id: PropTypes.string,
    caption: PropTypes.string,
  }),
}

/* ---------------------------------------------------------------- */
/* ---------------------------------------------------------------- */

const FieldAgreeGDPR = ({checkboxId, isRequired}) => (
  <div className="form-check mt-4">
    <input className="form-check-input" 
      type="checkbox" id={checkboxId}  
      name={checkboxId} 
      required={isRequired} />
    <label className="form-check-label" htmlFor={checkboxId}>
      Zgoda na przetwarzanie danych.
    </label>
    <div className="ml-6 invalid-feedback mb-2">
      Pole musi zostać zaznaczone. Bez zgody na przetwarzanie danych osobowych nie możemy przyjać Państwa rejestracji.
    </div>
    <div className="ml-6 small">
      Wyrażam zgodę na przetwarzanie moich danych osobowych w celach marketingowych. Wyrażam zgodę na otrzymywanie od BSC Polska Sp. z o.o, informacji handlowych dotyczących produktów i usług oferowanych przez firmę. Zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO/GDPR).
    </div>
  </div>
)

FieldAgreeGDPR.propTypes = {
  checkboxId: PropTypes.string,
  isRequired: PropTypes.bool,
};

/* ---------------------------------------------------------------- */
/* ---------------------------------------------------------------- */

const RowSection = ({title}) => (
  <div className="h6 form-section">{title}</div>
)
RowSection.propTypes = {
  title: PropTypes.string
}

/* ---------------------------------------------------------------- */
/* ---------------------------------------------------------------- */

const RowOneColumn =  ({ field }) => (
  <div className="form-row">
    <FieldText 
      type = {field.fieldType}
      id = {field.name}
      caption = {field.caption}
      feedback = {field.feedback}
      isRequired = {field.isRequired}
    />
  </div>
)
RowOneColumn.propTypes = {
  field: PropTypes.object
}

/* ---------------------------------------------------------------- */
/* ---------------------------------------------------------------- */

const RowTwoColumns =  ({ fields }) => (
  <div  className="form-row">
    {fields.map ( (field,idx)=> (
      <div 
        key={"col-"+(idx+1)}
        className="col-sm-6" >
        <FieldText 
          type = {field.fieldType}
          id = {field.name}
          caption = {field.caption}
          feedback = {field.feedback}
          isRequired = {field.isRequired}
        />
      </div> 
    ))}
  </div>
)
RowTwoColumns.propTypes = {
  fields: PropTypes.array
}

/* ---------------------------------------------------------------- */
/* ---------------------------------------------------------------- */

export default class Form extends Component{

  render() {
    const {formID, formModel} = this.props;
    const renderRow = function (row,idx) {
      const key = "row"+(idx+1)
      switch (row.rowType) {
        case "section":
          return <RowSection key={key}  title={row.title} />
        case "one-column":
          return <RowOneColumn key={key} field={row.field} />
        case "two-columns":
          return <RowTwoColumns key={key} fields={row.fields} />
        case "ext-tickets":
          return <FieldExtTickets key={key}
            ticketValue={row.ticketValue}
            select={row.select}
            total={row.total} />
        case "confirm-gdpr":
          return <FieldAgreeGDPR key={key}
            checkboxId={row.name} 
            isRequired={row.isRequired} />
      }
    }
    return (
      <form id={formID} className="needs-validation" noValidate>
        {formModel.map( (row,idx) => renderRow(row,idx) )}
      </form>
    )
  }

}

Form.propTypes = {
  formID: PropTypes.string,
  formModel: PropTypes.array,
};

