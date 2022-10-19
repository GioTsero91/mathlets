import LeftFilter from "../components/newsletter/LeftFilter";
import {useDispatch, useSelector} from "react-redux";
import {update} from "../services/redux/global";
import RightFilter from "../components/newsletter/RightFiter";
import NewsLetterCardTable from "../components/common/molecules/NewsLetterCardTable";
import {fakeNewsletter} from "../services/Faker";

const Newsletter = () => {
    const filter = useSelector((state) => state.global.newsLetterFilter)
    const dispatch = useDispatch()

    const updateFilters = (option, value) => {
        dispatch(update({option, value}))
    }

    return <div className="">
        <div className="w-full flex justify-between pr-10 sticky top-0 bottom-0 z-10 bg-bg pb-3">
            <LeftFilter
                data={["Recent", "Popular"]}
                default={filter.order}
                callback={(value) => {
                    updateFilters("order", value)
                }}></LeftFilter>
            <RightFilter
                data={["youtube", "twitter", "instagram", "spotify", "discord"]}
                default={filter.platform}
                callback={(value) => {
                    updateFilters("platform", value)
                }}></RightFilter>
        </div>

        <div className="mb-20">
            <NewsLetterCardTable data={fakeNewsletter()} filters={filter}></NewsLetterCardTable>
        </div>
    </div>
};

export default Newsletter;