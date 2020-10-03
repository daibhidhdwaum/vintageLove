import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__background">
        <div className="header__logoContainer">
          <img src={logo} alt="Vintage Love Logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
