import React from 'react';

class RightFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: this.props.default,
        }
        this.ref = React.createRef();
    }

    colors = {
        youtube: '#F44268',
        instagram: '#CB39A4',
        twitter: '#1C96E8',
        spotify: '#1DD05D',
        discord: '#485EF4',
    };

    render() {

        return <div className="flex rounded-lg text-sm font-light gap-5">
            <div data-name="all" onClick={(el) => {
                this.props.callback(el.target.getAttribute('data-name'));
                this.setState({
                    selected: el.target.getAttribute('data-name')
                })
            }} className={"transition-all ease-in-out duration-200 cursor-pointer px-5 py-1 bg-accent mr-1 flex items-center rounded-lg  " + (this.state.selected === 'all' ? "bg-pink text-white" : "text-[#707070]")}>
                All
            </div>
            <div className="bg-accent flex rounded-lg">
                {
                    this.props.data.map((item, key) => {
                        return <div data-name={item} key={key}
                                    className={"relative rounded-lg flex items-center justify-center px-6 py-2 transition-all ease-in-out duration-200  cursor-pointer " +
                                        (this.state.selected === item ? ' opacity-1' : 'opacity-50') }
                                    style={this.state.selected === item ?
                                        {backgroundColor: this.colors[this.state.selected]} :
                                        {}
                                    }
                                    onClick={(el) => {
                                        this.props.callback(el.target.getAttribute('data-name'));
                                        this.setState({
                                            selected: el.target.getAttribute('data-name')
                                        })
                                    }}><img className="pointer-events-none" src={"images/icons/common/news-" + item + ".svg"}/></div>
                    })
                }
            </div>
        </div>
    }
}

export default RightFilter;