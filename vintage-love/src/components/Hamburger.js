import React from "react";

const Hamburger = () => {
  return (
    <button type="button" className="navbar__button">
      <ul className="navbar__burger">
        <li className="navbar__line"></li>
        <li className="navbar__line"></li>
        <li className="navbar__line"></li>
      </ul>
    </button>
  );
};

export default Hamburger;
