import React, { Component } from 'react'

class Question extends Component {

    render() {
        return (
            <div className='question'>
                <div className = 'q-header'>
                    USER asks: 
                </div>
                <div className = 'q-body'>
                <div className = 'asker-info' >
                <img src="https://img.icons8.com/color/48/000000/user.png"
                     alt = "avatar pic"
                     className = 'avatar' />
                <span className = 'asker-name'>Asker Name</span>
                </div>

                <div className = 'poll'>
                    <span> Would you rather? </span>
                    <button> view poll </button>
                </div>
                </div>
                
                
            </div>
        )
    }
}


export default Question