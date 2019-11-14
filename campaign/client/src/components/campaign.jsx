import $ from "jquery";
import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectData: {}
    };
  }
  retreivData() {
    var that = this;
    $.ajax({
      type: "GET",
      url: "/items",
      success: function(collection) {
        console.log(collection);
        that.setState({
          projectData: collection[0]
        });
      },
      error: function(request, status, error) {
        console.log(error);
      }
    });
  }
  componentDidMount() {
    this.retreivData();
  }
  render() {
    console.log(this.state.projectData);
    return (
      <div className="main">
        <h3 className="about">About</h3>
        <div>
          <img id="cimg" src={this.state.projectData.projImg1} />
          <p id="cp">{this.state.projectData.projDescription1}</p>
          <img id="cimg" src={this.state.projectData.projImg2} />
          <img id="cimg" src={this.state.projectData.projImg20} />
          <p id="cp">{this.state.projectData.projDescription2}</p>
          <img id="cimg" src={this.state.projectData.projImg3} />
          <img id="cimg" src={this.state.projectData.projImg30} />
          <img id="cimg" src={this.state.projectData.projImg31} />
          <img id="cimg" src={this.state.projectData.projImg32} />
          <p id="cp">{this.state.projectData.projDescription3}</p>
          <img id="cimg" src={this.state.projectData.projImg4} />
          <p id="cp">{this.state.projectData.projDescription4}</p>
          <img id="cimg" src={this.state.projectData.projImg5} />
          <img id="cimg" src={this.state.projectData.projImg50} />
          <img id="cimg" src={this.state.projectData.projImg51} />
          <img id="cimg" src={this.state.projectData.projImg52} />
          <img id="cimg" src={this.state.projectData.projImg53} />
          <p id="cp">{this.state.projectData.projDescription5}</p>
          <p id="cp">{this.state.projectData.projDescription50}</p>
          <img id="cimg" src={this.state.projectData.projImg6} />
          <img id="cimg" src={this.state.projectData.projImg60} />
          <p id="cp">{this.state.projectData.projDescription6}</p>
          <p id="cp">{this.state.projectData.projDescription60}</p>
          <p id="cp">{this.state.projectData.projDescription61}</p>
          <p id="cp">{this.state.projectData.projDescription62}</p>
          <p id="cp">{this.state.projectData.projDescription63}</p>
          <img id="cimg" src={this.state.projectData.projImg7} />
        </div>
      </div>
    );
  }
}

export default About;
