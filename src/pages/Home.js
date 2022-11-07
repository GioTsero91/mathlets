import Slider from "../components/common/atoms/Slider";
import NewsletterItem from "./newsletter/components/NewsletterItem";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip
} from 'chart.js';
import {Bar, Doughnut, Line} from 'react-chartjs-2';
import React, {useEffect, useRef, useState} from 'react';
import Item from "../components/common/atoms/Item";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  PointElement,
  LineElement,
  Legend,
  Filler,
  ArcElement
);

const Home = () => {
  let items = [
    {
      userName: "test",
      descr: "Thanks for great answer. For the following readers, note that the value within the map object(the map object here is const components and the value is PhotoStory and VideoStory) must be without quotation marks - Otherwise, the component will not render and y",
      img: "https://i.ytimg.com/vi/iM39kbfKQy4/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD02YKrbyPmLafEUKr0MAQ6L7u8VA",
    },
    {
      userName: "test",
      descr: "Thanks for great answer. For the following readers, note that the value within the map object(the map object here is const components and the value is PhotoStory and VideoStory) must be without quotation marks - Otherwise, the component will not render and y",
      img: "https://i.ytimg.com/vi/iM39kbfKQy4/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD02YKrbyPmLafEUKr0MAQ6L7u8VA",
    },
    {
      userName: "test",
      descr: "Thanks for great answer. For the following readers, note that the value within the map object(the map object here is const components and the value is PhotoStory and VideoStory) must be without quotation marks - Otherwise, the component will not render and y",
      img: "https://i.ytimg.com/vi/iM39kbfKQy4/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD02YKrbyPmLafEUKr0MAQ6L7u8VA",
    },
    {
      userName: "test",
      descr: "Thanks for great answer. For the following readers, note that the value within the map object(the map object here is const components and the value is PhotoStory and VideoStory) must be without quotation marks - Otherwise, the component will not render and y",
      img: "https://i.ytimg.com/vi/iM39kbfKQy4/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD02YKrbyPmLafEUKr0MAQ6L7u8VA",
    },
    {
      userName: "test",
      descr: "Thanks for great answer. For the following readers, note that the value within the map object(the map object here is const components and the value is PhotoStory and VideoStory) must be without quotation marks - Otherwise, the component will not render and y",
      img: "https://i.ytimg.com/vi/iM39kbfKQy4/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD02YKrbyPmLafEUKr0MAQ6L7u8VA",
    },
    {
      userName: "test",
      descr: "Thanks for great answer. For the following readers, note that the value within the map object(the map object here is const components and the value is PhotoStory and VideoStory) must be without quotation marks - Otherwise, the component will not render and y",
      img: "https://i.ytimg.com/vi/iM39kbfKQy4/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD02YKrbyPmLafEUKr0MAQ6L7u8VA",
    },
    {
      userName: "test",
      descr: "Thanks for great answer. For the following readers, note that the value within the map object(the map object here is const components and the value is PhotoStory and VideoStory) must be without quotation marks - Otherwise, the component will not render and y",
      img: "https://i.ytimg.com/vi/iM39kbfKQy4/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD02YKrbyPmLafEUKr0MAQ6L7u8VA",
    },
    {
      userName: "test",
      descr: "Thanks for great answer. For the following readers, note that the value within the map object(the map object here is const components and the value is PhotoStory and VideoStory) must be without quotation marks - Otherwise, the component will not render and y",
      img: "https://i.ytimg.com/vi/iM39kbfKQy4/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD02YKrbyPmLafEUKr0MAQ6L7u8VA",
    },
  ];


  const options =
    {
      bar: {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
          bar: {
            borderRadius: 10,
          }
        },
        plugins: {
          legend: {
            position: 'right',
            labels: {
              color: '#fff',
            }
          },
        },
        scales: {
          y: {
            ticks: {
              color: '#fff',
            }
          },
          x: {
            ticks: {
              color: '#fff',
            }
          }
        }
      },

      line: {
        responsive: true,
        maintainAspectRatio: false,
        animations: {
          tension: {
            duration: 2000,
            from: 0.6,
            to: 0.6,
            loop: true
          }
        },
        scales: {
          y: {
            grid: {
              display: true,
              drawBorder: true,
              drawOnChartArea: true,
              drawTicks: true,
            },
            ticks: {
              display: false,
            }
          },
          x: {
            display: false,
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
        spacing: 8,
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
    };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

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
  };

  const pieData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green',],
    datasets: [
      {
        hoverOffset: 5,
        radius: 70,
        cutout: '70%',
        label: '',
        data: [12, 19, 3, 5],
        backgroundColor: [
          '#F741C4',
          '#8D35A3',
          '#5D4ED5',
          '#37A0EC',
        ],
        borderColor: [
          '#F741C4',
          '#8D35A3',
          '#5D4ED5',
          '#37A0EC',
        ],
        borderWidth: 2,
      },

      {
        cutout: '85%',
        label: '',
        data: [100],
        radius: 76,
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
  };


  const chartRef = useRef(null);
  const [gradient, setGradient] = useState(null);


  const lineData = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => Math.round(Math.random() * 1000)),
        borderColor: '#F741C4E0',
        backgroundColor: gradient,
        fill: 'start'
      },
    ],
  };

  useEffect(() => {
    const chart = chartRef.current;

    const gr = chart.ctx.createLinearGradient(0, 0, 0, chart.ctx.canvas.height);
    gr.addColorStop(0, '#F741C4E0');
    gr.addColorStop(1, '#F741C400');
    setGradient(gr);

  }, []);


  return <div className="w-full relative">
    <div style={{width: "96%", height: "300px"}} className="flex gap-5">

      <div style={{flexBasis: '20%'}}
           className="flex-1 bg-accent rounded-xl flex items-center justify-center box-border ">
        <div className="w-full h-full  flex flex-col">
          <div className={"w-full  flex justify-between py-[20px] px-[20px]"}>
            <div className={"max-w-[170px]"}>Sales breakdown top NFTs collections</div>
            <div>15 Days</div>
          </div>
          <div className={"flex-1 h-[100px]"}>
            <Doughnut options={options.pie} data={pieData}/>
          </div>
        </div>

      </div>

      <div style={{flexBasis: '40%'}} className="bg-accent  rounded-xl box-border flex flex-col">
        <div className={"w-full  flex justify-between py-[20px] px-[20px]"}>
          <div>Chart 2</div>
          <div>15 Days</div>
        </div>
        <div className={"flex-1"}>
          <Line ref={chartRef} options={options.line} data={lineData}/>
        </div>
      </div>

      <div style={{flexBasis: '40%'}} className="bg-accent  rounded-xl p-5  box-border">
        <Bar options={options.bar} data={data}/>
      </div>
    </div>

    <div className="my-5 mt-10">
      Newsletter
    </div>
    <Slider>
      {items.map((item, key) => {
        return <NewsletterItem key={key} data={item}></NewsletterItem>
      })}
    </Slider>

    <div className="w-full flex mt-32 mb-20 gap-4">
      <div className="flex flex-col gap-4">
        <div className="my-5 mt-10 text-teal">
          Trending collection
        </div>
        <Item data={{
          name: "Azuki",
          color: "teal",
          img: "https://lh3.googleusercontent.com/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT=s0",
          timeAdded: "12 hours ago",
          floor: "0.8",
          vol: "374.72",
          supply: "10000",
        }}></Item>

        <Item data={{
          name: "Mathlets",
          color: "teal",
          img: "https://lh3.googleusercontent.com/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT=s0",
          timeAdded: "14 hours ago",
          floor: "0.8",
          vol: "374.72",
          supply: "10000",
        }}></Item>

        <Item data={{
          name: "Azuki",
          color: "teal",
          img: "https://lh3.googleusercontent.com/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT=s0",
          timeAdded: "12 hours ago",
          floor: "0.8",
          vol: "374.72",
          supply: "10000",
        }}></Item>
      </div>

      <div className="flex flex-col gap-4">
        <div className="my-5 mt-10 text-purple">
          Best deals for you
        </div>
        <Item data={{
          name: "Azuki",
          color: "purple",
          img: "https://lh3.googleusercontent.com/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT=s0",
          timeAdded: "12 hours ago",
          floor: "0.8",
          vol: "374.72",
          supply: "10000",
        }}></Item>

        <Item data={{
          name: "Azuki",
          color: "purple",
          img: "https://lh3.googleusercontent.com/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT=s0",
          timeAdded: "12 hours ago",
          floor: "0.8",
          vol: "374.72",
          supply: "10000",
        }}></Item>

        <Item data={{
          name: "Azuki",
          color: "purple",
          img: "https://lh3.googleusercontent.com/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT=s0",
          timeAdded: "12 hours ago",
          floor: "0.8",
          vol: "374.72",
          supply: "10000",
        }}></Item>
      </div>

      <div className="flex flex-col gap-4">
        <div className="my-5 mt-10 text-pink">
          Upcoming Hot NFT Projects
        </div>
        <Item data={{
          name: "Azuki",
          color: "pink",
          img: "https://lh3.googleusercontent.com/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT=s0",
          timeAdded: "12 hours ago",
          floor: "0.8",
          vol: "374.72",
          supply: "10000",
        }}></Item>

        <Item data={{
          name: "Azuki",
          color: "pink",
          img: "https://lh3.googleusercontent.com/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT=s0",
          timeAdded: "12 hours ago",
          floor: "0.8",
          vol: "374.72",
          supply: "10000",
        }}></Item>

        <Item data={{
          name: "Azuki",
          color: "pink",
          img: "https://lh3.googleusercontent.com/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT=s0",
          timeAdded: "12 hours ago",
          floor: "0.8",
          vol: "374.72",
          supply: "10000",
        }}></Item>
      </div>
    </div>

  </div>;
};

export default Home;