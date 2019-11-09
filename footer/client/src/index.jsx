import React from "react";
import ReactDOM from "react-dom";
import Component1 from "./components/Component1.jsx" 



class App extends React.Component {
  constructor(props) {
    super(props);
}

  render() {
    return (
      <div>
        <h1>Footer</h1>
        <Component1 />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("footer"));