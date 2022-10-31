import React from 'react';

const sizes = {
    normal: {
        fontSize: "15px",
        iconSize: "15px",
    },
    large: {
        fontSize: "44px",
        iconSize: "45px",
    }
}

class Eth extends React.Component {

    render() {
        this.data = this.props.data ?? '';
        this.size = this.props.size ?? 'normal';


        return <div className={"flex justify-center items-center text-[" + sizes[this.size]?.fontSize + "]" }>
            <div className={"hidden text-[15px] text-[44px]"}></div>
            {this.data}
            <img className="ml-2" src={"images/icons/common/eth.svg"} style={{height: sizes[this.size]?.iconSize}}/>
        </div>
    }
}

export default Eth