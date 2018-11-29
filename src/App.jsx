import React from "react";
import Form from "Form";
import Table from "Table";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			records: []
		};
		this.sendData = this.sendData.bind(this);
	}

	sendData(datas) {
		const {records} = this.state;
		
		records.push(...datas);

		this.setState({records: records});
	}

	render() {
		return (
			<React.Fragment>
				<div className="react-form-container">
					<Table className="table-header" data={[["Name", "Surname", "Username", "E-mail", "Password"]]} />

					<Table className="table-body" data={
						this.displayAllRecords()} />
					
					<Form sendData={this.sendData} />
				</div>
			</React.Fragment>
		);
	}

	displayAllRecords() {
		const {records} = this.state;

		if (records == null)
			return null;

		return records;
	}
}

export default App;
