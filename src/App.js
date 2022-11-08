import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Whales from "./pages/Whales";
import NoPage from "./pages/NoPage";
import CustomInput from "./components/common/atoms/CustomInput";
import Trends from "./pages/Trends";
import Newsletter from "./pages/newsletter/Newsletter";
import BestDeal from "./pages/BestDeal";
import Mints from "./pages/Mints";
import {parseExcel} from "./services/Faker"
import {useEffect} from "react"
import Whale from "./pages/whale/Whale";
import Upcoming from "./pages/upcomming/Upcomming";
import Bot from "./pages/bot/Bot"

function App() {
  useEffect(() => {
    parseExcel()
  }, [])

  return (
    <div id="main">
      <div id="header">
        <div className="w-1/3 flex flex-row items-center cursor-pointer">
          <img style={{height: "50px", margin: "15px", marginLeft: "40px"}} src={require("assets/images/icons/common/logo.png")}/>
          <div style={{color: '#FFF'}}>
            Mathlete Owls
          </div>
        </div>
        <div className="w-1/3 flex justify-center gap-[15px]">
          <CustomInput icon={require("assets/images/icons/common/search.svg").default} width={"600px"}
                       placeholder={"Search NFT, Projects and more"}/>
          <img className="cursor-pointer" src={require("assets/images/icons/common/filters.svg").default}/>
        </div>
        <div className="flex items-center flex-row w-1/3 justify-end pr-10">
          <div className="flex items-center flex-row mr-10">
            <img className="mr-2" src={require("assets/images/icons/common/eth.svg").default}/>
            <div>3421.67$</div>
          </div>

          <div className="flex items-center flex-row">
            <img className="mr-2" src={require("assets/images/icons/common/gas.svg").default}/>
            <div>37$</div>
          </div>

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
              <Route path="*" element={<NoPage/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>

    </div>
  );
}

export default App;
