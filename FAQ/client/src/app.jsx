import Welcome from "./components/c1.jsx";
import ReactDOM from "react-dom";
import React from "react";
class App extends React.Component {
  render() {
    return <Welcome />;
  }
}
ReactDOM.render(<App />, document.getElementById("faq"));
