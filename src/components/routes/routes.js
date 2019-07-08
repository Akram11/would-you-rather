import React, { Component } from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../../actions/shared";
import App from "../App";
import Login from "../Login";

class Routes extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
    if (this.props.authedUser === null) {
      this.props.history.push("/login");
    } else {
      this.props.history.push("/");
    }
  }

  Notfound = () => {
    return <h1>Notfound</h1>;
  };

  render() {
    return (
      <>
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              this.props.authedUser === null ? (
                <Redirect to="/login" />
              ) : (
                <App />
              )
            }
          />
          <Route path="/login" component={Login} />
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
