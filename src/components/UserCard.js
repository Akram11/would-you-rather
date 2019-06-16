import React, {Component} from 'react'
import Media from 'react-bootstrap/Media';

class UserCard extends Component{

    render(){
        return(
            <div className = 'container'>
                <div className = 'user'>
                          <Media>
            <img
              width={64}
              height={64}
              className='mr-3'
              src='https://st2.depositphotos.com/9223672/12056/v/950/depositphotos_120568248-stock-illustration-male-face-avatar-logo-template.jpg'
              alt='Generic placeholder'
            />
            <Media.Body>
                Questions
                Answeres
                Score
             
            </Media.Body>
          </Media>
                </div>
             </div>
        )
    }
}

export default UserCard