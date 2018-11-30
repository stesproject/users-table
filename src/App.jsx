import React from "react";
import Form from "Form";
import Table from "Table";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			records: [],
			selectedRow: null,
			selectedRowId: -1
		};
		this.sendFormData = this.sendFormData.bind(this);
		this.getRowRecords = this.getRowRecords.bind(this);
		this.deleteRow = this.deleteRow.bind(this);
	}

	render() {
		const {selectedRow} = this.state;

		return (
			<React.Fragment>
				<div className="react-form-container">
					<Table className="table-header" data={[["Name", "Surname", "Username", "E-mail", "Password"]]} />

					<Table 
					className="table-body" 
					data={this.getAllRecords()} 
					getRecords={this.getRowRecords} 
					deleteRow={this.deleteRow} 
					/>
					
					<Form sendFormData={this.sendFormData} selectedRow={selectedRow} />
				</div>
			</React.Fragment>
		);
	}

	componentDidUpdate() {
		const {selectedRow} = this.state;
		
		if (selectedRow != null) {
			this.setState({selectedRow: null});
		}
	}

	// Get all the records to be displayed in the Table.
	getAllRecords() {
		const {records} = this.state;

		if (records == null)
			return null;

		return records;
	}

	// Called when the user press the edit button.
	getRowRecords(fields, rowId) {
		this.setState({selectedRow: fields, selectedRowId: rowId})
	}

	// Called when the user press the delete button.
	deleteRow(rowId) {
		const {records} = this.state;
		
		records.splice(rowId, 1);

		this.setState({records: records});
	}

	// Called when the user press the add/save button.
	sendFormData(datas) {
		const {records, selectedRowId} = this.state;
		
		if (selectedRowId < 0) {
			records.push(...datas);
		}
		else {
			records[selectedRowId] = datas[0];
		}

		this.setState({records: records, selectedRowId: -1});
	}
}

export default App;
