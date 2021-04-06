import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
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

	render() {
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
