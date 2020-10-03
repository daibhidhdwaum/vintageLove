import React from "react";
import Contact from "./Contact";
import Purchase from "./Purchase";
import Social from "./Social";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__main">
          <div className="footer__info">
            <Purchase />
            <Social />
          </div>
          <div className="footer__contact">
            <Contact />
          </div>
        </div>
        <hr />
        <div className="footer__ownership">
          <p className="footer__copy">copyright &copy; Adrianne Kulling 2020</p>
          <p className="footer__built">
            Site build by <a href="http://davidjdownie.ca/">David Downie</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
