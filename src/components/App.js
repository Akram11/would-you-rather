import React, { Component, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import QuestionsContainer from './QuestionsContainer';
import NewQuestion from './NewQuestion';
import UnansweredQuestion from './UnansweredQuestion';
import LeaderBoard from './LeaderBoard';
import AnsweredQuestion from './AnsweredQuestion';
import Login from './Login';
import Nav from './Navbar';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  Notfound = () => {
    return <h1>Notfound</h1>;
  };

  render() {
    return (
      <Router>
        <Fragment>
          {/* {this.props.authedUser === '' ? (
            <Redirect to={'/login'} />
          ) : this.props.loading === true ? null : ( */}
          <div>
            <Nav />
            <Switch>
              <Route path='/login' component={Login} />
              <Route path='/' exact component={QuestionsContainer} />
              <Route path='/new' component={NewQuestion} />
              <Route path='/Leader-Board' component={LeaderBoard} />
              <Route path='/results/:id' component={AnsweredQuestion} />
              <Route path='/question/:id' component={UnansweredQuestion} />
              <Route component={this.Notfound} />
            </Switch>
          </div>

          {
            <div className='App'>
              {console.log('loading', this.props.loading)}
              {/* /*{this.props.loading === true ? <div>loading</div> : <div>
              <Nav />
              <Login />
              <QuestionsContainer /> 
              
            </div>*/}
            </div>
          }
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  return {
    loading: authedUser === null || users === {} || questions === {},
    authedUser
  };
}

export default connect(mapStateToProps)(App);
