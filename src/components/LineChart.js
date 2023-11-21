import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const LineChart = (props) => {
  const config = {
    chart: {
      type: "line",
    },
    title: {
      text: props.title,
    },
    xAxis: {
      type: "category",
      labels: {
        rotation: -45,
        style: {
          fontSize: "13px",
          fontFamily: "Verdana, sans-serif",
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: props.yAxis ? props.yAxis : "Values",
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      pointFormat: "Value: <b>{point.y} </b>",
    },
    series: [
      {
        name: props.title,
        data: props.data,
        dataLabels: {
          enabled: true,
          rotation: -90,
          color: "#FFFFFF",
          align: "right",
          format: "{point.y}", // one decimal
          y: 10, // 10 pixels down from the top
          style: {
            fontSize: "13px",
            fontFamily: "Verdana, sans-serif",
          },
        },
      },
    ],
  };

  return (
    <div>
      <div>
        <HighchartsReact highcharts={Highcharts} options={config} />
      </div>
    </div>
  );
};

export default LineChart;
