import React, { Component } from "react";

class TimeDifference extends Component {
  constructor({ time }) {
    super();
    this.state = {
      givenTimestamp: time,
      yearsDifference: null,
      daysDifference: null,
      hoursDifference: null,
      minutesDifference: null,
      secondsDifference: null,
      mostSignificantComponent: "",
    };
  }

  componentDidMount() {
    // Get the current timestamp
    const currentTimestamp = new Date();

    // Parse the given timestamp
    const givenTimestamp = new Date(this.state.givenTimestamp);

    // Calculate the time difference in milliseconds
    const timeDifference = currentTimestamp - givenTimestamp;

    const yearsDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hoursDifference = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const minutesDifference = Math.floor((timeDifference / (1000 * 60)) % 60);
    const secondsDifference = Math.floor((timeDifference / 1000) % 60);

    // Determine the most significant component
    let mostSignificantComponent = "";
    if (yearsDifference > 0) {
      mostSignificantComponent = yearsDifference + " Year";
    } else if (daysDifference > 0) {
      mostSignificantComponent = "days";
    } else if (hoursDifference > 0) {
      mostSignificantComponent = "hours";
    } else if (minutesDifference > 0) {
      mostSignificantComponent = "minutes";
    } else {
      mostSignificantComponent = "seconds";
    }

    this.setState({
      yearsDifference,
      daysDifference,
      hoursDifference,
      minutesDifference,
      secondsDifference,
      mostSignificantComponent,
    });
  }

  render() {
    return (
      <div>
        <p className="Rat_info_time">
          {this.state[this.state.mostSignificantComponent + "Difference"]} {this.state.mostSignificantComponent}
        </p>
      </div>
    );
  }
}

export default TimeDifference;
