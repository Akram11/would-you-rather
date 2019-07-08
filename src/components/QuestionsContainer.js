import React, { Component } from "react";
import QuestionCard from "./QuestionCard";
import { connect } from "react-redux";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

class QuestionsContainer extends Component {
  render() {
    return (
      <div className="container">
        <Tabs>
          <Tab eventKey="home" title="Answered Questions">
            {this.props.answeredQs.map(id => (
              <li key={id}>
                <QuestionCard id={id} status="answered" />
              </li>
            ))}
          </Tab>
          <Tab eventKey="profile" title="Unanswered Questions">
            {this.props.unansweredQs.map(id => (
              <li key={id}>
                <QuestionCard id={id} status="unanswered" />
              </li>
            ))}
          </Tab>
        </Tabs>
      </div> 
    );
  }
}

function mapStateToProps({ questions, users, authedUser }) {
  const questionIds = Object.keys(questions).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );
  const answeredQs = Object.keys(users[authedUser].answers);
  return {
    questionIds,
    answeredQs,
    unansweredQs: questionIds.filter(q => !answeredQs.includes(q))
  };
}

export default connect(mapStateToProps)(QuestionsContainer);
