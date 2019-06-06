import React from 'react';
import '../App.css';
import { connect } from 'react-redux';

function App() {
  return (
    <div className="App">
      hello
    </div>
  );
}


const mapStateToProps = (state) =>{
  return {
    users: state.users,
    questions: state.questions
  }
}

export default connect(mapStateToProps)(App);
