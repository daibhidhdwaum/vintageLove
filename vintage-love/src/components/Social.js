import React from "react";

const Social = () => {
  return (
    <ul className="social">
      <li>
        <a
          href="https://www.etsy.com/ca/shop/vintagelovely"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-etsy"></i>
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/vintagelove.ca/?__xts__[%2Ffacebook]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/vintagelove.ca/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </li>
    </ul>
  );
};

export default Social;
