import React, { Component } from 'react'
import Question from './Question'
import { connect } from "react-redux";

class QuestionsContainer extends Component {

    render() {
        //console.log("answered", [].concat.apply([], this.props.answered))
        console.log("inside props",this.props)
        const {users, questions, authedUser} = this.props
        return (
   
            <div className="container">
                QuestionsContainer
                {/* {authedUser}
                 {this.props.questions.id.map((id) => (
                    <li key={id}>
                        <Question id={id} />
                    </li>
                ))} */}
            </div>
        )
    }

}


function mapStateToProps({ authedUser, users, questions }) {

   const  questionsIds = questions && Object.keys(questions)
   //const authedUserAnswers = authedUser ? users[authedUser].answers : null;

   const   authedUserAnswers =  (authedUser !== null) ? 
        users[authedUser].name
   
   :  ("authed is null")
   console.log(authedUserAnswers)
  // const authedUserAnswers = authedUser ? users[authedUser].answers : null;
    return {
        users,
        authedUserAnswers,
        questions,
        authedUser,
        questionsIds
    }
 
}

// const authedUserAnswers = users[authedUser]
// questions: questionsIds,
// authedUserAnswers,
// authedUser

export default connect(mapStateToProps)(QuestionsContainer)