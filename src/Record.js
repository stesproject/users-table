import React from "react";

class Record extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const {records} = this.props;
		const {} = this.state;

		return (
			<React.Fragment>
				<div className="column-content">
					<span>{records}</span>
				</div>
			</React.Fragment>
		);
	}
}

export default Record;
