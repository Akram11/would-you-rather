import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Media from 'react-bootstrap/Media';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { connect } from 'react-redux';
import { Badge } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';

class AnsweredQuestion extends Component {
  render() {
    const { authedUser, users, questions, id } = this.props;

    if (!questions.hasOwnProperty(id)) {
      return <Redirect to='/not-found' />;
    }
    const authorID = questions[id].author,
      authorName = users[authorID].name,
      avatarURL = users[authorID].avatarURL,
      AuthedAnswer = users[authedUser].answers[id],
      OptionOneVotes = questions[id].optionOne.votes.length,
      OptionTwoVotes = questions[id].optionTwo.votes.length,
      totalVotes = OptionTwoVotes + OptionOneVotes;

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
        <Link className='nav-elm' to='/'>
          Back to Home
        </Link>
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
