import React from "react";
import {NftImages} from "../../whale/components/NFT/NFT";

const item = {
  width: "20%",
  textAlign: "center",
  overflow: "hidden",
}


const NotableHolders = () => {

  const holders = Array.from({length: 15}, () => {
    return <div className={"bg-bg rounded-[10px] inline-flex w-[230px] justify-between p-[5px] m-[5px] text-[12px] h-[55px]"}>
      <img className={"w-[45px] h-[45px] rounded"}
           src={NftImages[Math.floor(Math.random()*NftImages.length)]}/>
      <div className={"flex flex-col h-full justify-between"}>
        <div>Bitmap</div>
        <div>2 wallets</div>
      </div>
      <div className={"flex flex-col h-full justify-between"}>
        <div>Holds</div>
        <div>172</div>
      </div>
    </div>
  })

  return <div className={"h-full overflow-auto px-[10px]"}>
    {holders}
  </div>
}

export default NotableHolders
