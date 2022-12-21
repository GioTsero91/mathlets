import React from 'react';

class DropDown extends React.Component {
    constructor(props) {
        super(props);

        this.rootRef = React.createRef();
    }

    render() {
        this.data = this.props.data ?? [];
        this.color = this.props.color ?? "#AB4AC0CC"

        return <select style={{backgroundColor: this.color}} className={"rounded-[10px] px-[10px] py-[5px] outline-0 focus:outline-0"} ref={this.rootRef}>
            {
                this.data.map((option, key) => {
                    return <option style={{backgroundColor: this.color}} value={key}>{option}</option>
                })
            }
        </select>
    }

    componentDidMount() {
    }
}

export default DropDown