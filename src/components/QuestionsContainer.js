import React, { Component } from 'react'
import Question from './Question'
import { connect } from "react-redux";

class QuestionsContainer extends Component {

    render() {
        return (
            <div className="container">
                QuestionsContainer
                {this.props.questionIds.map((id) => (
                    <li key={id}>
                        <Question id={id} />
                    </li>
                ))}
            </div>
        )
    }

}


function mapStateToProps({ questions }) {
    return {
        questionIds: Object.keys(questions)
        .sort((a,b)=>questions[a].timestamp - questions[b].timestamp )
    }
}


export default connect(mapStateToProps)(QuestionsContainer)