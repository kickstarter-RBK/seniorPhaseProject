import React from "react";
class Reward extends React.Component {
  render() {
    return (
      <div>
        <br />
        <div data-text={"Select this reward"} className="selReward">
          <div>
            <p style={{ fontSize: "12px" }}>Pledge $1 or more</p>
          </div>
          <div>
            <p style={{ color: "#606361", fontSize: "10px" }}>
              Show that you give a fork
            </p>
          </div>

          <p style={{ color: "#606361" }}>
            Thanks for noticing this lastic problem and supporting GoSun's
            efforts to UnFork The World
          </p>
          <br />
          <p style={{ fontSize: "7px", color: "#606361" }}>
            Estimated DELIVERY
          </p>
          <p>Feb 2020</p>
          <p style={{ color: "#606361" }}>27 backers</p>
        </div>
      </div>
    );
  }
}
export default Reward;
