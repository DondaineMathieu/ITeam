import React, { Component } from 'react'
import createAnswer from './CreateAnswer';
import createQuestion from './createQuestion';

export default class CreateQuiz extends Component {
  render() {
    return (
      <div>
        <createQuestion/>
        <createAnswer/>
      </div>
    )
  }
}

