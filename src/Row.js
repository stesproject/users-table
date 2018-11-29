import React from "react";
import Record from "Record";
import {uid} from "react-uid";
import Button from "Button";
import EmptySpace from "./EmptySpace";
import PropTypes from "prop-types";

class Row extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		const {className} = this.props;
		const {} = this.state;

		return (
			<React.Fragment>
				<div className={className}>
					{this.getFields()}
					{this.showButtons()}
				</div>
			</React.Fragment>
		);
	}

	getFields() {
		const {fields} = this.props;

		console.log(fields);

		return fields.map((field) => <Record key={uid(field)} records={field} />);
	}

	showButtons() {
		const {className} = this.props;

		if (className == "table-body") {
			return (
				<div className="Actions">
					<Button text="edit" onClick={this.editRow} />
					<Button text="delete" onClick={this.deleteRow}/>
				</div>
			);
		}
		else {
			return(
				<EmptySpace/>
			); 
		}
	}

	editRow(e) {
		const {fields} = this.props;

		console.log(rowFields);
	}

	deleteRow(e) {
		console.log(e.target);
	}
}

Row.propTypes = {
	className: PropTypes.string,
	fields: PropTypes.array.isRequired,
};

export default Row;
