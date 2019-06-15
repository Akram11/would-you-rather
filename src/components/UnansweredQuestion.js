import React, {Component} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


class UnansweredQuestion extends Component{

    render(){
        return(
            <div className='container'>
                <Form>
  <fieldset>
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={3}>
        <span>Would you Rather ...</span>
      </Form.Label>
      <Col sm={5}>
        <Form.Check
          type="radio"
          label="first Option"
          name="optionOne"
          id="optionOne"
        />
            OR
        <Form.Check
          type="radio"
          label="Second Option"
          name="optionTwo"
          id="optionTwo"
        />
      </Col>
    </Form.Group>
  </fieldset>


  <Form.Group as={Row}>
    <Col sm={{ span: 5, offset: 3 }}>
      <Button type="submit" block>Submit!</Button>
    </Col>
  </Form.Group>
</Form>
            </div>
        )
    }
}

//  function mapsStateToProps({users, questions, authedUser}, {id}) {
//      return
    
// }


export default UnansweredQuestion

