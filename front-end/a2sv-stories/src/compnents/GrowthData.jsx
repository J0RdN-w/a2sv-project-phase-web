import React from 'react'
import Chart from "react-apexcharts";

function GrowthData() {

    const series = [{
        data: [25, 34, 107, 200, 300, 500]
      }, {
        data: [1, 1, 1, 2, 3, 5]
      }]

    const options = {
          chart: {
            type: 'bar',
            height: 430
          },
          plotOptions: {
            bar: {
              dataLabels: {
                position: 'top',
              },
            }
          },
          dataLabels: {
            enabled: true,
            offsetX: -6,
            style: {
              fontSize: '12px',
              colors: ['#fff']
            }
          },
          stroke: {
            show: true,
            width: 1,
            colors: ['#fff']
          },
          tooltip: {
            shared: true,
            intersect: false
          },
          xaxis: {
            categories: [2000, 2001, 2002, 2003, 2004, 2005],
          },
        }

      return (
        <div className="w-fit h-fit  flex flex-col items-center justify-center font-nunito mt-4 mb-24">
            <h1 className='font-extrabold text-xl'>The Growth of A2SV</h1>
          <Chart options={options} series={series} type="bar" height={420} width={1020} />
        </div>
      );
    }

export default GrowthData