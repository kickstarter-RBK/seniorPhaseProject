import React from "react";
class Reward extends React.Component {
  render() {
    return (
      <div>
        <br />
        <div className="selReward">
          <div>
            <p style={{ fontSize: "18px" }}>Pledge $1 or more</p>
          </div>
          <div>
            <p style={{ color: "#606361", fontSize: "16px" }}>
              Show that you give a fork
            </p>
          </div>

          <p style={{ color: "#606361", fontSize: "14px" }}>
            Thanks for noticing this lastic problem and supporting GoSun's
            efforts to UnFork The World
          </p>
          <br />
          <p style={{ fontSize: "12px", color: "#606361" }}>
            ESTIMATED DELIVERY
          </p>
          <p style={{ fontSize: "12px" }}>Feb 2020</p>
          <p style={{ fontSize: "12px", color: "#606361" }}>27 backers</p>
        </div>
      </div>
    );
  }
}
export default Reward;
