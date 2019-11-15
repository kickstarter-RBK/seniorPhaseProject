import React from "react";
class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <TabNav aria-label="Main">
          <TabNav.Link href="#campaign" selected>
            Campaign
          </TabNav.Link>
          <TabNav.Link href="#faq">FAQ</TabNav.Link>
          <TabNav.Link href="#updates">Updates</TabNav.Link>
          <TabNav.Link href="#comments">Comments</TabNav.Link>
          <TabNav.Link href="#community">Community</TabNav.Link>
        </TabNav>
      </div>
    );
  }
}
export default NavBar;
