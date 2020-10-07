import React from "react";

const Hamburger = (props) => {
  return (
    <button
      type="button"
      className="navbar__button"
      onClick={props.onHamburgerClickHandler}
    >
      <ul className="navbar__burger">
        <li className="navbar__line"></li>
        <li className="navbar__line"></li>
        <li className="navbar__line"></li>
      </ul>
    </button>
  );
};

export default Hamburger;
