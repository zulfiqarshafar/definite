import React from "react";
import BurgerButton from "./icons/BurgerButton";
import "./Menu.scss";

function Menu() {
  return (
    <div className="menu">
      <ul className="menu__main">
        <li>
          <img
            className="menu__euro"
            src={require("../assets/euro.png")}
            alt="Euro 4"
          />
        </li>
        <li>ABOUT US</li>
        <li>EXPLORE CARS</li>
        <li>PROMO</li>
        <li>NEWS & EVENTS</li>
      </ul>
      <div className="menu__burger">
        <BurgerButton />
      </div>
    </div>
  );
}

export default Menu;
