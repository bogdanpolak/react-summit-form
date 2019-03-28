import React, {Component} from "react";
import PropTypes from 'prop-types';

export default class FormFieldExtTicketCounter extends Component {
  // static propTypes = {}
  /*  fields: [{
        fieldType: "ext-ticket-counter",
        name: "tickets",
        caption: "Liczba biletów",
        valueRange: {min:1, max:5},
        ticketValue: 799,
        totalName: "totalTicketValue",
        totalCaption: "Koszt całkowity netto"
    }] */
  constructor(props) {
    super(props)
    this.state = {
      value: 1,
      totalValue: props.field.ticketValue
    }
  }
  selectOnChange(ev){
    this.setState({
      value: ev.target.value,
      totalValue: this.props.field.ticketValue * ev.target.value
    });
  }
  render() {
    const field = this.props.field;
    return [
      <fieldset key="A" className="col-sm-3">
        <label htmlFor={field.name}>{field.caption}</label>
        <select className="form-control" id="{field.name}" name="{field.name}"
          onChange={this.selectOnChange.bind(this)} value={this.state.value}>
          <option defaultValue="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </fieldset>,
      <div key="B" className="col-sm-9 mt-3">
        <p className="mb-0">{field.totalCaption}</p>
        <h5 className="mt-0"><span id={field.totalName}>{this.state.totalValue}</span> zł</h5>
      </div>
    ]
  }
}
FormFieldExtTicketCounter.propTypes = {
  field: PropTypes.shape({
    fieldType: PropTypes.oneOf(['ext-ticket-counter']),
    name: PropTypes.string,
    caption: PropTypes.string,
    valueRange: PropTypes.objct,
    ticketValue: PropTypes.number,
    totalName: PropTypes.string,
    totalCaption: PropTypes.string
  })
}