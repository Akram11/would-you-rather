import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helper'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Media from 'react-bootstrap/Media'
import {Link} from 'react-router-dom'


class Question extends Component {

    render() {
        const { question , id } = this.props
        return (
            <div className='question'>
                <div>
                    <Media>
                        <img
                            width={64}
                            height={64}
                            className="mr-3"
                            src="https://st2.depositphotos.com/9223672/12056/v/950/depositphotos_120568248-stock-illustration-male-face-avatar-logo-template.jpg"
                            alt="Generic placeholder"
                        />
                        {<Media.Body>
                            {question.author} Asks:
                        <h5> Would you rather?</h5>
                            <Form>
                                <Form.Group>
                                    <span> {question.optionOne}, OR ...</span>
                                </Form.Group>
                                <Link to={this.props.status === 'answered' ? `/results/${id}` : `/question/${id}`} ><Button variant="outline-secondary" size="sm" block > View Poll</Button></Link>
                            </Form>
                        </Media.Body>}
                    </Media>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
    const question = questions[id]
    const author = users[question.author]

    return {
        authedUser,
        question: question
            ? formatQuestion(question, author, authedUser)
            : null
    }
}


export default connect(mapStateToProps)(Question)