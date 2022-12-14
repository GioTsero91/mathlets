import {Bar, Doughnut, Line} from "react-chartjs-2"
import Eth from "../../../components/common/atoms/Eth"
import React, {useEffect, useRef, useState} from "react"

const options =
  {
    bar: {
      responsive: true,
      maintainAspectRatio: false,
      elements: {
        arc: {
          borderWidth: 1,
          borderColor: '#fff',
        }
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },

    line: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          grid: {
            display: true,
            drawBorder: true,
            drawOnChartArea: true,
            drawTicks: true,
          },
          ticks: {
            color: '#fff',
          }
        },
        x: {
          ticks: {
            color: '#fff',
          }
        }
      },
      elements: {
        point: {
          radius: 6,
        }
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },

    pie: {
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
            padding: 20
          }
        },
      },
    }
  }


const Overview = () => {
  const labels = ['01.12', '02.12', '03.12', '04.12', '05.12', '06.12', '07.12', '08.12', '09.12', '10.12', '11.12', '12.12', '13.12', '14.12', '15.12']

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => Math.round(Math.random() * 1000)),
        backgroundColor: '#F741C4E0',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => Math.round(Math.random() * 1000)),
        backgroundColor: '#53BAFAE0',
      },
    ],
  }


  const pieData = {
    labels: ['y00ts', 'DeGods', 'LILY', ' Claynosaurz', 'Okay Bears'],
    datasets: [
      {
        hoverOffset: 5,
        radius: 90,
        cutout: '70%',
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
        radius: 93,
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

  const bgColors = [
    '#F741C4',
    '#8D35A3',
    '#5D4ED5',
  ]

  const shuffle = (arr) => {
    return arr.map(value => ({value, sort: Math.random()}))
      .sort((a, b) => a.sort - b.sort)
      .map(({value}) => value)
  }

  const commonProps = {
    hoverOffset: 0,
    label: '',
    borderWidth: 2,
    circumference: 270,
  }

  const activatePieData = {
    labels: ['Su', 'Mo', 'Tue', ' Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        radius: 120,
        cutout: '98%',
        data: [12, 19, 3],
        borderColor: shuffle(bgColors),
        ...commonProps
      },
      {
        radius: 110,
        cutout: '98%',
        data: [7, 2, 3],
        borderColor: shuffle(bgColors),
        ...commonProps
      },
      {
        radius: 100,
        cutout: '98%',
        data: [2, 6, 3],
        borderColor: shuffle(bgColors),
        ...commonProps
      },
      {
        radius: 90,
        cutout: '98%',
        data: [2, 2, 12],
        borderColor: shuffle(bgColors),
        ...commonProps
      },
      {
        radius: 80,
        cutout: '98%',
        data: [8,3, 5],
        borderColor: shuffle(bgColors),
        ...commonProps
      },
      {
        radius: 70,
        cutout: '98%',
        data: [5, 2, 12],
        borderColor: shuffle(bgColors),
        ...commonProps
      },
      {
        radius: 60,
        cutout: '98%',
        data: [12, 2, 12],
        borderColor: shuffle(bgColors),
        ...commonProps
      },

    ],
  }


  const chartRef = useRef(null)
  const [gradient, setGradient] = useState(null)

  const lineData = {
    labels,
    datasets: [
      {
        label: 'Total Spent',
        data: labels.map(() => Math.round(Math.random() * 10)),
        borderColor: '#8D35A3',
        backgroundColor: 'transparent',
        fill: 'start',
        pointRadius: 0,
        borderWidth: 1,
      },
      {
        label: 'Total Revenue',
        data: labels.map(() => Math.round(Math.random() * 10)),
        borderColor: '#F48DA7',
        backgroundColor: 'transparent',
        fill: 'start',
        pointRadius: 0,
        borderWidth: 1,
      },
      {
        type: 'bar',
        label: 'Total Gains',
        backgroundColor: '#F741C4',
        data: labels.map(() => Math.round(Math.random() * 10)),
        borderColor: 'transparent',
        borderWidth: 2,
        barThickness: 15
      },
    ],
  }


  useEffect(() => {
    const chart = chartRef.current

    const gr = chart.ctx.createLinearGradient(0, 0, 0, chart.ctx.canvas.height)
    gr.addColorStop(0, '#F741C4E0')
    gr.addColorStop(1, '#F741C400')
    setGradient(gr)

  }, [])

  return <div className={"bg-bg rounded-[20px] p-[25px] m-[10px]"}>
    <div className={"flex w-full gap-[10px]"}>
      <div style={{flexGrow: "1"}} className={"flex flex-col gap-[10px]"}>

        <div className="bg-accent rounded-xl box-border flex flex-col h-[310px] px-[20px]">
          <div className={"w-full  flex justify-between py-[20px] px-[20px]"}>
            <div>Total Spent / Total Revenue / Total Gains</div>
            <div>15 Days</div>
          </div>
          <div className={"flex-1"}>
            <Line ref={chartRef} options={options.line} data={lineData}/>
          </div>
        </div>

        <div className={"flex h-[310px] gap-[10px]"}>
          <div className="relative flex-1 bg-accent rounded-xl flex items-center justify-center box-border ">
            <div className="w-full h-full  flex">
              <div className={"flex-1"}>
                <Doughnut options={options.pie} data={pieData}/>
              </div>
              <div className={"w-full absolute top-0 right-0 flex justify-end py-[20px] px-[20px]"}>
                <div>Owned NFT / Projects</div>
              </div>
            </div>
          </div>

          <div className="bg-accent flex-1  rounded-xl p-5  box-border relative">
            <div className={"h-full w-[80%]"}>
              <Doughnut  options={options.bar} data={activatePieData}/>
            </div>
            <div className={"absolute left-[15px] top-[15px]"}>
              Activate Time
            </div>
            <div className={"absolute flex items-center justify-center gap-[10px] top-[15px] right-[15px]"}>
              <img src={require("assets/images/icons/common/filter-date.svg").default}/>
              01.12.22 - 05.12.23
            </div>
            <div className={"absolute top-[150px] right-[15px] gap-[10px] grid grid-cols-2"}>
              <div className={"flex gap-[10px] justify-start items-center"}>
                <div className={"rounded-full w-[15px] h-[15px] bg-[#8D35A3]"}></div>
                Shmondo
              </div>
              <div className={"flex gap-[10px] justify-start items-center"}>
                <div className={"rounded-full w-[15px] h-[15px] bg-[#F741C4]"}></div>
                Sandrex
              </div>
              <div className={"flex gap-[10px] justify-start items-center"}>
                <div className={"rounded-full w-[15px] h-[15px] bg-[#F48DA7]"}></div>
                Avala
              </div>
              <div className={"flex gap-[10px] justify-start items-center"}>
                <div className={"rounded-full w-[15px] h-[15px] bg-[#F741C4]"}></div>
                Tsero
              </div>
              <div className={"flex gap-[10px] justify-start items-center"}>
                <div className={"rounded-full w-[15px] h-[15px] bg-[#8D35A3]"}></div>
                Davita
              </div>
              <div className={"flex gap-[10px] justify-start items-center"}>
                <div className={"rounded-full w-[15px] h-[15px] bg-[#5D4ED5]"}></div>
                Nikusha
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className={"flex flex-col gap-[10px]"}>
        <div className={"w-[300px] h-[150px] bg-accent rounded-[15px] flex gap-[25px] justify-center items-center"}>
          <img className={"w-[66px] h-[66px]"} src={require("assets/images/icons/whale/total-spent.png")}/>
          <div className={"flex flex-col"}>
            <div>Total Spent</div>
            <div><Eth data={"17K"} size={"large"}/></div>
          </div>
        </div>
        {/*<div className={"w-[300px] h-[150px] bg-accent rounded-[15px] flex gap-[25px] justify-center items-center"}>*/}
        {/*  <img className={"w-[66px] h-[66px]"} src={require("assets/images/icons/whale/gas-spent.png")}/>*/}
        {/*  <div className={"flex flex-col"}>*/}
        {/*    <div>Gas Spent</div>*/}
        {/*    <div><Eth data={"0.3K"} size={"large"}/></div>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <div className={"w-[300px] h-[150px] bg-accent rounded-[15px] flex gap-[25px] justify-center items-center"}>
          <img className={"w-[66px] h-[66px]"} src={require("assets/images/icons/whale/total-revenue.png")}/>
          <div className={"flex flex-col"}>
            <div>Total Revenue</div>
            <div><Eth data={"0.7K"} size={"large"}/></div>
          </div>
        </div>
        <div className={"w-[300px] h-[150px] bg-accent rounded-[15px] flex gap-[25px] justify-center items-center"}>
          <img className={"w-[66px] h-[66px]"} src={require("assets/images/icons/whale/total-gains.png")}/>
          <div className={"flex flex-col"}>
            <div>Total Gains</div>
            <div><Eth data={"1.03K"} size={"large"}/></div>
          </div>
        </div>

      </div>
    </div>


  </div>
}

export default Overview