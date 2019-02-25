import React, { Component } from "react";
import logo from "./logo.svg";
import Axios from "axios";
import "./App.css";

class App extends Component {
  getQuote = () => {
    Axios.get("/quote")
      .then(response => {
        console.log(response);
        this.setState({
          quoteText: response.data.quoteText,
          quoteAuthor: response.data.quoteAuthor
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  state = {
    quoteText: "",
    quoteAuthor: ""
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <br />
          <p>{this.state.quoteText}</p>
          <p>{this.state.quoteAuthor}</p>
          <br />
          <button onClick={this.getQuote}>Get Inspirational Quote.</button>
        </header>
      </div>
    );
  }
}

export default App;
