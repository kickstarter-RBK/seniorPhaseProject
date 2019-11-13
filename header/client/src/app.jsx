import React from "react";
import ReactDOM from "react-dom";
import Headerbar from "./components/headerbar.jsx"
import VideoSection from "./components/videoSection.jsx"
import Info from "./components/info.jsx"
var App = () => (
  <div>
    <Headerbar/>
    <div id="title">
      <h2>GoSun Flatware: Portable Utensils to End Single-Use Plastic</h2>
      <p>
        Reusable utensils that fit in your wallet, purse or pocket.</p>
        </div>
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
