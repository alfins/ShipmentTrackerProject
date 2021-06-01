import React, { Component } from "react";
import SideBarMain from "./SideBar-Master.js";

  
class NavRouter extends Component {
    state = {
        sidebarOpen: false
    };  
    handleViewSidebar = () =>
        this.setState({ sidebarOpen: !this.state.sidebarOpen });

    render() {
        return (
            <div>
                <SideBarMain
                    isOpen={this.state.sidebarOpen}
                    toggleSidebar={this.handleViewSidebar}
                />
                
            </div>
        );
    }
}



export default NavRouter;