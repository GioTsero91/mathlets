import React from 'react';
import { COLORS } from '../../../constants'

class Curve extends React.Component {
    constructor(props) {
        super(props);

        this.rootRef = React.createRef();
    }

    render() {
        this.data = this.props.data ?? [];
        this.color = this.props.color ?? 'pink';
        this.width = this.props.width ?? 130;
        this.height = this.props.height ?? 70;

        return <canvas width={this.width} height={this.height} ref={this.rootRef}>
        </canvas>
    }

    componentDidMount() {
        const ctx = this.rootRef.current.getContext("2d");
        ctx.beginPath();
        let firstPoint = true;
        let prevPoint = null;

        this.data.forEach((item) => {
            const x = (item.x / 100) * this.width;
            const y = (item.y / 100) * this.height;
            if (firstPoint) {
                ctx.moveTo(x, y);
                firstPoint = false;
            } else {
                let xDelta = x - prevPoint.x;
                let controlPoints = y > prevPoint.y ? [
                    {
                        x: prevPoint.x + xDelta/2,
                        y: prevPoint.y
                    }, {
                        x: x - xDelta/2,
                        y: y
                    }
                ] : [
                    {
                        x: prevPoint.x + xDelta/2,
                        y: prevPoint.y
                    }, {
                        x: x - xDelta/2,
                        y: y
                    }
                ]

                ctx.bezierCurveTo(controlPoints[0].x, controlPoints[0].y, controlPoints[1].x, controlPoints[1].y, x, y);
            }
            prevPoint = {x, y};
        });

        ctx.strokeStyle = COLORS[this.color];
        ctx.lineWidth = 2;
        ctx.stroke();
    }
}

export default Curve