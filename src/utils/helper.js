
export function formatQuestion(question, author ,authedUser){
    const {id, text, optionOne, optionTwo} = question
    const {name, avatarURL} = author

    return{
        id,
        name,
        avatar: avatarURL,
        text: optionOne.text,
        hasAnswered: (optionOne.votes.includes(authedUser) ||  optionTwo.votes.includes(authedUser)) ? true : false,
    }
}

// export function quesiontsState(questions, authedUser){
//     const answered = []
//     const unanswered = []
//     Object.keys(questions).map( q =>)

// }