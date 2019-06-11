import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class NewQuestion extends Component {

    render() {
        return (
            <div className='container'>
                <h2 className='center'> Create a new question</h2>
                <h3>Would you rather...</h3>
                <Form>
                    <Form.Group>
                        <Form.Control size="lg" type="text" placeholder="first option" />
                        <h4>OR</h4>
                        <Form.Control size="lg" type="text" placeholder="second option" />
                        <Button variant="outline-secondary" size="lg" block>Submit</Button>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}


export default connect()(NewQuestion)