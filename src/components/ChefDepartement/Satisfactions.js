import React from "react";
import ChartLine from "components/ChartLine";
class Satisfactions extends React.Component {
	// Constructor
	constructor(props) {
		super(props);
		this.state = {
            diagramme: [],
		};
	}
	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
        fetch(
            "http://localhost:3002/satisfaction_liste")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					diagramme: json,
				});
			});
	}
	render() {
		const { diagramme } = this.state.diagramme;
		return (
            <ChartLine
            data = {diagramme} 
            />
            );
}
}

export default Satisfactions;
