import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class NewQuestion extends Component {

    state = {
        optionOne: '',
        optionTwo: ''
    }

    handleChange = (e) => {
        const option = e.target.value
        const key = e.target.id
        key === 'optionOne' ?
            this.setState((state) => ({
                ...state,
                optionOne: option
            })) : this.setState((state) => ({
                ...state,
                optionTwo: option
            }))
    }

    handleSubmit = (e) => {
        e.preventDefault()

    }

    render() {
        return (
            <div className='container'>
                <h2 className='center'> Create a new question</h2>
                <h3>Would you rather...</h3>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Control size="lg" type="text" placeholder="first option" id="optionOne" onChange={this.handleChange} />
                        <h4>OR</h4>
                        <Form.Control size="lg" type="text" placeholder="second option" id="optionTwo" onChange={this.handleChange} />
                        <Button variant="outline-secondary" size="lg" block>Submit</Button>
                        <span> {this.state.option}</span>
                    </Form.Group>
                </Form>
                {this.state.optionOne}
                {this.state.optionTwo}
            </div>
        )
    }
}


export default connect()(NewQuestion)