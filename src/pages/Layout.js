import {Outlet, NavLink} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <NavLink className={(navData) => (navData.isActive ? "active" : 'none')} to="/">
                    <div className={"item"}>
                        <div>
                            <img src={require("assets/images/icons/nav/main.svg").default}/>
                        </div>
                        Main
                    </div>
                </NavLink>
                <NavLink className={(navData) => (navData.isActive ? "active" : 'none')}  to="/whale">
                    <div className={"item"}>
                        <div>
                            <img src={require("assets/images/icons/nav/whale.svg").default}/>
                        </div>
                        Whales
                    </div>
                </NavLink>
                <NavLink  className={(navData) => (navData.isActive ? "active" : 'none')} to="/trends">
                    <div className={"item"}>
                        <div>
                            <img src={require("assets/images/icons/nav/trends.svg").default}/>
                        </div>
                        Trends
                    </div>
                </NavLink>
                <NavLink  className={(navData) => (navData.isActive ? "active" : 'none')} to="/mints">
                    <div className={"item"}>
                        <div>
                            <img src={require("assets/images/icons/nav/mints.svg").default}/>
                        </div>
                        Mints
                    </div>
                </NavLink>
                <NavLink  className={(navData) => (navData.isActive ? "active" : 'none')} to="/newsletter">
                    <div className={"item"}>
                        <div>
                            <img src={require("assets/images/icons/nav/newsletter.svg").default}/>
                        </div>
                        Newsletter
                    </div>
                </NavLink>
                <NavLink  className={(navData) => (navData.isActive ? "active" : 'none')} to="/best-deal">
                    <div className={"item"}>
                        <div>
                            <img src={require("assets/images/icons/nav/best-deal.svg").default}/>
                        </div>
                        Best Deal
                    </div>
                </NavLink>
                <NavLink  className={(navData) => (navData.isActive ? "active" : 'none')} to="/upcoming-nft">
                    <div className={"item"}>
                        <div>
                            <img src={require("assets/images/icons/nav/upcoming-nft.svg").default}/>
                        </div>
                        Upcoming NFT
                    </div>
                </NavLink>
                <NavLink  className={(navData) => (navData.isActive ? "active" : 'none')} to="/bot">
                    <div className={"item"}>
                        <div>
                            <img src={require("assets/images/icons/nav/bot.svg").default}/>
                        </div>
                        My Bot-Owl
                    </div>
                </NavLink>
            </nav>

            <div className="flex-1 pl-10 overflow-auto" style={{ height: 'calc(100vh - 80px)'}}>
                <Outlet/>
            </div>

        </>
    )
};

export default Layout;