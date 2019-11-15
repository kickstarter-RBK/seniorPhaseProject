import React from "react";
class Introduction extends React.Component {
  render() {
    return (
      <div className="contatiner">
        <div>
          <button className="logo">
            <img
              className="logo"
              src={
                "http://www.pmlngroup.com/wp-content/uploads/2017/11/Patrick-Sherwin.jpg"
              }
              alt="Patrick Sherwin"
            ></img>
          </button>
        </div>
        <button className="ownerInfo">
          <div className="title">Patrick Sherwin</div>
          <div className="par">
            5 created<span>.</span>34 backed
          </div>
          <div className="pa">
            Patrick is passionate about having fun, yet remains focused on
            solutions for our time. Since 2000, Patrick’s work with green
            building and...<span style={{ color: "#007460" }}>see more</span>
          </div>
        </button>
      </div>
    );
  }
}
export default Introduction;
