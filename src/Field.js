import React from "react";
import PropTypes from "prop-types";

class Field extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			className: "",
			errorMessage: ""
		};
		this.checkField = this.checkField.bind(this);
		this.setFocus = this.setFocus.bind(this);
		this.MANDATORY = "*";
	}

	render() {
		const {label, required, message, pattern, type} = this.props;
		const {className, errorMessage} = this.state;
		let fieldLabel = required ? label.concat(this.MANDATORY) : label;

		return (
			<label>
				{fieldLabel}
				<input
					className={className}
					type={type}
					pattern={pattern}
					title={message}
					required={required}
					onBlur={this.checkField}
					onFocus={this.setFocus}
				/>

				<p className="error">{errorMessage}</p>
			</label>
		);
	}

	// Called when a field get focus.
	setFocus(e) {
		this.setState({className: "", errorMessage: ""});
	}

	// Called when a field lose focus.
	checkField(e) {
		const {checkValidity} = this.props;

		let isValid = e.target.checkValidity();

		if (!isValid) {
			this.setState({errorMessage: e.target.title, className: isValid ? "inputOk" : "inputWrong"});
			console.log(e.target.validationMessage);
		} else {
			this.setState({className: "inputOk"});
		}

		checkValidity(e);
	}
}

Field.defaultProps = {
	required: false,
	title: ""
};

Field.propTypes = {
	required: PropTypes.bool,
	title: PropTypes.string,
	type: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired
};

export default Field;
