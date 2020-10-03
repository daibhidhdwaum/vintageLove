import React, { useState } from "react";
import Button from "./Button";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
  };

  return (
    <form className="form">
      <div className="form__container">
        <div className="form__contentContainer">
          <div className="form__nameContainer">
            <label htmlFor="name" className="form__label">
              name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="form__input form--name"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form__emailContainer">
            <label htmlFor="email" className="form__label">
              email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="form__input form--input"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form__messageContainer">
            <label htmlFor="message" className="form__label">
              message
            </label>
            <textarea
              type="text"
              name="message"
              id="message"
              className="form__textarea"
              placeholder="talk to me"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <Button onSubmit={(e) => onSubmit()} className="form__button" />
        </div>
      </div>
    </form>
  );
};

export default Form;
