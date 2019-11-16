import About from "./components/campaign.jsx";
import NavBar from "./components/navPar.jsx";
import ReactDOM from "react-dom";
import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <About />
        {/* <NavBar /> */}
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("campaign"));
