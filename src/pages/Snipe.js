import BigTable from "../components/common/molecules/BigTable";
import {fakeSnipes} from "../services/Faker";

const Snipe = () => {
    return <div className="h-full">

        <BigTable data={{
            style: {
                rowColor: 'accent',
                headerRowColor: '#1F2034',
                rowHeight: '80px',
            },
            headers: [
                {
                    label: ''
                },
                {
                    label: ''
                },
                {
                    label: 'Status'
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
            ],
            rows: fakeSnipes()
        }}></BigTable>
    </div>
};

export default Snipe;