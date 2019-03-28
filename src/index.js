import React from "react";
import ReactDOM from "react-dom";
import TicketForm from "./TicketForm.jsx";

const formRederer = {
    init: function () {}
}

ReactDOM.render(<TicketForm />, document.getElementById("ticket-form"));
