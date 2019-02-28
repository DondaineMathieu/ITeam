import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { quizzes, users } from './examples';
import QuizzThumbnail from './QuizzThumbnail ';
import { HTTP_SERVER_PORT_PICTURES, HTTP_SERVER_PORT  } from './constants.js';

import axios from 'axios';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {quizzes : []};
        this.loadData();
    }

    async loadData() {
        const quizzes = (await axios.get(HTTP_SERVER_PORT + 'allquestion')).data;  // We need to wait for the response.
        this.setState({quizzes: quizzes});
    } 

    render() {
        return (
            <div>
                <h1>test</h1>
                <Link to={'/newQuizz'}><input type="button" value="Create a new Quizz" /></Link>
                {this.state.quizzes.map(q => <QuizzThumbnail key={q._uid} quizz={q} />)}
                <Link to={'/about'}>About page</Link>
            </div>
        )
    }
}

export default Home;