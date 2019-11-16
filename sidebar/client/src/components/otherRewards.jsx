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
          <h2 style={{ fontSize: "18px", fontWeight: "400" }}>
            Pledge
            <span> $20</span>
            or more
          </h2>
        </div>
        <div>
          <h3
            style={{
              color: "#606361",
              fontSize: "16px",
              fontWeight: 300
            }}
          >
            One GoSun Flatware Set
          </h3>
        </div>
        <div>
          <p style={{ color: "#606361", fontSize: "16px", fontWeight: "300" }}>
            Save 49% off Retail Price
            <br />
            Free Shipping AnyWhere in the world!!
          </p>
        </div>
        <div>
          <p style={{ fontSize: "10px" }}>INCLUDES:</p>
        </div>
        <div className="gifts">
          <ul className="giftList">
            <li>Reusable Fork</li>
            <li>Protective Fork</li>
            <li>Protective Case</li>
            <li>6x Awareness Cards</li>
          </ul>
        </div>
        <div>
          <table>
            <tr className="firstRow">
              <th>ESTIMATED DELIVERY</th>
              <th>SHIPS TO</th>
            </tr>
            <tr className="secondRow">
              <td>Feb 2020</td>
              <td>Anywhere in the world</td>
            </tr>
          </table>
        </div>
        <br />
        <br />
        <div>
          <span style={{ color: "red", fontSize: "12px" }}>
            Limited (73 left of 2100)
          </span>
          <br />
          <span style={{ color: "#606361", fontSize: "10px" }}>
            2,027 backers
          </span>
        </div>
      </div>
    );
  }
}
export default OtherRewards;
