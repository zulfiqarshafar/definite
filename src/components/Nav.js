import React from "react";
import Menu from "./Menu";
import "./Nav.scss";

function Nav() {
  return (
    <nav className="nav">
      <div className="nav__container">
        <div className="nav__logo">
          <img src={require("../assets/logo.png")} alt="Mitsubishi Motors" />
        </div>
        <div className="nav__main">
          <Menu />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
