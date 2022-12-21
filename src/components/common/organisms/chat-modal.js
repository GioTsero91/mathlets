import {createContext, useContext, useState} from "react"
import {NftImages} from "../../../pages/whale/components/NFT/NFT"

const traits = [
  "Background",
  "Jacket",
  "Helmet",
  "Mouth",
  "Body",
  "Torso",
  "Legs",
  "Accessories",
  "Shoulders",
  "Type"
]

const ChatModalContext = createContext({
  chatModalOpen: false,
  setChatModalOpen: () => {
  }
})

export default ChatModalContext

export const ChatModal = () => {
  const {chatModalOpen, setChatModalOpen} = useContext(ChatModalContext)

  const Items = Array.from({length: 20}, () => {
    return ""
  })

  const names = [
    "Shmondo",
    "Snadrik",
    "Aval",
    "Nikush",
    "BlizZy",
    "Destroyer119",
    "Slayer134",
    "Whale223"
  ]

  return <div onClick={() => {
    setChatModalOpen(false)
  }}
              className={"transition-all ease-in-out duration-300 fixed z-[30] w-full h-full left-0 top-0 bg-[#00000088] flex items-center justify-center " +
                (chatModalOpen ? "opacity-1 pointer-events-auto" : "opacity-0 pointer-events-none")}>}>
    <div className={"flex gap-[30px] transition-all ease-in-out duration-300 fixed bottom-[100px] right-[20px] z-[5] " +
      (chatModalOpen ? "opacity-1 pointer-events-auto" : "opacity-0 pointer-events-none")}>
      <div className={"w-[800px] h-[600px] bg-accent flex flex-col"}>
        <div className={"bg-gradient-to-r from-[#6C30CD] to-[#37A0EC] py-[5px]"}>
          <div
            className={"flex gap-[10px] overflow-hidden bg-gradient-to-r from-[#2B3C5E] to-[#352758] py-[15px] px-[10px]"}>
            <div className={"flex flex-col items-center justify-center gap-[15px] text-sm"}>
              <img src={NftImages[Math.floor(Math.random() * NftImages.length)]}
                   className={"w-[40px] h-[40px] rounded-full"}/>
              {names[Math.floor(Math.random() * names.length)]}
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={(e) => {
          e.stopPropagation()
        }}
        className={"shadow-[0_0px_20px_5px_rgba(0,0,0,0.3)] bg-accent relative " +
          "rounded-lg flex flex-col items-stretch w-[500px] h-[600px] "}>

        <div className={"flex justify-between m-[20px]"}>
          Activity
          <img src={require("assets/images/icons/common/filters.svg").default}/>
        </div>

        <div className={"bg-gradient-to-r from-[#6C30CD] to-[#37A0EC] py-[5px]"}>
          <div
            className={"flex gap-[10px] overflow-hidden bg-gradient-to-r from-[#2B3C5E] to-[#352758] py-[15px] px-[10px]"}>
            {
              Items.map(() => {
                return <div className={"flex flex-col items-center justify-center gap-[15px] text-sm"}>
                  <img src={NftImages[Math.floor(Math.random() * NftImages.length)]}
                       className={"w-[40px] h-[40px] rounded-full"}/>
                  {names[Math.floor(Math.random() * names.length)]}
                </div>
              })
            }
          </div>
        </div>


        <div className={"flex flex-col gap-[0px]"}>
          <div className={"flex p-[20px] py-[10px] gap-[20px] text-sm"}>
            <img src={NftImages[Math.floor(Math.random() * NftImages.length)]}
                 className={"w-[40px] h-[40px] rounded-full"}/>

            <div className={"flex flex-col gap-[10px] text-[#37A0EC]"}>
              {names[Math.floor(Math.random() * names.length)]}

              <div
                className={"rounded-full rounded-tl-xl  bg-gradient-to-r from-[#64D6ED] to-[#6C31CD] text-[#fff] font-light px-[30px] py-[15px]"}>
                Lorem ipsum dolor sit amet, consectetuer
              </div>
            </div>
          </div>

          <div className={"flex p-[20px] py-[10px] gap-[20px] text-sm"}>
            <img src={NftImages[Math.floor(Math.random() * NftImages.length)]}
                 className={"w-[40px] h-[40px] rounded-full"}/>

            <div className={"flex flex-col gap-[10px] text-[#37A0EC]"}>
              {names[Math.floor(Math.random() * names.length)]}

              <div
                className={"rounded-full rounded-tl-xl  bg-gradient-to-r from-[#8D35A3] to-[#F55BB1] text-[#fff] font-light px-[30px] py-[15px]"}>
                Lorem ipsum dolor sit amet, consectetuer
              </div>
            </div>
          </div>

          <div className={"flex p-[20px] py-[10px] gap-[20px] text-sm"}>
            <img src={NftImages[Math.floor(Math.random() * NftImages.length)]}
                 className={"w-[40px] h-[40px] rounded-full"}/>

            <div className={"flex flex-col gap-[10px] text-[#37A0EC]"}>
              {names[Math.floor(Math.random() * names.length)]}

              <div
                className={"rounded-full bg-[#8D35A344] border-[2px] border-[#8D35A3] text-[#fff] font-light px-[30px] py-[6px]"}>
                Lorem ipsum dolor sit amet, consectetuer
              </div>
              <div
                className={"rounded-full bg-[#8D35A344] border-[2px] border-[#8D35A3] text-[#fff] font-light px-[30px] py-[6px]"}>
                Lorem ipsum dolor sit amet, consectetuer
              </div>
            </div>
          </div>
        </div>

        <div className={"flex gap-[15px] absolute bottom-[20px] w-full justify-between"}>
          <input placeholder={"Send a message.."}
                 className={" flex-1 ml-[20px] rounded-full bg-[#37A0EC22] border-[2px] border-[#37A0EC] px-[20px] py-[10px]"}>
          </input>
          <div className={"relative cursor-pointer left-[-60px] w-[0px] top-[8px] overflow-visible"}>
            <img className={"!max-w-[100px]"} src={require("assets/images/icons/chat/smiley.svg").default}/>
          </div>

          <div className={"flex justify-center items-center w-[50px] h-[50px] mr-[10px]"}>
            <img src={require("assets/images/icons/chat/send.svg").default} className={"absolute cursor-pointer "}/>
            <img src={require("assets/images/icons/chat/send-arrow.svg").default}
                 className={"w-[30px] relative cursor-pointer mr-[5px]"}/>
          </div>
        </div>


      </div>
    </div>

  </div>
}