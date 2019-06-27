import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserCard from './UserCard'

class LeaderBoard extends Component {
  render() {
    const usersIDs = this.props.usersIDs;
    const users = this.props.users;
    console.log(this.props);
    return (
      <div className='container'>
        <h1>Leader Board</h1>
        {usersIDs.map(id => (
            <li key= {id}>
                { users[id].name}{ users[id].questions.length } {Object.keys(users[id].answers).length}
                {  }
            <UserCard />
          </li>
        ))}
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    usersIDs: Object.keys(users),
    users,
  };
}

export default connect(mapStateToProps)(LeaderBoard);
