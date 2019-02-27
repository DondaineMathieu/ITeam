import React, { Component } from 'react';
import { quizzes, users } from './examples';
import { Link } from 'react-router-dom';

import { HTTP_SERVER_PORT_PICTURES } from './constants.js';



class Question extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const c = this.props.current;
        const q = this.props.questions[c];
        const bp = c > 0 ? <input type="button" value="Previous questions" onClick={this.props.previousQuestion} /> : null;
        const ba = c < this.props.questions.length - 1 ? <input type="button" value="Next Question" onClick={this.props.nextQuestion} /> : <input type="button" value="See results" onClick={this.props.result} />;
        const bv = <input type="button" onClick={ this.props.calculScore } />

        return (
            <form>
                <div><h1>{q.question}</h1>
                    <h3></h3>
                    {q.txtAnswers.map(txt => <div><button className="checkbox">q</button>{txt}</div>)}
                    {q.imgAnswers.map(img => <div><input type='checkbox' /> <img  src={HTTP_SERVER_PORT_PICTURES + img} /> </div>)}

                    {bp}
                    {ba}
                    {bv}

                    {/*   if (question.state == null) {
                  <input type="button" value="Validate" onClick="validate()" />      
                }
              */}

                </div>
            </form>
        )
    }

}

class Quizz extends Component {

    constructor(props) {
        super(props);
        this.quizz = quizzes.filter(q => q._uid == this.props.match.params.id)[0];
        this.state = { current: 0 };
    }

    nextQuestion() {
        let newIndex = this.state.current + 1;
        this.setState({ current: newIndex });
    }

    previousQuestion() {
        let newIndex = this.state.current - 1;
        this.setState({ current: newIndex });
    }

   /* calculScore() {
        if(this.question.solution == checkedAnswers) {
            this.prompt.score = this.prompt.score+this.question.points;
        }
    }*/

    render() {
        return (
            <div>
                <h1> {this.quizz.name} </h1>
                <Question
                    current={this.state.current}
                    questions={this.quizz.questions}
                    nextQuestion={() => this.nextQuestion()}
                    previousQuestion={() => this.previousQuestion()}
                   /* calculScore={() => this.calculScore()}
                    score={0}*/
                />
            </div>
        )
    }
}

export default Quizz;