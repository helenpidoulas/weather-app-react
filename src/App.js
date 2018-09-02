import React from "react";

/* React components */
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

/* OpenWeatherMap API key */
const API_KEY = "8a1a3cc956c204ebbbd40834bdd9dc38";

/* OpenWeatherMap Sydney AU JSON data */
/* http://api.openweathermap.org/data/2.5/weather?q=Sydney,AU&appid=8a1a3cc956c204ebbbd40834bdd9dc38 */

class App extends React.Component {
	state = {
		temperature: undefined,
		city: undefined,
		icon: undefined,
		deg: undefined,
		speed: undefined,
		all: undefined,
		error: undefined
	}

	getWeather = async (e) => {
		e.preventDefault();
		const city = e.target.elements.city.value;

		const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Sydney,AU&appid=8a1a3cc956c204ebbbd40834bdd9dc38&units=metric');

		const data = await api_call.json();
		console.log(data);
		this.setState({
			temperature: data.main.temp,
			city: data.name,
			icon: data.weather.icon,
			deg: data.wind.deg,
			speed: data.wind.speed,
			error: ""
		});
	}

	render() {
		return (
			<main>
				<div class="settings">
					<Titles />
					<Form getWeather={this.getWeather} />
				</div>	
				<Weather 
					temperature={this.state.temperature}
					city={this.state.city}
					icon={this.state.icon}
					deg={this.state.deg}
					speed={this.state.speed}
					error={this.state.error}
				 />
			</main>
		);
	}
};

export default App;