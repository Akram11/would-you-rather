import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom'
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared'
import { Redirect } from "react-router-dom";
import QuestionsContainer from './QuestionsContainer'
import NewQuestion from './NewQuestion';
import UnansweredQuestion from './UnansweredQuestion'
import LeaderBoard from './LeaderBoard'
import AnsweredQuestion from './AnsweredQuestion'
import UserCard from './UserCard'
import Login from './Login'
import Nav from './Navbar'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }


  render() {
    return (
      <Router>
        <Fragment>
        <Route path = '/login' component = {Login} />
        <Route path ='/' exact component={QuestionsContainer} />
         <Route path = '/new' component = {NewQuestion } />
         <Route path = '/Leader-Board' component ={LeaderBoard} />
        <Route path = '/results/:id' component = {AnsweredQuestion}/>
        <Route path = '/question/:id' component = {UnansweredQuestion}/>
        <div className="App">
        {this.props.loading === true
            ? null : this.props.authedUser === ''
                   ? <Redirect to= {'login'} />
                   :<div> <Nav />   
                          <Redirect to= {'/'} /></div>                        
                   
          //   :this.props.authedUser !== ''? <div>
          //     <Nav />
          //     <Route path ='/' exact component={QuestionsContainer} />
          //     <Route path = '/new' component = {NewQuestion } />
          //     <Route path = '/Leader-Board' component ={LeaderBoard} />
          //     <Route path = '/results/:id' component = {AnsweredQuestion}/>
          //     <Route path = '/question/:id' component = {UnansweredQuestion}/>
              
          //   {/* <NewQuestion />  */}
          //   {/* <AnsweredQuestion  match={{params: {id: 'xj352vofupe1dqz9emx13r'}}}/> */}
          //   {/* <UserCard /> */}
          //   {/* <QuestionsContainer /> */}
          //   {/* {<UnansweredQuestion match={{params: {id: 'xj352vofupe1dqz9emx13r'}}}/>} */}
          //  </div> :  <Route path = '/login' component = {Login} />
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
  }
}

export default connect(mapStateToProps)(App);