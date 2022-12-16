import FilterTabs from "../../components/common/molecules/FilterTabs";
import React from "react";
import {useSelector} from "react-redux";


const Upcoming = () => {

  const projects = useSelector((state) => state.upcoming.upcoming)


  return <div className={"w-[97%]"}>
    <div className={"bg-accent rounded-[10px] inline-block"}>
      <FilterTabs tabs={["Recommended", "Popular", "Recent"]}/>
    </div>

    <div className={"grid grid-cols-2 gap-[10px] mt-[10px] "}>
      {
        projects?.map((project) => {
          return <div className={"bg-accent flex rounded-[10px]"}>
            <img width={167} height={167} src={project.photo_link}/>
            <div className={"flex flex-col flex-1 p-[10px] text-[12px] justify-between"}>
              <div className={"flex flex-col"}>
                <div className={"w-full flex justify-between"}>
                  <div className={"flex flex-col gap-[5px]"}>
                    <div className={"text-[#9157F6]"}>
                      {project.project_name}
                    </div>
                    <div>
                      Whitelists spots left: 100
                    </div>
                    <div className={"h-[2px] w-[50px] bg-[#9157F6] mt-[5px]"}>

                    </div>
                  </div>
                  <div>
                    Pre-sale: 25.03.22
                  </div>
                </div>
                <div className={"mt-[10px]"}>
                <span className={"text-[#9157F6]"}>
                    Description:
                </span>
                  Lorem ipsum dolor ipsum dolor Lorem dolor ipsum dolor Lorem Lorem ipsum dolor ipsum dolor Lorem
                </div>
              </div>


              <div className={"flex justify-between"}>
                <div className={"text-[#F35AB1]"}>Price: {project.mint_price}</div>
                <div className={"flex gap-[10px]"}>
                  <img src={require("assets/images/icons/common/discord.svg").default} />
                  <span className="ml-1 text-[#A8E2FF]">123k</span>

                  <img className="ml-5" src={require("assets/images/icons/common/twitter.svg").default} />
                  <span className="ml-1 text-[#05ADFF]">22k</span>

                  <img className="ml-5" src={require("assets/images/icons/common/website.svg").default} />

                  <img width={35} className="ml-5" src={require("assets/images/icons/common/magic-eden.png")} />
                </div>
              </div>
            </div>
          </div>
        })
      }
    </div>
  </div>
}

export default Upcoming