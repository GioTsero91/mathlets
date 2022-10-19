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

    return <div style={{width: width}} className="flex flex-row flex-wrap gap-1 mt-8">
      {
        this.data.map((item, key) => {
          return <div key={key}
                      className="relative bg-accent overflow-hidden m-3 h-[280px] w-[280px] rounded-xl flex flex-col">
            <div className="flex h-1/2">
              <div className="bg-no-repeat bg-center w-1/2 h-full"
                   style={{backgroundImage: "url(" + item.thumb + ")"}}></div>
              <div className="flex flex-col flex-1 pt-3 pr-3 h-full justify-between">
                <div className="flex justify-between w-full">
                  <img src="images/icons/common/opensea.svg"/>
                  <img src="images/icons/common/fav.png"/>
                </div>
                <div>
                  <div className="flex text-sm justify-between w-full mb-3">
                    <span className="text-[#9157F6]">Rank: </span>
                    {item.rank}
                  </div>
                  <div className="flex text-sm justify-between w-full">
                    <span className="text-[#9157F6]">Volume: </span>
                    {item.volume}
                  </div>
                </div>

              </div>
            </div>

            <div className="m-3 flex flex-col justify-between flex-1">
              <div className="flex text-sm w-full ">
                <span className="text-[#9157F6] mr-5">Name: </span>
                {item.name}
              </div>
              <div className="flex text-sm w-full ">
                <span className="text-[#9157F6] mr-5">ID: </span> #
                {item.id}
              </div>
              <div className="flex justify-between">
                <div className="flex">
                  <span className="text-[#9157F6] mr-5">Price: </span>
                  <span className="text-sm">{item.price}</span>
                </div>

                <div
                  className="cursor-pointer rounded-full bg-gradient-to-r from-[#F48DA7] to-[#F35AB0] text-white px-3 py-1">
                  Buy Now
                </div>
              </div>
            </div>


          </div>
        })
      }
    </div>
  }
}

export default NewsLetterCardTable