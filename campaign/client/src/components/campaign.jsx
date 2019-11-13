import $ from "jquery";
import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectData: []
    };

    var that = this;
    $.ajax({
      type: "GET",
      url: "/items",
      success: function(collection) {
        that.setState({
          projectData: collection
        });
        console.log(collection);
      },
      error: function(request, status, error) {
        console.log(error);
      }
    });
  }

  render() {
    console.log(this.state.projectData);
    if (this.state.projectData.length) {
      return (
        <div id="main">
          <h3>About</h3>
          <div>
            <img src={this.props.data.projImg1} />
            <br>{this.props.data.projDescription1}</br>
            <img src={this.props.data.projImg2} />
            <img src={this.props.data.projImg20} />
            <br>{this.props.data.projDescription2}</br>
            <img src={this.props.data.projImg3} />
            <img src={this.props.data.projImg30} />
            <img src={this.props.data.projImg31} />
            <img src={this.props.data.projImg32} />
            <br>{this.props.data.projDescription3}</br>
            <img src={this.props.data.projImg4} />
            <br>{this.props.data.projDescription4}</br>
            <img src={this.props.data.projImg5} />
            <img src={this.props.data.projImg50} />
            <img src={this.props.data.projImg51} />
            <img src={this.props.data.projImg52} />
            <img src={this.props.data.projImg53} />
            <br>{this.props.data.projDescription5}</br>
            <br>{this.props.data.projDescription50}</br>
            <img src={this.props.data.projImg6} />
            <img src={this.props.data.projImg60} />
            <br>{this.props.data.projDescription6}</br>
            <br>{this.props.data.projDescription60}</br>
            <br>{this.props.data.projDescription61}</br>
            <br>{this.props.data.projDescription62}</br>
            <br>{this.props.data.projDescription63}</br>
            <img src={this.props.data.projImg7} />
          </div>
          ))
        </div>
      );
    } else null;
  }
}

export default About;
