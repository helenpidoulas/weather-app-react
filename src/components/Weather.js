import React from "react";

class Weather extends React.Component {
  render() {
    return (
      <aside className="weather">
        <h2 class="widget-title">Title of Widget</h2>
        <img src="//cdn.worldweatheronline.net/images/weather/large/116_night_lg.png" class="weather-img" alt="Weather icon" />
      	{ this.props.city && <p class="location">{ this.props.city } </p> }
			  { this.props.temperature && <p class="temp">{ this.props.temperature }&deg;</p> }
			  { this.props.temperature && <p class="wind"><strong>Wind:</strong> { this.props.deg } { this.props.speed } km/h</p> }     		
      </aside>
    );
  }
};

export default Weather;