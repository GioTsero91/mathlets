import BigTable from "../components/common/molecules/BigTable";
import {useSelector} from "react-redux"
import {fakeTrends} from "../services/Faker"

const Trends = () => {
    const projects = useSelector((state) => state.projects)

    return <div className="h-full">

        <BigTable data={{
            style: {
                rowColor: 'accent',
                headerRowColor: '#1F2034',
                headerCellZindex: '10',
                rowHeight: '80px',
            },
            filter: {
                type: "times"
            },
            headers: [
                {
                    label: ''
                },
                {
                    label: ''
                },
                {
                    label: 'Volume'
                },
                {
                    label: 'Sales'
                },
                {
                    label: 'Floor'
                },
                {
                    label: 'Supply'
                },
                {
                    label: 'Royalty'
                },
                {
                    label: 'Statistic'
                },
                {
                    label: ''
                }
            ],
            rows: fakeTrends()
        }}/>
    </div>
};

export default Trends;