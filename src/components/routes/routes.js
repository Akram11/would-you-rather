import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../../actions/shared';
import App from '../App';
import Login from '../Login';
import NotFound from '../NotFound';

class Routes extends Component {
  state = {
    entryLocation: '',
    firstTimeLoad: true
  };

  componentDidMount() {
    this.setState({ entryLocation: this.props.location.pathname });
    this.props.dispatch(handleInitialData());
    if (this.props.authedUser === null) {
      this.props.history.push('/login');
    } else {
      this.props.history.push(this.sate.entryLocation);
    }
  }

  componentDidUpdate(prevProps, prevState) {
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
    return (
      <>
        <Switch>
          <Route
            // exact
            path='/'
            render={() => (!this.props.authedUser ? <Login /> : <App />)}
          />
          <Route exact path='/login' component={Login} />
          <Route component={NotFound} />
          {/* <Route exact path='/not-found' component={NotFound} /> */}
          {/* <Redirect to='/not-found' /> */}
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
