import React from 'react';

class Eth extends React.Component {

    render() {
        this.data = this.props.data ?? '';

        return <div className="flex justify-center items-center">
            {this.data}
            <img className="ml-2" src={"images/icons/common/eth.svg"} style={{height: "15px"}}/>
        </div>
    }
}

export default Eth