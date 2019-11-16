import React from "react";
class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="navBar">
        <hr />
        <ul id="cul">
          <li className="cli">
            <a className="ca" href="">
              Campaign
            </a>
          </li>
          <li className="cli">
            <a className="ca" href="">
              FAQ
            </a>
          </li>
          <li className="cli">
            <a className="ca" href="">
              {" "}
              Updates
            </a>
          </li>
          <li className="cli">
            <a className="ca" href="">
              Comments
            </a>
          </li>
          <li className="cli">
            <a className="ca" href="">
              Community
            </a>
          </li>
        </ul>
        <hr />
      </div>
    );
  }
}
export default NavBar;
