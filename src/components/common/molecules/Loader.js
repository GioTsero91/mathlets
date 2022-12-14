import {BounceLoader} from "react-spinners"


export default function Loader () {

  return <div className={"w-full h-full absolute top-0 left-0 flex justify-center items-center"}>
    <BounceLoader color="#F741C4" />
  </div>
}