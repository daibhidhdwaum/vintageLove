import React, { Component, Fragment } from "react";
import "./App.scss";
// import pinup from "./assets/lady.jpg";
import logo from "./assets/logo.jpg";
import pinupRecline from "./assets/ladyRecline.jpg";
import bike from "./assets/products/bike.jpg";

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
          <li className="navbar__line"></li>
          <li className="navbar__line"></li>
          <li className="navbar__line"></li>
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

const Card = (props) => {
  console.log(props.src);
  const product = props.image.map((prod) => {
    return (
      <div className="card" key={prod.id}>
        <div className="card__imageContainer">
          <img src={prod.src} alt={prod.title} />
        </div>
        <div className="card__hover">
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

class Gallery extends Component {
  state = {
    images: [
      {
        id: 1,
        title: "bike",
        price: 50,
        src: "./images/bike.jpg",
        description: "Biodiesel truffaut hell of XOXO readymade bicycle rights",
      },
      {
        id: 2,
        title: "bike",
        price: 50,
        src: "./images/bike.jpg",
        description: "Biodiesel truffaut hell of XOXO readymade bicycle rights",
      },
      {
        id: 3,
        title: "bike",
        price: 50,
        src: "images/bike.jpg",
        description: "Biodiesel truffaut hell of XOXO readymade bicycle rights",
      },
      {
        id: 4,
        title: "bike",
        price: 50,
        src: "images/bike.jpg",
        description: "Biodiesel truffaut hell of XOXO readymade bicycle rights",
      },
      {
        id: 5,
        title: "bike",
        price: 50,
        src: "images/bike.jpg",
        description: "Biodiesel truffaut hell of XOXO readymade bicycle rights",
      },
      {
        id: 6,
        title: "bike",
        price: 50,
        src: "images/bike.jpg",
        description: "Biodiesel truffaut hell of XOXO readymade bicycle rights",
      },
      {
        id: 7,
        title: "bike",
        price: 50,
        src: "images/bike.jpg",
        description: "Biodiesel truffaut hell of XOXO readymade bicycle rights",
      },
      {
        id: 8,
        title: "bike",
        price: 50,
        src: "images/bike.jpg",
        description: "Biodiesel truffaut hell of XOXO readymade bicycle rights",
      },
      {
        id: 9,
        title: "bike",
        price: 50,
        src: "images/bike.jpg",
        description: "Biodiesel truffaut hell of XOXO readymade bicycle rights",
      },
      {
        id: 10,
        title: "bike",
        price: 50,
        src: "images/bike.jpg",
        description: "Biodiesel truffaut hell of XOXO readymade bicycle rights",
      },
      {
        id: 11,
        title: "bike",
        price: 50,
        src: "images/bike.jpg",
        description: "Biodiesel truffaut hell of XOXO readymade bicycle rights",
      },
      {
        id: 12,
        title: "bike",
        price: 50,
        src: "images/bike.jpg",
        description: "Biodiesel truffaut hell of XOXO readymade bicycle rights",
      },
    ],
  };

  render() {
    return (
      <section className="gallery">
        <div className="gallery__wrapper">
          <div className="gallery__content">
            <h2 className="gallery__title">Products</h2>
            <div className="gallery__grid">
              <Card image={this.state.images} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

class Stores extends Component {
  render() {
    return (
      <div className="store">
        <div className="store__info">
          <a href="https://www.blackstarstudios.ca/">
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
          <a href="https://www.etsy.com/ca/shop/vintagelovely">
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
        <div className="footer__wrapper">
          <ul className="footer__social">
            <li>
              <a href="https://www.etsy.com/ca/shop/vintagelovely">
                <i className="fab fa-etsy"></i>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/vintagelove.ca/?__xts__[%2Ffacebook]">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/vintagelove.ca/?hl=en">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
          <hr />
          <div className="footer__ownership">
            <p className="footer__copy">
              copyright &copy; Adrianne Kulling 2020
            </p>
            <p className="footer__built">
              Site build by <a href="http://davidjdownie.ca/">David Downie</a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

class App extends Component {
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
