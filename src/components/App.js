import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import { Redirect } from 'react-router-dom';
import QuestionsContainer from './QuestionsContainer';
import NewQuestion from './NewQuestion';
import UnansweredQuestion from './UnansweredQuestion';
import LeaderBoard from './LeaderBoard';
import AnsweredQuestion from './AnsweredQuestion';
import UserCard from './UserCard';
import Login from './Login';
import Nav from './Navbar';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  // // TO DO :
  // - FIX ROUTING AND RENDERING
  // - show user names on login page
  // - SHOW LeaderBoard ACCORDING TO SCORE VALUE
  // - COVER 404 CASES , LINKS THAT HAVE NO ID , LINKS THAT SHOULD NOT BE ACCESSES WITHOUT THE RIGHT CREDENTIALS

  render() {
    return (
      <Router>
        <Fragment>
          <Login />
          {/* <div className='App'>
            {console.log('loading',this.props.loading)}
            {this.props.loading === true ? <div>loading</div> : <div>
              <Nav />
              <Login />
              <QuestionsContainer /> 
              
            </div>
              // <div>
              // <Nav />
              //   <Route path='/login' component={Login} />
              //   <Route path='/' exact component={QuestionsContainer} />
              //   <Route path='/new' component={NewQuestion} />
              //   <Route path='/Leader-Board' component={LeaderBoard} />
              //   <Route path='/results/:id' component={AnsweredQuestion} />
              //   <Route path='/question/:id' component={UnansweredQuestion} />
              // </div>
            }
          </div> */}
        </Fragment>
       </Router>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  return {
    loading:( authedUser === null || users === {} || questions === {}),
    authedUser
  };
}

export default connect(mapStateToProps)(App);

