import React from "react";
class Support extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h3 className="support">Support</h3>
          <div className="pledge__info">
            <div>
              <h2
                style={{ fontSize: "12px", fontWeight: "100" }}
                className="pledge__amount"
              >
                Make a pledge without a reward
              </h2>
            </div>
            <form>
              <input
                className="Input"
                type="text"
                defaultValue="$"
                style={{ textAlign: "center", width: "15px" }}
              ></input>
              <input
                className="Input"
                type="text"
                placeholder="Pledge any amount"
              ></input>
              {/* <div>
                <button className="cont" style={{ color: "white" }}>
                  Continue
                </button>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Support;
