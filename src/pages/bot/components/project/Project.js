import Card from "./components/Card"

const Project = () => {


  return <div className={"bg-bg rounded-[20px] p-[5px] m-[10px]"}>
    <div className={"flex w-full bg-[#30345C] items-center justify-between p-[10px] rounded-[15px] px-[20px]"}>
      <div className={"flex gap-[10px]"}>
        <img src={require("assets/images/icons/common/filters.svg").default}/>
        Filter By Keyword
      </div>
      <div className={"flex gap-[25px]"}>
        <div className={"flex gap-[10px] items-center"}>
          Types
          <img src={require("assets/images/icons/common/arrow-down.svg").default}/>
        </div>
        <div className={"flex gap-[10px] items-center"}>
          Specific
          <img src={require("assets/images/icons/common/arrow-down.svg").default}/>
        </div>
        <div className={"flex gap-[10px] items-center"}>
          Date
          <img src={require("assets/images/icons/common/arrow-down.svg").default}/>
        </div>
        <div className={"flex gap-[10px] items-center"}>
          Price
          <img src={require("assets/images/icons/common/arrow-down.svg").default}/>
        </div>
      </div>
    </div>

    <div className={"w-full flex gap-[20px] p-[10px]"}>
      <div className={"flex flex-col flex-1"}>
        <div className={"flex justify-between w-full p-[15px] bg-accent rounded-[20px] items-center"}>
          <div className={"text-[#F741C4]"}>To Do</div>
          <div className={"flex items-center px-[10px] py-[5px] bg-[#F741C4] rounded-[15px]"}>+ Add new</div>
        </div>

        <Card data={{
          color: "#F741C4"
        }}/>
      </div>

      <div className={"flex flex-col flex-1"}>
        <div className={"flex justify-between w-full p-[15px] bg-accent rounded-[20px] items-center"}>
          <div className={"text-[#8D35A3]"}>In progress</div>
        </div>

        <Card data={{
          color: "#8D35A3"
        }}/>
        <Card data={{
          color: "#8D35A3"
        }}/>
      </div>

      <div className={"flex flex-col flex-1"}>
        <div className={"flex justify-between w-full p-[15px] bg-accent rounded-[20px] items-center"}>
          <div className={"text-[#55BEFF]"}>Done</div>
        </div>

        <Card data={{
          color: "#55BEFF"
        }}/>
        <Card data={{
          color: "#55BEFF"
        }}/>
        <Card data={{
          color: "#55BEFF"
        }}/>
        <Card data={{
          color: "#55BEFF"
        }}/>
      </div>
    </div>

  </div>
}

export default Project