import React, { Component, Fragment } from "react";
import "./App.scss";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Navbar />
        <Welcome />
        <Gallery />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
