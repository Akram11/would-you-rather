import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserCard from './UserCard';

class LeaderBoard extends Component {
  render() {
    const usersIDs = this.props.usersIDs;
    const users = this.props.users;
    console.log('oshfoh');
    return (
      <div className='container'>
        <h1>Leader Board</h1>
        <ul>
          {usersIDs.map(id => (
            <li key={id}>
              <UserCard
                name={users[id].name}
                questionsNo={users[id].questions.length}
                answersNo={Object.keys(users[id].answers).length}
                avatarURL={users[id].avatarURL}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    usersIDs: Object.keys(users),
    users
  };
}

export default connect(mapStateToProps)(LeaderBoard);
