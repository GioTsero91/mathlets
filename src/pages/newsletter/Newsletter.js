import LeftFilter from "./components/LeftFilter";
import {useDispatch, useSelector} from "react-redux";
import {update} from "../../services/redux/global";
import RightFilter from "./components/RightFiter";
import NewsLetterCardTable from "../../components/common/molecules/NewsLetterCardTable";
import {fakeNewsletter} from "../../services/Faker";
import youtubeApi from "../../services/api/Youtube";
import {useEffect, useState} from "react";

const Newsletter = () => {
  const filter = useSelector((state) => state.global.newsLetterFilter)
  const dispatch = useDispatch()

  const updateFilters = (option, value) => {
    dispatch(update({option, value}))
  }

  const [youtubeVideos, setYoutubeProjects] = useState()

  useEffect(() => {
    youtubeApi().then((result) => {
      setYoutubeProjects(result?.data)
    }, () => {
    });

  }, [])



  console.log(youtubeVideos)

  return <div className="">
    <div className="w-full flex justify-between pr-10 sticky top-0 bottom-0 z-10 bg-bg pb-3">
      <LeftFilter
        data={["Recent", "Popular"]}
        default={filter.order}
        callback={(value) => {
          updateFilters("order", value)
        }}/>
      <RightFilter
        data={["youtube", "twitter", "instagram", "spotify", "discord"]}
        default={filter.platform}
        callback={(value) => {
          updateFilters("platform", value)
        }}/>
    </div>

    <div className="mb-20">
      <NewsLetterCardTable data={fakeNewsletter(youtubeVideos)} filters={filter}/>
    </div>
  </div>
};

export default Newsletter;