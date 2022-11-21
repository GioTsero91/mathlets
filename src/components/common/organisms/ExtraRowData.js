import React from 'react';
import {Body, Cell, Header, HeaderCell, HeaderRow, Row, Table} from "@table-library/react-table-library/table";
import DropDown from "../atoms/DropDown";

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
    }

    const theme = {
      Table: "height: 100%;",
      HeaderRow: "background-color: " + this.style?.headerRowColor + " ; color:#fff",
      HeaderCell: "padding-top: 20px; padding-bottom:20px; z-index: " + this.style?.headerCellZindex,
      Row: "background-color: transparent; color:#fff",
    };


    this.headers = [{}]
    this.data = {nodes: [["asd", "qweqw", "qweqw"]]}

    return <div ref={this.rootRef}>

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
                    <img src={require("assets/images/icons/common/filters.svg").default}/>
                  </HeaderCell>
                  <HeaderCell className={this.style.headerCellClassName} >
                    <div className={"flex gap-[10px] items-center font-normal"}>
                      Price <div className={"rounded-[7px] bg-[#AB4AC0CC] py-[3px] px-[10px]"}>0.5 - 1.6</div>
                    </div>
                  </HeaderCell>
                  <HeaderCell className={this.style.headerCellClassName} >
                    <div className={"flex gap-[10px] items-center font-normal"}>
                      Rank <div className={"rounded-[7px] bg-[#AB4AC0CC] py-[3px] px-[10px]"}>0.5 - 1.6</div>
                    </div>
                  </HeaderCell>
                  <HeaderCell className={this.style.headerCellClassName} >
                    <div className={"flex justify-end gap-[10px] items-center font-normal"}>
                      Traits <DropDown data={["trait1", "trait2"]}/>
                    </div>
                  </HeaderCell>
                </HeaderRow>
                <HeaderRow>
                  <HeaderCell className={this.style.headerCellClassName} >
                    Listings
                  </HeaderCell>
                  <HeaderCell className={"!text-right " + this.style.headerCellClassName}>
                    <div className={"inline-flex gap-[5px] rounded-[7px] bg-[#AB4AC0CC] py-[3px] px-[10px] items-center font-normal"}>
                      <img className={"w-[15px] h-[15px]"} src={require("assets/images/icons/common/sort-desc.png")}/>
                      Price
                      <img src={require("assets/images/icons/common/arrow-down.svg").default}/>
                    </div>
                  </HeaderCell>

                  <HeaderCell className={this.style.headerCellClassName + " !pl-[15px]"} >
                    Sales
                  </HeaderCell>
                  <HeaderCell className={"!text-right " + this.style.headerCellClassName}>
                    <div className={"inline-flex gap-[5px] rounded-[7px] bg-[#AB4AC0CC] py-[3px] px-[10px] items-center font-normal"}>
                      <img className={"w-[15px] h-[15px]"} src={require("assets/images/icons/common/sort-desc.png")}/>
                      Date
                      <img src={require("assets/images/icons/common/arrow-down.svg").default}/>
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
                          className={"relative !items-start !bg-" + this.style?.rowColor + " " + rounded + " " + className}
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
    </div>
  }
}

export default ExtraRowData