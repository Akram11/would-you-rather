import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Media from 'react-bootstrap/Media';
import { connect } from 'react-redux'
import { handleSaveQuestionAnswer } from '../actions/questions';

class UnansweredQuestion extends Component {

  state = {
    answer: ''
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const authedUser = this.props.authedUser
    const answer = this.state.answer
    const { dispatch, id } = this.props
    dispatch(handleSaveQuestionAnswer({
      authedUser,
      qid: id,
      answer
    }))
    this.setState(() => ({
     answer : ''
  }))
  }

  handleChange = (e) => {
    const answer = e.target.value
    this.setState(() => ({
      answer
    }))
  }

  render() {
    const { authedUser, users, questions, id } = this.props;
    const authorID = questions[id].author
    const authorName = users[authorID].name;
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
              {authorName} Asks:
              <h5> Would you rather?</h5>
              <Form>
                <fieldset>
                  <Form.Group>
                    <Form.Label as='legend' column sm={3} />
                    <Col lg={9} onChange={this.handleChange}>
                      <Form.Check
                        type='radio'
                        label={questions[id].optionOne.text}
                        name='formHorizontalRadios'
                        id='optionOne'
                        className='votes'
                        value='optionOne'
                      />
                      <Form.Check
                        type='radio'
                        label={questions[id].optionTwo.text}
                        name='formHorizontalRadios'
                        id='OptionTwo'
                        className='votes'
                        value='optionTwo'
                      />
                    </Col>
                  </Form.Group>
                </fieldset>
                <Button variant='outline-secondary' size='sm' block onClick={this.handleSubmit} disabled={this.state.answer === '' ? true : false}>
                  Submit
                </Button>
              </Form>
            </Media.Body>
          </Media>
        </div>
      </div>
    );
  }
}

function mapsStateToProps({ users, questions, authedUser }, props) {
  const { id } = props.match.params;
  return {
    id,
    authedUser,
    questions,
    users
  };

}

export default connect(mapsStateToProps)(UnansweredQuestion);
