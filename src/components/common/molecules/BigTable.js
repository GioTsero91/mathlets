import React from 'react';
import {Body, Cell, Header, HeaderCell, HeaderRow, Row, Table,} from '@table-library/react-table-library/table';

class BigTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tableWidth: 0,
      showExtraData: {},
    }
    this.tableRef = React.createRef();
  }

  handleResize = () => {
    this.setState({
      tableWidth: this.tableRef.current.offsetWidth
    })
    this.render();
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    let width = this.props.data?.width ?? "100%";
    this.headers = this.props.data?.headers ?? [];
    this.rows = this.props.data?.rows ?? []
    this.style = this.props.data?.style ?? null;

    const data = {nodes: this.rows};

    const theme = {
      Table: "height: 100%;",
      HeaderRow: "background-color: " + this.style?.headerRowColor + " ; color:#fff",
      HeaderCell: "padding-top: 20px; padding-bottom:20px; z-index: " + this.style?.headerCellZindex,
      Row: "background-color: transparent; color:#fff",
    };

    return <div style={{width: width, color: '#000', height: '95%'}}>
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
                const ref = React.createRef();
                let extraData = '';
                const showExtra = (key) => {
                  let prevState = this.state.showExtraData;
                  prevState[key] = prevState[key] ? false : true;
                  console.log(prevState);
                  this.setState({showExtraData: prevState})
                }

                return <>
                  <Row className="relative" key={rowKey} item={row}>
                    {
                      row.map((item, key) => {
                        const className = item.className ?? '';
                        let data = item.className ? item.data : item;
                        if (item.type === 'extra') {
                          data = <div onClick={() => {showExtra(rowKey)}}
                                      className="absolute top-[30px] rounded-full bg-no-repeat bg-center w-8 h-8 cursor-pointer flex items-center justify-center"
                                      style={{backgroundImage: 'url(images/icons/common/ellipse.svg)'}}>
                            <img
                              className={"transition-all ease-in-out duration-300 " + (this.state.showExtraData[rowKey] ? "rotate-180" : "rotate-1")}
                              src={"images/icons/common/arrow-down.svg"}/>
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
    </div>
  }
}

export default BigTable