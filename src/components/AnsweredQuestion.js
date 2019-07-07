import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Media from 'react-bootstrap/Media';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { connect } from 'react-redux';
import { Badge } from 'react-bootstrap';

class AnsweredQuestion extends Component {
  render() {
    const { authedUser, users, questions, id } = this.props;
    const authorID = questions[id].author;
    const authorName = users[authorID].name;
    const avatarURL = users[authorID].avatarURL;
    const AuthedAnswer = users[authedUser].answers[id];
    const OptionOneVotes = questions[id].optionOne.votes.length;
    const OptionTwoVotes = questions[id].optionTwo.votes.length;
    const totalVotes = OptionTwoVotes + OptionOneVotes;
    return (
      <div className='container'>
        <div className='question'>
          <Media>
            <img
              width={64}
              height={64}
              className='mr-3'
              src={avatarURL}
              alt='user Avatar'
            />
            <Media.Body>
              Asked by {authorName}
              <h5> Would you rather?</h5>
              results:
              <Form>
                <Form.Group as={Row}>
                  <Form.Label as='legend' />
                  <Col>
                    <div className='votes'>
                      <span>{questions[id].optionOne.text} </span>
                      <Badge pill variant='danger'>
                        {AuthedAnswer === 'optionOne' ? 'You Answered' : ''}
                      </Badge>
                      <ProgressBar
                        max={totalVotes}
                        now={OptionOneVotes}
                        label={`${OptionOneVotes} of ${totalVotes}`}
                      />
                    </div>
                    <div className='votes'>
                      <span>{questions[id].optionTwo.text} </span>
                      <Badge pill variant='danger'>
                        {AuthedAnswer === 'optionTwo' ? 'You Answered' : ''}
                      </Badge>
                      <ProgressBar
                        max={totalVotes}
                        now={OptionTwoVotes}
                        label={`${OptionTwoVotes} of ${totalVotes}`}
                      />
                    </div>
                  </Col>
                </Form.Group>
              </Form>
            </Media.Body>
          </Media>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users, questions, authedUser }, props) {
  const { id } = props.match.params;
  return {
    id,
    authedUser,
    questions,
    users
  };
}

export default connect(mapStateToProps)(AnsweredQuestion);
