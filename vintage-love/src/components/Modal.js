import React from "react";

const Modal = (props) => {
  console.log(props);
  return (
    <div className="modal">
      <div className="modal__closeContainer">
        <span className="modal__close">x</span>
      </div>
      <div className="modal__content">
        <div className="modal__imageContainer">
          <img src={props.image[0].src} alt={props.image[0].title} />
        </div>
        <div className="modal__writtenContent">
          <h4>{props.image[0].title}</h4>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <p className="modal__price">$50</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
