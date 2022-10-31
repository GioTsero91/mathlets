import React from 'react';
import Curve from "./Curve";

const styles = {
    container: {
        display: "inline-flex",
        alignItems: "center",
        overflowX: "auto",
        padding: "10px",
        marginRight: "10px",
        borderRadius: "10px",
        height: "120px",
        width: "500px",
    },
};

class Item extends React.Component {
    render() {
        const data = this.props.data ?? {};

        return <div className="bg-accent flex" style={styles.container}>
            <div className="overflow-hidden rounded-lg"
                 style={
                     {
                         flex: "0 0 80px",
                         height: "80px",
                         backgroundImage: "url(" + data.img + ")",
                         backgroundPosition: "center",
                         backgroundSize: "cover",
                         backgroundRepeat: "no-repeat",
                     }
                 }>
            </div>
            <div style={{flexBasis: "50%"}} className="ml-5 flex flex-col">
                <div className={"text-xl font-bold text-" + data.color}>
                    {data.name}
                </div>
                <div style={{maxWidth: "300px",}} className="text-sm font-light line-clamp-2 whitespace-pre-wrap text-xs">
                    {data.timeAdded}
                </div>

                <div className="grid grid-cols-2 text-xs mt-4 gap-1 pr-20">
                    <div>
                        Floor
                    </div>
                    <div className="flex justify-self-end">
                        {data.floor}
                        <img style={{ height: "15px", marginLeft: "5px"}} src={require("assets/images/icons/common/eth.svg").default}/>
                    </div>
                    <div>
                        Vol
                    </div>
                    <div className="flex justify-self-end">
                        {data.vol}
                        <img style={{ height: "15px", marginLeft: "5px"}} src={require("assets/images/icons/common/eth.svg").default}/>
                    </div>
                </div>
            </div>
            <div style={{flexBasis: "25%"}} className="items-start h-full">
                <div className="font-light mb-3">
                    Supply: {data.supply}
                </div>
                <Curve color={data.color} data={[{x: 0,y: 20},{x: 20,y: 10},{x: 40,y: 60},{x: 70,y: 10},{x: 100,y: 30}]}></Curve>
            </div>
        </div>
    }
}

export default Item