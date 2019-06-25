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
        <Nav user= {this.props.authedUser}/>
        <div className="App">
        {this.props.loading === true
            ? null
            :<div>
              <Route path ='/' exact component={QuestionsContainer} />
              <Route path = '/new' component = {NewQuestion } />
              <Route path = '/Leader-Board' component ={LeaderBoard} />
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


function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
    authedUser
  }
}

export default connect(mapStateToProps)(App);