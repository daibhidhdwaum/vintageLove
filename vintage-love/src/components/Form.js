// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.
import React, { Component } from "react";
import Button from "./Button";

class Form extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/xzbkjjjv"
        method="POST"
      >
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
              />
            </div>

            {status === "SUCCESS" ? (
              <p className="form__message">Thanks!</p>
            ) : (
              <Button className="form__button" />
            )}
            {status === "ERROR" && (
              <p className="form__message">Ooops! There was an error.</p>
            )}
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
