import React from "react";

class EmptySpace extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const {} = this.props;
		const {} = this.state;

		return (
			<React.Fragment>
                <div className="blank"></div>
			</React.Fragment>
		);
	}
}

export default EmptySpace;