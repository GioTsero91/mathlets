import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import Whales from "./pages/Whales"
import NoPage from "./pages/NoPage"
import CustomInput from "./components/common/atoms/CustomInput"
import Trends from "./pages/Trends"
import Newsletter from "./pages/newsletter/Newsletter"
import BestDeal from "./pages/BestDeal"
import Mints from "./pages/Mints"
import {parseExcel} from "./services/Faker"
import {useEffect, useState} from "react"
import Whale from "./pages/whale/Whale"
import Upcoming from "./pages/upcomming/Upcomming"
import Bot from "./pages/bot/Bot"
import Project from "./pages/project/Project"
import BotModalContext,{BotModal} from "./components/common/organisms/bot-modal"

function App() {
  useEffect(() => {
    parseExcel()
  }, [])


  const [searchOpen, setSearchOpen] = useState(false)
  const [botModalOpen, setBotModalOpen] = useState(false)

  return (
    <BotModalContext.Provider value={{
      botModalOpen,
      setBotModalOpen
    }}>
      <div id="main">
        <BotModal></BotModal>

        <div onClick={() => {
          setSearchOpen(false)
        }} className={"fixed top-0 left-0 w-full h-full bg-[#00000088] z-[12] transition-all ease-in-out duration-300 "
          + (searchOpen ? "opacity-1 pointer-events-auto" : "opacity-0 pointer-events-none")}>

        </div>
        <div id="header">
          <div className="w-1/3 flex flex-row items-center cursor-pointer">
            <img style={{height: "50px", margin: "15px", marginLeft: "40px"}}
                 src={require("assets/images/icons/common/logo.png")}/>
            <div style={{color: '#FFF'}}>
              Mathlete Owls
            </div>
          </div>
          <div
            onClick={() => {
              setSearchOpen(true)
            }}
            className={"fixed top-[60px] w-[750px] p-[30px] pt-[15px] w-1/3 flex flex-col justify-center rounded-xl relative z-[20] transition-all ease-in-out duration-300 "
              + (searchOpen ? "bg-accent" : "bg-none")}>
            <div className={"flex justify-center items-center gap-[15px]"}>
              <CustomInput
                icon={require("assets/images/icons/common/search.svg").default}
                width={"650px"}
                placeholder={"Search NFT, Projects and more"}/>
              <img className="cursor-pointer" src={require("assets/images/icons/common/filters.svg").default}/>
            </div>
            <div className={"flex gap-[20px] w-full justify-center mt-[20px] transition-all ease-in-out duration-300 "
              + (searchOpen ? "opacity-1 pointer-events-auto" : "opacity-0 pointer-events-none")}>

              <div className={"flex flex-col gap-[15px] items-start"}>
                <div className={"flex gap-[10px] justify-center items-center"}>
                  <img src={require("assets/images/icons/common/filter-date.svg").default}/> Date
                </div>
                <div className={"flex"}>
                  <input className={"outline-none bg-accent border-b-[2px] border-white w-[60px]"}/>
                  <img src={require("assets/images/icons/common/arrow-down.svg").default}
                       className={"relative left-[-15px]"}/>
                  -
                  <input className={"outline-none bg-accent border-b-[2px] border-white w-[60px] ml-[10px]"}/>
                  <img src={require("assets/images/icons/common/arrow-down.svg").default}
                       className={"relative left-[-15px]"}/>
                </div>
              </div>

              <div className={"flex flex-col gap-[15px] items-start"}>
                <div className={"flex gap-[10px] justify-center items-center"}>
                  <img src={require("assets/images/icons/common/filter-price.svg").default}/> Price
                </div>
                <div className={"flex"}>
                  <input className={"outline-none bg-accent border-b-[2px] border-white w-[60px]"} placeholder={"min"}/>
                  -
                  <input className={"outline-none bg-accent border-b-[2px] border-white w-[60px] ml-[10px]"}
                         placeholder={"max"}/>
                  <div src={require("assets/images/icons/common/arrow-down.svg").default}
                       className={"relative left-[-15px]"}>$
                  </div>
                </div>
              </div>

              <div className={"flex flex-col gap-[15px] items-start"}>
                <div className={"flex gap-[10px] justify-center items-center"}>
                  <img src={require("assets/images/icons/common/filter-rank.svg").default}/> Rank
                </div>
                <div className={"flex"}>
                  <input className={"outline-none bg-accent border-b-[2px] border-white w-[60px]"} placeholder={"min"}/>
                  -
                  <input className={"outline-none bg-accent border-b-[2px] border-white w-[60px] ml-[10px]"}
                         placeholder={"max"}/>
                </div>
              </div>

              <div
                className={"flex items-center justify-center rounded-full bg-gradient-to-r from-[#F55BB1] gap-[5px] to-[#8D35A3] w-[100px] h-[40px] self-end cursor-pointer"}>
                <img src={require("assets/images/icons/common/search.svg").default}/>
                Search
              </div>


            </div>
          </div>
          <div className="flex items-center flex-row w-1/3 justify-end pr-10">
            <div className="flex items-center flex-row mr-10">
              <img width={30} className="mr-2" src={require("assets/images/icons/common/eth.svg").default}/>
              <div>3421.67$</div>
            </div>

            {/*<div className="flex items-center flex-row">*/}
            {/*  <img className="mr-2" src={require("assets/images/icons/common/gas.svg").default}/>*/}
            {/*  <div>37$</div>*/}
            {/*</div>*/}

            <div className="flex justify-center items-center ml-14">
              <img className="" src={require("assets/images/icons/common/ellipse.svg").default}/>
              <img className="absolute" src={require("assets/images/icons/common/user.svg").default}/>
            </div>
          </div>

        </div>

        <div className="mt-5" style={{display: "flex", flexDirection: "row", flex: 1, width: '100%'}}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="whale" exact element={<Whales/>}/>
                <Route path="whale/:wallet" element={<Whale/>}/>
                <Route path="bot" element={<Bot/>}/>
                <Route path="trends" element={<Trends/>}/>
                <Route path="mints" element={<Mints/>}/>
                <Route path="newsletter" element={<Newsletter/>}/>
                <Route path="best-deal" element={<BestDeal/>}/>
                <Route path="upcoming-nft" element={<Upcoming/>}/>
                <Route path="project/:address" element={<Project/>}/>
                <Route path="*" element={<NoPage/>}/>
              </Route>
            </Routes>
          </BrowserRouter>
        </div>

      </div>
    </BotModalContext.Provider>
  )
}

export default App
