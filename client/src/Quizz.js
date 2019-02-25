import React, {Component} from 'react';
import {quizzes, users} from './examples';

import {HTTP_SERVER_PORT_PICTURES} from './constants.js';



class Question extends Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
        <div><h1>{this.props.question.question}</h1>
        {this.props.question.txtAnswers.map(txt => <div><input type='checkbox' /> {txt}</div>)}
        {this.props.question.imgAnswers.map(img => <div><input type='checkbox' /> <img src={HTTP_SERVER_PORT_PICTURES + img} /> </div>)}
        </div>)
    }
  }

class Quizz extends Component {

    constructor(props) {
        super(props);
        this.quizz = quizzes.filter(q=> q._uid == this.props.match.params.id )[0];
        this.state = {current : 1};
    }
  render() {
    return (
     <div> <h1>{this.quizz.name}</h1>

      <Question question={this.quizz.questions[this.state.current]} />
      </div>

    )
  }
}

export default Quizz;