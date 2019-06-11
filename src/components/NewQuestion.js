import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'

class NewQuestion extends Component {

    render() {
        return (
            <div className='container'>
                <h2 className='center'>
                    Create a new question
                </h2>

                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicChecbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    Submit
                
                </Form>
            </div>
        )
    }
}


export default NewQuestion