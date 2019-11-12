import About from "./components/campaign.jsx";
import ReactDOM from "react-dom";
import React from "react";
class App extends React.Component {
  render() {
    return <About />;
  }
}
ReactDOM.render(<App />, document.getElementById("campaign"));
