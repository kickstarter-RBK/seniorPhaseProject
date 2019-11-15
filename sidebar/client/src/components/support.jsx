import React from "react";
class Support extends React.Component {
  render() {
    return (
      <div style={{ height: "220px" }}>
        <h3 className="support">Support</h3>
        <div className="pledge__info">
          <div>
            <h2 className="pledge__amount">Make a pledge without a reward</h2>
          </div>
          <form>
            <input
              className="Input"
              type="text"
              defaultValue="$"
              style={{ textAlign: "center", width: "50px", height: "40px" }}
            ></input>
            <input
              className="Input"
              type="text"
              placeholder="Pledge any amount"
              style={{ height: "40px" }}
            ></input>
          </form>
        </div>
      </div>
    );
  }
}
export default Support;
