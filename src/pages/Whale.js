import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip
} from 'chart.js';
import {Bar, Doughnut, Line} from 'react-chartjs-2';
import React, {useEffect, useRef, useState} from 'react';
import {useParams} from "react-router-dom";
import {ethGenerator} from "../services/Generator";
import Eth from "../components/common/atoms/Eth";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  PointElement,
  LineElement,
  Legend,
  Filler,
  ArcElement
);

const Home = () => {

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
        animations: {
          tension: {
            duration: 2000,
            from: 0.6,
            to: 0.6,
            loop: true
          }
        },
        scales: {
          y: {
            grid: {
              display: true,
              drawBorder: true,
              drawOnChartArea: true,
              drawTicks: true,
            },
            ticks: {
              display: false,
            }
          },
          x: {
            display: false,
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
        spacing: 20,
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

  const pieData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green',],
    datasets: [
      {
        hoverOffset: 5,
        radius: 70,
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
        cutout: '85%',
        label: '',
        data: [100],
        radius: 83,
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
  const [activeTab, setActiveTab] = useState(0);
  const { wallet } = useParams();


  const lineData = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => Math.round(Math.random() * 1000)),
        borderColor: '#F741C4E0',
        backgroundColor: gradient,
        fill: 'start'
      },
    ],
  };

  useEffect(() => {
    const chart = chartRef.current;

    const gr = chart.ctx.createLinearGradient(0, 0, 0, chart.ctx.canvas.height);
    gr.addColorStop(0, '#F741C4E0');
    gr.addColorStop(1, '#F741C400');
    setGradient(gr);

  }, []);


  return <div className="w-full relative">
    <div style={{width: "96%"}} className="flex flex-col">

      <div className={"w-full flex justify-between mt-[20px]"}>
        <div className={"flex relative top-[10px]"}>
          <div onClick={() => {
            setActiveTab(0)
          }}
               className={"cursor-pointer transition-all ease-in-out duration-300 px-[20px] py-[10px] pb-[20px] rounded-t-[23px] " + (activeTab === 0 ? "bg-accent" : "")}>
            Overview
          </div>
          <div onClick={() => {
            setActiveTab(1)
          }}
               className={"cursor-pointer transition-all ease-in-out duration-300 px-[20px] py-[10px]  pb-[20px] rounded-t-[23px] " + (activeTab === 1 ? "bg-accent" : "")}>
            NFT
          </div>
        </div>

        <div className={"text-sm flex items-center bg-accent gap-[20px] relative top-[-10px] rounded-[15px] px-[10px] pt-[10px] pb-[20px]"}>
          <img src={require("assets/images/pics/profile.png")} />
          <div>
            Name: wonderting123
          </div>
          <div>
            Address: {wallet}
          </div>
        </div>
      </div>

      <div className={"bg-accent rounded-[20px] relative top-[-25px]"}>
        <div className={"bg-bg rounded-[20px] p-[25px] m-[10px]"}>
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

              <div className={"flex h-[310px]"}>
                <div className="flex-1 bg-accent rounded-xl flex items-center justify-center box-border ">
                  <div className="w-full h-full  flex flex-col">
                    <div className={"w-full  flex justify-between py-[20px] px-[20px]"}>
                      <div className={"max-w-[170px]"}>Sales breakdown top NFTs collections</div>
                      <div>15 Days</div>
                    </div>
                    <div className={"flex-1 h-[100px]"}>
                      <Doughnut options={options.pie} data={pieData}/>
                    </div>
                  </div>
                </div>

                <div className="bg-accent  rounded-xl p-5  box-border">
                  <Bar options={options.bar} data={data}/>
                </div>
              </div>
            </div>

            <div className={"flex flex-col gap-[10px]"}>
              <div className={"w-[300px] h-[150px] bg-accent rounded-[15px] flex justify-center items-center"}>
                <div className={"flex flex-col"}>
                  <div>Total Spent</div>
                  <div><Eth data={"17K"} size={"large"}/></div>
                </div>
              </div>
              <div className={"w-[300px] h-[150px] bg-accent rounded-[15px] flex justify-center items-center"}>
                <div className={"flex flex-col"}>
                  <div>Total Spent</div>
                  <div><Eth data={"17K"} size={"large"}/></div>
                </div>
              </div>
              <div className={"w-[300px] h-[150px] bg-accent rounded-[15px] flex justify-center items-center"}>
                <div className={"flex flex-col"}>
                  <div>Total Spent</div>
                  <div><Eth data={"17K"} size={"large"}/></div>
                </div>
              </div>
              <div className={"w-[300px] h-[150px] bg-accent rounded-[15px] flex justify-center items-center"}>
                <div className={"flex flex-col"}>
                  <div>Total Spent</div>
                  <div><Eth data={"17K"} size={"large"}/></div>
                </div>
              </div>

            </div>
          </div>





        </div>
      </div>


    </div>


  </div>;
};

export default Home;