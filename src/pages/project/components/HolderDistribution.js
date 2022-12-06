import React from "react";
import {Bubble} from "react-chartjs-2";

const item = {
  width: "20%",
  textAlign: "center",
  overflow: "hidden",
}

function getRandomInt({min, max}) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const chartData = {
  datasets: [
    {
      label: 'Red dataset',
      data: Array.from({length: 5}, () => ({
        x: getRandomInt({min: 25, max: 300}),
        y: getRandomInt({min: 35, max: 100}),
        r: getRandomInt({min: 5, max: 50}),
      })),
      backgroundColor: '#F741C477',
    },
    {
      label: 'Blue dataset',
      data: Array.from({length: 5}, () => ({
        x: getRandomInt({min: 25, max: 300}),
        y: getRandomInt({min: 35, max: 100}),
        r: getRandomInt({min: 5, max: 20}),
      })),
      backgroundColor: '#55BEFF77',
    },
    {
      label: 'Blue dataset',
      data: Array.from({length: 5}, () => ({
        x: getRandomInt({min: 25, max: 300}),
        y: getRandomInt({min: 35, max: 100}),
        r: getRandomInt({min: 5, max: 20}),
      })),
      backgroundColor: '#8D35A377',
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    y: {
      beginAtZero: false,
    },
  },
  plugins: {
    legend: {
      display: false
    },
  },
};



const HolderDistribution = ({data}) => {
  const colors = ["#55BEFF", "#8D35A3"]

  return <div className={"w-full h-full"}>

    <Bubble options={options} data={chartData}/>
  </div>
}

export default HolderDistribution