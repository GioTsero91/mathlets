import CustomInput from "../../../../components/common/atoms/CustomInput";
import React from "react";
import Card from "./components/Card";
import Activity from "./components/activity";
import {useNavigate} from "react-router-dom"

export const NftImages = [
  "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://metadata.y00ts.com/y/985.png",
  "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://metadata.y00ts.com/y/1464.png",
  "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://metadata.y00ts.com/y/12193.png",
  "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://metadata.y00ts.com/y/4125.png",
  "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://metadata.y00ts.com/y/7630.png",
  "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://metadata.y00ts.com/y/2640.png",
  "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://metadata.y00ts.com/y/3833.png",
    "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https%3A%2F%2Fbafybeighbsbehns5yrsfchfv7ehcghxib2geeidmbkovnvf3drrcyeawj4.ipfs.nftstorage.link%2F5073.png%3Fext%3Dpng",
    "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https%3A%2F%2Fbafybeifhz6o5erb2ns2h4qo34n7kvm7373zbssj3sbogb6tjzhcm5nn6ua.ipfs.nftstorage.link%2F1501.png%3Fext%3Dpng",
    "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https%3A%2F%2Fbafybeickgzprj3vmlmvjg4uojomnb6qpt6ialb5g4hgu32r3mvi7b7utwa.ipfs.nftstorage.link%2F380.png%3Fext%3Dpng",
    "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https%3A%2F%2Fbafybeigvtheuwdajwub4pjc34y3twldy4uofzpvojxgsa4rh2x5addr5qi.ipfs.nftstorage.link%2F3962.png%3Fext%3Dpng",
    "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https%3A%2F%2Fbafybeiajqt32bl4jxfyatxzekvzwzripfu4yote4yft3zk67amcgikbbiu.ipfs.nftstorage.link%2F6924.png%3Fext%3Dpng",
    "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https%3A%2F%2Fbafybeigeqtwtnqhry6ra4gm4ij5sziomcafiuhjwge4rfpadjbvbeqt23a.ipfs.nftstorage.link%2F9769.png%3Fext%3Dpng",
    "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https%3A%2F%2Fbafybeihomw4nbaf4hhpiiu4lc7k5owbdzhf6vq77okpaul2gpfei7rdbly.ipfs.nftstorage.link%2F8924.png%3Fext%3Dpng",
    "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https%3A%2F%2Fbafybeidtxjtrlcpnmgzq66gskyocz55xz6kx2jyys5zqkpflldgsyun36e.ipfs.nftstorage.link%2F3089.png%3Fext%3Dpng",
    "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https%3A%2F%2Fbafybeibccdpgqie3cj7bne3xq6ipxt4icze6zflkpupel5x272lv6bna2m.ipfs.nftstorage.link%2F510.png%3Fext%3Dpng",
    "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https%3A%2F%2Fbafybeifonryehzoyjcoarvhferv3p77vfcxvz7msah3wafw6o2iaflx7rq.ipfs.nftstorage.link%2F7731.png%3Fext%3Dpng",
    "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https%3A%2F%2Fbafybeifi7k7vurvvjtwlhix6htllldcanj4vhkjoqnbkkk7dhzl5acmpaq.ipfs.nftstorage.link%2F8201.png%3Fext%3Dpng",
    "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https%3A%2F%2Fbafybeifdsxcpt2qeaby5a7fsjlqnaipttkg3amlr56k2upfzannt63r5ti.ipfs.nftstorage.link%2F1230.png%3Fext%3Dpng",
    "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https%3A%2F%2Fbafybeicgh4hurwla6bq23qrkrgq72dvwouabx24bcpr5avy27jqm6rvyqy.ipfs.nftstorage.link%2F5646.png%3Fext%3Dpng",
    "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https%3A%2F%2Fbafybeibgvv5fmhakbvo5uubwyaodvm57vzleunlf4cz4yvqee3k6xkmn2u.ipfs.nftstorage.link%2F2672.png%3Fext%3Dpng",
    "https://nftstorage.link/ipfs/bafybeibhqpbnx34wxwir7c2gthgyrlpci5bwdjdcthepl5gxu7txqkbvkm/7826.gif",
    "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://nftstorage.link/ipfs/bafybeidhitdhcgrupnkyyqa5mhtkdjezkkvwll7woowkk3g577wu4aklqu/8147.gif",
    "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://nftstorage.link/ipfs/bafybeig3xifpup37ay5sn4tr46nmm4qyr543u4yt2nzutdnlekykjrl6m4/6979.gif",
    "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://nftstorage.link/ipfs/bafybeibi6fqkje76t6up3dkqkttqphs6veowpsv54wqu2rcqppwi6qtji4/3700.gif",
    "https://nftstorage.link/ipfs/bafybeiazuianiyxwos2udcdnaoplptnegrgy3psxlfxingsjt76of2gq4e/3496.gif",
    "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://nftstorage.link/ipfs/bafybeianzxl2krizmk2qqkihnttcexh7fxk6stuv64ehdxojxmsscrupw4/8132.gif",
    "https://nftstorage.link/ipfs/bafybeicbeqwqln3qr7kb5ymmgjg7mzkumezgaoqhqshphiq6lp27aqj2xu/5002.gif",
    "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://nftstorage.link/ipfs/bafybeibggqer3dxnza56kuxc5p55imqewsw5zqgpmza6wprgkcsap5zfie/9080.gif",
    "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://nftstorage.link/ipfs/bafybeifkb5cwzahbic6wis2k57griyfcay3x5swfhuryxy2qhkxdespizi/2862.gif",
    "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://nftstorage.link/ipfs/bafybeiagalgk2u7xwlbnizcffe2x7liad4xxq72l555mwbufyihjnnocoq/6080.gif",
    "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://nftstorage.link/ipfs/bafybeiezjwgaqiwzieklxhr5mbtcyiqxoau6spym5icdfz2q4oj3lzcdj4/7520.gif",
]


const NFT = () => {
  const navigate = useNavigate()

  const nfts = Array.from({length: 50}, () => {
    return {
      image: NftImages[Math.floor(Math.random()*NftImages.length)],
      name: "Bored Ape Yacht Club",
      rank: "#2563",
      price: "116.63"
    }
  });

  const activities = Array.from({length: 50}, () => {
    return {
      image:  NftImages[Math.floor(Math.random()*NftImages.length)],
      name: "Bored Ape Yacht Club",
      price: "116.53",
      from: "123lmdsokjmqokweejmnr",
      to: "12900oi1kwe0ok12312",
      time: "7h ago",
    }
  });

  return <div className={"bg-accent rounded-[20px] p-[5px]"}>
    <div className={"w-full flex justify-between p-[15px]"}>
      <div className={"flex justify-center items-center gap-[40px]"}>
        <div className={"flex justify-center items-center gap-[10px]"}>
          <div className={"w-[14px] h-[14px] rounded-full bg-[#55BEFF]"}></div>
          <div className={"text-[14px]"}>Collected 18</div>
        </div>
        <div className={"flex justify-center items-center gap-[10px] opacity-50"}>
          <div className={"w-[14px] h-[14px] rounded-full bg-[#413884]"}></div>
          <div className={"text-[14px]"}>Created 1</div>
        </div>
        <div className={"flex justify-center items-center gap-[10px] opacity-50"}>
          <div className={"w-[14px] h-[14px] rounded-full bg-[#F741C4]"}></div>
          <div className={"text-[14px]"}>Favorited 7</div>
        </div>

        <div className={"flex items-center gap-[20px]"}>
          <div className={"flex gap-[5px] items-center"}>
            More <img className={"h-[10px]"} src={require("assets/images/icons/common/arrow-down.svg").default}/>
          </div>
          <CustomInput icon={require("assets/images/icons/common/search.svg").default} width={"300px"}
                       placeholder={"Search Whale, Whale-hash"}/>
          <img className={"h-[30px]"} src={require("assets/images/icons/common/filters.svg").default}/>
        </div>
      </div>

      <div className={"flex items-center gap-[20px]"}>
        <div>
          Activity:
        </div>
        <div className={"flex justify-center items-center gap-[10px]"}>
          <div className={"w-[14px] h-[14px] rounded-full bg-[#55BEFF]"}></div>
          <div className={"text-[14px]"}>List</div>
        </div>

        <div className={"flex justify-center items-center gap-[10px] opacity-50"}>
          <div className={"w-[14px] h-[14px] rounded-full bg-[#413884]"}></div>
          <div className={"text-[14px]"}>Cancel</div>
        </div>

        <div className={"flex justify-center items-center gap-[10px] opacity-50"}>
          <div className={"w-[14px] h-[14px] rounded-full bg-[#F741C4]"}></div>
          <div className={"text-[14px]"}>Sale</div>
        </div>

        <div className={"flex justify-center items-center gap-[10px] opacity-50"}>
          <div className={"w-[14px] h-[14px] rounded-full bg-[#F741C4]"}></div>
          <div className={"text-[14px]"}>Transfer</div>
        </div>
      </div>

    </div>

    <div className={"flex bg-bg w-full h-[70vh] rounded-l-[20px]"}>
      <div className={"w-[70%] overflow-auto p-[20px]"}>
        {
          nfts.map((nft) => {
            return <span className={"cursor-pointer"} onClick={()=> {navigate("/bot")}}><Card data={nft}/></span>
          })
        }
      </div>

      <div className={"bg-accent h-[calc(100% - 5px) w-[30%] mt-[5px] overflow-auto"}>
        <div className={"w-full text-white flex justify-between p-[10px] px-[25px]"}>
          <div>Item</div>
          <div>Price</div>
          <div>From</div>
          <div>To</div>
          <div>Time</div>
        </div>
        {
          activities.map((activity) => {
            return <Activity data={activity}/>
          })
        }
      </div>
    </div>

  </div>
}

export default NFT
