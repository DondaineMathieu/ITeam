import React, {Component} from 'react';
import {quizzes, users} from './examples';
import {Link} from 'react-router-dom';

import {HTTP_SERVER_PORT_PICTURES} from './constants.js';



class Question extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
      const c = this.props.current;
      const q = this.props.questions[c];
      const bp =  c > 0 ? <input type="button" value="Previous questions" onClick={this.props.previousQuestion} /> : null; 
      const ba =  c < this.props.questions.length ? <input type="button" value="Next Question" onClick={this.props.nextQuestion} /> : <input type="button" value="See results" onClick="result()" />;

      return (
        <form>
          <div><h1>{q.question}</h1>
          <h3></h3>
          {q.txtAnswers.map(txt => <div><input type='checkbox' /> {txt}</div>)}
          {q.imgAnswers.map(img => <div><input type='checkbox' /> <img src={HTTP_SERVER_PORT_PICTURES + img} /> </div>)}

          {bp}
          {ba}
          {/* { 

             if (question.state == null) {
              <input type="button" value="Validate" onClick="validate()" />      
            }
          } */}

          </div>
        </form>
      )
    }

    result() {
    }

    validate() {
      this.questions.state = "validate";
    }

  }

class Quizz extends Component {

    constructor(props) {
        super(props);
        this.quizz = quizzes.filter(q=> q._uid == this.props.match.params.id )[0];
        this.state = {current : 0};
    }

    nextQuestion() {
      let newIndex = this.state.current+1;
      this.setState({current:newIndex});
    }

    previousQuestion() {
      let newIndex = this.state.current-1;
      this.setState({current:newIndex});
    }

  render() {
    return (
     <div> 
       <h1> {this.quizz.name} </h1>
      <Question current={this.state.current} questions={this.quizz.questions} nextQuestion={() => this.nextQuestion()} previousQuestion={() => this.previousQuestion()} />
      </div>

    )
  }
}

export default Quizz;