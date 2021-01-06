import React from 'react';

export class Cotizacion extends React.Component {
	constructor(props) {
		super(props);
		this.state = { stateCotizaciones = [] }; 
		let  = {};
	}
	componentDidMount() {
        // get Exchange
        (async () => {
			const response = await fetch('https://api.exchangeratesapi.io/latest');
			const json = await response.json();
			console.log(json);
			this.state.stateCotizaciones = json;
		})();
    }
    render() {
		let listItems = this.state.stateCotizaciones.map((cotizacion) =>
			<li>{cotizacion}</li>
		);
        return (
		<div>
            <h1>Welcome to React!!</h1>
			<ul>{listItems}</ul>
		</div>
        );
    }
}
export default Cotizacion;