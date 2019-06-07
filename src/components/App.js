import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared'
import  QuestionsContainer  from './QuestionsContainer'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }


  render() {
    return (
      <div className="App">
        hello
        <QuestionsContainer />
    </div>
    );
  }
}




export default connect()(App);
