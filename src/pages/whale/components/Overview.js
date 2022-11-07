import {Bar, Doughnut, Line} from "react-chartjs-2";
import Eth from "../../../components/common/atoms/Eth";
import React, {useEffect, useRef, useState} from "react";

const options =
  {
    bar: {
      responsive: true,
      maintainAspectRatio: false,
      elements: {
        bar: {
          borderRadius: 10,
        }
      },
      plugins: {
        legend: {
          position: 'right',
          labels: {
            color: '#fff',
          }
        },
      },
      scales: {
        y: {
          ticks: {
            color: '#fff',
          }
        },
        x: {
          ticks: {
            color: '#fff',
          }
        }
      }
    },

    line: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          grid: {
            display: true,
            drawBorder: true,
            drawOnChartArea: true,
            drawTicks: true,
          },
          ticks: {
            color: '#ffffff'
          }
        },
        x: {
          ticks: {
            color:'#ffffff'
          }
        }
      },
      elements: {
        point: {
          radius: 6,
        }
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },

    pie: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '80%',
      layout: {
        padding: 14
      },
      spacing: 7,
      elements: {
        arc: {
          borderWidth: 1,
          borderColor: '#fff',
        }
      },
      plugins: {
        legend: {
          position: 'right',
          labels: {
            boxWidth: '5',
            color: '#fff',
            usePointStyle: true,
            padding: 20
          }
        },
      },
    }
  };



const Overview = () => {
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => Math.round(Math.random() * 1000)),
        backgroundColor: '#F741C4E0',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => Math.round(Math.random() * 1000)),
        backgroundColor: '#53BAFAE0',
      },
    ],
  };


  const lineData = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => Math.round(Math.random() * 1000)),
        borderColor: '#F741C4E0',
        backgroundColor: '#00000000',
        fill: 'start'
      },
    ],
  };

  const pieData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green',],
    datasets: [
      {
        hoverOffset: 5,
        radius: 90,
        cutout: '70%',
        label: '',
        data: [12, 19, 3, 5],
        backgroundColor: [
          '#F741C4',
          '#8D35A3',
          '#5D4ED5',
          '#37A0EC',
        ],
        borderColor: [
          '#F741C4',
          '#8D35A3',
          '#5D4ED5',
          '#37A0EC',
        ],
        borderWidth: 2,
      },

      {
        cutout: '90%',
        label: '',
        data: [100],
        radius: 93,
        spacing: 0,
        backgroundColor: [
          '#666475',
        ],
        borderColor: [
          '#666475',
        ],
        borderWidth: 2,
      },

    ],
  };



  const chartRef = useRef(null);
  const [gradient, setGradient] = useState(null);


  useEffect(() => {
    const chart = chartRef.current;

    const gr = chart.ctx.createLinearGradient(0, 0, 0, chart.ctx.canvas.height);
    gr.addColorStop(0, '#F741C4E0');
    gr.addColorStop(1, '#F741C400');
    setGradient(gr);

  }, []);

  return <div className={"bg-bg rounded-[20px] p-[25px] m-[10px]"}>
    <div className={"flex w-full gap-[10px]"}>
      <div  style={{flexGrow: "1"}}  className={"flex flex-col gap-[10px]"}>

        <div className="bg-accent rounded-xl box-border flex flex-col h-[310px]">
          <div className={"w-full  flex justify-between py-[20px] px-[20px]"}>
            <div>Chart 2</div>
            <div>15 Days</div>
          </div>
          <div className={"flex-1"}>
            <Line ref={chartRef} options={options.line} data={lineData}/>
          </div>
        </div>

        <div className={"flex h-[310px] gap-[10px]"}>
          <div className="relative flex-1 bg-accent rounded-xl flex items-center justify-center box-border ">
            <div className="w-full h-full  flex">
              <div className={"flex-1"}>
                <Doughnut options={options.pie} data={pieData}/>
              </div>
              <div className={"w-full absolute top-0 right-0 flex justify-end py-[20px] px-[20px]"}>
                <div>Owned NFT / Projects</div>
              </div>
            </div>
          </div>

          <div className="bg-accent flex-1  rounded-xl p-5  box-border">
            <Bar options={options.bar} data={data}/>
          </div>
        </div>
      </div>

      <div className={"flex flex-col gap-[10px]"}>
        <div className={"w-[300px] h-[150px] bg-accent rounded-[15px] flex gap-[25px] justify-center items-center"}>
          <img className={"w-[66px] h-[66px]"} src={require("assets/images/icons/whale/total-spent.png")}/>
          <div className={"flex flex-col"}>
            <div>Total Spent</div>
            <div><Eth data={"17K"} size={"large"}/></div>
          </div>
        </div>
        <div className={"w-[300px] h-[150px] bg-accent rounded-[15px] flex gap-[25px] justify-center items-center"}>
          <img className={"w-[66px] h-[66px]"} src={require("assets/images/icons/whale/gas-spent.png")}/>
          <div className={"flex flex-col"}>
            <div>Gas Spent</div>
            <div><Eth data={"0.3K"} size={"large"}/></div>
          </div>
        </div>
        <div className={"w-[300px] h-[150px] bg-accent rounded-[15px] flex gap-[25px] justify-center items-center"}>
          <img className={"w-[66px] h-[66px]"} src={require("assets/images/icons/whale/total-revenue.png")}/>
          <div className={"flex flex-col"}>
            <div>Total Revenue</div>
            <div><Eth data={"0.7K"} size={"large"}/></div>
          </div>
        </div>
        <div className={"w-[300px] h-[150px] bg-accent rounded-[15px] flex gap-[25px] justify-center items-center"}>
          <img className={"w-[66px] h-[66px]"} src={require("assets/images/icons/whale/total-gains.png")}/>
          <div className={"flex flex-col"}>
            <div>Total Gains</div>
            <div><Eth data={"1.03K"} size={"large"}/></div>
          </div>
        </div>

      </div>
    </div>





  </div>
}

export default Overview