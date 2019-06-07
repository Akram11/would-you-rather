import React, { Component } from 'react'
import {connect} from 'react-redux'
import {formatQuestion} from '../utils/helper'
class Question extends Component {

    render() {
        console.log('props:',this.props.authedUser)
        return (
            <div className='question'>
                <div className = 'q-header'>
                    USER asks: 
                </div>
                <div className = 'q-body'>
                <div className = 'asker-info' >
                <img src="https://img.icons8.com/color/48/000000/user.png"
                     alt = "avatar pic"
                     className = 'avatar' />
                <span className = 'asker-name'>Asker Name</span>
                </div>

                <div className = 'poll'>
                    <span> Would you rather? </span>
                    <span> ..... do ....</span>
                    <button> view poll </button>
                </div>
                </div>
                
                
            </div>
        )
    }
}

function mapStateToProps({authedUser, questions}, {id}){
    const question = questions[id]
    const author = question.author

    return{
        authedUser,
        question: formatQuestion(question, author, authedUser),
    }
}


export default connect(mapStateToProps)(Question)