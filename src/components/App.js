import React, { Component } from 'react';
import {
  Route,
  withRouter
} from 'react-router-dom';
import QuestionsContainer from './QuestionsContainer';
import NewQuestion from './NewQuestion';
import UnansweredQuestion from './UnansweredQuestion';
import LeaderBoard from './LeaderBoard';
import AnsweredQuestion from './AnsweredQuestion';
import Login from './Login';
import Nav from './Navbar';
import NotFound from './NotFound';


class App extends Component {
  render() {
    return (
      <div>
        <Nav />
          <Route exact path='/question/:id' component={UnansweredQuestion} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/not-found' component={NotFound} />
          <Route exact path='/' component={QuestionsContainer} />
          <Route exact path='/new' component={NewQuestion} />
          <Route exact path='/Leader-Board' component={LeaderBoard} />
          <Route exact path='/results/:id' component={AnsweredQuestion} />
      </div>
    );
  }
}

export default withRouter(App);
