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
import Overview from "./components/Overview";
import NFT from "./components/NFT/NFT";

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

const Whale = () => {

  const [activeTab, setActiveTab] = useState(0);
  const { wallet } = useParams();

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

        <div className={"text-sm flex items-center bg-accent gap-[60px] relative top-[-10px] rounded-[15px] px-[10px] pt-[10px] pb-[20px]"}>
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
        {activeTab === 0 && <Overview></Overview>}
        {activeTab === 1 && <NFT></NFT>}
      </div>


    </div>


  </div>;
};

export default Whale;