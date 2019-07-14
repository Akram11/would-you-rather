import React, { Component } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../../actions/shared';
import App from '../App';
import Login from '../Login';
import NotFound from '../NotFound';
import UnansweredQuestion from '../UnansweredQuestion';

class Routes extends Component {
  state = {
    entryLocation: '',
    firstTimeLoad: true
  };

  componentDidMount() {
    console.log('component did mount');
    console.log('location:', this.props.location);
    this.setState({ entryLocation: this.props.location.pathname });
    this.props.dispatch(handleInitialData());
    if (this.props.authedUser === null) {
      this.props.history.push('/login');
      console.log('in if');
    } else {
      console.log('in else');
      this.props.history.push(this.sate.entryLocation);
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('did update');
    console.log(prevProps, prevState);
    if (
      this.props.authedUser &&
      this.state.firstTimeLoad &&
      this.state.entryLocation
    ) {
      this.props.history.push(this.state.entryLocation);
      this.setState({ firstTimeLoad: false });
    }
  }

  render() {
    console.log('autherduser!!!!', this.props.authedUser);
    console.log('state', this.state);
    console.log('match', this.props.match);
    return (
      <>
        <Switch>
          <Route
            // exact
            path='/'
            render={() => (!this.props.authedUser ? <Login /> : <App />)}
          />
          {/*<Route path='/question/:id' component={UnansweredQuestion} />*/}
          <Route exact path='/login' component={Login} />
          <Route exact path='/not-found' component={NotFound} />
          {/*<Redirect to="/not-found" />*/}
        </Switch>
      </>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
    authedUser
  };
}
const RootWithAuth = withRouter(connect(mapStateToProps)(Routes));
export default RootWithAuth;
