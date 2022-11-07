import {CONFIG} from "../../config";
import FilterTabs from "../../components/common/molecules/FilterTabs";
import React from "react";


const Upcoming = () => {


  const projects = Array.from({length: 20}, () => {
    return {
      image: require("assets/images/pics/upcoming.png"),
      name: "Otherdeed for Otherside",
      presale: "25.04.22",
      whitelist: "100",
      description: "Lorem ipsum dolor ipsum dolor Lorem dolor ipsum dolor Lorem Lorem ipsum dolor ipsum dolor Lorem ",
      price: "12.00",
      discord: "123k",
      twitter: "371.9k"
    }
  });

  return <div className={"w-[97%]"}>
    <div className={"bg-accent rounded-[10px] inline-block"}>
      <FilterTabs tabs={["Recommended", "Popular", "Recent"]}/>
    </div>

    <div className={"grid grid-cols-2 gap-[10px] mt-[10px] "}>
      {
        projects.map((project) => {
          return <div className={"bg-accent flex rounded-[10px]"}>
            <img src={project.image}/>
            <div className={"flex flex-col flex-1 p-[10px] text-[12px] justify-between"}>
              <div className={"flex flex-col"}>
                <div className={"w-full flex justify-between"}>
                  <div className={"flex flex-col gap-[5px]"}>
                    <div className={"text-[#9157F6]"}>
                      {project.name}
                    </div>
                    <div>
                      Whitelists spots left: {project.whitelist}
                    </div>
                    <div className={"h-[2px] w-[50px] bg-[#9157F6] mt-[5px]"}>

                    </div>
                  </div>
                  <div>
                    Pre-sale: {project.presale}
                  </div>
                </div>
                <div className={"mt-[10px]"}>
                <span className={"text-[#9157F6]"}>
                    Description:
                </span>
                  {project.description}
                </div>
              </div>


              <div className={"flex justify-between"}>
                <div className={"text-[#F35AB1]"}>Price: {project.price}</div>
                <div className={"flex gap-[10px]"}>
                  <img src={require("assets/images/icons/common/discord.svg").default} />
                  <span className="ml-1 text-[#A8E2FF]">{project.discord}</span>

                  <img className="ml-5" src={require("assets/images/icons/common/twitter.svg").default} />
                  <span className="ml-1 text-[#05ADFF]">{project.twitter}</span>

                  <img className="ml-5" src={require("assets/images/icons/common/website.svg").default} />

                  <img className="ml-5" src={require("assets/images/icons/common/opensea.svg").default} />
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