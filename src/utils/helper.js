
export function formatQuestion(question, author){
    const {id, optionOne, optionTwo} = question
    const {name, avatarURL} = author

    return{
        id,
        author:name,
        avatar: avatarURL,
        optionOne: optionOne.text,
        optionTwo: optionTwo.text
    }
}

// export function quesiontsState(questions, authedUser){
//     const answered = []
//     const unanswered = []
//     Object.keys(questions).map( q =>)

// }