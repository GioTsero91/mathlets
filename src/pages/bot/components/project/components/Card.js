import Eth from "components/common/atoms/Eth"
import {NftImages} from "../../../../whale/components/NFT/NFT"
import {useSelector} from "react-redux"

const Card = ({data}) => {


  const projects = useSelector((state) => state.projects.projects)

  const project = projects[Math.floor(Math.random()*projects.length)];

  return <div className={'w-full text-white bg-accent rounded-[20px] my-[10px] overflow-hidden relative'}>
    <div className={"absolute top-0 right-[30px] text-[12px] bg-["+ data.color +"] rounded-b-[15px] px-[10px] py-[3px]"}>
      Start: 25.09.22 00:23:00
    </div>

    <div className={"absolute bottom-0 right-[30px] text-[12px] bg-[#363B69] rounded-t-[15px] px-[10px] py-[3px]"}>
      Background Jacket Screen Roof helmet-base
    </div>


    <div className={"w-full"}>
      <div className={"flex gap-[10px]"}>
        <img className={"w-[90px] h-[80px] rounded-[20px]"} src={project ? project['photo_link'] : ""}/>
        <div className={"flex flex-col flex-1 gap-[5px] text-[14px]"}>
          <div className={"text-[16px]"}>
            Project Name
          </div>
          <div className={"flex justify-between"}>
            Specific: Project
            <div className={"flex gap-[10px] mr-[5px]"}>
              <div className={"flex"}>
                floor <Eth data={0.2}/>
              </div>
              <div className={"flex"}>
                volume <Eth data={0.2}/>
              </div>
            </div>
          </div>

          <div className={"flex justify-between"}>
            Set-price
            <div className={"flex gap-[40px] mr-[35px] bg-bg px-[10px] py-[2px]"}>
              <div>0.7</div>
              <div>-</div>
              <div>2</div>
            </div>
          </div>

          <div className={"flex justify-between"}>
            Set-gas-speed-fee
            <div className={"flex gap-[40px] mr-[35px] bg-bg px-[10px] py-[2px]"}>
              <div>0.7</div>
              <div>-</div>
              <div>2</div>
            </div>
          </div>

          <div className={"flex justify-between"}>
            Set-Rarity
            <div className={"flex gap-[40px] mr-[35px] bg-bg px-[10px] py-[2px]"}>
              <div>0.7</div>
              <div>-</div>
              <div>2</div>
            </div>
          </div>
        </div>

      </div>

      <div className={"text-[12px] flex flex-col gap-[5px] p-[15px]"}>
        <div>Set-Quantity: 1</div>
        <div>Set-Rank: 5%</div>
        <div>Set-Rariry: 1</div>
      </div>

    </div>

  </div>
}

export default Card