import "./App.css";
import Menu from "./components/menu/Menu";

import routes from "./routes";

import React, { Component } from "react";
import { Route,BrowserRouter as Router, Switch } from "react-router-dom";

class App extends Component {
  showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            path={route.path}
            exact={route.exact}
            component={route.main}
            key={index}
          ></Route>
        );
      });
    }
    return result;
  };
  render() {
    return (
      <Router>
        <div className="App">
          <Menu></Menu>
          <div className="container">
            <div className="row">
             
               <Switch>{this.showContentMenus(routes)}</Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
