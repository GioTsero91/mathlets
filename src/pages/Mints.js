import BigTable from "../components/common/molecules/BigTable";
import {fakeMints} from "../services/Faker";

const Mints = () => {
    return <div className="h-full">

        <BigTable data={{
            style: {
                rowColor: 'accent',
                headerRowColor: '#1F2034',
                headerCellZindex: '10',
                rowHeight: '80px',
            },
            filter: {
                type: "times",
            },
            headers: [
                {
                    label: ''
                },
                {
                    label: ''
                },
                {
                    label: 'Mints'
                },
                {
                    label: 'All Time'
                },
                {
                    label: 'Owner / Item'
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
                    label: ''
                }
            ],
            rows: fakeMints()
        }}/>
    </div>
};

export default Mints;