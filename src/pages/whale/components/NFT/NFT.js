import CustomInput from "../../../../components/common/atoms/CustomInput";
import React from "react";
import Card from "./components/Card";
import Activity from "./components/activity";
import {useNavigate} from "react-router-dom"


const NFT = () => {
  const navigate = useNavigate()

  const nfts = Array.from({length: 50}, () => {
    return {
      image: require("assets/images/pics/nft.png"),
      name: "Bored Ape Yacht Club",
      rank: "#2563",
      price: "116.63"
    }
  });

  const activities = Array.from({length: 50}, () => {
    return {
      image: require("assets/images/pics/profile.png"),
      name: "Bored Ape Yacht Club",
      price: "116.53",
      from: "123lmdsokjmqokweejmnr",
      to: "12900oi1kwe0ok12312",
      time: "7h ago",
    }
  });

  return <div className={"bg-accent rounded-[20px] p-[5px]"}>
    <div className={"w-full flex justify-between p-[15px]"}>
      <div className={"flex justify-center items-center gap-[40px]"}>
        <div className={"flex justify-center items-center gap-[10px]"}>
          <div className={"w-[14px] h-[14px] rounded-full bg-[#55BEFF]"}></div>
          <div className={"text-[14px]"}>Collected 18</div>
        </div>
        <div className={"flex justify-center items-center gap-[10px] opacity-50"}>
          <div className={"w-[14px] h-[14px] rounded-full bg-[#413884]"}></div>
          <div className={"text-[14px]"}>Created 1</div>
        </div>
        <div className={"flex justify-center items-center gap-[10px] opacity-50"}>
          <div className={"w-[14px] h-[14px] rounded-full bg-[#F741C4]"}></div>
          <div className={"text-[14px]"}>Favorited 7</div>
        </div>

        <div className={"flex items-center gap-[20px]"}>
          <div className={"flex gap-[5px] items-center"}>
            More <img className={"h-[10px]"} src={require("assets/images/icons/common/arrow-down.svg").default}/>
          </div>
          <CustomInput icon={require("assets/images/icons/common/search.svg").default} width={"300px"}
                       placeholder={"Search Whale, Whale-hash"}/>
          <img className={"h-[30px]"} src={require("assets/images/icons/common/filters.svg").default}/>
        </div>
      </div>

      <div className={"flex items-center gap-[20px]"}>
        <div>
          Activity:
        </div>
        <div className={"flex justify-center items-center gap-[10px]"}>
          <div className={"w-[14px] h-[14px] rounded-full bg-[#55BEFF]"}></div>
          <div className={"text-[14px]"}>List</div>
        </div>

        <div className={"flex justify-center items-center gap-[10px] opacity-50"}>
          <div className={"w-[14px] h-[14px] rounded-full bg-[#413884]"}></div>
          <div className={"text-[14px]"}>Cancel</div>
        </div>

        <div className={"flex justify-center items-center gap-[10px] opacity-50"}>
          <div className={"w-[14px] h-[14px] rounded-full bg-[#F741C4]"}></div>
          <div className={"text-[14px]"}>Sale</div>
        </div>

        <div className={"flex justify-center items-center gap-[10px] opacity-50"}>
          <div className={"w-[14px] h-[14px] rounded-full bg-[#F741C4]"}></div>
          <div className={"text-[14px]"}>Transfer</div>
        </div>
      </div>

    </div>

    <div className={"flex bg-bg w-full h-[70vh] rounded-l-[20px]"}>
      <div className={"w-[70%] overflow-auto p-[20px]"}>
        {
          nfts.map((nft) => {
            return <span className={"cursor-pointer"} onClick={()=> {navigate("/bot")}}><Card data={nft}/></span>
          })
        }
      </div>

      <div className={"bg-accent h-[calc(100% - 5px) w-[30%] mt-[5px] overflow-auto"}>
        <div className={"w-full text-white flex justify-between p-[10px] px-[25px]"}>
          <div>Item</div>
          <div>Price</div>
          <div>From</div>
          <div>To</div>
          <div>Time</div>
        </div>
        {
          activities.map((activity) => {
            return <Activity data={activity}/>
          })
        }
      </div>
    </div>

  </div>
}

export default NFT