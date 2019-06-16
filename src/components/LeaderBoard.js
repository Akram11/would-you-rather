import React, { Component } from 'react'
import { connect } from "react-redux";

class LeaderBoard extends Component{
    render(){
        const usersIDs = this.props.usersIDs
        const users = this.props.users  
        console.log (usersIDs)
        console.log(this.props)
        return(
            <div className="container">
                {usersIDs.map( (id) => (<p>{ users[id].questions.length}</p> ))}
                
            </div>
        )
    }
}

function mapStateToProps({users}){
    return {
        usersIDs: Object.keys(users),
        users
        }
}

export default connect(mapStateToProps)(LeaderBoard)