import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Form, FormControl } from 'react-bootstrap';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';
import { Redirect } from 'react-router-dom';

class Nav extends Component {
  state = {
    signedout: false
  };

  handleLogout = e => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(setAuthedUser(null));
  };

  render() {
    return (
      <>
        <Navbar bg='dark' variant='dark' className='nav-bar'>
          <Link className='nav-elm' to='/'>
            Home
          </Link>
          <Link className='nav-elm' to='/new'>
            New Question
          </Link>
          <Link className='nav-elm' to='/Leader-Board'>
            Leader Board
          </Link>

          <img
            width={64}
            height={64}
            className='mr-3'
            src={this.props.avatarURL}
            alt='user Avatar'
          />

          <span className='greeting'>Hello, {this.props.name}</span>

          <Button variant='outline-light' onClick={this.handleLogout}>
            sign out
          </Button>
        </Navbar>
      </>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    name: authedUser && users[authedUser].name,
    avatarURL: authedUser && users[authedUser].avatarURL
  };
}
export default connect(mapStateToProps)(Nav);
