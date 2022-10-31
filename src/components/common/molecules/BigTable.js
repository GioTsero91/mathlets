import React from 'react';
import {Body, Cell, Header, HeaderCell, HeaderRow, Row, Table,} from '@table-library/react-table-library/table';
import FilterTabs from "./FilterTabs";
import {CONFIG} from "../../../config";
import CustomInput from "../atoms/CustomInput";
import {withRouter} from "../../../services/WithRouter";

class BigTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tableWidth: 0,
      showExtraData: {},
      tableData: [],
      isLoading: false
    }
    this.tableRef = React.createRef();
  }


  componentDidMount() {
    setInterval(() => {
      const index = this.state.tableData.length;
      if (this.props.data?.rows[index]) {
        this.setState({
          tableData: [...this.state.tableData, this.props.data?.rows[index]],
        });
      }
    }, 1);
  }

  componentWillUnmount() {
  }

  render() {
    let width = this.props.data?.width ?? "100%";
    this.headers = this.props.data?.headers ?? [];
    this.rows = this.state.tableData ?? []
    this.style = this.props.data?.style ?? null;
    this.filter = this.props.data.filter ?? null;
    this.navigate = this.props.data.navigate ?? null;

    const data = {nodes: this.rows};

    const theme = {
      Table: "max-height: 100%",
      HeaderRow: "background-color: " + this.style?.headerRowColor + " ; color:#fff",
      HeaderCell: "padding-top: 20px; padding-bottom:20px; z-index: " + this.style?.headerCellZindex,
      Row: "background-color: transparent; color:#fff",
    };

    return <div className={"relative"} style={{width: width, color: '#000', height: this.style?.maxHeight ?? '95%'}}>
      {
        this.filter.type === 'search' &&
        <div className={"absolute z-[11] top-[15px] px-[10px] rounded-[8px] flex items-center"}>
          <CustomInput icon={require("assets/images/icons/common/search.svg").default} width={"300px"}
                       placeholder={this.filter.placeholder}/>
        </div>
      }

      {
        this.filter.type === 'times' &&
        <div className={"absolute z-[11] top-[15px] bg-accent px-[10px] rounded-[8px] flex items-center"}>
          <img src={require("assets/images/icons/common/interval.svg").default}/>
          <div className={"border-r-[2px] border-bg self-stretch ml-[10px]"}>

          </div>
          <div className={"relative top-[3px] my-[2px]"}>
            <FilterTabs tabs={CONFIG.TIMES}/>
          </div>
        </div>
      }

      {
        !this.state.isLoading &&
        <Table className="gap-y-2" data={data} theme={theme} ref={this.tableRef}>
          {(tableList) => (
            <>
              <Header>
                <HeaderRow>
                  {
                    this.headers.map((item, key) => {
                      return <HeaderCell style={{textAlign: 'center'}}>{item.label}</HeaderCell>
                    })
                  }
                </HeaderRow>
              </Header>
              <Body>
                {tableList.map((row, rowKey) => {
                  const rowId = row.id
                  const rowData = row.data
                  const ref = React.createRef();
                  let extraData = '';
                  const showExtra = (key) => {
                    let prevState = this.state.showExtraData;
                    prevState[key] = !prevState[key];
                    this.setState({showExtraData: prevState})
                  }

                  return <>
                    <Row
                      onClick={() => {
                        !!this.navigate && this.props.navigate(this.navigate.url + rowId)
                      }}
                      className={"relative " + (!!this.navigate ? "cursor-pointer" : "")}
                      key={rowKey}
                      item={row}>
                      {
                        rowData.map((item, key) => {
                          const className = item.className ?? ''
                          let data = item.className ? item.data : item
                          if (item.type === 'extra') {
                            data = <div onClick={() => {
                              showExtra(rowKey)
                            }}
                                        className="absolute top-[30px] rounded-full bg-no-repeat bg-center w-8 h-8 cursor-pointer flex items-center justify-center"
                                        style={{backgroundImage: 'url(' + require("assets/images/icons/common/ellipse.svg").default + ')'}}>
                              <img
                                className={"transition-all ease-in-out duration-300 " + (this.state.showExtraData[rowKey] ? "rotate-180" : "rotate-1")}
                                src={require("assets/images/icons/common/arrow-down.svg").default}/>
                            </div>
                            extraData = item.data;
                          }

                          const rounded = key === 0 ? "rounded-l-xl" : key === row.length - 1 ? "rounded-r-xl" : "";
                          return <Cell className={"relative !items-center !bg-accent " + rounded + " " + className}>
                            <div data-table-width={this.state.tableWidth}
                                 className={"flex min-h-[" + this.style.rowHeight + "] items-center justify-center"}>
                              {data}
                            </div>
                          </Cell>
                        })
                      }
                    </Row>
                    <Row ref={ref}>
                      <div className="transition-all ease-in-out duration-300"
                           style={{
                             transform: "transale3d(0,0,0)",
                             willChange: "height, opacity",
                             height: this.state.showExtraData[rowKey] ? '500px' : '0px',
                             opacity: this.state.showExtraData[rowKey] ? '1' : '0',
                             gridColumn: "1 / span " + (row.length + 1)
                           }}>
                        {extraData}
                      </div>
                    </Row>
                  </>
                })}
              </Body>
            </>
          )}
        </Table>
      }
    </div>
  }
}

export default withRouter(BigTable)