import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { quizzes, users } from './examples';
import { HTTP_SERVER_PORT_PICTURES } from './constants.js';


class QuizzThumbnail extends Component {

    render() {
		return (
			<div class="one_question">
                <h3>{this.props.quizz.name}</h3>
                <Link to={'/quizz/' + this.props.quizz._id}><img src={HTTP_SERVER_PORT_PICTURES + this.props.quizz.icon} />  </Link>
            </div>
        );
    }
}

export default QuizzThumbnail;
