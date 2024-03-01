import React from "react";
import { NavLink } from "react-router-dom";
// import Snickers from "./Snickers";
// import Reeses from "./Reeses";
// import KettleChips from "./KettleChips";
import "./NavBar.css";

function NavBar() {
    return (
        <nav className="NavBar">
            <NavLink exact to="/">
                Home
            </NavLink>
            <NavLink exact to="/kettle_chips">
                Kettle Chips
            </NavLink>
            <NavLink exact to="/snickers">
                Snickers
            </NavLink>
            <NavLink exact to="/reeses">
                Reese's
            </NavLink>
        </nav>
    );
}

export default NavBar;