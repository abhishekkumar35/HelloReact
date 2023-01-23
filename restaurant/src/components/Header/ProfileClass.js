import { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
    };
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <h3>Abhishek Kumar</h3>
        <p>count : {this.state.count}</p>
        <p>count2 : {this.state.count2}</p>
        <button onClick={this.setState({ count: this.count + 1 })}>
          Add count
        </button>
        <button onClick={this.setState({ count2: this.count2 + this.count })}>
          Add count2
        </button>
      </div>
    );
  }
}

export default Profile;
