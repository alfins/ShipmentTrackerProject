import React from 'react';
import './style.css'
import Nav from './NavRouter.js'
import Shipment from './shipping.js'
import {
  BrowserRouter as Router,
  Switch, 
  Route,
  Link
} from 'react-router-dom';

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <h2 style={{ color: 'white' }}>Home22</h2>
  },
  {
    path: "/about",
    exact: false,
    main: () => <div style={{ color: 'white' }}><h2>Bubblegum</h2></div>
  },
  {
    path: "/shippings",
    exact: false,
    main: () => <Shipment />
  }
];

function Background() {
  return (
    <div className="background">Φ</div>
  );


}

function Workspace() {
  return (
    <div className="workspace">

      <div className="main-area">
        {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.main />}
            />
          ))}
      </div>


    </div>
  );


}

export default function Main() {
  return (
    <div>
      <Background />
      <Router>
        <Nav />
        <Workspace />
      </Router>
    </div>
  );
}

