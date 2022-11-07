import React from "react";


const Card = ({data}) => {

  return <div className={"inline-flex bg-bg rounded-[20px] bg-accent m-[5px] flex-col gap-[5px] text-[12px] "}>
    <img src={data?.image}/>
    <div className={"p-[5px]"}>
      <div className={"text-[#55BEFF]"}>
        {data?.name}
      </div>
      <div>
        {data?.rank}
      </div>
      <div className={"flex justify-end"}>
        <div className={"bg-gradient-to-r from-[#F48DA7] to-[#F35AB0] rounded-full px-[15px] py-[5px] cursor-pointer"}>
          {data?.price}
        </div>
      </div>
    </div>

  </div>
}

export default Card