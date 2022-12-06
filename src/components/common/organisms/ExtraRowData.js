import React from 'react';
import {Body, Cell, Header, HeaderCell, HeaderRow, Row, Table} from "@table-library/react-table-library/table";
import DropDown from "../atoms/DropDown";
import {Bubble} from 'react-chartjs-2';


function getRandomInt({min, max}) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const chartData = {
  datasets: [
    {
      label: 'Red dataset',
      data: Array.from({length: 5}, () => ({
        x: getRandomInt({min: 25, max: 300}),
        y: getRandomInt({min: 35, max: 100}),
        r: getRandomInt({min: 5, max: 50}),
      })),
      backgroundColor: '#F741C477',
    },
    {
      label: 'Blue dataset',
      data: Array.from({length: 5}, () => ({
        x: getRandomInt({min: 25, max: 300}),
        y: getRandomInt({min: 35, max: 100}),
        r: getRandomInt({min: 5, max: 20}),
      })),
      backgroundColor: '#55BEFF77',
    },
    {
      label: 'Blue dataset',
      data: Array.from({length: 5}, () => ({
        x: getRandomInt({min: 25, max: 300}),
        y: getRandomInt({min: 35, max: 100}),
        r: getRandomInt({min: 5, max: 20}),
      })),
      backgroundColor: '#8D35A377',
    },
  ],
};

export const options = {
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    y: {
      beginAtZero: false,
    },
  },
  plugins: {
    legend: {
      display: false
    },
  },
};

class ExtraRowData extends React.Component {

  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.rootRef = React.createRef();
  }


  componentDidMount() {
  }

  render() {
    this.data = this.props.data ?? null;
    this.style = {
      headerRowColor: 'transparent',
      headerCellClassName: "border-b-[2px] border-[#FFFFFF33] !py-[10px]",
      cellClassName: "border-b-[2px] border-[#FFFFFF33]",
    }

    const theme = {
      Table: "height: 100%;",
      HeaderRow: "background-color: " + this.style?.headerRowColor + " ; color:#fff",
      HeaderCell: "padding-top: 20px; padding-bottom:20px; z-index: " + this.style?.headerCellZindex,
      Row: "background-color: transparent; color:#fff",
    };


    this.headers = [{}]
    const nodes = [];

    for (let i = 0; i < 5; i++) {
      const node = [];
      node.push(<div className={"flex items-center justify-between w-full text-[12px] mr-[15px]"}>
        <img
          src={"https://lh3.googleusercontent.com/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT=s0"}
          className={"w-[45px] h-[45px] rounded"}/>
        <div className={"flex flex-col h-full justify-between"}>
          <div className={"flex justify-between"}>
            <div>Rank:</div>
            <div>1</div>
          </div>
          <div className={"flex justify-between mt-[5px]"}>
            <div>Price:</div>
            <div>0.001</div>
          </div>
        </div>
        <div className={"flex flex-col items-end"}>
          <div>7 min ago</div>
          <div className={"mt-[5px]"}>#1234</div>
        </div>
      </div>)

      node.push(<div className={"flex items-center justify-between w-full text-[12px] ml-[15px]"}>
        <img
          src={"https://lh3.googleusercontent.com/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT=s0"}
          className={"w-[45px] h-[45px] rounded"}/>
        <div className={"flex flex-col h-full justify-between"}>
          <div className={"flex justify-between"}>
            <div>Rank:</div>
            <div>1</div>
          </div>
          <div className={"flex justify-between mt-[5px]"}>
            <div>Price:</div>
            <div>0.001</div>
          </div>
        </div>
        <div className={"flex flex-col items-end"}>
          <div>7 min ago</div>
          <div className={"mt-[5px]"}>#1234</div>
        </div>
      </div>)

      nodes.push(node)
    }

    this.data = {
      nodes: nodes
    }

    return <div className={"flex"} ref={this.rootRef}>

      <div ref={this.containerRef}
           className="transition-all ease-in-out duration-300 px-[30px] py-[5px] bg-gradient-to-r from-[#B939AD] to-[#9234BD] rounded-lg"
           style={{
             width: '50%',
             top: '100px',
             right: '5px',
             opacity: '1'
           }}>
        <Table className="gap-y-2" data={this.data} theme={theme}>
          {(tableList) => (
            <>
              <Header>
                <HeaderRow>
                  <HeaderCell className={this.style.headerCellClassName} style={{textAlign: 'center'}}>
                    <div className={"flex"}>
                      <img src={require("assets/images/icons/common/filters.svg").default}/>
                      <div className={"flex gap-[10px] items-center font-normal flex-1 justify-center"}>
                        Price <div className={"rounded-[7px] bg-[#AB4AC0CC] py-[3px] px-[10px]"}>0.5 - 1.6</div>
                      </div>
                    </div>
                  </HeaderCell>
                  <HeaderCell className={this.style.headerCellClassName}>
                    <div className={"flex justify-between"}>
                      <div className={"flex gap-[10px] items-center font-normal"}>
                        Rank <div className={"rounded-[7px] bg-[#AB4AC0CC] py-[3px] px-[10px]"}>0.5 - 1.6</div>
                      </div>
                      <div className={"flex justify-end gap-[10px] items-center font-normal"}>
                        Traits <DropDown data={["trait1", "trait2"]}/>
                      </div>
                    </div>
                  </HeaderCell>
                </HeaderRow>
                <HeaderRow>
                  <HeaderCell className={this.style.headerCellClassName + " !pr-[15px]"}>
                    <div className={"flex items-center justify-between"}>
                      Listings
                      <div
                        className={"inline-flex gap-[5px] rounded-[7px] bg-[#AB4AC0CC] py-[3px] px-[10px] items-center font-normal"}>
                        <img className={"w-[15px] h-[15px]"} src={require("assets/images/icons/common/sort-desc.png")}/>
                        Price
                        <img src={require("assets/images/icons/common/arrow-down.svg").default}/>
                      </div>
                    </div>

                  </HeaderCell>

                  <HeaderCell className={this.style.headerCellClassName + " !pl-[15px]"}>
                    <div className={"flex justify-between items-center"}>
                      Sales
                      <div
                        className={"inline-flex gap-[5px] rounded-[7px] bg-[#AB4AC0CC] py-[3px] px-[10px] items-center font-normal"}>
                        <img className={"w-[15px] h-[15px]"} src={require("assets/images/icons/common/sort-desc.png")}/>
                        Date
                        <img src={require("assets/images/icons/common/arrow-down.svg").default}/>
                      </div>
                    </div>

                  </HeaderCell>
                </HeaderRow>
              </Header>
              <Body>
                {tableList.map((row, key) => (
                  <Row className="relative" key={key} item={row}>
                    {
                      row.map((item, key) => {
                        const className = item.className ?? '';
                        let data = item.className ? item.data : item;
                        data = item.type === 'extra' ? item.data : data;

                        const rounded = key === 0 ? "rounded-l-xl" :
                          key === row.length - 1 ? "rounded-r-xl" : "";
                        return <Cell
                          className={"relative !items-start !bg-" + this.style?.rowColor + " " + this.style?.cellClassName}
                          align="center">
                          <div
                            className={"flex  min-h-[" + this.style?.rowHeight + "] items-center justify-center"}>{data}</div>
                        </Cell>
                      })
                    }
                  </Row>
                ))}
              </Body>
            </>
          )}
        </Table>
      </div>

      <div className={"w-[50%] flex flex-col p-[5px]"}>
        <div className={"p-[5px]"}>
          <div>Holder Distribution</div>
          <div className={"text-[12px] font-normal mt-[10px]"}>
            Azuki starts with a collection of 10,000 avatars that give you membership access to The Garden: a corner of
            the internet where artists, builders, and web3 enthusiasts meet to create a decentralized future. Azuki
            holders receive access to exclusive drops, experiences, and more.

          </div>
        </div>
        <div className={"flex-1"}>
          <Bubble options={options} data={chartData}/>
        </div>
      </div>
    </div>
  }
}

export default ExtraRowData