import React, { Component } from "react";
import QuestionCard from "./QuestionCard";
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";

class QuestionsContainer extends Component {
  state = {
    answered: true
  };

  changeView = e => {
    this.setState(() => ({ answered: !this.state.answered }));
  };

  render() {
    console.log("inside props", this.state);
    return (
      <div className="container">
        <Nav fill variant="tabs" defaultActiveKey="#">
          <Nav.Item>
            <Nav.Link href="#" value="answered" onClick={this.changeView}>
              Answered Q's
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="link-1"
              value="answered"
              onClick={this.changeView}
            >
              Unanswered Q's
            </Nav.Link>
          </Nav.Item>
          <Nav.Item />
        </Nav>
        {this.state.answered ? (
          this.props.answeredQs.map(id => (
            <li key={id}>
              <QuestionCard id={id} status="answered" />
            </li>
          ))
        ) :
          this.props.unansweredQs.map(id => (
            <li key={id}>
              <QuestionCard id={id} status="unswered" />
            </li>
          ))
        }
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }) {
  const questionIds = Object.keys(questions).sort(
    (a, b) => questions[a].timestamp - questions[b].timestamp
  );
  const answeredQs = Object.keys(users[authedUser].answers);
  return {
    questionIds,
    answeredQs,
    unansweredQs: questionIds.filter(q => !answeredQs.includes(q))
  };
}

export default connect(mapStateToProps)(QuestionsContainer);
