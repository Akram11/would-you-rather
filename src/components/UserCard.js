import React, { Component } from 'react';
import Media from 'react-bootstrap/Media';

class UserCard extends Component {
  render() {
    const { name, questionsNo, answersNo, avatarURL } = this.props;
    const score = questionsNo + answersNo;
    return (
      <div className='container'>
        <div className='user'>
          <Media>
            <img
              width={64}
              height={64}
              className='mr-3'
              src={avatarURL}
              alt='user avatar'
            />
            <Media.Body className='usr-card-info'>
              <span>{name}</span>
              <span>Questions: {questionsNo}</span>
              <span>Answers: {answersNo}</span>
              <span>Score: {score}</span>
            </Media.Body>
          </Media>
        </div>
      </div>
    );
  }
}

export default UserCard;
