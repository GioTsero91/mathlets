import React from 'react';

class LeftFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: this.props.default,
        }
        this.ref = React.createRef();
    }

    render() {

        return <div className="bg-accent items-center  px-3 py-1 flex rounded-lg text-sm font-light gap-5">
            {
                this.props.data.map((item, key) => {
                    return <div key={key}
                                className={"relative p-1 transition-all ease-in-out duration-200  cursor-pointer " +
                                    (this.state.selected === item ? "text-pink before:transition-all before:duration-200 before:content-[''] before:bg-pink before:h-[2px] before:w-1/2 before:absolute before:top-0" :
                                        "text-white before:transition-all before:duration-200 before:content-[''] before:bg-pink before:h-[2px] before:w-0 before:absolute before:top-0")}
                                onClick={(el) => {
                                    this.props.callback(item);
                                    this.setState({
                                        selected: el.target.innerText
                                    })
                                }}>{item}</div>
                })
            }
        </div>
    }
}

export default LeftFilter;