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

class hourWiseForecast extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let _date = new Date();
    const weekday = this.props.data.dt * 1000;
    _date.setTime(weekday);
    const _img = `owf owf-${this.props.data.weather[0].id} owf-5x`;
    const fahrenheitMax = Math.round(this.props.data.main.temp_max);

    const fahrenheitMin = Math.round(this.props.data.main.temp_min);

    const farenheitTemp = Math.round(this.props.data.main.temp);

    return (
      <div className="row">
        <div className="col-12">
          <div className="card py-2 my-3">
            <div className="row">
              <div className="col">
                <i> <h4 className="text-info">
                   < FaCalendarAlt/> {moment(_date).format("MMMM D YYYY")}                 
                </h4> </i>
                <i> <h5>
                  {moment(_date).format("HH:mm a")}
                </h5> </i>
                <i> <p>Temperature: {farenheitTemp}°F</p> </i>
                <i> <p>
                  {fahrenheitMin}°F low
                </p> </i>
                <i> <p>{fahrenheitMax}°F high
                </p> </i>
                <i> <p>{this.props.data.weather[0].description}</p> </i>
                <i style={{width:"200px"}} className={_img}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default hourWiseForecast;
