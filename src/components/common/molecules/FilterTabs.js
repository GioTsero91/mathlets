import React from 'react';

export default class FilterTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.default ?? this.props.tabs[0],
    }
    this.ref = React.createRef();
  }

  selectTab(e, item) {
    typeof this.props.callback === 'function' && this.props.callback(item);

    this.setState({
      selected: e.target.innerText
    })
  }

  render() {

    return <div className="items-center px-3 py-1 flex rounded-lg text-sm font-light gap-5">
      {
        this.props.tabs.map((item, key) => {
          return <div key={key}
                      className={"relative p-1 transition-all ease-in-out duration-200  cursor-pointer " +
                        (this.state.selected === item ? "text-pink before:transition-all before:duration-200 before:content-[''] before:bg-pink before:h-[2px] before:w-1/2 before:absolute before:top-0" :
                          "text-[#fff] before:transition-all before:duration-200 before:content-[''] before:bg-pink before:h-[2px] before:w-0 before:absolute before:top-0")}
                      onClick={(e) => {
                        this.selectTab(e, item)
                      }}>{item}</div>
        })
      }
    </div>
  }
}