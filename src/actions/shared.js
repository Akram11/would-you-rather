import {getInitialData} from '../utils/API'


export function handleInitialData(){
    return(dispatch) => {
        return getInitialData()
        .then(({users, questions} )=> {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
        })
    }
}