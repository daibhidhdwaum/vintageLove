import React, { useState } from "react";
import { useEffect } from "react";

import axios from "axios";

import Card from "./Card";
import Modal from "./Modal";

const Gallery = () => {
  const [images, setImages] = useState([
    {
      id: 1,
      title: "Bike",
      price: 50,
      src: `assets/bike.png`,
      description: "Biodiesel truffaut hell of XOXO readymade bicycle rights",
    },
    {
      id: 2,
      title: "'59 Ford Galaxie",
      price: 50,
      src: "assets/fordGalaxie.png",
      description: "Biodiesel truffaut hell of XOXO readymade bicycle rights",
    },
    {
      id: 3,
      title: "Caught (lady in shower)",
      price: 50,
      src: "assets/caught.png",
      description: "Biodiesel truffaut hell of XOXO readymade bicycle rights",
    },
    {
      id: 4,
      title: "Sailors",
      price: 50,
      src: "assets/sailors.png",
      description: "Biodiesel truffaut hell of XOXO readymade bicycle rights",
    },
    {
      id: 5,
      title: "bike",
      price: 50,
      src: "assets/ladyLips.png",
      description: "Biodiesel truffaut hell of XOXO readymade bicycle rights",
    },
    {
      id: 6,
      title: "Bust Ad",
      price: 50,
      src: "assets/bustAd.png",
      description: "Biodiesel truffaut hell of XOXO readymade bicycle rights",
    },
    {
      id: 7,
      title: "Kitchen",
      price: 50,
      src: "assets/kitchen.png",
      description: "Biodiesel truffaut hell of XOXO readymade bicycle rights",
    },
    {
      id: 8,
      title: "Home Sweet Home",
      price: 50,
      src: "assets/homeSweetHome.png",
      description: "Biodiesel truffaut hell of XOXO readymade bicycle rights",
    },
    {
      id: 9,
      title: "Pinned Up",
      price: 50,
      src: "assets/pinnedUp.png",
      description: "Biodiesel truffaut hell of XOXO readymade bicycle rights",
    },
    {
      id: 10,
      title: "Blue Swimsuit",
      price: 50,
      src: "assets/swimsuit.png",
      description: "Biodiesel truffaut hell of XOXO readymade bicycle rights",
    },
    {
      id: 11,
      title: "Cool",
      price: 50,
      src: "assets/cool.png",
      description: "Biodiesel truffaut hell of XOXO readymade bicycle rights",
    },
    {
      id: 12,
      title: "Make it Gay",
      price: 50,
      src: "assets/makeItGay.png",
      description: "Biodiesel truffaut hell of XOXO readymade bicycle rights",
    },
  ]);

  // const [productInfo, setProductInfo] = useState([]);

  // useEffect(() => {
  //   const returnedProductInfo = async () => {
  //     await axios.get(
  //       "https://openapi.etsy.com/v2/users/vintagelovely?api_key={}",
  //       {
  //         params: {},
  //       }
  //     );
  //   };
  //   console.log(returnedProductInfo());
  // }, []);

  return (
    <section className="gallery">
      <div className="gallery__wrapper">
        <div className="gallery__content">
          {/* <h2 className="gallery__title">Products</h2> */}
          <Modal image={images} />
          <div className="gallery__grid">
            <Card image={images} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
