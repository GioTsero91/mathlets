import React from "react";

const item = {
  width: "20%",
  textAlign: "center",
  overflow: "hidden",
}


const Activity = ({data}) => {

  return <div className={"text-[12px] bg-bg mb-[10px] mx-[10px] rounded-[10px] h-[95px] relative overflow-hidden"}>
    <div className={"h-full w-[5px] absolute"} style={{backgroundColor: data?.color}}></div>
    <div className={"flex w-full p-[10px] justify-between items-center h-full"}>


      <img  className={"rounded-lg h-full"} src={data?.image}/>
      <div style={item}>
        {data?.price}
      </div>

      <div style={item} className={"p-[5px] text-ellipsis w-[20%]"}>
        {data?.from}
      </div>

      <div style={item} className={"p-[5px] text-ellipsis  w-[20%]"}>
        {data?.to}
      </div>

      <div style={item} className={"p-[5px] text-ellipsis  w-[20%]"}>
        {data?.time}
      </div>

    </div>

    <div className={"px-[10px] text-ellipsis pb-[10px]"}>
      {data?.name}
    </div>
  </div>
}

export default Activity