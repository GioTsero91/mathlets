import React from 'react';
import { COLORS } from '../../../constants'

class DropDown extends React.Component {
    constructor(props) {
        super(props);

        this.rootRef = React.createRef();
    }

    render() {
        this.data = this.props.data ?? [];
        this.color = this.props.color ?? "#AB4AC0CC"

        return <select className={"bg-["+ this.color +"] rounded-[10px] px-[10px] py-[5px] focus:outline-0"} ref={this.rootRef}>
            {
                this.data.map((option, key) => {
                    return <option value={key}>{option}</option>
                })
            }
        </select>
    }

    componentDidMount() {
    }
}

export default DropDown