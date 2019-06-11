import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared'
import  QuestionsContainer  from './QuestionsContainer'
import NewQuestion from './NewQuestion';
class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }


  render() {
    return (
      <div className="App">
        hello
        <NewQuestion />
    </div>
    );
  }
}




export default connect()(App);