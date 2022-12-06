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
import React, {useEffect, useRef, useState} from 'react';
import {useParams} from "react-router-dom";
import {projectItemGenerator} from "../../services/Generator";
import Eth from "../../components/common/atoms/Eth";
import {Line} from "react-chartjs-2";
import Overview from "../whale/components/Overview";
import NFT from "../whale/components/NFT/NFT";
import DropDown from "../../components/common/atoms/DropDown";
import NotableHolders from "./components/NotableHolders";
import HolderDistribution from "./components/HolderDistribution";

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

const options =  {
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
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
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

const rows = [];

for (let i = 0; i < 8; i++) {
  const row = [];
  row.push(<div className={"flex items-center justify-between w-full text-[12px] mr-[15px]"}>
    <img
      src={"https://lh3.googleusercontent.com/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT=s0"}
      className={"w-[45px] h-[45px] rounded-[5px]"}/>
    <div className={"flex flex-col h-full justify-between"}>
      <div className={"flex justify-between"}>
        <div>Rank:</div>
        <div>1</div>
      </div>
      <div className={"flex justify-between mt-[5px]"}>
        <div>Price:</div>
        <div>0.001</div>
      </div>
    </div>
    <div className={"flex flex-col items-end"}>
      <div>7 min ago</div>
      <div className={"mt-[5px]"}>#1234</div>
    </div>
  </div>)
  rows.push(row)
}

const Project = () => {

  const [activeTab, setActiveTab] = useState(0);
  const { wallet } = useParams();

  return <div className="w-full relative h-full">
    <div style={{width: "96%", height: "calc(100% - 100px)"}} className="flex flex-col">
      <div className={"bg-accent rounded-[10px] w-full flex justify-between mt-[50px]"}>
        <div>
          {projectItemGenerator({
            name: "Azuki",
            img:"https://lh3.googleusercontent.com/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT=s0",
            discord: {url: "", count: "11.22k"},
            twitter: {url: "", count: "12.21k"},
            website: {url: ""},
            opensea: {url: ""},
          })}
        </div>
        <div className={"flex flex-col justify-between relative top-[-30px] items-center"}>
          <div>Supply</div>
          2 534
        </div>

        <div className={"flex flex-col justify-between relative top-[-30px] items-center"}>
          <div>Owners</div>
          123
        </div>

        <div className={"flex flex-col justify-between relative top-[-30px] items-center"}>
          <div>Royalty</div>
          1.5%
        </div>

        <div className={"flex flex-col justify-between relative top-[-30px] items-center"}>
          <div>Unique holders</div>
          2 534
        </div>

        <div className={"flex flex-col justify-between relative top-[-30px] items-center"}>
          <div>Floor</div>
          <Eth data={1.5}></Eth>
        </div>

        <div className={"flex flex-col justify-between relative top-[-30px] items-center"}>
          <div>Volume</div>
          <Eth data={1222}></Eth>
        </div>

        <div className={"flex flex-col justify-between relative top-[-30px] items-center"}>
          <div>Statistic</div>
          2 534
        </div>
      </div>

      <div className={"flex mt-[10px] gap-[20px] flex-1 h-full"}>
        <div className={"flex flex-col flex-1 h-full"}>
          <div className={"bg-accent rounded-[10px] h-[40%]"} style={{flex: "1 1 auto"}}>
            <Line options={options} data={data}/>
          </div>
          <div className={"flex flex-col mt-[15px] h-[60%]"}  style={{flex: "1 1 auto"}}>
            <div className={"flex relative top-[10px]"} >
              <div onClick={() => {
                setActiveTab(0)
              }}
                   className={"cursor-pointer transition-all ease-in-out duration-300 px-[20px] py-[10px] pb-[20px] rounded-t-[23px] " + (activeTab === 0 ? "bg-accent" : "")}>
                Notable Holders
              </div>
              <div onClick={() => {
                setActiveTab(1)
              }}
                   className={"cursor-pointer transition-all ease-in-out duration-300 px-[20px] py-[10px]  pb-[20px] rounded-t-[23px] " + (activeTab === 1 ? "bg-accent" : "")}>
                Holder Distribution
              </div>
            </div>
            <div className={"bg-accent flex-1 rounded-[10px] pt-[15px]"}>
              {activeTab === 0 && <NotableHolders/>}
              {activeTab === 1 && <HolderDistribution/>}
            </div>
          </div>
        </div>

        <div className={"flex flex-1 flex-col bg-accent rounded-[10px] h-full"}>
          <div className={"w-full flex justify-between p-[10px]"}>
            <img src={require("assets/images/icons/common/filters.svg").default}/>
            <div className={"flex gap-[10px] items-center font-normal justify-center"}>
              Price <div className={"rounded-[7px] bg-[#00000055] py-[3px] px-[10px]"}>0.5 - 1.6</div>
            </div>
            <div className={"flex gap-[10px] items-center font-normal"}>
              Rank <div className={"rounded-[7px] bg-[#00000055] py-[3px] px-[10px]"}>0.5 - 1.6</div>
            </div>
            <div className={"flex justify-end gap-[10px] items-center font-normal"}>
              Traits <DropDown color={"#00000055"} data={["trait1", "trait2"]}/>
            </div>
          </div>

          <div className={"flex gap-[10px] p-[20px]"}>
            <div className={"flex flex-col p-[20px] bg-bg rounded-[10px] flex-1"}>
              <div className={" border-b border-accent"}>
                Sales
              </div>
              {
                rows.map((row) => {
                  return <div className={"p-[10px] border-b border-accent"}>
                    {row}
                  </div>
                })
              }
            </div>
            <div className={"flex flex-col p-[20px] bg-bg rounded-[10px] flex-1"}>
              <div className={"flex gap-[30px]"}>
                <div className={"flex gap-[10px] items-center"}>
                  <div className={"rounded-full w-[10px] h-[10px] bg-[#F741C4]"}></div>
                  Listings
                </div>
                <div className={"flex gap-[10px] items-center"}>
                  <div className={"rounded-full w-[10px] h-[10px] bg-[#55BEFF]"}></div>
                  Delistings
                </div>
              </div>
              <div>
                {
                  rows.map((row) => {
                    return <div className={"p-[10px] border-b border-accent"}>
                      {row}
                    </div>
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>


  </div>;
};

export default Project;