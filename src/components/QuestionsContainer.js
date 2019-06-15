import React, { Component } from 'react'
import QuestionCard from './QuestionCard'
import { connect } from "react-redux";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


class QuestionsContainer extends Component {

    render() {
        console.log("inside props", this.props)
        return (
   
            <div className="container">
                answered
                {this.props.answeredQs.map((id) => (
                    <li key={id}>
                        <QuestionCard id = {id} status = 'answered'/>
                    </li>
                ))}
                <div>
                    unansweredQs
                {this.props.unansweredQs.map((id) => (
                        <li key={id}>
                            <QuestionCard id={id} status = 'unswered'/>
                        </li>
                    ))}

                </div>
            </div>
        )
    }

}


function mapStateToProps({ questions, users, authedUser }) {

    const questionIds = Object.keys(questions).sort((a, b) => questions[a].timestamp - questions[b].timestamp)
    const answeredQs = Object.keys(users[authedUser].answers)
    return {
        questionIds,
        answeredQs,
        unansweredQs: questionIds.filter(q => !answeredQs.includes(q)),
    }
 
}


export default connect(mapStateToProps)(QuestionsContainer)