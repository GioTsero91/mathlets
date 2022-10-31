import {
  buttonGenerator,
  curveGenerator,
  ethGenerator,
  extraDataGenerator,
  projectItemGenerator,
  statusGenerator
} from "./Generator"
import Eth from "../components/common/atoms/Eth"
import excelFile from '../assets/files/40-projects.xlsx'
import * as xlsx from 'xlsx'
import store from '../store'
import {updateProjects} from "./redux/projects"

const toSnakeCase = str =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('_')

const jsonToProject = (json) => {
  const projectsOrganized = []

  Array.isArray(json) && json.forEach((row) => {
    Object.keys(row).forEach((key) => {
      if (!isNaN(key)) {
        if (!projectsOrganized[key]) projectsOrganized[key] = []
        projectsOrganized[key][toSnakeCase(row["__EMPTY"])] = row[key]
      }
    })

  })

  store.dispatch(updateProjects(projectsOrganized))
}

export const parseExcel = () => {
  let request = new XMLHttpRequest()
  request.open('GET', excelFile, true)
  request.responseType = "arraybuffer"
  request.onload = function () {

    let data = new Uint8Array(request.response)
    let arr = []
    for (let i = 0; i <= data.length; ++i) arr[i] = String.fromCharCode(data[i])
    data = arr.join("")

    const workbook = xlsx.read(data, {type: "binary"})
    const sheetName = workbook.SheetNames[0]
    const worksheet = workbook.Sheets[sheetName]
    const json = xlsx.utils.sheet_to_json(worksheet)
    jsonToProject(json)
  }
  request.send()
}

export const fakeSnipes = () => {

  let item = [
    {
      className: 'col-span-2',
      data: projectItemGenerator({
        name:
          "Sva",
        img:
          "https://lh3.googleusercontent.com/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT=s0",
        discord: {url: "", count: "124k"},
        twitter: {url: "", count: "371.9k"},
        website: {url: ""},
        opensea: {url: ""},
      })
    },
    statusGenerator({progress: 65, status: 'In Progress'}),
    ethGenerator(0.8),
    '10000',
    '2.5%',
    curveGenerator([{x: 0, y: 40}, {x: 20, y: 20}, {x: 40, y: 60}, {x: 100, y: 15}])
  ]

  let items = []

  for (let i = 0; i < 30; i++) {
    items.push(item)
  }

  return items
}

export const fakeWhales = () => {

  let item = [
    {
      className: 'col-span-2',
      data: projectItemGenerator({
        name:
          "Sva",
        img:
          "https://lh3.googleusercontent.com/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT=s0",
        discord: {url: "", count: "124k"},
        twitter: {url: "", count: "371.9k"},
        website: {url: ""},
        opensea: {url: ""},
      })
    },
    ethGenerator(0.8),
    ethGenerator(0.8),
    ethGenerator(0.8),
    ethGenerator(0.8),
    ethGenerator(0.8),
  ]

  let items = []

  for (let i = 0; i < 30; i++) {
    items.push(item)
  }

  return items
}

export const fakeTrends = () => {
  const projects = store.getState().projects.projects
  let items = []

  for (let i = 1; i < projects.length; i++) {
    const item = projects[i]

    items.push([
      {
        className: 'col-span-2',
        data: projectItemGenerator({
          name: item['project_name'],
          img: item['photo_link'],
          discord: {url: item['discord_url'], count: item['discord_member']},
          twitter: {url: item['twitter_url'], count: item['twitter_follower']},
          website: {url: item['https://critterscult.com']},
          opensea: {url: item['https://critterscult.com']},
        })
      },
      ethGenerator(item['volume']),
      item['sales'] ?? 0,
      ethGenerator(item['floor']),
      item['supply'] ?? 0,
      '2.5%',
      curveGenerator([{x: 0, y: 80}, {x: 20, y: 50}, {x: 50, y: 70}, {x: 100, y: 10}]),
      {
        type: 'extra',
        data: extraDataGenerator(),
      }
    ])
  }

  return items
}

export const fakeMints = () => {
  const projects = store.getState().projects.projects
  let items = []

  for (let i = 1; i < projects.length; i++) {
    const item = projects[i]
    let max = Math.round(Math.random() * 3000)

    items.push([
      {
        className: 'col-span-2',
        data: projectItemGenerator({
          name: item['project_name'],
          img: item['photo_link'],
          discord: {url: item['discord_url'], count: item['discord_member']},
          twitter: {url: item['twitter_url'], count: item['twitter_follower']},
          website: {url: item['https://critterscult.com']},
          opensea: {url: item['https://critterscult.com']},
        })
      },
      Math.round(Math.random() * 1000),
      Math.round(Math.random() * 1000 + 1000),
      Math.round(Math.random() * max) + "/" + max,
      ethGenerator(item['floor']),
      item['supply'],
      curveGenerator([{x: 0, y: 80}, {x: 20, y: 50}, {x: 50, y: 70}, {x: 100, y: 10}]),
      buttonGenerator("Mint Now")
    ])
  }

  return items
}

export const fakeNewsletter = () => {
  let sample = [
    {
      url: 'url',
      thumb: 'https://i.ytimg.com/vi/iM39kbfKQy4/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD02YKrbyPmLafEUKr0MAQ6L7u8VA',
      name: 'NFTs to BUY NOW | Top NEW NFT Projects (May 2022)',
      platform: 'youtube',
      likes: '30k',
      comments: '20k'
    },
    {
      url: 'url',
      thumb: 'https://i.ytimg.com/vi/iM39kbfKQy4/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD02YKrbyPmLafEUKr0MAQ6L7u8VA',
      name: 'NFTs to BUY NOW | Top NEW NFT Projects (May 2022)',
      platform: 'twitter',
      likes: '40k',
      comments: '1k'
    },
    {
      url: 'url',
      thumb: 'https://i.ytimg.com/vi/iM39kbfKQy4/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD02YKrbyPmLafEUKr0MAQ6L7u8VA',
      name: 'NFTs to BUY NOW | Top NEW NFT Projects (May 2022)',
      platform: 'instagram',
      likes: '30k',
      comments: '20k'
    },
    {
      url: 'url',
      thumb: 'https://i.ytimg.com/vi/iM39kbfKQy4/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD02YKrbyPmLafEUKr0MAQ6L7u8VA',
      name: 'NFTs to BUY NOW | Top NEW NFT Projects (May 2022)',
      platform: 'spotify',
      likes: '30k',
      comments: '20k'
    },
    {
      url: 'url',
      thumb: 'https://i.ytimg.com/vi/iM39kbfKQy4/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD02YKrbyPmLafEUKr0MAQ6L7u8VA',
      name: 'NFTs to BUY NOW | Top NEW NFT Projects (May 2022)',
      platform: 'discord',
      likes: '30k',
      comments: '20k'
    },
  ]

  let items = []

  for (let i = 0; i < 10; i++) {
    items.push(...sample)
  }

  return items
}

export const fakeBestDeal = () => {
  let sample = [
    {
      url: 'url',
      thumb: 'images/pics/best-deal.png',
      id: '345',
      name: 'Sad Bots Genesis',
      rank: '240/4000',
      volume: '254.3',
      price: <Eth data={'5'}></Eth>
    },
  ]

  let items = []

  for (let i = 0; i < 30; i++) {
    items.push(...sample)
  }

  return items
}