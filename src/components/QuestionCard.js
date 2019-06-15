import React, { Component } from 'react'
import {connect} from 'react-redux'
import {formatQuestion} from '../utils/helper'
class Question extends Component {

    render() {
        const {question} = this.props
        console.log('inside question',this.props)
        return (
            <div className='question'>
                <div className = 'q-header'>
                    {question.name} Asks: 
                </div>
                <div className = 'q-body'>
                <div className = 'asker-info' >
                <img src="https://img.icons8.com/color/48/000000/user.png"
                     alt = "avatar pic"
                     className = 'avatar' />
                <span className = 'asker-name'>{question.name}</span>
                </div>

                <div className = 'poll'>
                    <span> Would you rather? </span>
                    <span> {question.optionOne}, OR ...</span>
                    <button> view poll </button>
                </div>
                </div>
                
                
            </div>
        )
    }
}

function mapStateToProps({authedUser,users, questions}, {id}){
    const question = questions[id]
    const author = users[question.author]

    return{
        authedUser,
        question: formatQuestion(question, author, authedUser),
    }
}


export default connect(mapStateToProps)(Question)