import React, { Component } from "react";
import { Route } from "react-router";
import { NavLink } from "react-router-dom";
const menus = [
  {
    label: "Home",
    to: "/",
    exact: true,
  },
  {
    label: "Product List",
    to: "/productList",
    exact: false,
  },
];
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? "active" : "";
        return (
          <li className={active}>
            <NavLink
              // activeStyle={{ backgroundColor: "white", color: "black" }}
              to={to}
              className="my-link"
            >
              {label}
            </NavLink>
          </li>
        );
      }}
    ></Route>
  );
};
const showMenu = (menus) => {
  var result = [];
  if (menus.length > 0) {
    result = menus.map((menu, index) => {
      return (
        <MenuLink
          key={index}
          label={menu.label}
          to={menu.to}
          activeOnlyWhenExact={menu.exact}
        ></MenuLink>
      );
    });
  }
  return result;
};
class Menu extends Component {
  render() {
    return (
      <div className="navbar navbar-inverse">
        <a className="navbar-brand" href="/">
          PRODUCT API
        </a>
        <ul className="nav navbar-nav">{showMenu(menus)}</ul>
      </div>
    );
  }
}

export default Menu;
