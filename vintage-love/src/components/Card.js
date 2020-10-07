import React, { useState, useRef } from "react";

const Card = (props) => {
  const [hover, setHover] = useState(false);

  const ref = useRef();
  const handleMouseEnter = (e, id) => {
    console.log(e.target.id);
    e.target = setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const product = props.image.map((prod, i) => {
    return (
      <div className="card" key={prod.id}>
        <div className="card__imageContainer">
          <img
            src={prod.src}
            alt={prod.title}
            id={i}
            ref={ref}
            onMouseEnter={handleMouseEnter}
            onMouseOut={handleMouseLeave}
          />
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
