import React from "react";
import ReactDOM from "react-dom";
import Headerbar from "./components/headerbar.jsx"
import VideoSection from "./components/videoSection.jsx"
import Info from "./components/info.jsx"
var App = () => (
  <div>
    <Headerbar/>
    <hr/>
    <div id="title">
      <h2>GoSun Flatware: Portable Utensils to End Single-Use Plastic</h2>
      <h5>
        Reusable utensils that fit in your wallet, purse or pocket.</h5>
        </div>
        <br/>
    {/* 
    <table >
  <tr> */}
    
    <VideoSection/>
   <Info/>
  {/* </tr>
</table> */}
    
    
  </div>
);
ReactDOM.render(<App />, document.getElementById("header"));
