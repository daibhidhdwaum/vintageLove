import React, { Component, Fragment } from "react";
import "./App.scss";
import pinup from "./assets/lady.jpg";
import logo from "./assets/logo.jpg";
import pinupRecline from "./assets/ladyRecline.jpg";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__logoContainer">
          <img src={logo} alt="Vintage Love Logo" />
        </div>
      </header>
    );
  }
}

class Hamburger extends Component {
  render() {
    return (
      <button type="button">
        <ul className="navbar__burger">
          <li class="navbar__line"></li>
          <li class="navbar__line"></li>
          <li class="navbar__line"></li>
        </ul>
      </button>
    );
  }
}

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar__wrapper">
          <div className="navbar__container">
            <div className="navbar__vlInfo">
              <h1>Vintagelove</h1>
            </div>
            <Hamburger />
            <ul className="navbar__nav">
              <li>
                <p>
                  <a href="#who">Who</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="#what">What</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="#where">Where</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="#contact">Contact</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

class Welcome extends Component {
  render() {
    return (
      <section className="welome">
        <h2>Who</h2>
        <div className="welcome__imageContainer">
          <img src={pinupRecline} alt="Pin-up girl" />
        </div>
      </section>
    );
  }
}

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card__imageContainer">
          <img src="" alt="switchplate" />
          <div class="galleryHover">
            <div class="imageInfoContainer">
              <div class="imageInfo">
                <h3>switchplate name</h3>
                <p>switchplate description</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Gallery extends Component {
  render() {
    return (
      <section className="gallery">
        <h2>Products</h2>
        <Card />
      </section>
    );
  }
}

class Stores extends Component {
  render() {
    return (
      <div className="store">
        <div className="store__info">
          <a href="">
            <p>Black Star Studios</p>
          </a>
          <p>Invermere</p>
          <p>British Columbia</p>
          <p>1021 7th Avenue</p>
        </div>
      </div>
    );
  }
}

class Purchase extends Component {
  render() {
    return (
      <section className="purchase">
        <div className="purchase__wrapper">
          <h2 className="purchase__title">Where</h2>
        </div>
        <div className="purchase__etsy">
          <a href="">
            <p>Etsy</p>
          </a>
        </div>
        <Stores />
      </section>
    );
  }
}

class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" />
        <label htmlFor="message">message</label>
        <textarea type="text" name="message" id="message" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

class Contact extends Component {
  render() {
    return (
      <section className="contact">
        <h2>Contact</h2>
        <Form />
      </section>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__ownership">
          <p className="footer__copy">copyright &copy; Adrianne Kulling 2020</p>
          <p className="footer__built">
            Site build by <a href="http://davidjdownie.ca/">David Downie</a>
          </p>
        </div>
      </footer>
    );
  }
}

class App extends Component {
  clickHandler() {
    console.log("hello");
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Navbar />
        <Welcome />
        <Gallery />
        <Purchase />
        <Contact />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
