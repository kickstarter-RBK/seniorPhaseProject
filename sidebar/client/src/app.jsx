import ReactDOM from "react-dom";
import React from "react";
import Introduction from "./components/introduction.jsx";
import Support from "./components/support.jsx";
import Reward from "./components/reward.jsx";
import OtherRewards from "./components/otherRewards.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Introduction />
        <Support />
        <Reward />
        <br />
        <OtherRewards />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("sidebar"));
