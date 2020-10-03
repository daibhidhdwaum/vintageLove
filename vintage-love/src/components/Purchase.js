import React from "react";
import Stores from "./Stores";

const Purchase = () => {
  return (
    <section className="purchase">
      <div className="purchase__container">
        <p className="purchase__title">Where</p>
        <div className="purchase__etsy">
          <p>VintageLove is available online at:-</p>
          <p className="purchase__link">
            <a href="https://www.etsy.com/ca/shop/vintagelovely">
              vintagelovely
            </a>
          </p>
        </div>
        <Stores />
      </div>
    </section>
  );
};

export default Purchase;
