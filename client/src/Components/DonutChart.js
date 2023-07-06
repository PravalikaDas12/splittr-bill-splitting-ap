import React, { Component } from "react";
import Chart from "react-apexcharts";

class DonutChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: { colors: ["#FA5252", "#0CA678"], labels: ["Borrowed", "Owed"] },
      series: [100, 55],
    };
  }

  render() {
    return (
      <>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="pie"
          width="380"
        />
      </>
    );
  }
}

export default DonutChart;
