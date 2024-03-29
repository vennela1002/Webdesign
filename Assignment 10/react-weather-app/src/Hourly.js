import React from "react";
import DisplayData from "./WeatherData";
import HourlyCityForecast from "./HourlyCityForecast";
var moment = require("moment");

class Hourly extends React.Component {
  completeData = this.props.location.state;
  _selectedParam = this.props.match.params;

  state = {
    _data: [],
  };
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <i><h1 className="py-3">
          {" "}
          {this.completeData.cityName} Weather on {this._selectedParam.day}
        </h1> </i>
        <div className="justify-content-center m-2">
          {this.displayHourlyData()}
        </div>
      </div>
    );
  }

  componentDidMount() {
    const tempData = this.completeData.completeData.filter(
      (cd) => cd.day == this._selectedParam.day
    );
    this.setState({
      _data: tempData,
    });
  }

  displayHourlyData = () => {
    return this.state._data.map((value, index) => (
      <HourlyCityForecast data={value} key={index} />
    ));
  };
}

export default Hourly;
