import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {handleAddQuestion} from '../actions/questions'


class NewQuestion extends Component {

    state = {
        optionOne: '',
        optionTwo: ''
    }

    handleChange = (e) => {
        const option = e.target.value
        const id = e.target.id
        id === 'optionOne' ?
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
        const  optionOne = this.state.optionOne
        const  optionTwo = this.state.optionTwo
        const {dispatch} = this.props
        console.log('options',optionOne, optionTwo)
        dispatch(handleAddQuestion(optionOne, optionTwo))
    }

    render() {
        return (
            <div className='container'>
                <h2 className='center'> Create a new question</h2>
                <h3>Would you rather...</h3>
                <Form>
                    <Form.Group>
                        <Form.Control size="lg" type="text" placeholder="first option" id="optionOne" onChange={this.handleChange} />
                        <h4>OR</h4>
                        <Form.Control size="lg" type="text" placeholder="second option" id="optionTwo" onChange={this.handleChange} />
                        <Button variant="outline-secondary" size="lg" block onClick={this.handleSubmit}>Submit</Button>
                        <span> {this.state.option}</span>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}


export default connect()(NewQuestion)