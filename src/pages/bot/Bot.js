import React, {useState} from "react"
import Eth from "../../components/common/atoms/Eth"
import Project from "./components/project/Project"
import Mint from "./components/mint/Mint"


const Bot = () => {

  const [activeTab, setActiveTab] = useState(0)

  return <div className="w-full relative">
    <div style={{width: "96%"}} className="flex flex-col">

      <div className={"w-full flex justify-between mt-[20px]"}>
        <div className={"flex relative top-[15px]"}>
          <div onClick={() => {
            setActiveTab(0)
          }}
               className={"cursor-pointer transition-all ease-in-out duration-300 px-[20px] py-[10px] pb-[20px] rounded-t-[23px] " + (activeTab === 0 ? "bg-accent" : "")}>
            Project
          </div>
          <div onClick={() => {
            setActiveTab(1)
          }}
               className={"cursor-pointer transition-all ease-in-out duration-300 px-[20px] py-[10px]  pb-[20px] rounded-t-[23px] " + (activeTab === 1 ? "bg-accent" : "")}>
            Mint
          </div>
        </div>

        <div className={"bg-accent rounded-[10px] p-[10px] px-[20px] flex flex-col gap-[10px]"}>
          <div className={"text-white flex gap-[30px] items-center"}>
            <div>
              Total cost of Assignments:
            </div>
            <div className={"flex items-center gap-[10px]"}>
              <div className={"w-[14px] h-[14px] rounded-full bg-[#F741C4]"}></div>
              <div className={"text-[14px] flex gap-[5px]"}>To Do <Eth data={25}></Eth></div>
            </div>

            <div className={"flex items-center gap-[10px]"}>
              <div className={"w-[14px] h-[14px] rounded-full bg-[#8D35A3]"}></div>
              <div className={"text-[14px] flex gap-[5px]"}>In progress <Eth data={25}></Eth></div>
            </div>

            <div className={"flex items-center gap-[10px]"}>
              <div className={"w-[14px] h-[14px] rounded-full bg-[#55BEFF]"}></div>
              <div className={"text-[14px] flex gap-[5px]"}>Done <Eth data={25}></Eth></div>
            </div>

            <div className={"flex items-center gap-[10px]"}>
              <div className={"w-[14px] h-[14px] rounded-full bg-[#FE3232]"}></div>
              <div className={"text-[14px] flex gap-[5px]"}>Cancelled <Eth data={25}></Eth></div>
            </div>
          </div>
          <div className={"relative h-[15px] w-full mb-[15px]"}>
            <div className={"absolute w-full h-full bg-[#F741C4] rounded-full"}></div>
            <div className={"absolute w-[70%] right-0 h-full bg-[#8D35A3] rounded-full z-[1]"}></div>
            <div className={"absolute w-[50%] right-0 h-full bg-[#55BEFF] rounded-full z-[2]"}></div>
            <div className={"absolute w-[10%] right-[5px] h-[50%] my-auto top-0 bottom-0 bg-[#FE3232] rounded-full z-[3]"}></div>
          </div>
        </div>
      </div>

      <div className={"bg-accent rounded-[20px] relative top-[-25px]"}>
        {activeTab === 0 && <Project/>}
        {activeTab === 1 && <Mint/>}
      </div>


    </div>


  </div>
}

export default Bot