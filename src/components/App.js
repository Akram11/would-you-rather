import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom'
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared'
import QuestionsContainer from './QuestionsContainer'
import NewQuestion from './NewQuestion';
import UnansweredQuestion from './UnansweredQuestion'
import LeaderBoard from './LeaderBoard'
import AnsweredQuestion from './AnsweredQuestion'
import UserCard from './UserCard'
import Nav from './Navbar'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }


  render() {
    return (
      <Router>
        <Fragment>
        <div className="App">
        {this.props.loading === true
            ? null
            :<div>
              <Nav user= {this.props.username}/>
              <Route path ='/' exact component={QuestionsContainer} />
              <Route path = '/new' component = {NewQuestion } />
              <Route path = '/Leader-Board' component ={LeaderBoard} />
              <Route path = '/results/:id' component = {AnsweredQuestion}/>
              <Route path = '/question/:id' component = {UnansweredQuestion}/>
            {/* <NewQuestion />  */}
            {/* <AnsweredQuestion  match={{params: {id: '6ni6ok3ym7mf1p33lnez'}}}/> */}
            {/* <LeaderBoard /> */}
            {/* <UserCard /> */}
            {/* <QuestionsContainer /> */}
            {/* {<UnansweredQuestion match={{params: {id: 'xj352vofupe1dqz9emx13r'}}}/>} */}
           </div>
            }
         </div>
        </Fragment>
      </Router>
    );
  }
}


function mapStateToProps({ authedUser, users }) {
  return {
    loading: authedUser === null,
    authedUser,
    username: authedUser && users[authedUser].name
  }
}

export default connect(mapStateToProps)(App);