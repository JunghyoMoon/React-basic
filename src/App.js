import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
	constructor(props) {
		super(props);
		console.log("hello world");
	}
	state = {
		count: 0,
	};

	//매 순간 setState를 호출할 때마다, 새로운 state와 함께 render를 호출하게 됨.
	add = () => {
		this.setState((current) => ({
			count: current.count + 1,
		}));
	};

	sub = () => {
		this.setState((current) => ({
			count: current.count - 1,
		}));
	};

	/*

	*/
	componentDidMount() {
		console.log("component rendered");
	}
	componentDidUpdate() {
		console.log("just updated.");
	}
	componentWillUnmount() {
		console.log("Adios");
	}
	render() {
		console.log("rendering..");
		return (
			<div>
				<h1>The number is : {this.state.count}</h1>
				<button onClick={this.add}>add</button>
				<button onClick={this.sub}>sub</button>
			</div>
		);
	}
}

export default App;
