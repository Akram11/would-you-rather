import React, { Component } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../../actions/shared';
import App from '../App';
import Login from '../Login';

class Routes extends Component {
  // componentWillMount() {
  // }
  componentDidMount() {
    this.props.dispatch(handleInitialData());
    if (this.props.authedUser === null) {
      this.props.history.push('/login');
    } else {
      this.props.history.push('/');
    }
    console.log(this.props);
  }

  Notfound = () => {
    return <h1>Notfound</h1>;
  };

  render() {
    //const { autherUser } = this.props;
    console.log(this.props);
    // if (this.props.loading) {
    //   return <h1>sssfsf/</h1>;
    // }
    return (
      <>
        <Switch>
          <Route
            exact
            path='/'
            render={() =>
              this.props.authedUser === null ? (
                <Redirect to='/login' />
              ) : (
                <App />
                // match={this.props.match}
              )
            }
          />
          <Route path='/login' component={Login} />
          <Route component={this.Notfound} />
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
