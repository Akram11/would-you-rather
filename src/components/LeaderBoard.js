import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserCard from './UserCard';
import orderBy from 'lodash/orderBy';

class LeaderBoard extends Component {
  render() {
    const usersIDs = this.props.usersIDs;
    const ArrayOfUsersWithScore = this.props.ArrayOfUsersWithScore;
    const sorted = orderBy(ArrayOfUsersWithScore, ['score'], ['desc']);
    console.log(this.props.ArrayOfUsersWithScore);
    console.log('sorted', sorted);

    return (
      <div className='container'>
        <h1>Leader Board</h1>
        <ul className='flex'>
          {sorted.map(user => (
            <li key={user.id}>
              <UserCard
                name={user.name}
                questionsNo={user.questions.length}
                answersNo={Object.keys(user.answers).length}
                avatarURL={user.avatarURL}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  let ArrayOfUsers = Object.keys(users).map(key => {
    return users[key];
  });

  let ArrayOfUsersWithScore = ArrayOfUsers.map(user => {
    return {
      ...user,
      score: user.questions.length + Object.keys(user.answers).length
    };
  });
  return {
    usersIDs: Object.keys(users),
    ArrayOfUsersWithScore
  };
}

export default connect(mapStateToProps)(LeaderBoard);
