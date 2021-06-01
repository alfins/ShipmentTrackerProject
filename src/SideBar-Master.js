import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

class SideBarMaster extends Component {
  render() {
    var sidebarClass = this.props.isOpen ? "sidebar open" : "sidebar";
    return (
      <div className={sidebarClass}>

        <button onClick={this.props.toggleSidebar} className="sidebar-toggle">
          {this.props.isOpen ? <div>&lt;&lt;</div> : <div>&gt;&gt;</div>}
        </button>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/shippings">Shipments</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SideBarMaster;