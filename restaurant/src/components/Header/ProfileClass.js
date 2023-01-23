import { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
    };
    console.log("constructor");
  }
  componentDidMount() {
    console.log("componentDidMount" + this.props.name);
  }
  componentDidCatchUp() {
    console.log("componentDidCatchUp" + this.props.name);
  }
  componentWillUnmount() {
    console.log("componentWillUnmount" + this.props.name);
  }
  componentDidUpdate() {
    console.log("componentDidUpdate" + this.props.name);
  }

  render() {
    console.log("render" + this.props.name);
    return (
      <div>
        <h3>{this.props.name} Kumar</h3>
        <p>count : {this.state.count}</p>
        <p>count2 : {this.state.count2}</p>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Add count
        </button>
        <button
          onClick={() => {
            this.setState({ count2: this.state.count2 + this.state.count });
          }}
        >
          Add count2
        </button>
      </div>
    );
  }
}

export default Profile;
