import React, { Component } from "react";
import { Link } from "react-router-dom";
import MenuVertical from "./MenuVertical";
import Search from "client/helpers/Search";

class Navbar extends Component {
    render() {
        return (
            <div>
                <Search history={this.props.router.history} />
                <div className={"custom-menu"}>
                    <MenuVertical
                        menu={JSON.parse(this.props.settings.menu.value)}
                        router={this.props.router}
                    />
                </div>
            </div>
        );
    }
}

export default Navbar;
