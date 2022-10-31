import {Outlet, NavLink} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <NavLink activeClassName="active" to="/">
                    <div className={"item"}>
                        <div>
                            <img src={"images/icons/nav/main.svg"}/>
                        </div>
                        Main
                    </div>
                </NavLink>
                <NavLink activeClassName="active" to="/whale">
                    <div className={"item"}>
                        <div>
                            <img src={"images/icons/nav/whale.svg"}/>
                        </div>
                        Whale
                    </div>
                </NavLink>
                <NavLink activeClassName="active" to="/trends">
                    <div className={"item"}>
                        <div>
                            <img src={"images/icons/nav/trends.svg"}/>
                        </div>
                        Trends
                    </div>
                </NavLink>
                <NavLink activeClassName="active" to="/mints">
                    <div className={"item"}>
                        <div>
                            <img src={"images/icons/nav/mints.svg"}/>
                        </div>
                        Mints
                    </div>
                </NavLink>
                <NavLink activeClassName="active" to="/newsletter">
                    <div className={"item"}>
                        <div>
                            <img src={"images/icons/nav/newsletter.svg"}/>
                        </div>
                        Newsletter
                    </div>
                </NavLink>
                <NavLink activeClassName="active" to="/best-deal">
                    <div className={"item"}>
                        <div>
                            <img src={"images/icons/nav/best-deal.svg"}/>
                        </div>
                        Best Deal
                    </div>
                </NavLink>
                <NavLink activeClassName="active" to="/upcoming-nft">
                    <div className={"item"}>
                        <div>
                            <img src={"images/icons/nav/upcoming-nft.svg"}/>
                        </div>
                        Upcoming NFT
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