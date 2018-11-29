import React from "react";
import PropTypes from "prop-types";
import Row from "Row";
import {uid} from "react-uid";

class Table extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const {} = this.props;
		const {} = this.state;

		return (
			<React.Fragment>
				{this.getRows()}
			</React.Fragment>
		);
	}

	getRows() {
		const {className, data} = this.props;

		if (data == null) return null;

		return data.map((data) => <Row key={uid(data)} fields={data} className={className} />);
	}
}

Table.defaultProps = {
	className: "table-body"
};

Table.propTypes = {
	className: PropTypes.string,
	data: PropTypes.array
};

export default Table;
