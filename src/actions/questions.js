import {_getQuestions} from '../utils/_DATA'

export const RECEIVE_QUESTIONS = 'REVCEIVE_QUESTIONS'

export const receiveQuestions = () => ({
    type: RECEIVE_QUESTIONS,
    questions,
})

export function handleInitialQuestions(){
    return (dispatch) =>{
        return _getQuestions()
        .then(({questions})=> {
            dispatch(receiveQuestions(questions))
        })
    }
}

// export function receiveQuestions(){
//     return{
//         type: RECEIVE_QUESTIONS,
//         questions,
//     }
// }