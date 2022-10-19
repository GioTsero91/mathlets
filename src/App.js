import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Snipe from "./pages/Snipe";
import NoPage from "./pages/NoPage";
import CustomInput from "./components/common/atoms/CustomInput";
import Trends from "./pages/Trends";
import Newsletter from "./pages/Newsletter";
import BestDeal from "./pages/BestDeal";

function App() {

  return (
    <div id="main">
      <div id="header">
        <div className="w-1/3 flex flex-row items-center cursor-pointer">
          <img style={{height: "50px", margin: "15px", marginLeft: "40px"}} src={"images/owl.webp"}/>
          <div style={{color: '#F741C4'}}>
            Mathlete Owls
          </div>
        </div>
        <div className="w-1/3 flex justify-center">
          <CustomInput icon={"images/icons/common/search.svg"} width={"600px"}
                       placeholder={"Search NFT, Projects and more"}></CustomInput>
          <img className="cursor-pointer" src={"images/icons/common/filters.svg"}/>
        </div>
        <div className="flex items-center flex-row w-1/3 justify-end pr-10">
          <div className="flex items-center flex-row mr-10">
            <img className="mr-2" src={"images/icons/common/eth.svg"}/>
            <div>3421.67$</div>
          </div>

          <div className="flex items-center flex-row">
            <img className="mr-2" src={"images/icons/common/gas.svg"}/>
            <div>37$</div>
          </div>

          <div className="flex justify-center items-center ml-14">
            <img className="" src={"images/icons/common/ellipse.svg"}/>
            <img className="absolute" src={"images/icons/common/user.svg"}/>
          </div>
        </div>

      </div>

      <div className="mt-5" style={{display: "flex", flexDirection: "row", flex: 1, width: '100%'}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path="snipe" element={<Snipe/>}/>
              <Route path="trends" element={<Trends/>}/>
              <Route path="newsletter" element={<Newsletter/>}/>
              <Route path="best-deal" element={<BestDeal/>}/>
              <Route path="*" element={<NoPage/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>

    </div>
  );
}

export default App;
