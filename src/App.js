import logo from "./bl-logo.svg";
import React from "react";
import "./App.css";
class App extends React.Component {
  url = "http://www.bridgelabz.com/";
  constructor() {
    super();
    this.state = {
      userName: "",
      nameError: "",
    };
  }

  //onClick Function
  onClick = ($event) => {
    console.log("Save button is clicked !", $event);
    window.open(this.url, "_blank");
  };
  onNameChange = (event) => {
    console.log("value is", event.target.value);
    const nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
    this.setState({ userName: event.target.value });
    if (nameRegex.test(event.target.value)) {
      this.setState({ nameError: "" });
    } else this.setState({ nameError: "Incorrect name" });
  };
  render() {
    return (
      <>
        <div className="App">
          <h1>Hello {this.state.userName} From Bridgelabz</h1>
          <img
            src={logo}
            onClick={this.onClick}
            className="App-logo"
            alt="logo"
          />
        </div>
        <div className="App">
          <br />
          <input onChange={this.onNameChange} />
          <span className="error-output">{this.state.nameError}</span>
        </div>
      </>
    );
  }
}

export default App;
