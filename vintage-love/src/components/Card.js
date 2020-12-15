import React from "react";

const Card = (props) => {
  const product = props.image.map((prod, i) => {
    return (
      <div className="card" key={prod.id}>
        <div className="card__imageContainer">
          <img src={prod.src} alt={prod.title} />
        </div>
        {/* content overlay container */}
        <div className="card__hoveredLayout">
          <a
            className="card__link"
            href={prod.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card__infoContainer">
              <div className="card__info">
                <h3 className="card__title">{prod.title}</h3>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  });

  return <>{product}</>;
};

export default Card;
