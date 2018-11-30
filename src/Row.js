import React from "react";
import Record from "Record";
import {uid} from "react-uid";
import Button from "Button";
import PropTypes from "prop-types";

class Row extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			index: this.props.id,
			getRecords: null
		};
		this.editRow = this.editRow.bind(this);
		this.deleteRow = this.deleteRow.bind(this);
	}

	render() {
		const {className} = this.props;
		const {} = this.state;

		return (
			<React.Fragment>
				<div className={className}>
					{this.displayRecords()}
					{this.showButtons()}
				</div>
			</React.Fragment>
		);
	}

	// Display all the records in a row.
	displayRecords() {
		const {fields} = this.props;

		return fields.map((field, index) => <Record key={uid(field, index)} records={field} />);
	}

	// Display the action buttons.
	showButtons() {
		const {className} = this.props;

		if (className == "table-body") {
			return (
				<div className="Actions">
					<Button text="edit" onClick={this.editRow} />
					<Button text="delete" onClick={this.deleteRow} />
				</div>
			);
		}
	}

	// Called when the user press the edit button.
	editRow(e) {
		const {fields, getRecords} = this.props;
		const {index} = this.state;

		getRecords(fields, index);
	}

	// Called when the user press the delete button.
	deleteRow(e) {
		const {deleteRow} = this.props;
		const {index} = this.state;

		deleteRow(index);
	}
}

Row.propTypes = {
	className: PropTypes.string,
	fields: PropTypes.array.isRequired,
	getRecords: PropTypes.func,
	deleteRow: PropTypes.func,
};

export default Row;
