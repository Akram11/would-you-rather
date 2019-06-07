
export function formatQuestion(question, author ,authedUser){
    const {id, text, optionOne, optionTwo} = question
    const {name, avatarURL} = author

    console.log('q:' , question)

    return{
        id,
        name,
        avatar: avatarURL,
        text: optionOne.text,
        hasAnswered: (optionOne.votes.includes(authedUser) ||  optionTwo.votes.includes(authedUser)) ? true : false,
    }
}