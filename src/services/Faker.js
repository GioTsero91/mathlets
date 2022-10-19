import {curveGenerator, ethGenerator, extraDataGenerator, projectItemGenerator, statusGenerator} from "./Generator";
import Eth from "../components/common/atoms/Eth";

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
    ];

    let items = [];

    for (let i = 0; i < 30; i++) {
        items.push(item);
    }

    return items;
}

export const fakeTrends = () => {
    let item = [
        {
            className: 'col-span-2',
            data: projectItemGenerator({
                name:
                    "Azuki",
                img:
                    "https://lh3.googleusercontent.com/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT=s0",
                discord: {url: "", count: "124k"},
                twitter: {url: "", count: "371.9k"},
                website: {url: ""},
                opensea: {url: ""},
            })
        },
        ethGenerator(343),
        '5234',
        ethGenerator(0.3),
        '10000',
        '2.5%',
        curveGenerator([{x: 0, y: 80}, {x: 20, y: 50}, {x: 50, y: 70}, {x: 100, y: 10}]),
        {
            type: 'extra',
            data: extraDataGenerator(),
        }
    ];
    let items = [];

    for (let i = 0; i < 30; i++) {
        items.push(item);
    }

    return items;
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
    ];

    let items = [];

    for (let i = 0; i < 10; i++) {
        items.push(...sample);
    }

    return items;
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
    ];

    let items = [];

    for (let i = 0; i < 30; i++) {
        items.push(...sample);
    }

    return items;
}