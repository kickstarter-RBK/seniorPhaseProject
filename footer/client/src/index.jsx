import React from "react";
import ReactDOM from "react-dom";
import Explore from "./components/component1.jsx";
import Table from "./components/component2.jsx";
import Copyright from "./components/component3.jsx";
import Policy from "./components/component4.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
}

  render() {
    return (
      <div>
        <Explore />
        <hr></hr>
        <Table />
        <br/>
        <br/>
        <br/>
        <br/>
        <Copyright />
        <hr></hr>
        <Policy />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("footer"));

