import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { Form } from "react-bootstrap";
import { setAuthedUser } from "../actions/authedUser";
import { Redirect } from "react-router-dom";

class Login extends Component {
  state = {
    user: "",
    toHome: false
  };
  handleChange = e => {
    const user = e.target.value;
    this.setState(state => ({
      ...state,
      user: user
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { dispatch } = this.props;
    const authedUser = this.state.user;
    window.localStorage.setItem('user', authedUser);
    dispatch(setAuthedUser(authedUser));
    this.setState(() => ({
      user: "",
      toHome: true
    }));
  };
  render() {
    if (this.state.toHome === true || this.props.authedUser) {
      return <Redirect to="/" />;
    }
    
    const { usersIDs, users } = this.props;
    return (
      <div className="container">
        <div className="login">
          <h1>Login</h1>
          <Form>
            <Form.Control as="select" onChange={this.handleChange}>
              <option> choose user </option>
              {usersIDs.map(uid => (
                <option key={uid} value={uid}>
                  {users[uid].name}
                </option>
              ))}
            </Form.Control>
            <Button
              variant="outline-secondary"
              onClick={this.handleSubmit}
              block
              disabled={this.state.user === "" ? true : false}
            >
              Login
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

function MapStateToProps({ users, authedUser }) {
  return {
    Loading: users === {},
    usersIDs: Object.keys(users),
    users,
    authedUser,
  };
}

export default connect(MapStateToProps)(Login);
