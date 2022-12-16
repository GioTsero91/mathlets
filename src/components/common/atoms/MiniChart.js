import React from 'react';
import { COLORS } from '../../../constants'
import {Line} from "react-chartjs-2"

const labels = ['','','','','','','']


const lineOptions = {
    responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
            display: false
        },
        x: {
            display: false
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
}


class MiniChart extends React.Component {


    constructor(props) {
        super(props);

        this.rootRef = React.createRef();

        this.lineData = {
            labels,
            datasets: [
                {
                    label: '',
                    data: labels.map(() => Math.round(Math.random() * 10)),
                    borderColor: 'rgba(244,141,167,0.46)',
                    backgroundColor: 'transparent',
                    fill: 'start',
                    pointRadius: 0,
                    borderWidth: 1,
                },
                {
                    type: 'bar',
                    label: '',
                    backgroundColor: 'rgba(247,65,196,0.21)',
                    data: labels.map(() => Math.round(Math.random() * 10)),
                    borderColor: 'transparent',
                    borderWidth: 2,
                    barThickness: 15
                },
            ],
        }
    }

    render() {
        this.data = this.props.data ?? [];
        this.color = this.props.color ?? 'pink';
        this.width = this.props.width ?? 130;
        this.height = this.props.height ?? 70;

        return <div className={"w-[150px] h-[70px]"}>
            <Line options={lineOptions} data={this.lineData}/>
        </div>
    }

    componentDidMount() {

    }
}

export default MiniChart