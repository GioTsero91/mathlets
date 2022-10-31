import React from 'react';


class NewsLetterCardTable extends React.Component {

    render() {
        let width = this.props.data?.width ?? "100%";
        this.data = this.props.data ?? null;
        this.filters = this.props.filters ?? null;

        if (this.filters) {
            this.data = this.data.filter((item) => {
                return this.filters.platform === "all" || this.filters.platform === item.platform;
            });
        }

        return <div style={{width: width}} className="flex flex-row flex-wrap gap-2 mt-8">
            {
                this.data.map((item, key) => {
                    return <div key={key} className="relative bg-accent overflow-hidden m-3 h-96 w-80 rounded-xl">
                        <div className="bg-no-repeat bg-center w-full h-[60%]" style={{backgroundImage: "url("+ item.thumb +")"}}></div>

                        <div className="w-full flex justify-end relative top-[-28px]">
                            <div className="relative text-red flex gap-3 items-center h-10 w-1/2 justify-center bg-accent rounded-l-3xl
                                before:content-[''] before:h-10 before:w-10 before:absolute before:left-[-38px] before:top-[-12px] before:rounded-r-3xl before:shadow-[5px_25px_0px_5px_rgba(40,37,61,1)]">
                                <div className="flex text-sm gap-1 items-center">
                                    <img className="relative top-[-1px]"  src={require("assets/images/icons/common/like.svg").default}/>
                                    {item.likes}
                                </div>
                                <div className="flex text-sm gap-1 items-center">
                                    <img className="relative top-[1px]" src={require("assets/images/icons/common/comment.svg").default}/>
                                    {item.comments}
                                </div>
                            </div>
                        </div>

                        <div className="p-5 relative top-[-30px] font-light">
                            {item.name}
                        </div>
                        <div className="absolute bottom-[0px] w-full flex p-5 justify-between">
                            <img src={require("assets/images/icons/common/" + item.platform + "-colored.svg").default}/>
                            <div className="cursor-pointer">
                                See More
                            </div>
                        </div>

                    </div>
                })
            }
        </div>
    }
}

export default NewsLetterCardTable