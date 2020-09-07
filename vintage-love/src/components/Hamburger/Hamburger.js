import React from "react";

const Hamburger = (props) => {
  console.log(props);
  return (
    <button type="button">
      <ul className="navbar__burger">
        <li class="navbar__line"></li>
        <li class="navbar__line"></li>
        <li class="navbar__line"></li>
      </ul>
    </button>
  );
};

export default Hamburger;
