import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared'
import QuestionsContainer from './QuestionsContainer'
import NewQuestion from './NewQuestion';
import UnansweredQuestion from './UnansweredQuestion'
import LeaderBoard from './LeaderBoard'
import AnsweredQuestion from './AnsweredQuestion'
import UserCard from './UserCard'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }


  render() {
    return (
        <div className="App">
        {this.props.loading === true
            ? null
            :<>
            {/* <NewQuestion />  */}
            <AnsweredQuestion  match={{params: {id: '6ni6ok3ym7mf1p33lnez'}}}/>
            {/* <LeaderBoard /> */}
            {/* <UserCard /> */}
            {/* <QuestionsContainer /> */}
            {/* {<UnansweredQuestion />} */}
          
            </>}
        </div>
    );
  }
}


function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);