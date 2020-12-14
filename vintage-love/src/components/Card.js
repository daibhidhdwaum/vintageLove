import React, { useState, useRef } from "react";
import Modal from "react-modal";

const Card = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [imageId, setImageId] = useState(null);

  // const onClickHandler = (e) => {
  // setModalIsOpen(true);
  // setImageId()
  // };

  const product = props.image.map((prod, i) => {
    return (
      <div className="card" key={prod.id}>
        {/* remember to add onClickHandler above when modal is complete */}
        {/* image container */}
        <div className="card__imageContainer">
          <img src={prod.src} alt={prod.title} />
        </div>
        {/* content overlay container */}
        <div className="card__hoveredLayout">
          <a
            class="card__link"
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

  return (
    <>
      {product}
      <Modal
        isOpen={modalIsOpen}
        overlayClassName="modal"
        className="modal__content"
        onRequestClose={() => setModalIsOpen(false)}
      >
        <div className="modal__closeContainer">
          <button
            className="modal__close"
            onClick={() => {
              setModalIsOpen(false);
            }}
          >
            <span>x</span>
          </button>
        </div>
        <div className="modal__imageContainer">
          <img src={props.image[0].src} alt={props.image[0].title} />
        </div>
        <div className="modal__writtenContent">
          <h2>{props.image[0].title}</h2>
          <p>{props.image[0].description}</p>
        </div>
      </Modal>
    </>
  );
};

export default Card;
