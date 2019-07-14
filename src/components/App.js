import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import QuestionsContainer from './QuestionsContainer';
import NewQuestion from './NewQuestion';
import UnansweredQuestion from './UnansweredQuestion';
import LeaderBoard from './LeaderBoard';
import AnsweredQuestion from './AnsweredQuestion';
import Login from './Login';
import Nav from './Navbar';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <div>
            <Nav />
            <Switch>
              <Route path='/login' component={Login} />
              <Route path='/' exact component={QuestionsContainer} />
              <Route path='/new' component={NewQuestion} />
              <Route path='/Leader-Board' component={LeaderBoard} />
              <Route path='/results/:id' component={AnsweredQuestion} />
              <Route path='/question/:id' component={UnansweredQuestion} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default App;
