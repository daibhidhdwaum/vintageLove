import React, { useState } from "react";
import Hamburger from "./Hamburger";
import logo from "../assets/logo.png";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [hamburgerClicked, setHamburgerClicked] = useState(false);

  const onHamburgerClickHandler = () => {
    hamburgerClicked === false
      ? setHamburgerClicked(true)
      : setHamburgerClicked(false);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
    setHamburgerClicked(false);
  };

  const onLinkClick = (e) => {
    console.log(e.target);
    setHamburgerClicked(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar__blanket">
        <div className="navbar__wrapper">
          <div className="navbar__container">
            <div className="navbar__vlInfo">
              <h1 className="visually__hidden">vintagelove</h1>
              <img src={logo} alt="Vintage Love Logo" onClick={scrollToTop} />
            </div>
            <Hamburger onHamburgerClickHandler={onHamburgerClickHandler} />
            <ul
              className={`navbar__nav ${
                hamburgerClicked === false
                  ? "navbar__navHidden"
                  : "navbar__navVisible"
              }`}
            >
              <li>
                <p>
                  <Link
                    to="who"
                    smooth={true}
                    duration={700}
                    className="navbar__link"
                    offset={-50}
                    onClick={(e) => onLinkClick(e)}
                  >
                    Who
                  </Link>
                </p>
              </li>
              <li>
                <p>
                  <Link
                    to="what"
                    smooth={true}
                    duration={700}
                    className="navbar__link"
                    offset={-50}
                    onClick={onLinkClick}
                  >
                    What
                  </Link>
                </p>
              </li>
              <li>
                <p>
                  <Link
                    to="where"
                    smooth={true}
                    duration={700}
                    className="navbar__link"
                    offset={-70}
                    onClick={onLinkClick}
                  >
                    Where
                  </Link>
                </p>
              </li>
              <li>
                <p>
                  <Link
                    to="contact"
                    smooth={true}
                    duration={700}
                    className="navbar__link"
                    offset={-50}
                    onClick={onLinkClick}
                  >
                    Contact
                  </Link>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
