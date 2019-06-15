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
        Would you Rather ...
      </Form.Label>
      <Col sm={5}>
        <Form.Check
          type="radio"
          label="first radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
            OR
        <Form.Check
          type="radio"
          label="third radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
      </Col>
    </Form.Group>
  </fieldset>


  <Form.Group as={Row}>
    <Col sm={{ span: 10, offset: 2 }}>
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

