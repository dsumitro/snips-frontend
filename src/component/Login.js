import React from "react";
import axios from "axios";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: ""
    };
  }

  onLogin = async userData => {
    await axios.post("http://localhost:5000/api/login", userData);
  };
  //uses newer arrow syntax to bind method to this
  handleChange = (event, field) => {
    //capture input data from the event
    const { value } = event.target;
    //update state
    this.setState({
      [field]: value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    const userData = this.state;
    this.onLogin(userData);
  };

  render() {
    return (
      <section class="userInfo">
        <h3>Log in</h3>
        <form id="newUser" onSubmit={this.handleSubmit}>
          <div>
            Username
            <br />
            <input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={event => this.handleChange(event, "name")}
            />
          </div>
          <div>
            Password
            <br />
            <input
              type="text"
              id="password"
              name="password"
              value={this.state.password}
              onChange={event => this.handleChange(event, "password")}
            />
          </div>

          <button type="submit">Sign up!</button>
        </form>
      </section>
    );
  }
}
