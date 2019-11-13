import React from "react";
class OtherRewards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="otherRewards">
        <div>
          <p style={{ fontSize: "12px" }}>Pledge $20 or more</p>
        </div>
        <div>
          <p
            style={{
              color: "#606361",
              fontSize: "10px"
            }}
          >
            One GoSun Flatware Set
          </p>
        </div>
        <div>
          <p style={{ color: "#606361", fontSize: "8px" }}>
            Save 49% off Retail Price Free Shipping AnyWhere in the world!!!
          </p>
        </div>
        <div>
          <p style={{ fontSize: "8px" }}>INCLUDES:</p>
        </div>
        <div className="gifts">
          <ul>
            <li>Reusable Spoon</li>
            <li>Reusable Spoon</li>
            <li>Reusable Spoon</li>
            <li>6x Awareness Cards</li>
          </ul>
        </div>

        <p className="delInfo">ESTIMATED DELIVERY</p>
        <p>SHIPS TO</p>
      </div>
    );
  }
}
export default OtherRewards;
