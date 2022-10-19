import React from 'react';
import SmallTable from "../molecules/SmallTable";

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

        return <div ref={this.rootRef}>

            <div ref={this.containerRef}
                 className="transition-all ease-in-out duration-300 p-5 bg-gradient-to-r from-[#6C30CD] to-[#B939AD] rounded-lg"
                 style={{
                     width: '100%',
                     top: '100px',
                     right: '5px',
                     opacity: '1'
                 }}>
                <SmallTable data={
                    {
                        style: {
                            rowColor: 'transparent',
                            headerRowColor: 'transparent',
                        },
                        headers: [
                            {
                                label: '',
                            },
                            {
                                label: 'Rank',
                            },
                            {
                                label: 'Price',
                            },
                            {
                                label: 'Buy',
                            }
                        ],
                        rows: [
                            [
                                'Azuki',
                                '200',
                                '300',
                                ''
                            ],
                            [
                                'Azuki',
                                '200',
                                '300',
                                ''
                            ],
                            [
                                'Azuki',
                                '200',
                                '300',
                                ''
                            ],
                            [
                                'Azuki',
                                '200',
                                '300',
                                ''
                            ],
                            [
                                'Azuki',
                                '200',
                                '300',
                                ''
                            ]
                        ]
                    }
                }></SmallTable>
            </div>
        </div>
    }
}

export default ExtraRowData