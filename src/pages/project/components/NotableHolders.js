import React from "react";

const item = {
  width: "20%",
  textAlign: "center",
  overflow: "hidden",
}


const NotableHolders = () => {
  const holder = <div className={"bg-bg rounded-[10px] inline-flex w-[230px] justify-between p-[5px] m-[5px] text-[12px] h-[55px]"}>
    <img className={"w-[45px] h-[45px] rounded"}
         src={"https://lh3.googleusercontent.com/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT=s0"}/>
    <div className={"flex flex-col h-full justify-between"}>
      <div>Bitmap</div>
      <div>2 wallets</div>
    </div>
    <div className={"flex flex-col h-full justify-between"}>
      <div>Holds</div>
      <div>172</div>
    </div>
  </div>

  const holders = Array.from({length: 15}, () => holder)

  return <div className={"h-full overflow-auto px-[10px]"}>
    {holders}
  </div>
}

export default NotableHolders