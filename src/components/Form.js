import React from "react";

class Form extends React.Component {
  render() {
    return (
		<div>
			<form onSubmit={this.props.getWeather}>
				<input type="text" name="city" placeholder="Title of widget" />

				<div role="radiogroup" aria-labelledby="group_label_1" id="rg1">
					<h3 id="group_label_1">Temperature</h3>

					<input id="celcius" type="radio" name="temperature" value="celcius" aria-checked="false" tabindex="0" />
					<label for="celcius">C&deg;</label>

					<input id="farenheit" type="radio" name="temperature" value="farenheit" aria-checked="false" tabindex="1" />				
					<label for="farenheit">F&deg;</label>
				</div>	

				<div role="radiogroup" aria-labelledby="group_label_2" id="rg2">
					<h3 id="group_label_2">Wind</h3>
					<input id="wind-on" type="radio" name="wind" value="wind-on"label aria-checked="false" tabindex="0" />
					<label for="wind-on">On</label>

					<input id="wind-off" type="radio" name="wind" value="wind-off" aria-checked="false" tabindex="1" />				
					<label for="wind-off">Off</label>
				</div>	
			</form>
		</div>
    );
  }
};

export default Form;