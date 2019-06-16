import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Media from 'react-bootstrap/Media';
import ProgressBar from 'react-bootstrap/ProgressBar'

class UnansweredQuestion extends Component {
  render() {
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
              name Asks:
              <h5> Would you rather?</h5>
              result
              <Form>
                  <Form.Group as={Row}>
                    <Form.Label as='legend' column sm={3} />
                    <Col lg={1}>
                      Opttion One
                    <ProgressBar now={57} />
                    Opttion Two
                    <ProgressBar now={30} />
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

//  function mapsStateToProps({users, questions, authedUser}, {id}) {
//      return

// }

export default UnansweredQuestion;
