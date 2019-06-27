import React, { Component } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';

class Login extends Component {
  handleChange = e => {
    console.log(e.target);
  };
  render() {
    const { usersIDs, users } = this.props;
    return (
      <div className='container'>
        <div className='login'>
          <h1>Login</h1>
          <Dropdown variant='secondary' size='lg'>
            <Dropdown.Toggle
              id='dropdown-basic '
              size='md'
              variant='secondary'
              block
            >
              Choose user
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {usersIDs.map(uid => (
                <Dropdown.Item
                  href='#/action-2'
                  key={uid}
                  id={uid}
                  onSelect = {this.handleChange}
                >
                  {users[uid].name}
                </Dropdown.Item>
              ))}
              {/* <Dropdown.Item href='#/action-2'>user 2 </Dropdown.Item>
            <Dropdown.Item href='#/action-3'>user 3</Dropdown.Item> */}
            </Dropdown.Menu>
          </Dropdown>
          <Button variant='outline-secondary'> Login </Button>
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
