import { saveQuestion } from '../utils/API'



export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'

export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}
export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export function handleAddQuestion(optionOne, optionTwo) {
    console.log('action', optionOne, optionTwo)
    return (dispatch, getState) => {
        const { authedUser } = getState()

        return saveQuestion({
            author: authedUser,
            optionOneText: optionOne,
            optionTwoText: optionTwo,
        })
            .then((question) => dispatch(addQuestion(question)))


    }
}
