import React from "react";
import Stores from "./Stores";

const Purchase = () => {
  return (
    <section className="purchase" id="where">
      <div className="purchase__container">
        <p className="purchase__title">Where to find vintagelove</p>
        <div className="purchase__etsy">
          <p>
            online:{" "}
            <span>
              <a href="https://www.etsy.com/ca/shop/vintagelovely">
                vintagelovely
              </a>
            </span>
          </p>
          <p className="purchase__link"></p>
        </div>
        <Stores />
      </div>
    </section>
  );
};

export default Purchase;
