import React, { Component } from 'react'
import Question from './Question'
import { connect } from "react-redux";

class QuestionsContainer extends Component {

    render() {
        return (
            <div className ="container">
                QuestionsContainer
                {this.props.questionIds.map((id) => (
                    <li>
                        <p>question id: {id}</p>
                        <Question />
                    </li>
                ))}
            <Question />
            </div>
        )
    }

}


function mapStateToProps({ questions }) {
     return {
         questionIds: Object.keys(questions)
     }    
}


export default connect(mapStateToProps)(QuestionsContainer)