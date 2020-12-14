import React, { Component, Fragment } from "react";
import Modal from "react-modal";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

import "./App.scss";

Modal.setAppElement("#root");

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
