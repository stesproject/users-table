import React from "react";
import Field from "Field";
import Fields from "./fields";
import {uid} from "react-uid";
import PropTypes from "prop-types";

class Form extends React.Component {
	constructor(props) {
		super(props);
		
		this.ADDTEXT = "Add";
		this.SAVETEXT = "Save";

		this.state = {
			buttonDisabled: true,
			buttonText: this.ADDTEXT,
			formFields: null
		};

		this.checkValidity = this.checkValidity.bind(this);
		this.getFormData = this.getFormData.bind(this);
	}

	render() {
		const {buttonDisabled, buttonText} = this.state;
		const {selectedRow} = this.props;

		if (selectedRow != null) {
			this.populateForm();
		}

		return (
			<form id="mainForm">
				{this.displayFields()}

				<input
					className="button"
					type="submit"
					value={buttonText}
					disabled={buttonDisabled}
					onClick={this.getFormData}
				/>
			</form>
		);
	}

	componentDidUpdate(prevProps) {
		const {selectedRow} = this.props;
		
		if (selectedRow != prevProps.selectedRow) {
			this.setState({buttonDisabled: false, buttonText: this.SAVETEXT});
		}
	}

	// Display all fields in the form.
	displayFields() {
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

	// The validity of the form is checked during the user input in any field.
	checkValidity(e) {
		// Gets the event parent (form).
		this.setState({buttonDisabled: !e.target.form.checkValidity()});
	}

	// Called when the user press the add/save button.
	getFormData(e) {
		const {sendFormData} = this.props;

		e.preventDefault();

		let datas = [];
		let formFields = e.target.form.elements;

		for (let i = 0; i < formFields.length - 1; i++) {
			datas.push(formFields[i].value);
			this.resetField(formFields[i]);
		}

		sendFormData([datas]);

		e.target.form.reset();
		this.setState({buttonDisabled: true, buttonText: this.ADDTEXT, formFields: formFields});
	}

	resetField(field) {
		field.className = "";
	}

	// Called when the user press the edit button
	populateForm() {
		const {selectedRow} = this.props;
		const {formFields} = this.state;

		for (let i = 0; i < formFields.length; i++) {
			formFields[i].value = selectedRow[i];
		}
	}
}

Form.propTypes = {
	sendData: PropTypes.func,
	selectedRow: PropTypes.array,
	selectedRowId: PropTypes.number
};

export default Form;
