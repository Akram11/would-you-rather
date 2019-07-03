import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../../actions/shared';
import Nav from '../Navbar';
import App from '../App';
import Login from '../Login';
import LeaderBoard from '../LeaderBoard';

class Routes extends Component {
  shouldComponentUpdate(nextProps) {
    console.log(nextProps);
    return false;
  }
  componentWillMount() {
    this.props.dispatch(handleInitialData());
  }
  componentDidMount() {
    // //   this.props.loadging
    // if (this.props.authedUser === null) {
    //   this.props.history.push('/login');
    // } else {
    //   this.props.history.push('/');
    // }
    console.log(this.props);
  }
  render() {
    //const { autherUser } = this.props;
    console.log(this.props);
    // if (this.props.loading) {
    //   return <h1>sssfsf/</h1>;
    // }
    return (
      <>
        <Route
          exact
          path='/'
          render={() =>
            this.props.authedUser === null ? (
              <Redirect to='/login' />
            ) : (
              <App match={this.props.match} />
            )
          }
        />
        <Route path='/login' component={Login} />
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
