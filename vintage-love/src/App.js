import React, { Fragment } from "react";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

import "./App.scss";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Navbar />
      <Welcome />
      <Gallery />
      <Footer />
    </Fragment>
  );
};

export default App;
