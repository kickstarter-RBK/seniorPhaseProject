import $ from "jquery";
import About from "./components/campaign.jsx";
import ReactDOM from "react-dom";
import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <About />;
  }
}
ReactDOM.render(<App />, document.getElementById("campaign"));
