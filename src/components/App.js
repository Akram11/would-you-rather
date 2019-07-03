import React, { Component, Fragment } from 'react';
import { routerArray } from './routes/routerArray';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import QuestionsContainer from './QuestionsContainer';
import NewQuestion from './NewQuestion';
import UnansweredQuestion from './UnansweredQuestion';
import LeaderBoard from './LeaderBoard';
import AnsweredQuestion from './AnsweredQuestion';
import UserCard from './UserCard';
import Login from './Login';
import Nav from './Navbar';

class App extends Component {
  render() {
    console.log(this.props);
    const { match } = this.props;

    return (
      <div>
        <Nav />
        <div>
          <Switch>
            <Route path='/home' render={() => <h1>he</h1>} />
            <Route path='/new' component={NewQuestion} />
            <Route path='/Leader-Board' component={LeaderBoard} />
            <Route path='/results/:id' component={AnsweredQuestion} />
            <Route path='/question/:id' component={UnansweredQuestion} />
          </Switch>
        </div>
      </div>
    );
  }
}

{
  /* 
<Route path='/home' render={() => <h1>he</h1>} />
<Route path='/new' component={NewQuestion} />
<Route path='/Leader-Board' component={LeaderBoard} />
<Route path='/results/:id' component={AnsweredQuestion} />
<Route path='/question/:id' component={UnansweredQuestion} />
> */
}
// function mapStateToProps({ authedUser, users, questions }) {
//   return {
//     loading: authedUser === null || users === {} || questions === {},
//     authedUser
//   };
// }

export default App;

// // TO DO :
// - FIX ROUTING AND RENDERING
// - show user names on login page
// - SHOW LeaderBoard ACCORDING TO SCORE VALUE
// - COVER 404 CASES , LINKS THAT HAVE NO ID , LINKS THAT SHOULD NOT BE ACCESSES WITHOUT THE RIGHT CREDENTIALS
// - sort leader board based on Score
