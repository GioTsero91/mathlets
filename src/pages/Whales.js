import Eth from "../components/common/atoms/Eth"
import {Doughnut} from 'react-chartjs-2'
import BigTable from "../components/common/molecules/BigTable"
import {fakeWhales} from "../services/Faker"

const pieData = {
  labels: ['y00ts', 'DeGods', 'LILY', ' Claynosaurz', 'Okay Bears'],
  datasets: [
    {
      hoverOffset: 5,
      radius: 37,
      cutout: '60%',
      label: '',
      data: [12, 19, 3, 5, 3],
      backgroundColor: [
        '#F741C4',
        '#8D35A3',
        '#5D4ED5',
        '#37A0EC',

        '#58d246',
      ],
      borderColor: [
        '#F741C4',
        '#8D35A3',
        '#5D4ED5',
        '#37A0EC',

        '#58d246',
      ],
      borderWidth: 2,
    },

    {
      cutout: '90%',
      label: '',
      data: [100],
      radius: 38,
      spacing: 0,
      backgroundColor: [
        '#666475',
      ],
      borderColor: [
        '#666475',
      ],
      borderWidth: 2,
    },

  ],
}

const Whales = () => {
  return <div className="h-full">

    <div className={"flex w-full justify-center gap-[30px]"}>
      <div className={"bg-accent rounded-[35px] flex flex-col px-[40px] py-[20px] gap-[10px]"}>
        <div className={""}>Total Spent</div>
        <div className={"flex gap-[40px]"}>
          <img src={require("assets/images/icons/common/trend-up.svg").default}/>
          <Eth data={"187K"} size={"large"}></Eth>
        </div>
      </div>

      <div className={"bg-accent rounded-[35px] flex flex-col px-[40px] py-[20px] gap-[10px]"}>
        <div className={""}>Spent for some projects</div>
        <div className={"flex gap-[40px]"}>
          <img src={require("assets/images/icons/common/trend-up.svg").default}/>
          <Eth data={"87K"} size={"large"}></Eth>
        </div>
      </div>

      <div className={"bg-accent rounded-[35px] h-[150px] pr-[100px]"}>
        <Doughnut options={{
          responsive: true,
          maintainAspectRatio: false,
          cutout: '80%',
          layout: {
            padding: 14
          },
          spacing: 7,
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
                boxWidth: '5',
                color: '#fff',
                usePointStyle: true,
                padding: 5
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
        placeholder: "Search Whales, Whales-hash"
      },
      navigate: {
        url: "",
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
}

export default Whales