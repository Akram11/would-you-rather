import React, { Component } from 'react'
import Question from './Question'
import { connect } from "react-redux";

class QuestionsContainer extends Component {

    render() {
        console.log("inside props", this.props)
        return (
            <div className="container">
                answered
                { this.props.answeredQs.map((id) => (
                    <li key={id}>
                        <Question id={id} />
                    </li>
                ))}
                <div>
                    unansweredQs
                { this.props.unansweredQs.map((id) => (
                        <li key={id}>
                            <Question id={id} />
                        </li>
                    ))}

                </div>
            </div>
        )
    }

}


function mapStateToProps({ questions, users, authedUser }) {

    const questionIds = Object.keys(questions).sort((a, b) => questions[a].timestamp - questions[b].timestamp)
    const answeredQs =  Object.keys(users[authedUser].answers)
    return {
        questionIds,
        answeredQs,
        unansweredQs:  questionIds.filter(q => !answeredQs.includes(q)),
    }
}


export default connect(mapStateToProps)(QuestionsContainer)