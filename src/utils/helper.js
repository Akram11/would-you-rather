
export function formatQuestion(question, author ,authedUser){
    const {id, text, optionOne, optionTwo} = question
    const {name, avatarURL} = author

    return{
        id,
        name,
        avatar: avatarURL,
        text,
        hasAnswered: (optionOne.votes.includes(authedUser) ||  optionTwo.votes.includes(authedUser)) ? true : false,
    }
}