import React, { Component} from "react";
import "./App.css";

class App extends Component{
	render(){
		return(
		<section class="container">
			<form id="form-ticket" class="needs-validation" novalidate>
				<div class="h6 form-section">Osoba rejestrujaca:</div>
				<div class="form-row">
					<fieldset class="col-sm-6">
						<label for="person">Imię i nazwisko</label>
						<input type="text" class="form-control" id="person" name="person" value="" required />
						<div class="invalid-feedback">Proszę wprowadzić imię i nazwisko</div>
					</fieldset>
					<fieldset class="col-sm-6">
						<label for="position">Stanowisko</label>
						<input type="text" class="form-control" id="position" name="position" value="" required />
						<div class="invalid-feedback">Proszę wprowadzić stanowisko</div>
					</fieldset>
				</div>
			</form>
			<div className="react-alert">  React: Hello, World! </div>
		</section>
		);
	}
}

export default App;