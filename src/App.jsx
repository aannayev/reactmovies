import logo from "./logo.svg";
import "./App.scss";
import { useState } from "react";
import LanguageSwitch from "./LanguageSwitch";
import { Preloader } from "./Preloader";
import React, { Component, Suspense } from "react";
import { useTranslation, withTranslation, Trans } from "react-i18next";

class App extends React.Component {
  state = {
    count: 0,
    isCounting: false,
  };

  // componentDidMount() {
  //   console.log("Did Mount");
  //   fetch("http://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((data) => this.setState({ posts: data, loading: false }));
  // }

  componentDidMount() {
    const useCount = localStorage.getItem("timer");
    if (useCount) {
      this.setState({ count: +useCount });
    }
  }

  componentDidUpdate() {
    localStorage.setItem("timer", this.state.count);
  }

  componentWillUnmount() {
    clearInterval(this.counterId);
  }

  handlerStart = () => {
    this.setState({ isCounting: true });
    this.counterId = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  };

  handleStop = () => {
    this.setState({ isCounting: false });
    clearInterval(this.counterId);
  };

  handleReset = () => {
    this.setState({ isCounting: false, count: 0 });
    clearInterval(this.counterId);
  };
  render() {
    console.log("render", this.state.count);
    return (
      <div className="App">
        <h1>React Timer</h1>
        <h3>{this.state.count}</h3>
        {!this.state.isCounting ? (
          <button onClick={this.handlerStart}>Start</button>
        ) : (
          <button onClick={this.handleStop}>Stop</button>
        )}

        <button onClick={this.handleReset}>Reset </button>
      </div>
    );
  }
}

export default App;
