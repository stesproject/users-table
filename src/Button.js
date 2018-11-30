import React from "react";
import PropTypes from 'prop-types';

class Button extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
    }

	render() {
        const {text, onClick} = this.props;

		return (
			<React.Fragment>
                <button type="button" onClick={onClick}>{text}</button>
			</React.Fragment>
		);
	}
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Button;
