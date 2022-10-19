import React from 'react';
import {
    Table,
    Header,
    HeaderRow,
    HeaderCell,
    Body,
    Row,
    Cell,
} from '@table-library/react-table-library/table';

class SmallTable extends React.Component {

    render() {
        let width = this.props.data?.width ?? "100%";
        this.headers = this.props.data?.headers ?? [];
        this.rows = this.props.data?.rows ?? []
        this.style = this.props.data?.style ?? null;

        const data = {nodes: this.rows};

        const theme = {
            Table: "height: 100%;",
            HeaderRow: "background-color: " + this.style?.headerRowColor+" ; color:#fff",
            HeaderCell: "padding-top: 20px; padding-bottom:20px; z-index: " + this.style?.headerCellZindex,
            Row: "background-color: transparent; color:#fff",
        };

        return <div style={{width: width, color: '#000', height: '95%'}}>
            <Table className="gap-y-2" data={data} theme={theme}>
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
                            {tableList.map((row, key) => (
                                <Row className="relative" key={key} item={row}>
                                    {
                                        row.map((item, key) => {
                                            const className = item.className ?? '';
                                            let data = item.className ? item.data : item;
                                            data = item.type === 'extra' ? item.data : data;

                                            const rounded = key === 0 ? "rounded-l-xl" :
                                                key === row.length - 1 ? "rounded-r-xl" : "";
                                            return <Cell className={"relative !items-start !bg-" + this.style.rowColor + " " + rounded + " " + className}
                                                       align="center"><div className={"flex  min-h-[" + this.style.rowHeight + "] items-center justify-center"}>{data}</div></Cell>
                                        })
                                    }
                                </Row>
                            ))}
                        </Body>
                    </>
                )}
            </Table>
        </div>
    }
}

export default SmallTable