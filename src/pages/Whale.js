import BigTable from "../components/common/molecules/BigTable";
import {fakeSnipes, fakeWhales} from "../services/Faker";
import Eth from "../components/common/atoms/Eth";
import { Doughnut } from 'react-chartjs-2';

const pieData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green',],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5],
            backgroundColor: [
                '#F741C4D0',
                '#8D35A3D0',
                '#5D4ED5D0',
                '#37A0ECD0',
            ],
            borderColor: [
                '#F741C4',
                '#8D35A3',
                '#5D4ED5',
                '#37A0EC',
            ],
            borderWidth: 2,
        },
    ],
};

const Whale = () => {
    return <div className="h-full">

        <div className={"flex w-full justify-center gap-[30px]"}>
            <div className={"bg-accent rounded-[35px] flex flex-col px-[40px] py-[20px] gap-[10px]"}>
               <div className={""}>Total Spent</div>
                <div className={"flex gap-[40px]"}>
                    <img src={"images/icons/common/trend-up.svg"}/>
                    <Eth data={"187K"} size={"large"}></Eth>
                </div>
            </div>

            <div className={"bg-accent rounded-[35px] flex flex-col px-[40px] py-[20px] gap-[10px]"}>
                <div className={""}>Sepnt for some projects</div>
                <div className={"flex gap-[40px]"}>
                    <img src={"images/icons/common/trend-up.svg"}/>
                    <Eth data={"87K"} size={"large"}></Eth>
                </div>
            </div>

            <div className={"bg-accent rounded-[35px] h-[150px] pr-[100px]"}>
                <Doughnut options={{
                  responsive: false,
                  cutout: "80%",
                  radius: 50,
                  elements: {
                    arc: {
                      borderWidth: 1,
                      borderColor: '#fff',
                    }
                  },
                  plugins: {
                    legend: {
                      position: 'right',
                      labels: {
                        boxWidth: '40',
                        color: '#fff',
                        usePointStyle: true,
                      }

                    },
                  },
                }} data={pieData}/>
            </div>
        </div>

        <BigTable data={{
            style: {
                rowColor: 'accent',
                headerRowColor: '#1F2034',
                rowHeight: '80px',
                maxHeight: 'calc(100% - 150px)'
            },
            filter: {
                type: "search",
                placeholder: "Search Whale, Whale-hash"
            },
            headers: [
                {
                    label: ''
                },
                {
                    label: ''
                },
                {
                    label: 'Balance'
                },
                {
                    label: 'Total Value'
                },
                {
                    label: 'Total Spent'
                },
                {
                    label: 'Total Revenue'
                },
                {
                    label: 'Realized Gains'
                },
            ],
            rows: fakeWhales()
        }}/>
    </div>
};

export default Whale;