import {addQuestion} from '../utils/API'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'RECEIVE_QUESTIONS'

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export function handleAddQuestion(optionOne, OptionTwo){
    return(dispatch, getState) => {
        const { authedUser } = getState()

        return addQuestion({
            author: authedUser,
            optionOne,
            OptionTwo
        })
        .then((question) => dispatch(addQuestion(question)))
    }
}
