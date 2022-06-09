import logo from "./bl-logo.svg";
import React from "react";
import "./App.css";
class App extends React.Component {
  url = "http://www.bridgelabz.com/";
  constructor() {
    super();
    this.state = {
      userName: "",
    };
  }

  //onClick Function
  onClick = ($event) => {
    console.log("Save button is clicked !", $event);
    window.open(this.url, "_blank");
  };
  onNameChange = (event) => {
    console.log("value is", event.target.value);
    this.setState({ userName: event.target.value });
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
        </div>
      </>
    );
  }
}
export default App;
