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
          <div>
            {" "}
            <img id="cimg" src={this.state.projectData.projImg1} />
          </div>
          <div>
            <p id="cp">{this.state.projectData.projDescription1}</p>
          </div>
          <div>
            <img id="cimg" src={this.state.projectData.projImg2} />
          </div>

          <div>
            <img id="cimg" src={this.state.projectData.projImg20} />
          </div>

          <div>
            {" "}
            <p id="cp">{this.state.projectData.projDescription2}</p>
          </div>

          <div>
            {" "}
            <img id="cimg" src={this.state.projectData.projImg3} />
          </div>

          <div>
            <img id="cimg" src={this.state.projectData.projImg30} />
          </div>

          <div>
            <img id="cimg" src={this.state.projectData.projImg31} />
          </div>

          <div>
            <img id="cimg" src={this.state.projectData.projImg32} />
          </div>

          <div>
            {" "}
            <p id="cp">{this.state.projectData.projDescription3}</p>
          </div>

          <div>
            <img id="cimg" src={this.state.projectData.projImg4} />
          </div>

          <div>
            <p id="cp">{this.state.projectData.projDescription4}</p>
          </div>

          <div>
            <img id="cimg" src={this.state.projectData.projImg5} />
          </div>

          <div>
            <img id="cimg" src={this.state.projectData.projImg50} />
          </div>

          <div>
            <img id="cimg" src={this.state.projectData.projImg51} />
          </div>

          <div>
            {" "}
            <img id="cimg" src={this.state.projectData.projImg52} />
          </div>

          <div>
            <img id="cimg" src={this.state.projectData.projImg53} />
          </div>

          <div>
            <p id="cp">{this.state.projectData.projDescription5}</p>
          </div>

          <div>
            <p id="cp">{this.state.projectData.projDescription50}</p>
          </div>

          <div>
            <img id="cimg" src={this.state.projectData.projImg6} />
          </div>

          <div>
            <img id="cimg" src={this.state.projectData.projImg60} />
          </div>

          <div>
            {" "}
            <p id="cp">{this.state.projectData.projDescription6}</p>
          </div>

          <div>
            <p id="cp">{this.state.projectData.projDescription60}</p>
          </div>

          <div>
            <p id="cp">{this.state.projectData.projDescription61}</p>
          </div>

          <div>
            <p id="cp">{this.state.projectData.projDescription62}</p>
          </div>

          <div>
            <p id="cp">{this.state.projectData.projDescription63}</p>
          </div>

          <div>
            {" "}
            <img id="cimg" src={this.state.projectData.projImg7} />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
