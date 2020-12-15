import React from "react";
// import pinupRecline from "../assets/pinupRecline.png";
// import bubble from "../assets/bubble.png";
import lady from "../assets/lady.jpg";
import Info from "./Info";

const Welcome = () => {
  return (
    <section className="welcome" id="who">
      <div className="welcome__wrapper">
        <div className="welcome__container">
          <div className="welcome__imageContainer">
            <img className="welcome__image" src={lady} alt="Pin-up girl" />
          </div>
          {/* <div className="welcome__imagesContainer">
            <div className="welcome__imageContainer--pinup">
              <img src={pinupRecline} alt="Pin-up girl" />
            </div>
            <div className="welcome__imageContainer--bubble">
              <img src={bubble} alt="Pin-up girl" />
              <p className="welcome__slogan">Add a touch of nostalgia!</p>
            </div>
          </div> */}
          <Info />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
