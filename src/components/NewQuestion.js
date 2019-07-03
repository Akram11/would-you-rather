import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Media from 'react-bootstrap/Media'
import { handleAddQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'


class NewQuestion extends Component {

        state = {
            optionOne: '',
            optionTwo: '',
            toHome: false
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
                optionTwo: '',
                toHome: true
            }))

            console.log("after dispatch", this.state)
        }

        render() {

            if (this.state.toHome === true) {
                return <Redirect to = '/' />
            }
            return (
                <div className='container'>
                    <h2 className='center'> Create a new question</h2>
                    <h3>Would you rather...</h3>
                    <Media>
                        <img
                            width={64}
                            height={64}
                            className="mr-3"
                            src= {this.props.avatarURL}
                            alt="user Avatar"
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

    function mapStateToProps({ authedUser, users }) {
        return {
          avatarURL: users[authedUser].avatarURL
        };
      }

export default connect(mapStateToProps)(NewQuestion)