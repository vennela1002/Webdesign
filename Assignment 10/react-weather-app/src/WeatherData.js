import React from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import Hourly from "./Hourly";
import { render } from "@testing-library/react";
import App from "./App";
var moment = require("moment");

class WeatherData extends React.Component {
  constructor(props) {
    super(props);
  }

  //const DisplayData = ({ reading, index, completeData }) => {
  render() {
    let _date = new Date();
    const weekday = this.props.reading.dt * 1000;
    _date.setTime(weekday);
    const _img = `owf owf-${this.props.reading.weather[0].id} owf-5x`;
    const url = `http://openweathermap.org/img/${this.props.icon}.png`;
    const fahrenheitMax = this.props.reading.main.temp_max;

    const fahrenheitMin = this.props.reading.main.temp_min;

    const farenheitTemp = this.props.reading.main.temp;
    console.log(farenheitTemp);

    return (
      <div className="row">
        <div className="col-12">
          <Link
            to={{
              pathname: `/hourly/${this.props.reading.day}`,
              state: {
                completeData: this.props.completeData,
                cityName: this.props.cityName,
              },
            }}
          >
            <div className="card py-2 mt-3">
              <div className="row">
                <div className="col">
                  <i><h4 className="text-info">
                  < FaCalendarAlt/> {moment(_date).format("MMMM D YYYY")} {this.props.reading.day}
                  </h4></i>
                  <i className={_img}></i>
                  <h5>Temperature: {farenheitTemp}°F</h5>
                  <i><h6>
                    {fahrenheitMin}°F  low
                  </h6></i>
                  <i><h6> {fahrenheitMax}°F high
                  </h6></i>
                  <i><p>{this.props.reading.weather[0].description}</p></i>
                  
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(WeatherData);
