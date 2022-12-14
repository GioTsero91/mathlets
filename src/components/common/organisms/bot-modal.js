import {createContext, useContext, useState} from "react"

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

const BotModalContext = createContext({
  botModalOpen: false,
  setBotModal: () => {
  }
})

export default BotModalContext

export const BotModal = () => {
  const [traitsOpen, setTraitsOpen] = useState(false)
  const {botModalOpen, setBotModalOpen} = useContext(BotModalContext)

  return <div onClick={() => {
    setBotModalOpen({open: false})
  }}
              className={"transition-all ease-in-out duration-300 fixed z-[30] w-full h-full left-0 top-0 bg-[#00000088] flex items-center justify-center " +
                (botModalOpen.open ? "opacity-1 pointer-events-auto" : "opacity-0 pointer-events-none")}>}>
    <div onClick={(e) => {
      e.stopPropagation()
    }} className={"bg-accent rounded-lg flex flex-col items-center p-[20px] pr-[40px] relative"}>
      New owl
      <div className={"w-full mt-[25px] mb-[10px] text-sm"}>
        Choose Project
      </div>
      <div className={"flex"}>
        <input value={botModalOpen?.project ?? ""} className={"outline-none rounded bg-bg w-[300px] p-[3px] text-sm"}/>
        <div
          className="rounded-full bg-no-repeat bg-center w-[22px] h-[22px] cursor-pointer flex items-center justify-center"
          style={{backgroundImage: 'url(' + require("assets/images/icons/common/ellipse.svg").default + ')'}}>
          <img
            className={"transition-all ease-in-out duration-300"}
            src={require("assets/images/icons/common/arrow-down.svg").default}/>
        </div>
      </div>

      <div className={"w-full mt-[25px] mb-[10px] text-sm"}>
        Choose NFT
      </div>
      <div className={"flex"}>
        <input className={"outline-none rounded bg-bg w-[300px] p-[3px]"}/>
        <div
          className="rounded-full bg-no-repeat bg-center w-[22px] h-[22px] cursor-pointer flex items-center justify-center"
          style={{backgroundImage: 'url(' + require("assets/images/icons/common/ellipse.svg").default + ')'}}>
          <img
            className={"transition-all ease-in-out duration-300"}
            src={require("assets/images/icons/common/arrow-down.svg").default}/>
        </div>
      </div>

      <div className={"w-full mt-[25px] mb-[10px] text-sm"}>
        Set Price
      </div>
      <div className={"flex gap-[10px] w-full"}>
        <input className={"outline-none rounded bg-bg w-[60px] p-[3px]"}/>
        -
        <input className={"outline-none rounded bg-bg w-[60px] p-[3px]"}/>
      </div>


      <div className={"flex gap-[20px] w-full mt-[25px] mb-[10px] text-sm"}>
        <div className={"flex flex-col"}>
          <div className={"my-[10px]"}>
            Set Quantity
          </div>
          <div className={"flex"}>
            <input className={"outline-none rounded bg-bg w-[80px] p-[3px]"}/>
            <div
              className="rounded-full bg-no-repeat bg-center w-[22px] h-[22px] cursor-pointer flex items-center justify-center"
              style={{backgroundImage: 'url(' + require("assets/images/icons/common/ellipse.svg").default + ')'}}>
              <img
                className={"transition-all ease-in-out duration-300"}
                src={require("assets/images/icons/common/arrow-down.svg").default}/>
            </div>
          </div>
        </div>

        <div className={"flex flex-col"}>
          <div className={"my-[10px]"}>
            Set Rank
          </div>
          <div className={"flex"}>
            <input className={"outline-none rounded bg-bg w-[80px] p-[3px]"}/>
            <div
              className="rounded-full bg-no-repeat bg-center w-[22px] h-[22px] cursor-pointer flex items-center justify-center"
              style={{backgroundImage: 'url(' + require("assets/images/icons/common/ellipse.svg").default + ')'}}>
              <img
                className={"transition-all ease-in-out duration-300"}
                src={require("assets/images/icons/common/arrow-down.svg").default}/>
            </div>
          </div>
        </div>

      </div>

      <div
        onClick={() => {
          setTraitsOpen(!traitsOpen)
        }}
        className={"cursor-pointer z-[1] absolute rotate-[-90deg] bg-accent shadow-[0_0px_10px_0px_rgba(0,0,0,0.3)] " +
          "rounded py-[5px] px-[40px] right-[-90px] top-[190px]"}>
        Set Traits
        <div className={"transition-all ease-in-out duration-300 flex justify-center items-center absolute " +
          "bottom-[-20px] left-[60px] w-[32px] h-[32px] bg-accent rounded-full shadow-[0_0px_10px_0px_rgba(0,0,0,0.3)] " +
          (traitsOpen ? "rotate-180" : "rotate-0")}>
          <img src={require("assets/images/icons/common/arrow-down.svg").default}/>
        </div>
      </div>

      <div className={"transition-all ease-in-out duration-300 absolute top-0 left-[320px] z-[-1]" +
        " bg-accent rounded-r-lg pl-[70px] h-full overflow-hidden " + (traitsOpen ? "w-[320px]" : "w-0")}>
        {
          traits.map((trait) => {
            return <div className={"flex rounded-full w-[200px] bg-bg justify-between px-[10px] py-[5px] my-[5px] ml-[40px]"}>
              {trait}
              <div
                className="rounded-full bg-no-repeat bg-center w-[22px] h-[22px] cursor-pointer flex items-center justify-center"
                style={{backgroundImage: 'url(' + require("assets/images/icons/common/ellipse.svg").default + ')'}}>
                <img
                  className={"transition-all ease-in-out duration-300"}
                  src={require("assets/images/icons/common/arrow-down.svg").default}/>
              </div>
            </div>
          })
        }
      </div>

    </div>
  </div>
}