import MiniChart from "../components/common/atoms/MiniChart";
import Status from "../components/common/atoms/Status";
import Eth from "../components/common/atoms/Eth";
import ExtraRowData from "../components/common/organisms/ExtraRowData";

export const projectItemGenerator = (data) => {
    return <div className="flex items-center p-3 w-full justify-start">
        <div className="overflow-hidden rounded-lg"
             style={
                 {
                     flex: "0 0 50px",
                     height: "50px",
                     backgroundImage: "url(" + data.img + ")",
                     backgroundPosition: "center",
                     backgroundSize: "cover",
                     backgroundRepeat: "no-repeat",
                 }
             }>
        </div>
        <div className="ml-5 flex flex-col">
            <div className={"text-sm font-normal text-" + data.color}>
                {data.name}
            </div>
            <div style={{maxWidth: "300px"}} className="flex flex-row text-sm font-light text-xs mt-3 items-center">
                <img src={require("assets/images/icons/common/discord.svg").default} />
                <span className="ml-1 text-[#A8E2FF]">{data.discord.count}</span>

                <img className="ml-5" src={require("assets/images/icons/common/twitter.svg").default} />
                <span className="ml-1 text-[#05ADFF]">{data.twitter.count}</span>

                <img className="ml-5" src={require("assets/images/icons/common/website.svg").default} />

                <img width={35} className="ml-5" src={require("assets/images/icons/common/magic-eden.png")} />
            </div>


        </div>
    </div>
}

export const whaleItemGenerator = (data) => {
    return <div className="flex items-center p-3 w-full justify-start">
        <div className="overflow-hidden rounded-lg"
             style={
                 {
                     flex: "0 0 50px",
                     height: "50px",
                     backgroundImage: "url(" + data.img + ")",
                     backgroundPosition: "center",
                     backgroundSize: "cover",
                     backgroundRepeat: "no-repeat",
                 }
             }>
        </div>
        <div className="ml-5 flex flex-col gap-[15px]">
            <div className={"text-sm font-normal text-" + data.color}>
                {data.name}
            </div>
            <div style={{maxWidth: "300px"}} className="flex flex-row text-sm font-light text-xs items-center">
                <img src={require("assets/images/icons/common/discord.svg").default} />
                <span className="ml-1 text-[#A8E2FF]">{data.discord.count}</span>

                <img className="ml-5" src={require("assets/images/icons/common/twitter.svg").default} />
                <span className="ml-1 text-[#05ADFF]">{data.twitter.count}</span>

                <img className="ml-5" src={require("assets/images/icons/common/website.svg").default} />

                <img width={35} className="ml-5" src={require("assets/images/icons/common/magic-eden.png")} />
            </div>
            <div className={"text-xs font-light"}>
                {data.wallet}
            </div>

        </div>
    </div>
}


export const statusGenerator = (data) => {
    return <Status data={data}></Status>
}

export const ethGenerator = (data) => {
    return <Eth data={data}></Eth>
}

export const miniChartsGenerator = (data) => {
    return <MiniChart/>
}

export const extraDataGenerator = (data) => {
    return <ExtraRowData data={data}></ExtraRowData>
}

export const buttonGenerator = (label) => {
  return <div className={"cursor-pointer rounded-full bg-gradient-to-br from-[#8D35A3] to-[#F55BB1] text-white px-3 py-1"}>{label}</div>
}