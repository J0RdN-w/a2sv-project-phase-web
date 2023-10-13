import React from "react";
import Chart from "react-apexcharts";

function AcceptanceRate() {
  const series = [
    {
      data: [2, 27, 59, 70],
    },
  ];

  var options = {
    chart: {
      type: "bar",
      height: 320,
    },
    plotOptions: {
      bar: {
        barHeight: "100%",
        distributed: true,
        horizontal: true,
        dataLabels: {
          position: "bottom",
        },
      },
    },
    colors: [
      "#ec6362",
      "#15a1d3",
      "#286cf4",
      "#0057a5",
    ],
    dataLabels: {
      enabled: true,
      textAnchor: "start",
      style: {
        colors: ["#fff"],
      },
      formatter: function (val, opt) {
        return "ACCEPTANCE RATE: " + val + "%";
      },
      offsetX: 0,
      dropShadow: {
        enabled: true,
      },
    },
    stroke: {
      width: 1,
      colors: ["#fff"],
    },
    xaxis: {
      categories: [
        0, 20, 40, 60
      ],
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    tooltip: {
      theme: "dark",
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: function () {
            return "";
          },
        },
      },
    },
  };

  return (
    <div className="w-fit h-fit  flex items-center justify-center">
      <Chart options={options} series={series} type="bar" height={320} width={900} />
    </div>
  );
}

export default AcceptanceRate;
