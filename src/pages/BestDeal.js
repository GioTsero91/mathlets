import LeftFilter from "../components/newsletter/LeftFilter";
import {useDispatch, useSelector} from "react-redux";
import {update} from "../services/redux/global";
import NewsLetterCardTable from "../components/common/molecules/NewsLetterCardTable";
import {fakeBestDeal} from "../services/Faker";
import BestDeatlCardTable from "../components/common/molecules/BestDeatlCardTable";

const BestDeal = () => {
    const filter = useSelector((state) => state.global.newsLetterFilter)
    const dispatch = useDispatch()

    const updateFilters = (option, value) => {
        dispatch(update({option, value}))
    }

    return <div className="">
        <div className="w-full flex justify-between pr-10 sticky top-0 bottom-0 z-10 bg-bg pb-3">
            <LeftFilter
                data={["Auction", "Sale"]}
                default={filter.order}
                callback={(value) => {
                    updateFilters("order", value)
                }}></LeftFilter>

        </div>

        <div className="mb-20">
            <BestDeatlCardTable data={fakeBestDeal()} filters={filter}></BestDeatlCardTable>
        </div>
    </div>
};

export default BestDeal;