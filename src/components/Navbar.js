import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import { Form, FormControl } from "react-bootstrap";
import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

class Nav extends Component {
  handleLogout = e => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(setAuthedUser(""));
  };

  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark" className="nav-bar">
          <NavLink className="nav-elm" to="/" exact>
            Home
          </NavLink>
          <NavLink className="nav-elm" to="/new" exact>
            New Question
          </NavLink>
          <NavLink className="nav-elm" to="/Leader-Board">
            Leader Board
          </NavLink>

          <img
            width={64}
            height={64}
            className="mr-3"
            src={this.props.avatarURL}
            alt="Generic placeholder"
          />

          <span>Hello, {this.props.name}</span>

          <Button variant="outline-light" onClick={this.handleLogout}>
            sign out
          </Button>
        </Navbar>
      </>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    name: users[authedUser].name,
    avatarURL: users[authedUser].avatarURL
  };
}
export default connect(mapStateToProps)(Nav);
