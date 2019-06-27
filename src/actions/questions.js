import { saveQuestion, saveQuestionAnswer } from '../utils/API'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'

export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function saveAnswer({authedUser, qid, answer}) {
    return {
        type: SAVE_QUESTION_ANSWER,
        authedUser,
        qid,
        answer
    }
}

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export function handleSaveQuestionAnswer(info) {
    return (dispatch) => {
        dispatch(saveAnswer(info))

        return saveQuestionAnswer(info)
            .catch((e)=>{
                console.log('Error')
            })
    }
}

export function handleAddQuestion(optionOne, optionTwo) {
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
