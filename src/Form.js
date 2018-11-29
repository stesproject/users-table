import React from "react";
import Field from "Field";
import Fields from "./fields";
import {uid} from "react-uid";

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			buttonDisabled: true,
			buttonText: "Add"
		};
		this.checkValidity = this.checkValidity.bind(this);
		this.getFormData = this.getFormData.bind(this);

	}

	checkValidity(e) {
		// Get the event parent (form).
		this.setState({buttonDisabled: !e.target.form.checkValidity()});
	}

	render() {
		const {buttonDisabled, buttonText} = this.state;

		return (
			<form id="mainForm">
				{this.getFields()}

				<input className="button" type="submit" value={buttonText} disabled={buttonDisabled} onClick={this.getFormData} />
			</form>
		);
	}

	getFields() {
		return Fields.map((field) => (
			<Field
				key={uid(field)}
				label={field.label}
				type={field.type}
				pattern={field.pattern}
				message={field.message}
				required={field.required}
				checkValidity={this.checkValidity}
			/>
		));
	}

	getFormData(e) {
		const {sendData} = this.props;

		e.preventDefault();

		let datas = [];
		let formFields = e.target.form.elements;

		for (let i = 0; i < formFields.length-1; i++) {
			datas.push(formFields[i].value);
			formFields[i].className = "";
		}

		sendData([datas]);

		e.target.form.reset();
		this.setState({buttonDisabled: true});
	}
}

export default Form;
