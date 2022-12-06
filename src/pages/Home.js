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
import youtubeApi from "../services/api/Youtube";
import store from "../store";

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

  const [youtubeVideos, setYoutubeProjects] = useState([])
  const projects = store.getState().projects.projects

  console.log(projects)

  useEffect(() => {
    youtubeApi().then((result) => {
      setYoutubeProjects(result?.data)
    }, (err) => {
      console.log(err)
    });

  }, [])

  const items = []


  youtubeVideos?.forEach((video) => {
    if (video?.id?.kind !== "youtube#video") return

    items.push({
      url: "https://www.youtube.com/watch?v=" + video?.id?.videoId,
      img: video?.snippet?.thumbnails?.medium.url,
      descr: video?.snippet?.title,
      userName: "Brett Malinowski",
    })
  })


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
        {
          projects.slice(2,5).map((item) => {
            return <Item data={{
              name: item['project_name'],
              color: "teal",
              img: item['photo_link'],
              timeAdded: "12 hours ago",
              floor: item['floor'],
              vol: item['volume'],
              supply: item['supply'],
            }}/>
          })
        }
      </div>

      <div className="flex flex-col gap-4">
        <div className="my-5 mt-10 text-purple">
          Best deals for you
        </div>
        {
          projects.slice(5,8).map((item) => {
            return <Item data={{
              name: item['project_name'],
              color: "purple",
              img: item['photo_link'],
              timeAdded: "12 hours ago",
              floor: item['floor'],
              vol: item['volume'],
              supply: item['supply'],
            }}/>
          })
        }
      </div>

      <div className="flex flex-col gap-4">
        <div className="my-5 mt-10 text-pink">
          Upcoming Hot NFT Projects
        </div>
        {
          projects.slice(8,11).map((item) => {
            return <Item data={{
              name: item['project_name'],
              color: "pink",
              img: item['photo_link'],
              timeAdded: "12 hours ago",
              floor: item['floor'],
              vol: item['volume'],
              supply: item['supply'],
            }}/>
          })
        }
      </div>
    </div>

  </div>;
};

export default Home;