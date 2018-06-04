import React, { Component } from "react";
import logo from "./logo.svg";
import Navbar from "./layout/navbar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

export default App;
