import React from "react";
import Hamburger from "./Hamburger";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__wrapper">
        <div className="navbar__container">
          <div className="navbar__vlInfo">
            {/* <h1>vintagelove</h1> */}
            <img src={logo} alt="Vintage Love Logo" />
          </div>
          <Hamburger />
          <ul className="navbar__nav">
            <li>
              <p>
                <a href="#who">Who</a>
              </p>
            </li>
            <li>
              <p>
                <a href="#what">What</a>
              </p>
            </li>
            <li>
              <p>
                <a href="#where">Where</a>
              </p>
            </li>
            <li>
              <p>
                <a href="#contact">Contact</a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
