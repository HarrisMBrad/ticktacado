/**
 * src/components/board.jsx
 */
import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageFound from "./PageFound";
// import Storage object
import { Storage } from "./../storage/storage";

// const { JSDOM } = require("jsdom");
// const { window } = new JSDOM("");
// const $ = require("jquery")(window);

// Create Board component
export class Board extends React.Component {
  constructor(props) {
    super(props);

    // Initialize component state
    this.state = {
      boxes: Array(81).fill(null),
      history: [],
      xIsNext: true,
    };
  }

  // Create instance of Storage object
  storage = new Storage();

  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Route exact path="/home" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route component={PageFound} />
      </div>
    );
  }
}
