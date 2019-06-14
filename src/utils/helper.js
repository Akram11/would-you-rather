
export function formatQuestion(question, author){
    const {id, optionOne, optionTwo} = question
    const {name, avatarURL} = author

    console.log('q:' , question)

    return{
        id,
        name,
        avatar: avatarURL,
        optionOne: optionOne.text,
        optionTwo: optionTwo.text
    }
}