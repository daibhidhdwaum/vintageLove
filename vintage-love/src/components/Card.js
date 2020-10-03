import React, { useState } from "react";

const Card = (props) => {
  const [hover, setHover] = useState(false);

  const product = props.image.map((prod, i) => {
    // const [hover, setHover] = useState(false);
    const handleMouseEnter = (e) => {
      setHover(true);
    };

    const handleMouseLeave = () => {
      setHover(false);
    };

    return (
      <div className="card" key={prod.id}>
        <div
          className="card__imageContainer"
          onMouseEnter={(i) => handleMouseEnter(i)}
          onMouseOut={handleMouseLeave}
        >
          <img src={prod.src} alt={prod.title} />
        </div>
        <div
          className={`card__hoveredDisplayLayout ${
            hover ? "" : "card__isDisplayed"
          }`}
        >
          <div className="card__infoContainer">
            <div className="card__info">
              <h3 className="card__title">{prod.title}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return product;
};

export default Card;
