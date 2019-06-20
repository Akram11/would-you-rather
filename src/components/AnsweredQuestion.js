import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Media from 'react-bootstrap/Media';
import ProgressBar from 'react-bootstrap/ProgressBar'
import { connect } from "react-redux";
import { Badge } from 'react-bootstrap'



class AnsweredQuestion extends Component {
  render() {
    console.log(this.props)
    const { authedUser, users, questions, id } = this.props
    const authorID = questions[id].author
    const authorName = users[authorID].name
    const AuthedAnswer = users[authedUser].answers[id]
    const OptionOneVotes = questions[id].optionOne.votes.length
    const OptionTwoVotes = questions[id].optionTwo.votes.length
    const totalVotes = OptionTwoVotes + OptionOneVotes

    console.log('sfsf', AuthedAnswer, OptionOneVotes)
    return (
      <div className='container'>
        <div className='question'>
          <Media>
            <img
              width={64}
              height={64}
              className='mr-3'
              src='https://st2.depositphotos.com/9223672/12056/v/950/depositphotos_120568248-stock-illustration-male-face-avatar-logo-template.jpg'
              alt='Generic placeholder'
            />
            <Media.Body>
              Asked by {authorName}
              <h5> Would you rather?</h5>
              results:
              <Form>
                <Form.Group as={Row}>
                  <Form.Label as='legend' />
                  <Col >
                    <span>{questions[id].optionOne.text}</span>
                    <ProgressBar max={totalVotes} now={OptionOneVotes * 10} label={`${OptionOneVotes} of ${totalVotes}`} />
                    <span>{questions[id].optionTwo.text}</span>
                    <ProgressBar max={totalVotes} now={OptionTwoVotes * 10} label={`${OptionTwoVotes} of ${totalVotes}`} />
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
  const { id } = props.match.params
  return {
    id,
    authedUser,
    questions,
    users
  }

}

export default connect(mapStateToProps)(AnsweredQuestion);
