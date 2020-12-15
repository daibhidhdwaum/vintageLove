import React from "react";

import Card from "./Card";
import images from "../data/images";

const Gallery = () => {
  return (
    <section className="gallery" id="what">
      <div className="gallery__wrapper">
        <div className="gallery__content">
          <h2 className="gallery__title visually__hidden">What</h2>
          <div className="gallery__grid">
            <Card image={images} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
