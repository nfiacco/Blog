import React from "react";
import "app.css"

class Input extends React.Component {
	render() {
		return <input/>;
	}
}

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			name: props.name
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({
			name: event.target.value
		});
	}

	render() {
		return (
			<div className="App" onChange={this.handleChange}>
				<h1> Hello: {this.state.name} </h1>
				<Input/>
			</div>
		);
	}
}

export default App;
