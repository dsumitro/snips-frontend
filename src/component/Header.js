import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class Header extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <header class="default-header">
        <nav>
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
          <Link to="snippets">Snippets</Link>
          <Link to="account">Account</Link>
          <Link to="signup">Sign up</Link>
          <Link to="login"> Login</Link>
        </nav>
      </header>
    );
  }
}
