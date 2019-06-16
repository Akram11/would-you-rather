import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Media from 'react-bootstrap/Media'
import { handleAddQuestion } from '../actions/questions'


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
        const { optionOne, optionTwo } = this.state
        const { dispatch } = this.props
        dispatch(handleAddQuestion(optionOne, optionTwo))

        this.setState(() => ({
            optionOne: '',
            optionTwo: ''
        }))

        console.log("after dispatch", this.state)
    }

    render() {
        return (
            <div className='container'>
                <h2 className='center'> Create a new question</h2>
                <h3>Would you rather...</h3>
                <Media>
                    <img
                        width={64}
                        height={64}
                        className="mr-3"
                        //src\utils\avatars\iconfinder_user_male2_172626 (1).png
                        src="https://st2.depositphotos.com/9223672/12056/v/950/depositphotos_120568248-stock-illustration-male-face-avatar-logo-template.jpg"
                        alt="Generic placeholder"
                    />
                    <Media.Body>
                        <Form>
                            <Form.Group>
                                <Form.Control size="lg" type="text" value={this.state.optionOne} placeholder="first option" id="optionOne" onChange={this.handleChange} />
                                <h4>OR</h4>
                                <Form.Control size="lg" type="text" value={this.state.optionTwo} placeholder="second option" id="optionTwo" onChange={this.handleChange} />
                                <Button variant="outline-secondary" size="lg" block onClick={this.handleSubmit}>Submit</Button>
                                <span> {this.state.option}</span>
                            </Form.Group>
                        </Form>
                    </Media.Body>
                </Media>
            </div>
        )
    }
}


export default connect()(NewQuestion)