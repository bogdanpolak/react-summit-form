import React, {Component} from "react";
import PropTypes from 'prop-types';

export default class FieldExtTickets extends Component {
  // static propTypes = {}
  /*  
    ticketValue: 799,
    select: {
        id: "tickets",
        caption: "Liczba biletów",
        range: {min:1, max:5},
    },
    total: {
      id: "totalTicketValue",
      caption: "Koszt całkowity netto"
    }
  */
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
            <option defaultValue="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
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