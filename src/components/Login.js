import React, { Component } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { Form } from "react-bootstrap";
import {setAuthedUser} from '../actions/authedUser'

class Login extends Component {

  state={
    user: ''
  }
  handleChange = e => {
    const user = e.target.value;
    this.setState(()=>({
     user: user
    }))
  };

  handleSubmit = (e) =>{
    e.preventDefault()
    const { dispatch } = this.props;
    const authedUser = this.state.user
    dispatch(setAuthedUser(authedUser))
  }
  render() {
    const { usersIDs, users } = this.props;
    return (
      <div className="container">
        <div className="login">
          <h1>Login</h1>
          <Form>
          <Form.Control as="select" onChange={this.handleChange}>
            <option> choose user </option>
            {usersIDs.map(uid => (
              <option key={uid} id={uid}>
                {uid}
                {/* {users[uid].name} */}
              </option>
            ))}
          </Form.Control>
          <Button variant="outline-secondary" onClick={this.handleSubmit}  block> Login </Button>
          </Form>
        </div>
      </div>
    );
  }
}

function MapStateToProps({ users }) {
  return {
    usersIDs: Object.keys(users),
    users
  };
}

export default connect(MapStateToProps)(Login);
